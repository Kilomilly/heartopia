const fs = require('fs');

// Read English version
const enPath = 'e:\\ship\\heartopia\\messages\\en.json';
const enData = JSON.parse(fs.readFileSync(enPath, 'utf8'));
const onsenEggContent = enData.onsenEgg;

// Update other languages
const languages = ['th', 'es', 'pt'];

languages.forEach(lang => {
    const filePath = `e:\\ship\\heartopia\\messages\\${lang}.json`;
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

    // Add onsenEgg section
    data.onsenEgg = onsenEggContent;

    // Write back with proper formatting
    fs.writeFileSync(filePath, JSON.stringify(data, null, 4).replace(/\n/g, '\r\n'));
    console.log(`✓ Updated ${lang}.json`);
});

console.log('All language files updated successfully!');
