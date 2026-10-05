export type Topic = "03" | "04" | "05" | "06" | "07" | "08";
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
  "05": "The Vast Network",
  "06": "When the Network and Internet Fails",
  "07": "The Future of Computing",
  "08": "The Challenges in Computing",
};

export const TOPICS = Object.keys(TOPIC_TITLES) as Topic[];
