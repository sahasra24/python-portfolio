/* =========================================================
   PyBot — a resume-aware assistant for Sahasra Reddy
   Runs fully in the browser: no API keys, no backend.
   Edit KNOWLEDGE below to change what PyBot knows.
   ========================================================= */
(function () {
  const EMAIL = "sahasrareddy024@gmail.com";

  const KNOWLEDGE = [
    {
      id: "greet",
      keys: ["hi", "hello", "hey", "hola", "namaste", "yo", "good morning", "good evening", "sup"],
      answer: `Hey there! 👋 I'm <b>PyBot</b>. Ask me anything about Sahasra Reddy — skills, experience, projects, education, or how to get in touch.`,
    },
    {
      id: "who",
      keys: ["who", "about", "introduce", "summary", "yourself", "sahasra", "tell me", "overview", "background"],
      answer: `<b>Sahasra Reddy</b> is a Python Software Engineer with 4+ years building backend services, REST APIs and test automation across <b>Financial Services (post-trade)</b>, <b>Restaurant Operations</b> and <b>Product Engineering</b>. Sahasra holds an M.S. in Computer Science from UNC Charlotte with a 4.0 GPA and is currently a Software Engineer at Vision Square IT Solutions.`,
    },
    {
      id: "skills",
      keys: ["skill", "stack", "tech", "technologies", "tools", "know", "languages", "good at", "expertise", "proficient"],
      answer: `Sahasra's toolbox:<ul>
        <li><b>Languages:</b> Python, SQL, TypeScript, JavaScript, Java, Go</li>
        <li><b>Frameworks:</b> FastAPI, Django, Django REST Framework</li>
        <li><b>Data:</b> Pandas, PostgreSQL, MongoDB, ETL, reconciliation</li>
        <li><b>Async:</b> Celery, Redis, Amazon SQS/SNS</li>
        <li><b>Testing:</b> PyTest, Playwright, Karate, HyperExecute</li>
        <li><b>Cloud/DevOps:</b> AWS, Docker, Kubernetes, Jenkins, Harness</li>
        <li><b>AI:</b> LLM / RAG apps, pgvector, Claude Code</li></ul>`,
    },
    {
      id: "python",
      keys: ["python", "fastapi", "django", "drf", "rest framework", "flask", "backend", "api", "apis", "rest api", "jwt", "rbac"],
      answer: `Python is Sahasra's main language — building REST APIs with <b>FastAPI</b>, <b>Django</b> and <b>Django REST Framework</b> — with JWT auth, RBAC, input validation, pagination, consistent error responses, transactional integrity and idempotent processing. APIs are documented with Swagger/OpenAPI.`,
    },
    {
      id: "experience",
      keys: ["experience", "work", "job", "jobs", "career", "companies", "worked", "employment", "history", "years"],
      answer: `Career, most recent first:<ul>
        <li><b>Vision Square IT Solutions</b> — Software Engineer (Sep 2026 – Present)</li>
        <li><b>Charles River</b> — SDE Intern, Post-Trade Systems (Jan – Jun 2026)</li>
        <li><b>Panda Restaurant Group</b> — Software Engineer (Oct 2024 – Nov 2025)</li>
        <li><b>Alcovex Product Studio</b> — Software Developer (Oct 2022 – Jun 2024)</li>
        <li><b>Alcovex Product Studio</b> — Developer Intern (Jun – Oct 2022)</li></ul>Ask me about any one of them!`,
    },
    {
      id: "vision",
      keys: ["vision", "square", "current", "currently", "now", "present", "harness", "hyperexecute", "karate"],
      answer: `At <b>Vision Square IT Solutions</b> (Sep 2026 – Present, remote) Sahasra builds FastAPI/Django services, owns test automation (PyTest, Karate, Playwright on HyperExecute), runs CI/CD in Jenkins & Harness with release management, migrated Dockerized services to clustered Kubernetes, and wires up SQS/SNS messaging with retries and dead-letter queues.`,
    },
    {
      id: "charles",
      keys: ["charles", "river", "trade", "trading", "finance", "financial", "fintech", "reconcil", "post-trade", "intern", "internship", "breaks"],
      answer: `At <b>Charles River</b> (Post-Trade Systems, Jan – Jun 2026) Sahasra built Python services that ingest, transform and <b>reconcile trade records</b> between internal and external sources — matching with Pandas, flagging breaks, tracing mismatches with SQL, and handling partial fills, duplicate messages and late-arriving trades idempotently. Matching rules were protected with PyTest.`,
    },
    {
      id: "panda",
      keys: ["panda", "restaurant", "schedul", "shift", "celery", "redis", "kiosk", "kds"],
      answer: `At <b>Panda Restaurant Group</b> (Oct 2024 – Nov 2025) Sahasra built a Django staff-scheduling app that auto-assigns shifts:<ul>
        <li>⬇ <b>65%</b> manual scheduling effort, ~12 hrs/week saved per manager</li>
        <li>JWT + RBAC, idempotency keys to stop double-booking</li>
        <li>⬇ <b>35%</b> API response time via query tuning</li>
        <li>Celery + Redis background jobs</li>
        <li><b>90%</b> PyTest coverage, 40+ bugs caught pre-release</li>
        <li>⬇ <b>40%</b> deployment time</li></ul>`,
    },
    {
      id: "alcovex",
      keys: ["alcovex", "product studio", "india", "first job", "s3", "full stack", "full-stack", "mentor"],
      answer: `At <b>Alcovex Product Studio</b> (Jun 2022 – Jun 2024) Sahasra started as an intern and joined full-time via campus recruitment, then shipped full-stack features (Django + React/TypeScript), implemented JWT/RBAC, built a secure S3 upload service with least-privilege IAM, supported releases on EC2/EKS/RDS, sped up APIs with caching and SQL tuning, and mentored new interns.`,
    },
    {
      id: "projects",
      keys: ["project", "projects", "built", "portfolio", "side", "github", "repo", "showcase"],
      answer: `Featured projects:<ul>
        <li><b>AI Contract Analyzer</b> — RAG over contracts with FastAPI + pgvector, answers with citations</li>
        <li><b>Playwright Test Framework</b> — POM, parallel runs, retries, traces, Jenkins reports</li>
        <li><b>Fake Delivery Detection</b> — hash signatures + QR verification, MongoDB audit trail</li>
        <li><b>Website Monitor</b> — Go service for uptime & response times</li></ul>`,
    },
    {
      id: "ai",
      keys: ["ai", "llm", "rag", "gpt", "claude", "ml", "machine learning", "embedding", "vector", "pgvector", "contract", "genai", "generative"],
      answer: `Sahasra builds <b>LLM / RAG</b> applications. The <b>AI Contract Analyzer</b> parses, chunks and embeds contracts into PostgreSQL <b>pgvector</b>, answers questions with clause-level citations, and extracts parties, dates, payment terms and renewals into structured JSON — all behind FastAPI, tested with PyTest and shipped in Docker. Sahasra also uses Claude Code daily and holds Google's Generative AI certification.`,
    },
    {
      id: "testing",
      keys: ["test", "testing", "pytest", "playwright", "qa", "automation", "coverage", "e2e", "quality"],
      answer: `Testing is a real strength: <b>PyTest</b> (unit/integration, 90% coverage at Panda), <b>Playwright</b> UI tests, <b>Karate</b> BDD API tests, and parallel runs on <b>HyperExecute</b>. Sahasra also built a reusable Playwright + PyTest framework with the Page Object Model, retries, and screenshots/traces on failure.`,
    },
    {
      id: "cloud",
      keys: ["aws", "cloud", "docker", "kubernetes", "k8s", "devops", "ci", "cd", "cicd", "jenkins", "deploy", "eks", "ec2", "sqs", "sns", "infra"],
      answer: `Cloud & DevOps: <b>AWS</b> (EC2, EKS, S3, IAM, RDS, SQS, SNS), <b>Docker</b>, <b>Kubernetes</b> (clustered deployments with health checks & resource limits), and CI/CD in <b>Jenkins</b> and <b>Harness</b> with full release management — versioning, multi-env deploys and rollback plans.`,
    },
    {
      id: "data",
      keys: ["data", "pandas", "sql", "postgres", "postgresql", "database", "mongodb", "etl", "query", "queries"],
      answer: `Data work: <b>Pandas</b> and <b>SQL</b> for validation and reconciliation (matching high-volume trade records and flagging breaks), <b>PostgreSQL</b> with ORM models, migrations and tuned indexes, plus <b>MongoDB</b> and Redis.`,
    },
    {
      id: "frontend",
      keys: ["frontend", "front end", "react", "angular", "typescript", "javascript", "ui", "java", "spring", "go", "golang"],
      answer: `Beyond Python, Sahasra is full-stack: <b>React</b>, <b>Angular</b> and <b>TypeScript</b> front ends consuming Python APIs, and also works in <b>Java (Spring Boot)</b> (Oracle Certified Professional) and <b>Go</b>.`,
    },
    {
      id: "education",
      keys: ["education", "degree", "study", "studied", "university", "college", "masters", "master", "ms", "unc", "charlotte", "gpa", "school"],
      answer: `🎓 <b>M.S. in Computer Science</b>, University of North Carolina at Charlotte (May 2026) with a <b>4.0 / 4.0 GPA</b>. Coursework: Algorithms & Data Structures, Database Systems, Software System Design.`,
    },
    {
      id: "certs",
      keys: ["cert", "certs", "certification", "certifications", "certified", "certificate", "oracle", "ocp", "google"],
      answer: `Certifications:<ul>
        <li>Generative AI — Google</li>
        <li>Cloud Digital Leader — Google Cloud</li>
        <li>MongoDB for SQL Professionals — MongoDB</li>
        <li>Oracle Certified Professional, Java SE Developer</li></ul>`,
    },
    {
      id: "contact",
      keys: ["contact", "email", "mail", "reach", "connect", "linkedin", "phone", "message", "talk", "get in touch"],
      answer: `The best way is email: <a href="mailto:${EMAIL}">${EMAIL}</a>. You can also use the contact form at the bottom of the page — <a href="#contact">jump there</a>.`,
    },
    {
      id: "hire",
      keys: ["hire", "hiring", "available", "availability", "open", "role", "opportunit", "why", "should we", "fit", "relocate", "remote", "visa"],
      answer: `Sahasra is open to <b>Python, backend and test-automation</b> roles. Why Sahasra is a strong fit: ships production APIs with security and idempotency baked in, tests everything, owns CI/CD and releases, and has domain experience in finance and operations. Reach out at <a href="mailto:${EMAIL}">${EMAIL}</a> to discuss specifics like location or start date.`,
    },
    {
      id: "resume",
      keys: ["resume", "cv", "download", "pdf"],
      answer: `You can <a href="resume.pdf" download>download the resume here</a>.`,
    },
    {
      id: "thanks",
      keys: ["thanks", "thank you", "thx", "great", "awesome", "cool", "nice", "bye"],
      answer: `Happy to help! 🐍 If you'd like to talk to Sahasra directly: <a href="mailto:${EMAIL}">${EMAIL}</a>`,
    },
  ];

  const FALLBACK = `Hmm, I'm not sure about that one. 🤔 Try asking about <b>skills</b>, <b>experience</b>, <b>projects</b>, <b>AI/RAG</b>, <b>testing</b>, <b>education</b> or <b>contact</b> — or email Sahasra at <a href="mailto:${EMAIL}">${EMAIL}</a>.`;

  function normalize(s) {
    return " " + s.toLowerCase().replace(/[^a-z0-9+.\-/ ]/g, " ").replace(/\s+/g, " ").trim() + " ";
  }

  function score(text, entry) {
    let s = 0;
    for (const k of entry.keys) {
      // short keys must match whole words; longer ones may be prefixes ("schedul" → scheduling)
      if (k.length <= 3) {
        if (text.includes(" " + k + " ")) s += 1;
      } else if (text.includes(" " + k)) {
        s += k.includes(" ") ? 2 : 1.5;
      }
    }
    return s;
  }

  // broad intents lose ties to specific ones ("python projects" → projects, not who)
  const GENERIC = new Set(["greet", "who", "experience", "skills", "thanks"]);

  function answer(question) {
    const text = normalize(question);
    let best = null, bestScore = 0;
    for (const entry of KNOWLEDGE) {
      const sc = score(text, entry) * (GENERIC.has(entry.id) ? 0.5 : 1);
      if (sc > bestScore) { best = entry; bestScore = sc; }
    }
    return best ? best.answer : FALLBACK;
  }

  function toPlain(html) {
    const d = document.createElement("div");
    d.innerHTML = html.replace(/<li>/g, "\n  • ").replace(/<\/ul>/g, "\n");
    return d.textContent.replace(/\n\s*\n/g, "\n").trim();
  }

  window.PyBot = { answer, toPlain };

  /* ---------------- chat widget UI ---------------- */
  const fab = document.getElementById("botFab");
  const panel = document.getElementById("bot");
  const close = document.getElementById("botClose");
  const msgs = document.getElementById("botMsgs");
  const form = document.getElementById("botForm");
  const input = document.getElementById("botInput");
  const chips = document.getElementById("botChips");
  if (!fab) return;

  const SUGGESTIONS = ["Who is Sahasra?", "Top skills", "Experience", "AI / RAG work", "Projects", "Why hire Sahasra?", "Contact"];
  let greeted = false;

  function addMsg(html, who) {
    const el = document.createElement("div");
    el.className = "msg " + (who === "user" ? "user-m" : "bot-m");
    if (who === "user") el.textContent = html; else el.innerHTML = html;
    msgs.appendChild(el);
    msgs.scrollTop = msgs.scrollHeight;
    return el;
  }

  function botReply(q) {
    const t = addMsg('<span class="typing"><i></i><i></i><i></i></span>', "bot");
    const reply = answer(q);
    setTimeout(() => {
      t.innerHTML = reply;
      msgs.scrollTop = msgs.scrollHeight;
    }, 450 + Math.min(reply.length, 600));
  }

  function ask(q) {
    if (!q.trim()) return;
    addMsg(q, "user");
    botReply(q);
  }

  SUGGESTIONS.forEach((s) => {
    const b = document.createElement("button");
    b.type = "button"; b.className = "chip"; b.textContent = s;
    b.addEventListener("click", () => ask(s));
    chips.appendChild(b);
  });

  function open() {
    panel.hidden = false;
    fab.classList.add("seen");
    fab.setAttribute("aria-expanded", "true");
    if (!greeted) {
      greeted = true;
      addMsg(`Hi! I'm <b>PyBot</b> 🐍 — Sahasra's portfolio assistant. Ask me about skills, experience, projects or how to get in touch.`, "bot");
    }
    setTimeout(() => input.focus(), 50);
  }
  function hide() { panel.hidden = true; fab.setAttribute("aria-expanded", "false"); }

  fab.addEventListener("click", () => (panel.hidden ? open() : hide()));
  close.addEventListener("click", hide);
  document.addEventListener("keydown", (e) => { if (e.key === "Escape" && !panel.hidden) hide(); });
  msgs.addEventListener("click", (e) => { if (e.target.matches('a[href^="#"]')) hide(); });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const q = input.value; input.value = "";
    ask(q);
  });

  window.PyBot.open = open;
  window.PyBot.ask = (q) => { open(); ask(q); };
})();
