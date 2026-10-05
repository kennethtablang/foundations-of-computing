import QuestionBank from "./QuestionBank";

export const metadata = { title: "Question Bank · IT Reviewer" };

export default function BankPage() {
  return (
    <main className="page fade-in">
      <h1 className="large-title">Question Bank</h1>
      <p className="subtitle">Every question with its answer. Tap a question to show the answer.</p>
      <QuestionBank />
    </main>
  );
}
