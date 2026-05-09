var fs = require('fs');
var path = require('path');

var filePath = path.join(__dirname, '..', 'data', 'content', 'stories.json');
var raw = fs.readFileSync(filePath, 'utf-8');
var data = JSON.parse(raw);

var story = data.stories.find(function(s) { return s.slug === 'from-cattle-car-to-nation'; });
var section = story.sections[3]; // "El invierno en los vagones"

section.videos = {
    es: 'https://www.youtube.com/embed/1VA4jJEFZeM',
    en: 'https://www.youtube.com/embed/DST1pEWjyBE',
    pl: 'https://www.youtube.com/embed/nPCrtPcQVNc',
    de: 'https://www.youtube.com/embed/QUJpMEDYENo'
};

var output = JSON.stringify(data, null, 2);
fs.writeFileSync(filePath, output, 'utf-8');
console.log('✅ Video añadido a sección: ' + section.title_es);
console.log('Videos: ' + JSON.stringify(section.videos));
