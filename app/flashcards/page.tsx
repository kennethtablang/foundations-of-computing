import FlashcardDeck from "./FlashcardDeck";

export const metadata = { title: "Flashcards · IT Reviewer" };

export default function FlashcardsPage() {
  return (
    <main className="page fade-in">
      <h1 className="large-title">Flashcards</h1>
      <p className="subtitle">Tap a card to flip it. Swipe left or right to move between cards.</p>
      <FlashcardDeck />
    </main>
  );
}
