import { ExpressTracer } from 'xd-final';

const tracer = new ExpressTracer('xd-telemetry-service', {
    enableFileTraces: true,
    enableJaegerTraces: true,
    enableConsoleTraces: false,
    environment: 'development',
    enableDatabaseTraces: true,
    database: "pg"
});

export default tracer;