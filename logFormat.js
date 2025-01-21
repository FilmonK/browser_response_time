
// this will display the data in log format within browser console
const resources = window.performance.getEntriesByType("resource");

console.log("Resource Timing Report:");
console.log("-------------------------------------");

resources.forEach(resource => {
    console.log(`Resource URL: ${resource.name}`);
    console.log(`Initiator Type: ${resource.initiatorType || "N/A"}`);
    console.log(`Start Time: ${resource.startTime.toFixed(2)} ms`);
    console.log(`DNS Lookup: ${(resource.domainLookupEnd - resource.domainLookupStart).toFixed(2)} ms`);
    console.log(`TCP Connection: ${(resource.connectEnd - resource.connectStart).toFixed(2)} ms`);
    console.log(`Secure Connection: ${resource.secureConnectionStart ? (resource.connectEnd - resource.secureConnectionStart).toFixed(2) : "N/A"} ms`);
    console.log(`Request to Response: ${(resource.responseStart - resource.requestStart).toFixed(2)} ms`);
    console.log(`Content Download: ${(resource.responseEnd - resource.responseStart).toFixed(2)} ms`);
    console.log(`Total Load Time: ${(resource.responseEnd - resource.startTime).toFixed(2)} ms`);
    console.log("-------------------------------------");
});
