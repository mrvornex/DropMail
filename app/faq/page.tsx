"use client";
import { useState } from "react";

const faqs = [
  { q: "What is InstaInbox?", a: "InstaInbox is a free temporary email service. Visit the site and instantly get a random disposable email address. Use it anywhere, and after 1 hour everything is automatically deleted." },
  { q: "Do I need to sign up?", a: "No. Zero registration required. No signup form, no password, no personal information. Just open the site and your inbox is immediately ready." },
  { q: "How long are emails kept?", a: "All emails and addresses are stored for 1 hour. After that, everything is permanently deleted from our servers with no recovery possible." },
  { q: "Can I send emails from InstaInbox?", a: "No. InstaInbox is receive-only. Sending from disposable addresses is not supported — this keeps the service simple and prevents misuse." },
  { q: "Can I choose my own username?", a: "Yes! Type your preferred username in the custom field and click Create. You can also switch between available domains." },
  { q: "Is InstaInbox really 100% free?", a: "Yes, completely free. No hidden charges, no premium tiers, no credit card required. All features available at zero cost." },
  { q: "Why do some sites block my temp email?", a: "Some platforms maintain blacklists of known disposable email domains. InstaInbox uses Mail.tm which regularly rotates fresh domains to minimize this issue." },
  { q: "Is my data safe?", a: "We collect no personal data. No IP logging, no activity tracking, no data sharing. Emails are stored temporarily to deliver them, then deleted automatically." },
];

export default function FAQPage() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-4 py-1.5 rounded-full mb-4 uppercase tracking-wider">FAQ</span>
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Common Questions</h1>
        <p className="text-slate-500 text-lg">Everything you need to know about InstaInbox.</p>
      </div>
      <div className="space-y-3">
        {faqs.map((faq, i) => (
          <div key={i} className="bg-white border border-slate-200 rounded-xl overflow-hidden">
            <button className="w-full flex items-center justify-between px-6 py-4 text-left text-slate-900 font-medium hover:text-blue-600 transition-colors"
              onClick={() => setOpen(open === i ? null : i)}>
              <span>{faq.q}</span>
              <svg className={`w-5 h-5 text-slate-400 flex-shrink-0 ml-4 transition-transform ${open === i ? "rotate-180" : ""}`}
                fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {open === i && (
              <div className="px-6 pb-5 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-3 animate-fade-in">
                {faq.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}