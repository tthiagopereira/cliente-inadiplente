"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const restify = require("restify");
const mongoose = require("mongoose");
const environments_1 = require("../common/environments");
const corsMiddleware = require("restify-cors-middleware2");
class Server {
    initializeDb() {
        mongoose.Promise = global.Promise;
        return mongoose.connect(environments_1.environments.db.url, {
            useMongoClient: true
        });
    }
    initRoutes(routers) {
        return new Promise((resolve, reject) => {
            try {
                this.application = restify.createServer({
                    name: 'api-cliente',
                    version: '1.0.0',
                });
                const corsOption = corsMiddleware({
                    preflightMaxAge: 10,
                    origins: ['*'],
                    allowHeaders: ['authorization'],
                    exposeHeaders: ['x-custom-header']
                });
                this.application.pre(corsOption.preflight);
                this.application.use(corsOption.actual);
                this.application.use(restify.plugins.queryParser());
                this.application.use(restify.plugins.bodyParser());
                for (let router of routers) {
                    router.applyRoutes(this.application);
                }
                this.application.listen(environments_1.environments.server.port, () => {
                    resolve(this.application);
                });
            }
            catch (error) {
                reject(error);
            }
        });
    }
    bootstrap(routers = []) {
        return this.initializeDb().then(() => this.initRoutes(routers).then(() => this));
    }
}
exports.Server = Server;
