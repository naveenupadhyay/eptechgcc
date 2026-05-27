import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const outDir = path.join(root, "video", "scenes");

const imageToDataUri = (file, mime) => {
  const bytes = fs.readFileSync(path.join(root, "public", file));
  return `data:${mime};base64,${bytes.toString("base64")}`;
};

const logo = imageToDataUri("ep.avif", "image/avif");
const portrait = imageToDataUri("nav.jpg", "image/jpeg");

const esc = (value) =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");

const lines = [
  [180, 178, 610, 306],
  [610, 306, 960, 240],
  [960, 240, 1330, 390],
  [420, 710, 910, 560],
  [910, 560, 1460, 700],
  [260, 458, 760, 480],
  [760, 480, 1240, 520],
  [1240, 520, 1620, 426]
];

const nodes = [
  [180, 178],
  [610, 306],
  [960, 240],
  [1330, 390],
  [420, 710],
  [910, 560],
  [1460, 700],
  [260, 458],
  [760, 480],
  [1240, 520],
  [1620, 426]
];

const network = () => `
  <g opacity="0.52">
    ${lines
      .map(
        ([x1, y1, x2, y2], index) =>
          `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="url(#line${index % 3})" stroke-width="1.4"/>`
      )
      .join("")}
    ${nodes
      .map(
        ([cx, cy], index) =>
          `<circle cx="${cx}" cy="${cy}" r="${index % 3 === 0 ? 5 : 3.5}" fill="${index % 2 ? "#22d3ee" : "#14b8a6"}" opacity="0.9"/>`
      )
      .join("")}
  </g>`;

const metrics = (items) => `
  <g>
    ${items
      .map((item, index) => {
        const x = 150 + index * 405;
        return `
          <rect x="${x}" y="850" width="330" height="132" rx="28" fill="rgba(255,255,255,0.055)" stroke="rgba(148, 163, 184, 0.28)"/>
          <text x="${x + 28}" y="908" fill="#ffffff" font-size="42" font-weight="700">${esc(item.value)}</text>
          <text x="${x + 28}" y="954" fill="#b8c7d9" font-size="23">${esc(item.label)}</text>
        `;
      })
      .join("")}
  </g>`;

const pill = (x, y, text) => `
  <rect x="${x}" y="${y}" width="${text.length * 13 + 52}" height="52" rx="26" fill="rgba(34,211,238,0.1)" stroke="rgba(34,211,238,0.42)"/>
  <text x="${x + 26}" y="${y + 34}" fill="#dffcff" font-size="22" font-weight="650">${esc(text)}</text>`;

const base = ({ eyebrow, title, subtitle, body = "", extra = "" }) => `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1920" height="1080" viewBox="0 0 1920 1080">
  <defs>
    <radialGradient id="bg1" cx="20%" cy="20%" r="75%">
      <stop offset="0%" stop-color="#06334a"/>
      <stop offset="38%" stop-color="#06111f"/>
      <stop offset="100%" stop-color="#02040a"/>
    </radialGradient>
    <radialGradient id="bg2" cx="82%" cy="60%" r="52%">
      <stop offset="0%" stop-color="#0b5d67" stop-opacity="0.42"/>
      <stop offset="55%" stop-color="#071423" stop-opacity="0.28"/>
      <stop offset="100%" stop-color="#02040a" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="line0" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#2563eb"/>
      <stop offset="100%" stop-color="#22d3ee"/>
    </linearGradient>
    <linearGradient id="line1" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#14b8a6"/>
      <stop offset="100%" stop-color="#ffffff"/>
    </linearGradient>
    <linearGradient id="line2" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#38bdf8"/>
      <stop offset="100%" stop-color="#2563eb"/>
    </linearGradient>
    <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur stdDeviation="18" result="blur"/>
      <feMerge>
        <feMergeNode in="blur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
    <clipPath id="portraitClip"><rect x="1328" y="250" width="330" height="420" rx="34"/></clipPath>
  </defs>
  <rect width="1920" height="1080" fill="url(#bg1)"/>
  <rect width="1920" height="1080" fill="url(#bg2)"/>
  <g opacity="0.12">
    ${Array.from({ length: 28 }, (_, i) => `<line x1="0" y1="${i * 48}" x2="1920" y2="${i * 48}" stroke="#cbd5e1"/>`).join("")}
    ${Array.from({ length: 40 }, (_, i) => `<line x1="${i * 52}" y1="0" x2="${i * 52}" y2="1080" stroke="#cbd5e1"/>`).join("")}
  </g>
  <circle cx="1540" cy="192" r="210" fill="#22d3ee" opacity="0.08" filter="url(#softGlow)"/>
  <circle cx="248" cy="850" r="235" fill="#2563eb" opacity="0.1" filter="url(#softGlow)"/>
  ${network()}
  <image href="${logo}" x="116" y="78" width="82" height="82" preserveAspectRatio="xMidYMid meet"/>
  <text x="218" y="125" fill="#f8fafc" font-size="25" font-weight="720">EleventyfirstParallel AI</text>
  <text x="218" y="156" fill="#7dd3fc" font-size="16" letter-spacing="3">AI-NATIVE GCCS IN INDIA</text>
  <text x="118" y="282" fill="#22d3ee" font-size="21" font-weight="720" letter-spacing="5">${esc(eyebrow)}</text>
  <text x="118" y="392" fill="#ffffff" font-size="76" font-weight="760">${esc(title[0])}</text>
  ${title[1] ? `<text x="118" y="478" fill="#ffffff" font-size="76" font-weight="760">${esc(title[1])}</text>` : ""}
  <text x="122" y="${title[1] ? 552 : 470}" fill="#cbd5e1" font-size="34" font-weight="420">${esc(subtitle[0])}</text>
  ${subtitle[1] ? `<text x="122" y="${title[1] ? 602 : 520}" fill="#cbd5e1" font-size="34" font-weight="420">${esc(subtitle[1])}</text>` : ""}
  ${body}
  ${extra}
