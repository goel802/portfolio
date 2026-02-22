import { useReveal } from "../../hooks/index.js";

// ── Reveal ────────────────────────────────────────────────────
export function Reveal({ children, delay = 0 }) {
  const [ref, visible] = useReveal();
  const delayIndex = delay > 0 ? Math.round(delay / 0.06) : undefined;

  return (
    <div
      ref={ref}
      className="reveal"
      data-visible={String(visible)}
      {...(delayIndex ? { "data-delay": delayIndex } : {})}
    >
      {children}
    </div>
  );
}

// ── SectionHead ───────────────────────────────────────────────
export function SectionHead({ eyebrow, title, titleSpan, sub, center = false }) {
  return (
    <div className={`section-head${center ? " section-head--center" : ""}`}>
      <div className="section-head__eyebrow">
        <span className="section-head__eyebrow-line" />
        {eyebrow}
      </div>

      <h2 className="section-head__title">
        {title}{" "}
        {titleSpan && <span className="grad-text">{titleSpan}</span>}
      </h2>

      {sub && <p className="section-head__sub">{sub}</p>}
    </div>
  );
}

// ── Grid ──────────────────────────────────────────────────────
export function Grid({ children, min = 260 }) {
  const cls = `auto-grid auto-grid--min-${min}`;
  return <div className={cls}>{children}</div>;
}

// ── Btn ───────────────────────────────────────────────────────
export function Btn({ href, label, variant = "primary", target }) {
  const variantClass = variant === "ghostInv" ? "ghost-inv" : variant;

  return (
    <a
      href={href}
      target={target}
      rel={target === "_blank" ? "noreferrer" : undefined}
      className={`btn btn--${variantClass}`}
    >
      {label}
    </a>
  );
}

// ── Divider ───────────────────────────────────────────────────
export function Divider() {
  return <hr className="divider" />;
}