import { useState } from "react";
import "./NexgenzLanding.css";

// ── FAQ ITEM ────────────────────────────────────────────────────────────────
function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="faq-item">
      <div className="faq-q" onClick={() => setOpen(o => !o)}>
        {q}
        <button className={`faq-toggle ${open ? "open" : ""}`}>{open ? "−" : "+"}</button>
      </div>
      {open && <div className="faq-a">{a}</div>}
    </div>
  );
}

// ── DATA ─────────────────────────────────────────────────────────────────────
const services = [
  {
    icon: "📒", title: "Bookkeeping",
    desc: "Accurate, up-to-date records every month so you always know where your business stands financially.",
    items: ["Bank reconciliation", "Accounts payable & receivable", "Monthly reports"]
  },
  {
    icon: "📊", title: "Management Accounts",
    desc: "Clear monthly or quarterly reports that give you the insight to make confident business decisions.",
    items: ["P&L statements", "Cash flow reports", "Budget vs actuals"]
  },
  {
    icon: "🏛️", title: "Annual Accounts & Tax",
    desc: "Statutory accounts and corporation tax returns filed accurately and on time with HMRC.",
    items: ["Statutory accounts", "Corporation tax return", "Companies House filing"]
  },
  {
    icon: "📑", title: "VAT Returns",
    desc: "Making Tax Digital compliant VAT returns prepared and submitted every quarter without the stress.",
    items: ["MTD-compliant filing", "Quarterly submissions", "VAT registration support"]
  },
  {
    icon: "🎯", title: "Self Assessment",
    desc: "Personal tax returns completed and submitted on time for directors, sole traders, and landlords.",
    items: ["Income tax return", "Capital gains tax", "Rental income"]
  },
];

const features = [
  {
    icon: "☁️", title: "Cloud Accounting",
    desc: "We work with Xero, QuickBooks and FreeAgent — your accounts accessible anytime, anywhere."
  },
  {
    icon: "⚡", title: "Fast, Friendly Support",
    desc: "Same-day responses as standard. Reach us by email, phone or WhatsApp."
  },
];

const plans = [
  {
    tier: "Starter", price: "99",
    desc: "Great for sole traders and newly formed limited companies.",
    features: ["Bookkeeping (up to 100 txns/mo)", "Annual accounts & CT600", "Self assessment return", "Xero included", "Email support"],
    btn: "price-btn price-btn-outline", featured: false
  },
  {
    tier: "Growth", price: "199",
    desc: "The most popular choice for growing small businesses.",
    features: ["Bookkeeping (up to 300 txns/mo)", "Quarterly management accounts", "VAT returns (MTD)", "Payroll up to 5 employees", "Annual accounts & CT600", "Priority support"],
    btn: "price-btn price-btn-white", featured: true
  },
  {
    tier: "Pro", price: "349",
    desc: "For established businesses that need complete financial support.",
    features: ["Unlimited transactions", "Monthly management accounts", "VAT returns", "Payroll (unlimited)", "Virtual CFO — 2 hrs/month", "Annual accounts & CT600"],
    btn: "price-btn price-btn-outline", featured: false
  },
];

const testimonials = [
  {
    stars: 5,
    text: "NexGenZ sorted 12 months of backlog bookkeeping in under a week. The team is incredibly professional and always available. Highly recommend to any UK startup.",
    name: "Sarah Mitchell", role: "Founder, Bloom Creative Ltd", av: "SM"
  },
  {
    stars: 5,
    text: "Finally an accountant that actually explains things clearly. Our management accounts are always on time and the VAT submissions are handled without us lifting a finger.",
    name: "David Okafor", role: "Director, Okafor Consulting", av: "DO"
  },
  {
    stars: 5,
    text: "As a sole trader I was worried about costs, but the Starter plan is brilliant value. Everything is just taken care of — it's a huge weight off my shoulders.",
    name: "Emma Clarke", role: "Freelance Designer, Self-Employed", av: "EC"
  },
];

const faqs = [
  {
    q: "How do I get started with NexGenZ?",
    a: "Simply fill in our contact form or call us and we'll book a free 30-minute consultation. We'll understand your needs and set everything up within a few days — including migrating any existing data."
  },
  {
    q: "Which accounting software do you use?",
    a: "We primarily work with Xero, which is included in all our plans. We also support QuickBooks and FreeAgent if you already use one of those."
  },
  {
    q: "Is there a minimum contract length?",
    a: "No long-term contracts. We work on a rolling monthly basis. We want you to stay because you love the service, not because you're tied in."
  },
];

// ── HELPER ───────────────────────────────────────────────────────────────────
const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
const navLinks = ["Services", "Why Us", "How It Works", "Contact"];

