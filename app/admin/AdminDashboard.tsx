"use client";

import { FormEvent, useCallback, useEffect, useState } from "react";
import { Lock, RefreshCw, Trash2, FileText, MessageSquare } from "lucide-react";
import { FLEET } from "@/lib/data";

type Message = {
  id: string;
  name: string;
  phone: string;
  email: string;
  message: string;
  createdAt: string;
};

type Quote = {
  id: string;
  pickup: string;
  dropoff: string;
  date: string;
  pax: number;
  vehicleId: string;
  name: string;
  email: string;
  phone: string;
  status: string;
  createdAt: string;
};

const adminPassword = "ncmadmin123";

export function AdminDashboard() {
  const [password, setPassword] = useState("");
  const [isAuthed, setIsAuthed] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [activeTab, setActiveTab] = useState<"quotes" | "enquiries">("quotes");
  const [error, setError] = useState("");

  const loadData = useCallback(async () => {
    setError("");
    try {
      const [msgRes, quoteRes] = await Promise.all([
        fetch("/api/contact", { cache: "no-store", headers: { "x-admin-password": password } }),
        fetch("/api/quotes", { cache: "no-store", headers: { "x-admin-password": password } })
      ]);

      if (!msgRes.ok || !quoteRes.ok) {
        setError("Unable to load data. Invalid credentials or server error.");
        return;
      }

      const msgData = (await msgRes.json()) as { messages: Message[] };
      const quoteData = (await quoteRes.json()) as { quotes: Quote[] };
      
      setMessages(msgData.messages);
      setQuotes(quoteData.quotes);
    } catch (e) {
      setError("An error occurred while fetching data.");
    }
  }, [password]);

  useEffect(() => {
    if (isAuthed) {
      void loadData();
    }
  }, [isAuthed, loadData]);

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

  const deleteQuote = async (id: string) => {
    const response = await fetch(`/api/quotes/${id}`, {
      method: "DELETE",
      headers: { "x-admin-password": password }
    });
    if (response.ok) {
      setQuotes((current) => current.filter((q) => q.id !== id));
    }
  };

  if (!isAuthed) {
    return (
      <form
        onSubmit={login}
        className="mx-auto grid max-w-md gap-6 rounded-[2px] border border-white/10 bg-white/5 p-10 md:p-14 shadow-elite"
      >
        <div className="flex items-center gap-4 mb-4">
           <div className="w-10 h-10 bg-accent/20 border border-accent/30 flex items-center justify-center text-accent rounded-[2px]">
              <Lock size={18} strokeWidth={1.5} />
           </div>
           <div>
              <span className="text-gold font-bold uppercase tracking-[0.3em] text-[9px] italic leading-none">Security Portal</span>
              <h1 className="text-2xl font-serif italic text-white tracking-tight mt-1">Admin Login</h1>
           </div>
        </div>
        
        <p className="text-xs leading-relaxed text-white/50 font-light mb-2">
          Use the protocol password to access and manage secure corporate enquiries and quote requests.
        </p>
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="Enter Admin Credentials"
          className="w-full bg-white/5 border border-white/10 p-4 text-xs font-light text-white placeholder:text-white/25 rounded-[2px] focus:border-accent outline-none transition-all duration-300"
        />
        <button className="btn-accent w-full py-4 text-xs font-bold tracking-[0.2em] uppercase active:scale-[0.98] transition-transform cursor-pointer">
          Verify Protocol
        </button>
        {error && <p className="text-xs font-medium text-red-400 mt-2">{error}</p>}
      </form>
    );
  }

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-[10px] font-black uppercase tracking-[0.4em] text-accent italic">
            Secure Portal
          </p>
          <h1 className="mt-2 text-4xl font-serif italic tracking-tight text-white leading-none">
            Dashboard Overview
          </h1>
        </div>
        <button
          onClick={() => void loadData()}
          className="border border-white/10 bg-white/5 px-6 py-3 text-xs tracking-widest uppercase font-bold text-white hover:bg-white/10 rounded-[2px] transition-all flex items-center gap-3 cursor-pointer"
        >
          <RefreshCw size={12} /> Refresh
        </button>
      </div>
      
      {error && <p className="text-xs font-medium text-red-400">{error}</p>}
      
      <div className="flex gap-4 border-b border-white/10 pb-4">
        <button 
          onClick={() => setActiveTab("quotes")}
          className={`flex items-center gap-2 px-6 py-3 text-[10px] font-bold uppercase tracking-[0.2em] rounded-[2px] transition-all ${activeTab === 'quotes' ? 'bg-accent text-navy shadow-elite' : 'bg-white/5 text-white/60 hover:bg-white/10'}`}
        >
          <FileText size={14} /> Quote Requests ({quotes.length})
        </button>
        <button 
          onClick={() => setActiveTab("enquiries")}
          className={`flex items-center gap-2 px-6 py-3 text-[10px] font-bold uppercase tracking-[0.2em] rounded-[2px] transition-all ${activeTab === 'enquiries' ? 'bg-accent text-navy shadow-elite' : 'bg-white/5 text-white/60 hover:bg-white/10'}`}
        >
          <MessageSquare size={14} /> Contact Enquiries ({messages.length})
        </button>
      </div>

      <div className="overflow-x-auto rounded-[2px] border border-white/10 bg-white/5 shadow-elite">
        {activeTab === "quotes" ? (
          <table className="min-w-[1000px] w-full border-collapse text-left text-sm">
            <thead className="bg-white/10 text-accent uppercase tracking-wider text-[9px] font-bold">
              <tr className="border-b border-white/10">
                <th className="p-5 font-bold">Client Details</th>
                <th className="p-5 font-bold">Trip Route & Date</th>
                <th className="p-5 font-bold">Requested Fleet</th>
                <th className="p-5 font-bold">Received At</th>
                <th className="p-5 font-bold text-center">Action</th>
              </tr>
            </thead>
            <tbody className="text-white/80 font-light text-xs">
              {quotes.map((q) => {
                const vehicleName = FLEET.find(v => v.id === q.vehicleId)?.name || q.vehicleId;
                return (
                  <tr key={q.id} className="border-t border-white/5 hover:bg-white/[0.02] transition-colors">
                    <td className="p-5">
                      <div className="font-serif italic text-sm text-white">{q.name}</div>
                      <div className="text-white/60 font-mono mt-1">{q.phone}</div>
                      <div className="text-white/60">{q.email}</div>
                    </td>
                    <td className="p-5">
                      <div className="text-white/80 font-medium">{q.pickup} <span className="text-white/30">➔</span> {q.dropoff}</div>
                      <div className="text-white/50 mt-1">{new Date(q.date).toLocaleString()}</div>
                    </td>
                    <td className="p-5">
                      <div className="text-white/80 font-medium">{vehicleName}</div>
                      <div className="text-white/50 mt-1">{q.pax} Passengers</div>
                    </td>
                    <td className="p-5 text-white/40">
                      {new Date(q.createdAt).toLocaleString()}
                    </td>
                    <td className="p-5 text-center">
                      <button
                        onClick={() => void deleteQuote(q.id)}
                        className="p-3 bg-red-500/10 border border-red-500/20 text-red-400 hover:bg-red-500 hover:text-white transition-all rounded-[2px] inline-flex items-center justify-center cursor-pointer"
                        title="Delete Record"
                      >
                        <Trash2 size={14} />
                      </button>
                    </td>
                  </tr>
                )
              })}
              {quotes.length === 0 && (
                <tr>
                  <td className="p-8 text-center text-white/40 italic" colSpan={5}>
                    No quote requests received at this time.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        ) : (
          <table className="min-w-[820px] w-full border-collapse text-left text-sm">
            <thead className="bg-white/10 text-accent uppercase tracking-wider text-[9px] font-bold">
              <tr className="border-b border-white/10">
                <th className="p-5 font-bold">Name</th>
                <th className="p-5 font-bold">Phone</th>
                <th className="p-5 font-bold">Email</th>
                <th className="p-5 font-bold">Inquiry Message</th>
                <th className="p-5 font-bold">Received At</th>
                <th className="p-5 font-bold text-center">Action</th>
              </tr>
            </thead>
            <tbody className="text-white/80 font-light text-xs">
              {messages.map((message) => (
                <tr key={message.id} className="border-t border-white/5 hover:bg-white/[0.02] transition-colors">
                  <td className="p-5 font-serif italic text-sm text-white">{message.name}</td>
                  <td className="p-5 font-mono text-white/60">{message.phone}</td>
                  <td className="p-5 text-white/60">{message.email}</td>
                  <td className="max-w-xs p-5 text-white/60 leading-relaxed font-light">{message.message}</td>
                  <td className="p-5 text-white/40">
                    {new Date(message.createdAt).toLocaleString()}
                  </td>
                  <td className="p-5 text-center">
                    <button
                      onClick={() => void deleteMessage(message.id)}
                      className="p-3 bg-red-500/10 border border-red-500/20 text-red-400 hover:bg-red-500 hover:text-white transition-all rounded-[2px] inline-flex items-center justify-center cursor-pointer"
                      title="Delete Record"
                    >
                      <Trash2 size={14} />
                    </button>
                  </td>
                </tr>
              ))}
              {messages.length === 0 && (
                <tr>
                  <td className="p-8 text-center text-white/40 italic" colSpan={6}>
                    No customer enquiries received at this time.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
