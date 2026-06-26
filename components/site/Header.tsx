"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo, IconButton } from "../ds";
import { primaryNav } from "../../content/navigation";
import { brand } from "../../content/brand";
import { ArrowRight, MapPin, List, X } from "./icons";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(href + "/");
}

function NavLink({ href, label, active }: { href: string; label: string; active: boolean }) {
  return (
    <Link
      href={href}
      style={{
        position: "relative",
        fontFamily: "var(--font-mono)",
        fontSize: "var(--text-2xs)",
        letterSpacing: "0.16em",
        textTransform: "uppercase",
        padding: "0.4rem 0",
        color: active ? "var(--text-primary)" : "var(--text-secondary)",
        transition: "color var(--duration-fast) var(--ease-standard)",
      }}
      className="nav-link"
      data-active={active ? "true" : "false"}
    >
      {label}
      <span
        aria-hidden="true"
        className="nav-link__underline"
        style={{
          position: "absolute",
          left: 0,
          bottom: "-2px",
          height: "1px",
          width: active ? "100%" : "0%",
          background: "var(--accent)",
          transition: "width var(--duration-base) var(--ease-out)",
        }}
      />
    </Link>
  );
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu on route change.
  React.useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header style={{ position: "sticky", top: 0, zIndex: 100 }}>
      {/* Utility strip */}
      <div style={{ background: "var(--tobacco-800)", color: "var(--text-on-dark-muted)" }}>
        <div
          style={{
            maxWidth: "var(--container-xl)",
            margin: "0 auto",
            padding: "0 var(--gutter)",
            height: "34px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontFamily: "var(--font-mono)",
            fontSize: "10.5px",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
          }}
          className="util-contact"
        >
          <span style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
            <MapPin size={13} style={{ color: "var(--brass-300)" }} /> Ahmedabad · Gujarat
          </span>
          <span style={{ display: "inline-flex", alignItems: "center", gap: "1.4rem" }}>
            <a href={`tel:${brand.phoneHref}`} style={{ color: "inherit" }}>
              {brand.phone}
            </a>
            <a href={`mailto:${brand.email}`} style={{ color: "var(--brass-300)" }}>
              {brand.email}
            </a>
          </span>
        </div>
      </div>

      {/* Main bar */}
      <div
        style={{
          background: "rgba(244,239,228,0.92)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          borderBottom: "1px solid var(--border-subtle)",
          boxShadow: scrolled ? "var(--shadow-sm)" : "none",
          transition: "box-shadow var(--duration-base) var(--ease-standard)",
        }}
      >
        <div
          style={{
            maxWidth: "var(--container-xl)",
            margin: "0 auto",
            padding: "0 var(--gutter)",
            height: scrolled ? "64px" : "74px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1.5rem",
            transition: "height var(--duration-base) var(--ease-standard)",
          }}
        >
          <Link href="/" aria-label="SKG — home" style={{ display: "inline-flex" }}>
            <Logo variant="wordmark" size={26} tone="tobacco" />
          </Link>

          <nav className="site-nav" style={{ display: "flex", alignItems: "center", gap: "2.2rem" }}>
            {primaryNav.map((item) => (
              <NavLink
                key={item.href}
                href={item.href}
                label={item.label}
                active={isActive(pathname, item.href)}
              />
            ))}
          </nav>

          <div className="header-cta" style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <Link
              href="/contact"
              className="skg-btn skg-btn--accent skg-btn--sm"
              style={{ textDecoration: "none" }}
            >
              Enquire <ArrowRight size={15} weight="bold" className="skg-btn__icon" />
            </Link>
          </div>

          <span className="header-menu">
            <IconButton
              variant="outline"
              label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((o) => !o)}
            >
              {open ? <X size={20} /> : <List size={20} />}
            </IconButton>
          </span>
        </div>

        {/* Mobile menu */}
        {open && (
          <div
            style={{
              borderTop: "1px solid var(--border-subtle)",
              padding: "1rem var(--gutter) 1.6rem",
              display: "flex",
              flexDirection: "column",
              gap: "0.2rem",
              background: "var(--surface-page)",
            }}
          >
            {primaryNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                style={{
                  padding: "0.85rem 0",
                  borderBottom: "1px solid var(--border-subtle)",
                  fontFamily: "var(--font-display)",
                  fontSize: "1.4rem",
                  color: isActive(pathname, item.href) ? "var(--accent)" : "var(--text-primary)",
                }}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="skg-btn skg-btn--accent skg-btn--block"
              style={{ marginTop: "1rem", textDecoration: "none" }}
            >
              Enquire <ArrowRight size={16} weight="bold" className="skg-btn__icon" />
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
