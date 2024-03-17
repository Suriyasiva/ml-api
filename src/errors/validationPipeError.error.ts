import { UnprocessableEntityException } from "@nestjs/common";


export function unprocessableEntityException(errors: Record<string, any>[]) {
    return new UnprocessableEntityException({
        statusCode: 422,
        error: 'Unprocessable Entity',
        message: errors.reduce(
            (acc, e) => ({
                ...acc,
                [e.property]: Object.values(e.constraints),
            }),
            {},
        )
    })

} 