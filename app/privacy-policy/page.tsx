const sections = [
  {
    title: "1. Information We Collect",
    content: "InstaInbox is designed to collect as little information as possible. We do not require any personal information to use our service. No name, no real email address, no phone number — nothing.",
  },
  {
    title: "2. Email Content",
    content: "Emails received by your temporary address are stored temporarily on our servers solely for displaying them to you. All email content is automatically and permanently deleted after 1 hour. We do not read, analyze, share, or sell email content.",
  },
  {
    title: "3. Cookies & Tracking",
    content: "We use minimal, essential cookies only for session management. We do not use advertising cookies, tracking pixels, or third-party analytics services.",
  },
  {
    title: "4. Server Logs",
    content: "Standard access logs are retained for a maximum of 7 days for security purposes, then automatically purged. We do not use these logs to profile or identify users.",
  },
  {
    title: "5. Third Parties",
    content: "We do not sell, trade, or transfer any data to third parties. We do not use third-party advertising networks.",
  },
  {
    title: "6. Contact",
    content: "If you have any questions about this privacy policy, please contact us at privacy@instainbox.io. We respond within 48 hours.",
  },
];

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-10">
        <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-4 py-1.5 rounded-full mb-4 uppercase tracking-wider">Legal</span>
        <h1 className="text-4xl font-bold text-slate-900 mb-3">Privacy Policy</h1>
        {/* <p className="text-slate-500">Last updated: January 1, 2025</p> */}
      </div>

      <div className="bg-green-50 border border-green-200 rounded-xl px-6 py-5 mb-10">
        <div className="flex gap-3 items-start">
          <span className="text-xl">✅</span>
          <div>
            <div className="font-semibold text-green-800 mb-1">The Short Version</div>
            <p className="text-green-700 text-sm leading-relaxed">
              We collect no personal data. Emails auto-delete after 1 hour. We don't track you,
              sell your data, or show ads. InstaInbox is built on the principle that privacy should be the default.
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-8">
        {sections.map((s) => (
          <div key={s.title}>
            <h2 className="text-lg font-semibold text-slate-900 mb-2">{s.title}</h2>
            <p className="text-slate-600 text-sm leading-relaxed">{s.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}