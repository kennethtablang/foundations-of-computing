import ExamRunner from "./ExamRunner";

export const metadata = { title: "Exam Training · IT Reviewer" };

export default function ExamPage() {
  return (
    <main className="page fade-in">
      <ExamRunner />
    </main>
  );
}
