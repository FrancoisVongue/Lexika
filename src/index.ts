// env vars
require('dotenv').config({ path: './config.env' });

// logging setup
import {logger} from './app/Utils/Log';

// Handle Unexpected Exception
import {unhandledErrorHandlers} from './app/Utils/ErrorHandlers'
process.on('uncaughtException', unhandledErrorHandlers.handleException);

// database connection
import {connect as connectToMongo} from './db/mongoConnection'
connectToMongo();

// Start application
import app from './app'
const port = process.env.PORT || 5412;
const location = `/${(process.env.HOST || `localhost`)}:${port}/`;

if(require.main === module) {
    const server = app.listen(port, () => {
        logger.info(`App has successfully started on ${location}`);
        logger.info(`App is running in ${app.get('env')} mode`);
    });
    
    //Handle Unexpected Rejection
    process.on('unhandledRejection', unhandledErrorHandlers.handleRejection(server));
}

export default app;

