import * as restify from 'restify';
import * as mongoose from 'mongoose'
import {environments} from '../common/environments';
import {Router} from '../common/router';
import * as corsMiddleware from "restify-cors-middleware2";

export class Server {

    application: restify.Server

    initializeDb(): mongoose.MongooseThenable{
        (<any>mongoose).Promise = global.Promise
        return mongoose.connect(environments.db.url, {
            useMongoClient: true
        })
    }

    initRoutes(routers: Router[]): Promise<any>{
        return new Promise((resolve, reject) => {
             try {
                 this.application = restify.createServer({
                     name: 'api-cliente',
                     version: '1.0.0',
                 })

                 const corsOption = corsMiddleware({
                     preflightMaxAge: 10, //Optional
                     origins: ['*'],
                     allowHeaders: ['authorization'],
                     exposeHeaders: ['x-custom-header']
                 })

                 this.application.pre(corsOption.preflight)
                 this.application.use(corsOption.actual)


                 this.application.use(restify.plugins.queryParser())
                 this.application.use(restify.plugins.bodyParser())
                 for (let router of routers) {
                    router.applyRoutes(this.application)
                 }

                 this.application.listen(environments.server.port, () =>{
                     resolve(this.application)
                 })

             }catch (error){
                reject(error)
             }
        })
    }

    bootstrap(routers: Router[] = []): Promise<Server>{
        return this.initializeDb().then(() =>
        this.initRoutes(routers).then(()=>this)
        )
    }

}
