"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/lib/site";

export function NavLinks() {
  const pathname = usePathname();

  return (
    <ul className="flex flex-wrap items-center gap-x-5 gap-y-1 text-sm">
      {navLinks.map(({ label, href }) => {
        const isActive =
          href === "/" ? pathname === "/" : pathname.startsWith(href);
        return (
          <li key={href}>
            <Link
              href={href}
              aria-current={isActive ? "page" : undefined}
              className={
                isActive
                  ? "font-medium text-accent"
                  : "text-muted transition-colors hover:text-foreground"
              }
            >
              {label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
