"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const clientes_router_1 = require("./clientes/clientes.router");
const server_1 = require("./server/server");
const serve = new server_1.Server();
serve.bootstrap([clientes_router_1.clienteRouter]).then(serve => {
    console.log('Server is listening on: ', serve.application.address());
}).catch(error => {
    console.log('Server failed to start');
    console.log(error);
    process.exit(1);
});
