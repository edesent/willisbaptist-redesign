"use client";

import { Menu, Phone, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { primaryNav, site } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <header className="site-header">
      <div className="top-rail">
        <p>{site.tagline}</p>
        <div className="top-rail-links">
          <a href={site.mapUrl} target="_blank" rel="noreferrer">
            {site.addressLine1}
          </a>
          <a href="tel:7344610352">
            <Phone size={14} />
            {site.phone}
          </a>
        </div>
      </div>

      <nav className="nav-shell" aria-label="Primary">
        <Link className="brand" href="/" onClick={close} aria-label={`${site.name} home`}>
          <Image
            className="brand-logo"
            src="/willis/willis-logo2.png"
            alt={site.name}
            width={856}
            height={337}
            priority
            sizes="220px"
          />
        </Link>

        <button
          className="nav-toggle"
          type="button"
          aria-controls="mobile-menu"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
          <span className="sr-only">Toggle navigation</span>
        </button>

        <div className="desktop-nav">
          {primaryNav.map(([label, href]) => (
            <Link className={pathname === href ? "active" : ""} href={href} key={href}>
              {label}
            </Link>
          ))}
          <Link className="button button-primary" href="/visit">
            Plan a Visit
          </Link>
        </div>
      </nav>

      <div className={`mobile-nav ${open ? "open" : ""}`} id="mobile-menu">
        {primaryNav.map(([label, href]) => (
          <Link href={href} key={href} onClick={close}>
            {label}
          </Link>
        ))}
        <a href={site.facebook} target="_blank" rel="noreferrer" onClick={close}>
          Facebook
        </a>
      </div>
    </header>
  );
}