// ── MAIN ─────────────────────────────────────────────────────────────────────
export default function NexgenzLanding() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", company: "", service: "", message: "" });
  const [sent, setSent] = useState(false);

  const up = (f) => (e) => setForm({ ...form, [f]: e.target.value });

  const handleMobileNav = (id) => {
    setMenuOpen(false);
    setTimeout(() => scrollTo(id), 50);
  };

  return (
    <>
      {/* ── NAV ── */}
      <nav className="nav">
        <div className="nav-logo">
          NEXGENZ
          <span>Accounting &amp; Tax Solutions</span>
        </div>

        {/* Desktop links */}
        <ul className="nav-links">
          {navLinks.map(l => (
            <li key={l}>
              <a href={`#${l.toLowerCase().replace(/ /g, "-")}`}>{l}</a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA buttons */}
        <div className="nav-cta">
          <button className="btn-outline" style={{ padding: "9px 20px", fontSize: "13px" }}>
            Sign In
          </button>
          <button
            className="btn-green"
            style={{ padding: "10px 22px", fontSize: "13px" }}
            onClick={() => scrollTo("contact")}
          >
            Free Consultation
          </button>
        </div>

        {/* Hamburger button (mobile only) */}
        <button
          className={`nav-hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle navigation menu"
        >
          <span /><span /><span />
        </button>
      </nav>

      {/* Mobile drawer */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        {navLinks.map(l => (
          <a
            key={l}
            href={`#${l.toLowerCase().replace(/ /g, "-")}`}
            onClick={() => handleMobileNav(l.toLowerCase().replace(/ /g, "-"))}
          >
            {l}
          </a>
        ))}
        <div className="mobile-menu-btns">
          <button className="btn-outline">Sign In</button>
          <button className="btn-green" onClick={() => handleMobileNav("contact")}>
            Free Consultation
          </button>
        </div>
      </div>

      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero-left">
          <div className="hero-badge fade-in">
            <span />&nbsp;UK Startup Accounting Specialists
          </div>
          <h1 className="fade-up d1">
            Simple, Reliable <em>Accounting</em> for UK Businesses.
          </h1>
          <p className="fade-up d2">
            We take care of your bookkeeping, tax, VAT so you can focus on growing your business.
            No jargon, no surprises — just expert support from a team that genuinely cares.
          </p>
          <div className="hero-btns fade-up d3">
            <button className="btn-green" onClick={() => scrollTo("contact")}>
              Get Started Free →
            </button>
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-card-wrap">
            <div className="h-card fade-in d3">
              <div className="h-card-label">Your Services</div>
              <div className="h-services-list" style={{ marginTop: 8 }}>
                {["Bookkeeping", "VAT Return", "Annual Accounts"].map(s => (
                  <div className="h-svc-row" key={s}>
                    <span className="h-svc-name">{s}</span>
                    <div className="h-svc-check">✓</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST BAR ── */}
      <div className="trust-bar">
        <span className="trust-bar-label">We work with</span>
        <div className="trust-divider" />
        <div className="trust-items">
          {["ACCA Regulated", "HMRC Registered Agent", "Xero Partner", "QuickBooks Advisor", "MTD Ready", "GDPR Compliant"].map(t => (
            <span className="trust-item" key={t}>{t}</span>
          ))}
        </div>
      </div>

      {/* ── SERVICES ── */}
      <section className="section services-section" id="services">
        <div className="center">
          <div className="section-label">What We Do</div>
          <h2 className="section-title">
            Everything your business needs, <em>in one place.</em>
          </h2>
          <p className="section-sub">
            From day-to-day bookkeeping to year-end accounts and tax returns — we handle it all so you don't have to.
          </p>
        </div>
        <div className="svc-grid">
          {services.map(s => (
            <div className="svc-card" key={s.title}>
              <div className="svc-icon-box">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <ul>{s.items.map(i => <li key={i}>{i}</li>)}</ul>
            </div>
          ))}
        </div>
      </section>

      {/* ── WHY US ── */}
      <section className="section why-section" id="why-us">
        <div className="why-inner">
          <div className="why-left">
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", color: "rgba(255,255,255,.5)", marginBottom: 14 }}>
              Why NexGenZ
            </div>
            <h2>Built for <em>modern UK businesses.</em></h2>
            <p>
              We're a new kind of accounting firm — one that combines real expertise with technology
              and genuine availability. No waiting weeks for a reply. No confusing jargon.
              Just clear, reliable support.
            </p>
            <div className="why-stats-row">
              {[["4hr", "Avg Response"]].map(([n, l]) => (
                <div className="why-stat" key={l}>
                  <div className="why-stat-num">{n}</div>
                  <div className="why-stat-label">{l}</div>
                </div>
              ))}
            </div>
            <button className="btn-white" onClick={() => scrollTo("contact")}>
              Book Free Consultation →
            </button>
          </div>
          <div className="why-right">
            {features.map(f => (
              <div className="feat-card" key={f.title}>
                <div className="feat-icon">{f.icon}</div>
                <div>
                  <h4>{f.title}</h4>
                  <p>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="section process-section" id="how-it-works">
        <div className="center">
          <div className="section-label">How It Works</div>
          <h2 className="section-title">Up and running <em>in days.</em></h2>
          <p className="section-sub">
            Our simple onboarding process means your books are sorted quickly with minimal effort from you.
          </p>
        </div>
        <div className="process-grid">
          {[
            ["1", "Free Consultation", "We learn about your business and what you need. No sales pressure — just honest advice."],
            ["2", "Onboarding & Setup", "We connect your accounts, set up your software, and migrate any existing data."],
            ["3", "Catch-Up if Needed", "Any backlog is cleared quickly so your records are fully up to date from day one."],
            ["4", "Ongoing Support", "Your dedicated accountant handles everything monthly. You just review and approve."],
          ].map(([n, t, d]) => (
            <div className="proc-step" key={n}>
              <div className="proc-num">{n}</div>
              <h4>{t}</h4>
              <p>{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── PRICING (commented out — uncomment to enable) ── */}
      {/*
      <section className="section pricing-section" id="pricing">
        <div className="center">
          <div className="section-label">Pricing</div>
          <h2 className="section-title">Clear, simple <em>pricing.</em></h2>
          <p className="section-sub">Fixed monthly fees with no hidden extras. Every plan includes a dedicated accountant and Xero subscription.</p>
        </div>
        <div className="pricing-grid">
          {plans.map(p => (
            <div className={`price-card ${p.featured ? "featured" : ""}`} key={p.tier}>
              {p.featured && <div className="price-popular">Most Popular</div>}
              <div className="price-tier">{p.tier}</div>
              <div className="price-val"><sup>£</sup>{p.price}<span>/mo</span></div>
              <p className="price-desc">{p.desc}</p>
              <div className="price-sep" />
              {p.features.map(f => <div className="price-feat" key={f}>{f}</div>)}
              <button className={p.btn} onClick={() => scrollTo("contact")}>Get Started</button>
            </div>
          ))}
        </div>
        <p style={{ textAlign: "center", marginTop: 28, fontSize: 13, color: "var(--muted)" }}>
          All prices exclude VAT · No contracts · Cancel anytime
        </p>
      </section>
      */}

      {/* ── TESTIMONIALS (commented out — uncomment to enable) ── */}
      {/*
      <section className="section testi-section">
        <div className="center">
          <div className="section-label">Client Stories</div>
          <h2 className="section-title">What our clients <em>say.</em></h2>
          <p className="section-sub">Real feedback from real UK business owners who trust NexGenZ with their accounts.</p>
        </div>
        <div className="testi-grid">
          {testimonials.map(t => (
            <div className="testi-card" key={t.name}>
              <div className="testi-stars">{"★".repeat(t.stars)}</div>
              <p className="testi-text">"{t.text}"</p>
              <div className="testi-author">
                <div className="testi-av">{t.av}</div>
                <div>
                  <div className="testi-name">{t.name}</div>
                  <div className="testi-role">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      */}

      {/* ── FAQ ── */}
      <section className="section faq-section">
        <div className="faq-inner">
          <div className="faq-left">
            <div className="section-label">FAQ</div>
            <h2>Got <em>questions?</em></h2>
            <p>
              Here are the most common things people ask before getting started.
              If you don't see your question, just get in touch.
            </p>
            <div className="faq-cta-box">
              <h4>Still not sure?</h4>
              <p>
                Book a free 30-minute call with one of our accountants.
                No sales pitch — just straightforward advice.
              </p>
              <button
                className="btn-white"
                style={{ fontSize: 13, padding: "10px 20px" }}
                onClick={() => scrollTo("contact")}
              >
                Book Free Call →
              </button>
            </div>
          </div>
          <div>
            {faqs.map(f => <FaqItem key={f.q} {...f} />)}
          </div>
        </div>
      </section>

      {/* ── CTA STRIP ── */}
      <div className="cta-strip">
        <h2>Ready to get your accounts <em>sorted?</em></h2>
        <div className="cta-strip-right">
          <button
            className="btn-white"
            style={{ fontSize: 15, padding: "15px 36px" }}
            onClick={() => scrollTo("contact")}
          >
            Start Free Consultation →
          </button>
          <p className="cta-note">No credit card required &nbsp;·&nbsp; No contracts &nbsp;·&nbsp; Cancel anytime</p>
        </div>
      </div>

      {/* ── CONTACT ── */}
      <section className="section contact-section" id="contact">
        <div className="contact-inner">
          <div className="contact-left">
            <div className="section-label">Get In Touch</div>
            <h2>Let's talk about your <em>business.</em></h2>
            <p>
              Fill in the form and we'll be in touch within 4 business hours.
              Or call us directly — we're always happy to chat.
            </p>
            <div className="contact-info">
              {[
                ["📍", "London & Remote, United Kingdom"],
                ["📞", "0330 123 4567"],
                ["✉️", "info@nexgenz.co.uk"],
                ["🕐", "Mon–Fri, 9am–6pm GMT"],
              ].map(([ic, txt]) => (
                <div className="contact-row" key={txt}>
                  <div className="contact-icon">{ic}</div>
                  {txt}
                </div>
              ))}
            </div>
          </div>

          <div className="the-form">
            {sent ? (
              <div style={{ textAlign: "center", padding: "48px 0" }}>
                <div style={{ fontSize: 52, marginBottom: 16 }}>✅</div>
                <h3 style={{ fontSize: 24, fontWeight: 800, color: "var(--green)", marginBottom: 10 }}>
                  Message Sent!
                </h3>
                <p style={{ color: "var(--muted)", fontSize: 14, lineHeight: 1.7 }}>
                  We'll be in touch within 4 business hours. Check your email for a confirmation.
                </p>
              </div>
            ) : (
              <>
                <h3>Book Your Free Consultation</h3>
                <div className="form-row2">
                  <div className="fg">
                    <label>Full Name</label>
                    <input placeholder="Jane Smith" value={form.name} onChange={up("name")} />
                  </div>
                  <div className="fg">
                    <label>Email</label>
                    <input type="email" placeholder="jane@company.co.uk" value={form.email} onChange={up("email")} />
                  </div>
                </div>
                <div className="form-row2">
                  <div className="fg">
                    <label>Phone</label>
                    <input placeholder="07700 900000" value={form.phone} onChange={up("phone")} />
                  </div>
                  <div className="fg">
                    <label>Company</label>
                    <input placeholder="Your Company Ltd" value={form.company} onChange={up("company")} />
                  </div>
                </div>
                <div className="fg">
                  <label>Service Required</label>
                  <select value={form.service} onChange={up("service")}>
                    <option value="">Select a service...</option>
                    {["Bookkeeping", "Management Accounts", "Annual Accounts & Tax", "VAT Returns", "Self Assessment", "Full Package"].map(s => (
                      <option key={s}>{s}</option>
                    ))}
                  </select>
                </div>
                <div className="fg">
                  <label>Message (optional)</label>
                  <textarea
                    placeholder="Tell us a bit about your business and what you need help with..."
                    value={form.message}
                    onChange={up("message")}
                  />
                </div>
                <button
                  className="btn-green form-submit"
                  onClick={() => form.name && form.email ? setSent(true) : null}
                >
                  Send Message →
                </button>
                <p style={{ fontSize: 12, color: "var(--muted)", marginTop: 10 }}>
                  We respect your privacy and will never share your details.
                </p>
              </>
            )}
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer>
        <div className="footer-top">
          <div className="foot-brand">
            <div className="foot-logo">NEXGENZ</div>
            <div className="foot-logo-tag">Accounting &amp; Tax Solutions</div>
            <p>
              Expert bookkeeping, accounting and tax services for UK startups and small businesses.
              Friendly, fast and fully qualified.
            </p>
            <div className="foot-badges">
              {["ACCA", "HMRC Agent", "Xero Partner", "MTD Ready"].map(b => (
                <div className="foot-badge" key={b}>{b}</div>
              ))}
            </div>
          </div>
          <div className="foot-col">
            <h4>Services</h4>
            <ul>
              {["Bookkeeping", "Management Accounts", "Annual Accounts", "VAT Returns", "Self Assessment"].map(s => (
                <li key={s}><a href="#">{s}</a></li>
              ))}
            </ul>
          </div>
          <div className="foot-col">
            <h4>Company</h4>
            <ul>
              {["About Us", "Our Team", "Pricing", "Blog", "Careers", "Refer a Friend"].map(s => (
                <li key={s}><a href="#">{s}</a></li>
              ))}
            </ul>
          </div>
          <div className="foot-col">
            <h4>Contact</h4>
            <ul>
              <li><a href="#">📍 London, United Kingdom</a></li>
              <li><a href="#">📞 0330 123 4567</a></li>
              <li><a href="#">✉️ info@nexgenz.co.uk</a></li>
              <li><a href="#">💬 WhatsApp Chat</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2025 NexGenZ Accounting &amp; Tax Solutions Ltd · Registered in England &amp; Wales · Regulated by ACCA</p>
          <div className="foot-socials">
            {["💼", "𝕏", "📘", "📸"].map((ic, i) => (
              <div className="foot-soc" key={i}>{ic}</div>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
}
