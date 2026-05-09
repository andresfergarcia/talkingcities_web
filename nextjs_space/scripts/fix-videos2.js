const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'data', 'content', 'stories.json');
let content = fs.readFileSync(filePath, 'utf-8');

// Find the exact string from the file
const idx = content.indexOf('"video": "https://www.youtube.com/embed/0OFwj6YP3zQ"');
if (idx >= 0) {
    // Get the exact substring with its whitespace
    const start = content.lastIndexOf('\n', idx) + 1;
    const end = idx + '"video": "https://www.youtube.com/embed/0OFwj6YP3zQ"'.length;
    const oldStr = content.substring(start, end);
    
    const indent = oldStr.match(/^\s*/)[0];
    const newStr = indent + '"videos": {\n' +
        indent + '  "es": "https://www.youtube.com/embed/2jg0y7deS5A",\n' +
        indent + '  "en": "https://www.youtube.com/embed/UnQJ-_UtCE0",\n' +
        indent + '  "pl": "https://www.youtube.com/embed/Xrqs_onmITA",\n' +
        indent + '  "de": "https://www.youtube.com/embed/CskILaEfRs0"\n' +
        indent + '},';
    
    content = content.replace(oldStr, newStr);
    
    try {
        JSON.parse(content);
        fs.writeFileSync(filePath, content, 'utf-8');
        console.log('✅ Reemplazo exitoso y JSON válido');
    } catch(e) {
        console.log('❌ JSON inválido: ' + e.message);
    }
} else {
    console.log('❌ No se encontró el texto');
}
