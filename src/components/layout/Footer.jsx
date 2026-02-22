import { useBreakpoint } from "../../hooks/index.js";
import { PROFILE } from "../../data/portfolio.js";

export function Footer() {
  const { isMobile } = useBreakpoint();
  return (
    <footer className="footer">
      <span>© 2026 </span>
      <span className="footer__name">{PROFILE.name}</span>
      {!isMobile && <span> · {PROFILE.role} · {PROFILE.location}</span>}
      <span> · Made with ❤</span>
    </footer>
  );
}