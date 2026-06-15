// ─────────────────────────────────────────────────────────────────────────────
// PORTFOLIO PROJECTS
// Edit this file to add, remove, or update projects shown on the homepage.
// Each entry renders as a card in the "Selected Work" section.
// ─────────────────────────────────────────────────────────────────────────────

export type Project = {
  /** Project title shown on the card */
  name: string;
  /** Short category pills (keep 2–4, uppercase looks best) */
  tags: string[];
  /** 1–2 sentence description */
  desc: string;
  /** Where it shipped — e.g. "Both", "App Store", "Google Play", etc. */
  store: "App Store" | "Google Play" | "Both" | "Enterprise" | "Web";
  /** Primary link to case study, live site, or default fallback. Use "#" if none. */
  href?: string;
  /** iOS App Store Link (Optional) */
  appStoreUrl?: string;
  /** Android Google Play Store Link (Optional) */
  playStoreUrl?: string;
  /** Tailwind gradient classes for the card cover (e.g. "from-x via-y to-z") */
  gradient: string;
  /** 2–3 letter glyph shown large on the cover */
  glyph: string;
};

export const projects: Project[] = [
  {
    name: "EasySpeak — AI Teleprompter",
    tags: ["Entertainment", "AI", "Productivity"],
    desc: "AI-powered teleprompter with script generation, subscription monetization, and a custom scroll engine. 50K+ downloads on the stores.",
    store: "Both",
    href: "#",
    appStoreUrl: "#", // Add your App Store link here
    playStoreUrl: "#", // Add your Google Play link here
    gradient: "from-orange-500 via-rose-500 to-amber-400",
    glyph: "ES",
  },
  {
    name: "vDoctor — Telemedicine",
    tags: ["Health", "Video", "WebRTC"],
    desc: "Secure video consultations on WebRTC + Jitsi Meet with appointment scheduling, digital prescriptions, and hardened patient record handling.",
    store: "Both",
    href: "#",
    appStoreUrl: "#", // Add your App Store link here
    playStoreUrl: "#", // Add your Google Play link here
    gradient: "from-cyan-400 via-sky-500 to-indigo-600",
    glyph: "vD",
  },
  {
    name: "Divya Bhaskar Sales",
    tags: ["Enterprise", "Sales", "Analytics"],
    desc: "DCR workflow, EOD/EOM incentive calculators, and market-share reporting tuned for very large sales datasets.",
    store: "Enterprise",
    href: "#",
    appStoreUrl: "",
    playStoreUrl: "",
    gradient: "from-violet-500 via-fuchsia-500 to-pink-500",
    glyph: "DB",
  },
  {
    name: "Divya Bhaskar Matrix",
    tags: ["News", "CMS", "Media"],
    desc: "Reporter app for uploading news, photos and media with real-time newsroom communication across 4 languages & 62 editions.",
    store: "Both",
    href: "#",
    appStoreUrl: "#", // Add your App Store link here
    playStoreUrl: "#", // Add your Google Play link here
    gradient: "from-emerald-400 via-teal-500 to-cyan-600",
    glyph: "Mx",
  },
  {
    name: "Poros HR",
    tags: ["SaaS", "GPS", "iBeacon"],
    desc: "GPS + iBeacon attendance with background and terminated-state location tracking, real-time dashboards, Firebase-backed sync.",
    store: "Enterprise",
    href: "#",
    appStoreUrl: "",
    playStoreUrl: "",
    gradient: "from-amber-300 via-orange-500 to-red-600",
    glyph: "Po",
  },
  {
    name: "Wellnessta",
    tags: ["Lifestyle", "Marketplace", "Payments"],
    desc: "Salon & spa discovery, bookings, coupons, gift cards and memberships on a scalable API architecture with payment integration.",
    store: "Both",
    href: "#",
    appStoreUrl: "#", // Add your App Store link here
    playStoreUrl: "#", // Add your Google Play link here
    gradient: "from-pink-400 via-rose-500 to-purple-600",
    glyph: "Wn",
  },
  {
    name: "Mask — Digital Wellness",
    tags: ["SwiftUI", "Security", "IAP"],
    desc: "Secure app locking with timed access controls, Face ID / Touch ID auth, IAP premium tier, and Combine-powered state.",
    store: "App Store",
    href: "#",
    appStoreUrl: "#", // Add your App Store link here
    playStoreUrl: "",
    gradient: "from-slate-300 via-zinc-400 to-slate-700",
    glyph: "Mk",
  },
  {
    name: "Property Management",
    tags: ["Real Estate", "Flutter", "Finance"],
    desc: "Tenant tracking, lease management, automated payment reminders and monthly/yearly income dashboards for landlords.",
    store: "Both",
    href: "#",
    appStoreUrl: "#", // Add your App Store link here
    playStoreUrl: "#", // Add your Google Play link here
    gradient: "from-lime-400 via-emerald-500 to-teal-700",
    glyph: "Pm",
  },
];