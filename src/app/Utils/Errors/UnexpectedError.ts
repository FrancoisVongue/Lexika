import winston from 'winston'

class ValidationError extends Error {
    status: string;
    isOperational: boolean;
    
    constructor(
            public message: string,
            public statusCode: number) {
        super(message);
        
        this.status = statusCode < 500 ? 'failed' : 'server error';
        this.isOperational = true;

        Error.captureStackTrace(this, this.constructor); // the way to capture the stack
    }
}

export {
    ValidationError
}