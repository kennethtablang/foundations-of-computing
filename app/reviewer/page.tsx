import ReviewerView from "./ReviewerView";

export const metadata = { title: "Reviewer Notes · IT Reviewer" };

export default function ReviewerPage() {
  return (
    <main className="page fade-in">
      <h1 className="large-title">Reviewer</h1>
      <p className="subtitle">The key points from each handout. Read these before taking an exam.</p>
      <ReviewerView />
    </main>
  );
}
