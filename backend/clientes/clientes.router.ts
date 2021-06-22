import {Router} from '../common/router';
import * as restify from 'restify'
import {Cliente} from './cliente.model';

// const clientsList = [
//     {name:'thiago pereira dos santos', email:'tthiagopereira7@gmail.com', status:'inadiplente', titulo: 'atraso', valor: '1.000'},
//     {name:'kethlen', email:'kethlen@gmail.com', status:'inadiplente', titulo: 'atraso', valor: '1.000'},
//     {name:'Marcley', email:'marcley@gmail.com', status:'inadiplente', titulo: 'atraso', valor: '1.000'},
//     {name:'Teste', email:'teste@gmail.com', status:'inadiplente', titulo: 'atraso', valor: '1.000'},
//     {name:'tetete', email:'tetete@gmail.com', status:'inadiplente', titulo: 'atraso', valor: '1.000'},
// ]

class ClientesRouter extends Router {
    applyRoutes(apllication: restify.Server)
    {
        apllication.get('/clientes', (req, resp, next) =>{
            Cliente.find().then(clientes=>{
                resp.json(clientes)
                return next()
            })
        })

        apllication.get('/clientes/:id',(req,resp, next) => {
            Cliente.findById(req.params.id).then(cliente => {
                if(cliente) {
                    resp.json(cliente)
                    return next()
                }
                resp.send(404)
                return next()
            })
        })

        apllication.post('/clientes', (req, resp, next) => {
            let client = new Cliente(req.body)
            client.save().then(client => {
                resp.json(client)
                return next
            })
        })
    }
}

export const clienteRouter = new ClientesRouter()
