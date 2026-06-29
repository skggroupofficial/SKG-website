"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo, IconButton } from "../ds";
import { primaryNav } from "../../content/navigation";
import { brand } from "../../content/brand";
import { ArrowRight, MapPin, Phone, EnvelopeSimple, List, X } from "./icons";
import { AnimatePresence, motion } from "framer-motion";

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

  // Close menu on route change
  React.useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header style={{ position: "sticky", top: 0, zIndex: 100 }}>

      {/* ── Utility strip — desktop only (hidden on mobile via .util-bar CSS) ── */}
      <div
        className="util-bar"
        style={{ background: "var(--tobacco-800)", color: "var(--text-on-dark-muted)" }}
      >
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
        >
          <span style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
            <MapPin size={13} style={{ color: "var(--brass-300)" }} />
            {brand.address.locality} · {brand.address.region}
          </span>
          <span style={{ display: "inline-flex", alignItems: "center", gap: "1.4rem" }}>
            <a href={`tel:${brand.phoneHref}`} style={{ color: "inherit", whiteSpace: "nowrap" }}>
              {brand.phone}
            </a>
            <a href={`mailto:${brand.email}`} style={{ color: "var(--brass-300)" }}>
              {brand.email}
            </a>
          </span>
        </div>
      </div>

      {/* ── Main bar ── */}
      <div
        style={{
          background: "rgba(244,239,228,0.96)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          borderBottom: "1px solid var(--border-subtle)",
          boxShadow: scrolled ? "var(--shadow-sm)" : "none",
          transition: "box-shadow var(--duration-base) var(--ease-standard)",
        }}
      >
        <div
          className="header-inner"
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
          <Link href="/" aria-label="SKG — home" style={{ display: "inline-flex", alignItems: "center" }}>
            <Logo variant="lockup" size={scrolled ? 44 : 52} alt="Shri Kuber Group" />
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
            <Link href="/contact" className="skg-btn skg-btn--accent skg-btn--sm" style={{ textDecoration: "none" }}>
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

        {/* ── Mobile menu ── */}
        <AnimatePresence>
          {open && (
            <motion.div
              key="mobile-menu"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.26, ease: [0.22, 0.61, 0.20, 1] }}
              style={{ overflow: "hidden" }}
            >
              <div
                style={{
                  borderTop: "1px solid var(--border-subtle)",
                  background: "var(--surface-page)",
                  paddingBottom: "1.6rem",
                }}
              >
                {/* Nav items */}
                {primaryNav.map((item, i) => {
                  const active = isActive(pathname, item.href);
                  return (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.04 + i * 0.04, duration: 0.2, ease: [0.22, 0.61, 0.20, 1] }}
                    >
                      <Link
                        href={item.href}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          padding: "0.95rem var(--gutter)",
                          borderBottom: "1px solid var(--border-subtle)",
                          fontFamily: "var(--font-display)",
                          fontSize: "1.3rem",
                          lineHeight: 1,
                          color: active ? "var(--accent)" : "var(--text-primary)",
                          background: active ? "rgba(160,120,48,0.04)" : "transparent",
                          textDecoration: "none",
                        }}
                      >
                        {item.label}
                        {active && (
                          <span aria-hidden="true" style={{ color: "var(--accent)", fontSize: "0.7rem" }}>✦</span>
                        )}
                      </Link>
                    </motion.div>
                  );
                })}

                {/* Enquire CTA */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.04 + primaryNav.length * 0.04, duration: 0.2 }}
                  style={{ padding: "1.1rem var(--gutter) 0" }}
                >
                  <Link
                    href="/contact"
                    className="skg-btn skg-btn--accent skg-btn--block"
                    style={{ textDecoration: "none" }}
                  >
                    Enquire <ArrowRight size={16} weight="bold" className="skg-btn__icon" />
                  </Link>
                </motion.div>

                {/* Contact strip — replaces the hidden utility bar */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.04 + (primaryNav.length + 1) * 0.04, duration: 0.2 }}
                  style={{
                    margin: "1.1rem var(--gutter) 0",
                    paddingTop: "1rem",
                    borderTop: "1px solid var(--border-subtle)",
                    display: "flex",
                    gap: "1.2rem 2rem",
                    flexWrap: "wrap",
                  }}
                >
                  <a
                    href={`tel:${brand.phoneHref}`}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.45rem",
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.8rem",
                      letterSpacing: "0.04em",
                      color: "var(--text-secondary)",
                      textDecoration: "none",
                      whiteSpace: "nowrap",
                    }}
                  >
                    <Phone size={13} weight="regular" style={{ color: "var(--accent)", flexShrink: 0 }} />
                    {brand.phone}
                  </a>
                  <a
                    href={`mailto:${brand.email}`}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.45rem",
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.8rem",
                      letterSpacing: "0.04em",
                      color: "var(--text-secondary)",
                      textDecoration: "none",
                    }}
                  >
                    <EnvelopeSimple size={13} weight="regular" style={{ color: "var(--accent)", flexShrink: 0 }} />
                    {brand.email}
                  </a>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
