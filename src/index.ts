// env vars
require('dotenv').config({ path: './config.env' });

// TODO: setup logging
import winston from 'winston';
winston.add(winston.transport.);

// Handle Unexpected Exception
import {unhandledErrorHandlers} from './app/Utils/ErrorHandlers'
process.on('uncaughtException', unhandledErrorHandlers.handleException);

// database connection
import {connect as connectToMongo} from './mongoConnection'
connectToMongo();

// Start application
import app from './app'
const port = process.env.PORT || 5412;
const location = `/${(process.env.HOST || `localhost`)}:${port}/`;
const server = app.listen(port, () => {
    winston.info(`App has successfully started on ${location}`);
    winston.info(`App is running in ${app.get('env')} mode`);
});

// Handle Unexpected Rejection
process.on('unhandledRejection', unhandledErrorHandlers.handleRejection(server));