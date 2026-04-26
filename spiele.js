const games = [
  {
    id: "bvb-freiburg",
    liga: "Bundesliga",
    heim: "Borussia Dortmund",
    gast: "SC Freiburg",
    heimWappen: "https://crests.football-data.org/4.svg",
    gastWappen: "https://crests.football-data.org/17.svg",
    zeit: "Heute · 17:30 Uhr",
    status: "Topspiel",
    formHeim: "➖ ✅ ❌ ➖ ✅",
    formGast: "✅ ✅ ➖ ❌ ✅",
    wahrscheinlichkeit: { heim: 66, remis: 21, gast: 13 },
    quoten: { heim: "1.55", remis: "4.20", gast: "5.50" },
    tore: { over25: 56, btts: 61, under35: 66 },
    h2h: { heim: 3, remis: 1, gast: 1 },
    topPlayers: ["Karim Adeyemi", "Julian Brandt", "Vincenzo Grifo"],
    confidence: 8.7,
    risikoLevel: "Niedrig",
    tipp: "Borussia Dortmund Sieg",
    value: "Dortmund hat Heimvorteil und klare Qualitätsvorteile. Freiburg bleibt über Standards und Konter gefährlich.",
    risiko: "Freiburg ist taktisch diszipliniert und kann das Spiel lange offen halten.",
    fazit: "Borussia Dortmund Sieg ist der stärkste Ansatz. Confidence: 8.7/10, Risiko: Niedrig."
  },
  {
    id: "stuttgart-bremen",
    liga: "Bundesliga",
    heim: "VfB Stuttgart",
    gast: "Werder Bremen",
    heimWappen: "https://crests.football-data.org/10.svg",
    gastWappen: "https://crests.football-data.org/12.svg",
    zeit: "Heute · 15:30 Uhr",
    status: "Tortrend",
    formHeim: "✅ ✅ ✅ ➖ ✅",
    formGast: "❌ ✅ ➖ ❌ ✅",
    wahrscheinlichkeit: { heim: 61, remis: 24, gast: 15 },
    quoten: { heim: "1.65", remis: "4.00", gast: "5.10" },
    tore: { over25: 64, btts: 55, under35: 58 },
    h2h: { heim: 3, remis: 1, gast: 1 },
    topPlayers: ["Deniz Undav", "Chris Führich", "Marvin Ducksch"],
    confidence: 8.2,
    risikoLevel: "Niedrig",
    tipp: "VfB Stuttgart Sieg",
    value: "Stuttgart bringt viel Offensivqualität und Heimstärke mit. Bremen kann über Umschaltmomente gefährlich werden.",
    risiko: "Bremen ist offensiv nicht ungefährlich und kann bei frühem Tor den Spielverlauf öffnen.",
    fazit: "Stuttgart Sieg ist der Haupttipp, Over 2,5 Tore bleibt interessant."
  },
  {
    id: "turin-inter",
    liga: "Serie A",
    heim: "FC Turin",
    gast: "Inter Mailand",
    heimWappen: "https://crests.football-data.org/586.svg",
    gastWappen: "https://crests.football-data.org/108.svg",
    zeit: "Heute · 18:00 Uhr",
    status: "Top Favorit",
    formHeim: "❌ ➖ ✅ ❌ ➖",
    formGast: "✅ ✅ ✅ ➖ ✅",
    wahrscheinlichkeit: { heim: 12, remis: 18, gast: 70 },
    quoten: { heim: "7.50", remis: "4.50", gast: "1.42" },
    tore: { over25: 47, btts: 54, under35: 73 },
    h2h: { heim: 1, remis: 1, gast: 3 },
    topPlayers: ["Duván Zapata", "Lautaro Martínez", "Hakan Çalhanoğlu"],
    confidence: 8.8,
    risikoLevel: "Niedrig",
    tipp: "Inter Mailand Sieg",
    value: "Inter ist individuell und strukturell klar stärker. Turin dürfte defensiv kompakt stehen.",
    risiko: "Turin kann zuhause kämpferisch auftreten und das Spiel lange eng halten.",
    fazit: "Inter Sieg ist der klarste Serie-A-Tipp des Tages."
  },
  {
    id: "galatasaray-fenerbahce",
    liga: "Süper Lig",
    heim: "Galatasaray",
    gast: "Fenerbahce",
    heimWappen: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3f/Galatasaray_Sports_Club_Logo.svg/512px-Galatasaray_Sports_Club_Logo.svg.png",
    gastWappen: "https://upload.wikimedia.org/wikipedia/en/thumb/8/8c/Fenerbah%C3%A7e_SK_logo.svg/512px-Fenerbah%C3%A7e_SK_logo.svg.png",
    zeit: "Heute · 19:00 Uhr",
    status: "Topspiel",
    formHeim: "✅ ❌ ➖ ❌ ✅",
    formGast: "✅ ✅ ❌ ✅ ➖",
    wahrscheinlichkeit: { heim: 42, remis: 29, gast: 29 },
    quoten: { heim: "2.25", remis: "3.45", gast: "3.10" },
    tore: { over25: 62, btts: 64, under35: 55 },
    h2h: { heim: 2, remis: 1, gast: 2 },
    topPlayers: ["Mauro Icardi", "Dries Mertens", "Edin Džeko"],
    confidence: 7.0,
    risikoLevel: "Mittel",
    tipp: "Beide Teams treffen",
    value: "Das Derby bringt hohe Intensität und offensive Qualität auf beiden Seiten.",
    risiko: "Derbys sind emotional und schwer berechenbar.",
    fazit: "BTTS wirkt stärker als ein reiner Sieg-Tipp."
  },
  {
    id: "marseille-lille",
    liga: "Ligue 1",
    heim: "Olympique Marseille",
    gast: "OSC Lille",
    heimWappen: "https://crests.football-data.org/516.svg",
    gastWappen: "https://crests.football-data.org/521.svg",
    zeit: "Heute · 20:45 Uhr",
    status: "Topspiel",
    formHeim: "✅ ✅ ➖ ✅ ❌",
    formGast: "✅ ❌ ✅ ➖ ✅",
    wahrscheinlichkeit: { heim: 40, remis: 30, gast: 30 },
    quoten: { heim: "2.35", remis: "3.25", gast: "3.00" },
    tore: { over25: 57, btts: 58, under35: 63 },
    h2h: { heim: 2, remis: 1, gast: 2 },
    topPlayers: ["Pierre-Emerick Aubameyang", "Jonathan David", "Rémy Cabella"],
    confidence: 6.8,
    risikoLevel: "Hoch",
    tipp: "Beide Teams treffen",
    value: "Marseille hat Heimvorteil, Lille ist aber spielerisch stark genug für eigene Chancen.",
    risiko: "Das Spiel ist ausgeglichen und kann taktisch vorsichtig beginnen.",
    fazit: "BTTS ist spannender als ein 1X2-Tipp."
  },
  {
    id: "paderborn-schalke",
    liga: "2. Bundesliga",
    heim: "SC Paderborn 07",
    gast: "FC Schalke 04",
    heimWappen: "https://crests.football-data.org/28.svg",
    gastWappen: "https://crests.football-data.org/6.svg",
    zeit: "Heute · 13:30 Uhr",
    status: "Topspiel",
    formHeim: "➖ ✅ ❌ ✅ ➖",
    formGast: "✅ ✅ ✅ ✅ ➖",
    wahrscheinlichkeit: { heim: 40, remis: 29, gast: 31 },
    quoten: { heim: "2.50", remis: "3.45", gast: "2.75" },
    tore: { over25: 52, btts: 48, under35: 68 },
    h2h: { heim: 1, remis: 2, gast: 2 },
    topPlayers: ["Filip Bilbija", "Kenan Karaman", "Simon Terodde"],
    confidence: 7.0,
    risikoLevel: "Hoch",
    tipp: "Unter 3,5 Tore",
    value: "Das Spiel wirkt ausgeglichen. Paderborn ist zuhause gefährlich, Schalke bringt individuelle Qualität mit.",
    risiko: "Die Partie kann durch ein frühes Tor schnell offener werden.",
    fazit: "Under 3,5 Tore ist der vorsichtigste Ansatz."
  },
  {
    id: "dinamo-rapid",
    liga: "Superliga Romania",
    heim: "Dinamo Bukarest",
    gast: "Rapid Bukarest",
    heimWappen: "https://upload.wikimedia.org/wikipedia/en/thumb/2/2f/FC_Dinamo_Bucure%C8%99ti_logo.svg/512px-FC_Dinamo_Bucure%C8%99ti_logo.svg.png",
    gastWappen: "https://upload.wikimedia.org/wikipedia/en/thumb/5/5c/FC_Rapid_Bucure%C8%99ti_logo.svg/512px-FC_Rapid_Bucure%C8%99ti_logo.svg.png",
    zeit: "Heute · 20:00 Uhr",
    status: "Topspiel",
    formHeim: "➖ ✅ ❌ ➖ ✅",
    formGast: "✅ ✅ ➖ ❌ ✅",
    wahrscheinlichkeit: { heim: 37, remis: 29, gast: 34 },
    quoten: { heim: "2.70", remis: "3.35", gast: "2.55" },
    tore: { over25: 56, btts: 61, under35: 66 },
    h2h: { heim: 1, remis: 1, gast: 3 },
    topPlayers: ["Dennis Politic", "Florent Hasani", "Albion Rrahmani"],
    confidence: 6.2,
    risikoLevel: "Hoch",
    tipp: "Beide Teams treffen",
    value: "Das Bukarest-Derby ist emotional und schwer zu prognostizieren. Beide Teams können über Intensität gefährlich werden.",
    risiko: "Derby-Charakter, Karten und Nervosität können die Analyse stark beeinflussen.",
    fazit: "BTTS ist interessant, aber mit hohem Risiko."
  }
];

