import { AdminDashboard } from "./AdminDashboard";

export default function AdminPage() {
  return (
    <main className="min-h-screen bg-ink text-white">
      <section className="section-shell py-28">
        <AdminDashboard />
      </section>
    </main>
  );
}
