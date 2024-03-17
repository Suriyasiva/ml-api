import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Request } from 'express';

@Injectable()
export class AuthInterceptor implements CanActivate {

    /**
     * @param context 
     * @type ExecutionContext
     * @description get information from api like headers, body 
     */

    canActivate(context: ExecutionContext): boolean | Promise<boolean> {
        // : Request
        const request = context.switchToHttp().getRequest();
        return request
        //   return validateRequest(request);
    }
}