import React, { useEffect, useMemo, useState } from "react";

const pages = [
  {
    time: "6:45 AM",
    kicker: "Morning",
    title: "The phone wakes you, but the day is already missing pieces.",
    text:
      "The alarm was local. The rest was not. Weather, calendar sync, messages, and the little automations around the house wait for distant machines that never answer.",
    note: "Not all electricity disappears. The networked layer does.",
    scene: "morning",
  },
  {
    time: "8:05 AM",
    kicker: "Commute",
    title: "The map opens to a city it can no longer read.",
    text:
      "Traffic, train arrivals, ride-hailing, ticketing, parking, and charging apps lose the shared systems that keep them current.",
    note: "The streets still exist. The live picture of them does not.",
    scene: "commute",
  },
  {
    time: "9:30 AM",
    kicker: "Work",
    title: "The office is open. The work is somewhere else.",
    text:
      "Email, shared docs, chat, video calls, dashboards, tickets, school portals, and sign-in pages become blank doors.",
    note: "A laptop without cloud services becomes a very polished notebook.",
    scene: "work",
  },
  {
    time: "12:40 PM",
    kicker: "Lunch",
    title: "The card reader pauses long enough for everyone to notice.",
    text:
      "Payments, delivery apps, loyalty accounts, and inventory systems all depended on fast confirmation from systems out of sight.",
    note: "The handwritten sign suddenly feels like infrastructure.",
    scene: "lunch",
  },
  {
    time: "3:15 PM",
    kicker: "Care",
    title: "The appointment exists, but the record does not arrive.",
    text:
      "People can still help. But charts, scans, prescriptions, pharmacy systems, scheduling, and insurance checks move slowly or not at all.",
    note: "The human part remains. The memory layer is fractured.",
    scene: "care",
  },
  {
    time: "8:20 PM",
    kicker: "Evening",
    title: "At home, the quiet is bigger than entertainment.",
    text:
      "Streaming, backups, games, group chats, smart TVs, photo libraries, and AI tools go still. The room is not empty, but the shared world feels farther away.",
    note: "The cloud was a place all along.",
    scene: "evening",
  },
  {
    time: "10:00 PM",
    kicker: "Reveal",
    title: "The invisible building at the edge of the day.",
    text:
      "A data center is servers, storage, fiber, power, cooling, backup systems, security, technicians, and software. Most days, it disappears because it works.",
    note: "This story is about seeing the background.",
    scene: "reveal",
  },
];

function Scene({ type }) {
  return (
    <div className={`scene scene-${type}`} aria-hidden="true">
      <div className="skyline">
        <span />
        <span />
        <span />
      </div>
      <div className="stage-line" />
      <div className="sun-moon" />
      <div className="person">
        <span className="person-head" />
        <span className="person-body" />
      </div>
      <div className="object object-a" />
      <div className="object object-b" />
      <div className="object object-c" />
      <div className="signal-lines">
        <span />
        <span />
        <span />
      </div>
      <div className="caption-chip">offline</div>
    </div>
  );
}

function App() {
  const [index, setIndex] = useState(0);
  const page = pages[index];
  const progress = useMemo(
    () => `${index + 1} / ${pages.length}`,
    [index],
  );

  const go = (nextIndex) => {
    setIndex(Math.max(0, Math.min(pages.length - 1, nextIndex)));
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
    <main className="storybook">
      <header className="bookbar">
        <div className="book-title">
          <span className="book-mark" />
          A Day Without Data Centers
        </div>
        <div className="book-progress" aria-label={`Page ${progress}`}>
          {progress}
        </div>
      </header>

      <section className="book" aria-live="polite">
        <article className="page page-copy">
          <div className="page-meta">
            <span>{page.kicker}</span>
            <span>{page.time}</span>
          </div>
          <h1>{page.title}</h1>
          <p>{page.text}</p>
          <div className="margin-note">{page.note}</div>
        </article>

        <article className="page page-picture">
          <Scene type={page.scene} />
        </article>
      </section>

      <footer className="controls">
        <button type="button" onClick={() => go(index - 1)} disabled={index === 0}>
          Back
        </button>
        <div className="dots" aria-label="Story pages">
          {pages.map((item, dotIndex) => (
            <button
              key={item.time}
              type="button"
              className={dotIndex === index ? "active" : ""}
              onClick={() => go(dotIndex)}
              aria-label={`Go to ${item.kicker}, ${item.time}`}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={() => go(index + 1)}
          disabled={index === pages.length - 1}
        >
          Next
        </button>
      </footer>
    </main>
  );
}

export default App;
