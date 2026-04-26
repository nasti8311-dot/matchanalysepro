const games = [
{
id: "bvb-freiburg",
liga: "Bundesliga",
heim: "Borussia Dortmund",
gast: "SC Freiburg",
heimWappen: "https://crests.football-data.org/4.svg",
gastWappen: "https://crests.football-data.org/17.svg",
zeit: "Heute · 17:30 Uhr",
status: "🔥 Topspiel",
formHeim: "➖ ✅ ❌ ➖ ✅",
formGast: "✅ ✅ ➖ ❌ ✅",
wahrscheinlichkeit: { heim: 66, remis: 21, gast: 13 },
quoten: { heim: "1.80", remis: "3.80", gast: "4.50" },
tore: { over25: 58, btts: 60, under35: 65 },
h2h: { heim: 3, remis: 1, gast: 1 },
topPlayers: ["Karim Adeyemi", "Julian Brandt", "Vincenzo Grifo"],
tableInfo: { heim: "Platz 3 · 60 Punkte", gast: "Platz 8 · 42 Punkte" },
confidence: 8.7,
risikoLevel: "Niedrig",
tipp: "Dortmund Sieg",
value: "Dortmund klar überlegen zuhause.",
risiko: "Freiburg kann kontern.",
fazit: "Dortmund Sieg ist sehr wahrscheinlich."
},

{
id: "stuttgart-bremen",
liga: "Bundesliga",
heim: "VfB Stuttgart",
gast: "Werder Bremen",
heimWappen: "https://crests.football-data.org/16.svg",
gastWappen: "https://crests.football-data.org/12.svg",
zeit: "Heute · 15:30 Uhr",
status: "Top Favorit",
formHeim: "✅ ✅ ✅ ➖ ✅",
formGast: "❌ ✅ ➖ ❌ ✅",
wahrscheinlichkeit: { heim: 61, remis: 25, gast: 14 },
quoten: { heim: "1.60", remis: "4.00", gast: "5.50" },
tore: { over25: 64, btts: 55, under35: 58 },
h2h: { heim: 4, remis: 0, gast: 1 },
topPlayers: ["Guirassy", "Führich", "Ducksch"],
tableInfo: { heim: "Platz 5 · 55 Punkte", gast: "Platz 9 · 41 Punkte" },
confidence: 8.5,
risikoLevel: "Niedrig",
tipp: "Stuttgart Sieg",
value: "Stuttgart offensiv stark.",
risiko: "Bremen kann überraschen.",
fazit: "Stuttgart klarer Favorit."
},

{
id: "turin-inter",
liga: "Serie A",
heim: "Torino",
gast: "Inter Mailand",
heimWappen: "https://crests.football-data.org/586.svg",
gastWappen: "https://crests.football-data.org/108.svg",
zeit: "Heute · 18:00 Uhr",
status: "Top Favorit",
formHeim: "❌ ➖ ✅ ❌ ➖",
formGast: "➖ ❌ ✅ ➖ ❌",
wahrscheinlichkeit: { heim: 15, remis: 20, gast: 65 },
quoten: { heim: "4.50", remis: "3.50", gast: "1.75" },
tore: { over25: 50, btts: 52, under35: 70 },
h2h: { heim: 1, remis: 1, gast: 3 },
topPlayers: ["Lautaro Martinez", "Thuram", "Zapata"],
tableInfo: { heim: "Platz 9 · 44 Punkte", gast: "Platz 1 · 82 Punkte" },
confidence: 8.6,
risikoLevel: "Niedrig",
tipp: "Inter Sieg",
value: "Inter klar besser.",
risiko: "Torino defensiv stabil.",
fazit: "Inter sollte gewinnen."
},

{
id: "marseille-lille",
liga: "Ligue 1",
heim: "Olympique Marseille",
gast: "Lille OSC",
heimWappen: "https://crests.football-data.org/516.svg",
gastWappen: "https://crests.football-data.org/521.svg",
zeit: "Heute · 20:45 Uhr",
status: "Topspiel",
formHeim: "✅ ✅ ➖ ✅ ❌",
formGast: "✅ ❌ ✅ ➖ ✅",
wahrscheinlichkeit: { heim: 45, remis: 28, gast: 27 },
quoten: { heim: "2.20", remis: "3.30", gast: "3.10" },
tore: { over25: 55, btts: 60, under35: 62 },
h2h: { heim: 2, remis: 1, gast: 2 },
topPlayers: ["Aubameyang", "Harit", "David"],
tableInfo: { heim: "Platz 4 · 55 Punkte", gast: "Platz 3 · 58 Punkte" },
confidence: 7.5,
risikoLevel: "Mittel",
tipp: "Beide Teams treffen",
value: "Sehr ausgeglichen.",
risiko: "Offenes Spiel.",
fazit: "BTTS beste Option."
},

{
id: "paderborn-schalke",
liga: "2. Bundesliga",
heim: "SC Paderborn",
gast: "Schalke 04",
heimWappen: "https://crests.football-data.org/28.svg",
gastWappen: "https://crests.football-data.org/8.svg",
zeit: "Heute · 13:30 Uhr",
status: "🔥 Topspiel",
formHeim: "➖ ✅ ❌ ✅ ➖",
formGast: "✅ ✅ ✅ ➖ ➖",
wahrscheinlichkeit: { heim: 40, remis: 30, gast: 30 },
quoten: { heim: "2.80", remis: "3.30", gast: "2.60" },
tore: { over25: 52, btts: 50, under35: 68 },
h2h: { heim: 1, remis: 2, gast: 2 },
topPlayers: ["Klaas", "Terodde", "Kinsombi"],
tableInfo: { heim: "Platz 4 · 52 Punkte", gast: "Platz 10 · 39 Punkte" },
confidence: 6.8,
risikoLevel: "Hoch",
tipp: "Unter 3,5 Tore",
value: "Sehr enges Spiel.",
risiko: "Unberechenbar.",
fazit: "Defensives Spiel wahrscheinlich."
},

{
id: "dinamo-rapid",
liga: "Rumänien",
heim: "Dinamo Bukarest",
gast: "Rapid Bukarest",
heimWappen: "https://upload.wikimedia.org/wikipedia/en/thumb/2/2f/FC_Dinamo_Bucure%C8%99ti_logo.svg/512px-FC_Dinamo_Bucure%C8%99ti_logo.svg.png",
gastWappen: "https://upload.wikimedia.org/wikipedia/en/thumb/5/5c/FC_Rapid_Bucure%C8%99ti_logo.svg/512px-FC_Rapid_Bucure%C8%99ti_logo.svg.png",
zeit: "Heute · 20:00 Uhr",
status: "🔥 Derby",
formHeim: "➖ ✅ ❌ ➖ ✅",
formGast: "✅ ✅ ➖ ❌ ✅",
wahrscheinlichkeit: { heim: 37, remis: 30, gast: 33 },
quoten: { heim: "3.00", remis: "3.30", gast: "2.30" },
tore: { over25: 55, btts: 62, under35: 65 },
h2h: { heim: 1, remis: 1, gast: 3 },
topPlayers: ["Politic", "Onea", "Papeau"],
tableInfo: { heim: "Platz 6 · 38 Punkte", gast: "Platz 4 · 50 Punkte" },
confidence: 6.5,
risikoLevel: "Hoch",
tipp: "Beide Teams treffen",
value: "Derby = offen.",
risiko: "Unberechenbar.",
fazit: "BTTS sinnvoll."
}
];

function getScoreTip(game) {
const diff = game.wahrscheinlichkeit.heim - game.wahrscheinlichkeit.gast;
if (diff >= 40) return "2:0";
if (diff >= 20) return "2:1";
if (diff <= -40) return "0:2";
if (diff <= -20) return "1:2";
if (game.tore.over25 >= 60) return "2:2";
return "1:1";
}

function getAiText(game) {
const fav = game.wahrscheinlichkeit.heim > game.wahrscheinlichkeit.gast ? game.heim : game.gast;
return fav + " hat laut Modell Vorteile. Form und Heimvorteil spielen eine wichtige Rolle.";
}

function getStars(confidence) {
if (confidence >= 8.5) return "★★★★★";
if (confidence >= 7.5) return "★★★★☆";
if (confidence >= 6.5) return "★★★☆☆";
return "★★☆☆☆";
}

function crest(url) {
return `<img src="${url}" class="crest" onerror="this.outerHTML='⚽'">`;
}

function teamLine(wappen, name) {
return `<span>${crest(wappen)} ${name}</span>`;
}
