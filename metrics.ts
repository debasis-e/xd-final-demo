// import Metrics from "xd-otel/Metrics";

// // Initialize Metrics

// const metrics = new Metrics({
//     serviceName: "demo-metrics-service",
//     exporterUrl: "http://localhost:4318/v1/metrics",
// });
// console.log("Metrics initialized");
// console.log("You can view metrics at http://localhost:4318/metrics");

// // Create Counter
// const httpRequests = metrics.createMetric({
//     type: "counter",
//     name: "http_requests_total",
//     description: "Total HTTP requests",
// });
// const latencyHistogram = metrics.createMetric({
//     type: "histogram",
//     name: "http_request_latency_seconds",
//     description: "HTTP request latency in seconds",
//     unit: "s",
//     boundaries: [0.1, 0.5, 1, 2, 5],
// });

// // Increment on request
// httpRequests.add(1, { method: "GET", route: "/orders" });

// // Shutdown cleanly (e.g., on SIGTERM)
// process.on("SIGTERM", async () => {
//     await metrics.shutdown();
//     process.exit(0);
// });
