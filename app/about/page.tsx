import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

const values = [
  "Inspected premium vehicles",
  "Clear rental agreements",
  "Doorstep delivery options",
  "Fast WhatsApp support"
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-ink text-white">
      <Navbar />
      <section className="section-shell pb-20 pt-28 sm:pt-36">
        <p className="text-sm font-black uppercase tracking-[0.18em] text-gold">
          About AstraDrive
        </p>
        <h1 className="mt-4 max-w-4xl text-5xl font-black leading-[0.98] tracking-tight sm:text-7xl">
          Rental cars without counter friction.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-white/[0.64]">
          AstraDrive was built for travelers, founders, families, and teams who
          need a dependable car without spending half a day negotiating,
          waiting, or reading unclear charges.
        </p>
      </section>
      <section className="border-y border-white/10 bg-white py-16 text-ink">
        <div className="section-shell grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-black tracking-tight">Our mission</h2>
            <p className="mt-4 leading-7 text-neutral-600">
              Make premium mobility simple, honest, and fast. We combine a
              carefully verified fleet with clear pricing and human support so
              customers can book confidently.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {values.map((value) => (
              <div key={value} className="rounded-lg border border-neutral-200 p-4">
                <p className="text-lg font-black">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section-shell py-16">
        <h2 className="text-3xl font-black tracking-tight">Trust factors</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {["Documented handoffs", "Verified owners", "Support-first ops"].map(
            (item) => (
              <article
                key={item}
                className="rounded-lg border border-white/[0.12] bg-white/[0.04] p-5"
              >
                <h3 className="text-xl font-black">{item}</h3>
                <p className="mt-3 text-sm leading-6 text-white/[0.62]">
                  Every rental is handled with clear checks, responsive
                  communication, and practical support.
                </p>
              </article>
            )
          )}
        </div>
      </section>
      <Footer />
    </main>
  );
}