const news = [
  {
    category: "Bundesliga",
    title: "Dortmund vs Freiburg: BVB mit Topspiel-Druck",
    date: "Heute",
    content: "Borussia Dortmund geht als Favorit in das Duell gegen den SC Freiburg. Der BVB braucht Kontrolle im Ballbesitz und Effizienz im letzten Drittel. Freiburg wird versuchen, kompakt zu stehen und über Standards oder Konter gefährlich zu werden. Für die Analyse spricht viel für Dortmund, aber Freiburg ist bekannt dafür, Favoriten lange zu ärgern."
  },
  {
    category: "Bundesliga",
    title: "Stuttgart vs Bremen: Offensive Qualität im Fokus",
    date: "Heute",
    content: "Der VfB Stuttgart bringt aktuell viel Tempo, Kombinationsspiel und Heimstärke mit. Werder Bremen kann über schnelle Umschaltmomente gefährlich werden, wirkt defensiv aber anfällig. Deshalb ist Stuttgart der Favorit, während zusätzlich der Tor-Markt interessant bleibt."
  },
  {
    category: "Serie A",
    title: "Turin vs Inter: Inter mit klaren Vorteilen",
    date: "Heute",
    content: "Inter Mailand reist mit klarer Favoritenrolle zum FC Turin. Die Gäste haben mehr Struktur, mehr Qualität im Mittelfeld und mehr Durchschlagskraft im Angriff. Turin wird versuchen, das Spiel über defensive Stabilität eng zu halten. Inter bleibt dennoch der logische Tipp."
  },
  {
    category: "Süper Lig",
    title: "Galatasaray vs Fenerbahce: Derby mit maximaler Spannung",
    date: "Heute",
    content: "Das Istanbul-Derby zwischen Galatasaray und Fenerbahce ist eines der emotionalsten Spiele des Tages. Beide Teams bringen offensive Qualität und enorme Motivation mit. In solchen Spielen ist die Tagesform extrem wichtig. Deshalb wirkt Beide Teams treffen stabiler als ein klarer Sieg-Tipp."
  },
  {
    category: "Ligue 1",
    title: "Marseille vs Lille: ausgeglichenes Topspiel",
    date: "Heute",
    content: "Olympique Marseille trifft auf OSC Lille in einem engen Ligue-1-Duell. Marseille hat den Heimvorteil, Lille bringt spielerische Qualität und Tempo mit. Die Partie kann taktisch geprägt sein, bietet aber auf beiden Seiten Chancen. Beide Teams treffen ist daher ein sinnvoller Ansatz."
  },
  {
    category: "2. Bundesliga",
    title: "Paderborn vs Schalke: Topspiel mit Risiko",
    date: "Heute",
    content: "SC Paderborn gegen FC Schalke 04 verspricht Intensität und viele Zweikämpfe. Beide Teams können gefährlich werden, gleichzeitig wirkt das Spiel schwer vorherzusagen. Under 3,5 Tore ist ein vorsichtiger Ansatz, weil beide Seiten nicht zu früh ins Risiko gehen dürften."
  },
  {
    category: "Superliga Romania",
    title: "Dinamo vs Rapid: Bukarest-Derby im Fokus",
    date: "Heute",
    content: "Dinamo Bukarest gegen Rapid Bukarest bringt Derby-Atmosphäre, Emotionen und viel Spannung. In solchen Spielen zählt oft weniger die Tabelle, sondern Mentalität und Nervenstärke. Beide Teams treffen ist interessant, bleibt aber wegen des Derby-Charakters ein riskanter Tipp."
  }
];

