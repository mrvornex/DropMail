const features = [
  { icon: "⏱", title: "Auto Expiration", desc: "Every email and address automatically expires and is permanently deleted after 1 hour. No traces left on our servers.", tag: "Privacy" },
  { icon: "⚡", title: "Instant Setup", desc: "Your disposable inbox is ready the moment you land on the page. No registration, no password, no waiting.", tag: "Convenience" },
  { icon: "🔒", title: "Full Anonymity", desc: "Your real email address is never exposed. Use InstaInbox whenever you want to avoid marketing lists.", tag: "Security" },
  { icon: "📬", title: "Unlimited Messages", desc: "No cap on the number of emails you can receive. Perfect for bulk testing or multiple signups.", tag: "Unlimited" },
  { icon: "🌐", title: "Multiple Domains", desc: "Choose from fresh domains provided by Mail.tm — regularly updated so they stay unblocked.", tag: "Flexibility" },
  { icon: "✏️", title: "Custom Username", desc: "Type your own preferred username and click Create — you're in control of your disposable identity.", tag: "Customization" },
  { icon: "🚫", title: "Zero Ads", desc: "No banner ads, no popups, no tracking scripts. InstaInbox stays clean so you can focus on your inbox.", tag: "Clean UX" },
  { icon: "💸", title: "100% Free", desc: "Every single feature is available at zero cost. No freemium tier, no credit card. Free forever.", tag: "Free" },
  { icon: "📱", title: "Mobile Friendly", desc: "InstaInbox is fully responsive and works perfectly on smartphones, tablets, and desktops.", tag: "Responsive" },
];

const tagColors: Record<string, string> = {
  Privacy: "bg-purple-100 text-purple-700",
  Convenience: "bg-blue-100 text-blue-700",
  Security: "bg-green-100 text-green-700",
  Unlimited: "bg-orange-100 text-orange-700",
  Flexibility: "bg-cyan-100 text-cyan-700",
  Customization: "bg-pink-100 text-pink-700",
  "Clean UX": "bg-slate-100 text-slate-700",
  Free: "bg-emerald-100 text-emerald-700",
  Responsive: "bg-indigo-100 text-indigo-700",
};

export default function FeaturesPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-14">
        <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-4 py-1.5 rounded-full mb-4 uppercase tracking-wider">Features</span>
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Everything You Need,<br />Nothing You Don't</h1>
        <p className="text-lg text-slate-500 max-w-xl mx-auto">InstaInbox is designed to be simple, fast, and private.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((f) => (
          <div key={f.title} className="bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-md hover:border-blue-200 transition-all">
            <div className="text-3xl mb-4">{f.icon}</div>
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-semibold text-slate-900 text-base">{f.title}</h3>
              <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${tagColors[f.tag] ?? "bg-slate-100 text-slate-600"}`}>{f.tag}</span>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 bg-blue-600 rounded-2xl p-10 text-center text-white">
        <h2 className="text-2xl font-bold mb-3">Ready to protect your inbox?</h2>
        <p className="text-blue-100 mb-6">Get your free disposable email address in seconds.</p>
        <a href="/" className="inline-block bg-white text-blue-600 font-semibold px-8 py-3 rounded-xl hover:bg-blue-50 transition-colors">
          Get Free Email Now
        </a>
      </div>
    </div>
  );
}