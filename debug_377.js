const fs = require('fs');

const content = fs.readFileSync('d:\\hank\\heartopia\\messages\\th.json', 'utf8');

function checkDuplicates() {
    const lines = content.split('\n');
    const stack = [new Set()];
    let lastIndent = 0;

    lines.forEach((line, i) => {
        // Detect key
        const keyMatch = line.match(/^(\s*)"([^"]+)"\s*:/);
        if (keyMatch) {
            const indent = keyMatch[1].length;
            const key = keyMatch[2];

            // If indent increased, we are in a new object
            // This is a bit naive because we don't know if we just started an array or object
            // But usually in this file it's objects.
        }

        // Detect opening brace
        if (line.includes('{')) {
            stack.push(new Set());
        }
        // Detect closing brace
        if (line.includes('}')) {
            stack.pop();
        }

        // This is also naive.
    });
}

// Better way: use a parser that preserves duplicates
// Actually, let's just search for line 377 specifically and its surroundings.
