"use client";

import { useState, useMemo, useRef } from "react";
import {
  X,
  Palette,
  RotateCcw,
  Upload,
  Copy,
  Download,
  Check,
  Search,
  Sparkles,
  FileCode,
  Sliders,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import {
  THEME_COLOR_ELEMENTS,
  DEFAULT_THEME_COLORS,
  SAMPLE_JSON_TEMPLATE,
  ThemeColorItem,
} from "@/data/themeColors";
import { usePortfolio } from "@/context/PortfolioContext";

export function ThemeColorModal() {
  const {
    isColorModalOpen,
    setIsColorModalOpen,
    themeColors,
    updateThemeColor,
    updateThemeColorsBatch,
    resetThemeColors,
  } = usePortfolio();

  const [activeTab, setActiveTab] = useState<"manual" | "json">("manual");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  // JSON Tab State
  const [jsonText, setJsonText] = useState("");
  const [jsonStatus, setJsonStatus] = useState<{
    type: "success" | "error" | "info" | null;
    message: string;
  }>({ type: null, message: "" });
  const [copied, setCopied] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const categories = useMemo(() => {
    const set = new Set<string>();
    THEME_COLOR_ELEMENTS.forEach((el) => set.add(el.category));
    return ["All", ...Array.from(set)];
  }, []);

  // Filtered and A-Z sorted list
  const filteredElements = useMemo(() => {
    return THEME_COLOR_ELEMENTS.filter((el) => {
      const matchesCategory =
        selectedCategory === "All" || el.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        el.label.toLowerCase().includes(q) ||
        el.id.toLowerCase().includes(q) ||
        el.elementName.toLowerCase().includes(q) ||
        el.description.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    }).sort((a, b) => a.label.localeCompare(b.label));
  }, [searchQuery, selectedCategory]);

  if (!isColorModalOpen) return null;

  const currentTheme = { ...DEFAULT_THEME_COLORS, ...themeColors };

  // Helper to extract a hex color for the <input type="color"> picker
  const getHexForPicker = (val: string, fallback: string): string => {
    if (!val) val = fallback;
    val = val.trim();
    if (val.startsWith("#")) {
      if (val.length === 4) {
        return `#${val[1]}${val[1]}${val[2]}${val[2]}${val[3]}${val[3]}`;
      }
      return val.slice(0, 7);
    }
    const match = val.match(/rgba?\((\d+)[,\s]+(\d+)[,\s]+(\d+)/i);
    if (match) {
      const r = parseInt(match[1], 10).toString(16).padStart(2, "0");
      const g = parseInt(match[2], 10).toString(16).padStart(2, "0");
      const b = parseInt(match[3], 10).toString(16).padStart(2, "0");
      return `#${r}${g}${b}`;
    }
    return "#000000";
  };

  // Helper to sync background and card aliases
  const handleColorChange = (id: string, value: string) => {
    if (id === "websiteBgColor" || id === "bodyBg") {
      updateThemeColorsBatch({ websiteBgColor: value, bodyBg: value });
    } else if (id === "cardGrayBg" || id === "cardBoxBg") {
      updateThemeColorsBatch({ cardGrayBg: value, cardBoxBg: value });
    } else {
      updateThemeColor(id, value);
    }
  };

  // Handle uploading a JSON file
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const content = event.target?.result as string;
        setJsonText(content);
        const parsed = JSON.parse(content);
        if (typeof parsed !== "object" || parsed === null || Array.isArray(parsed)) {
          setJsonStatus({
            type: "error",
            message: "JSON must be an object with key-value pairs.",
          });
          return;
        }

        const validKeys = Object.keys(parsed).filter((k) => k in DEFAULT_THEME_COLORS);
        if (validKeys.length === 0) {
          setJsonStatus({
            type: "error",
            message: "No matching portfolio element keys found in this JSON.",
          });
          return;
        }

        const normalized = { ...parsed };
        if (normalized.websiteBgColor && !normalized.bodyBg) normalized.bodyBg = normalized.websiteBgColor;
        if (normalized.bodyBg && !normalized.websiteBgColor) normalized.websiteBgColor = normalized.bodyBg;
        if (normalized.cardGrayBg && !normalized.cardBoxBg) normalized.cardBoxBg = normalized.cardGrayBg;
        if (normalized.cardBoxBg && !normalized.cardGrayBg) normalized.cardGrayBg = normalized.cardBoxBg;

        updateThemeColorsBatch(normalized);
        setJsonStatus({
          type: "success",
          message: `Successfully loaded & applied ${validKeys.length} colors from "${file.name}"!`,
        });
      } catch (err: any) {
        setJsonStatus({
          type: "error",
          message: `Invalid JSON file: ${err.message || "Parse error"}`,
        });
      }
    };
    reader.readAsText(file);
    // Reset file input
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  // Handle applying pasted JSON
  const handleApplyJsonText = () => {
    if (!jsonText.trim()) {
      setJsonStatus({
        type: "error",
        message: "Please enter or paste JSON content first.",
      });
      return;
    }

    try {
      const parsed = JSON.parse(jsonText);
      if (typeof parsed !== "object" || parsed === null || Array.isArray(parsed)) {
        setJsonStatus({
          type: "error",
          message: "JSON root must be an object { \"elementId\": \"#color\" }",
        });
        return;
      }

      const validKeys = Object.keys(parsed).filter((k) => k in DEFAULT_THEME_COLORS);
      if (validKeys.length === 0) {
        setJsonStatus({
          type: "error",
          message: "No recognized element IDs found. Check the example placeholder below.",
        });
        return;
      }

      const normalized = { ...parsed };
      if (normalized.websiteBgColor && !normalized.bodyBg) normalized.bodyBg = normalized.websiteBgColor;
      if (normalized.bodyBg && !normalized.websiteBgColor) normalized.websiteBgColor = normalized.bodyBg;
      if (normalized.cardGrayBg && !normalized.cardBoxBg) normalized.cardBoxBg = normalized.cardGrayBg;
      if (normalized.cardBoxBg && !normalized.cardGrayBg) normalized.cardGrayBg = normalized.cardBoxBg;

      updateThemeColorsBatch(normalized);
      setJsonStatus({
        type: "success",
        message: `Successfully applied ${validKeys.length} color customization(s)!`,
      });
    } catch (err: any) {
      setJsonStatus({
        type: "error",
        message: `JSON Syntax Error: ${err.message || "Invalid syntax"}`,
      });
    }
  };

  // Copy current active theme JSON to clipboard
  const handleCopyCurrentJson = async () => {
    try {
      await navigator.clipboard.writeText(JSON.stringify(currentTheme, null, 2));
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      console.error(err);
    }
  };

  // Download current theme as a .json file
  const handleDownloadJson = () => {
    const dataStr =
      "data:text/json;charset=utf-8," +
      encodeURIComponent(JSON.stringify(currentTheme, null, 2));
    const downloadAnchor = document.createElement("a");
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", "portfolio-theme-colors.json");
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-2.5 sm:p-5 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative flex flex-col w-full max-w-5xl h-[92vh] max-h-[880px] rounded-[1.75rem] xs:rounded-[2rem] border border-white/15 bg-[#0b0f19] shadow-2xl text-white overflow-hidden">
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 border-b border-white/10 bg-white/[0.02]">
          <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
            <div className="grid h-9 w-9 sm:h-10 sm:w-10 shrink-0 place-items-center rounded-xl sm:rounded-2xl border border-cyanGlow/40 bg-cyanGlow/10 text-cyanGlow shadow-glow">
              <Palette className="h-4 w-4 sm:h-5 sm:w-5" />
            </div>
            <div className="min-w-0">
              <h2 className="text-sm sm:text-lg font-bold text-white flex items-center gap-1.5 sm:gap-2 truncate">
                <span>Color Studio</span>
                <span className="rounded-full bg-cyanGlow/15 border border-cyanGlow/30 px-1.5 py-0.5 text-[9px] sm:text-[10px] font-mono text-cyan-200">
                  A-Z
                </span>
              </h2>
              <p className="text-[10px] sm:text-xs text-white/50 truncate">
                Change element colors or upload JSON theme
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1 sm:gap-2 shrink-0">
            <button
              type="button"
              onClick={() => {
                if (confirm("Reset ALL colors back to original portfolio defaults?")) {
                  resetThemeColors();
                }
              }}
              className="hidden sm:flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs text-white/70 hover:bg-white/15 hover:text-white transition"
              title="Reset all colors to default"
            >
              <RotateCcw className="h-3 w-3" />
              <span>Reset Defaults</span>
            </button>

            <button
              type="button"
              onClick={() => setIsColorModalOpen(false)}
              className="rounded-full p-1.5 sm:p-2 text-white/50 transition hover:bg-white/10 hover:text-white"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 bg-white/[0.015] px-3 sm:px-6 py-2">
          <div className="flex items-center gap-1.5 sm:gap-2 w-full sm:w-auto">
            <button
              type="button"
              onClick={() => setActiveTab("manual")}
              className={`flex-1 sm:flex-initial flex items-center justify-center gap-1.5 rounded-xl px-3 py-1.5 sm:px-4 sm:py-2 text-[11px] sm:text-xs font-semibold transition ${
                activeTab === "manual"
                  ? "bg-cyanGlow/20 text-cyan-200 border border-cyanGlow/40 shadow-glow"
                  : "text-white/60 hover:bg-white/5 hover:text-white"
              }`}
            >
              <Sliders className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
              <span>Manual Controls</span>
              <span className="rounded-full bg-white/10 px-1.5 py-0.2 text-[9px] font-mono">
                {THEME_COLOR_ELEMENTS.length}
              </span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("json")}
              className={`flex-1 sm:flex-initial flex items-center justify-center gap-1.5 rounded-xl px-3 py-1.5 sm:px-4 sm:py-2 text-[11px] sm:text-xs font-semibold transition ${
                activeTab === "json"
                  ? "bg-cyanGlow/20 text-cyan-200 border border-cyanGlow/40 shadow-glow"
                  : "text-white/60 hover:bg-white/5 hover:text-white"
              }`}
            >
              <FileCode className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
              <span>JSON Upload</span>
            </button>
          </div>

          <div className="hidden md:flex items-center gap-2 text-[11px] font-mono text-emerald-400">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Live Real-Time Preview</span>
          </div>
        </div>

        {/* Tab 1: Manual Controls (A to Z) */}
        {activeTab === "manual" && (
          <div className="flex-1 flex flex-col overflow-hidden p-4 sm:p-6">
            {/* Search & Filters */}
            <div className="flex flex-col sm:flex-row gap-3 mb-4">
              <div className="relative flex-1">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-white/40" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search elements (e.g., button, card, text, glow, code)..."
                  className="w-full rounded-xl border border-white/15 bg-white/[0.04] pl-9 pr-4 py-2 text-xs text-white placeholder-white/30 outline-none transition focus:border-cyanGlow/60 focus:ring-1 focus:ring-cyanGlow/60"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 hover:text-white text-xs"
                  >
                    Clear
                  </button>
                )}
              </div>

              {/* Category Pills */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setSelectedCategory(cat)}
                    className={`shrink-0 rounded-full px-3 py-1.5 text-[11px] font-medium transition ${
                      selectedCategory === cat
                        ? "bg-white/20 text-white border border-white/30"
                        : "bg-white/5 text-white/60 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Elements Grid / List */}
            <div className="flex-1 overflow-y-auto pr-1 space-y-2.5">
              {filteredElements.length === 0 ? (
                <div className="text-center py-16 text-white/40 text-xs">
                  No elements matched &quot;{searchQuery}&quot;. Try a different term.
                </div>
              ) : (
                filteredElements.map((el: ThemeColorItem) => {
                  const currentValue = currentTheme[el.id] || el.defaultValue;
                  const isModified = currentValue !== el.defaultValue;
                  const hexValue = getHexForPicker(currentValue, el.defaultValue);

                  return (
                    <div
                      key={el.id}
                      className={`flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3.5 rounded-2xl border transition ${
                        isModified
                          ? "border-cyanGlow/40 bg-cyanGlow/[0.04]"
                          : "border-white/10 bg-white/[0.02] hover:bg-white/[0.04]"
                      }`}
                    >
                      {/* Left info */}
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="font-semibold text-xs text-white">
                            {el.label}
                          </span>
                          <span className="rounded-md bg-white/10 px-1.5 py-0.5 text-[10px] font-mono text-cyan-300">
                            {el.id}
                          </span>
                          <span className="rounded-md border border-white/10 bg-white/5 px-1.5 py-0.5 text-[10px] text-white/50">
                            {el.category}
                          </span>
                        </div>
                        <p className="mt-0.5 text-[11px] text-white/50 leading-relaxed">
                          {el.description}
                        </p>
                      </div>

                      {/* Right controls */}
                      <div className="flex items-center gap-2 shrink-0 self-end sm:self-center">
                        {/* Native color picker swatch */}
                        <div className="relative group/swatch">
                          <label
                            htmlFor={`color-picker-${el.id}`}
                            className="relative block h-9 w-9 cursor-pointer rounded-xl border border-white/20 shadow-md transition hover:scale-105"
                            style={{ backgroundColor: hexValue }}
                            title="Click to open color picker"
                          >
                            <span className="sr-only">Pick color</span>
                          </label>
                          <input
                            id={`color-picker-${el.id}`}
                            type="color"
                            value={hexValue}
                            onChange={(e) => handleColorChange(el.id, e.target.value)}
                            className="absolute inset-0 opacity-0 cursor-pointer pointer-events-auto"
                          />
                        </div>

                        {/* Hex/RGBA text input */}
                        <div className="w-36 sm:w-44">
                          <input
                            type="text"
                            value={currentValue}
                            onChange={(e) => handleColorChange(el.id, e.target.value)}
                            placeholder={el.defaultValue}
                            className="w-full rounded-xl border border-white/15 bg-white/[0.05] px-3 py-1.5 font-mono text-xs text-white outline-none transition focus:border-cyanGlow focus:ring-1 focus:ring-cyanGlow"
                          />
                        </div>

                        {/* Single element reset button */}
                        {isModified && (
                          <button
                            type="button"
                            onClick={() => handleColorChange(el.id, el.defaultValue)}
                            className="rounded-lg p-1.5 text-white/40 hover:text-amber-300 hover:bg-amber-400/10 transition"
                            title="Revert to original default"
                          >
                            <RotateCcw className="h-3.5 w-3.5" />
                          </button>
                        )}
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        )}

        {/* Tab 2: JSON Upload & Bulk Edit */}
        {activeTab === "json" && (
          <div className="flex-1 flex flex-col overflow-y-auto p-4 sm:p-6 space-y-4">
            {/* Header / Info box */}
            <div className="rounded-2xl border border-cyanGlow/25 bg-cyanGlow/[0.05] p-4 text-xs text-cyan-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="space-y-1">
                <p className="font-semibold text-sm text-cyan-300 flex items-center gap-1.5">
                  <Sparkles className="h-4 w-4" /> Bulk Theme Upload & Modification
                </p>
                <p className="text-white/70">
                  You can upload a <code>.json</code> file or paste JSON below. Update{" "}
                  <strong>all elements at once</strong> or{" "}
                  <strong>multiple elements at once</strong> (partial JSON updates are supported).
                </p>
              </div>

              {/* Upload File Button */}
              <div className="shrink-0 flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="flex items-center gap-1.5 rounded-full border border-cyanGlow/40 bg-cyanGlow/15 px-4 py-2 text-xs font-semibold text-cyan-200 transition hover:bg-cyanGlow/25 shadow-glow"
                >
                  <Upload className="h-3.5 w-3.5" />
                  <span>Upload .json file</span>
                </button>
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileUpload}
                  accept=".json,application/json"
                  className="hidden"
                />
              </div>
            </div>

            {/* Status Alert Banner */}
            {jsonStatus.type && (
              <div
                className={`flex items-center gap-2.5 rounded-xl px-4 py-3 text-xs ${
                  jsonStatus.type === "success"
                    ? "border border-emerald-500/30 bg-emerald-500/10 text-emerald-200"
                    : "border border-red-500/30 bg-red-500/10 text-red-200"
                }`}
              >
                {jsonStatus.type === "success" ? (
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                ) : (
                  <AlertCircle className="h-4 w-4 text-red-400 shrink-0" />
                )}
                <span>{jsonStatus.message}</span>
              </div>
            )}

            {/* Quick Actions Row */}
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setJsonText(SAMPLE_JSON_TEMPLATE);
                    setJsonStatus({
                      type: "info",
                      message: "Loaded sample JSON template. Click 'Apply JSON Changes' to apply.",
                    });
                  }}
                  className="rounded-lg border border-white/15 bg-white/5 px-3 py-1.5 text-xs text-white/80 hover:bg-white/10 hover:text-white transition"
                >
                  Load Example Template
                </button>

                <button
                  type="button"
                  onClick={() => setJsonText(JSON.stringify(currentTheme, null, 2))}
                  className="rounded-lg border border-white/15 bg-white/5 px-3 py-1.5 text-xs text-white/80 hover:bg-white/10 hover:text-white transition"
                >
                  Load All Current Colors
                </button>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleCopyCurrentJson}
                  className="flex items-center gap-1.5 rounded-lg border border-white/15 bg-white/5 px-3 py-1.5 text-xs text-white/80 hover:bg-white/10 hover:text-white transition"
                  title="Copy current active theme JSON to clipboard"
                >
                  {copied ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-emerald-400" />
                      <span className="text-emerald-300">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" />
                      <span>Copy Current JSON</span>
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={handleDownloadJson}
                  className="flex items-center gap-1.5 rounded-lg border border-white/15 bg-white/5 px-3 py-1.5 text-xs text-white/80 hover:bg-white/10 hover:text-white transition"
                  title="Download .json file"
                >
                  <Download className="h-3.5 w-3.5" />
                  <span>Download JSON</span>
                </button>
              </div>
            </div>

            {/* Textarea Editor */}
            <div className="flex-1 flex flex-col min-h-[220px]">
              <label
                htmlFor="jsonThemeInput"
                className="mb-1 text-xs font-mono uppercase tracking-wider text-white/60"
              >
                JSON Theme Payload (Paste or Edit)
              </label>
              <textarea
                id="jsonThemeInput"
                rows={12}
                value={jsonText}
                onChange={(e) => {
                  setJsonText(e.target.value);
                  setJsonStatus({ type: null, message: "" });
                }}
                placeholder={`Example JSON Format:\n{\n  "bodyBg": "#0d1117",\n  "textPrimary": "#f0f6fc",\n  "cyanGlow": "#00f0ff",\n  "cardBoxBg": "rgba(22, 27, 34, 0.8)",\n  "buttonPrimaryBg": "#00f0ff",\n  "buttonPrimaryText": "#0d1117"\n}`}
                className="w-full flex-1 rounded-2xl border border-white/15 bg-black/60 p-4 font-mono text-xs text-cyan-100 placeholder-white/20 outline-none transition focus:border-cyanGlow focus:ring-1 focus:ring-cyanGlow"
                spellCheck={false}
              />
            </div>

            {/* Submit Bar */}
            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={() => setJsonText("")}
                className="rounded-full px-4 py-2 text-xs text-white/60 hover:text-white transition"
              >
                Clear Text
              </button>
              <button
                type="button"
                onClick={handleApplyJsonText}
                className="flex items-center gap-2 rounded-full border border-cyanGlow/40 bg-cyanGlow/20 px-6 py-2.5 text-xs font-bold text-cyan-100 shadow-glow transition hover:bg-cyanGlow/30"
              >
                <Check className="h-4 w-4" />
                <span>Apply JSON Changes</span>
              </button>
            </div>
          </div>
        )}

        {/* Modal Bottom Status Bar */}
        <div className="flex items-center justify-between px-6 py-3 border-t border-white/10 bg-white/[0.02] text-xs text-white/50">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            <span className="text-[11px] font-mono text-emerald-400">
              Neon DB Cloud Synced
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-[11px] font-mono">
              {Object.keys(themeColors || {}).length} element(s) customized
            </span>
            <button
              type="button"
              onClick={() => setIsColorModalOpen(false)}
              className="rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs text-white hover:bg-white/20 transition"
            >
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
