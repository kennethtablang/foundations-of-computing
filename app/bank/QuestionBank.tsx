"use client";

import { useMemo, useState } from "react";
import { SearchIcon } from "@/components/Icons";
import { questions } from "@/data/questions";
import { TOPICS, type Kind, type Level, type Topic } from "@/data/types";
import { seededShuffle } from "@/lib/shuffle";

const LETTERS = ["A", "B", "C", "D"];
const LEVEL_LABEL: Record<Level, string> = { easy: "Easy", medium: "Medium", hard: "Hard" };

// Choice order is fixed per question (seeded) so the answer isn't always "A".
const prepared = questions.map((q) => {
  const choices = seededShuffle([q.a, ...q.w], q.id);
  return { q, choices, answer: choices.indexOf(q.a) };
});

export default function QuestionBank() {
  const [search, setSearch] = useState("");
  const [topic, setTopic] = useState<Topic | "all">("all");
  const [level, setLevel] = useState<Level | "all">("all");
  const [kind, setKind] = useState<Kind | "all">("all");
  const [showAll, setShowAll] = useState(false);
  const [open, setOpen] = useState<Set<string>>(new Set());

  const list = useMemo(() => {
    const s = search.trim().toLowerCase();
    return prepared.filter(
      ({ q }) =>
        (topic === "all" || q.topic === topic) &&
        (level === "all" || q.level === level) &&
        (kind === "all" || q.kind === kind) &&
        (!s || q.q.toLowerCase().includes(s) || q.a.toLowerCase().includes(s) || q.w.some((w) => w.toLowerCase().includes(s))),
    );
  }, [search, topic, level, kind]);

  const toggle = (id: string) =>
    setOpen((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });

  return (
    <>
      <div className="search-wrap" style={{ marginBottom: 12 }}>
        <SearchIcon />
        <input className="search" type="search" placeholder="Search questions" value={search}
          onChange={(e) => setSearch(e.target.value)} aria-label="Search questions" />
      </div>

      <div className="chips">
        {(["all", ...TOPICS] as const).map((t) => (
          <button key={t} className="chip" aria-pressed={topic === t} onClick={() => setTopic(t)}>
            {t === "all" ? "All handouts" : `Handout ${t}`}
          </button>
        ))}
      </div>
      <div className="chips">
        {(["all", "easy", "medium", "hard"] as const).map((l) => (
          <button key={l} className="chip" aria-pressed={level === l} onClick={() => setLevel(l)}>
            {l === "all" ? "All levels" : LEVEL_LABEL[l]}
          </button>
        ))}
        {(["all", "factual", "situational"] as const).map((k) => (
          <button key={k} className="chip" aria-pressed={kind === k} onClick={() => setKind(k)}>
            {k === "all" ? "All types" : k === "factual" ? "Factual" : "Situational"}
          </button>
        ))}
      </div>

      <div className="row" style={{ margin: "10px 4px 12px" }}>
        <span className="muted small">{list.length} question{list.length === 1 ? "" : "s"}</span>
        <span className="spacer" />
        <button className="chip" aria-pressed={showAll} onClick={() => setShowAll((v) => !v)}>
          {showAll ? "Hide answers" : "Show all answers"}
        </button>
      </div>

      <div className="stack">
        {list.map(({ q, choices, answer }) => {
          const reveal = showAll || open.has(q.id);
          return (
            <article key={q.id} className="glass bank-q" onClick={() => toggle(q.id)} style={{ cursor: "pointer" }}>
              <div className="row" style={{ flexWrap: "wrap", gap: 6 }}>
                <span className="muted small" style={{ fontWeight: 600, fontVariantNumeric: "tabular-nums" }}>{q.id}</span>
                <span className={`badge badge-${q.level}`}>{LEVEL_LABEL[q.level]}</span>
                <span className="badge badge-kind">{q.kind === "situational" ? "Situational" : "Factual"}</span>
              </div>
              <p className="qtext" style={{ fontSize: 16.5 }}>{q.q}</p>
              <ol>
                {choices.map((c, i) => (
                  <li key={i} className={reveal && i === answer ? "ans" : ""}>
                    <span className="l">{LETTERS[i]}</span><span>{c}</span>
                  </li>
                ))}
              </ol>
              {reveal ? (
                <p className="small" style={{ margin: "10px 2px 0", lineHeight: 1.45 }}>
                  <strong style={{ color: "var(--green)" }}>Answer: {LETTERS[answer]}.</strong>{" "}
                  <span className="muted">{q.why}</span>
                </p>
              ) : (
                <p className="muted small" style={{ margin: "10px 2px 0" }}>Tap to show answer</p>
              )}
            </article>
          );
        })}
      </div>
    </>
  );
}
