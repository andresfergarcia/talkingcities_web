"use client";

import { useState } from "react";
import { Send, CheckCircle, AlertCircle, User, Mail, MessageSquare, FileText } from "lucide-react";
import { useTranslations } from "@/lib/i18n-context";

export default function ContactForm() {
  const t = useTranslations("contact");
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const key = e?.target?.name ?? '';
    const val = e?.target?.value ?? '';
    setForm((prev) => ({ ...(prev ?? {}), [key]: val }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e?.preventDefault?.();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res?.json?.().catch(() => ({}));
      if (res?.ok) {
        setStatus("success");
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
        setErrorMsg(data?.error ?? t('error'));
      }
    } catch {
      setStatus("error");
      setErrorMsg(t('error'));
    }
  };

  if (status === "success") {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
        <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-3" />
        <p className="font-heading text-lg font-bold text-green-800 mb-2">{t('success')}</p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-4 px-5 py-2 bg-primary text-white rounded-lg text-sm hover:bg-primary-dark transition-colors"
        >
          {t('sendMessage')}
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="relative">
          <User className="absolute left-3 top-3.5 w-4 h-4 text-text-light" />
          <input
            name="name"
            value={form?.name ?? ''}
            onChange={handleChange}
            placeholder={t('name')}
            required
            className="w-full pl-10 pr-4 py-3 rounded-lg bg-white border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
          />
        </div>
        <div className="relative">
          <Mail className="absolute left-3 top-3.5 w-4 h-4 text-text-light" />
          <input
            name="email"
            type="email"
            value={form?.email ?? ''}
            onChange={handleChange}
            placeholder={t('email')}
            required
            className="w-full pl-10 pr-4 py-3 rounded-lg bg-white border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
          />
        </div>
      </div>
      <div className="relative">
        <FileText className="absolute left-3 top-3.5 w-4 h-4 text-text-light" />
        <input
          name="subject"
          value={form?.subject ?? ''}
          onChange={handleChange}
          placeholder={t('subject')}
          className="w-full pl-10 pr-4 py-3 rounded-lg bg-white border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
        />
      </div>
      <div className="relative">
        <MessageSquare className="absolute left-3 top-3.5 w-4 h-4 text-text-light" />
        <textarea
          name="message"
          value={form?.message ?? ''}
          onChange={handleChange}
          placeholder={t('message')}
          required
          rows={5}
          className="w-full pl-10 pr-4 py-3 rounded-lg bg-white border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all resize-none"
        />
      </div>

      {status === "error" && (
        <div className="flex items-center gap-2 text-red-500 text-sm">
          <AlertCircle className="w-4 h-4" /> {errorMsg}
        </div>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full sm:w-auto px-8 py-3 bg-primary hover:bg-primary-dark text-white font-semibold rounded-lg transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 disabled:opacity-50"
      >
        <Send className="w-4 h-4" />
        {status === "loading" ? t('sending') : t('send')}
      </button>
    </form>
  );
}
