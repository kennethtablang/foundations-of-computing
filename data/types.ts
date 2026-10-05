export type Topic = "03" | "04";
export type Level = "easy" | "medium" | "hard";
export type Kind = "factual" | "situational";

export interface Question {
  id: string;
  topic: Topic;
  level: Level;
  kind: Kind;
  q: string;
  /** The correct answer. */
  a: string;
  /** Three wrong choices, written to be about the same length as the answer. */
  w: [string, string, string];
  /** Short explanation shown after answering. */
  why: string;
}

export const TOPIC_TITLES: Record<Topic, string> = {
  "03": "The Everchanging Computers",
  "04": "The Power of the Web and the Internet",
};
