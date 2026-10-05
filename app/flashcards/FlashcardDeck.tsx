"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, ShuffleIcon } from "@/components/Icons";
import { flashcards, type Flashcard } from "@/data/flashcards";
import { TOPICS, type Topic } from "@/data/types";
import { shuffle } from "@/lib/shuffle";
import { KEYS, load, save } from "@/lib/storage";

type Filter = "all" | Topic;
const keyOf = (c: Flashcard) => `${c.topic}:${c.front}`;

export default function FlashcardDeck() {
  const [filter, setFilter] = useState<Filter>("all");
  const [onlyLearning, setOnlyLearning] = useState(false);
  const [order, setOrder] = useState<Flashcard[]>(flashcards);
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [known, setKnown] = useState<string[]>([]);
  const touchX = useRef<number | null>(null);

  useEffect(() => setKnown(load<string[]>(KEYS.known, [])), []);

  const deck = useMemo(
    () =>
      order.filter(
        (c) => (filter === "all" || c.topic === filter) && (!onlyLearning || !known.includes(keyOf(c))),
      ),
    // Only rebuild when the filters or order change, not on every "known" toggle mid-session.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [order, filter, onlyLearning],
  );
  const card = deck[Math.min(index, deck.length - 1)];
  const knownCount = flashcards.filter((c) => (filter === "all" || c.topic === filter) && known.includes(keyOf(c))).length;
  const totalInFilter = flashcards.filter((c) => filter === "all" || c.topic === filter).length;

  const go = (delta: number) => {
    if (!deck.length) return;
    setFlipped(false);
    setIndex((i) => (i + delta + deck.length) % deck.length);
  };

  const mark = (isKnown: boolean) => {
    if (!card) return;
    const k = keyOf(card);
    const next = isKnown ? Array.from(new Set([...known, k])) : known.filter((x) => x !== k);
    setKnown(next);
    save(KEYS.known, next);
    go(1);
  };

  const reset = (f: Filter = filter, learning = onlyLearning) => {
    setFilter(f);
    setOnlyLearning(learning);
    setIndex(0);
    setFlipped(false);
  };

  return (
    <>
      <div className="glass segmented" role="group" aria-label="Topic">
        {(["all", ...TOPICS] as const).map((f) => (
          <button key={f} aria-pressed={filter === f} onClick={() => reset(f)}>
            {f === "all" ? "All" : f}
          </button>
        ))}
      </div>

      <div className="row" style={{ margin: "14px 4px 12px" }}>
        <button className="chip" aria-pressed={onlyLearning} onClick={() => reset(filter, !onlyLearning)}>
          Still learning only
        </button>
        <span className="spacer" />
        <span className="muted small">{knownCount}/{totalInFilter} known</span>
        <button
          className="btn btn-glass icon-btn"
          aria-label="Shuffle cards"
          onClick={() => { setOrder(shuffle(flashcards)); setIndex(0); setFlipped(false); }}
        >
          <span style={{ width: 20, height: 20, display: "grid" }}><ShuffleIcon /></span>
        </button>
      </div>

      {card ? (
        <>
          <div
            className="flash-wrap"
            onTouchStart={(e) => { touchX.current = e.touches[0].clientX; }}
            onTouchEnd={(e) => {
              if (touchX.current === null) return;
              const dx = e.changedTouches[0].clientX - touchX.current;
              touchX.current = null;
              if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1);
            }}
          >
            <div
              className={`flash ${flipped ? "flipped" : ""}`}
              onClick={() => setFlipped((f) => !f)}
              role="button"
              tabIndex={0}
              aria-label={flipped ? "Show term" : "Show definition"}
              onKeyDown={(e) => {
                if (e.key === " " || e.key === "Enter") { e.preventDefault(); setFlipped((f) => !f); }
                if (e.key === "ArrowRight") go(1);
                if (e.key === "ArrowLeft") go(-1);
              }}
            >
              <div className="flash-face front glass glass-strong">
                <div className="top">
                  <span className="badge badge-topic">Handout {card.topic}</span>
                  {known.includes(keyOf(card)) && <span className="badge badge-easy">Known</span>}
                </div>
                <div className="term">{card.front}</div>
                <div className="hint">Tap to flip · swipe for next</div>
              </div>
              <div className="flash-face back glass glass-strong">
                <div className="top">
                  <span className="badge badge-kind">{card.front}</span>
                </div>
                <div className="def">{card.back}</div>
                <div className="hint">Tap to flip back</div>
              </div>
            </div>
          </div>

          <div className="row" style={{ justifyContent: "center", margin: "14px 0 10px" }}>
            <button className="btn btn-glass icon-btn" aria-label="Previous card" onClick={() => go(-1)}>
              <span style={{ width: 22, height: 22, display: "grid" }}><ChevronLeft /></span>
            </button>
            <span className="muted" style={{ minWidth: 90, textAlign: "center", fontVariantNumeric: "tabular-nums" }}>
              {Math.min(index, deck.length - 1) + 1} / {deck.length}
            </span>
            <button className="btn btn-glass icon-btn" aria-label="Next card" onClick={() => go(1)}>
              <span style={{ width: 22, height: 22, display: "grid" }}><ChevronRight /></span>
            </button>
          </div>

          <div className="row">
            <button className="btn btn-glass" style={{ flex: 1, color: "var(--red)" }} onClick={() => mark(false)}>
              Still learning
            </button>
            <button className="btn btn-primary" style={{ flex: 1 }} onClick={() => mark(true)}>
              I know this
            </button>
          </div>
        </>
      ) : (
        <div className="glass hero" style={{ textAlign: "center" }}>
          <h2>All cards known! 🎉</h2>
          <p>You've marked every card in this set as known.</p>
          <button
            className="btn btn-primary"
            style={{ marginTop: 16 }}
            onClick={() => reset(filter, false)}
          >
            Show all cards
          </button>
        </div>
      )}
    </>
  );
}
