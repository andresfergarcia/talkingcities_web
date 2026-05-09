const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'data', 'content', 'stories.json');
let content = fs.readFileSync(filePath, 'utf-8');

const oldStr = '"image": "/images/stories/poland/from-cattle-car/vilna-aldea.png",\n          "video": "https://www.youtube.com/embed/0OFwj6YP3zQ",';
const newStr = '"image": "/images/stories/poland/from-cattle-car/vilna-aldea.png",\n          "videos": {\n            "es": "https://www.youtube.com/embed/2jg0y7deS5A",\n            "en": "https://www.youtube.com/embed/UnQJ-_UtCE0",\n            "pl": "https://www.youtube.com/embed/Xrqs_onmITA",\n            "de": "https://www.youtube.com/embed/CskILaEfRs0"\n          },';

if (content.includes(oldStr)) {
    content = content.replace(oldStr, newStr);
    try {
        JSON.parse(content);
        fs.writeFileSync(filePath, content, 'utf-8');
        console.log('✅ Reemplazo exitoso y JSON válido');
    } catch(e) {
        console.log('❌ JSON inválido después del reemplazo: ' + e.message);
        const pos = e.pos || 0;
        console.log('Contexto:');
        console.log(content.substring(Math.max(0, pos-200), pos+200));
    }
} else {
    console.log('❌ No se encontró el texto exacto');
    const idx = content.indexOf('vilna-aldea');
    if (idx >= 0) {
        console.log('Contexto alrededor:');
        console.log(content.substring(idx - 50, idx + 200));
    }
}
