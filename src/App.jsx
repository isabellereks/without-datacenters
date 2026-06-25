import React, { useEffect, useState } from "react";

const slides = [
  {
    time: "6:45 AM",
    chapter: "Morning",
    title: "The alarm rings, then nothing else catches up.",
    copy:
      "The room is bright. The coffee maker clicks on. But your phone still says yesterday's weather, your calendar will not refresh, and the message from your sister sits there, unsent.",
    note: "The house has power. What is missing is the part of morning that normally arrives from somewhere else.",
    scene: "morning",
    chips: ["weather app", "calendar sync", "messages", "smart routines"],
  },
  {
    time: "8:05 AM",
    chapter: "Commute",
    title: "The city is moving, but the map has gone still.",
    copy:
      "At the bus stop, everyone does the same small gesture: unlock, refresh, wait. The road is full of cars, but the screen cannot tell you which ones matter, or when anything is coming.",
    note: "The streets are still there. The live picture of them is not.",
    scene: "commute",
    chips: ["live traffic", "train times", "rideshare", "charging"],
  },
  {
    time: "9:30 AM",
    chapter: "Work",
    title: "You get to work and meet a locked door made of glass.",
    copy:
      "The laptop opens beautifully. That almost makes it worse. Email spins, the shared doc is a white page, and the meeting link has become a little blue sentence that leads nowhere.",
    note: "The computer works. The shared place where the work lived is gone quiet.",
    scene: "work",
    chips: ["email", "shared docs", "sign-in", "video calls"],
  },
  {
    time: "12:40 PM",
    chapter: "Lunch",
    title: "At lunch, the line becomes very polite and very long.",
    copy:
      "The cashier tries your card twice, then smiles the apology-smile. Someone behind you offers cash. The tablet on the counter keeps asking a question nobody in the room can answer.",
    note: "A payment is not just a tap. It is a tiny conversation with distant machines.",
    scene: "lunch",
    chips: ["card payments", "orders", "inventory", "receipts"],
  },
  {
    time: "3:15 PM",
    chapter: "Care",
    title: "The clinic remembers you, just not enough.",
    copy:
      "The nurse is kind. The room is clean. But your chart will not load, the prescription history is incomplete, and everyone starts writing things down on paper like they are rebuilding memory by hand.",
    note: "The people are still here. The records that follow you are not.",
    scene: "care",
    chips: ["records", "scans", "pharmacy", "insurance"],
  },
  {
    time: "8:20 PM",
    chapter: "Evening",
    title: "By evening, the quiet has a shape.",
    copy:
      "No show loads. No game starts. The family chat is a row of failed sends. You pick up a book, not because the internet is gone forever, but because tonight it feels farther away than it ever has.",
    note: "It is not just entertainment. It is company, memory, coordination, and habit.",
    scene: "evening",
    chips: ["streaming", "group chat", "photos", "games"],
  },
  {
    time: "10:00 PM",
    chapter: "Reveal",
    title: "The cloud was never floating.",
    copy:
      "All day, the missing thing had a physical address: rooms of servers, fiber, cooling, backup power, security, software, and people keeping it alive. It disappeared into ordinary life because it usually works.",
    note: "A data center is not the internet. It is one of the places where modern life waits for an answer.",
    scene: "reveal",
    chips: ["servers", "fiber", "cooling", "backup power"],
  },
];

function BrokenLink({ x1, y1, x2, y2 }) {
  return (
    <g className="broken-link">
      <path d={`M ${x1} ${y1} C ${(x1 + x2) / 2} ${y1 - 40}, ${(x1 + x2) / 2} ${y2 + 40}, ${x2} ${y2}`} />
      <path d="M 392 192 l 16 16 M 408 192 l -16 16" />
    </g>
  );
}

