"use client";

import { FormEvent, useCallback, useEffect, useState } from "react";

type Message = {
  id: string;
  name: string;
  phone: string;
  email: string;
  message: string;
  createdAt: string;
};

const adminPassword = "admin123";

export function AdminDashboard() {
  const [password, setPassword] = useState("");
  const [isAuthed, setIsAuthed] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [error, setError] = useState("");

  const loadMessages = useCallback(async () => {
    const response = await fetch("/api/contact", {
      cache: "no-store",
      headers: { "x-admin-password": password }
    });
    if (!response.ok) {
      setError("Unable to load messages.");
      return;
    }
    const data = (await response.json()) as { messages: Message[] };
    setMessages(data.messages);
  }, [password]);

  useEffect(() => {
    if (isAuthed) {
      void loadMessages();
    }
  }, [isAuthed, loadMessages]);

  const login = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (password === adminPassword) {
      setIsAuthed(true);
      setError("");
      return;
    }
    setError("Invalid password.");
  };

  const deleteMessage = async (id: string) => {
    const response = await fetch(`/api/contact/${id}`, {
      method: "DELETE",
      headers: { "x-admin-password": password }
    });
    if (response.ok) {
      setMessages((current) => current.filter((message) => message.id !== id));
    }
  };

  if (!isAuthed) {
    return (
      <form
        onSubmit={login}
        className="mx-auto grid max-w-md gap-4 rounded-lg border border-white/[0.12] bg-white/[0.04] p-5"
      >
        <h1 className="text-3xl font-black tracking-tight">Admin login</h1>
        <p className="text-sm leading-6 text-white/60">
          Use the MVP password to view and manage contact messages.
        </p>
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="Password"
          className="focus-ring rounded border border-white/[0.12] bg-ink px-4 py-3 text-white placeholder:text-white/[0.28]"
        />
        <button className="focus-ring rounded bg-gold px-5 py-3 font-black text-ink">
          Login
        </button>
        {error && <p className="text-sm font-semibold text-red-300">{error}</p>}
      </form>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.18em] text-gold">
            Dashboard
          </p>
          <h1 className="mt-2 text-4xl font-black tracking-tight">
            Contact messages
          </h1>
        </div>
        <button
          onClick={() => void loadMessages()}
          className="focus-ring rounded border border-white/[0.14] px-4 py-2 text-sm font-bold hover:bg-white/[0.08]"
        >
          Refresh
        </button>
      </div>
      {error && <p className="text-sm font-semibold text-red-300">{error}</p>}
      <div className="overflow-x-auto rounded-lg border border-white/[0.12]">
        <table className="min-w-[820px] w-full border-collapse text-left text-sm">
          <thead className="bg-white/[0.06] text-white/[0.68]">
            <tr>
              <th className="p-4 font-bold">Name</th>
              <th className="p-4 font-bold">Phone</th>
              <th className="p-4 font-bold">Email</th>
              <th className="p-4 font-bold">Message</th>
              <th className="p-4 font-bold">Date</th>
              <th className="p-4 font-bold">Action</th>
            </tr>
          </thead>
          <tbody>
            {messages.map((message) => (
              <tr key={message.id} className="border-t border-white/10">
                <td className="p-4 font-semibold">{message.name}</td>
                <td className="p-4 text-white/70">{message.phone}</td>
                <td className="p-4 text-white/70">{message.email}</td>
                <td className="max-w-xs p-4 text-white/70">{message.message}</td>
                <td className="p-4 text-white/70">
                  {new Date(message.createdAt).toLocaleString()}
                </td>
                <td className="p-4">
                  <button
                    onClick={() => void deleteMessage(message.id)}
                    className="focus-ring rounded bg-red-500/16 px-3 py-2 font-bold text-red-200 hover:bg-red-500/24"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {messages.length === 0 && (
              <tr>
                <td className="p-4 text-white/60" colSpan={6}>
                  No contact messages yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
