"use client";

import { useState } from "react";
import { useTranslations } from "@/lib/i18n-context";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

interface NewsletterFormProps {
  locale?: string;
}

export default function NewsletterForm({ locale }: NewsletterFormProps) {
  const t = useTranslations("footer");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e?.preventDefault?.();
    if (!email) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res?.json?.().catch(() => ({}));
      if (res?.ok) {
        setStatus("success");
        setMessage(t("subscribeSuccess"));
        setEmail("");
      } else {
        setStatus("error");
        setMessage(data?.error ?? "Something went wrong.");
      }
    } catch {
      setStatus("error");
      setMessage("Network error. Please try again.");
    }
  };

  if (status === "success") {
    return (
      <div className="flex items-center justify-center gap-2 text-green-300">
        <CheckCircle className="w-5 h-5" />
        <span className="text-sm">{message}</span>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e?.target?.value ?? "")}
        placeholder={t("newsletterPlaceholder")}
        required
        className="flex-1 px-4 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/40 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50"
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="px-5 py-2.5 bg-gold hover:bg-gold/80 text-primary-dark font-semibold rounded-lg text-sm transition-colors flex items-center gap-2 disabled:opacity-50"
      >
        <Send className="w-4 h-4" />
        {status === "loading" ? "..." : t("subscribe")}
      </button>
      {status === "error" && (
        <div className="absolute mt-12 flex items-center gap-1 text-red-300 text-xs">
          <AlertCircle className="w-3 h-3" /> {message}
        </div>
      )}
    </form>
  );
}
