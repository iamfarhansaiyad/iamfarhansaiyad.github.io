// ─────────────────────────────────────────────────────────────────────────────
// SOCIAL MEDIA LINKS
// Edit this file to add, remove, or update your social media links.
// These links render automatically with matching Lucide icons in the hero section.
// ─────────────────────────────────────────────────────────────────────────────

export type SocialLink = {
  /** Name of the platform */
  platform: string;
  /** Full URL of your profile (or mailto: link for email) */
  href: string;
  /** Lucide icon component name to render. Available: "Github", "Linkedin", "Twitter", "Mail", "Globe", "Instagram", "Facebook", "AtSign" */
  iconName: "Github" | "Linkedin" | "Twitter" | "Mail" | "Globe" | "Instagram" | "Facebook" | "AtSign";
};

export const socials: SocialLink[] = [
  {
    platform: "LinkedIn",
    href: "https://linkedin.com/in/iamfarhansaiyad",
    iconName: "Linkedin",
  },
  {
    platform: "GitHub",
    href: "https://github.com/iamfarhansaiyad", // Replace with your GitHub link
    iconName: "Github",
  },
  {
    platform: "Twitter / X",
    href: "https://x.com/iamfarhansaiyad", // Replace with your Twitter / X link
    iconName: "Twitter",
  },
  {
    platform: "Instagram",
    href: "https://instagram.com/iamfarhansaiyad", // Replace with your Instagram link
    iconName: "Instagram",
  },
  {
    platform: "Threads",
    href: "https://threads.net/@iamfarhansaiyad", // Replace with your Threads link
    iconName: "AtSign",
  },
  {
    platform: "Facebook",
    href: "https://facebook.com/iamfarhansaiyad", // Replace with your Facebook link
    iconName: "Facebook",
  },
  {
    platform: "Email",
    href: "mailto:fazusai@ymail.com",
    iconName: "Mail",
  },
];
