const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navLinks = document.querySelectorAll(".nav__link");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("nav__menu--open");
  changeToggleIcon();
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("nav__menu--open");
    changeToggleIcon();
  });
});

// change the nav toggle icon
function changeToggleIcon() {
  if (navMenu.classList.contains("nav__menu--open")) {
    navToggle.classList.replace("ri-menu-4-line", "ri-close-line");
  } else {
    navToggle.classList.replace("ri-close-line", "ri-menu-4-line");
  }
}

// Activate nav link on scroll
function addActiveLink() {
  const section = document.querySelectorAll("section[id]");
  section.forEach((section) => {
    const scrollY = window.scrollY,
      sectionTop = section.offsetTop - 100,
      sectionHeight = section.offsetHeight,
      sectionId = section.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__link[href*=" + sectionId + "]")
        .classList.add("nav__link--active");
    } else {
      document
        .querySelector(".nav__link[href*=" + sectionId + "]")
        .classList.remove("nav__link--active");
    }
  });
}

window.addEventListener("scroll", addActiveLink);

// increment counter
function startCounter(counter) {
  // Get the target number
  const targetNumber = counter.getAttribute("data-target");
  const increment = setInterval(() => {
    counter.textContent++;

    if (counter.textContent == targetNumber) {
      clearInterval(increment);
    }
  }, 2000 / targetNumber);
}

const counterSection = document.querySelector(".counter");
const counters = document.querySelectorAll(".counter__number");
let started = false;

if (counterSection) {
  window.addEventListener("scroll", () => {
    if (window.scrollY >= counterSection.offsetTop - 400) {
      if (!started) {
        counters.forEach((counter) => startCounter(counter));
      }
      started = true;
    }
  });
}

// Testimonial Swiper

