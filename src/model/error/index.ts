import { HttpStatus } from 'http-status'
import { stringifyObjs } from '../../utils'
export class APIException extends Error {
    constructor(status: HttpStatus, messages?: any[] | any) {
        super(
            `API Exception status: ${status}, messages: ${stringifyObjs(
                messages,
            ).join(' ')}`,
        )
    }
}
