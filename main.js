/* ============================================================
   页面渲染与交互
   ------------------------------------------------------------
   1) 渲染：把 content.js 中的文案注入各区块容器
   2) 交互：导航吸顶与高亮、平滑滚动、滚动入场、卡片光斑、技能条动画
   ============================================================ */
(function () {
  "use strict";

  var C = window.SITE_CONTENT;
  if (!C) {
    console.error("[site] 未找到 content.js 中的 SITE_CONTENT，页面无法渲染");
    return;
  }

  /* ---------- 小工具 ---------- */
  function byId(id) { return document.getElementById(id); }

  function node(tag, cls) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    return n;
  }

  function text(tag, cls, value) {
    var n = node(tag, cls);
    n.textContent = value == null ? "" : String(value);
    return n;
  }

  function mount(id, children) {
    var host = byId(id);
    if (!host) return;
    host.innerHTML = "";
    (children || []).forEach(function (c) { if (c) host.appendChild(c); });
  }

  function sectionHead(d) {
    var head = node("div", "section__head");
    var left = node("div");
    if (d.tag) left.appendChild(text("p", "section__tag", d.tag));
    left.appendChild(text("h2", "section__title", d.title || ""));
    head.appendChild(left);
    if (d.desc) head.appendChild(text("p", "section__desc", d.desc));
    return head;
  }

  /* ---------- 顶部导航 ---------- */
  function renderNav() {
    var d = C.nav || {};
    var inner = node("div", "nav__inner");

    var brand = node("a", "brand");
    brand.href = "#hero";
    brand.appendChild(text("span", "brand__mark", d.brandMark || "·"));
    var btext = node("span", "brand__text");
    btext.appendChild(text("strong", null, d.brand || "Your Name"));
    if (d.brandSub) btext.appendChild(text("small", null, d.brandSub));
    brand.appendChild(btext);

    var links = node("nav", "nav__links");
    (d.links || []).forEach(function (item) {
      var a = text("a", "nav__link", item.label);
      a.href = item.href || "#";
      links.appendChild(a);
    });

    inner.appendChild(brand);
    inner.appendChild(links);

    mount("nav", [inner]);
  }

  /* ---------- 首屏右侧信息面板 ---------- */
  function renderPanel(p) {
    var panel = node("aside", "panel");

    var bar = node("div", "panel__bar");
    bar.appendChild(node("span", "dot"));
    bar.appendChild(node("span", "dot"));
    bar.appendChild(node("span", "dot"));
    bar.appendChild(text("span", "panel__name", p.filename || "profile.md"));
    panel.appendChild(bar);

    var rows = node("div", "panel__rows");
    (p.rows || []).forEach(function (r) {
      var row = node("div", "prow");
      row.appendChild(text("span", "prow__k", r.k));
      row.appendChild(text("span", "prow__v", r.v));
      rows.appendChild(row);
    });
    panel.appendChild(rows);

    var meters = node("div", "meters");
    (p.meters || []).forEach(function (m) {
      var wrap = node("div", "meter");
      var top = node("div", "meter__top");
      top.appendChild(text("span", null, m.label));
      top.appendChild(text("span", null, (m.value || 0) + "%"));
      var track = node("div", "meter__track");
      var fill = node("div", "meter__fill");
      fill.setAttribute("data-value", m.value || 0);
      track.appendChild(fill);
      wrap.appendChild(top);
      wrap.appendChild(track);
      meters.appendChild(wrap);
    });
    panel.appendChild(meters);

    if (p.status) {
      var st = node("div", "panel__status");
      st.appendChild(node("span", "pulse"));
      st.appendChild(text("span", null, p.status));
      panel.appendChild(st);
    }

    return panel;
  }

  /* ---------- 首屏 Hero ---------- */
  function renderHero() {
    var d = C.hero || {};
    var inner = node("div", "hero__inner");
    var left = node("div", "hero__left");

    if (d.eyebrow) left.appendChild(text("p", "eyebrow", d.eyebrow));

    var title = node("h1", "hero__title");
    title.appendChild(text("span", null, d.title || ""));
    if (d.titleFocus) title.appendChild(text("span", "focus", d.titleFocus));
    left.appendChild(title);

    if (d.subtitle) left.appendChild(text("p", "hero__sub", d.subtitle));

    if (d.actions && d.actions.length) {
      var actions = node("div", "hero__actions");
      d.actions.forEach(function (a, i) {
        var cls = "btn " + (a.style === "ghost" ? "btn--ghost" : "btn--primary");
        var b = text("a", cls, a.label);
        b.href = a.href || "#";
        if (i === 0) b.appendChild(text("span", "btn__arrow", "\u2192"));
        actions.appendChild(b);
      });
      left.appendChild(actions);
    }

    if (d.stats && d.stats.length) {
      var stats = node("div", "stats");
      d.stats.forEach(function (s) {
        var it = node("div", "stat");
        it.appendChild(text("div", "stat__value", s.value));
        it.appendChild(text("div", "stat__label", s.label));
        stats.appendChild(it);
      });
      left.appendChild(stats);
    }

    inner.appendChild(left);
    inner.appendChild(renderPanel(d.panel || {}));
    mount("hero", [inner]);
  }

  /* ---------- 自我介绍模块 ---------- */
  function renderAbout() {
    var d = C.about || {};
    var inner = node("div", "section__inner");
    inner.appendChild(sectionHead(d));

    var grid = node("div", "about__grid");

    var points = node("div", "about__points");
    (d.points || []).forEach(function (p, i) {
      var it = node("div", "point");
      it.appendChild(text("span", "point__no", ("0" + (i + 1)).slice(-2)));
      var body = node("div");
      body.appendChild(text("h3", "point__title", p.title));
      body.appendChild(text("p", "point__text", p.text));
      it.appendChild(body);
      points.appendChild(it);
    });
    grid.appendChild(points);
    inner.appendChild(grid);
    mount("about", [inner]);
  }

  /* ---------- 个人优势模块 ---------- */
  function renderStrengths() {
    var d = C.strengths || {};
    var inner = node("div", "section__inner");
    inner.appendChild(sectionHead(d));

    var grid = node("div", "s-grid");
    (d.items || []).forEach(function (it, i) {
      var card = node("article", "s-card");
      card.appendChild(text("span", "s-card__no", ("0" + (i + 1)).slice(-2)));
      card.appendChild(text("h3", "s-card__title", it.title));
      if (it.summary) card.appendChild(text("p", "s-card__sum", it.summary));

      var rows = node("div", "s-rows");
      [
        ["擅长什么", it.goodAt],
        ["如何工作", it.howWork],
        ["能解决什么问题", it.solve]
      ].forEach(function (pair) {
        if (!pair[1]) return;
        var row = node("div", "s-row");
        row.appendChild(text("span", "s-row__k", pair[0]));
        row.appendChild(text("span", "s-row__v", pair[1]));
        rows.appendChild(row);
      });
      card.appendChild(rows);
      grid.appendChild(card);
    });

    inner.appendChild(grid);
    mount("strengths", [inner]);
  }

  /* ---------- 爱好模块 ---------- */
  function renderHobbies() {
    var d = C.hobbies || {};
    var inner = node("div", "section__inner");
    inner.appendChild(sectionHead(d));

    if (d.placeholder) {
      inner.appendChild(text("p", "hobbies__placeholder", d.placeholder));
    }

    var host = node("div", "hobbies__carousel");
    host.id = "flex-carousel-host";
    inner.appendChild(host);

    mount("hobbies", [inner]);
  }

  /* ---------- 页脚 ---------- */
  function renderFooter() {
    var d = C.footer || {};
    var inner = node("div", "footer__inner");
    inner.appendChild(text("span", null, d.left || ""));
    inner.appendChild(text("span", null, d.right || ""));
    mount("footer", [inner]);
  }

  /* ---------- 交互：导航吸顶 + 当前区块高亮 ---------- */
  function setupNav() {
    var nav = byId("nav");
    if (!nav) return;

    function onScroll() {
      if (window.scrollY > 10) nav.classList.add("is-stuck");
      else nav.classList.remove("is-stuck");
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    // 当前区块高亮
    var links = Array.prototype.slice.call(nav.querySelectorAll(".nav__link"));
    var sections = links
      .map(function (a) { return document.querySelector(a.getAttribute("href")); })
      .filter(Boolean);

    if ("IntersectionObserver" in window && sections.length) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (!en.isIntersecting) return;
          links.forEach(function (a) {
            a.classList.toggle("is-active", a.getAttribute("href") === "#" + en.target.id);
          });
        });
      }, { rootMargin: "-45% 0px -50% 0px" });
      sections.forEach(function (s) { io.observe(s); });
    }
  }

  /* ---------- 交互：平滑滚动 ---------- */
  function setupSmoothScroll() {
    document.addEventListener("click", function (e) {
      var a = e.target.closest ? e.target.closest('a[href^="#"]') : null;
      if (!a) return;
      var href = a.getAttribute("href");
      if (!href || href.length < 2) return;
      var target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  /* ---------- 交互：滚动入场 + 技能条动画 ---------- */
  function setupReveal() {
    var items = document.querySelectorAll(".reveal:not(.reveal--immediate)");

    function fire(el) {
      el.classList.add("is-in");
      Array.prototype.forEach.call(el.querySelectorAll(".meter__fill"), function (f) {
        f.style.width = (f.getAttribute("data-value") || 0) + "%";
      });
      var panel = el.querySelector(".panel");
      if (panel) {
        Array.prototype.forEach.call(panel.querySelectorAll(".meter__fill"), function (f) {
          f.style.width = (f.getAttribute("data-value") || 0) + "%";
        });
      }
    }

    if (!("IntersectionObserver" in window)) {
      Array.prototype.forEach.call(items, fire);
      return;
    }

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        fire(en.target);
        io.unobserve(en.target);
      });
    }, { rootMargin: "0px 0px -10% 0px", threshold: 0.1 });

    Array.prototype.forEach.call(items, function (el) { io.observe(el); });
  }

  /* ---------- 交互：卡片光斑跟随 ---------- */
  function setupSpotlight() {
    document.addEventListener("mousemove", function (e) {
      var card = e.target.closest ? e.target.closest(".s-card") : null;
      if (!card) return;
      var r = card.getBoundingClientRect();
      card.style.setProperty("--mx", (e.clientX - r.left) + "px");
      card.style.setProperty("--my", (e.clientY - r.top) + "px");
    });
  }

  /* ---------- 初始化 ---------- */
  function init() {
    if (C.meta && C.meta.title) {
      document.title = C.meta.title;
      var desc = document.querySelector('meta[name="description"]');
      if (desc && C.meta.description) desc.setAttribute("content", C.meta.description);
    }

    renderNav();
    renderHero();
    renderHobbies();
    renderAbout();
    renderStrengths();
    renderFooter();

    // 首屏之外的区块启用滚动入场
    ["hobbies", "about", "strengths"].forEach(function (id) {
      var el = byId(id);
      if (el) el.classList.add("reveal");
    });

    setupNav();
    setupSmoothScroll();
    setupReveal();
    setupSpotlight();

    // 首屏技能条入场
    window.setTimeout(function () {
      Array.prototype.forEach.call(document.querySelectorAll(".hero .meter__fill"), function (f) {
        f.style.width = (f.getAttribute("data-value") || 0) + "%";
      });
    }, 260);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
