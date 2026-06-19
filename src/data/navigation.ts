export interface NavLink {
  label: string;
  href: string;
  external?: boolean;
}

export const mainNavLinks: NavLink[] = [
  { label: "Features", href: "#features" },
  { label: "Workflow", href: "#workflow" },
  { label: "Showcase", href: "#showcase" },
  { label: "Roadmap", href: "#roadmap" },
];

export const footerLinks: { group: string; links: NavLink[] }[] = [
  {
    group: "Product",
    links: [
      { label: "Features", href: "#features" },
      { label: "Demo", href: "#demo" },
      { label: "Roadmap", href: "#roadmap" },
      { label: "Download", href: "#download" },
    ],
  },
  {
    group: "Resources",
    links: [
      { label: "GitHub", href: "https://github.com", external: true },
      { label: "Contact", href: "#contact" },
      { label: "Research Disclaimer", href: "#safety" },
    ],
  },
  {
    group: "Legal",
    links: [
      { label: "Privacy", href: "#" },
      { label: "Terms", href: "#" },
    ],
  },
];
