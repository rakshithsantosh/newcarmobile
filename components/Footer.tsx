import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink py-10">
      <div className="section-shell grid gap-8 sm:grid-cols-3">
        <div>
          <p className="text-lg font-black">
            Astra<span className="text-gold">Drive</span>
          </p>
          <p className="mt-3 max-w-sm text-sm leading-6 text-white/[0.58]">
            Premium rentals, verified cars, transparent billing, and fast human
            support for every trip.
          </p>
        </div>
        <div className="grid gap-2 text-sm text-white/[0.64]">
          <p className="font-semibold text-white">Company</p>
          <Link href="/about" className="hover:text-gold">
            About
          </Link>
          <Link href="/terms" className="hover:text-gold">
            Terms
          </Link>
          <Link href="/admin" className="hover:text-gold">
            Admin
          </Link>
        </div>
        <div className="grid gap-2 text-sm text-white/[0.64]">
          <p className="font-semibold text-white">Support</p>
          <a href="tel:+919876543210" className="hover:text-gold">
            +91 98765 43210
          </a>
          <a
            href="https://wa.me/919876543210?text=Hello%20I%20want%20to%20rent%20a%20car"
            className="hover:text-gold"
          >
            WhatsApp booking
          </a>
        </div>
      </div>
    </footer>
  );
}
