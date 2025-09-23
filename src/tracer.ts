import { ExpressTracer } from 'xd-final';

const tracer = new ExpressTracer('xd-telemetry-service', {
    // enableFileTraces: true, // if false or not given then,this will directly export to jaeger endpoint
    environment: 'production',
    enableDatabaseTraces: true,
    database: "pg"
});

export default tracer;