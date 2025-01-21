const resources = window.performance.getEntriesByType("resource");
const csvData = [
    ["Resource URL", "Initiator Type", "Start Time (ms)", "DNS Lookup (ms)", "TCP Connection (ms)", "Secure Connection (ms)", "Request to Response (ms)", "Content Download (ms)", "Total Load Time (ms)"]
];

resources.forEach(resource => {
    csvData.push([
        resource.name,
        resource.initiatorType || "N/A",
        resource.startTime.toFixed(2),
        (resource.domainLookupEnd - resource.domainLookupStart).toFixed(2),
        (resource.connectEnd - resource.connectStart).toFixed(2),
        resource.secureConnectionStart ? (resource.connectEnd - resource.secureConnectionStart).toFixed(2) : "N/A",
        (resource.responseStart - resource.requestStart).toFixed(2),
        (resource.responseEnd - resource.responseStart).toFixed(2),
        (resource.responseEnd - resource.startTime).toFixed(2)
    ]);
});

// Convert and export to CSV in table format
const csvContent = csvData.map(e => e.join(",")).join("\n");

const blob = new Blob([csvContent], { type: 'text/csv' });
const url = URL.createObjectURL(blob);
const link = document.createElement("a");
link.href = url;
link.download = "resource_timing_report_with_initiator.csv";
link.click();
URL.revokeObjectURL(url);
