# Foundations of Computing Reviewer (IT2221)

A mobile-first Next.js reviewer for Handouts 03 to 08:

- 03 The Everchanging Computers
- 04 The Power of the Web and the Internet
- 05 The Vast Network
- 06 When the Network and Internet Fails
- 07 The Future of Computing
- 08 The Challenges in Computing

 The source PDFs are in `materials/`.

- **Exam Training**: choose handout, difficulty (Easy / Medium / Hard / Mixed), question type
  (Factual / Situational), length, and mode (Practice with instant feedback, or Exam graded at the end).
- **Flashcards**: 146 cards. Tap to flip, swipe to move, and mark cards as known.
- **Reviewer**: summarized notes for each handout.
- **Question Bank**: all 600 questions with answers and explanations, with search and filters.

## Run

```bash
npm install
npm run dev        # http://localhost:3000
```

To test on a phone on the same Wi-Fi, run `npm run build && npm start` and open the
"Network" URL that Next.js prints (for example http://192.168.x.x:3000).

## Deploy for students

Push the folder to GitHub and import it on https://vercel.com (no settings needed).
Then share the resulting URL. On iPhone, Share → *Add to Home Screen* installs it like an app.

## Editing questions

Questions are in `data/questions-03.ts` through `data/questions-08.ts`. After editing, run:

```bash
npm run validate
```

The validator checks the question count per handout, no duplicate choices, and similar choice lengths.
It also checks that the correct answer is **never the longest choice**.
