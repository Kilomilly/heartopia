const fs = require('fs');
const content = fs.readFileSync('d:\\hank\\heartopia\\messages\\th.json', 'utf8');

const keys = [];
const lines = content.split('\n');
lines.forEach(line => {
    const match = line.match(/^    "([^"]+)"\s*:/);
    if (match) {
        keys.push(match[1]);
    }
});

const counts = {};
keys.forEach(k => {
    counts[k] = (counts[k] || 0) + 1;
});

for (const k in counts) {
    if (counts[k] > 1) {
        console.log(`Top-level duplicate key: ${k} (count: ${counts[k]})`);
    }
}
