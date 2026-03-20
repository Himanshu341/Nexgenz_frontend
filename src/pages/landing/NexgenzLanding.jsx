import { useState } from "react";

const Styles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');

    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    :root {
      --green:      #0D4715;
      --green-mid:  #155c1f;
      --green-lt:   #1a7a2a;
      --green-pale: #e8f2e9;
      --green-tint: #f2f8f2;
      --white:      #ffffff;
      --off-white:  #f9fbf9;
      --text:       #1a1a1a;
      --muted:      #5a6e5c;
      --border:     #d4e4d5;
      --shadow:     rgba(13,71,21,.10);
    }

    html { scroll-behavior: smooth; }
    body { font-family: 'Poppins', sans-serif; background: var(--white); color: var(--text); overflow-x: hidden; }

    @keyframes fadeUp  { from { opacity:0; transform:translateY(24px); } to { opacity:1; transform:none; } }
    @keyframes fadeIn  { from { opacity:0; } to { opacity:1; } }
    @keyframes scaleIn { from { opacity:0; transform:scale(.95); } to { opacity:1; transform:scale(1); } }

    .fade-up { animation: fadeUp .65s ease both; }
    .fade-in { animation: fadeIn .6s ease both; }
    .d1 { animation-delay: .1s; }
    .d2 { animation-delay: .22s; }
    .d3 { animation-delay: .36s; }
    .d4 { animation-delay: .5s; }
    .d5 { animation-delay: .65s; }

    /* ── BUTTONS ── */
    .btn-green {
      display: inline-flex; align-items: center; gap: 8px;
      background: var(--green); color: var(--white);
      border: none; padding: 14px 30px; border-radius: 6px;
      font-family: 'Poppins', sans-serif; font-size: 14px; font-weight: 600;
      cursor: pointer; transition: background .2s, transform .15s, box-shadow .2s;
      box-shadow: 0 4px 18px var(--shadow);
    }
    .btn-green:hover { background: var(--green-mid); transform: translateY(-1px); box-shadow: 0 8px 24px var(--shadow); }

    .btn-outline {
      display: inline-flex; align-items: center; gap: 8px;
      background: transparent; color: var(--green);
      border: 2px solid var(--green); padding: 12px 28px; border-radius: 6px;
      font-family: 'Poppins', sans-serif; font-size: 14px; font-weight: 600;
      cursor: pointer; transition: background .2s, color .2s;
    }
    .btn-outline:hover { background: var(--green); color: var(--white); }

    .btn-white {
      display: inline-flex; align-items: center; gap: 8px;
      background: var(--white); color: var(--green);
      border: none; padding: 14px 30px; border-radius: 6px;
      font-family: 'Poppins', sans-serif; font-size: 14px; font-weight: 700;
      cursor: pointer; transition: background .2s, transform .15s;
    }
    .btn-white:hover { background: var(--green-pale); transform: translateY(-1px); }

    /* ── NAV ── */
    .nav {
      position: sticky; top: 0; z-index: 999;
      background: var(--white);
      border-bottom: 1px solid var(--border);
      display: flex; align-items: center; justify-content: space-between;
      padding: 0 72px; height: 70px;
      box-shadow: 0 2px 12px rgba(13,71,21,.06);
    }
    .nav-logo {
      font-size: 20px; font-weight: 800; color: var(--green);
      letter-spacing: -.3px; line-height: 1.1;
    }
    .nav-logo span { display: block; font-size: 9px; font-weight: 500; letter-spacing: 2px; text-transform: uppercase; color: var(--muted); }
    .nav-links { display: flex; gap: 30px; list-style: none; }
    .nav-links a { text-decoration: none; color: var(--text); font-size: 13.5px; font-weight: 500; transition: color .2s; }
    .nav-links a:hover { color: var(--green); }
    .nav-cta { display: flex; gap: 10px; align-items: center; }

    /* ── HERO ── */
    .hero {
      display: grid; grid-template-columns: 1fr 1fr;
      min-height: 88vh; overflow: hidden;
    }
    .hero-left {
      padding: 80px 72px;
      display: flex; flex-direction: column; justify-content: center;
      background: var(--white);
    }
    .hero-badge {
      display: inline-flex; align-items: center; gap: 8px;
      background: var(--green-pale); color: var(--green);
      font-size: 12px; font-weight: 600; padding: 6px 14px; border-radius: 30px;
      margin-bottom: 24px; border: 1px solid var(--border);
    }
    .hero-badge span { width: 6px; height: 6px; border-radius: 50%; background: var(--green); display: block; }
    .hero h1 { font-size: 52px; font-weight: 800; color: var(--green); line-height: 1.1; margin-bottom: 20px; letter-spacing: -.5px; }
    .hero h1 em { font-style: normal; color: var(--text); }
    .hero p { font-size: 15px; color: var(--muted); line-height: 1.75; max-width: 460px; margin-bottom: 36px; font-weight: 400; }
    .hero-btns { display: flex; gap: 14px; margin-bottom: 48px; }
    .hero-stats { display: flex; gap: 36px; padding-top: 36px; border-top: 1px solid var(--border); }
    .h-stat-num { font-size: 28px; font-weight: 800; color: var(--green); line-height: 1; }
    .h-stat-label { font-size: 12px; color: var(--muted); margin-top: 3px; font-weight: 400; }

    .hero-right {
      background: var(--green);
      display: flex; align-items: center; justify-content: center;
      padding: 60px 56px;
      position: relative; overflow: hidden;
    }
    .hero-right::before {
      content: ''; position: absolute; top: -80px; right: -80px;
      width: 280px; height: 280px; border-radius: 50%;
      background: rgba(255,255,255,.04);
    }
    .hero-right::after {
      content: ''; position: absolute; bottom: -60px; left: -60px;
      width: 200px; height: 200px; border-radius: 50%;
      background: rgba(255,255,255,.05);
    }
    .hero-card-wrap { display: flex; flex-direction: column; gap: 16px; width: 100%; max-width: 340px; position: relative; z-index: 1; }
    .h-card {
      background: rgba(255,255,255,.09); border: 1px solid rgba(255,255,255,.15);
      border-radius: 12px; padding: 22px 24px;
    }
    .h-card-top { display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px; }
    .h-card-icon { width: 38px; height: 38px; border-radius: 8px; background: rgba(255,255,255,.12); display: flex; align-items: center; justify-content: center; font-size: 18px; }
    .h-card-label { font-size: 11px; font-weight: 600; letter-spacing: 1px; text-transform: uppercase; color: rgba(255,255,255,.5); }
    .h-card-val { font-size: 30px; font-weight: 800; color: var(--white); line-height: 1; }
    .h-card-sub { font-size: 12px; color: rgba(255,255,255,.5); margin-top: 4px; }
    .h-card-pill { font-size: 11px; font-weight: 700; padding: 3px 10px; border-radius: 20px; }
    .pill-green { background: rgba(74,222,128,.15); color: #4ade80; }
    .pill-white { background: rgba(255,255,255,.12); color: rgba(255,255,255,.7); }
    .h-bar { height: 4px; background: rgba(255,255,255,.12); border-radius: 4px; margin-top: 14px; overflow: hidden; }
    .h-bar-fill { height: 100%; border-radius: 4px; background: rgba(255,255,255,.5); }
    .h-services-list { display: flex; flex-direction: column; gap: 8px; }
    .h-svc-row { display: flex; align-items: center; justify-content: space-between; }
    .h-svc-name { font-size: 13px; color: rgba(255,255,255,.75); }
    .h-svc-check { width: 18px; height: 18px; border-radius: 50%; background: rgba(255,255,255,.15); display: flex; align-items: center; justify-content: center; font-size: 10px; color: #4ade80; }

    /* ── TRUST BAR ── */
    .trust-bar { background: var(--green-tint); border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); padding: 18px 72px; display: flex; align-items: center; gap: 20px; }
    .trust-bar-label { font-size: 12px; font-weight: 600; color: var(--muted); letter-spacing: 1px; text-transform: uppercase; white-space: nowrap; }
    .trust-divider { width: 1px; height: 24px; background: var(--border); }
    .trust-items { display: flex; align-items: center; gap: 28px; flex-wrap: wrap; }
    .trust-item { display: flex; align-items: center; gap: 7px; font-size: 13px; font-weight: 500; color: var(--muted); }
    .trust-item::before { content: '✓'; color: var(--green); font-weight: 700; }

    /* ── SECTION HELPERS ── */
    .section { padding: 90px 72px; }
    .section-label { font-size: 11px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; color: var(--green); margin-bottom: 12px; }
    .section-title { font-size: 38px; font-weight: 800; color: var(--text); line-height: 1.15; margin-bottom: 14px; letter-spacing: -.3px; }
    .section-title em { font-style: normal; color: var(--green); }
    .section-sub { font-size: 15px; color: var(--muted); line-height: 1.75; max-width: 520px; }
    .center { text-align: center; }
    .center .section-sub { margin: 0 auto; }

    /* ── SERVICES ── */
    .services-section { background: var(--white); }
    .svc-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin-top: 52px; }
    .svc-card {
      border: 1.5px solid var(--border); border-radius: 12px; padding: 32px 28px;
      background: var(--white); transition: border-color .25s, box-shadow .25s, transform .25s;
      position: relative; overflow: hidden;
    }
    .svc-card::after {
      content: ''; position: absolute; bottom: 0; left: 0; right: 0; height: 3px;
      background: var(--green); transform: scaleX(0); transform-origin: left; transition: transform .3s;
    }
    .svc-card:hover { border-color: var(--green); box-shadow: 0 10px 36px var(--shadow); transform: translateY(-3px); }
    .svc-card:hover::after { transform: scaleX(1); }
    .svc-icon-box { width: 50px; height: 50px; border-radius: 10px; background: var(--green-pale); display: flex; align-items: center; justify-content: center; font-size: 22px; margin-bottom: 18px; }
    .svc-card h3 { font-size: 17px; font-weight: 700; color: var(--text); margin-bottom: 10px; }
    .svc-card p { font-size: 13.5px; color: var(--muted); line-height: 1.7; }
    .svc-card ul { margin-top: 16px; list-style: none; }
    .svc-card ul li { font-size: 13px; color: var(--muted); padding: 5px 0; border-bottom: 1px solid var(--green-pale); display: flex; align-items: center; gap: 8px; }
    .svc-card ul li::before { content: '→'; color: var(--green); font-size: 11px; flex-shrink: 0; }

    /* ── WHY US ── */
    .why-section { background: var(--green); }
    .why-inner { display: grid; grid-template-columns: 1fr 1fr; gap: 72px; align-items: center; }
    .why-left h2 { font-size: 40px; font-weight: 800; color: var(--white); line-height: 1.15; margin-bottom: 18px; }
    .why-left h2 em { font-style: normal; color: var(--green-pale); }
    .why-left p { font-size: 15px; color: rgba(255,255,255,.65); line-height: 1.75; margin-bottom: 32px; }
    .why-stats-row { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin-bottom: 36px; }
    .why-stat { background: rgba(255,255,255,.07); border: 1px solid rgba(255,255,255,.12); border-radius: 10px; padding: 20px 16px; text-align: center; }
    .why-stat-num { font-size: 30px; font-weight: 800; color: var(--white); line-height: 1; }
    .why-stat-label { font-size: 11.5px; color: rgba(255,255,255,.5); margin-top: 5px; }
    .why-right { display: flex; flex-direction: column; gap: 14px; }
    .feat-card { background: rgba(255,255,255,.07); border: 1px solid rgba(255,255,255,.12); border-radius: 12px; padding: 22px 22px; display: flex; gap: 16px; align-items: flex-start; transition: background .2s; }
    .feat-card:hover { background: rgba(255,255,255,.12); }
    .feat-icon { width: 44px; height: 44px; border-radius: 10px; background: rgba(255,255,255,.12); display: flex; align-items: center; justify-content: center; font-size: 20px; flex-shrink: 0; }
    .feat-card h4 { font-size: 14.5px; font-weight: 700; color: var(--white); margin-bottom: 5px; }
    .feat-card p { font-size: 13px; color: rgba(255,255,255,.55); line-height: 1.6; }

    /* ── PROCESS ── */
    .process-section { background: var(--off-white); }
    .process-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 0; margin-top: 56px; position: relative; }
    .process-grid::before { content: ''; position: absolute; top: 30px; left: 12.5%; right: 12.5%; height: 1.5px; background: var(--border); }
    .proc-step { text-align: center; padding: 0 18px; }
    .proc-num { width: 60px; height: 60px; border-radius: 50%; background: var(--white); border: 2px solid var(--border); display: flex; align-items: center; justify-content: center; font-size: 18px; font-weight: 800; color: var(--green); margin: 0 auto 20px; position: relative; z-index: 1; transition: background .2s, border-color .2s; }
    .proc-step:hover .proc-num { background: var(--green); color: var(--white); border-color: var(--green); }
    .proc-step h4 { font-size: 15px; font-weight: 700; color: var(--text); margin-bottom: 8px; }
    .proc-step p { font-size: 13px; color: var(--muted); line-height: 1.65; }

    /* ── PRICING ── */
    .pricing-section { background: var(--white); }
    .pricing-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 22px; margin-top: 52px; }
    .price-card { border: 1.5px solid var(--border); border-radius: 12px; padding: 36px 28px; background: var(--white); transition: transform .25s, box-shadow .25s; position: relative; }
    .price-card:hover { transform: translateY(-4px); box-shadow: 0 16px 40px var(--shadow); }
    .price-card.featured { border-color: var(--green); background: var(--green); }
    .price-popular { position: absolute; top: -13px; left: 50%; transform: translateX(-50%); background: var(--green); color: var(--white); font-size: 11px; font-weight: 700; letter-spacing: 1px; text-transform: uppercase; padding: 4px 16px; border-radius: 30px; white-space: nowrap; }
    .price-card.featured .price-popular { background: var(--white); color: var(--green); }
    .price-tier { font-size: 11px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; color: var(--green); margin-bottom: 12px; }
    .price-card.featured .price-tier { color: rgba(255,255,255,.65); }
    .price-val { font-size: 48px; font-weight: 800; color: var(--text); line-height: 1; }
    .price-card.featured .price-val { color: var(--white); }
    .price-val sup { font-size: 20px; vertical-align: super; }
    .price-val span { font-size: 14px; font-weight: 400; color: var(--muted); }
    .price-card.featured .price-val span { color: rgba(255,255,255,.5); }
    .price-desc { font-size: 13px; color: var(--muted); margin: 10px 0 20px; line-height: 1.6; }
    .price-card.featured .price-desc { color: rgba(255,255,255,.6); }
    .price-sep { height: 1px; background: var(--border); margin-bottom: 20px; }
    .price-card.featured .price-sep { background: rgba(255,255,255,.15); }
    .price-feat { display: flex; align-items: center; gap: 9px; font-size: 13.5px; color: var(--text); margin-bottom: 11px; }
    .price-card.featured .price-feat { color: rgba(255,255,255,.8); }
    .price-feat::before { content: '✓'; color: var(--green); font-weight: 700; font-size: 13px; }
    .price-card.featured .price-feat::before { color: #86efac; }
    .price-btn { width: 100%; margin-top: 24px; padding: 13px; border-radius: 6px; font-family: 'Poppins', sans-serif; font-size: 14px; font-weight: 600; cursor: pointer; border: none; transition: .2s; }
    .price-btn-outline { background: transparent; color: var(--green); border: 2px solid var(--border); }
    .price-btn-outline:hover { border-color: var(--green); background: var(--green-pale); }
    .price-btn-white { background: var(--white); color: var(--green); }
    .price-btn-white:hover { background: var(--green-pale); }

    /* ── TESTIMONIALS ── */
    .testi-section { background: var(--off-white); }
    .testi-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin-top: 52px; }
    .testi-card { background: var(--white); border: 1.5px solid var(--border); border-radius: 12px; padding: 28px 24px; transition: border-color .2s, box-shadow .2s; }
    .testi-card:hover { border-color: var(--green); box-shadow: 0 8px 28px var(--shadow); }
    .testi-stars { color: #f59e0b; font-size: 14px; letter-spacing: 2px; margin-bottom: 14px; }
    .testi-text { font-size: 14px; color: var(--text); line-height: 1.75; margin-bottom: 22px; font-style: italic; }
    .testi-author { display: flex; align-items: center; gap: 12px; }
    .testi-av { width: 40px; height: 40px; border-radius: 50%; background: var(--green); display: flex; align-items: center; justify-content: center; font-size: 14px; font-weight: 700; color: var(--white); flex-shrink: 0; }
    .testi-name { font-size: 14px; font-weight: 700; color: var(--text); }
    .testi-role { font-size: 12px; color: var(--muted); margin-top: 2px; }

    /* ── FAQ ── */
    .faq-section { background: var(--white); }
    .faq-inner { display: grid; grid-template-columns: 1fr 1.4fr; gap: 72px; align-items: start; }
    .faq-left h2 { font-size: 38px; font-weight: 800; color: var(--text); line-height: 1.15; margin-bottom: 16px; }
    .faq-left h2 em { font-style: normal; color: var(--green); }
    .faq-left p { font-size: 14px; color: var(--muted); line-height: 1.75; margin-bottom: 28px; }
    .faq-cta-box { background: var(--green); border-radius: 10px; padding: 28px 24px; }
    .faq-cta-box h4 { font-size: 17px; font-weight: 700; color: var(--white); margin-bottom: 8px; }
    .faq-cta-box p { font-size: 13px; color: rgba(255,255,255,.65); line-height: 1.65; margin-bottom: 18px; }
    .faq-item { border-bottom: 1px solid var(--border); }
    .faq-q { display: flex; justify-content: space-between; align-items: center; padding: 18px 0; cursor: pointer; font-size: 14.5px; font-weight: 500; color: var(--text); transition: color .2s; gap: 16px; }
    .faq-q:hover { color: var(--green); }
    .faq-toggle { width: 28px; height: 28px; border-radius: 50%; border: 1.5px solid var(--border); background: transparent; font-size: 18px; cursor: pointer; display: flex; align-items: center; justify-content: center; color: var(--text); flex-shrink: 0; transition: background .2s, border-color .2s, color .2s; }
    .faq-toggle.open { background: var(--green); border-color: var(--green); color: var(--white); }
    .faq-a { font-size: 13.5px; color: var(--muted); line-height: 1.75; padding-bottom: 18px; }

    /* ── CTA STRIP ── */
    .cta-strip { background: var(--green); padding: 72px; display: flex; align-items: center; justify-content: space-between; gap: 40px; }
    .cta-strip h2 { font-size: 36px; font-weight: 800; color: var(--white); line-height: 1.15; max-width: 500px; }
    .cta-strip h2 em { font-style: normal; color: var(--green-pale); }
    .cta-strip-right { display: flex; flex-direction: column; gap: 10px; align-items: flex-end; flex-shrink: 0; }
    .cta-note { font-size: 12px; color: rgba(255,255,255,.5); text-align: right; }

    /* ── CONTACT ── */
    .contact-section { background: var(--off-white); }
    .contact-inner { display: grid; grid-template-columns: 1fr 1fr; gap: 72px; align-items: start; }
    .contact-left h2 { font-size: 38px; font-weight: 800; color: var(--text); line-height: 1.15; margin-bottom: 16px; }
    .contact-left h2 em { font-style: normal; color: var(--green); }
    .contact-left p { font-size: 14px; color: var(--muted); line-height: 1.75; margin-bottom: 32px; }
    .contact-info { display: flex; flex-direction: column; gap: 14px; margin-bottom: 32px; }
    .contact-row { display: flex; align-items: center; gap: 12px; font-size: 14px; color: var(--text); font-weight: 500; }
    .contact-icon { width: 38px; height: 38px; border-radius: 8px; background: var(--green-pale); display: flex; align-items: center; justify-content: center; font-size: 17px; flex-shrink: 0; }
    .promise-row { display: flex; align-items: center; gap: 10px; font-size: 13.5px; color: var(--muted); padding: 9px 0; border-bottom: 1px solid var(--border); }
    .promise-row::before { content: '✓'; color: var(--green); font-weight: 700; flex-shrink: 0; }
    .the-form { background: var(--white); border-radius: 12px; border: 1.5px solid var(--border); padding: 40px 36px; box-shadow: 0 6px 32px var(--shadow); }
    .the-form h3 { font-size: 22px; font-weight: 800; color: var(--text); margin-bottom: 24px; }
    .form-row2 { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
    .fg { margin-bottom: 16px; }
    .fg label { display: block; font-size: 11.5px; font-weight: 600; letter-spacing: .5px; text-transform: uppercase; color: var(--muted); margin-bottom: 6px; }
    .fg input, .fg select, .fg textarea { width: 100%; border: 1.5px solid var(--border); border-radius: 6px; padding: 12px 14px; font-family: 'Poppins', sans-serif; font-size: 13.5px; color: var(--text); background: var(--off-white); outline: none; transition: border-color .2s, background .2s; }
    .fg input:focus, .fg select:focus, .fg textarea:focus { border-color: var(--green); background: var(--white); }
    .fg textarea { min-height: 90px; resize: vertical; }
    .form-submit { width: 100%; margin-top: 6px; }

    /* ── FOOTER ── */
    footer { background: var(--green); }
    .footer-top { display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 48px; padding: 64px 72px 44px; border-bottom: 1px solid rgba(255,255,255,.1); }
    .foot-logo { font-size: 20px; font-weight: 800; color: var(--white); margin-bottom: 4px; }
    .foot-logo-tag { font-size: 9px; font-weight: 500; letter-spacing: 2px; text-transform: uppercase; color: rgba(255,255,255,.5); margin-bottom: 16px; }
    .foot-brand p { font-size: 13px; color: rgba(255,255,255,.5); line-height: 1.75; max-width: 270px; }
    .foot-badges { display: flex; gap: 8px; margin-top: 20px; flex-wrap: wrap; }
    .foot-badge { background: rgba(255,255,255,.1); border: 1px solid rgba(255,255,255,.15); border-radius: 5px; padding: 5px 12px; font-size: 11px; font-weight: 600; color: rgba(255,255,255,.55); letter-spacing: .5px; }
    .foot-col h4 { font-size: 11px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; color: rgba(255,255,255,.4); margin-bottom: 18px; }
    .foot-col ul { list-style: none; }
    .foot-col ul li { margin-bottom: 10px; }
    .foot-col ul li a { text-decoration: none; font-size: 13.5px; color: rgba(255,255,255,.6); transition: color .2s; }
    .foot-col ul li a:hover { color: var(--white); }
    .footer-bottom { padding: 20px 72px; display: flex; justify-content: space-between; align-items: center; }
    .footer-bottom p { font-size: 12px; color: rgba(255,255,255,.35); }
    .foot-socials { display: flex; gap: 10px; }
    .foot-soc { width: 34px; height: 34px; border-radius: 6px; background: rgba(255,255,255,.08); border: 1px solid rgba(255,255,255,.12); display: flex; align-items: center; justify-content: center; font-size: 14px; cursor: pointer; transition: background .2s; }
    .foot-soc:hover { background: rgba(255,255,255,.18); }

    @media (max-width: 960px) {
      .nav { padding: 0 20px; }
      .nav-links { display: none; }
      .hero { grid-template-columns: 1fr; }
      .hero-left { padding: 50px 24px; }
      .hero h1 { font-size: 36px; }
      .hero-right { min-height: 360px; padding: 40px 24px; }
      .section { padding: 60px 24px; }
      .svc-grid, .pricing-grid, .testi-grid, .process-grid { grid-template-columns: 1fr; }
      .process-grid::before { display: none; }
      .why-inner, .faq-inner, .contact-inner { grid-template-columns: 1fr; }
      .cta-strip { flex-direction: column; padding: 48px 24px; align-items: flex-start; }
      .cta-strip-right { align-items: flex-start; }
      .footer-top { grid-template-columns: 1fr; }
      .footer-bottom { flex-direction: column; gap: 14px; text-align: center; padding: 20px 24px; }
      .trust-bar { padding: 16px 24px; flex-wrap: wrap; }
      .hero-stats { flex-wrap: wrap; gap: 20px; }
    }
  `}</style>
);

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
  { icon: "📒", title: "Bookkeeping", desc: "Accurate, up-to-date records every month so you always know where your business stands financially.", items: ["Bank reconciliation", "Accounts payable & receivable", "Monthly reports"] },
  { icon: "📊", title: "Management Accounts", desc: "Clear monthly or quarterly reports that give you the insight to make confident business decisions.", items: ["P&L statements", "Cash flow reports", "Budget vs actuals"] },
  { icon: "🏛️", title: "Annual Accounts & Tax", desc: "Statutory accounts and corporation tax returns filed accurately and on time with HMRC.", items: ["Statutory accounts", "Corporation tax return", "Companies House filing"] },
  { icon: "📑", title: "VAT Returns", desc: "Making Tax Digital compliant VAT returns prepared and submitted every quarter without the stress.", items: ["MTD-compliant filing", "Quarterly submissions", "VAT registration support"] },
  // { icon: "💰", title: "Payroll", desc: "Fully managed payroll for your team — from weekly wages to monthly salaries and everything in between.", items: ["RTI submissions to HMRC", "Auto-enrolment pensions", "Payslips & P60s", "Director payroll"] },
  { icon: "🎯", title: "Self Assessment", desc: "Personal tax returns completed and submitted on time for directors, sole traders, and landlords.", items: ["Income tax return", "Capital gains tax", "Rental income"] },
];

const features = [
  // { icon: "🇬🇧", title: "UK-Qualified Accountants", desc: "Every member of our team is ACCA or AAT qualified and fully registered with HMRC." },
  { icon: "☁️", title: "Cloud Accounting", desc: "We work with Xero, QuickBooks and FreeAgent — your accounts accessible anytime, anywhere." },
  { icon: "⚡", title: "Fast, Friendly Support", desc: "Same-day responses as standard. Reach us by email, phone or WhatsApp." },
  // { icon: "🔒", title: "Secure & Confidential", desc: "GDPR-compliant processes and encrypted data handling protect your business information." },
];

const plans = [
  { tier: "Starter", price: "99", desc: "Great for sole traders and newly formed limited companies.", features: ["Bookkeeping (up to 100 txns/mo)", "Annual accounts & CT600", "Self assessment return", "Xero included", "Email support"], btn: "price-btn price-btn-outline", featured: false },
  { tier: "Growth", price: "199", desc: "The most popular choice for growing small businesses.", features: ["Bookkeeping (up to 300 txns/mo)", "Quarterly management accounts", "VAT returns (MTD)", "Payroll up to 5 employees", "Annual accounts & CT600", "Priority support"], btn: "price-btn price-btn-white", featured: true },
  { tier: "Pro", price: "349", desc: "For established businesses that need complete financial support.", features: ["Unlimited transactions", "Monthly management accounts", "VAT returns", "Payroll (unlimited)", "Virtual CFO — 2 hrs/month", "Annual accounts & CT600"], btn: "price-btn price-btn-outline", featured: false },
];

const testimonials = [
  { stars: 5, text: "NexGenZ sorted 12 months of backlog bookkeeping in under a week. The team is incredibly professional and always available. Highly recommend to any UK startup.", name: "Sarah Mitchell", role: "Founder, Bloom Creative Ltd", av: "SM" },
  { stars: 5, text: "Finally an accountant that actually explains things clearly. Our management accounts are always on time and the VAT submissions are handled without us lifting a finger.", name: "David Okafor", role: "Director, Okafor Consulting", av: "DO" },
  { stars: 5, text: "As a sole trader I was worried about costs, but the Starter plan is brilliant value. Everything is just taken care of — it's a huge weight off my shoulders.", name: "Emma Clarke", role: "Freelance Designer, Self-Employed", av: "EC" },
];

const faqs = [
  { q: "How do I get started with NexGenZ?", a: "Simply fill in our contact form or call us and we'll book a free 30-minute consultation. We'll understand your needs and set everything up within a few days — including migrating any existing data." },
  { q: "Which accounting software do you use?", a: "We primarily work with Xero, which is included in all our plans. We also support QuickBooks and FreeAgent if you already use one of those." },
  // { q: "Are you registered with HMRC as a tax agent?", a: "Yes — we are a registered HMRC agent and can deal with HMRC directly on your behalf, saving you time and stress." },
  { q: "Is there a minimum contract length?", a: "No long-term contracts. We work on a rolling monthly basis. We want you to stay because you love the service, not because you're tied in." },
  // { q: "What if I have overdue or messy accounts?", a: "No problem at all — we specialise in helping businesses catch up. We'll assess what's needed and give you a clear, no-surprise quote for any catch-up work." },
];

// ── MAIN ─────────────────────────────────────────────────────────────────────
export default function NexgenzLanding() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", company: "", service: "", message: "" });
  const [sent, setSent] = useState(false);
  const up = f => e => setForm({ ...form, [f]: e.target.value });

  return (
    <>
      <Styles />

      {/* NAV */}
      <nav className="nav">
        <div className="nav-logo">
          NEXGENZ
          <span>Accounting &amp; Tax Solutions</span>
        </div>
        <ul className="nav-links">
          {["Services", "Why Us", "How It Works", "Contact"].map(l => (
            <li key={l}><a href={`#${l.toLowerCase().replace(/ /g, "-")}`}>{l}</a></li>
          ))}
        </ul>
        <div className="nav-cta">
          <button className="btn-outline" style={{ padding: "9px 20px", fontSize: "13px" }}>Sign In</button>
          <button className="btn-green" style={{ padding: "10px 22px", fontSize: "13px" }} onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })}>Free Consultation</button>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-left">
          <div className="hero-badge fade-in">
            <span />&nbsp;UK Startup Accounting Specialists
          </div>
          <h1 className="fade-up d1">
            Simple, Reliable <em>Accounting</em> for UK Businesses.
          </h1>
          <p className="fade-up d2">
            We take care of your bookkeeping, tax, VAT so you can focus on growing your business. No jargon, no surprises — just expert support from a team that genuinely cares.
          </p>
          <div className="hero-btns fade-up d3">
            <button className="btn-green" onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })}>Get Started Free →</button>
            {/* <button className="btn-outline" onClick={() => document.getElementById("pricing").scrollIntoView({ behavior: "smooth" })}>View Pricing</button> */}
          </div>
          {/* <div className="hero-stats fade-up d4">
            {[["100+", "Clients Served"], ["98%", "Retention Rate"], ["Same Day", "Response Time"], ["ACCA", "Regulated"]].map(([n, l]) => (
              <div key={l}>
                <div className="h-stat-num">{n}</div>
                <div className="h-stat-label">{l}</div>
              </div>
            ))}
          </div> */}
        </div>

        <div className="hero-right">
          <div className="hero-card-wrap">
            {/* <div className="h-card fade-in d2">
              <div className="h-card-top">
                <div className="h-card-icon">📊</div>
                <span className="h-card-pill pill-green">↑ Up to date</span>
              </div>
              <div className="h-card-label">Monthly Revenue</div>
              <div className="h-card-val">£42,500</div>
              <div className="h-card-sub">March 2025 · Synced with Xero</div>
              <div className="h-bar"><div className="h-bar-fill" style={{ width: "78%" }} /></div>
            </div> */}

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

            {/* <div className="h-card fade-in d4" style={{ background: "rgba(255,255,255,.13)", border: "1px solid rgba(255,255,255,.2)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{ fontSize: 24 }}>✅</div>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 700, color: "#fff" }}>Tax return submitted</div>
                  <div style={{ fontSize: 12, color: "rgba(255,255,255,.5)" }}>Saved £1,840 in allowable expenses</div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <div className="trust-bar">
        <span className="trust-bar-label">We work with</span>
        <div className="trust-divider" />
        <div className="trust-items">
          {["ACCA Regulated", "HMRC Registered Agent", "Xero Partner", "QuickBooks Advisor", "MTD Ready", "GDPR Compliant"].map(t => (
            <span className="trust-item" key={t}>{t}</span>
          ))}
        </div>
      </div>

      {/* SERVICES */}
      <section className="section services-section" id="services">
        <div className="center">
          <div className="section-label">What We Do</div>
          <h2 className="section-title">Everything your business needs, <em>in one place.</em></h2>
          <p className="section-sub">From day-to-day bookkeeping to year-end accounts and tax returns — we handle it all so you don't have to.</p>
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

      {/* WHY US */}
      <section className="section why-section" id="why-us">
        <div className="why-inner">
          <div className="why-left">
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", color: "rgba(255,255,255,.5)", marginBottom: 14 }}>Why NexGenZ</div>
            <h2>Built for <em>modern UK businesses.</em></h2>
            <p>We're a new kind of accounting firm — one that combines real expertise with technology and genuine availability. No waiting weeks for a reply. No confusing jargon. Just clear, reliable support.</p>
            <div className="why-stats-row">
              {[["4hr", "Avg Response"]].map(([n, l]) => (
                <div className="why-stat" key={l}>
                  <div className="why-stat-num">{n}</div>
                  <div className="why-stat-label">{l}</div>
                </div>
              ))}
            </div>
            <button className="btn-white" onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })}>Book Free Consultation →</button>
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

      {/* HOW IT WORKS */}
      <section className="section process-section" id="how-it-works">
        <div className="center">
          <div className="section-label">How It Works</div>
          <h2 className="section-title">Up and running <em>in days.</em></h2>
          <p className="section-sub">Our simple onboarding process means your books are sorted quickly with minimal effort from you.</p>
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

      {/* PRICING */}
      {/* <section className="section pricing-section" id="pricing">
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
              <button className={p.btn} onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })}>Get Started</button>
            </div>
          ))}
        </div>
        <p style={{ textAlign: "center", marginTop: 28, fontSize: 13, color: "var(--muted)" }}>All prices exclude VAT &nbsp;·&nbsp; No contracts &nbsp;·&nbsp; Cancel anytime</p>
      </section> */}

      {/* TESTIMONIALS */}
      {/* <section className="section testi-section">
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
      </section> */}

      {/* FAQ */}
      <section className="section faq-section">
        <div className="faq-inner">
          <div className="faq-left">
            <div className="section-label">FAQ</div>
            <h2>Got <em>questions?</em></h2>
            <p>Here are the most common things people ask before getting started. If you don't see your question, just get in touch.</p>
            <div className="faq-cta-box">
              <h4>Still not sure?</h4>
              <p>Book a free 30-minute call with one of our accountants. No sales pitch — just straightforward advice.</p>
              <button className="btn-white" style={{ fontSize: 13, padding: "10px 20px" }} onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })}>Book Free Call →</button>
            </div>
          </div>
          <div>
            {faqs.map(f => <FaqItem key={f.q} {...f} />)}
          </div>
        </div>
      </section>

      {/* CTA STRIP */}
      <div className="cta-strip">
        <h2>Ready to get your accounts <em>sorted?</em></h2>
        <div className="cta-strip-right">
          <button className="btn-white" style={{ fontSize: 15, padding: "15px 36px" }} onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })}>Start Free Consultation →</button>
          <p className="cta-note">No credit card required &nbsp;·&nbsp; No contracts &nbsp;·&nbsp; Cancel anytime</p>
        </div>
      </div>

      {/* CONTACT */}
      <section className="section contact-section" id="contact">
        <div className="contact-inner">
          <div className="contact-left">
            <div className="section-label">Get In Touch</div>
            <h2>Let's talk about your <em>business.</em></h2>
            <p>Fill in the form and we'll be in touch within 4 business hours. Or call us directly — we're always happy to chat.</p>
            <div className="contact-info">
              {[["📍", "London & Remote, United Kingdom"], ["📞", "0330 123 4567"], ["✉️", "info@nexgenz.co.uk"], ["🕐", "Mon–Fri, 9am–6pm GMT"]].map(([ic, txt]) => (
                <div className="contact-row" key={txt}>
                  <div className="contact-icon">{ic}</div>
                  {txt}
                </div>
              ))}
            </div>
            {/* {["First month completely free", "Response within 4 business hours", "No contracts or lock-in", "GDPR-compliant & secure"].map(p => (
              <div className="promise-row" key={p}>{p}</div>
            ))} */}
          </div>

          <div className="the-form">
            {sent ? (
              <div style={{ textAlign: "center", padding: "48px 0" }}>
                <div style={{ fontSize: 52, marginBottom: 16 }}>✅</div>
                <h3 style={{ fontSize: 24, fontWeight: 800, color: "var(--green)", marginBottom: 10 }}>Message Sent!</h3>
                <p style={{ color: "var(--muted)", fontSize: 14, lineHeight: 1.7 }}>We'll be in touch within 4 business hours. Check your email for a confirmation.</p>
              </div>
            ) : (
              <>
                <h3>Book Your Free Consultation</h3>
                <div className="form-row2">
                  <div className="fg"><label>Full Name</label><input placeholder="Jane Smith" value={form.name} onChange={up("name")} /></div>
                  <div className="fg"><label>Email</label><input type="email" placeholder="jane@company.co.uk" value={form.email} onChange={up("email")} /></div>
                </div>
                <div className="form-row2">
                  <div className="fg"><label>Phone</label><input placeholder="07700 900000" value={form.phone} onChange={up("phone")} /></div>
                  <div className="fg"><label>Company</label><input placeholder="Your Company Ltd" value={form.company} onChange={up("company")} /></div>
                </div>
                <div className="fg">
                  <label>Service Required</label>
                  <select value={form.service} onChange={up("service")}>
                    <option value="">Select a service...</option>
                    {["Bookkeeping", "Management Accounts", "Annual Accounts & Tax", "VAT Returns", "Self Assessment", "Full Package"].map(s => <option key={s}>{s}</option>)}
                  </select>
                </div>
                <div className="fg"><label>Message (optional)</label><textarea placeholder="Tell us a bit about your business and what you need help with..." value={form.message} onChange={up("message")} /></div>
                <button className="btn-green form-submit" onClick={() => form.name && form.email ? setSent(true) : null}>Send Message →</button>
                <p style={{ fontSize: 12, color: "var(--muted)", marginTop: 10 }}>We respect your privacy and will never share your details.</p>
              </>
            )}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-top">
          <div className="foot-brand">
            <div className="foot-logo">NEXGENZ</div>
            <div className="foot-logo-tag">Accounting &amp; Tax Solutions</div>
            <p>Expert bookkeeping, accounting and tax services for UK startups and small businesses. Friendly, fast and fully qualified.</p>
            <div className="foot-badges">
              {["ACCA", "HMRC Agent", "Xero Partner", "MTD Ready"].map(b => <div className="foot-badge" key={b}>{b}</div>)}
            </div>
          </div>
          <div className="foot-col">
            <h4>Services</h4>
            <ul>
              {["Bookkeeping", "Management Accounts", "Annual Accounts", "VAT Returns", "Self Assessment"].map(s => <li key={s}><a href="#">{s}</a></li>)}
            </ul>
          </div>
          <div className="foot-col">
            <h4>Company</h4>
            <ul>
              {["About Us", "Our Team", "Pricing", "Blog", "Careers", "Refer a Friend"].map(s => <li key={s}><a href="#">{s}</a></li>)}
            </ul>
          </div>
          <div className="foot-col">
            <h4>Contact</h4>
            <ul>
              <li><a href="#">📍 London, United Kingdom</a></li>
              <li><a href="#">📞 0330 123 4567</a></li>
              <li><a href="#">✉️ hello@nexgenz.co.uk</a></li>
              <li><a href="#">💬 WhatsApp Chat</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2025 NexGenZ Accounting &amp; Tax Solutions Ltd · Registered in England &amp; Wales · Regulated by ACCA</p>
          <div className="foot-socials">
            {["💼", "𝕏", "📘", "📸"].map((ic, i) => <div className="foot-soc" key={i}>{ic}</div>)}
          </div>
        </div>
      </footer>
    </>
  );
}