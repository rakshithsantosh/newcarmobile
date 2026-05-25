"use client";

import React, { useState, useEffect } from "react";
import { FLEET } from "@/lib/data";

interface Quote {
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
}

export default function AdminQuotesPage() {
  const [password, setPassword] = useState("");
  const [authenticated, setAuthenticated] = useState(false);
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const savedPassword = localStorage.getItem("ncm_admin_password");
    if (savedPassword) {
      setPassword(savedPassword);
      fetchQuotes(savedPassword);
    }
  }, []);

  const fetchQuotes = async (pwd: string) => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/quotes", {
        headers: {
          "x-admin-password": pwd,
        },
      });

      if (res.ok) {
        const data = await res.json();
        setQuotes(data.quotes);
        setAuthenticated(true);
        localStorage.setItem("ncm_admin_password", pwd);
      } else {
        setAuthenticated(false);
        setError("Invalid password or unauthorized access.");
        localStorage.removeItem("ncm_admin_password");
      }
    } catch (e) {
      setError("Failed to fetch quotes.");
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    fetchQuotes(password);
  };

  const handleLogout = () => {
    setAuthenticated(false);
    setPassword("");
    localStorage.removeItem("ncm_admin_password");
    setQuotes([]);
  };

  if (!authenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
        <form onSubmit={handleLogin} className="bg-white p-8 rounded-2xl shadow-xl max-w-sm w-full space-y-6">
          <div className="text-center">
             <h1 className="text-2xl font-bold text-navy">Admin Access</h1>
             <p className="text-gray-500 text-sm mt-2">Enter your password to view quotes.</p>
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-accent outline-none text-navy"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && <p className="text-red-500 text-sm text-center font-semibold">{error}</p>}
          <button 
            type="submit" 
            disabled={loading}
            className="w-full bg-navy text-white font-bold py-4 rounded-xl hover:bg-navy/90 transition-colors"
          >
            {loading ? "Authenticating..." : "Login"}
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="flex items-center justify-between">
          <div>
             <h1 className="text-3xl font-bold text-navy">Requested Quotes</h1>
             <p className="text-gray-500">Manage all incoming booking requests here.</p>
          </div>
          <button 
            onClick={handleLogout}
            className="text-sm font-bold text-gray-500 hover:text-red-500 transition-colors"
          >
            Log Out
          </button>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          {quotes.length === 0 ? (
            <div className="p-12 text-center text-gray-500 font-medium">No quotes found.</div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-100 text-xs uppercase tracking-widest text-gray-500">
                    <th className="p-4 font-semibold">Date</th>
                    <th className="p-4 font-semibold">Client</th>
                    <th className="p-4 font-semibold">Route</th>
                    <th className="p-4 font-semibold">Vehicle</th>
                    <th className="p-4 font-semibold">Pax</th>
                    <th className="p-4 font-semibold">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {quotes.map((q) => (
                    <tr key={q.id} className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors text-sm text-navy">
                      <td className="p-4 whitespace-nowrap text-gray-500">{new Date(q.createdAt).toLocaleDateString()}</td>
                      <td className="p-4">
                        <p className="font-bold">{q.name}</p>
                        <p className="text-xs text-gray-400">{q.email}</p>
                        <p className="text-xs text-gray-400">{q.phone}</p>
                      </td>
                      <td className="p-4">
                        <p className="font-semibold">{q.pickup}</p>
                        <p className="text-xs text-gray-400">to {q.dropoff}</p>
                        <p className="text-xs text-gray-400">{q.date}</p>
                      </td>
                      <td className="p-4 font-semibold">
                        {FLEET.find((vehicle) => vehicle.id === q.vehicleId)?.name || q.vehicleId}
                      </td>
                      <td className="p-4">{q.pax}</td>
                      <td className="p-4">
                        <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-bold tracking-wider">
                          {q.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
