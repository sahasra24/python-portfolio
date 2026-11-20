/* =========================================================
   Sahasra Reddy — portfolio interactions
   ========================================================= */
(function () {
  const EMAIL = "sahasrareddy024@gmail.com";
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------------- interactive REPL ---------------- */
  const body = document.getElementById("replBody");
  const form = document.getElementById("replForm");
  const input = document.getElementById("replInput");

  const ME = {
    "me.name": `'Sahasra Reddy'`,
    "me.role": `'Python Software Engineer'`,
    "me.about": `"Python engineer with 4+ years building backend services, REST APIs\n and test automation across finance (post-trade), restaurant ops\n and product engineering. M.S. CS @ UNC Charlotte, 4.0 GPA."`,
    "me.skills": `{\n  'languages': ['Python', 'SQL', 'TypeScript', 'Java', 'Go'],\n  'apis':      ['FastAPI', 'Django', 'DRF', 'JWT', 'RBAC'],\n  'data':      ['Pandas', 'PostgreSQL', 'MongoDB', 'Redis'],\n  'async':     ['Celery', 'SQS', 'SNS'],\n  'testing':   ['PyTest', 'Playwright', 'Karate', 'HyperExecute'],\n  'cloud':     ['AWS', 'Docker', 'Kubernetes', 'Jenkins', 'Harness'],\n  'ai':        ['LLM', 'RAG', 'pgvector'],\n}`,
    "me.experience": `[\n  ('Vision Square IT Solutions', 'Software Engineer', '2026–now'),\n  ('Charles River', 'SDE Intern · Post-Trade', '2026'),\n  ('Panda Restaurant Group', 'Software Engineer', '2024–2025'),\n  ('Alcovex Product Studio', 'Software Developer', '2022–2024'),\n]`,
    "me.projects": `['ai_contract_analyzer', 'playwright_framework',\n 'fake_delivery_detection', 'website_monitor']`,
    "me.education": `'M.S. Computer Science — UNC Charlotte (May 2026) · GPA 4.0'`,
    "me.certs": `['Generative AI — Google', 'Cloud Digital Leader — Google Cloud',\n 'MongoDB for SQL Professionals', 'Oracle Certified Professional, Java SE']`,
    "me.contact": `'${EMAIL}'`,
    "me.is_hiring_ready()": `True`,
    "me.stack[:5]": `['FastAPI', 'Django', 'PyTest', 'Pandas', 'AWS']`,
  };

  const HELP = `Available commands:
  me.about        me.skills      me.experience
  me.projects     me.education   me.certs
  me.contact      me.is_hiring_ready()
  import this     clear()        2 ** 10
…or just ask a question in plain English — PyBot will answer.`;

  const ZEN = `The Zen of Sahasra
  Readable APIs are better than clever ones.
  Idempotent is better than "it worked once".
  Tests are better than hope.
  Reconcile the data before you trust it.
  If it's hard to deploy, automate it.
  Ship it, measure it, improve it.`;

  function line(text, cls) {
    const el = document.createElement("div");
    el.className = cls;
    el.textContent = text;
    body.appendChild(el);
    body.scrollTop = body.scrollHeight;
  }

  function evaluate(raw) {
    const cmd = raw.trim();
    const key = cmd.replace(/\s+/g, "");
    if (!cmd) return null;
    if (key === "help()" || key === "help") return [HELP, "out info"];
    if (key === "clear()" || key === "cls" || key === "clear") { body.innerHTML = ""; return null; }
    if (cmd === "import this") return [ZEN, "out info"];
    if (key === "exit()" || key === "quit()") return ["Nice try 🐍 — there's no exit from a good portfolio. Scroll down instead!", "out info"];
    if (key === "me" ) return ["<SahasraReddy: Python Software Engineer> — try me.skills", "out"];
    if (ME[key] !== undefined) return [ME[key], "out"];
    if (key === "me.contact()" || key === "me.hire()") { window.location.href = `mailto:${EMAIL}`; return [`Opening your mail client → ${EMAIL}`, "out"]; }
    if (key === "projects()" || key === "runprojects()") { document.getElementById("projects").scrollIntoView(); return ["Running test_projects.py… ✓ 4 passed", "out"]; }

    const print = cmd.match(/^print\((['"])(.*)\1\)$/);
    if (print) return [print[2], "out info"];

    // safe arithmetic only: digits, whitespace and operators
    if (/^[\d\s+\-*/().%]+$/.test(cmd) && /\d/.test(cmd)) {
      try {
        const v = Function(`"use strict"; return (${cmd.replace(/\*\*/g, "**")});`)();
        if (typeof v === "number" && isFinite(v)) return [String(v), "out"];
      } catch (_) { /* fall through */ }
      return ["SyntaxError: invalid syntax", "out err"];
    }

    if (/^me\.\w+/.test(key)) return [`AttributeError: 'SahasraReddy' object has no attribute '${key.slice(3)}' — try help()`, "out err"];

    // natural language → PyBot
    if (window.PyBot) return ["# PyBot: " + window.PyBot.toPlain(window.PyBot.answer(cmd)), "out info"];
    return [`NameError: name '${cmd}' is not defined`, "out err"];
  }

  const history = [];
  let hIdx = 0;

  function run(cmd) {
    line(cmd, "in");
    const res = evaluate(cmd);
    if (res) line(res[0], res[1]);
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const cmd = input.value;
    if (cmd.trim()) { history.push(cmd); hIdx = history.length; }
    input.value = "";
    run(cmd);
  });
  input.addEventListener("keydown", (e) => {
    if (e.key === "ArrowUp" && hIdx > 0) { input.value = history[--hIdx]; e.preventDefault(); }
    if (e.key === "ArrowDown") { hIdx = Math.min(history.length, hIdx + 1); input.value = history[hIdx] || ""; e.preventDefault(); }
  });
  body.addEventListener("click", () => input.focus());

  // auto-typed intro
  const intro = [
    ["from portfolio import SahasraReddy", null],
    ["me = SahasraReddy()", null],
    ["me.role", ["'Python Software Engineer'", "out"]],
    ["me.stack[:5]", ["['FastAPI', 'Django', 'PyTest', 'Pandas', 'AWS']", "out"]],
    ["me.is_hiring_ready()", ["True", "out"]],
  ];
  const outro = () => line("# Your turn ↓ type help() or ask anything", "out info");

  async function typeIntro() {
    if (reduceMotion) {
      intro.forEach(([c, o]) => { line(c, "in"); if (o) line(o[0], o[1]); });
      return outro();
    }
    for (const [c, o] of intro) {
      const el = document.createElement("div");
      el.className = "in";
      body.appendChild(el);
      for (let i = 1; i <= c.length; i++) {
        el.textContent = c.slice(0, i);
        await new Promise((r) => setTimeout(r, 28 + Math.random() * 30));
      }
      await new Promise((r) => setTimeout(r, 220));
      if (o) line(o[0], o[1]);
      await new Promise((r) => setTimeout(r, 260));
    }
    outro();
  }
  typeIntro();

  /* ---------------- nav: active tab + mobile menu ---------------- */
  const tabs = [...document.querySelectorAll(".tab")];
  const menuBtn = document.querySelector(".menu-btn");
  const tabsWrap = document.querySelector(".tabs");
  menuBtn.addEventListener("click", () => {
    const open = tabsWrap.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", open);
  });
  tabs.forEach((t) => t.addEventListener("click", () => tabsWrap.classList.remove("open")));

  const sections = tabs.map((t) => document.querySelector(t.getAttribute("href"))).filter(Boolean);
  const navObs = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (en.isIntersecting) {
        tabs.forEach((t) => t.classList.toggle("active", t.getAttribute("href") === "#" + en.target.id));
      }
    });
  }, { rootMargin: "-45% 0px -50% 0px" });
  sections.forEach((s) => navObs.observe(s));

  /* ---------------- scroll reveal ---------------- */
  const revObs = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (en.isIntersecting) { en.target.classList.add("in"); revObs.unobserve(en.target); }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll(".reveal").forEach((el, i) => {
    el.style.transitionDelay = (i % 4) * 70 + "ms";
    revObs.observe(el);
  });

  /* ---------------- stat counters ---------------- */
  const cntObs = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (!en.isIntersecting) return;
      const el = en.target, end = +el.dataset.count, suf = el.dataset.suffix || "";
      cntObs.unobserve(el);
      if (reduceMotion) { el.textContent = end + suf; return; }
      const t0 = performance.now(), dur = 1200;
      (function tick(now) {
        const p = Math.min(1, (now - t0) / dur);
        el.textContent = Math.round(end * (1 - Math.pow(1 - p, 3))) + suf;
        if (p < 1) requestAnimationFrame(tick);
      })(t0);
    });
  }, { threshold: 0.6 });
  document.querySelectorAll("[data-count]").forEach((el) => cntObs.observe(el));

  /* ---------------- contact form → mailto ---------------- */
  document.getElementById("contactForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const f = new FormData(e.target);
    const subject = encodeURIComponent(`Portfolio inquiry from ${f.get("name")}`);
    const bodyTxt = encodeURIComponent(`${f.get("message")}\n\n— ${f.get("name")} (${f.get("email")})`);
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${bodyTxt}`;
  });

  document.getElementById("year").textContent = new Date().getFullYear();
})();
