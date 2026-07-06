import Link from "next/link";
import { NavLinks } from "@/components/nav-links";
import { siteConfig } from "@/lib/site";

export function Header() {
  return (
    <header className="sticky top-0 z-10 border-b border-line bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-between gap-x-6 gap-y-2 px-6 py-4">
        <Link
          href="/"
          className="text-base font-semibold tracking-tight transition-colors hover:text-accent"
        >
          {siteConfig.name}
          <span className="text-muted">.org</span>
        </Link>
        <nav aria-label="Main navigation">
          <NavLinks />
        </nav>
      </div>
    </header>
  );
}
