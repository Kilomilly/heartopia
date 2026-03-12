const fs = require('fs');

const content = fs.readFileSync('d:\\hank\\heartopia\\messages\\th.json', 'utf8');

function checkDup(obj, path = '') {
    if (typeof obj !== 'object' || obj === null) return;
    if (Array.isArray(obj)) {
        obj.forEach((item, i) => checkDup(item, `${path}[${i}]`));
        return;
    }
    // We can't use JSON.parse because it overwrites duplicates.
    // We need a custom parser or just regex for simple cases.
}

// Simple regex based duplicate checker for keys at same level
const lines = content.split('\n');
const stack = [];
const keysAtLevel = [new Set()];

lines.forEach((line, index) => {
    const match = line.match(/^\s*"([^"]+)"\s*:/);
    if (match) {
        const key = match[1];
        const indent = line.match(/^\s*/)[0].length;

        // This is a naive way, but let's see.
        // Actually, let's just use the lint error's hint.
    }
});

console.log("Naive check skipped. Using JSON.parse to detect basic syntax errors.");
try {
    JSON.parse(content);
    console.log("JSON is valid (JSON.parse doesn't care about duplicates though).");
} catch (e) {
    console.log("JSON Error: " + e.message);
    // Find approximate line
    const match = e.message.match(/at position (\d+)/);
    if (match) {
        const pos = parseInt(match[1]);
        const linesBefore = content.substring(0, pos).split('\n');
        console.log(`Error near line ${linesBefore.length}: ${linesBefore[linesBefore.length - 1]}`);
    }
}
