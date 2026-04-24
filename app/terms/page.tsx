import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

const sections = [
  {
    title: "Bookings",
    body: "Bookings are confirmed after vehicle availability, valid customer documents, and payment terms are accepted."
  },
  {
    title: "Payments and deposits",
    body: "Rental charges, deposits, fuel policy, tolls, and late fees are shared before confirmation. Deposits are refundable after inspection."
  },
  {
    title: "Driver responsibility",
    body: "Customers must hold a valid driving license and follow traffic laws. Damage, misuse, fines, and violations remain the customer's responsibility."
  },
  {
    title: "Cancellation",
    body: "Cancellation rules depend on vehicle category and pickup window. Confirmed bookings may include a cancellation charge."
  }
];

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-ink text-white">
      <Navbar />
      <section className="section-shell pb-12 pt-28 sm:pt-36">
        <p className="text-sm font-black uppercase tracking-[0.18em] text-gold">
          Terms
        </p>
        <h1 className="mt-4 max-w-3xl text-5xl font-black leading-[0.98] tracking-tight sm:text-7xl">
          Simple rental terms.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-white/[0.64]">
          This page is starter legal content for the MVP. Replace it with your
          final legal policy before launch.
        </p>
      </section>
      <section className="section-shell grid gap-4 pb-20">
        {sections.map((section) => (
          <article
            key={section.title}
            className="rounded-lg border border-white/[0.12] bg-white/[0.04] p-5"
          >
            <h2 className="text-2xl font-black tracking-tight">{section.title}</h2>
            <p className="mt-3 leading-7 text-white/[0.62]">{section.body}</p>
          </article>
        ))}
      </section>
      <Footer />
    </main>
  );
}
