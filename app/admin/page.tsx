import { AdminDashboard } from "./AdminDashboard";
import { Navbar } from "@/components/Navbar";

export default function AdminPage() {
  return (
    <main className="min-h-screen bg-ink text-white">
      <Navbar />
      <section className="section-shell py-28">
        <AdminDashboard />
      </section>
    </main>
  );
}
