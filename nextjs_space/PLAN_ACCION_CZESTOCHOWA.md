# 📝 Plan de Acción: Añadir Relato - La Doble Vida de la Iglesia (Częstochowa)

Este plan detalla los cambios para añadir el nuevo artículo en `stories.json` y actualizar la sección de tarjetas en `cities.json`.

## 1. Modificar `data/content/stories.json`
Añade este **nuevo objeto** al array de `"stories"`, preferiblemente al principio. Asegúrate de separar los objetos con una coma `,`.

```json
{
  "slug": "czestochowa-hidden-garden",
  "city": "Zielona Góra",
  "city_es": "Zielona Góra",
  "city_pl": "Zielona Góra",
  "city_de": "Grünberg",
  "citySlug": "zielona-gora",
  "type": "Buildings with Heart",
  "title": "The Hidden Garden Behind the Bricks: The Double Life of the Church of Our Lady of Częstochowa",
  "title_es": "El Jardín Oculto tras los Ladrillos: La Doble Vida de la Iglesia de Nuestra Señora de Częstochowa",
  "title_pl": "Ukryty Ogród za Cegłami: Podwójne Życie Kościoła Matki Bożej Częstochowskiej",
  "title_de": "Der verborgene Garten hinter den Ziegeln: Das Doppelleben der Kirche der Muttergottes von Tschenstochau",
  "introduction": "If you stroll through the Old Town of Zielona Góra, it is impossible to miss. Along with the Town Hall and the Co-Cathedral, its tower defines the city’s skyline. But the Church of Our Lady of Częstochowa is much more than just a pretty postcard; it is a survivor with a fascinating identity crisis. At first glance, it looks like just another Catholic church in devout Poland. But if you get close to its walls and touch the structure, you will notice something strange: it isn't made of solid stone. It is a giant of wood and brick that hides a Prussian secret in its heart.",
  "introduction_es": "Si paseas por el casco antiguo de Zielona Góra, es imposible no verla. Junto con el Ayuntamiento y la Concatedral, su torre define el horizonte de la ciudad. Pero la Iglesia de Nuestra Señora de Częstochowa es mucho más que una postal bonita; es una superviviente con una crisis de identidad fascinante. A primera vista, parece un templo católico más en la Polonia devota. Pero si te acercas a sus muros y tocas su estructura, notarás algo extraño: no es de piedra maciza. Es un gigante de madera y ladrillo que esconde un secreto prusiano en su corazón.",
  "introduction_pl": "Spacerując po Starym Mieście w Zielonej Górze, nie sposób go przeoczyć. Wraz z Ratuszem i Konkatedrą, jego wieża definiuje panoramę miasta. Jednak Kościół Matki Bożej Częstochowskiej to znacznie więcej niż ładny widok na pocztówkę; to ocalały świadek historii z fascynującym kryzysem tożsamości. Na pierwszy rzut oka wygląda jak kolejna katolicka świątynia. Ale jeśli podejdziesz do jego murów i dotkniesz struktury, zauważysz coś dziwnego: nie jest to lity kamień. To gigant z drewna i cegły, który w swoim sercu skrywa pruski sekret.",
  "introduction_de": "Wenn Sie durch die Altstadt von Zielona Góra spazieren, ist sie kaum zu übersehen. Zusammen mit dem Rathaus und der Konkathedrale prägt ihr Turm die Skyline der Stadt. Aber die Kirche der Muttergottes von Tschenstochau ist viel mehr als nur ein hübsches Postkartenmotiv; sie ist eine Überlebende mit einer faszinierenden Identitätskrise. Auf den ersten Blick wirkt sie wie ein weiteres katholisches Gotteshaus im frommen Polen. Aber wenn man sich ihren Mauern nähert und ihre Struktur berührt, bemerkt man etwas Seltsames: Sie besteht nicht aus massivem Stein. Sie ist ein Riese aus Holz und Ziegeln, der ein preußisches Geheimnis in seinem Herzen verbirgt.",
  "image": "/images/stories/Czestachowa.jpg",
  "sections": [
    {
      "title": "A Church Built from Walls",
      "title_es": "Una iglesia hecha de murallas",
      "title_pl": "Kościół zbudowany z murów",
      "title_de": "Eine Kirche aus Stadtmauern",
      "image": "/images/stories/Czestachowa1.png",
      "content": "Let’s travel back to 1747. Silesia has just changed hands: from Catholic Austria to the Protestant Prussia of Frederick II the Great. The Lutherans of Zielona Góra, who for years were forbidden from building temples inside the city, finally get the green light. But there was haste and a need for pragmatism. The solution? To build a half-timbered structure (Fachwerk)—today the largest of its kind in the entire Lubusz region—and fill it with bricks. Here lies the poetic irony: many of those bricks came from the city’s ancient defensive walls, which were being demolished in the 18th century. What once served to separate and defend was used to build a place of gathering.",
      "content_es": "Viajemos a 1747. Silesia acaba de cambiar de manos: de la Austria católica a la Prusia protestante de Federico II el Grande. Los luteranos de Zielona Góra, que durante años tuvieron prohibido construir templos dentro de la ciudad, reciben por fin luz verde. Pero había prisa y necesidad de pragmatismo. ¿La solución? Construir una estructura de entramado de madera (Fachwerk) —hoy la más grande de su tipo en toda la región de Lubusz— y rellenarla con ladrillos. Aquí viene la ironía poética: muchos de esos ladrillos provenían de las antiguas murallas defensivas de la ciudad, demolidas en el siglo XVIII. Lo que antes servía para separar y defender, se utilizó para construir un lugar de reunión.",
      "content_pl": "Przenieśmy się do roku 1747. Śląsk właśnie zmienił właściciela: z katolickiej Austrii przeszedł w ręce protestanckich Prus Fryderyka II Wielkiego. Luteranie z Zielonej Góry (wówczas Grünberg), którym przez lata zabraniano budowania świątyń w obrębie miasta, w końcu otrzymują zielone światło. Liczył się jednak czas i pragmatyzm. Rozwiązanie? Budowa konstrukcji szachulcowej (tzw. mur pruski) — dziś jest to największy tego typu obiekt w całym województwie lubuskim — i wypełnienie jej cegłami. Tutaj pojawia się poetycka ironia: wiele z tych cegieł pochodziło z dawnych murów obronnych miasta, rozbieranych w XVIII wieku. To, co kiedyś służyło do oddzielania i obrony, zostało użyte do zbudowania miejsca spotkań.",
      "content_de": "Reisen wir zurück ins Jahr 1747. Schlesien hat gerade den Besitzer gewechselt: vom katholischen Österreich zum protestantischen Preußen unter Friedrich II. dem Großen. Die Lutheraner von Zielona Góra (damals Grünberg), denen es jahrelang verboten war, Gotteshäuser innerhalb der Stadtmauern zu errichten, bekommen endlich grünes Licht. Aber es herrschte Eile und die Notwendigkeit zum Pragmatismus. Die Lösung? Eine Fachwerkstruktur zu bauen – heute die größte ihrer Art in der gesamten Woiwodschaft Lebus – und sie mit Ziegeln auszufüllen. Hier liegt die poetische Ironie: Viele dieser Ziegel stammten von den alten Verteidigungsmauern der Stadt, die im 18. Jahrhundert abgerissen wurden. Was einst dazu diente, zu trennen und zu verteidigen, wurde genutzt, um einen Ort der Begegnung zu errichten."
    },
    {
      "title": "The Theater of the Word",
      "title_es": "El teatro de la palabra",
      "title_pl": "Teatr słowa",
      "title_de": "Das Theater des Wortes",
      "content": "Crossing the threshold, forget for a moment what you know about traditional Catholic churches. Don't look at the altar just yet; look up. Surrounding you are impressive two-story wooden galleries. This design is not accidental; it is 18th-century social engineering. Originally, this building was an Evangelical church designed as an auditorium. The priority was not to see the Eucharist, but to hear the sermon. In its heyday, this space could seat nearly 2,000 people. Imagine the creaking of the wood and the murmur of the local clothiers' guilds, leaning over the balconies as if they were in an opera house, focused entirely on the spoken word.",
      "content_es": "Al cruzar el umbral, olvida por un momento lo que sabes de las iglesias católicas tradicionales. No mires hacia el altar todavía; mira hacia arriba. Lo que te rodea son impresionantes galerías de madera de dos pisos. El diseño no es casualidad, es ingeniería social del siglo XVIII. Originalmente, este edificio era una iglesia evangélica diseñada como un auditorio. La prioridad no era ver la eucaristía, sino escuchar el sermón. En su apogeo, este espacio podía albergar a casi 2.000 personas. Imagina el crujir de la madera y el murmullo de los gremios de pañeros locales, asomados a los balcones como si estuvieran en un teatro de la ópera, centrados en la palabra hablada.",
      "content_pl": "Przekraczając próg, zapomnij na chwilę o tym, co wiesz o tradycyjnych kościołach katolickich. Nie patrz jeszcze na ołtarz; spójrz w górę. Otaczają Cię imponujące, dwukondygnacyjne drewniane empory (galerie). Ten projekt nie jest przypadkowy, to XVIII-wieczna inżynieria społeczna. Pierwotnie budynek ten był kościołem ewangelickim zaprojektowanym jak audytorium. Priorytetem nie było widzenie Eucharystii, ale słyszenie kazania. W czasach świetności przestrzeń ta mogła pomieścić prawie 2000 osób. Wyobraź sobie skrzypienie drewna i szmer lokalnych cechów sukienniczych, wychylających się z balkonów jak w operze, skupionych całkowicie na głoszonym słowie.",
      "content_de": "Wenn Sie die Schwelle überschreiten, vergessen Sie für einen Moment, was Sie über traditionelle katholische Kirchen wissen. Schauen Sie noch nicht zum Altar; schauen Sie nach oben. Sie sind umgeben von beeindruckenden, zweistöckigen Holzemporen. Dieses Design ist kein Zufall, es ist soziale Ingenieurskunst des 18. Jahrhunderts. Ursprünglich war dieses Gebäude eine evangelische Kirche, die als Auditorium konzipiert wurde. Die Priorität lag nicht darauf, die Eucharistie zu sehen, sondern die Predigt zu hören. In seiner Blütezeit bot dieser Raum Platz für fast 2.000 Menschen. Stellen Sie sich das Knarren des Holzes und das Murmeln der lokalen Tuchmachergilden vor, die sich über die Balkone lehnten, als wären sie in einem Opernhaus, ganz auf das gesprochene Wort konzentriert."
    },
    {
      "title": "The Secret Under the Pulpit: \"Christ’s Garden\"",
      "title_es": "El secreto bajo el púlpito: \"El Jardín de Cristo\"",
      "title_pl": "Sekret pod amboną: „Ogród Chrystusa”",
      "title_de": "Das Geheimnis unter der Kanzel: „Der Garten Christi“",
      "image": "/images/stories/Czestachowa2.jpg",
      "content": "Here is where we challenge you to be a keen observer. Walk towards the pulpit (the elevated platform for preaching) and look closely at its base. It is not just any column. It is a palm tree trunk carved in wood. What is an exotic palm tree doing in the middle of cold Silesia? It is the only visible trace of the church's original name: Zum Garten Christ (\"The Garden of Christ\"). For the old Lutheran Pietists, faith was an inner garden that had to be cultivated, and the righteous would \"flourish like the palm tree.\" Although today the Baroque high altar and Catholic iconography dominate the view, that little palm tree is still there, supporting the pulpit, reminding us of the building's theological origin.",
      "content_es": "Aquí es donde te retamos a ser un observador agudo. Camina hacia el púlpito (la plataforma elevada para predicar) y fíjate en su base. No es una columna cualquiera. Es un tronco de palmera tallado en madera. ¿Qué hace una palmera exótica en medio de la fría Silesia? Es la única huella visible del nombre original de la iglesia: Zum Garten Christ (\"El Jardín de Cristo\"). Para los antiguos pietistas luteranos, la fe era un jardín interior que debía cultivarse, y el justo \"florecería como la palmera\". Aunque hoy el altar mayor barroco y la iconografía católica dominen la vista, esa pequeña palmera sigue ahí, sosteniendo el púlpito, recordándonos el origen teológico del edificio.",
      "content_pl": "W tym miejscu rzucamy Ci wyzwanie na spostrzegawczość. Podejdź do ambony i przyjrzyj się jej podstawie. To nie jest zwykła kolumna. To pień palmy wyrzeźbiony w drewnie. Co egzotyczna palma robi w środku chłodnego Śląska? To jedyny widoczny ślad pierwotnej nazwy kościoła: Zum Garten Christ („Ogród Chrystusa”). Dla dawnych pietystów luterańskich wiara była wewnętrznym ogrodem, który należało pielęgnować, a sprawiedliwy miał „zakwitnąć jak palma”. Choć dziś widok dominuje barokowy ołtarz główny i katolicka ikonografia, ta mała palma wciąż tam jest, podtrzymując ambonę i przypominając o teologicznym rodowodzie budynku.",
      "content_de": "Hier fordern wir Sie auf, ein scharfer Beobachter zu sein. Gehen Sie zur Kanzel (dem erhöhten Podest für die Predigt) und achten Sie auf deren Basis. Es ist nicht einfach irgendeine Säule. Es ist ein aus Holz geschnitzter Palmenstamm. Was macht eine exotische Palme mitten im kalten Schlesien? Sie ist die einzige sichtbare Spur des ursprünglichen Namens der Kirche: Zum Garten Christ. Für die alten lutherischen Pietisten war der Glaube ein innerer Garten, der gepflegt werden musste, und der Gerechte würde „grünen wie ein Palmbaum“. Obwohl heute der barocke Hochaltar und die katholische Ikonographie den Anblick dominieren, ist diese kleine Palme immer noch da, stützt die Kanzel und erinnert uns an den theologischen Ursprung des Gebäudes."
    },
    {
      "title": "From Prussia to Poland",
      "title_es": "De Prusia a Polonia",
      "title_pl": "Od Prus do Polski",
      "title_de": "Von Preußen nach Polen",
      "content": "History rewrote the building. In 1828, the classicist tower was added to assert its presence in the city. After World War II, with the shifting of borders, the temple passed into Catholic hands and adopted the name of the patroness of Poland: Our Lady of Częstochowa. For decades it functioned almost incognito, as a branch of the neighboring parish, until it reclaimed its place as an independent parish in 1987. Renovations in the 1980s saved it from ruin caused by dampness, allowing us to enjoy this historical hybrid today.",
      "content_es": "La historia reescribió el edificio. En 1828 se añadió la torre clasicista para afirmar su presencia en la ciudad. Tras la Segunda Guerra Mundial, con el cambio de fronteras, el templo pasó a manos católicas y adoptó el nombre de la patrona de Polonia: Nuestra Señora de Częstochowa. Durante décadas funcionó casi de incógnito, como filial de la parroquia vecina, hasta que en 1987 reclamó su lugar como parroquia independiente. Las restauraciones de los años 80 la salvaron de la ruina por humedad, permitiéndonos disfrutar hoy de este híbrido histórico.",
      "content_pl": "Historia napisała ten budynek na nowo. W 1828 roku dobudowano klasycystyczną wieżę, by zaznaczyć obecność kościoła w mieście. Po II wojnie światowej, wraz ze zmianą granic, świątynia przeszła w ręce katolików i przyjęła imię patronki Polski: Matki Bożej Częstochowskiej. Przez dziesięciolecia kościół funkcjonował niemal incognito, jako filia sąsiedniej parafii św. Jadwigi, aż w 1987 roku odzyskał swoje miejsce jako samodzielna parafia. Renowacje z lat 80. uratowały go przed zniszczeniem przez wilgoć, pozwalając nam dziś cieszyć się tą historyczną hybrydą.",
      "content_de": "Die Geschichte hat das Gebäude neu geschrieben. Im Jahr 1828 wurde der klassizistische Turm hinzugefügt, um seine Präsenz in der Stadt zu behaupten. Nach dem Zweiten Weltkrieg und der Verschiebung der Grenzen ging das Gotteshaus in katholische Hände über und nahm den Namen der Schutzpatronin Polens an: Muttergottes von Tschenstochau. Jahrzehntelang funktionierte sie fast inkognito, als Filiale der benachbarten Pfarrei Sankt Hedwig, bis sie 1987 ihren Platz als eigenständige Pfarrei zurückeroberte. Restaurierungen in den 1980er Jahren retteten sie vor dem Verfall durch Feuchtigkeit und ermöglichen es uns heute, diesen historischen Hybriden zu genießen."
    },
    {
      "title": "Why Visit?",
      "title_es": "¿Por qué visitarla?",
      "title_pl": "Dlaczego warto go odwiedzić?",
      "title_de": "Warum sollte man sie besuchen?",
      "content": "Because it is an honest building. It doesn't hide its scars or its changes. It is a place where an organ with a 1752 Baroque case coexists with a 20th-century Romantic sound; where the Protestant structure hosts Catholic liturgy; and where, if you pay attention, you can still feel the atmosphere of the old \"Garden of Christ\".\n\n• 📍 Where to find it: Right in the heart of Zielona Góra, just a few steps from the Town Hall.\n• 💡 Talking Cities Tip: If you are lucky and someone is playing the organ, go inside and sit down. The acoustics of the wood are warm and enveloping, very different from the cold stone of Gothic cathedrals.",
      "content_es": "Porque es un edificio honesto. No oculta sus cicatrices ni sus cambios. Es un lugar donde conviven el órgano con caja barroca de 1752 y sonido romántico del siglo XX; donde la estructura protestante acoge la liturgia católica; y donde, si prestas atención, aún puedes sentir la atmósfera del antiguo \"Jardín de Cristo\".\n\n• 📍 Dónde encontrarla: Justo en el corazón de Zielona Góra, a pocos pasos del Ayuntamiento.\n• 💡 Consejo Talking Cities: Si tienes suerte y hay alguien tocando el órgano, entra y siéntate. La acústica de la madera es cálida y envolvente, muy distinta a la piedra fría de las catedrales góticas.",
      "content_pl": "Ponieważ jest to „uczciwy” budynek. Nie ukrywa swoich blizn ani zmian. To miejsce, gdzie organy z barokowym prospektem z 1752 roku współistnieją z romantycznym brzmieniem z XX wieku; gdzie protestancka struktura gości liturgię katolicką; i gdzie, jeśli będziesz uważny, wciąż możesz wyczuć atmosferę dawnego „Ogrodu Chrystusa”.\n\n• 📍 Gdzie go znaleźć: W samym sercu Zielonej Góry, zaledwie kilka kroków od Ratusza.\n• 💡 Wskazówka Talking Cities: Jeśli masz szczęście i ktoś gra na organach, wejdź do środka i usiądź. Akustyka drewna jest ciepła i otulająca, zupełnie inna niż w zimnych, kamiennych katedrach.",
      "content_de": "Weil es ein ehrliches Gebäude ist. Es verbirgt weder seine Narben noch seine Veränderungen. Es ist ein Ort, an dem eine Orgel mit einem Barockgehäuse aus dem Jahr 1752 und dem romantischen Klang des 20. Jahrhunderts koexistiert; an dem die protestantische Struktur die katholische Liturgie beherbergt; und an dem Sie, wenn Sie aufmerksam sind, immer noch die Atmosphäre des alten „Gartens Christi“ spüren können.\n\n• 📍 Wo sie zu finden ist: Direkt im Herzen von Zielona Góra, nur wenige Schritte vom Rathaus entfernt.\n• 💡 Talking Cities-Tipp: Wenn Sie Glück haben und jemand Orgel spielt, gehen Sie hinein und setzen Sie sich. Die Akustik des Holzes ist warm und einhüllend, ganz anders als der kalte Stein gotischer Kathedralen."
    }
  ],
  "conclusion": "",
  "conclusion_es": "",
  "conclusion_pl": "",
  "conclusion_de": "",
  "audioFiles": {},
  "relatedTourSlug": ""
}
```

