import { Logger } from 'xd-final';

const logger = new Logger({
    includeTraceID: true,
    logToFile: true,
});
export default logger;