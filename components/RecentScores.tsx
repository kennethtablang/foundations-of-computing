"use client";

import { useEffect, useState } from "react";
import { KEYS, load, type Attempt } from "@/lib/storage";

export default function RecentScores() {
  const [attempts, setAttempts] = useState<Attempt[] | null>(null);
  useEffect(() => setAttempts(load<Attempt[]>(KEYS.attempts, [])), []);

  const taken = attempts?.length ?? 0;
  const best = attempts?.length ? Math.max(...attempts.map((a) => Math.round((a.score / a.total) * 100))) : null;
  const last = attempts?.[0];

  return (
    <div className="stat-row">
      <div className="stat"><b>{taken}</b><span>Exams taken</span></div>
      <div className="stat"><b>{best === null ? "–" : `${best}%`}</b><span>Best score</span></div>
      <div className="stat"><b>{last ? `${last.score}/${last.total}` : "–"}</b><span>Last exam</span></div>
    </div>
  );
}
