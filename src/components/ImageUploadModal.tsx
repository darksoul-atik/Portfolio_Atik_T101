"use client";

import React, { useState, useRef } from "react";
import { Upload, X, Check, Image as ImageIcon, Loader2, Link2 } from "lucide-react";

interface ImageUploadModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentUrl: string;
  onSave: (url: string) => void;
  title?: string;
  aspectRatio?: "square" | "video" | "auto";
}

export function ImageUploadModal({
  isOpen,
  onClose,
  currentUrl,
  onSave,
  title = "Edit Image",
  aspectRatio = "auto",
}: ImageUploadModalProps) {
  const [url, setUrl] = useState(currentUrl || "");
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!isOpen) return null;

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    setError("");

    try {
      const formData = new FormData();
      formData.append("file", file);

      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (res.ok && data.url) {
        setUrl(data.url);
      } else {
        setError(data.error || "Failed to upload image.");
      }
    } catch {
      setError("Network error while uploading image.");
    } finally {
      setUploading(false);
    }
  };

  const handleApply = () => {
    if (!url.trim()) {
      setError("Please provide a valid image URL or upload a file.");
      return;
    }
    onSave(url.trim());
    onClose();
  };

  const presets = [
    { label: "Avatar", url: "/avatar.png" },
    { label: "Logo", url: "/logo.png" },
    { label: "Folio Project", url: "/folio.jpg" },
    { label: "HobbyHub", url: "/hobbyhub.jpg" },
    { label: "EventFlow", url: "/eventflow.jpg" },
  ];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="relative w-full max-w-md rounded-[2rem] border border-cyanGlow/30 bg-[#0c1220] p-6 shadow-card max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10">
          <div className="flex items-center gap-2.5">
            <div className="grid h-8 w-8 place-items-center rounded-xl bg-cyanGlow/10 text-cyanGlow">
              <ImageIcon className="h-4 w-4" />
            </div>
            <h3 className="text-base font-bold text-white">{title}</h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full p-1.5 text-white/50 hover:bg-white/10 hover:text-white transition"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Preview */}
        <div className="mt-5">
          <label className="block text-xs font-mono uppercase tracking-wider text-white/60 mb-2">
            Preview
          </label>
          <div className="relative flex items-center justify-center overflow-hidden rounded-2xl border border-white/15 bg-black/50 p-2 min-h-[140px]">
            {url ? (
              <img
                src={url}
                alt="Preview"
                className={`max-h-[180px] w-auto rounded-xl object-cover ${
                  aspectRatio === "square" ? "aspect-square" : ""
                }`}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "/avatar.png";
                }}
              />
            ) : (
              <div className="text-center text-xs text-white/40">
                No image URL provided
              </div>
            )}
          </div>
        </div>

        {/* Upload Button */}
        <div className="mt-5">
          <button
            type="button"
            disabled={uploading}
            onClick={() => fileInputRef.current?.click()}
            className="flex w-full items-center justify-center gap-2 rounded-xl border border-dashed border-cyanGlow/50 bg-cyanGlow/10 py-3 text-xs font-semibold text-cyan-200 transition hover:bg-cyanGlow/20"
          >
            {uploading ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Uploading...
              </>
            ) : (
              <>
                <Upload className="h-4 w-4" />
                Upload New Image From Device
              </>
            )}
          </button>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileUpload}
            accept="image/*"
            className="hidden"
          />
        </div>

        {/* URL Input */}
        <div className="mt-4">
          <label className="block text-xs font-mono uppercase tracking-wider text-white/60 mb-1.5">
            Or Paste Image URL / Local Path
          </label>
          <div className="relative flex items-center">
            <Link2 className="absolute left-3.5 h-3.5 w-3.5 text-white/40" />
            <input
              type="text"
              value={url}
              onChange={(e) => {
                setUrl(e.target.value);
                setError("");
              }}
              placeholder="e.g. /avatar.png or https://example.com/photo.jpg"
              className="w-full rounded-xl border border-white/15 bg-white/[0.05] pl-9 pr-3 py-2.5 text-xs text-white placeholder-white/30 outline-none focus:border-cyanGlow focus:ring-1 focus:ring-cyanGlow"
            />
          </div>
          {error && <p className="mt-1 text-xs text-red-400">{error}</p>}
        </div>

        {/* Quick Presets */}
        <div className="mt-4">
          <label className="block text-[11px] font-mono uppercase tracking-wider text-white/40 mb-1.5">
            Quick Presets
          </label>
          <div className="flex flex-wrap gap-1.5">
            {presets.map((preset) => (
              <button
                key={preset.label}
                type="button"
                onClick={() => setUrl(preset.url)}
                className="rounded-lg border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[11px] text-white/70 hover:border-cyanGlow/40 hover:bg-cyanGlow/10 hover:text-white transition"
              >
                {preset.label}
              </button>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="mt-6 flex items-center justify-end gap-2.5 pt-4 border-t border-white/10">
          <button
            type="button"
            onClick={onClose}
            className="rounded-full px-4 py-2 text-xs font-semibold text-white/60 hover:bg-white/10 hover:text-white transition"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleApply}
            className="flex items-center gap-1.5 rounded-full border border-cyanGlow/40 bg-cyanGlow/20 px-5 py-2 text-xs font-semibold text-cyan-100 shadow-glow hover:bg-cyanGlow/30 transition"
          >
            <Check className="h-3.5 w-3.5" />
            Save Image
          </button>
        </div>
      </div>
    </div>
  );
}