function SceneIllustration({ type }) {
  return (
    <svg className={`illustration illustration-${type}`} viewBox="0 0 720 520" role="img" aria-label="">
      <defs>
        <linearGradient id="windowGlow" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#dfeef4" />
          <stop offset="100%" stopColor="#fbfaf5" />
        </linearGradient>
        <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="20" stdDeviation="18" floodColor="#1d1d1f" floodOpacity="0.10" />
        </filter>
      </defs>

      <rect className="paper-fill" x="0" y="0" width="720" height="520" rx="36" />
      <path className="floor" d="M 92 402 H 628" />
      <path className="quiet-grid" d="M120 100 H600 M120 180 H600 M120 260 H600 M120 340 H600 M180 72 V430 M300 72 V430 M420 72 V430 M540 72 V430" />

      {type === "morning" && (
        <>
          <rect className="window-shape" x="98" y="74" width="150" height="178" rx="24" />
          <path className="line" d="M173 74 V252 M98 163 H248" />
          <rect className="soft-block" x="112" y="332" width="208" height="70" rx="24" />
          <rect className="soft-block pale" x="118" y="284" width="154" height="62" rx="20" />
          <rect className="device-large" x="444" y="206" width="126" height="170" rx="30" filter="url(#softShadow)" />
          <rect className="screen" x="458" y="224" width="98" height="132" rx="18" />
          <path className="alert" d="M477 252 H534 M477 276 H522 M477 300 H510" />
          <circle className="sun" cx="552" cy="102" r="48" />
          <BrokenLink x1={272} y1={250} x2={444} y2={278} />
        </>
      )}

      {type === "commute" && (
        <>
          <rect className="bus" x="86" y="214" width="300" height="142" rx="32" />
          <path className="line" d="M132 254 H330 M138 304 H356" />
          <circle className="wheel" cx="152" cy="366" r="22" />
          <circle className="wheel" cx="326" cy="366" r="22" />
          <rect className="device-large" x="480" y="116" width="112" height="218" rx="30" filter="url(#softShadow)" />
          <rect className="screen" x="494" y="134" width="84" height="180" rx="18" />
          <path className="route" d="M512 274 C548 206, 532 170, 566 152" />
          <path className="route route-broken" d="M512 274 C486 318, 534 346, 506 386" />
          <circle className="map-pin" cx="566" cy="152" r="10" />
          <BrokenLink x1={386} y1={246} x2={480} y2={224} />
        </>
      )}

      {type === "work" && (
        <>
          <rect className="desk" x="96" y="360" width="526" height="44" rx="22" />
          <rect className="laptop" x="142" y="188" width="254" height="154" rx="22" />
          <path className="laptop-base" d="M116 342 H422 L394 378 H144 Z" />
          <rect className="file-card" x="462" y="122" width="136" height="92" rx="18" />
          <rect className="file-card muted-card" x="488" y="238" width="126" height="96" rx="18" />
          <path className="alert" d="M180 238 H330 M180 268 H292 M180 298 H318" />
          <path className="cloud" d="M465 286 c8 -34 62 -32 69 -2 c32 -2 42 44 6 52 H468 c-34 -4 -30 -48 -3 -50" />
          <BrokenLink x1={396} y1={244} x2={462} y2={168} />
        </>
      )}

      {type === "lunch" && (
        <>
          <rect className="counter" x="74" y="332" width="570" height="70" rx="28" />
          <rect className="menu-board" x="112" y="104" width="210" height="154" rx="24" />
          <path className="line" d="M146 148 H282 M146 184 H262 M146 220 H290" />
          <rect className="terminal" x="448" y="184" width="130" height="174" rx="24" filter="url(#softShadow)" />
          <rect className="screen" x="464" y="204" width="98" height="72" rx="16" />
          <path className="alert" d="M482 232 H544 M482 250 H530" />
          <path className="receipt" d="M354 170 h74 v130 l-14 -12 l-14 12 l-14 -12 l-16 12 l-16 -12 Z" />
          <BrokenLink x1={428} y1={232} x2={448} y2={250} />
        </>
      )}

      {type === "care" && (
        <>
          <rect className="clinic" x="98" y="120" width="232" height="240" rx="28" />
          <path className="cross" d="M214 176 V254 M174 216 H254" />
          <rect className="file-card" x="420" y="112" width="170" height="122" rx="20" />
          <rect className="file-card muted-card" x="458" y="266" width="132" height="106" rx="20" />
          <path className="alert" d="M448 154 H552 M448 182 H528 M488 310 H556 M488 338 H536" />
          <path className="folder" d="M116 382 h190 c18 0 28 12 24 28 H96 c-4 -16 4 -28 20 -28 Z" />
          <BrokenLink x1={330} y1={216} x2={420} y2={174} />
        </>
      )}

      {type === "evening" && (
        <>
          <rect className="sofa" x="118" y="292" width="300" height="92" rx="36" />
          <rect className="soft-block" x="152" y="248" width="214" height="86" rx="30" />
          <rect className="tv" x="456" y="148" width="164" height="128" rx="22" />
          <rect className="screen dark-screen" x="474" y="166" width="128" height="88" rx="14" />
          <path className="line" d="M538 276 V322 M502 322 H574" />
          <circle className="moon" cx="150" cy="112" r="42" />
          <path className="alert" d="M492 202 H584 M492 226 H554" />
          <BrokenLink x1={418} y1={310} x2={456} y2={212} />
        </>
      )}

      {type === "reveal" && (
        <>
          <rect className="data-center" x="132" y="132" width="250" height="250" rx="26" filter="url(#softShadow)" />
          <path className="rack-lines" d="M172 186 H342 M172 230 H342 M172 274 H342 M172 318 H342 M214 160 V354 M300 160 V354" />
          <rect className="cooling" x="420" y="124" width="128" height="78" rx="20" />
          <rect className="generator" x="436" y="294" width="150" height="82" rx="22" />
          <path className="fiber" d="M382 254 C456 226, 472 208, 520 202 M382 282 C470 286, 492 310, 516 336" />
          <path className="alert" d="M456 158 H512 M458 328 H552" />
          <circle className="sun" cx="590" cy="96" r="34" />
        </>
      )}
    </svg>
  );
}

