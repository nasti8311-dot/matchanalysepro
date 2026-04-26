// 🔒 FIX LOGOS (funktionieren immer)
const PADERBORN_LOGO = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='46' fill='%230b5cab'/%3E%3Ccircle cx='50' cy='50' r='38' fill='white'/%3E%3Ctext x='50' y='55' text-anchor='middle' font-size='16' font-weight='900' fill='%230b5cab'%3ESCP07%3C/text%3E%3C/svg%3E";

const DINAMO_LOGO = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='46' fill='%23c8102e'/%3E%3Ctext x='50' y='55' text-anchor='middle' font-size='16' font-weight='900' fill='white'%3EDIN%3C/text%3E%3C/svg%3E";

const RAPID_LOGO = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='46' fill='%237b1b2b'/%3E%3Ctext x='50' y='55' text-anchor='middle' font-size='16' font-weight='900' fill='%23f4c542'%3ERAPID%3C/text%3E%3C/svg%3E";


// ⚽ SPIELE
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
topPlayers: ["Adeyemi", "Brandt", "Grifo"],
tableInfo: { heim: "Platz 3", gast: "Platz 8" },
confidence: 8.7,
tipp: "Dortmund Sieg",
fazit: "Dortmund klarer Favorit."
},

{
id: "stuttgart-bremen",
liga: "Bundesliga",
heim: "VfB Stuttgart",
gast: "Werder Bremen",
heimWappen: "https://crests.football-data.org/10.svg",
gastWappen: "https://crests.football-data.org/12.svg",
zeit: "Heute · 15:30 Uhr",
status: "Top Favorit",
formHeim: "✅ ✅ ✅ ➖ ✅",
formGast: "❌ ✅ ➖ ❌ ✅",
wahrscheinlichkeit: { heim: 61, remis: 25, gast: 14 },
quoten: { heim: "1.60", remis: "4.00", gast: "5.50" },
tore: { over25: 64, btts: 55, under35: 58 },
topPlayers: ["Guirassy", "Führich", "Ducksch"],
tableInfo: { heim: "Platz 5", gast: "Platz 9" },
confidence: 8.5,
tipp: "Stuttgart Sieg",
fazit: "Stuttgart klar besser."
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
wahrscheinlichkeit: { heim: 15, remis: 20, gast: 65 },
topPlayers: ["Lautaro", "Thuram", "Zapata"],
tableInfo: { heim: "Platz 9", gast: "Platz 1" },
confidence: 8.6,
tipp: "Inter Sieg",
fazit: "Inter dominiert."
},

{
id: "marseille-lille",
liga: "Ligue 1",
heim: "Marseille",
gast: "Lille",
heimWappen: "https://crests.football-data.org/516.svg",
gastWappen: "https://crests.football-data.org/521.svg",
zeit: "Heute · 20:45 Uhr",
status: "Topspiel",
wahrscheinlichkeit: { heim: 45, remis: 28, gast: 27 },
topPlayers: ["Aubameyang", "David"],
tableInfo: { heim: "Platz 4", gast: "Platz 3" },
confidence: 7.5,
tipp: "BTTS",
fazit: "Sehr eng."
},

{
id: "paderborn-schalke",
liga: "2. Bundesliga",
heim: "Paderborn",
gast: "Schalke",
heimWappen: PADERBORN_LOGO,
gastWappen: "https://crests.football-data.org/6.svg",
zeit: "Heute · 13:30 Uhr",
status: "🔥 Topspiel",
wahrscheinlichkeit: { heim: 40, remis: 30, gast: 30 },
topPlayers: ["Bilbija", "Terodde"],
tableInfo: { heim: "Platz 4", gast: "Platz 10" },
confidence: 6.8,
tipp: "Under 3.5",
fazit: "Enges Spiel."
},

{
id: "dinamo-rapid",
liga: "Rumänien",
heim: "Dinamo",
gast: "Rapid",
heimWappen: DINAMO_LOGO,
gastWappen: RAPID_LOGO,
zeit: "Heute · 20:00 Uhr",
status: "🔥 Derby",
wahrscheinlichkeit: { heim: 37, remis: 30, gast: 33 },
topPlayers: ["Politic", "Rrahmani"],
tableInfo: { heim: "Platz 6", gast: "Platz 4" },
confidence: 6.5,
tipp: "BTTS",
fazit: "Derby = unberechenbar."
}
];


// 📰 NEWS AUTOMATISCH
const news = games.map(g => ({
title: `${g.heim} vs ${g.gast}`,
date: "Heute",
content: `${g.tipp} wird empfohlen. Confidence ${g.confidence}/10. ${g.fazit}`
}));

// ❌ KEINE TABELLEN
const tables = {};
