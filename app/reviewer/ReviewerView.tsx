"use client";

import { useState } from "react";
import Rich from "@/components/Rich";
import { notes } from "@/data/notes";
import { TOPIC_TITLES, TOPICS, type Topic } from "@/data/types";

export default function ReviewerView() {
  const [topic, setTopic] = useState<Topic>("03");
  return (
    <>
      <div className="glass segmented" role="group" aria-label="Handout" style={{ marginBottom: 16 }}>
        {TOPICS.map((t) => (
          <button key={t} aria-pressed={topic === t} onClick={() => setTopic(t)}>{t}</button>
        ))}
      </div>
      <p className="subtitle" style={{ fontWeight: 600, color: "var(--text)" }}>Handout {topic}: {TOPIC_TITLES[topic]}</p>
      <div className="stack" key={topic}>
        {notes[topic].map((s) => (
          <section key={s.title} className="glass note-card fade-in">
            <h3>{s.title}</h3>
            <ul>
              {s.points.map((p, i) =>
                p.startsWith("• ") ? (
                  <li key={i} className="sub"><Rich text={p} /></li>
                ) : (
                  <li key={i}><Rich text={p} /></li>
                ),
              )}
            </ul>
          </section>
        ))}
      </div>
    </>
  );
}
