"use client";

import { useState, useRef } from "react";
import { usePortfolio } from "@/context/PortfolioContext";
import {
  Wrench,
  X,
  KeyRound,
  Upload,
  RotateCcw,
  Check,
  AlertCircle,
  Loader2,
  Palette,
} from "lucide-react";
import { ThemeColorModal } from "@/components/ThemeColorModal";

export function DevModeButtonAndModal() {
  const {
    isDevMode,
    setIsDevMode,
    isAuthModalOpen,
    setIsAuthModalOpen,
    setIsColorModalOpen,
    isDevVisible,
    setIsDevVisible,
    resetToDefaults,
    isSaving,
  } = usePortfolio();

  const [passcode, setPasscode] = useState("");
  const [error, setError] = useState("");
  const [cvUploading, setCvUploading] = useState(false);
  const [cvSuccess, setCvSuccess] = useState(false);
  const cvInputRef = useRef<HTMLInputElement>(null);

  const [isVerifying, setIsVerifying] = useState(false);

  const handleUnlock = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!passcode.trim()) return;

    setIsVerifying(true);
    setError("");

    try {
      const res = await fetch("/api/auth/verify-dev", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ passcode: passcode.trim() }),
      });
      const data = await res.json();
      if (data.valid) {
        setIsDevMode(true);
        setIsDevVisible(true);
        setIsAuthModalOpen(false);
        setPasscode("");
        setError("");
      } else {
        setError("Incorrect passcode.");
      }
    } catch {
      // Fallback for offline/client check
      const clientPasscode = process.env.NEXT_PUBLIC_DEV_PASSCODE;
      if (clientPasscode && passcode.trim() === clientPasscode.trim()) {
        setIsDevMode(true);
        setIsDevVisible(true);
        setIsAuthModalOpen(false);
        setPasscode("");
        setError("");
      } else {
        setError("Incorrect passcode.");
      }
    } finally {
      setIsVerifying(false);
    }
  };

  const handleCvUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setCvUploading(true);
    setCvSuccess(false);

    try {
      const formData = new FormData();
      formData.append("cv", file);

      const res = await fetch("/api/cv", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        setCvSuccess(true);
        setTimeout(() => setCvSuccess(false), 3000);
      } else {
        alert("Failed to upload CV file. Make sure it is a valid PDF.");
      }
    } catch (err) {
      console.error(err);
      alert("Error uploading CV.");
    } finally {
      setCvUploading(false);
    }
  };

  return (
    <>
      {/* Floating fixed bottom-right button */}
      {isDevVisible && (
        <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex items-center gap-2 max-w-[calc(100vw-2rem)]">
          {isDevMode && (
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 rounded-2xl sm:rounded-full border border-amber-400/40 bg-amber-950/90 px-3 py-1.5 text-xs font-mono font-bold text-amber-300 shadow-card backdrop-blur-xl">
              <span className="shrink-0 text-[11px] sm:text-xs">DEV MODE</span>
              <span className="flex items-center gap-1 text-[10px] text-cyan-300 font-normal shrink-0">
                {isSaving ? (
                  <>
                    <Loader2 className="h-2.5 w-2.5 animate-spin" /> Saving...
                  </>
                ) : (
                  <span className="text-emerald-400 font-medium">● Neon Synced</span>
                )}
              </span>

              {/* Color Mode Studio Button (strictly part of DevMode) */}
              <button
                type="button"
                onClick={() => setIsColorModalOpen(true)}
                className="flex items-center gap-1.5 rounded-full border border-purple-400/40 bg-purple-500/25 px-2.5 py-0.5 text-[11px] font-semibold text-purple-200 transition hover:bg-purple-500/40 hover:text-white"
                title="Customize Portfolio Colors (A-Z & JSON Theme Studio)"
              >
                <Palette className="h-3 w-3 text-purple-300" />
                <span>Color Mode</span>
              </button>

              {/* Upload CV button */}
              <button
                type="button"
                onClick={() => cvInputRef.current?.click()}
                disabled={cvUploading}
                className="flex items-center gap-1 rounded-full border border-amber-400/30 bg-amber-400/10 px-2 py-0.5 text-[11px] text-amber-200 transition hover:bg-amber-400/20"
                title="Replace resume-atik-shahrear-ananto.pdf"
              >
                {cvUploading ? (
                  <Loader2 className="h-3 w-3 animate-spin" />
                ) : cvSuccess ? (
                  <Check className="h-3 w-3 text-emerald-400" />
                ) : (
                  <Upload className="h-3 w-3" />
                )}
                <span>Upload CV</span>
              </button>
              <input
                type="file"
                ref={cvInputRef}
                onChange={handleCvUpload}
                accept=".pdf,application/pdf"
                className="hidden"
              />

              {/* Reset Defaults button */}
              <button
                type="button"
                onClick={async () => {
                  if (confirm("Reset all edits to original defaults in Neon DB?")) {
                    await resetToDefaults();
                  }
                }}
                className="flex items-center gap-1 rounded-full border border-white/20 bg-white/5 px-2 py-0.5 text-[11px] text-white/70 transition hover:bg-white/20 hover:text-white"
                title="Reset all edits to defaults"
              >
                <RotateCcw className="h-3 w-3" />
              </button>

              {/* Exit Dev Mode */}
              <button
                type="button"
                onClick={() => {
                  setIsDevMode(false);
                  setIsDevVisible(false);
                }}
                className="rounded-full bg-amber-400/20 p-1 text-amber-200 transition hover:bg-amber-400/40"
                title="Exit Dev Mode"
              >
                <X className="h-3 w-3" />
              </button>
            </div>
          )}

          {!isDevMode && (
            <button
              type="button"
              onClick={() => setIsAuthModalOpen(true)}
              className="group flex items-center gap-2 rounded-full border border-white/15 bg-ink/90 px-4 py-2 text-xs font-mono text-white/70 shadow-card backdrop-blur-xl transition hover:border-cyanGlow/50 hover:bg-cyanGlow/10 hover:text-white"
              aria-label="Toggle Dev Mode"
            >
              <Wrench className="h-3.5 w-3.5 text-cyanGlow transition group-hover:rotate-45" />
              <span>DevMode</span>
            </button>
          )}
        </div>
      )}

      {/* Auth Modal */}
      {isAuthModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 xs:p-4 bg-black/75 backdrop-blur-md">
          <div className="relative w-full max-w-md rounded-[1.75rem] xs:rounded-[2rem] border border-white/15 bg-[#0b0f19] p-5 xs:p-6 sm:p-8 shadow-card">
            <button
              type="button"
              onClick={() => {
                setIsAuthModalOpen(false);
                setIsDevVisible(false);
                setError("");
                setPasscode("");
              }}
              className="absolute right-5 top-5 rounded-full p-1.5 text-white/50 transition hover:bg-white/10 hover:text-white"
              aria-label="Close"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-2xl border border-cyanGlow/30 bg-cyanGlow/10 text-cyanGlow">
                <KeyRound className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-white">
                  Confirm your identity for editing Access.
                </h3>
              </div>
            </div>

            <form onSubmit={handleUnlock} className="mt-6 space-y-4">
              {error && (
                <div className="flex items-center gap-2 rounded-xl border border-red-500/30 bg-red-500/10 px-3.5 py-2.5 text-xs text-red-200">
                  <AlertCircle className="h-4 w-4 shrink-0 text-red-400" />
                  <span>{error}</span>
                </div>
              )}

              <div>
                <label
                  htmlFor="passcode"
                  className="mb-1 block text-xs font-mono uppercase tracking-wider text-white/70"
                >
                  Secret Passcode
                </label>
                <input
                  id="passcode"
                  type="password"
                  autoFocus
                  required
                  value={passcode}
                  onChange={(e) => {
                    setPasscode(e.target.value);
                    setError("");
                  }}
                  placeholder="Enter passcode..."
                  className="w-full rounded-xl border border-white/15 bg-white/[0.05] px-4 py-2.5 font-mono text-sm text-white placeholder-white/20 outline-none transition focus:border-cyanGlow/60 focus:ring-1 focus:ring-cyanGlow/60"
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setIsAuthModalOpen(false);
                    setIsDevVisible(false);
                    setError("");
                    setPasscode("");
                  }}
                  className="rounded-full px-4 py-2 text-xs font-medium text-white/60 transition hover:bg-white/5 hover:text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isVerifying}
                  className="flex items-center gap-1.5 rounded-full border border-cyanGlow/30 bg-cyanGlow/15 px-5 py-2 text-xs font-semibold text-cyan-100 shadow-glow transition hover:bg-cyanGlow/25 disabled:opacity-50"
                >
                  {isVerifying ? (
                    <>
                      <Loader2 className="h-3 w-3 animate-spin" />
                      <span>Verifying...</span>
                    </>
                  ) : (
                    <span>Unlock Editing</span>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Theme & Color Studio Modal */}
      <ThemeColorModal />
    </>
  );
}
