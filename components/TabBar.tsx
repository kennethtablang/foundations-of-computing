"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BookIcon, CardsIcon, ExamIcon, HomeIcon, ListIcon } from "./Icons";

const tabs = [
  { href: "/", label: "Home", Icon: HomeIcon },
  { href: "/flashcards", label: "Cards", Icon: CardsIcon },
  { href: "/exam", label: "Exam", Icon: ExamIcon },
  { href: "/reviewer", label: "Reviewer", Icon: BookIcon },
  { href: "/bank", label: "Q Bank", Icon: ListIcon },
];

export default function TabBar() {
  const path = usePathname();
  return (
    <nav className="tabbar glass" aria-label="Main">
      {tabs.map(({ href, label, Icon }) => {
        const active = href === "/" ? path === "/" : path.startsWith(href);
        return (
          <Link key={href} href={href} className="tab" aria-current={active ? "page" : undefined}>
            <Icon />
            {label}
          </Link>
        );
      })}
    </nav>
  );
}
