(function () {
  "use strict";

  var SITE = window.SITE;
  if (!SITE) return;

  var svg = {
    ai:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="3"/><path d="M12 3v2M12 19v2M5 12H3M21 12h-2M6.3 6.3l1.4 1.4M16.3 16.3l1.4 1.4M17.7 6.3l-1.4 1.4M7.7 16.3l-1.4 1.4"/></svg>',
    lock:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/></svg>',
    film:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M7 5v14M17 5v14M3 9h4M3 15h4M17 9h4M17 15h4"/></svg>',
    spark:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3l1.6 5.2L19 10l-5.4 1.8L12 17l-1.6-5.2L5 10l5.4-1.8L12 3z"/><path d="M19 15l.7 2 2 .7-2 .7-.7 2-.7-2-2-.7 2-.7.7-2z"/></svg>',
    chevronL:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 6l-6 6 6 6"/></svg>',
    chevronR:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 6l6 6-6 6"/></svg>'
  };

  var serviceIcons = { "ai-ml": svg.ai, cybersecurity: svg.lock, video: svg.film, animation: svg.spark };

  var socialIcons = {
    fiverr:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 8h3v10H4V8zm5 0h3v2h2V8h3v3h-3v7h-3v-7H9V8zm10.2-2.2A1.8 1.8 0 1 1 16.6 8a1.8 1.8 0 0 1 2.6-2.2z"/></svg>',
    upwork:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 8h2.4c1.8 3.4 3 6 4.1 6 1 0 1.5-1.2 1.5-3V8H14v3.2c0 3-1.3 5.3-3.6 5.3-1.7 0-3-1.2-4.3-3.4V17H4V8zm12 4.2c1.8 0 3.2 1.3 3.2 3.1S17.8 18.4 16 18.4 12.8 17 12.8 15.3s1.4-3.1 3.2-3.1z"/></svg>',
    github:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3a9 9 0 0 0-2.8 17.5c.4.1.6-.2.6-.4v-1.5c-2.5.5-3-1.2-3-1.2-.4-1-1-1.3-1-1.3-.8-.6.1-.6.1-.6.9.1 1.4.9 1.4.9.8 1.4 2.1 1 2.6.8.1-.6.3-1 .6-1.2-2-.2-4.1-1-4.1-4.5 0-1 .4-1.8 1-2.5-.1-.2-.4-1.3.1-2.6 0 0 .8-.3 2.6 1a9 9 0 0 1 4.7 0c1.8-1.3 2.6-1 2.6-1 .5 1.3.2 2.4.1 2.6.6.7 1 1.5 1 2.5 0 3.5-2.1 4.3-4.1 4.5.3.3.6.8.6 1.7v2.5c0 .2.2.5.6.4A9 9 0 0 0 12 3z"/></svg>',
    linkedin:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M8 10v7M8 7.5h.01M12 17v-4.2a2.2 2.2 0 0 1 4.4 0V17"/></svg>',
    facebook:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 9h3V6h-3c-2.2 0-4 1.8-4 4v2H8v3h2v7h3v-7h2.2l.8-3H13v-2c0-.6.4-1 1-1z"/></svg>'
  };

  function el(tag, className, text) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (text != null) node.textContent = text;
    return node;
  }

  function youtubeId(url) {
    if (!url) return "";
    var m = url.match(/(?:youtu\.be\/|v=)([A-Za-z0-9_-]{6,})/);
    return m ? m[1] : "";
  }

  function isReal(item) {
    return item && !item.placeholder;
  }

  function setTheme(theme) {
    var next = theme === "light" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("rl-theme", next);
    } catch (e) {}
    var btn = document.getElementById("theme-toggle");
    if (btn) {
      btn.setAttribute("aria-label", next === "light" ? "Switch to dark theme" : "Switch to light theme");
    }
  }

  function initTheme() {
    var stored = "";
    try {
      stored = localStorage.getItem("rl-theme") || "";
    } catch (e) {}
    if (stored) setTheme(stored);
    else setTheme("dark");
    var btn = document.getElementById("theme-toggle");
    if (btn) {
      btn.addEventListener("click", function () {
        var current = document.documentElement.getAttribute("data-theme");
        setTheme(current === "light" ? "dark" : "light");
      });
    }
  }

  function renderNav() {
    var list = document.getElementById("nav-list");
    if (!list) return;
    SITE.nav.forEach(function (item) {
      var li = el("li");
      var a = el("a", "", item.label);
      a.href = item.href;
      li.appendChild(a);
      list.appendChild(li);
    });
    var mobilePortfolio = el("li");
    var pa = el("a", "", "Visit My Portfolio");
    pa.href = SITE.links.portfolio;
    pa.setAttribute("data-portfolio", "true");
    mobilePortfolio.appendChild(pa);
    list.appendChild(mobilePortfolio);

    var toggle = document.getElementById("nav-toggle");
    var nav = document.getElementById("primary-nav");
    if (toggle && nav) {
      toggle.addEventListener("click", function () {
        var open = nav.classList.toggle("is-open");
        toggle.setAttribute("aria-expanded", open ? "true" : "false");
        toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
      });
      list.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", function () {
          nav.classList.remove("is-open");
          toggle.setAttribute("aria-expanded", "false");
        });
      });
    }
  }

  function renderHero() {
    var c = SITE.company;
    var h = SITE.hero;
    var eyebrow = document.getElementById("hero-eyebrow");
    var title = document.getElementById("hero-title");
    var pitch = document.getElementById("hero-pitch");
    var actions = document.getElementById("hero-actions");
    if (eyebrow) eyebrow.textContent = c.name;
    if (title) title.textContent = h.headline;
    if (pitch) pitch.textContent = c.pitch;
    if (actions) {
      var primary = el("a", "btn btn-solid", h.ctaPrimary.label);
      primary.href = h.ctaPrimary.href;
      var secondary = el("a", "btn btn-outline", h.ctaSecondary.label);
      secondary.href = h.ctaSecondary.href;
      actions.appendChild(primary);
      actions.appendChild(secondary);
    }
  }

  function renderServices() {
    var grid = document.getElementById("services-grid");
    if (!grid) return;
    SITE.services.forEach(function (svc) {
      var card = el("article", "service-card reveal");
      var icon = el("div", "service-icon");
      icon.innerHTML = serviceIcons[svc.id] || svg.spark;
      card.appendChild(icon);
      card.appendChild(el("h3", "", svc.title));
      card.appendChild(el("p", "", svc.description));
      var ul = el("ul");
      svc.capabilities.forEach(function (cap) {
        ul.appendChild(el("li", "", cap));
      });
      card.appendChild(ul);
      grid.appendChild(card);
    });
  }

  var modalState = { lastFocus: null };

  function focusables(root) {
    return Array.prototype.slice.call(
      root.querySelectorAll('a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])')
    );
  }

  function closeModal() {
    var modal = document.getElementById("project-modal");
    if (!modal) return;
    modal.hidden = true;
    document.body.style.overflow = "";
    if (modalState.lastFocus) modalState.lastFocus.focus();
  }

  function openModal(project) {
    var modal = document.getElementById("project-modal");
    var title = document.getElementById("modal-title");
    var body = document.getElementById("modal-body");
    var dialog = modal.querySelector(".modal-dialog");
    if (!modal || !title || !body) return;

    modalState.lastFocus = document.activeElement;
    title.textContent = project.title;
    body.replaceChildren();

    body.appendChild(el("p", "", project.description));
    if (project.role) {
      var role = el("p");
      role.appendChild(el("strong", "", "Role: "));
      role.appendChild(document.createTextNode(project.role));
      body.appendChild(role);
    }
    if (project.outcome) {
      var outcome = el("p");
      outcome.appendChild(el("strong", "", "Outcome: "));
      outcome.appendChild(document.createTextNode(project.outcome));
      body.appendChild(outcome);
    }
    if (project.tools && project.tools.length) {
      body.appendChild(el("h3", "", "Tools used"));
      var chips = el("ul", "chips");
      project.tools.forEach(function (t) {
        chips.appendChild(el("li", "", t));
      });
      body.appendChild(chips);
    }
    if (project.links && project.links.length) {
      var links = el("p");
      project.links.forEach(function (link, i) {
        if (i) links.appendChild(document.createTextNode(" · "));
        var a = el("a", "", link.label);
        a.href = link.url;
        a.target = "_blank";
        a.rel = "noopener noreferrer";
        links.appendChild(a);
      });
      body.appendChild(links);
    }

    var files = (project.files || []).filter(function (f) {
      return f && f.url && !f.placeholder;
    });
    if (files.length) {
      var fileWrap = el("div", "modal-files");
      files.forEach(function (file) {
        if (file.type === "pdf") {
          var frame = document.createElement("iframe");
          frame.title = file.label || "PDF viewer";
          frame.src = file.url;
          fileWrap.appendChild(el("p", "", file.label || "Document"));
          fileWrap.appendChild(frame);
        } else if (file.type === "pptx") {
          var dl = el("a", "btn btn-outline", file.label || "Download deck");
          dl.href = file.url;
          dl.setAttribute("download", "");
          fileWrap.appendChild(dl);
        } else if (file.type === "video") {
          var id = youtubeId(file.url);
          if (id) {
            var yt = document.createElement("iframe");
            yt.title = file.label || "Video";
            yt.loading = "lazy";
            yt.allow =
              "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
            yt.allowFullscreen = true;
            yt.src = "https://www.youtube-nocookie.com/embed/" + id;
            fileWrap.appendChild(yt);
          } else {
            var va = el("a", "", file.label || "Watch video");
            va.href = file.url;
            va.target = "_blank";
            va.rel = "noopener noreferrer";
            fileWrap.appendChild(va);
          }
        } else {
          var la = el("a", "", file.label || "Open link");
          la.href = file.url;
          la.target = "_blank";
          la.rel = "noopener noreferrer";
          fileWrap.appendChild(la);
        }
      });
      body.appendChild(fileWrap);
    }

    modal.hidden = false;
    document.body.style.overflow = "hidden";
    dialog.focus();
  }

  function initModal() {
    var modal = document.getElementById("project-modal");
    if (!modal) return;
    modal.addEventListener("click", function (e) {
      if (e.target.hasAttribute("data-close-modal")) closeModal();
    });
    document.addEventListener("keydown", function (e) {
      if (modal.hidden) return;
      if (e.key === "Escape") {
        e.preventDefault();
        closeModal();
        return;
      }
      if (e.key === "Tab") {
        var nodes = focusables(modal);
        if (!nodes.length) return;
        var first = nodes[0];
        var last = nodes[nodes.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    });
  }

  function renderWork() {
    var filters = document.getElementById("work-filters");
    var grid = document.getElementById("work-grid");
    if (!filters || !grid) return;
    var active = "all";
    var projects = SITE.projects.filter(isReal);

    function paint() {
      grid.replaceChildren();
      projects
        .filter(function (p) {
          return active === "all" || p.category === active;
        })
        .forEach(function (p) {
          var card = el("button", "work-card reveal");
          card.type = "button";
          if (p.thumbnail) {
            var img = document.createElement("img");
            img.src = p.thumbnail;
            img.alt = "";
            img.width = 640;
            img.height = 360;
            img.loading = "lazy";
            card.appendChild(img);
          }
          var cat = SITE.projectFilters.find(function (f) {
            return f.id === p.category;
          });
          card.appendChild(el("div", "meta", cat ? cat.label : p.category));
          card.appendChild(el("h3", "", p.title));
          card.appendChild(el("p", "", p.description));
          card.addEventListener("click", function () {
            openModal(p);
          });
          grid.appendChild(card);
        });
    }

    SITE.projectFilters.forEach(function (f, i) {
      var btn = el("button", "filter-btn", f.label);
      btn.type = "button";
      btn.setAttribute("role", "tab");
      btn.setAttribute("aria-pressed", i === 0 ? "true" : "false");
      if (i === 0) btn.classList.add("is-active");
      btn.addEventListener("click", function () {
        active = f.id;
        filters.querySelectorAll(".filter-btn").forEach(function (b) {
          b.classList.remove("is-active");
          b.setAttribute("aria-pressed", "false");
        });
        btn.classList.add("is-active");
        btn.setAttribute("aria-pressed", "true");
        paint();
      });
      filters.appendChild(btn);
    });
    paint();
  }

  function renderTrust() {
    var bar = document.getElementById("trust-bar");
    if (!bar) return;
    var items = [
      { key: "fiverr", label: "Fiverr", href: SITE.links.fiverr },
      { key: "upwork", label: "Upwork", href: SITE.links.upwork },
      { key: "github", label: "GitHub", href: SITE.links.github },
      { key: "linkedin", label: "LinkedIn", href: SITE.links.linkedin }
    ];
    items.forEach(function (item) {
      var a = el("a", "trust-link");
      a.href = item.href;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      a.setAttribute("aria-label", item.label + " profile");
      a.innerHTML = socialIcons[item.key] + "<span>" + item.label + "</span>";
      bar.appendChild(a);
    });
  }

  function renderTestimonials() {
    var section = document.getElementById("testimonials");
    var track = document.getElementById("testimonials-track");
    var dots = document.getElementById("testimonial-dots");
    var prev = document.getElementById("testimonial-prev");
    var next = document.getElementById("testimonial-next");
    var items = (SITE.testimonials || []).filter(function (t) {
      return isReal(t) && t.quote && t.name;
    });
    if (!section || !items.length) return;
    section.hidden = false;
    if (prev) prev.innerHTML = svg.chevronL;
    if (next) next.innerHTML = svg.chevronR;

    var index = 0;
    function show(i) {
      index = (i + items.length) % items.length;
      var t = items[index];
      track.replaceChildren();
      var article = el("blockquote", "testimonial");
      article.appendChild(el("q", "", t.quote));
      var foot = el("footer", "", t.name + (t.role ? " — " + t.role : ""));
      article.appendChild(foot);
      track.appendChild(article);
      dots.querySelectorAll("button").forEach(function (d, di) {
        d.setAttribute("aria-current", di === index ? "true" : "false");
      });
    }

    items.forEach(function (_, i) {
      var d = el("button");
      d.type = "button";
      d.setAttribute("aria-label", "Show testimonial " + (i + 1));
      d.addEventListener("click", function () {
        show(i);
      });
      dots.appendChild(d);
    });
    if (prev) prev.addEventListener("click", function () { show(index - 1); });
    if (next) next.addEventListener("click", function () { show(index + 1); });
    section.addEventListener("keydown", function (e) {
      if (e.key === "ArrowLeft") show(index - 1);
      if (e.key === "ArrowRight") show(index + 1);
    });
    show(0);
  }

  function renderCertificates() {
    var section = document.getElementById("certificates");
    var grid = document.getElementById("certificates-grid");
    var items = (SITE.certificates || []).filter(function (c) {
      return isReal(c) && (c.image || c.url);
    });
    if (!section || !grid || !items.length) return;
    section.hidden = false;
    items.forEach(function (c) {
      var card = el("article", "cert-card reveal");
      if (c.image) {
        var img = document.createElement("img");
        img.src = c.image;
        img.alt = c.title + " certificate";
        img.width = 600;
        img.height = 400;
        img.loading = "lazy";
        card.appendChild(img);
      }
      var heading = el("h3", "", c.title);
      if (c.url) {
        var a = el("a", "", c.title);
        a.href = c.url;
        a.target = "_blank";
        a.rel = "noopener noreferrer";
        heading.replaceChildren(a);
      }
      card.appendChild(heading);
      card.appendChild(el("p", "", c.issuer + (c.year ? " · " + c.year : "")));
      grid.appendChild(card);
    });
  }

  function renderProcess() {
    var list = document.getElementById("process-list");
    if (!list) return;
    SITE.process.forEach(function (step) {
      var li = el("li", "reveal");
      li.appendChild(el("h3", "", step.title));
      li.appendChild(el("p", "", step.body));
      list.appendChild(li);
    });
  }

  function renderAbout() {
    var a = SITE.about;
    var story = document.getElementById("about-story");
    var founder = document.getElementById("about-founder");
    var photo = document.getElementById("about-photo");
    if (story) story.textContent = SITE.company.story;
    if (founder) {
      founder.textContent =
        "Founded by " + SITE.company.founder + " (" + SITE.company.founderShort + ").";
    }
    if (photo) {
      photo.src = a.photo;
      photo.alt = a.photoAlt;
    }
    function chips(id, items) {
      var ul = document.getElementById(id);
      if (!ul) return;
      items.forEach(function (item) {
        ul.appendChild(el("li", "", item));
      });
    }
    chips("about-skills", a.skills);
    chips("about-tools", a.tools);
    chips("about-languages", a.languages);
    var tl = document.getElementById("about-experience");
    if (tl) {
      a.experience.forEach(function (job) {
        var li = el("li");
        li.appendChild(el("strong", "", job.org));
        if (job.period) li.appendChild(el("span", "", job.period));
        li.appendChild(el("div", "", job.role));
        tl.appendChild(li);
      });
    }
  }

  function renderContact() {
    var loc = SITE.company.location;
    var heading = document.getElementById("map-heading");
    var caption = document.getElementById("map-caption");
    var frame = document.getElementById("map-frame");
    var mail = document.getElementById("contact-email");
    if (mail) {
      mail.href = "mailto:" + SITE.company.email;
      mail.textContent = SITE.company.email;
    }
    if (heading) heading.textContent = loc.label;
    if (caption) caption.textContent = loc.caption;
    if (frame && loc.embedSrc) {
      var iframe = document.createElement("iframe");
      iframe.src = loc.embedSrc;
      iframe.width = 600;
      iframe.height = 450;
      iframe.loading = "lazy";
      iframe.referrerPolicy = "strict-origin-when-cross-origin";
      iframe.allowFullscreen = true;
      iframe.title = loc.label || "Map of studio location";
      iframe.style.border = "0";
      frame.appendChild(iframe);
    }

    var form = document.getElementById("contact-form");
    var submit = document.getElementById("contact-submit");
    var status = document.getElementById("form-status");
    if (!form) return;

    var formId = (SITE.formspreeId || "").trim();
    if (!formId) {
      submit.disabled = true;
      status.textContent = "Contact form is not connected yet. Use the email above in the meantime.";
    } else {
      form.action = "https://formspree.io/f/" + formId;
      form.method = "POST";
    }

    function showError(id, msg) {
      var node = document.getElementById(id + "-error");
      var input = document.getElementById(id);
      if (!node || !input) return;
      if (msg) {
        node.hidden = false;
        node.textContent = msg;
        input.setAttribute("aria-invalid", "true");
      } else {
        node.hidden = true;
        node.textContent = "";
        input.removeAttribute("aria-invalid");
      }
    }

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var name = document.getElementById("name").value.trim();
      var email = document.getElementById("email").value.trim();
      var message = document.getElementById("message").value.trim();
      var ok = true;
      showError("name", name ? "" : "Please enter your name.");
      if (!name) ok = false;
      showError("email", /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? "" : "Enter a valid email address.");
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) ok = false;
      showError("message", message.length >= 12 ? "" : "Please write a short brief (at least a sentence).");
      if (message.length < 12) ok = false;
      if (!ok) return;
      if (!formId) {
        window.location.href =
          "mailto:" +
          SITE.company.email +
          "?subject=" +
          encodeURIComponent("Inquiry from " + name) +
          "&body=" +
          encodeURIComponent(message + "\n\n" + email);
        return;
      }

      status.className = "form-status";
      status.textContent = "Sending…";
      submit.disabled = true;
      var data = new FormData(form);
      fetch(form.action, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" }
      })
        .then(function (res) {
          if (res.ok) {
            status.className = "form-status is-ok";
            status.textContent = "Message sent. We will reply from the studio inbox.";
            form.reset();
          } else {
            throw new Error("not ok");
          }
        })
        .catch(function () {
          status.className = "form-status is-err";
          status.textContent = "Could not send the form. Email us directly instead.";
        })
        .finally(function () {
          submit.disabled = false;
        });
    });
  }

  function renderFooter() {
    var copy = document.getElementById("footer-copy");
    var nav = document.getElementById("footer-nav");
    var social = document.getElementById("footer-social");
    if (copy) {
      copy.textContent = "© Rafsan Labs " + new Date().getFullYear();
    }
    if (nav) {
      SITE.nav.forEach(function (item) {
        var li = el("li");
        var a = el("a", "", item.label);
        a.href = item.href;
        li.appendChild(a);
        nav.appendChild(li);
      });
    }
    if (social) {
      [
        ["Fiverr", SITE.links.fiverr],
        ["Upwork", SITE.links.upwork],
        ["GitHub", SITE.links.github],
        ["LinkedIn", SITE.links.linkedin],
        ["Facebook", SITE.links.facebook]
      ].forEach(function (pair) {
        var li = el("li");
        var a = el("a", "", pair[0]);
        a.href = pair[1];
        a.target = "_blank";
        a.rel = "noopener noreferrer";
        li.appendChild(a);
        social.appendChild(li);
      });
    }
  }

  function reveal() {
    var nodes = document.querySelectorAll(".hero-inner, .section, .service-card, .work-card, .process-list li");
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      nodes.forEach(function (n) {
        n.classList.add("is-visible");
      });
      return;
    }
    nodes.forEach(function (n) {
      n.classList.add("reveal");
    });
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    nodes.forEach(function (n) {
      io.observe(n);
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    initTheme();
    renderNav();
    renderHero();
    renderServices();
    renderWork();
    initModal();
    renderTrust();
    renderTestimonials();
    renderCertificates();
    renderProcess();
    renderAbout();
    renderContact();
    renderFooter();
    reveal();
  });
})();
