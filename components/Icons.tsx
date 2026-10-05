// SF Symbols–style line icons.
const base = { fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round" } as const;

export const HomeIcon = () => (
  <svg viewBox="0 0 24 24" {...base}><path d="M3.5 10.5 12 3.5l8.5 7" /><path d="M5.5 9v10.5h4.5v-6h4v6h4.5V9" /></svg>
);
export const CardsIcon = () => (
  <svg viewBox="0 0 24 24" {...base}><rect x="3.5" y="7" width="17" height="13" rx="3" /><path d="M6 4h12" /><path d="M8 1.8h8" opacity=".6" /></svg>
);
export const ExamIcon = () => (
  <svg viewBox="0 0 24 24" {...base}><rect x="4" y="3" width="16" height="18" rx="3.5" /><path d="m7.5 9 1.6 1.6L12 7.7" /><path d="M14 9.5h3" /><path d="m7.5 15 1.6 1.6 2.9-2.9" /><path d="M14 15.5h3" /></svg>
);
export const BookIcon = () => (
  <svg viewBox="0 0 24 24" {...base}><path d="M12 6.5C10 5 7 4.5 3.5 5v13.5C7 18 10 18.5 12 20c2-1.5 5-2 8.5-1.5V5C17 4.5 14 5 12 6.5Z" /><path d="M12 6.5V20" /></svg>
);
export const ListIcon = () => (
  <svg viewBox="0 0 24 24" {...base}><path d="M9 6h11M9 12h11M9 18h11" /><circle cx="4.5" cy="6" r="1.1" fill="currentColor" /><circle cx="4.5" cy="12" r="1.1" fill="currentColor" /><circle cx="4.5" cy="18" r="1.1" fill="currentColor" /></svg>
);
export const SearchIcon = () => (
  <svg viewBox="0 0 24 24" {...base}><circle cx="10.5" cy="10.5" r="6.5" /><path d="m15.5 15.5 5 5" /></svg>
);
export const ShuffleIcon = () => (
  <svg viewBox="0 0 24 24" {...base}><path d="M3 7h3.5c4.5 0 6.5 10 11 10H21" /><path d="M3 17h3.5c1.8 0 3-1.5 4.2-3.5M13.3 10C14.5 8.4 15.7 7 17.5 7H21" /><path d="m18.5 4.5 2.5 2.5-2.5 2.5M18.5 14.5l2.5 2.5-2.5 2.5" /></svg>
);
export const ChevronLeft = () => (
  <svg viewBox="0 0 24 24" {...base} strokeWidth={2.2}><path d="m14.5 5-7 7 7 7" /></svg>
);
export const ChevronRight = () => (
  <svg viewBox="0 0 24 24" {...base} strokeWidth={2.2}><path d="m9.5 5 7 7-7 7" /></svg>
);
export const CloseIcon = () => (
  <svg viewBox="0 0 24 24" {...base} strokeWidth={2.2}><path d="M6 6l12 12M18 6 6 18" /></svg>
);
