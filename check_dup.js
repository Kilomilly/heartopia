const fs = require('fs');

const content = fs.readFileSync('d:\\hank\\heartopia\\messages\\th.json', 'utf8');

function findDuplicates(text) {
    const lines = text.split('\n');
    const stack = [new Set()];
    let currentIndent = -1;

    lines.forEach((line, i) => {
        const match = line.match(/^(\s*)"([^"]+)"\s*:/);
        if (match) {
            const indent = match[1].length;
            const key = match[2];

            if (indent > currentIndent) {
                stack.push(new Set());
                currentIndent = indent;
            } else if (indent < currentIndent) {
                while (indent < currentIndent && stack.length > 1) {
                    stack.pop();
                    // This is approximate, but good enough for flat-ish JSON
                    currentIndent -= 4; // Assuming 4 space indent
                }
            }

            const currentKeys = stack[stack.length - 1];
            if (currentKeys.has(key)) {
                console.log(`Duplicate key "${key}" at line ${i + 1}`);
            }
            currentKeys.add(key);
        }
    });
}

findDuplicates(content);
