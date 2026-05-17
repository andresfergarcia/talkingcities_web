# 📝 Plan de Acción: Añadir Relato - El Mayo Olvidado (Casa Católica)

Este plan detalla los cambios para añadir el nuevo artículo en `stories.json` y actualizar la sección de tarjetas en `cities.json`.

## 1. Modificar `data/content/stories.json`
Añade este **nuevo objeto** al array de `"stories"`, preferiblemente al principio. Asegúrate de separar los objetos con una coma `,`.

```json
{
  "slug": "forgotten-may-catholic-house",
  "city": "Zielona Góra",
  "city_es": "Zielona Góra",
  "city_pl": "Zielona Góra",
  "city_de": "Grünberg",
  "citySlug": "zielona-gora",
  "type": "Voices of Resistance",
  "title": "The Forgotten May: When Zielona Góra vanished in tear gas.",
  "title_es": "El Mayo Olvidado: Cuando Zielona Góra desapareció en gas lacrimógeno.",
  "title_pl": "Zapomniany Maj: Gdy Zielona Góra utonęła w gazie łzawiącym.",
  "title_de": "Der vergessene Mai: Als Zielona Góra in Tränengas versank.",
  "introduction": "By: Talking Cities Editorial Staff.\n\nOften, the history of Polish resistance against communism is narrated as a chronological leap. It jumps from the machine guns turned against workers and students in the streets of Poznań in June 1956 straight to the shipyard strikes in Gdańsk in 1970. However, within that fourteen-year vacuum lies a deep and frequently ignored rift. The defense of the Catholic House (Dom Katolicki) was an event that took place on May 30, 1960, in Zielona Góra—a city located in western Poland, about five hours from Warsaw. At the time, it had a population of just over 54,000 inhabitants. This historic moment was not a workers' strike for bread, but something more complex: a fierce defense of civil autonomy against a State attempting to claim total control over social life.",
  "introduction_es": "Por: Redacción Talking Cities.\n\nA menudo, la historia de la resistencia polaca contra el comunismo se narra como un salto cronológico, pues de las ametralladoras contra obreros y estudiantes, en las calles de Poznań en junio de 1956, salta a las huelgas de los astilleros de Gdańsk en 1970. Sin embargo, en ese vacío de catorce años existe una grieta profunda y frecuentemente ignorada. La defensa de la Casa Católica, un evento ocurrió el 30 de mayo de 1960 en Zielona Góra, una ciudad ubicada al oeste de Polonia, a unas cinco horas de Varsovia. Contaba en aquel momento con poco más de 54.000 habitantes. Este momento histórico no fue una huelga obrera por pan, sino algo más complejo, una defensa feroz de la autonomía civil frente a un Estado que intentaba reclamar el control total sobre la vida social.",
  "introduction_pl": "Autor: Redakcja Talking Cities.\n\nHistoria polskiego oporu przeciwko komunizmowi jest często opowiadana jako chronologiczny skok. Od karabinów maszynowych skierowanych przeciwko robotnikom i studentom na ulicach Poznania w czerwcu 1956 roku, przechodzi się od razu do strajków w stoczniach Gdańska w 1970 roku. Jednak w tej czternastoletniej próżni istnieje głęboka i często ignorowana rysa. Obrona Domu Katolickiego to wydarzenie, które miało miejsce 30 maja 1960 roku w Zielonej Górze – mieście położonym w zachodniej Polsce, oddalonym o około pięć godzin drogi od Warszawy. Liczyło ono wówczas nieco ponad 54 tysiące mieszkańców. Ten historyczny moment nie był robotniczym strajkiem o chleb, lecz czymś znacznie bardziej złożonym: zaciekłą obroną obywatelskiej autonomii przed państwem, które próbowało narzucić całkowitą kontrolę nad życiem społecznym.",
  "introduction_de": "Von: Redaktion Talking Cities.\n\nOft wird die Geschichte des polnischen Widerstands gegen den Kommunismus als chronologischer Sprung erzählt. Von den Maschinengewehren, die im Juni 1956 in den Straßen von Poznań gegen Arbeiter und Studenten gerichtet wurden, springt die Erzählung direkt zu den Werftstreiks in Gdańsk im Jahr 1970. Doch in diesem Vakuum von vierzehn Jahren liegt ein tiefer und häufig ignorierter Riss. Die Verteidigung des Katholischen Hauses (Dom Katolicki) war ein Ereignis, das sich am 30. Mai 1960 in Zielona Góra abspielte – einer Stadt im Westen Polens, etwa fünf Stunden von Warschau entfernt. Sie zählte damals etwas mehr als 54.000 Einwohner. Dieser historische Moment war kein Arbeiterstreik für Brot, sondern etwas weitaus Komplexeres: eine erbitterte Verteidigung der zivilen Autonomie gegenüber einem Staat, der versuchte, die totale Kontrolle über das gesellschaftliche Leben zu erlangen.",
  "image": "/images/stories/Casa_Catolica1.jpg",
  "sections": [
    {
      "title": "The Context",
      "title_es": "El Contexto",
      "title_pl": "Kontekst",
      "title_de": "Der Kontext",
      "image": "/images/stories/Casa_Catolica2.jpg",
      "content": "To understand this moment, it must be placed in its real context. Zielona Góra was not an isolated event, but rather the climax of an \"iron spring\" that had already seen outbreaks in Kraśnik and Nowa Huta just weeks earlier. The government of Władysław Gomułka, First Secretary of the Polish United Workers' Party (PZPR), had come to power in 1956 promising an era of peace. However, documents from the Institute of National Remembrance (IPN) reveal that this \"Polish way to socialism\" was, in reality, an authoritarian retreat disguised as reform. The Catholic House was not merely a brick building that the State wanted to nationalize under administrative excuses; it was a social center of gravity. With its theater halls and meeting spaces, it represented the last lung of a city that refused to be suffocated by official ideology. Its defense was, in essence, the first major battle for the right to the city and community property in post-war Poland.",
      "content_es": "Para entender este momento, hay que situarlo en su contexto real: Zielona Góra no fue un evento aislado, sino el clímax de una primavera de hierro que ya había visto estallidos en Kraśnik y Nowa Huta apenas semanas antes. El gobierno del Primer Secretario del Partido Obrero Unificado Polaco (PZPR), Władysław Gomułka, llegó al poder en 1956 prometiendo una era de paz, pero documentos del Instituto de la Memoria Nacional (IPN) revelan que la \"vía polaca al socialismo\" era, en realidad, un retroceso autoritario disfrazado de reforma. La Casa Católica no era solo un edificio de ladrillos que el Estado quería nacionalizar bajo excusas administrativas; era un centro de gravedad social. Con sus salas de teatro y espacios de reunión, representaba el último pulmón de una ciudad que se negaba a ser asfixiada por la ideología oficial. Su defensa fue, en esencia, la primera gran batalla por el derecho a la ciudad y a la propiedad comunitaria en la Polonia de la posguerra.",
      "content_pl": "Aby zrozumieć ten moment, należy umieścić go w realiach tamtego czasu: Wydarzenia w Zielonej Górze nie były odizolowanym incydentem, lecz punktem kulminacyjnym „żelaznej wiosny”, której wybuchy miały miejsce w Kraśniku i Nowej Hucie zaledwie kilka tygodni wcześniej. Rząd Pierwszego Sekretarza Polskiej Zjednoczonej Partii Robotniczej (PZPR), Władysława Gomułki, doszedł do władzy w 1956 roku, obiecując erę spokoju. Jednak dokumenty Instytutu Pamięci Narodowej (IPN) ujawniają, że „polska droga do socjalizmu” była w rzeczywistości autorytarnym regresem maskowanym jako reforma. Dom Katolicki nie był tylko murowanym budynkiem, który państwo chciało przejąć pod pretekstami administracyjnymi; był społecznym środkiem ciężkości. Ze swoimi salami teatralnymi i miejscami spotkań stanowił ostatnie płuco miasta, które nie pozwalało się udusić oficjalnej ideologii. Jego obrona była w istocie pierwszą wielką bitwą o prawo do miasta i własności wspólnotowej w powojennej Polsce.",
      "content_de": "Um diesen Moment zu verstehen, muss man ihn in seinen realen Kontext einordnen: Die Ereignisse in Zielona Góra waren kein isolierter Vorfall, sondern der Höhepunkt eines „eisernen Frühlings“, der nur wenige Wochen zuvor bereits in Kraśnik und Nowa Huta zu Ausbrüchen geführt hatte. Die Regierung des Ersten Sekretärs der Polnischen Vereinigten Arbeiterpartei (PZPR), Władysław Gomułka, war 1956 mit dem Versprechen einer Ära des Friedens an die Macht gekommen. Dokumente des Instituts für Nationales Gedenken (IPN) enthüllen jedoch, dass der „polnische Weg zum Sozialismus“ in Wirklichkeit ein autoritärer Rückschritt im Gewand einer Reform war. Das Katholische Haus war nicht nur ein Backsteingebäude, das der Staat unter administrativen Vorwänden verstaatlichen wollte; es war ein gesellschaftlicher Schwerpunkt. Mit seinen Theatersälen und Versorgungsräumen repräsentierte es die letzte Lunge einer Stadt, die sich weigerte, von der offiziellen Ideologie erstickt zu werden. Seine Verteidigung war im Wesentlichen der erste große Kampf um das Recht auf Stadt und Gemeinschaftseigentum im Nachkriegspolen."
    },
    {
      "title": "A Tactical Laboratory",
      "title_es": "Un Laboratorio Táctico",
      "title_pl": "Laboratorium taktyczne",
      "title_de": "Ein taktisches Labor",
      "image": "/images/stories/Casa_Catolica3.jpg",
      "content": "On May 30, nearly 5,000 citizens rose up against the Party's new order. It all began with a group of women blocking the building's entrance. What followed was an escalation that the regime utilized as a tactical laboratory. The events at the Catholic House in Zielona Góra served as the graduation ceremony for the ZOMO (Zmotoryzowane Odwody Milicji Obywatelskiej), created in 1956, turning it into a unit for social control and an arm of urban occupation, showcasing its strength in a completely disproportionate deployment: 1,300 units of chemical agents (the first massive deployment of tear gas used to suffocate an urban center), 5,000 participants (an overwhelming figure considering the city's demographics), and intense Workers' resistance. Although the trigger was religious, of the 333 people arrested, the vast majority were workers from local factories, not just church leaders. Class solidarity was activated to defend a space of freedom.",
      "content_es": "El 30 de mayo, cerca de 5.000 ciudadanos se alzaron contra el nuevo orden del Partido. Todo comenzó con un grupo de mujeres bloqueando la entrada del edificio. Lo que siguió después fue una escalada que el régimen utilizó como laboratorio táctico. El evento de la Casa Católica en Zielona Góra, sirvió para que el ZOMO (Zmotoryzowane Odwody Milicji Obywatelskiej), creado en 1956, se graduara como una unidad de control social y brazo de ocupación urbana, mostrando su fuerza en un despliegue totalmente desproporcionado: 1.300 unidades de medios químicos (fue el debut masivo del gas lacrimógeno para asfixiar un centro urbano), 5.000 participantes (una cifra abrumadora considerando la demografía), y una fuerte resistencia obrera. Aunque el detonante fue religioso, de los 333 arrestados, la gran mayoría eran obreros de las fábricas locales, no solo líderes eclesiásticos. La solidaridad de clase se activó para defender un espacio de libertad.",
      "content_pl": "30 maja blisko 5000 obywateli wystąpiło przeciwko nowemu porządkowi Partii. Wszystko zaczęło się od grupy kobiet, które zablokowały wejście do budynku. To, co nastąpiło później, było eskalacją, którą reżim wykorzystał jako laboratorium taktyczne. Wydarzenia wokół Domu Katolickiego w Zielonej Górze posłużyły ZOMO (Zmotoryzowanym Odwodom Milicji Obywatelskiej), utworzonym w 1956 roku, jako chrzest bojowy w roli jednostki kontroli społecznej i ramienia okupacji miejskiej, demonstrując swoją siłę w całkowicie nieproporcjonalnym wymiarze: 1300 sztuk środków chemicznych (debiut gazu łzawiącego na masową skalę), 5000 uczestników (liczba oszałamiająca dla miasta) oraz ogromny opór robotniczy. Choć impulsem była kwestia religijna, wśród 333 aresztowanych ogromną większość stanowili robotnicy z lokalnych fabryk. Solidarność klasowa uruchomiła się, by bronić przestrzeni wolności.",
      "content_de": "Am 30. Mai erhoben sich fast 5.000 Bürger gegen die neue Ordnung der Partei. Alles begann mit einer Gruppe von Frauen, die den Eingang des Gebäudes blockierten. Was folgte, war eine Eskalation, die das Regime als taktisches Labor nutzte. Die Ereignisse um das Katholische Haus in Zielona Góra dienten der 1956 gegründeten ZOMO (Zmotoryzowane Odwody Milicji Obywatelskiej) als Feuertaufe für ihre Rolle als Einheit zur gesellschaftlichen Kontrolle und Arm der städtischen Besatzung. Dabei demonstrierte sie ihre Macht in einem völlig unverhältnismäßigen Ausmaß: 1.300 Einheiten chemischer Kampfstoffe (der erste massive Einsatz von Tränengas), 5.000 Teilnehmer (eine überwältigende Zahl für die damalige Demografie) und Arbeiterwiderstand. Obwohl der Auslöser religiöser Natur war, war von den 333 Verhafteten die große Mehrheit Arbeiter aus den örtlichen Fabriken. Die Klassensolidarität formierte sich, um einen Raum der Freiheit zu verteidigen."
    },
    {
      "title": "The First Dress Rehearsal",
      "title_es": "El Primer Ensayo General",
      "title_pl": "Pierwsza próba generalna",
      "title_de": "Die erste Generalprobe",
      "content": "To strip the event of its political weight, authorities labeled the protesters as chuligani (hooligans or vandals). This framing, produced by the Polish United Workers' Party (PZPR), was no accident. By criminalizing the protest as street vandalism, the State attempted to erase its legitimacy. Prison sentences of up to five years did not seek to punish public disorder, but rather to send a clear message: the 1956 truce was officially over. The silence imposed for decades was proof of the regime's success—and its fear. What happened at the Catholic House in Zielona Góra in 1960 was the first dress rehearsal for modern repression. There, the regime discovered it could informationally isolate a city and crush dissent before it spread to the rest of the country. Today, looking at the symbolic mural or the monument to Father Kazimierz Michalski, the question for the inhabitant of a modern Europe is not just about faith, but about the ownership of public space. To whom does the city belong? In 1960, the citizens of Zielona Góra decided it did not belong to the Party, and they paid the price for remembering it.",
      "content_es": "Para despojar al evento de su peso político, las autoridades tildaron a los manifestantes de chuligani (hooligans o vándalos). Este enmarcado producido por el Partido Obrero Unificado Polaco (PZPR), no era casual. Al criminalizar la protesta como un acto de vandalismo callejero, el Estado intentaba borrar la legitimidad de la protesta. Las sentencias de hasta cinco años de prisión no buscaban castigar desórdenes públicos, sino enviar un mensaje claro: la tregua de 1956 había terminado oficialmente. El silencio que se impuso durante décadas fue la prueba del éxito —y del miedo— del régimen. Lo ocurrido en la Casa Católica de Zielona Góra en 1960, fue el primer ensayo general de la represión moderna. Allí, el régimen descubrió que podía aislar informativamente a una ciudad y aplastar la disidencia antes de que se contagiara al resto del país. Hoy, al observar el mural simbólico o el monument al padre Kazimierz Michalski, la pregunta para el habitante de una Europa moderna no es solo sobre la fe, sino sobre la propiedad del espacio público. ¿A quién pertenece la ciudad? En 1960, los ciudadanos de Zielona Góra decidieron que no pertenecía al Partido, y pagaron el precio por recordarlo.",
      "content_pl": "Aby pozbawić to wydarzenie politycznego ciężaru, władze określiły manifestantów mianem „chuliganów”. Ta narracja narzucona przez PZPR nie była przypadkowa. Kryminalizując protest jako akt ulicznego wandalizmu, państwo próbowało odebrać mu legitymizację. Wyroki do pięciu lat więzienia nie miały na celu jedynie ukarania zakłócania porządku publicznego, ale były jasnym sygnałem: rozejm z 1956 roku oficjalnie dobiegł końca. Milczenie, które narzucono na dziesięciolecia, było dowodem sukcesu — i strachu — reżimu. To, co wydarzyło się w Domu Katolickim w Zielonej Górze w 1960 roku, było pierwszą próbą generalną nowoczesnej represji. Tam reżim odkrył, że może odciąć miasto informacyjnie i zmiażdżyć opór, zanim ten rozprzestrzeni się na resztę kraju. Dziś, patrząc na symboliczny mural czy pomnik księdza Kazimierza Michalskiego, pytanie dla mieszkańca współczesnej Europy nie dotyczy wyłącznie wiary, ale własności przestrzeni publicznej. Do kogo należy miasto? W 1960 roku mieszkańcy Zielonej Górze uznali, że nie należy ono do Partii, i zapłacili wysoką cenę za to, że o tym przypomnieli.",
      "content_de": "Um dem Ereignis sein politisches Gewicht zu nehmen, brandmarkten die Behörden die Demonstranten als chuligani (Hooligans oder Vandalen). Diese von der Polnischen Vereinigten Arbeiterpartei (PZPR) konstruierte Darstellung war kein Zufall. Indem der Staat den Protest als Straßenvandalismus kriminalisierte, versuchte er, dessen Legitimität auszulöschen. Die Haftstrafen von bis zu fünf Jahren bezweckten nicht die Bestrafung öffentlicher Ruhestörung, sondern sollten eine klare Botschaft senden: Der Waffenstillstand von 1956 war offiziell vorbei. Das Schweigen, das über Jahrzehnte hinweg auferlegt wurde, war der Beweis für den Erfolg – und die Angst – des Regimes. Was sich 1960 am Katholischen Haus in Zielona Góra ereignete, war die erste Generalprobe der modernen Repression. Dort entdeckte das Regime, dass es eine Stadt informationstechnisch isolieren und den Dissens zerschlagen konnte, bevor er auf den Rest des Landes übergriff. Wenn man heute das symbolische Wandgemälde oder das Denkmal für Pater Kazimierz Michalski betrachtet, lautet die Frage für den Bewohner eines modernen Europas nicht nur jene nach dem Glauben, sondern nach dem Eigentum am öffentlichen Raum. Wem gehört die Stadt? 1960 entschieden die Bürger von Zielona Góra, dass sie nicht der Partei gehörte – und sie zahlten den Preis dafür, sich daran zu erinnern."
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
Añade una **nueva tarjeta** al principio del array de `"cities"` para destacar este relato en la página principal (Home):

```json
{
  "slug": "forgotten-may-catholic-house",
  "name": "The Forgotten May",
  "tagline": "The Defense of the Catholic House.",
  "tagline_es": "La Defensa de la Casa Católica.",
  "tagline_pl": "Obrona Domu Katolickiego.",
  "tagline_de": "Die Verteidigung des Katholischen Hauses.",
  "description": "A historic moment that was not a workers' strike for bread, but a fierce defense of civil autonomy against the State.",
  "description_es": "Un momento histórico que no fue una huelga obrera por pan, sino una defensa feroz de la autonomía civil frente al Estado.",
  "description_pl": "Historyczny moment, który nie był strajkiem robotniczym o chleb, lecz zaciekłą obroną autonomii obywatelskiej przed Państwem.",
  "description_de": "Ein historischer Moment, der kein Arbeiterstreik für Brot war, sondern eine erbitterte Verteidigung der zivilen Autonomie gegen den Staat.",
  "image": "/images/stories/Casa_Catolica1.jpg",
  "available": true,
  "link": "/stories/forgotten-may-catholic-house",
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
- Asegúrate de que las imágenes `Casa_Catolica1.jpg`, `Casa_Catolica2.jpg` y `Casa_Catolica3.jpg` existan y estén escritas con las mayúsculas/minúsculas exactamente igual en la carpeta `public/images/stories/`.
- Verifica que el JSON sea válido antes de guardar (que no falten comas separando los elementos).
