import {logger} from '../Log';
import { Server } from 'http';

const handleException = (err: Error) => { 
    logger.error(`Unhandled exception! Exiting the application: ${err.name} \n# ${err}`);
    
    const exitCode = 1;
    
    logger.info(`Closed server with exit code: ${exitCode}.`);
    process.exit(exitCode);
}

const handleRejection = (server: Server) => (err: Error) => { 
    logger.error(`Unhandled rejection! Shutting down the server: ${err.name} \n# ${err}`);
    
    server.close( _ => { 
        const exitCode = 1;
        logger.info(`Closed server with exit code: ${exitCode}.`);
        process.exit(exitCode);
    });
}

export {
    handleException,
    handleRejection
}