(function () {
  "use strict";

  const WA = (msg) =>
    `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(msg)}`;

  const $  = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

  // ---------- Text injection ----------
  function fillText() {
    $("[data-site='topbar']").textContent = SITE.text.topbar;

    const t = SITE.text;
    set("hero.eyebrow",    t.hero.eyebrow);
    setHTML("hero.title",  t.hero.title);
    set("hero.subtitle",   t.hero.subtitle);

    set("collection.eyebrow", t.collection.eyebrow);
    setHTML("collection.title", t.collection.title);
    set("collection.note",    t.collection.note);

    set("atelier.eyebrow", t.atelier.eyebrow);
    setHTML("atelier.title", t.atelier.title);
    set("atelier.body",    t.atelier.body);
    set("atelier.caption", t.atelier.caption);

    set("patterns.eyebrow", t.patterns.eyebrow);
    setHTML("patterns.title", t.patterns.title);
    set("patterns.note",    t.patterns.note);

    set("bespoke.eyebrow", t.bespoke.eyebrow);
    setHTML("bespoke.title", t.bespoke.title);
    set("bespoke.body",    t.bespoke.body);
    set("bespoke.note",    t.bespoke.note);

    set("footer.tagline",  t.footer.tagline);

    // Hero stats
    $("[data-site='hero.stats']").innerHTML = t.hero.stats
      .map((s, i) =>
        `${i ? '<span class="vline"></span>' : ""}
         <div><p class="stat-value">${s.value}</p>
              <p class="stat-label">${s.label}</p></div>`
      ).join("");

    // Steps
    $("[data-steps]").innerHTML = t.atelier.steps
      .map(s => `
        <div class="step">
          <span class="step-n">${s.n}</span>
          <h3>${s.title}</h3>
          <p>${s.text}</p>
        </div>`).join("");

    // WhatsApp links
    $$("[data-wa]").forEach(a => {
      const key = a.dataset.wa;
      const msgs = {
        header:  "Hello ZELLART, I have a question.",
        mobile:  "Hello ZELLART, I have a question.",
        atelier: "Hello ZELLART, I would like to ask about the craft.",
        bespoke: "Hello ZELLART, I would like to begin a bespoke project.",
        footer:  "Hello ZELLART, I have a question."
      };
      a.href = WA(msgs[key] || msgs.header);
    });
  }

  function set(key, value) {
    const el = $(`[data-site='${key}']`);
    if (el) el.textContent = value;
  }
  function setHTML(key, value) {
    const el = $(`[data-site='${key}']`);
    if (el) el.innerHTML = value;
  }

  // ---------- Products ----------
  let activeFilter = "All";

  function renderProducts() {
    const grid = $("[data-products]");
    const list = SITE.products.filter(
      p => activeFilter === "All" || p.category === activeFilter
    );

    grid.innerHTML = list.map((p, i) => {
      const msg = `Hello ZELLART, I would like to ask about ${p.name}.`;
      return `
        <article class="product reveal ${i % 3 === 1 ? "reveal-delay-1" : i % 3 === 2 ? "reveal-delay-2" : ""}">
          <a href="${WA(msg)}" target="_blank" rel="noreferrer" class="product-link group">
            <div class="image-wrap product-image">
              <img src="${p.image}" alt="${p.name}, ${p.type}" loading="lazy" />
              <span class="product-tag">${p.type}</span>
              <span class="product-cta">↗</span>
            </div>
            <div class="product-meta">
              <div>
                <h3>${p.name}</h3>
                <p>${p.note}</p>
              </div>
              <span class="product-arrow">↗</span>
            </div>
          </a>
        </article>`;
    }).join("");

    $("[data-filter-count]").textContent = `${list.length} pieces shown`;
    observeReveals();
  }

  function initFilters() {
    $$(".filter-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        activeFilter = btn.dataset.filter;
        $$(".filter-btn").forEach(b => b.classList.toggle("active", b === btn));
        renderProducts();
      });
    });
  }

  // ---------- Patterns gallery ----------
  function renderPatterns() {
    $("[data-patterns]").innerHTML = SITE.patterns.map((p, i) => `
      <figure class="reveal ${i % 2 ? "md-offset" : ""} image-wrap">
        <div class="aspect-pattern">
          <img src="${p.image}" alt="${p.caption}" loading="lazy" />
        </div>
        <figcaption>${p.caption}</figcaption>
      </figure>`).join("");
  }

  // ---------- Reveal on scroll ----------
  let observer;
  function observeReveals() {
    if (!observer) {
      observer = new IntersectionObserver(entries => {
        entries.forEach(e => {
          if (e.isIntersecting) e.target.classList.add("is-visible");
        });
      }, { threshold: 0.12 });
    }
    $$(".reveal:not(.is-visible)").forEach(el => observer.observe(el));
  }

  // ---------- Mobile menu ----------
  function initMenu() {
    const btn = $(".menu-toggle");
    const nav = $(".nav-mobile");
    btn.addEventListener("click", () => {
      const open = nav.hasAttribute("hidden");
      nav.toggleAttribute("hidden", !open);
      btn.setAttribute("aria-expanded", open);
    });
    $$(".nav-mobile a").forEach(a =>
      a.addEventListener("click", () => nav.setAttribute("hidden", ""))
    );
  }

  // ---------- Boot ----------
  document.addEventListener("DOMContentLoaded", () => {
    fillText();
    renderProducts();
    renderPatterns();
    initFilters();
    initMenu();
    observeReveals();
  });
})();