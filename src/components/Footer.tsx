import Link from "next/link";
import { primaryNav, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-shell">
        <div>
          <p className="footer-kicker">Willis Baptist Church</p>
          <h2>Shining the light of the Gospel in Willis, Michigan.</h2>
          <p>
            We are a local Baptist church committed to the Word of God, the gospel of Jesus Christ,
            and faithful ministry to families in our community.
          </p>
        </div>

        <div className="footer-column">
          <h3>Explore</h3>
          {primaryNav.map(([label, href]) => (
            <Link href={href} key={href}>
              {label}
            </Link>
          ))}
        </div>

        <div className="footer-column">
          <h3>Reach Out</h3>
          <a href="tel:7344610352">{site.phone}</a>
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <a href={site.mapUrl} target="_blank" rel="noreferrer">
            {site.addressLine1}
            <br />
            {site.addressLine2}
          </a>
        </div>
      </div>

      <div className="footer-bar">
        <span>{site.mailingAddress}</span>
        <span>All services and ministries are centered on Christ and His Word.</span>
      </div>
    </footer>
  );
}
