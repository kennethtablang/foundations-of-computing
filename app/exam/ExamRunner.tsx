"use client";

import { useEffect, useMemo, useState } from "react";
import { ChevronLeft, CloseIcon } from "@/components/Icons";
import { questions } from "@/data/questions";
import type { Kind, Level, Question, Topic } from "@/data/types";
import { shuffle } from "@/lib/shuffle";
import { KEYS, load, save, type Attempt } from "@/lib/storage";

type LevelOpt = Level | "mixed";
type TopicOpt = Topic | "both";
type KindOpt = Kind | "all";
type Mode = "practice" | "exam";

interface Settings {
  topic: TopicOpt;
  level: LevelOpt;
  kind: KindOpt;
  count: number; // 0 = all
  mode: Mode;
}

interface Item {
  q: Question;
  choices: string[];
  answer: number;
}

const DEFAULTS: Settings = { topic: "both", level: "mixed", kind: "all", count: 20, mode: "practice" };
const LETTERS = ["A", "B", "C", "D"];
const LEVEL_LABEL: Record<LevelOpt, string> = { mixed: "Mixed", easy: "Easy", medium: "Medium", hard: "Hard" };

function filterPool(s: Settings) {
  return questions.filter(
    (q) =>
      (s.topic === "both" || q.topic === s.topic) &&
      (s.level === "mixed" || q.level === s.level) &&
      (s.kind === "all" || q.kind === s.kind),
  );
}

function build(pool: Question[], count: number): Item[] {
  const picked = shuffle(pool).slice(0, count > 0 ? count : pool.length);
  return picked.map((q) => {
    const choices = shuffle([q.a, ...q.w]);
    return { q, choices, answer: choices.indexOf(q.a) };
  });
}

function Segmented<T extends string | number>({
  value, options, onChange, label,
}: { value: T; options: { v: T; t: string }[]; onChange: (v: T) => void; label: string }) {
  return (
    <div className="glass segmented" role="group" aria-label={label}>
      {options.map((o) => (
        <button key={String(o.v)} aria-pressed={value === o.v} onClick={() => onChange(o.v)}>{o.t}</button>
      ))}
    </div>
  );
}

