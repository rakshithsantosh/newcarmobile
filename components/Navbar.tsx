import Link from "next/link";

const navItems = [
  { href: "#featured", label: "Fleet" },
  { href: "#trust", label: "Why us" },
  { href: "/about", label: "About" }
];

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.08] bg-ink/[0.84] backdrop-blur-xl">
      <nav className="section-shell flex h-16 items-center justify-between">
        <Link href="/" className="text-lg font-black tracking-[0.08em]">
          ASTRA<span className="text-gold">DRIVE</span>
        </Link>
        <div className="hidden items-center gap-1 text-sm text-white/[0.72] sm:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded px-3 py-2 transition hover:bg-white/10 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </div>
        <a
          href="#contact"
          className="focus-ring rounded bg-white px-4 py-2 text-sm font-black text-ink transition hover:bg-cream"
        >
          Book
        </a>
      </nav>
    </header>
  );
}
