import Link from "next/link";
import RecentScores from "@/components/RecentScores";
import { BookIcon, CardsIcon, ExamIcon, ListIcon } from "@/components/Icons";
import { flashcards } from "@/data/flashcards";
import { questions } from "@/data/questions";
import { TOPIC_TITLES, TOPICS } from "@/data/types";

const items = [
  { href: "/exam", title: "Exam Training", sub: "Easy, medium, hard, or mixed", color: "linear-gradient(160deg,#5ac8fa,#007aff)", Icon: ExamIcon },
  { href: "/flashcards", title: "Flashcards", sub: `${flashcards.length} cards · tap to flip, swipe to move`, color: "linear-gradient(160deg,#ffcc00,#ff9500)", Icon: CardsIcon },
  { href: "/reviewer", title: "Reviewer Notes", sub: "Key points from each handout", color: "linear-gradient(160deg,#5ef08a,#28b44c)", Icon: BookIcon },
  { href: "/bank", title: "Question Bank", sub: `All ${questions.length} questions with answers`, color: "linear-gradient(160deg,#d58bff,#af52de)", Icon: ListIcon },
];

export default function Home() {
  return (
    <main className="page fade-in">
      <p className="subtitle" style={{ margin: "6px 4px 0", fontWeight: 600, textTransform: "uppercase", fontSize: 13 }}>IT2221 · Foundations of Computing</p>
      <h1 className="large-title">Reviewer</h1>
      <p className="subtitle">Study anywhere on your phone. {questions.length} exam questions from Handouts 03 to 08.</p>

      <section className="glass hero">
        <h2>Your progress</h2>
        <p>Scores are saved on this device.</p>
        <RecentScores />
      </section>

      <div className="section-label">Study</div>
      <nav className="glass list">
        {items.map(({ href, title, sub, color, Icon }) => (
          <Link key={href} href={href} className="list-item">
            <span className="app-icon" style={{ background: color }}><Icon /></span>
            <span style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontWeight: 600, fontSize: 17 }}>{title}</div>
              <div className="muted small">{sub}</div>
            </span>
            <span className="chev">›</span>
          </Link>
        ))}
      </nav>

      <div className="section-label">Topics covered</div>
      <div className="glass list">
        {TOPICS.map((t) => (
          <div key={t} className="list-item">
            <span className="badge badge-topic">Handout {t}</span>
            <span style={{ flex: 1, fontWeight: 500 }}>{TOPIC_TITLES[t]}</span>
            <span className="muted small">{questions.filter((q) => q.topic === t).length} Qs</span>
          </div>
        ))}
      </div>
    </main>
  );
}
