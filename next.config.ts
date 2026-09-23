import type { NextConfig } from "next";

// Every URL the old Wix site (and the pre-Wix site before it) served,
// pointed at its home on this site so old links and search results still land.
const oldPages: [string, string][] = [
  ["/weekly-schedule", "/visit"],
  ["/upcoming-events", "/visit"],
  ["/what-we-believe", "/beliefs"],
  ["/the-good-news", "/gospel"],
  ["/staff", "/legacy"],
  ["/40th-anniversary", "/legacy"],
  ["/home", "/"],
  ["/index.html", "/"],
  ["/sunday-school", "/ministries#sunday-school"],
  ["/kids-club", "/ministries#sunday-school"],
  ["/bus-ministry", "/ministries#bus-ministry"],
  ["/bus-ministry-photos", "/ministries#bus-ministry"],
  ["/youth-group", "/ministries#youth-group"],
  ["/teens", "/ministries#youth-group"],
  ["/ladies-missionary-society", "/ministries#ladies-missionary-society"],
  ["/reformers-unanamous", "/ministries#reformers-unanimous"],
  ["/reformers-unanimous", "/ministries#reformers-unanimous"],
  ["/choir-music", "/ministries#media"],
  ["/media", "/ministries#media"],
  ["/church-activities", "/ministries"],
  ["/gallery", "/ministries"],
];

const nextConfig: NextConfig = {
  outputFileTracingRoot: process.cwd(),
  async redirects() {
    return [
      ...oldPages.map(([source, destination]) => ({ source, destination, permanent: true })),
      // Pre-Wix numbered pages (/2.html, /7101.html, /57866/index.html)
      { source: "/:page(\\d+).html", destination: "/", permanent: true },
      { source: "/:dir(\\d+)/index.html", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