export default function ExamRunner() {
  const [settings, setSettings] = useState<Settings>(DEFAULTS);
  const [items, setItems] = useState<Item[] | null>(null);
  const [answers, setAnswers] = useState<(number | null)[]>([]);
  const [current, setCurrent] = useState(0);
  const [finished, setFinished] = useState(false);
  const [onlyWrong, setOnlyWrong] = useState(false);

  useEffect(() => setSettings({ ...DEFAULTS, ...load<Partial<Settings>>(KEYS.examSettings, {}) }), []);

  const pool = useMemo(() => filterPool(settings), [settings]);
  const update = (patch: Partial<Settings>) => {
    const next = { ...settings, ...patch };
    setSettings(next);
    save(KEYS.examSettings, next);
  };

  const start = (list: Item[]) => {
    setItems(list);
    setAnswers(list.map(() => null));
    setCurrent(0);
    setFinished(false);
    setOnlyWrong(false);
    window.scrollTo({ top: 0 });
  };

  const finish = () => {
    if (!items) return;
    const score = items.reduce((n, it, i) => n + (answers[i] === it.answer ? 1 : 0), 0);
    const attempt: Attempt = { date: Date.now(), score, total: items.length, level: settings.level, topic: settings.topic };
    save(KEYS.attempts, [attempt, ...load<Attempt[]>(KEYS.attempts, [])].slice(0, 50));
    setFinished(true);
    window.scrollTo({ top: 0 });
  };

  // ── Setup screen ─────────────────────────────────────────────────
  if (!items) {
    const n = settings.count > 0 ? Math.min(settings.count, pool.length) : pool.length;
    return (
      <>
        <h1 className="large-title">Exam Training</h1>
        <p className="subtitle">Pick your settings. Questions and choices are shuffled every time.</p>

        <div className="section-label">Handout</div>
        <Segmented label="Handout" value={settings.topic} onChange={(topic) => update({ topic })}
          options={[{ v: "both", t: "Both" }, { v: "03", t: "Handout 03" }, { v: "04", t: "Handout 04" }]} />

        <div className="section-label">Difficulty</div>
        <Segmented label="Difficulty" value={settings.level} onChange={(level) => update({ level })}
          options={(["mixed", "easy", "medium", "hard"] as const).map((v) => ({ v, t: LEVEL_LABEL[v] }))} />

        <div className="section-label">Question type</div>
        <Segmented label="Question type" value={settings.kind} onChange={(kind) => update({ kind })}
          options={[{ v: "all", t: "All" }, { v: "factual", t: "Factual" }, { v: "situational", t: "Situational" }]} />

        <div className="section-label">Number of questions</div>
        <Segmented label="Number of questions" value={settings.count} onChange={(count) => update({ count })}
          options={[10, 20, 30, 50, 0].map((v) => ({ v, t: v === 0 ? "All" : String(v) }))} />

        <div className="section-label">Mode</div>
        <Segmented label="Mode" value={settings.mode} onChange={(mode) => update({ mode })}
          options={[{ v: "practice", t: "Practice" }, { v: "exam", t: "Exam" }]} />
        <p className="muted small" style={{ margin: "8px 16px 0", lineHeight: 1.4 }}>
          {settings.mode === "practice"
            ? "Practice shows whether you're right, with an explanation, after each answer."
            : "Exam hides answers until you submit, like a real test."}
        </p>

        <div className="glass hero" style={{ marginTop: 24 }}>
          <div className="row">
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 700, fontSize: 20, fontFamily: "var(--font-display)" }}>{n} questions</div>
              <div className="muted small">{pool.length} available with these settings</div>
            </div>
          </div>
          <button className="btn btn-primary btn-block" style={{ marginTop: 16 }} disabled={!pool.length}
            onClick={() => start(build(pool, settings.count))}>
            Start {settings.mode === "practice" ? "Practice" : "Exam"}
          </button>
        </div>
      </>
    );
  }

  const score = items.reduce((n, it, i) => n + (answers[i] === it.answer ? 1 : 0), 0);

  // ── Results screen ───────────────────────────────────────────────
  if (finished) {
    const pct = Math.round((score / items.length) * 100);
    const wrongItems = items.filter((it, i) => answers[i] !== it.answer);
    const color = pct >= 75 ? "var(--green)" : pct >= 50 ? "var(--orange)" : "var(--red)";
    const r = 70, circ = 2 * Math.PI * r;
    const byLevel = (["easy", "medium", "hard"] as const).map((lv) => {
      const idx = items.map((it, i) => (it.q.level === lv ? i : -1)).filter((i) => i >= 0);
      return { lv, total: idx.length, right: idx.filter((i) => answers[i] === items[i].answer).length };
    }).filter((x) => x.total);

    return (
      <>
        <h1 className="large-title">Results</h1>
        <section className="glass hero fade-in" style={{ textAlign: "center" }}>
          <div className="score-ring">
            <svg viewBox="0 0 168 168">
              <circle cx="84" cy="84" r={r} fill="none" stroke="var(--separator)" strokeWidth="14" />
              <circle cx="84" cy="84" r={r} fill="none" stroke={color} strokeWidth="14" strokeLinecap="round"
                strokeDasharray={circ} strokeDashoffset={circ * (1 - score / items.length)}
                style={{ transition: "stroke-dashoffset 1s cubic-bezier(.2,.8,.2,1)" }} />
            </svg>
            <div className="label"><div><b>{pct}%</b><span className="muted">{score} of {items.length}</span></div></div>
          </div>
          <h2 style={{ marginTop: 6 }}>{pct >= 90 ? "Excellent!" : pct >= 75 ? "Great job!" : pct >= 50 ? "Keep going!" : "Time to review"}</h2>
          <p>{pct >= 75 ? "You're well prepared on these topics." : "Read the Reviewer notes, then try the questions you missed."}</p>
          <div className="stat-row">
            {byLevel.map((x) => (
              <div key={x.lv} className="stat"><b>{x.right}/{x.total}</b><span>{LEVEL_LABEL[x.lv]}</span></div>
            ))}
          </div>
          <div className="stack" style={{ marginTop: 18 }}>
            {wrongItems.length > 0 && (
              <button className="btn btn-primary btn-block" onClick={() => start(build(wrongItems.map((it) => it.q), 0))}>
                Retry {wrongItems.length} missed question{wrongItems.length > 1 ? "s" : ""}
              </button>
            )}
            <button className="btn btn-glass btn-block" onClick={() => setItems(null)}>New exam</button>
          </div>
        </section>

        <div className="row" style={{ margin: "24px 4px 10px" }}>
          <div className="section-label" style={{ margin: 0 }}>Review answers</div>
          <span className="spacer" />
          <button className="chip" aria-pressed={onlyWrong} onClick={() => setOnlyWrong((v) => !v)}>Mistakes only</button>
        </div>
        <div className="stack">
          {items.map((it, i) => {
            if (onlyWrong && answers[i] === it.answer) return null;
            return (
              <article key={it.q.id} className="glass bank-q">
                <div className="row" style={{ flexWrap: "wrap", gap: 6 }}>
                  <span className="muted small" style={{ fontWeight: 600 }}>#{i + 1}</span>
                  <span className={`badge badge-${it.q.level}`}>{LEVEL_LABEL[it.q.level]}</span>
                  <span className="spacer" />
                  <span style={{ fontWeight: 700, color: answers[i] === it.answer ? "var(--green)" : "var(--red)" }}>
                    {answers[i] === it.answer ? "Correct" : answers[i] === null ? "Skipped" : "Wrong"}
                  </span>
                </div>
                <p className="qtext" style={{ fontSize: 16 }}>{it.q.q}</p>
                <ol>
                  {it.choices.map((c, ci) => (
                    <li key={ci} className={ci === it.answer ? "ans" : ""}
                      style={ci === answers[i] && ci !== it.answer ? { background: "var(--red-soft)", borderColor: "var(--red)" } : undefined}>
                      <span className="l">{LETTERS[ci]}</span><span>{c}</span>
                    </li>
                  ))}
                </ol>
                <p className="muted small" style={{ margin: "10px 2px 0", lineHeight: 1.45 }}>{it.q.why}</p>
              </article>
            );
          })}
        </div>
      </>
    );
  }

  // ── Question screen ──────────────────────────────────────────────
  const it = items[current];
  const picked = answers[current];
  const practice = settings.mode === "practice";
  const revealed = practice && picked !== null;
  const isLast = current === items.length - 1;

  const choose = (ci: number) => {
    if (revealed) return;
    setAnswers((prev) => prev.map((a, i) => (i === current ? ci : a)));
  };
  const next = () => (isLast ? finish() : (setCurrent((c) => c + 1), window.scrollTo({ top: 0, behavior: "smooth" })));

  return (
    <>
      <div className="row" style={{ marginBottom: 14 }}>
        <button className="btn btn-glass icon-btn" aria-label="Quit exam" onClick={() => setItems(null)}>
          <span style={{ width: 20, height: 20, display: "grid" }}><CloseIcon /></span>
        </button>
        <div style={{ flex: 1 }}>
          <div className="row small muted" style={{ marginBottom: 6, fontVariantNumeric: "tabular-nums" }}>
            <span className="spacer" />
            {practice && <span>Score {score}</span>}
          </div>
          <div className="progress"><div style={{ width: `${((current + (picked !== null ? 1 : 0)) / items.length) * 100}%` }} /></div>
        </div>
      </div>

      <section className="glass qcard fade-in" key={it.q.id}>
        <div className="row" style={{ flexWrap: "wrap", gap: 6 }}>
          <span className={`badge badge-${it.q.level}`}>{LEVEL_LABEL[it.q.level]}</span>
          <span className="badge badge-kind">{it.q.kind === "situational" ? "Situational" : "Factual"}</span>
          <span className="badge badge-topic">Handout {it.q.topic}</span>
        </div>
        <p className="qtext">{it.q.q}</p>
      </section>

      <div className="stack" style={{ marginTop: 14 }} role="radiogroup" aria-label="Choices">
        {it.choices.map((c, ci) => {
          let cls = "choice";
          if (revealed) {
            if (ci === it.answer) cls += " correct";
            else if (ci === picked) cls += " wrong";
            else cls += " dim";
          } else if (ci === picked) cls += " selected";
          return (
            <button key={ci} className={cls} onClick={() => choose(ci)} disabled={revealed}
              role="radio" aria-checked={ci === picked}>
              <span className="letter">{LETTERS[ci]}</span>
              <span>{c}</span>
            </button>
          );
        })}
      </div>

      {revealed && (
        <div className={`glass explain fade-in ${picked === it.answer ? "ok" : "no"}`} style={{ marginTop: 14 }}>
          <b>{picked === it.answer ? "Correct!" : `Not quite. The answer is ${LETTERS[it.answer]}.`}</b>
          {it.q.why}
        </div>
      )}

      <div className="row" style={{ marginTop: 16 }}>
        {!practice && (
          <button className="btn btn-glass icon-btn" aria-label="Previous question" disabled={current === 0}
            onClick={() => setCurrent((c) => c - 1)}>
            <span style={{ width: 22, height: 22, display: "grid" }}><ChevronLeft /></span>
          </button>
        )}
        <button className="btn btn-primary" style={{ flex: 1 }} disabled={practice && picked === null} onClick={next}>
          {isLast ? (practice ? "See results" : "Submit") : "Next"}
        </button>
      </div>
    </>
  );
}