const tables = {
  "Bundesliga": [
    { pos: 1, team: "Bayer Leverkusen", wappen: "https://crests.football-data.org/3.svg", spiele: 30, punkte: 76, tore: "+52" },
    { pos: 2, team: "Bayern München", wappen: "https://crests.football-data.org/5.svg", spiele: 30, punkte: 66, tore: "+45" },
    { pos: 3, team: "Borussia Dortmund", wappen: "https://crests.football-data.org/4.svg", spiele: 30, punkte: 60, tore: "+25" },
    { pos: 4, team: "RB Leipzig", wappen: "https://crests.football-data.org/721.svg", spiele: 30, punkte: 58, tore: "+30" },
    { pos: 5, team: "VfB Stuttgart", wappen: "https://crests.football-data.org/10.svg", spiele: 30, punkte: 55, tore: "+28" },
    { pos: 8, team: "SC Freiburg", wappen: "https://crests.football-data.org/17.svg", spiele: 30, punkte: 42, tore: "-2" },
    { pos: 9, team: "Werder Bremen", wappen: "https://crests.football-data.org/12.svg", spiele: 30, punkte: 41, tore: "-5" }
  ],
  "2. Bundesliga": [
    { pos: 1, team: "FC St. Pauli", wappen: "https://crests.football-data.org/20.svg", spiele: 30, punkte: 63, tore: "+22" },
    { pos: 2, team: "Holstein Kiel", wappen: "https://crests.football-data.org/720.svg", spiele: 30, punkte: 58, tore: "+18" },
    { pos: 3, team: "Hamburger SV", wappen: "https://crests.football-data.org/7.svg", spiele: 30, punkte: 56, tore: "+20" },
    { pos: 4, team: "SC Paderborn 07", wappen: "https://crests.football-data.org/28.svg", spiele: 30, punkte: 52, tore: "+12" },
    { pos: 6, team: "Fortuna Düsseldorf", wappen: "https://crests.football-data.org/24.svg", spiele: 30, punkte: 48, tore: "+10" },
    { pos: 10, team: "FC Schalke 04", wappen: "https://crests.football-data.org/6.svg", spiele: 30, punkte: 39, tore: "-3" }
  ],
  "Serie A": [
    { pos: 1, team: "Inter Mailand", wappen: "https://crests.football-data.org/108.svg", spiele: 32, punkte: 82, tore: "+50" },
    { pos: 2, team: "AC Mailand", wappen: "https://crests.football-data.org/98.svg", spiele: 32, punkte: 68, tore: "+28" },
    { pos: 3, team: "Juventus", wappen: "https://crests.football-data.org/109.svg", spiele: 32, punkte: 66, tore: "+24" },
    { pos: 4, team: "AS Roma", wappen: "https://crests.football-data.org/100.svg", spiele: 32, punkte: 58, tore: "+18" },
    { pos: 9, team: "FC Turin", wappen: "https://crests.football-data.org/586.svg", spiele: 32, punkte: 44, tore: "+2" }
  ],
  "Ligue 1": [
    { pos: 1, team: "Paris Saint-Germain", wappen: "https://crests.football-data.org/524.svg", spiele: 30, punkte: 70, tore: "+40" },
    { pos: 2, team: "AS Monaco", wappen: "https://crests.football-data.org/548.svg", spiele: 30, punkte: 60, tore: "+25" },
    { pos: 3, team: "OSC Lille", wappen: "https://crests.football-data.org/521.svg", spiele: 30, punkte: 58, tore: "+20" },
    { pos: 4, team: "Olympique Marseille", wappen: "https://crests.football-data.org/516.svg", spiele: 30, punkte: 55, tore: "+15" }
  ],
  "Süper Lig": [
    { pos: 1, team: "Galatasaray", wappen: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3f/Galatasaray_Sports_Club_Logo.svg/512px-Galatasaray_Sports_Club_Logo.svg.png", spiele: 30, punkte: 81, tore: "+48" },
    { pos: 2, team: "Fenerbahce", wappen: "https://upload.wikimedia.org/wikipedia/en/thumb/8/8c/Fenerbah%C3%A7e_SK_logo.svg/512px-Fenerbah%C3%A7e_SK_logo.svg.png", spiele: 30, punkte: 79, tore: "+45" }
  ],
  "Superliga Romania": [
    { pos: 1, team: "FCSB", wappen: "https://upload.wikimedia.org/wikipedia/en/thumb/7/78/FC_FCSB_logo.svg/512px-FC_FCSB_logo.svg.png", spiele: 28, punkte: 64, tore: "+30" },
    { pos: 2, team: "CFR Cluj", wappen: "https://upload.wikimedia.org/wikipedia/en/thumb/1/1b/CFR_Cluj_logo.svg/512px-CFR_Cluj_logo.svg.png", spiele: 28, punkte: 58, tore: "+22" },
    { pos: 4, team: "Rapid Bukarest", wappen: "https://upload.wikimedia.org/wikipedia/en/thumb/5/5c/FC_Rapid_Bucure%C8%99ti_logo.svg/512px-FC_Rapid_Bucure%C8%99ti_logo.svg.png", spiele: 28, punkte: 50, tore: "+10" },
    { pos: 6, team: "Dinamo Bukarest", wappen: "https://upload.wikimedia.org/wikipedia/en/thumb/2/2f/FC_Dinamo_Bucure%C8%99ti_logo.svg/512px-FC_Dinamo_Bucure%C8%99ti_logo.svg.png", spiele: 28, punkte: 38, tore: "-5" }
  ]
};

function getScoreTip(game) {
  const diff = game.wahrscheinlichkeit.heim - game.wahrscheinlichkeit.gast;
  if (diff >= 45) return "2:0";
  if (diff >= 25) return "2:1";
  if (diff <= -35) return "0:2";
  if (diff <= -20) return "1:2";
  if (game.tore.over25 >= 60) return "2:2";
  return "1:1";
}

function getAiText(game) {
  const fav = game.wahrscheinlichkeit.heim > game.wahrscheinlichkeit.gast ? game.heim : game.gast;
  const torText = game.tore.over25 >= 60 ? "Der Over-2,5-Markt wirkt stark." : game.tore.btts >= 56 ? "Beide Teams treffen ist interessant." : "Das Spiel kann eher kontrolliert und eng werden.";
  return `${fav} hat laut Modell die besseren Grundwerte. ${torText} Wichtig bleiben Form, Heimvorteil und die aktuelle Personalsituation.`;
}

function getStars(confidence) {
  if (confidence >= 8.5) return "★★★★★";
  if (confidence >= 7.5) return "★★★★☆";
  if (confidence >= 6.5) return "★★★☆☆";
  return "★★☆☆☆";
}

function crest(url) {
  return `<img src="${url}" class="crest" alt="Vereinswappen" onerror="this.outerHTML='<span class=&quot;crest-fallback&quot;>⚽</span>'">`;
}

function teamLine(wappen, name) {
  return `<span class="teamline">${crest(wappen)} <span>${name}</span></span>`;
}