const TestimonialSwiper = new Swiper(".testimonial__wrapper", {
  spaceBetween: 40,
  loop: true,
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// Scrolltop
const scrolltop = document.getElementById("scrolltop");

window.addEventListener("scroll", () => {
  if (this.scrollY >= 300) {
    scrolltop.classList.add("scrolltop--show");
  } else {
    scrolltop.classList.remove("scrolltop--show");
  }
});

// Dark theme

// check for selected theme in localStorage
let theme = localStorage.getItem("theme");

const themeToggle = document.getElementById("theme-toggle");

const enableDarkTheme = () => {
  // Add the dark theme class to the body
  document.body.classList.add("dark-theme");
  // change the theme toggle icon
  themeToggle.classList.replace("ri-moon-line", "ri-sun-line");
  // update the selected theme in localStorage
  localStorage.setItem("theme", "dark-theme");
};

const disableDarkTheme = () => {
  // remove the dark theme class from the body
  document.body.classList.remove("dark-theme");
  // change the theme toggle icon
  themeToggle.classList.replace("ri-sun-line", "ri-moon-line");
  // update the selected theme in localStorage
  localStorage.setItem("theme", null);
};

// check if the user previously enabled the dark theme
// to load the dark theme
if (theme === "dark-theme") {
  enableDarkTheme();
}

// Add toggle theme event
themeToggle.addEventListener("click", () => {
  // get the selected theme
  theme = localStorage.getItem("theme");
  if (theme !== "dark-theme") {
    enableDarkTheme();
  } else {
    disableDarkTheme();
  }
});

// ScrollReveal Animations

const sr = ScrollReveal({
  origin: "top",
  distance: "100px",
  duration: 2500,
  reset: false,
});

sr.reveal(".home__content, .about__img, .service__content, .contact__content", {
  origin: "left",
});

sr.reveal(".home__img, .about__content, .service__info, .contact__form", {
  origin: "right",
});

sr.reveal(
  ".skills__wrapper, .counter__wrapper, .portfolio__wrapper, .testimonial__wrapper, .blog__wrapper, .footer__content, .experience__item, .education__card",
  {
    origin: "bottom",
    interval: 100,
  }
);

/*=============== PDF VIEWER MODAL (ver, no descargar) ===============*/
const pdfModal = document.getElementById("pdf-modal");

if (pdfModal && window.pdfjsLib) {
  // El worker se sirve desde el mismo CDN que la librería
  pdfjsLib.GlobalWorkerOptions.workerSrc =
    "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";

  const pdfTitle = document.getElementById("pdf-modal-title");
  const pdfBody = document.getElementById("pdf-modal-body");
  const pdfPages = document.getElementById("pdf-modal-pages");
  const pdfLoader = document.getElementById("pdf-modal-loader");
  const pdfError = document.getElementById("pdf-modal-error");

  let currentTask = null; // tarea de carga de pdf.js en curso
  let renderToken = 0; // evita que un documento anterior pinte sobre el nuevo
  let onScroll = null; // handler de scroll activo (lazy render)

  const renderPdf = async (src, token) => {
    try {
      currentTask = pdfjsLib.getDocument(src);
      const doc = await currentTask.promise;
      if (token !== renderToken) return; // se abrió otro documento entre tanto

      // Escala según el ancho disponible; nítido en pantallas de alta densidad
      const available = pdfBody.clientWidth - 32;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const first = await doc.getPage(1);
      if (token !== renderToken) return;
      const base = first.getViewport({ scale: 1 });
      const scale = Math.min(available / base.width, 1.6);
      const ratio = base.height / base.width; // proporción para dimensionar placeholders

      pdfLoader.hidden = true;

      // Un placeholder por página; se pinta solo al acercarse al viewport (lazy)
      for (let n = 1; n <= doc.numPages; n++) {
        const holder = document.createElement("div");
        holder.className = "pdf-modal__page";
        holder.dataset.page = n;
        holder.style.width = "100%";
        holder.style.maxWidth = "80rem";
        holder.style.aspectRatio = "1 / " + ratio;
        pdfPages.appendChild(holder);
      }

      // Renderiza las páginas cuyo placeholder está cerca de la zona visible
      const renderVisible = () => {
        if (token !== renderToken) return;
        const viewTop = -600;
        const viewBottom = pdfBody.clientHeight + 600;
        pdfPages
          .querySelectorAll(".pdf-modal__page:not([data-rendered])")
          .forEach((holder) => {
            const box = holder.getBoundingClientRect();
            const bodyBox = pdfBody.getBoundingClientRect();
            const top = box.top - bodyBox.top;
            if (top < viewBottom && top + box.height > viewTop) {
              holder.setAttribute("data-rendered", "");
              renderPage(doc, holder, scale, dpr, token);
            }
          });
      };

      let ticking = false;
      onScroll = () => {
        if (ticking) return;
        ticking = true;
        requestAnimationFrame(() => {
          ticking = false;
          renderVisible();
        });
      };
      pdfBody.addEventListener("scroll", onScroll);
      window.addEventListener("resize", onScroll);
      renderVisible(); // primeras páginas visibles
    } catch (err) {
      if (token !== renderToken) return;
      pdfLoader.hidden = true;
      pdfError.hidden = false;
    }
  };

  const renderPage = async (doc, holder, scale, dpr, token) => {
    try {
      const page = await doc.getPage(Number(holder.dataset.page));
      if (token !== renderToken || !holder.isConnected) return;
      const viewport = page.getViewport({ scale: scale * dpr });
      const canvas = document.createElement("canvas");
      canvas.width = viewport.width;
      canvas.height = viewport.height;
      holder.style.aspectRatio = ""; // el canvas ya define el tamaño real
      holder.appendChild(canvas);
      await page.render({
        canvasContext: canvas.getContext("2d"),
        viewport,
      }).promise;
    } catch (err) {
      holder.removeAttribute("data-rendered"); // permite reintentar
    }
  };

  const stopLazy = () => {
    if (onScroll) {
      pdfBody.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      onScroll = null;
    }
  };

  const openPdfModal = (src, title) => {
    renderToken++;
    stopLazy();
    if (currentTask) {
      currentTask.destroy();
      currentTask = null;
    }
    pdfTitle.textContent = title || "Documento";
    pdfPages.innerHTML = "";
    pdfLoader.hidden = false;
    pdfError.hidden = true;
    pdfBody.scrollTop = 0;

    pdfModal.classList.add("is-open");
    pdfModal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";

    renderPdf(src, renderToken);
  };

  const closePdfModal = () => {
    renderToken++; // cancela cualquier render en curso
    pdfModal.classList.remove("is-open");
    pdfModal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    stopLazy();
    pdfPages.innerHTML = "";
    if (currentTask) {
      currentTask.destroy();
      currentTask = null;
    }
  };

  // Abrir el visor desde cualquier tarjeta/botón marcado con .js-pdf-view
  document.querySelectorAll(".js-pdf-view").forEach((trigger) => {
    trigger.addEventListener("click", (e) => {
      e.preventDefault();
      const src = trigger.dataset.pdf || trigger.getAttribute("href");
      if (!src) return;
      const title =
        trigger.dataset.title ||
        trigger
          .querySelector(".cert__title, .education__title")
          ?.textContent.trim() ||
        "Documento";
      openPdfModal(src, title);
    });
  });

  // Cerrar: botón X, clic en el fondo o tecla Escape
  pdfModal.querySelectorAll("[data-pdf-close]").forEach((el) => {
    el.addEventListener("click", closePdfModal);
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && pdfModal.classList.contains("is-open")) {
      closePdfModal();
    }
  });
}


