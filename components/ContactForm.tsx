"use client";

import { motion } from "framer-motion";
import { FormEvent, useState } from "react";

type FormState = {
  name: string;
  phone: string;
  email: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  phone: "",
  email: "",
  message: ""
};

export function ContactForm() {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [error, setError] = useState("");

  const updateField = (field: keyof FormState, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading");
    setError("");

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    });

    if (!response.ok) {
      const data = (await response.json().catch(() => null)) as {
        error?: string;
      } | null;
      setError(data?.error ?? "Something went wrong. Please try again.");
      setStatus("error");
      return;
    }

    setForm(initialState);
    setStatus("success");
  };

  return (
    <motion.form
      id="contact"
      onSubmit={submit}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-90px" }}
      transition={{ duration: 0.6 }}
      className="grid gap-5 rounded-lg border border-white/[0.10] bg-cream p-4 text-ink shadow-lift sm:p-6"
    >
      <div>
        <p className="text-sm font-black uppercase tracking-[0.16em] text-gold">
          Quick quote
        </p>
        <h3 className="mt-2 text-2xl font-black tracking-tight">
          Tell us where and when.
        </h3>
        <p className="mt-2 text-sm leading-6 text-neutral-600">
          We usually reply on WhatsApp in under 10 minutes.
        </p>
      </div>
      <div className="grid gap-1.5">
        <label htmlFor="name" className="text-sm font-bold text-neutral-700">
          Name
        </label>
        <input
          id="name"
          value={form.name}
          onChange={(event) => updateField("name", event.target.value)}
          className="focus-ring rounded border border-neutral-200 bg-white px-4 py-3.5 text-ink placeholder:text-neutral-400"
          placeholder="Your name"
          required
          minLength={2}
        />
      </div>
      <div className="grid gap-1.5">
        <label htmlFor="phone" className="text-sm font-bold text-neutral-700">
          Phone
        </label>
        <input
          id="phone"
          value={form.phone}
          onChange={(event) => updateField("phone", event.target.value)}
          className="focus-ring rounded border border-neutral-200 bg-white px-4 py-3.5 text-ink placeholder:text-neutral-400"
          placeholder="+91 98765 43210"
          required
          minLength={8}
        />
      </div>
      <div className="grid gap-1.5">
        <label htmlFor="email" className="text-sm font-bold text-neutral-700">
          Email
        </label>
        <input
          id="email"
          type="email"
          value={form.email}
          onChange={(event) => updateField("email", event.target.value)}
          className="focus-ring rounded border border-neutral-200 bg-white px-4 py-3.5 text-ink placeholder:text-neutral-400"
          placeholder="you@example.com"
          required
        />
      </div>
      <div className="grid gap-1.5">
        <label htmlFor="message" className="text-sm font-bold text-neutral-700">
          Trip details
        </label>
        <textarea
          id="message"
          value={form.message}
          onChange={(event) => updateField("message", event.target.value)}
          className="focus-ring min-h-28 rounded border border-neutral-200 bg-white px-4 py-3.5 text-ink placeholder:text-neutral-400"
          placeholder="Dates, city, preferred car, pickup location."
          required
          minLength={10}
        />
      </div>
      <button
        type="submit"
        disabled={status === "loading"}
        className="focus-ring rounded bg-ink px-5 py-4 font-black text-white transition hover:bg-neutral-800 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "loading" ? "Sending..." : "Send enquiry"}
      </button>
      {status === "success" && (
        <p className="rounded bg-green-50 px-4 py-3 text-sm font-bold text-green-700">
          Message received. We will contact you shortly.
        </p>
      )}
      {status === "error" && (
        <p className="rounded bg-red-50 px-4 py-3 text-sm font-bold text-red-700">
          {error}
        </p>
      )}
    </motion.form>
  );
}
