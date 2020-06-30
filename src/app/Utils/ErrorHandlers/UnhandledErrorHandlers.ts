import winston from 'winston'
import {} from 'express'
import { Server } from 'http';

const handleException = (err: Error) => { 
    winston.info("Unhandled exception! Exiting the application.");
    winston.error(err.name, err);
    const exitCode = 1;
    winston.info(`Closed server with exit code: ${exitCode}.`);
    process.exit(exitCode);
}

const handleRejection = (server: Server) => (err: Error) => { 
    winston.info("Unhandled rejection! Shutting down the server...");
    winston.error(err.name, err);
    server.close( _ => { 
        const exitCode = 1;
        winston.info(`Closed server with exit code: ${exitCode}.`);
        process.exit(exitCode);
    });
}

export {
    handleException,
    handleRejection
}