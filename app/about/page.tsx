import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — DropMail",
  description: "Learn about DropMail — our mission to protect online privacy.",
};

const team = [
  { name: "Alex Carter", role: "Founder & CEO", initials: "AC", color: "bg-blue-100 text-blue-700" },
  { name: "Sara Khan", role: "Lead Developer", initials: "SK", color: "bg-purple-100 text-purple-700" },
  { name: "Mike Torres", role: "Privacy & Security", initials: "MT", color: "bg-green-100 text-green-700" },
  { name: "Lena Zhang", role: "UI/UX Designer", initials: "LZ", color: "bg-pink-100 text-pink-700" },
];

export default function AboutPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-16">
        <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-4 py-1.5 rounded-full mb-4 uppercase tracking-wider">About Us</span>
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Built for Privacy.<br />Designed for Everyone.</h1>
        <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
          DropMail was created with a single belief: your email address is personal data, and you shouldn't have to share it just to access a service.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16 items-center">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Every day, millions of people are forced to hand over their real email address to websites they barely trust — just to access a free trial, download a PDF, or read an article.
          </p>
          <p className="text-slate-600 leading-relaxed mb-4">
            That's why we built DropMail. We believe privacy should be the default, not a premium feature. Our disposable email service is completely free, requires zero registration, and leaves no trace.
          </p>
          <p className="text-slate-600 leading-relaxed">
            Since launching, we've helped over 850,000 users protect their inboxes and stay in control of their digital identities.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {[
            { value: "850K+", label: "Users Protected" },
            { value: "2M+", label: "Emails Processed" },
            { value: "48h", label: "Auto Delete" },
            { value: "100%", label: "Free Forever" },
          ].map((s) => (
            <div key={s.label} className="bg-white border border-slate-200 rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold text-blue-600 mb-1">{s.value}</div>
              <div className="text-sm text-slate-500">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-slate-900 rounded-2xl p-10 mb-16 text-white">
        <h2 className="text-2xl font-bold mb-8 text-center">What We Stand For</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            { icon: "🔒", title: "Privacy by Default", desc: "We collect zero personal data. No logs, no tracking, no analytics on your activity." },
            { icon: "🆓", title: "Free Forever", desc: "DropMail will always be free. Privacy protection shouldn't be a paid feature." },
            { icon: "⚡", title: "No Friction", desc: "We obsess over simplicity. If it takes more than one click, we've failed." },
          ].map((v) => (
            <div key={v.title} className="text-center">
              <div className="text-3xl mb-3">{v.icon}</div>
              <h3 className="font-semibold text-white mb-2">{v.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center mb-10">
        <h2 className="text-2xl font-bold text-slate-900 mb-3">Meet the Team</h2>
        <p className="text-slate-500">A small, passionate team dedicated to online privacy.</p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
        {team.map((member) => (
          <div key={member.name} className="bg-white border border-slate-200 rounded-2xl p-6 text-center hover:shadow-md transition-shadow">
            <div className={`w-14 h-14 rounded-full ${member.color} flex items-center justify-center font-bold text-lg mx-auto mb-3`}>
              {member.initials}
            </div>
            <div className="font-semibold text-slate-900 text-sm">{member.name}</div>
            <div className="text-xs text-slate-500 mt-0.5">{member.role}</div>
          </div>
        ))}
      </div>
    </div>
  );
}