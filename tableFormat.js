// this will display the data in table format within browser console
const resources = window.performance.getEntriesByType("resource");

const formattedData = resources.map(resource => ({
    "Resource URL": resource.name,
    "Initiator Type": resource.initiatorType || "N/A",
    "Start Time (ms)": resource.startTime.toFixed(2),
    "DNS Lookup (ms)": (resource.domainLookupEnd - resource.domainLookupStart).toFixed(2),
    "TCP Connection (ms)": (resource.connectEnd - resource.connectStart).toFixed(2),
    "Secure Connection (ms)": resource.secureConnectionStart ? (resource.connectEnd - resource.secureConnectionStart).toFixed(2) : "N/A",
    "Request to Response (ms)": (resource.responseStart - resource.requestStart).toFixed(2),
    "Content Download (ms)": (resource.responseEnd - resource.responseStart).toFixed(2),
    "Total Load Time (ms)": (resource.responseEnd - resource.startTime).toFixed(2)
}));


console.table(formattedData);
