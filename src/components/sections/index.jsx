import { Reveal, SectionHead, Grid, Btn } from "../ui/index.jsx";
import {
  PROFILE, STATS, SKILLS, SERVICES, ACHIEVEMENTS,
  EXPERIENCE, PROJECTS, EDUCATION, FUN_FACTS,
} from "../../data/portfolio.js";

// Cycle through accent slots 1-5 then back to 1
const accentSlot = (i) => String((i % 5) + 1);

// ─────────────────────────────────────────────────────────────
// HERO
// ─────────────────────────────────────────────────────────────
export function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero__blob" />

      <div className="hero__content">
        <div className="hero__badge">
          <span className="hero__badge-dot" />
          {PROFILE.badge}
        </div>

        <h1 className="hero-heading">
          Hi, I'm <span className="grad-text">{PROFILE.name}</span>
        </h1>

        <p className="hero__role">{PROFILE.role}&nbsp;·&nbsp;{PROFILE.tagline}</p>
        <p className="hero__bio">{PROFILE.heroTagline}</p>

        <div className="hero__ctas">
          <Btn href="#contact"  label="✉ Let's Talk"   variant="primary" />
          <Btn href="#projects" label="View My Work →"  variant="ghost"   />
        </div>

        <div className="hero__stats">
          {STATS.map((s, i) => (
            <div key={i} className="hero__stat">
              <div className="hero__stat-num grad-text">{s.num}</div>
              <div className="hero__stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// ABOUT
// ─────────────────────────────────────────────────────────────
export function About() {
  const infoItems = [
    { label: "📍 Location",  val: PROFILE.location  },
    { label: "🎓 Degree",    val: PROFILE.degree    },
    { label: "📧 Email",     val: PROFILE.email     },
    { label: "📞 Phone",     val: PROFILE.phone     },
    { label: "🌐 Languages", val: PROFILE.languages },
  ];

  return (
    <section id="about" className="about">
      <div className="about__grid">
        <Reveal>
          <div className="about__avatar-wrap">
            <div className="about__avatar">{PROFILE.initials}</div>
            <div className="about__avatar-blob" />
          </div>
        </Reveal>

        <Reveal delay={0.06}>
          <SectionHead
            eyebrow="About Me"
            title="Passionate about"
            titleSpan="crafting great UIs"
          />
          {PROFILE.bio.map((p, i) => (
            <p key={i} className="about__bio">{p}</p>
          ))}

          <div className="about__info-grid">
            {infoItems.map((item, i) => (
              <div key={i} className="about__info-card">
                <div className="about__info-label">{item.label}</div>
                <div className="about__info-value">{item.val}</div>
              </div>
            ))}
          </div>

          <div className="about__ctas">
            <Btn href="#"               label="📄 Download CV" variant="primary" />
            <Btn href={PROFILE.linkedin} label="LinkedIn ↗"   variant="outline" target="_blank" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// SKILLS
// ─────────────────────────────────────────────────────────────
export function Skills() {
  return (
    <section id="skills" className="section--alt">
      <div className="section-inner">
        <Reveal>
          <SectionHead
            eyebrow="Technical Skills"
            title="What I"
            titleSpan="Work With"
            sub="A curated toolkit of technologies I use to build fast, accessible, and scalable web products."
          />
        </Reveal>

        <Grid min={240}>
          {SKILLS.map((sk, i) => (
            <Reveal key={i} delay={i * 0.06}>
              {/* CSS selects icon colour via data-accent */}
              <div className="skill-card">
                <div className="skill-card__icon icon-box" data-accent={accentSlot(i)}>
                  {sk.icon}
                </div>
                <h3 className="skill-card__title">{sk.title}</h3>
                <div className="skill-card__cat">{sk.cat}</div>
                <div className="skill-card__tags">
                  {sk.tags.map((tag, j) => (
                    <span key={j} className="skill-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </Grid>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// SERVICES
// ─────────────────────────────────────────────────────────────
export function Services() {
  return (
    <section id="services">
      <div className="section-inner">
        <Reveal>
          <SectionHead
            eyebrow="What I Do"
            title="Services I"
            titleSpan="Offer"
            sub="From pixel-perfect UIs to performance-tuned apps — here's how I can help you."
          />
        </Reveal>

        <Grid min={260}>
          {SERVICES.map((s, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <div className="service-card">
                <div className="service-card__icon icon-box" data-accent={accentSlot(i)}>
                  {s.icon}
                </div>
                <h3 className="service-card__title">{s.title}</h3>
                <p className="service-card__desc">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </Grid>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// ACHIEVEMENTS
// ─────────────────────────────────────────────────────────────
export function Achievements() {
  return (
    <section id="achievements" className="section--alt">
      <div className="section-inner">
        <Reveal>
          <SectionHead eyebrow="Impact & Metrics" title="Measurable" titleSpan="Achievements" />
        </Reveal>

        <Grid min={200}>
          {ACHIEVEMENTS.map((a, i) => (
            <Reveal key={i} delay={i * 0.07}>
              {/* nth-child in CSS picks the bar gradient automatically */}
              <div className="achievement-card">
                <div className="achievement-card__bar" />
                <div className="achievement-card__icon">{a.icon}</div>
                <div className="achievement-card__value grad-text">{a.value}</div>
                <div className="achievement-card__label">{a.label}</div>
              </div>
            </Reveal>
          ))}
        </Grid>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// EXPERIENCE
// ─────────────────────────────────────────────────────────────
export function Experience() {
  return (
    <section id="experience">
      <div className="section-inner">
        <Reveal>
          <SectionHead
            eyebrow="Work Experience"
            title="Where I've"
            titleSpan="Worked"
            sub="4+ years across fintech, edtech, and enterprise — always building for scale and accessibility."
          />
        </Reveal>

        {/* timeline::before draws the vertical line via CSS */}
        <div className="timeline">
          {EXPERIENCE.map((job, i) => (
            <Reveal key={i} delay={i * 0.07}>
              {/* timeline__item::before draws the dot via CSS */}
              <div className="timeline__item">
                <div className="timeline__card">
                  <div className="timeline__card-header">
                    <h3 className="timeline__title">{job.title}</h3>
                    <span className="timeline__period">{job.period}</span>
                  </div>

                  {/* timeline__company::before draws the dash via CSS */}
                  <p className="timeline__company">
                    {job.company} · {job.location}
                  </p>

                  {/* timeline__point::before draws the bullet via CSS */}
                  <ul className="timeline__points">
                    {job.points.map((pt, j) => (
                      <li key={j} className="timeline__point">{pt}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// PROJECTS
// ─────────────────────────────────────────────────────────────
export function Projects() {
  return (
    <section id="projects" className="section--alt">
      <div className="section-inner">
        <Reveal>
          <SectionHead
            eyebrow="Featured Projects"
            title="Things I've"
            titleSpan="Shipped"
            sub="A selection of projects reflecting my approach to well-crafted, purposeful software."
          />
        </Reveal>

        <Grid min={290}>
          {PROJECTS.map((p, i) => (
            <Reveal key={i} delay={i * 0.07}>
              {/* nth-child in CSS selects the bar gradient */}
              <div className="project-card">
                <div className="project-card__bar" />
                <div className="project-card__num">{p.num}</div>
                <h3 className="project-card__title">{p.title}</h3>
                <p className="project-card__org">{p.org}</p>
                <p className="project-card__desc">{p.desc}</p>
                <div className="project-card__footer">
                  {p.tags.map((tag, j) => (
                    <span key={j} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </Grid>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// EDUCATION
// ─────────────────────────────────────────────────────────────
export function Education() {
  return (
    <section id="education">
      <div className="section-inner">
        <Reveal>
          <SectionHead eyebrow="Education" title="Academic" titleSpan="Background" />
        </Reveal>

        <Grid min={280}>
          {EDUCATION.map((edu, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="edu-card">
                <div className="edu-card__icon">{edu.icon}</div>
                <div className="edu-card__body">
                  <div className="edu-card__degree">{edu.degree}</div>
                  <div className="edu-card__school">{edu.school}</div>
                  <span className="edu-card__period">{edu.period}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </Grid>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// FUN FACTS
// ─────────────────────────────────────────────────────────────
export function FunFacts() {
  return (
    <section id="funfacts" className="section--alt">
      <div className="section-inner">
        <Reveal>
          <SectionHead eyebrow="Quick Highlights" title="A Few Things" titleSpan="About Me" />
        </Reveal>

        <Grid min={210}>
          {FUN_FACTS.map((f, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <div className="funfact-card">
                <span className="funfact-card__icon">{f.icon}</span>
                <div className="funfact-card__body">
                  <div className="funfact-card__title">{f.title}</div>
                  <div className="funfact-card__desc">{f.desc}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </Grid>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// CONTACT
// ─────────────────────────────────────────────────────────────
export function Contact() {
  return (
    // contact::before/::after handle decorative blobs in CSS
    <section id="contact" className="contact">
      <div className="contact__inner">
        {/* contact__eyebrow::before draws the line in CSS */}
        <div className="contact__eyebrow">Get In Touch</div>

        <h2 className="contact__heading">
          Let's Build Something{" "}
          <span className="contact__heading-muted">Great</span>
        </h2>

        <p className="contact__sub">
          Open to new opportunities, exciting projects, and creative collaborations.
          Whether it's a full-time role or freelance — let's talk!
        </p>

        <a href={`mailto:${PROFILE.email}`} className="contact__email">
          ✉ {PROFILE.email}
        </a>

        <div className="contact__links">
          <Btn href={PROFILE.linkedin}       label="LinkedIn ↗"           variant="white"    target="_blank" />
          <Btn href={PROFILE.github}         label="GitHub ↗"             variant="ghostInv" target="_blank" />
          <Btn href={`tel:${PROFILE.phone}`} label={`📞 ${PROFILE.phone}`} variant="ghostInv" />
        </div>
      </div>
    </section>
  );
}