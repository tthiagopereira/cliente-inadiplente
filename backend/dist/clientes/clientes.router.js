"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clienteRouter = void 0;
const router_1 = require("../common/router");
const cliente_model_1 = require("./cliente.model");
// const clientsList = [
//     {name:'thiago pereira dos santos', email:'tthiagopereira7@gmail.com', status:'inadiplente', titulo: 'atraso', valor: '1.000'},
//     {name:'kethlen', email:'kethlen@gmail.com', status:'inadiplente', titulo: 'atraso', valor: '1.000'},
//     {name:'Marcley', email:'marcley@gmail.com', status:'inadiplente', titulo: 'atraso', valor: '1.000'},
//     {name:'Teste', email:'teste@gmail.com', status:'inadiplente', titulo: 'atraso', valor: '1.000'},
//     {name:'tetete', email:'tetete@gmail.com', status:'inadiplente', titulo: 'atraso', valor: '1.000'},
// ]
class ClientesRouter extends router_1.Router {
    applyRoutes(apllication) {
        apllication.get('/clientes', (req, resp, next) => {
            cliente_model_1.Cliente.find().then(clientes => {
                resp.json(clientes);
                return next();
            });
        });
        apllication.get('/clientes/:id', (req, resp, next) => {
            cliente_model_1.Cliente.findById(req.params.id).then(cliente => {
                if (cliente) {
                    resp.json(cliente);
                    return next();
                }
                resp.send(404);
                return next();
            });
        });
        apllication.post('/clientes', (req, resp, next) => {
            let client = new cliente_model_1.Cliente(req.body);
            client.save().then(client => {
                resp.json(client);
                return next;
            });
        });
    }
}
exports.clienteRouter = new ClientesRouter();
