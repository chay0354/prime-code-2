import React from 'react';

const services = [
  { n: '01', title: 'Management systems', desc: 'Internal platforms that streamline how your business runs day to day.' },
  { n: '02', title: 'CRM systems', desc: 'Custom CRM and operational tools built around how your team actually works.' },
  { n: '03', title: 'MVP development', desc: 'Take a new product from idea to a working MVP, quickly and lean.' },
  { n: '04', title: 'B2C platforms', desc: 'Customer-facing products and platforms, built end-to-end.' },
  { n: '05', title: 'Co-development', desc: 'Partner on and extend an existing system alongside your team.' },
  { n: '06', title: 'Custom solutions', desc: 'Almost any technology need — scoped and built to fit your business.' },
];

const steps = [
  { n: '01', title: 'Tell us the project', desc: 'Share the goal and the requirements — internal tool, new product, or extending what you have.' },
  { n: '02', title: 'We scope & quote', desc: 'A clear plan, timeline and price, typically well below building in-house.' },
  { n: '03', title: 'We build & deliver', desc: 'Our refined development methods turn the scope into working software, fast.' },
];

const values = [
  { title: '40–50% lower cost', desc: 'Outsourcing to Prime Code costs roughly half of building and running the same project in-house.' },
  { title: '~50% faster delivery', desc: 'On average we deliver about 50% faster than the market average for comparable work.' },
  { title: 'Refined methods', desc: 'Development methods built and sharpened over years of real work across the industry.' },
];

const EMAIL = 'chay.moalem@gmail.com';
const PHONE_DISPLAY = '+972 054-345-6305';
const PHONE_HREF = '+9720543456305';

const MailIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </svg>
);

const PhoneIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

