import {clienteRouter} from './clientes/clientes.router';
import {Server} from './server/server';

const serve = new Server()


serve.bootstrap([clienteRouter]).then(serve=>{
    console.log('Server is listening on: ', serve.application.address())
}).catch(error=>{
    console.log('Server failed to start')
    console.log(error)
    process.exit(1)
})
