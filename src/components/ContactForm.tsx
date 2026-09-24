"use client";

import { useState, FormEvent } from "react";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Full-time Role / Opportunity",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus("error");
      setErrorMessage("Please fill out all required fields.");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          subject: "Full-time Role / Opportunity",
          message: "",
        });
      } else {
        setStatus("error");
        setErrorMessage(data.error || "Failed to send message.");
      }
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Please try again or reach out directly.");
    }
  };

  return (
    <div
      id="contact-form"
      className="relative rounded-[1.75rem] xs:rounded-[2rem] border border-white/10 bg-white/[0.045] p-4 xs:p-6 sm:p-8 backdrop-blur-xl"
    >
      <div className="mb-5 sm:mb-6">
        <h3 className="text-lg xs:text-xl font-bold text-white sm:text-2xl">
          Send a Message
        </h3>
        <p className="mt-1 text-xs xs:text-sm text-white/60">
          Have an opening, internship, or project inquiry? Fill out the form below.
        </p>
      </div>

      {status === "success" ? (
        <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-6 text-center">
          <CheckCircle2 className="mx-auto h-10 w-10 text-emerald-400" />
          <h4 className="mt-3 text-lg font-semibold text-white">
            Message Sent Successfully!
          </h4>
          <p className="mt-1 text-sm text-white/70">
            Thank you for reaching out. I usually respond within 24 hours.
          </p>
          <button
            type="button"
            onClick={() => setStatus("idle")}
            className="mt-5 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-xs font-semibold text-white transition hover:bg-white/20"
          >
            Send Another Message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {status === "error" && (
            <div className="flex items-center gap-2 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-200">
              <AlertCircle className="h-5 w-5 shrink-0 text-red-400" />
              <span>{errorMessage}</span>
            </div>
          )}

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label
                htmlFor="name"
                className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-white/70"
              >
                Your Name <span className="text-pinkGlow">*</span>
              </label>
              <input
                id="name"
                type="text"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                placeholder="Sarah Connor"
                className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition focus:border-cyanGlow/50 focus:bg-white/[0.07] focus:ring-1 focus:ring-cyanGlow/50"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-white/70"
              >
                Your Email <span className="text-pinkGlow">*</span>
              </label>
              <input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                placeholder="sarah@example.com"
                className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition focus:border-cyanGlow/50 focus:bg-white/[0.07] focus:ring-1 focus:ring-cyanGlow/50"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="subject"
              className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-white/70"
            >
              Inquiry Type
            </label>
            <select
              id="subject"
              value={formData.subject}
              onChange={(e) =>
                setFormData({ ...formData, subject: e.target.value })
              }
              className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-sm text-white outline-none transition focus:border-cyanGlow/50 focus:ring-1 focus:ring-cyanGlow/50"
            >
              <option value="Full-time Role / Opportunity" className="bg-slate-900 text-white">
                Full-time Software Engineering Role
              </option>
              <option value="Internship Inquiry" className="bg-slate-900 text-white">
                Internship / Trainee Opportunity
              </option>
              <option value="Freelance / Contract Project" className="bg-slate-900 text-white">
                Freelance / Contract Project
              </option>
              <option value="Research / Collaboration" className="bg-slate-900 text-white">
                Research / Technical Collaboration
              </option>
              <option value="General Inquiry" className="bg-slate-900 text-white">
                General Inquiry
              </option>
            </select>
          </div>

          <div>
            <label
              htmlFor="message"
              className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-white/70"
            >
              Message <span className="text-pinkGlow">*</span>
            </label>
            <textarea
              id="message"
              required
              rows={4}
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              placeholder="Tell me about the role, team, or project requirements..."
              className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition focus:border-cyanGlow/50 focus:bg-white/[0.07] focus:ring-1 focus:ring-cyanGlow/50"
            />
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-cyanGlow/30 bg-cyanGlow/15 px-6 py-3.5 text-sm font-semibold text-cyan-100 shadow-glow transition hover:bg-cyanGlow/25 focus:outline-none focus:ring-2 focus:ring-cyanGlow focus:ring-offset-2 focus:ring-offset-ink disabled:cursor-not-allowed disabled:opacity-60"
          >
            {status === "loading" ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                Send Message <Send className="h-4 w-4" />
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
