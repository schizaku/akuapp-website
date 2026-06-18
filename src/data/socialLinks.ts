export type SocialLink = {
  label: "YouTube" | "TikTok" | "Instagram";
  href: string;
};

export type StoreProfileLink = {
  label: "App Store" | "Google Play";
  href: string;
};

export const socialLinks: SocialLink[] = [
  { label: "YouTube", href: "#" },
  { label: "TikTok", href: "#" },
  { label: "Instagram", href: "#" }
];

export const storeProfileLinks: StoreProfileLink[] = [
  {
    label: "App Store",
    href: "https://apps.apple.com/tr/developer/aykut-yilmaz/id1867122375"
  },
  {
    label: "Google Play",
    href: "https://play.google.com/store/apps/developer?id=Aku+APPs&hl=tr"
  }
];
