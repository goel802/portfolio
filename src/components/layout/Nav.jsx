import { useState, useEffect } from "react";
import { useBreakpoint, useScrolled } from "../../hooks/index.js";
import { NAV_LINKS, PROFILE } from "../../data/portfolio.js";

export function Nav({ dark, onToggle }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrolled     = useScrolled(20);
  const { isTablet } = useBreakpoint();

  useEffect(() => { if (!isTablet && menuOpen) setMenuOpen(false); }, [isTablet, menuOpen]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const close = () => setMenuOpen(false);

  return (
    <>
      <nav className={`nav${scrolled ? " nav--scrolled" : ""}`}>
        {/* Brand */}
        <a href="#hero" className="nav__brand">
          <div className="nav__logo">{PROFILE.initials}</div>
          <span className="nav__brand-name">{PROFILE.name}</span>
        </a>

        {/* Desktop links */}
        <ul className="nav__links desktop-nav">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="nav__link">{link.label}</a>
            </li>
          ))}
          <li>
            <a href="#contact" className="nav__hire">Hire Me</a>
          </li>
        </ul>

        {/* Controls */}
        <div className="nav__controls">
          <button className="nav__theme-btn" onClick={onToggle} title="Toggle theme">
            {dark ? "☀️" : "🌙"}
          </button>

          <button
            className={`nav__hamburger${menuOpen ? " nav__hamburger--open" : ""}`}
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span className="nav__hamburger-bar" />
            <span className="nav__hamburger-bar" />
            <span className="nav__hamburger-bar" />
          </button>
        </div>
      </nav>

      {menuOpen && <div className="nav__backdrop" onClick={close} />}

      {menuOpen && (
        <nav className="nav__drawer" aria-label="Mobile navigation">
          <ul className="nav__drawer-list">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={close} className="nav__drawer-link">
                  <span className="nav__drawer-dot" />
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a href="#contact" onClick={close} className="nav__drawer-hire">
                ✉ Hire Me
              </a>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
}