Guards
-> Guards are very similar to middleware

-> Guards are executed after all middleware, but before any interceptor or pipe.

-> canActivate() function takes a single argument `ExecutionContext` this ExecutionContext is inherits from ArgumentsHost, this ExecutionContext gives reference of request Object.

-> canActivate function return true request will be processed else Nest will deny the request.

Flow:
Client:http-request -> Guard -> Route;
