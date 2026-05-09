const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'data', 'content', 'stories.json');
const raw = fs.readFileSync(filePath, 'utf-8');

// Parse the JSON
let data;
try {
    data = JSON.parse(raw);
    console.log('✅ JSON parseado correctamente');
} catch(e) {
    console.log('❌ Error parseando JSON: ' + e.message);
    process.exit(1);
}

// Find the story with slug "from-cattle-car-to-nation"
var stories = data.stories;
var story = null;
for (var i = 0; i < stories.length; i++) {
    if (stories[i].slug === 'from-cattle-car-to-nation') {
        story = stories[i];
        break;
    }
}
if (!story) {
    console.log('❌ No se encontró la historia');
    process.exit(1);
}

// Find the section that has the video
const section = story.sections.find(function(s) { return s.video === 'https://www.youtube.com/embed/0OFwj6YP3zQ'; });
if (!section) {
    console.log('❌ No se encontró la sección con el video');
    process.exit(1);
}

// Replace video with videos object
delete section.video;
section.videos = {
    es: 'https://www.youtube.com/embed/2jg0y7deS5A',
    en: 'https://www.youtube.com/embed/UnQJ-_UtCE0',
    pl: 'https://www.youtube.com/embed/Xrqs_onmITA',
    de: 'https://www.youtube.com/embed/CskILaEfRs0'
};

// Write back with pretty formatting
const output = JSON.stringify(data, null, 2);
fs.writeFileSync(filePath, output, 'utf-8');
console.log('✅ Archivo escrito correctamente');

// Verify
try {
    JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    console.log('✅ JSON de salida válido');
} catch(e) {
    console.log('❌ JSON de salida inválido: ' + e.message);
}

