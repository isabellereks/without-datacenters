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
    sources: [
      {
        label: "NIST: cloud = networked servers, storage, apps",
        url: "https://www.nist.gov/publications/nist-definition-cloud-computing",
      },
    ],
  },
  {
    time: "7:20 AM",
    chapter: "The Feed",
    title: "For a minute, the internet feels less haunted.",
    copy:
      "No auto-written ads chase you across breakfast. No bot account is arguing in the comments. No fake voice message from a stranger pretending to be family. The worst parts of AI go quiet too.",
    note: "This is the part critics are right to worry about: scams, synthetic spam, job anxiety, and systems built faster than people can consent to them.",
    scene: "feed",
    chips: ["AI spam", "deepfakes", "ad targeting", "bot accounts"],
    sources: [
      {
        label: "Pew: Americans are more concerned than excited about AI",
        url: "https://www.pewresearch.org/short-reads/2026/03/12/key-findings-about-how-americans-view-artificial-intelligence/",
      },
      {
        label: "FTC: deceptive AI claims and schemes",
        url: "https://www.ftc.gov/news-events/news/press-releases/2024/09/ftc-announces-crackdown-deceptive-ai-claims-schemes",
      },
    ],
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
    sources: [
      {
        label: "NIST: broad network access is a core cloud feature",
        url: "https://csrc.nist.gov/pubs/sp/800/145/final",
      },
    ],
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
    sources: [
      {
        label: "NIST: cloud services include servers, storage, applications",
        url: "https://www.nist.gov/publications/nist-definition-cloud-computing",
      },
    ],
  },
  {
    time: "10:45 AM",
    chapter: "School",
    title: "The classroom becomes local again.",
    copy:
      "The teacher can still teach. The student can still think. But the assignment link is dead, the online textbook will not open, captions are gone from the lecture video, and the parent portal cannot prove anyone was here.",
    note: "A lot of education technology is convenience until it becomes the only copy of the plan.",
    scene: "school",
    chips: ["LMS", "e-textbooks", "captions", "parent portals"],
    sources: [
      {
        label: "NIST: cloud delivers applications and services on demand",
        url: "https://www.nist.gov/publications/nist-definition-cloud-computing",
      },
    ],
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
    sources: [
      {
        label: "Stripe: card authorization requires issuer approval",
        url: "https://stripe.com/resources/more/card-authorization-explained",
      },
      {
        label: "Visa: merchants send authorization requests",
        url: "https://usa.visa.com/content/dam/VCOM/global/support-legal/documents/visa-partial-authorization-service.pdf",
      },
    ],
  },
  {
    time: "2:05 PM",
    chapter: "Errands",
    title: "The shelves are full. The store has lost its memory.",
    copy:
      "A package says it is out for delivery, then nowhere at all. The pharmacy app cannot see the refill. The grocery scanner knows the barcode, but not whether the back room has any more.",
    note: "Modern logistics is not only trucks and shelves. It is shared databases staying current in near real time.",
    scene: "errands",
    chips: ["package tracking", "refills", "stock counts", "returns"],
    sources: [
      {
        label: "NIST: cloud includes shared configurable storage and services",
        url: "https://csrc.nist.gov/pubs/sp/800/145/final",
      },
    ],
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
    sources: [
      {
        label: "HealthIT.gov: EHRs include diagnoses, meds, labs, images",
        url: "https://healthit.gov/health-it-basics/benefits-ehrs/",
      },
      {
        label: "ASPR TRACIE: EHR downtime can affect patient safety",
        url: "https://asprtracie.hhs.gov/technical-resources/66/electronic-health-records-and-downtime-procedures/0",
      },
    ],
  },
  {
    time: "5:10 PM",
    chapter: "The Town",
    title: "The building people protested is quiet now.",
    copy:
      "No cooling fans. No new substation fight. No worry that a server farm will drink from the same watershed or push the grid harder during a heat wave. That relief is real.",
    note: "But the silence is not selective. The same infrastructure carried the useful parts too.",
    scene: "town",
    chips: ["electric load", "water use", "noise", "local permits"],
    sources: [
      {
        label: "IEA: data centres used about 1.5% of global electricity in 2024",
        url: "https://www.iea.org/reports/energy-and-ai/energy-demand-from-ai",
      },
      {
        label: "EESI: data centers and water consumption",
        url: "https://www.eesi.org/articles/view/data-centers-and-water-consumption",
      },
      {
        label: "LBNL/DOE: U.S. data center energy usage report",
        url: "https://escholarship.org/uc/item/32d6m0d1",
      },
    ],
  },
  {
    time: "6:30 PM",
    chapter: "Work, Again",
    title: "Some people feel safer. Some people lose their tools.",
    copy:
      "The illustrator is relieved the image generator is gone. The call-center worker is relieved the replacement demo failed. Then the translator loses captions, the analyst loses search, and the disabled student loses the tool that made text easier to read.",
    note: "AI is not one thing. It is threat, convenience, dependency, and accessibility all tangled together.",
    scene: "tradeoff",
    chips: ["job anxiety", "creative work", "accessibility", "automation"],
    sources: [
      {
        label: "Pew: 64% of U.S. public expects AI to mean fewer jobs",
        url: "https://www.pewresearch.org/internet/2025/04/03/how-the-us-public-and-ai-experts-view-artificial-intelligence/",
      },
      {
        label: "OECD: AI job effects are ambiguous and uneven",
        url: "https://www.oecd.org/en/publications/oecd-employment-outlook-2023_08785bba-en/full-report/artificial-intelligence-and-jobs-no-signs-of-slowing-labour-demand-yet_5aebe670.html",
      },
    ],
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
    sources: [
      {
        label: "NIST: cloud pools remote servers, storage, and apps",
        url: "https://www.nist.gov/publications/nist-definition-cloud-computing",
      },
    ],
  },
  {
    time: "9:10 PM",
    chapter: "The Ledger",
    title: "The day did get smaller. It also got less extractive.",
    copy:
      "No model is guessing your mood. No feed is ranking your attention. No company is turning one more private habit into training data. Some of the quiet feels like privacy returning.",
    note: "The honest question is not whether data centers matter. It is who benefits, who pays, and what should never have been built on them.",
    scene: "ledger",
    chips: ["privacy", "tracking", "training data", "attention"],
    sources: [
      {
        label: "Pew: public concerns include regulation, bias, misinformation",
        url: "https://www.pewresearch.org/internet/2025/04/03/views-of-risks-opportunities-and-regulation-of-ai/",
      },
    ],
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
    sources: [
      {
        label: "NIST: definition of cloud computing",
        url: "https://www.nist.gov/publications/nist-definition-cloud-computing",
      },
      {
        label: "IEA: Energy and AI report",
        url: "https://www.iea.org/reports/energy-and-ai/energy-demand-from-ai",
      },
    ],
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

      {type === "feed" && (
        <>
          <rect className="device-large" x="130" y="92" width="150" height="270" rx="34" filter="url(#softShadow)" />
          <rect className="screen" x="148" y="116" width="114" height="220" rx="22" />
          <rect className="file-card" x="360" y="112" width="190" height="74" rx="22" />
          <rect className="file-card muted-card" x="394" y="220" width="160" height="74" rx="22" />
          <rect className="file-card muted-card" x="344" y="326" width="210" height="66" rx="22" />
          <path className="alert" d="M170 160 H232 M170 188 H220 M392 148 H512 M428 256 H516 M382 360 H506" />
          <path className="line" d="M308 170 C338 142, 354 142, 376 148 M306 250 C346 244, 368 252, 394 262 M304 330 C334 356, 360 366, 388 364" />
          <BrokenLink x1={280} y1={230} x2={360} y2={150} />
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

      {type === "school" && (
        <>
          <rect className="desk" x="92" y="350" width="540" height="48" rx="24" />
          <rect className="file-card" x="128" y="124" width="190" height="190" rx="24" />
          <path className="line" d="M166 170 H278 M166 212 H278 M166 254 H244" />
          <rect className="laptop" x="396" y="178" width="176" height="120" rx="20" />
          <path className="laptop-base" d="M372 298 H596 L570 330 H398 Z" />
          <path className="alert" d="M428 222 H542 M428 250 H508" />
          <path className="cloud" d="M408 102 c8 -30 58 -29 66 -2 c28 -2 38 40 6 47 H410 c-31 -3 -28 -42 -2 -45" />
          <BrokenLink x1={318} y1={214} x2={396} y2={238} />
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

      {type === "errands" && (
        <>
          <rect className="shelf" x="96" y="128" width="244" height="246" rx="24" />
          <path className="line" d="M124 198 H312 M124 272 H312 M172 128 V374 M252 128 V374" />
          <rect className="package" x="424" y="148" width="128" height="104" rx="18" />
          <path className="line" d="M424 188 H552 M488 148 V252" />
          <rect className="device-large" x="446" y="286" width="110" height="112" rx="24" filter="url(#softShadow)" />
          <rect className="screen" x="460" y="304" width="82" height="72" rx="16" />
          <path className="alert" d="M474 330 H528 M474 350 H514" />
          <BrokenLink x1={340} y1={248} x2={424} y2={200} />
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

      {type === "town" && (
        <>
          <rect className="data-center" x="96" y="188" width="238" height="166" rx="24" filter="url(#softShadow)" />
          <path className="rack-lines" d="M132 232 H300 M132 270 H300 M132 308 H300 M180 208 V334 M252 208 V334" />
          <rect className="cooling" x="392" y="132" width="148" height="86" rx="22" />
          <path className="fiber" d="M334 246 C384 230, 398 198, 438 176" />
          <path className="route route-broken" d="M190 354 C216 424, 316 430, 352 364" />
          <circle className="sun" cx="584" cy="96" r="42" />
          <path className="alert" d="M424 166 H512 M132 232 H300" />
          <BrokenLink x1={334} y1={270} x2={392} y2={180} />
        </>
      )}

      {type === "tradeoff" && (
        <>
          <rect className="laptop" x="96" y="206" width="220" height="136" rx="22" />
          <path className="laptop-base" d="M72 342 H344 L316 376 H100 Z" />
          <rect className="file-card" x="410" y="108" width="170" height="88" rx="20" />
          <rect className="file-card muted-card" x="404" y="244" width="190" height="102" rx="22" />
          <path className="alert" d="M130 250 H276 M130 282 H238 M444 146 H548 M440 286 H560 M440 316 H520" />
          <path className="line" d="M358 196 C384 156, 408 148, 438 148 M344 292 C376 304, 396 306, 424 302" />
          <BrokenLink x1={316} y1={260} x2={410} y2={150} />
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

      {type === "ledger" && (
        <>
          <rect className="file-card" x="104" y="114" width="196" height="258" rx="24" />
          <path className="line" d="M142 164 H262 M142 204 H242 M142 244 H270 M142 284 H228 M142 324 H260" />
          <rect className="device-large" x="414" y="126" width="144" height="220" rx="32" filter="url(#softShadow)" />
          <rect className="screen" x="432" y="150" width="108" height="172" rx="20" />
          <path className="alert" d="M454 190 H516 M454 220 H502 M454 250 H526" />
          <path className="route route-broken" d="M300 200 C356 168, 386 178, 414 210 M300 292 C350 332, 390 330, 414 296" />
          <circle className="moon" cx="588" cy="104" r="38" />
          <BrokenLink x1={300} y1={244} x2={414} y2={236} />
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
      <section className="slide" key={slide.scene}>
        <div className="page-flourish page-flourish-left" aria-hidden="true" />
        <div className="page-flourish page-flourish-right" aria-hidden="true" />
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
          <details className="source-links">
            <summary>Receipts</summary>
            {slide.sources.map((source) => (
              <a key={source.url} href={source.url} target="_blank" rel="noreferrer">
                {source.label}
              </a>
            ))}
          </details>
        </article>

        <aside className="breaks-panel" aria-label="What changes">
          <span>Little threads</span>
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
          Previous page
        </button>
        <div className="turn-count" aria-label={`Page ${index + 1} of ${slides.length}`}>
          Page {index + 1} of {slides.length}
        </div>
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
          Turn page
        </button>
      </footer>
    </main>
  );
}

export default App;