## 2. Modificar las Tarjetas en `data/content/cities.json`
Añade una **nueva tarjeta** al principio del array de `"cities"` para destacar este nuevo relato en la página principal (Home):

```json
{
  "slug": "czestochowa-hidden-garden",
  "name": "Our Lady of Częstochowa",
  "tagline": "The Hidden Garden Behind the Bricks.",
  "tagline_es": "El Jardín Oculto tras los Ladrillos.",
  "tagline_pl": "Ukryty Ogród za Cegłami.",
  "tagline_de": "Der verborgene Garten hinter den Ziegeln.",
  "description": "A survivor with a fascinating identity crisis. A giant of wood and brick that hides a Prussian secret in its heart.",
  "description_es": "Una superviviente con una crisis de identidad fascinante. Un gigante de madera y ladrillo que esconde un secreto prusiano en su corazón.",
  "description_pl": "Ocalały świadek historii z fascynującym kryzysem tożsamości. Gigant z drewna i cegły, który w swoim sercu skrywa pruski sekret.",
  "description_de": "Eine Überlebende mit einer faszinierenden Identitätskrise. Ein Riese aus Holz und Ziegeln, der ein preußisches Geheimnis in seinem Herzen verbirgt.",
  "image": "/images/stories/Czestachowa1.png",
  "available": true,
  "link": "/stories/czestochowa-hidden-garden",
  "topLabel": "Story",
  "topLabel_es": "Relato",
  "topLabel_pl": "Historia",
  "topLabel_de": "Geschichte",
  "bottomLabel": "Read the History",
  "bottomLabel_es": "Lee la Historia",
  "bottomLabel_pl": "Przeczytaj Historię",
  "bottomLabel_de": "Lesen Sie die Geschichte"
}
```

## 3. Validaciones
- Asegúrate de que las imágenes `Czestachowa.jpg`, `Czestachowa1.png` y `Czestachowa2.jpg` existan y tengan las mayúsculas y minúsculas correctas en la ruta `public/images/stories/`.
- Verifica que el JSON sea válido antes de guardar. Revisa bien las comillas en los textos.