function App() {
  const [index, setIndex] = useState(0);
  const slide = slides[index];
  const isFirst = index === 0;
  const isLast = index === slides.length - 1;

  const go = (nextIndex) => {
    setIndex(Math.max(0, Math.min(slides.length - 1, nextIndex)));
  };

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "ArrowRight") go(index + 1);
      if (event.key === "ArrowLeft") go(index - 1);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [index]);

  return (
    <main className="reader">
      <header className="topbar">
        <div className="brand">
          <span />
          Without Data Centers
        </div>
        <div className="page-count">
          {index + 1} / {slides.length}
        </div>
      </header>

      <section className="slide" key={slide.scene}>
        <div className="scene-shell">
          <SceneIllustration type={slide.scene} />
        </div>

        <article className="caption-card">
          <div className="meta-row">
            <span>{slide.chapter}</span>
            <span>{slide.time}</span>
          </div>
          <h1>{slide.title}</h1>
          <p>{slide.copy}</p>
          <div className="note">{slide.note}</div>
        </article>

        <aside className="breaks-panel" aria-label="What changes">
          <span>What changes</span>
          <div>
            {slide.chips.map((chip) => (
              <button key={chip} type="button">
                {chip}
              </button>
            ))}
          </div>
        </aside>
      </section>

      <footer className="controls">
        <button type="button" onClick={() => go(index - 1)} disabled={isFirst}>
          Back
        </button>
        <div className="dots">
          {slides.map((item, dotIndex) => (
            <button
              key={item.time}
              className={dotIndex === index ? "active" : ""}
              type="button"
              onClick={() => go(dotIndex)}
              aria-label={`Go to ${item.chapter}`}
            />
          ))}
        </div>
        <button type="button" onClick={() => go(index + 1)} disabled={isLast}>
          Next
        </button>
      </footer>
    </main>
  );
}

export default App;
