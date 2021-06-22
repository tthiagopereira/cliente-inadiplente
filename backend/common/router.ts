import * as resyify from 'restify'

export abstract class Router {
    abstract applyRoutes(apllication: resyify.Server)
}