export default function App() {
  return (
    <div className="page">
      <div className="glow-tr" />
      <div className="glow-bl" />
      <div className="grid-overlay" />

      <div className="content">
        {/* NAV */}
        <nav className="nav container">
          <a className="brand" href="#top">
            <img src="/prime-code-mark.svg" alt="Prime Code" width="48" height="35" />
            <span className="brand-name">Prime Code</span>
          </a>
          <div className="nav-links">
            <a className="nav-link" href="#services">Services</a>
            <a className="nav-link" href="#approach">Approach</a>
            <a className="nav-link" href="#about">About</a>
            <a className="btn btn-primary btn-sm" href="#contact">Start a project →</a>
          </div>
        </nav>

        {/* HERO */}
        <header id="top" className="hero container">
          <div className="eyebrow a-up">
            <span className="eyebrow-dot" />
            Outsourced software development
          </div>
          <h1 className="hero-title a-up" style={{ animationDelay: '.06s' }}>
            Your engineering team, <span className="accent-text">without the overhead.</span>
          </h1>
          <p className="hero-sub a-up" style={{ animationDelay: '.14s' }}>
            Prime Code builds your technology projects end-to-end. Instead of recruiting and
            managing a developer team, hand the project to us — delivered for{' '}
            <strong className="hl">40–50% less</strong> than building in-house, and roughly{' '}
            <strong className="hl">50% faster</strong>.
          </p>
          <div className="hero-cta a-up" style={{ animationDelay: '.22s' }}>
            <a className="btn btn-primary btn-lg" href="#contact">Start a project →</a>
            <a className="btn btn-ghost btn-lg" href="#services">Explore services</a>
          </div>

          <div className="stats a-up" style={{ animationDelay: '.3s' }}>
            <div className="stat">
              <div className="stat-num">40–50%</div>
              <div className="stat-label">lower cost than in-house</div>
            </div>
            <div className="stat">
              <div className="stat-num">~50%</div>
              <div className="stat-label">faster than the market average</div>
            </div>
            <div className="stat">
              <div className="stat-num">End-to-end</div>
              <div className="stat-label">scope, build &amp; delivery</div>
            </div>
          </div>
        </header>

        {/* APPROACH */}
        <section id="approach" className="section container">
          <div className="grid-approach">
            <div>
              <div className="label">[ The approach ]</div>
              <h2 className="h2">Hiring is slow. Building doesn't have to be.</h2>
              <p className="p">
                Recruiting, onboarding and managing an in-house development team takes months and a
                heavy budget. Prime Code is the alternative: outsource the project to us and we
                handle it end-to-end.
              </p>
              <p className="p">
                We scope it, build it, and deliver — using development methods we've refined over
                years of work across the industry. That efficiency is what lets us move faster and
                cost less.
              </p>
            </div>
            <div className="steps">
              {steps.map((s) => (
                <div className="step" key={s.n}>
                  <span className="step-n">{s.n}</span>
                  <div>
                    <div className="step-title">{s.title}</div>
                    <div className="step-desc">{s.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="section container">
          <div className="services-head">
            <div>
              <div className="label">[ What we build ]</div>
              <h2 className="h2">Solutions for almost any technology need.</h2>
            </div>
            <p className="services-intro">
              From internal tooling to customer-facing products — a few of the things we deliver for
              companies and teams.
            </p>
          </div>
          <div className="cards-3">
            {services.map((svc) => (
              <div className="card" key={svc.n}>
                <div className="card-n">{svc.n}</div>
                <div className="card-title">{svc.title}</div>
                <div className="card-desc">{svc.desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* VALUE */}
        <section className="section container">
          <div className="value-panel">
            <div className="value-glow" />
            <div className="label">[ Why Prime Code ]</div>
            <h2 className="h2">Efficient by design — so you pay less and ship sooner.</h2>
            <div className="value-grid">
              {values.map((v) => (
                <div className="value-item" key={v.title}>
                  <div className="value-title">{v.title}</div>
                  <div className="value-desc">{v.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="section container about">
          <div className="grid-about">
            <div>
              <div className="about-art">
                <div className="about-art-grid" />
                <span className="about-art-glyph">{'{ }'}</span>
              </div>
            </div>
            <div>
              <div className="label">[ About ]</div>
              <h2 className="h2">Founded by Chai Yaakov Moalem</h2>
              <p className="p">
                After serving in a technology unit in the IDF and working across several hi-tech
                companies, Chai founded Prime Code to give businesses a faster, leaner way to build
                software.
              </p>
              <p className="p" style={{ marginBottom: 30 }}>
                Prime Code specialises in developing technology projects of all kinds, with years of
                experience creating solutions for a range of companies and businesses.
              </p>
              <div className="founder-card">
                <span className="avatar">CM</span>
                <div>
                  <div className="founder-name">Chai Yaakov Moalem</div>
                  <div className="founder-role">Founder &amp; Owner</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="section container contact" style={{ paddingBottom: 40 }}>
          <div className="grid-contact">
            <div>
              <div className="label accent">[ Start a project ]</div>
              <h2 className="h2">Tell us what you want to build.</h2>
              <p className="p contact-intro">
                Send a few details about your project and we'll get back to you with how Prime Code
                can scope, build and deliver it.
              </p>
            </div>
            <div className="contact-list">
              <a className="contact-card" href={`mailto:${EMAIL}`}>
                <span className="contact-icon"><MailIcon /></span>
                <div>
                  <div className="contact-label">Email</div>
                  <div className="contact-value">{EMAIL}</div>
                </div>
              </a>
              <a className="contact-card" href={`tel:${PHONE_HREF}`}>
                <span className="contact-icon"><PhoneIcon /></span>
                <div>
                  <div className="contact-label">Phone</div>
                  <div className="contact-value ltr">{PHONE_DISPLAY}</div>
                </div>
              </a>
              <div className="contact-card">
                <span className="contact-icon">CM</span>
                <div>
                  <div className="contact-value" style={{ fontSize: 16 }}>Chai Yaakov Moalem</div>
                  <div className="founder-role" style={{ marginTop: 4 }}>Founder &amp; Owner · Prime Code</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="footer">
          <div className="footer-inner container">
            <div className="footer-brand">
              <img src="/prime-code-mark.svg" alt="Prime Code" width="38" height="27" />
              <span>Prime Code</span>
            </div>
            <div className="footer-note">Outsourced software development · © 2026 Prime Code</div>
          </div>
        </footer>
      </div>
    </div>
  );
}
