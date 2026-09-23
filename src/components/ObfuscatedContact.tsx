"use client";

import { useState } from "react";
import { Copy, Check, Eye } from "lucide-react";

type ObfuscatedContactProps = {
  type: "email" | "phone" | "whatsapp";
  encodedValue: string; // base64 encoded
  label: string;
  icon: React.ReactNode;
};

export function ObfuscatedContact({
  type,
  encodedValue,
  label,
  icon,
}: ObfuscatedContactProps) {
  const [revealed, setRevealed] = useState(false);
  const [copied, setCopied] = useState(false);

  const getDecoded = () => {
    try {
      if (typeof window !== "undefined") {
        return atob(encodedValue);
      }
    } catch {
      return "";
    }
    return "";
  };

  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    const val = getDecoded();
    if (val && navigator.clipboard) {
      navigator.clipboard.writeText(val);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="group flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/[0.045] px-4 py-3 transition duration-200 hover:border-cyanGlow/30 hover:bg-white/[0.07]">
      <div className="flex items-center gap-3 overflow-hidden">
        <span className="text-cyanGlow shrink-0">{icon}</span>
        <div className="min-w-0">
          <p className="text-xs uppercase tracking-wider text-white/40">{label}</p>
          <p className="truncate text-sm font-medium text-white/90">
            {revealed ? (
              getDecoded()
            ) : (
              <span className="text-white/40 tracking-wider">
                {type === "email" ? "•••••••••@gmail.com" : "+880 •••••••••"}
              </span>
            )}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-1.5 shrink-0">
        {!revealed ? (
          <button
            type="button"
            onClick={() => setRevealed(true)}
            className="flex items-center gap-1 rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-white/70 transition hover:border-cyanGlow/40 hover:bg-cyanGlow/10 hover:text-white"
            title={`Reveal ${label}`}
          >
            <Eye className="h-3 w-3" />
            <span className="hidden sm:inline">Reveal</span>
          </button>
        ) : (
          <button
            type="button"
            onClick={handleCopy}
            className="flex items-center gap-1 rounded-lg border border-cyanGlow/30 bg-cyanGlow/10 px-2.5 py-1 text-xs text-cyan-200 transition hover:bg-cyanGlow/20"
            title="Copy to clipboard"
          >
            {copied ? (
              <>
                <Check className="h-3 w-3 text-emerald-400" />
                <span className="text-emerald-400">Copied</span>
              </>
            ) : (
              <>
                <Copy className="h-3 w-3" />
                <span>Copy</span>
              </>
            )}
          </button>
        )}
      </div>
    </div>
  );
}
