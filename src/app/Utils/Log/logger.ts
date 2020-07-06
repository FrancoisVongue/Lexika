import { createLogger, format, transports } from 'winston'

interface TransformableInfo {
    level: string;
    message: string;
}

const getTime = () => new Date(Date.now()).toUTCString();
const formatMessage = (info:TransformableInfo) => 
    `[${getTime()}] # [${info.level.toUpperCase()}] # ${info.message}`;

const infoLogger = createLogger({
    transports: [],
    format: format.printf(formatMessage),
    defaultMeta: { service : 'user-service' },
});

if (process.env.NODE_ENV !== 'production') {
    infoLogger.add(new transports.Console());
} else {
    infoLogger.add(new transports.File({filename: 'error.log', level: 'error'}));
    infoLogger.add(new transports.File({filename: 'combined.log', level: 'info'}));
}

export {
    infoLogger as logger
}