</svg>`;

const scenes = [
  base({
    eyebrow: "FOUNDER INTRODUCTION",
    title: ["Hi, I am", "Naveen Upadhyay."],
    subtitle: ["Founder of EleventyfirstParallel AI.", "I help global startups build AI-native GCCs in India."],
    body: `${pill(122, 686, "Product")}${pill(300, 686, "Engineering")}${pill(548, 686, "AI operations")}${pill(820, 686, "Execution governance")}`,
    extra: `<g>
      <rect x="1298" y="220" width="390" height="510" rx="42" fill="rgba(255,255,255,0.06)" stroke="rgba(148,163,184,0.24)"/>
      <image href="${portrait}" x="1328" y="250" width="330" height="420" preserveAspectRatio="xMidYMid slice" clip-path="url(#portraitClip)"/>
      <text x="1328" y="786" fill="#ffffff" font-size="30" font-weight="720">Naveen Upadhyay</text>
      <text x="1328" y="824" fill="#7dd3fc" font-size="21">Founder &amp; CEO</text>
    </g>`
  }),
  base({
    eyebrow: "GLOBAL STARTUP PRESSURE",
    title: ["Global startups", "need speed."],
    subtitle: ["Talent. Scale. AI leverage.", "Without burning control or runway."],
    body: `${pill(122, 664, "Product roadmap pressure")}${pill(122, 734, "AI transformation backlog")}${pill(122, 804, "Senior talent scarcity")}`,
    extra: metrics([
      { value: "Speed", label: "to ship" },
      { value: "Talent", label: "to build" },
      { value: "Leverage", label: "to scale" },
      { value: "Control", label: "to govern" }
    ])
  }),
  base({
    eyebrow: "THE OPERATING PROBLEM",
    title: ["Local-only scaling", "gets expensive fast."],
    subtitle: ["Costs rise. Hiring slows. AI work multiplies.", "Founders still need strategic control."],
    body: `${pill(122, 664, "Engineering costs")}${pill(122, 734, "AI delivery risk")}${pill(122, 804, "Long hiring cycles")}`,
    extra: `<g transform="translate(1210 284)">
      <rect width="474" height="410" rx="36" fill="rgba(255,255,255,0.055)" stroke="rgba(148,163,184,0.24)"/>
      <polyline points="60,310 140,282 210,206 298,190 390,96" fill="none" stroke="#22d3ee" stroke-width="8"/>
      <text x="56" y="74" fill="#ffffff" font-size="30" font-weight="700">Burn vs. Ambition</text>
      <text x="56" y="122" fill="#94a3b8" font-size="22">The gap widens without leverage.</text>
    </g>`
  }),
  base({
    eyebrow: "INDIA REFRAIMED",
    title: ["India is no longer", "just outsourcing."],
    subtitle: ["It can become a controlled product,", "engineering, AI, and operations hub."],
    body: `${pill(122, 664, "Strategic control")}${pill(380, 664, "Roadmap ownership")}${pill(662, 664, "IP protection")}${pill(864, 664, "Execution capacity")}`,
    extra: `<g transform="translate(1230 260)">
      <circle cx="210" cy="210" r="188" fill="rgba(20,184,166,0.08)" stroke="rgba(34,211,238,0.42)" stroke-width="2"/>
      <circle cx="210" cy="210" r="108" fill="rgba(37,99,235,0.14)" stroke="rgba(125,211,252,0.5)" stroke-width="2"/>
      <circle cx="210" cy="210" r="18" fill="#22d3ee"/>
      <text x="137" y="508" fill="#ffffff" font-size="32" font-weight="700">India execution hub</text>
    </g>`
  }),
  base({
    eyebrow: "THE ELEVENTYFIRSTPARALLEL MODEL",
    title: ["From strategy", "to GCC scale."],
    subtitle: ["We help build the operating system:", "setup, talent, AI workflows, governance."],
    body: "",
    extra: `<g transform="translate(118 670)">
      ${["Strategy", "Entity / EOR / BOT", "Talent Build", "Product Teams", "AI Workflows", "Governance"].map((step, index) => {
        const x = index * 285;
        return `<rect x="${x}" y="0" width="238" height="106" rx="28" fill="rgba(255,255,255,0.06)" stroke="rgba(34,211,238,0.28)"/>
          <text x="${x + 28}" y="62" fill="#ffffff" font-size="24" font-weight="700">${esc(step)}</text>
          ${index < 5 ? `<line x1="${x + 238}" y1="53" x2="${x + 285}" y2="53" stroke="#22d3ee" stroke-width="2"/>` : ""}`;
      }).join("")}
    </g>`
  }),
  base({
    eyebrow: "FOUNDER-LED EXECUTION",
    title: ["Built by an operator,", "not a vendor."],
    subtitle: ["Naveen Upadhyay has operated as CTO, CPO,", "and CPTO across scaled technology companies."],
    body: `${pill(122, 664, "India development centers")}${pill(122, 734, "CPTO-level judgment")}${pill(122, 804, "Founder-to-founder execution")}`,
    extra: `${metrics([
      { value: "50+", label: "team built" },
      { value: "<3", label: "months" },
      { value: "4", label: "Agentic AI verticals" },
      { value: "CPTO", label: "operator lens" }
    ])}`
  }),
  base({
    eyebrow: "CALL TO ACTION",
    title: ["Build your AI-native", "GCC in India."],
    subtitle: ["Product. Engineering. AI Operations. Scale.", "Turn India into strategic execution infrastructure."],
    body: `${pill(122, 684, "Start with a 90-day GCC model")}${pill(122, 754, "Keep strategic control")}${pill(122, 824, "Scale with AI-native operations")}`,
    extra: `<g transform="translate(1250 352)">
      <image href="${logo}" x="0" y="0" width="220" height="220" preserveAspectRatio="xMidYMid meet"/>
      <text x="-54" y="300" fill="#ffffff" font-size="34" font-weight="760">eleventyfirstparallel.in</text>
      <text x="-10" y="348" fill="#7dd3fc" font-size="24">Start a conversation</text>
    </g>`
  })
];

fs.mkdirSync(outDir, { recursive: true });
scenes.forEach((svg, index) => {
  fs.writeFileSync(path.join(outDir, `scene-${String(index + 1).padStart(2, "0")}.svg`), svg);
});

console.log(`Generated ${scenes.length} SVG scenes in ${path.relative(root, outDir)}`);
