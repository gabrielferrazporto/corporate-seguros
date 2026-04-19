// Edite aqui os contatos principais do site.
const CONTACT_CONFIG = {
    whatsappNumber: "5531988331904",
    whatsappMessage: "Olá, gostaria de solicitar uma cotação de seguro.",
    phoneDisplay: "(31) 98833-1904",
    phoneHref: "+5531988331904",
    email: "mayrom.seguros@gmail.com",
    address: "Avenida 28 de Abril, 176, Centro, Ipatinga - MG",
    socialLinks: {
        instagram: "https://www.instagram.com/corporatecorretora?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
        facebook: "#",
        linkedin: "#"
    }
};

document.addEventListener("DOMContentLoaded", () => {
    applyContactConfig();
    setupSmoothScroll();
    setupNavbarState();
    setupRevealAnimations();
    setupScrollSpyHighlight();
    updateCurrentYear();
});

function applyContactConfig() {
    document.querySelectorAll("[data-whatsapp-link]").forEach((link) => {
        const context = link.dataset.whatsappContext;
        link.href = buildWhatsAppUrl(context);
        link.target = "_blank";
        link.rel = "noopener noreferrer";
    });

    document.querySelectorAll("[data-phone-link]").forEach((link) => {
        link.href = `tel:${CONTACT_CONFIG.phoneHref}`;
        link.textContent = CONTACT_CONFIG.phoneDisplay;
    });

    document.querySelectorAll("[data-email-link]").forEach((link) => {
        link.href = `mailto:${CONTACT_CONFIG.email}`;
        link.textContent = CONTACT_CONFIG.email;
    });

    document.querySelectorAll("[data-address-text]").forEach((item) => {
        item.textContent = CONTACT_CONFIG.address;
    });

    document.querySelectorAll("[data-social-link]").forEach((link) => {
        const key = link.dataset.socialLink;
        const url = CONTACT_CONFIG.socialLinks[key] || "#";
        link.href = url;
        if (url !== "#") {
            link.target = "_blank";
            link.rel = "noopener noreferrer";
        }
    });
}

function buildWhatsAppUrl(context) {
    const message = context
        ? `${CONTACT_CONFIG.whatsappMessage} Tenho interesse em ${context}.`
        : CONTACT_CONFIG.whatsappMessage;

    return `https://wa.me/${CONTACT_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

function setupSmoothScroll() {
    const navLinks = document.querySelectorAll('a[href^="#"]:not([data-whatsapp-link])');
    const navbar = document.querySelector(".corporate-navbar");
    const navbarCollapse = document.querySelector(".navbar-collapse");
    const collapseInstance = navbarCollapse ? bootstrap.Collapse.getOrCreateInstance(navbarCollapse, { toggle: false }) : null;

    navLinks.forEach((link) => {
        link.addEventListener("click", (event) => {
            const targetId = link.getAttribute("href");
            if (!targetId || targetId === "#") {
                return;
            }

            const targetSection = document.querySelector(targetId);
            if (!targetSection) {
                return;
            }

            event.preventDefault();
            const navbarHeight = navbar ? navbar.offsetHeight : 0;
            const topPosition = targetSection.getBoundingClientRect().top + window.scrollY - navbarHeight - 12;

            window.scrollTo({
                top: topPosition,
                behavior: "smooth"
            });

            if (window.innerWidth < 992 && navbarCollapse && navbarCollapse.classList.contains("show") && collapseInstance) {
                collapseInstance.hide();
            }
        });
    });
}

function setupNavbarState() {
    const navbar = document.querySelector(".corporate-navbar");
    if (!navbar) {
        return;
    }

    const toggleNavbar = () => {
        navbar.classList.toggle("is-scrolled", window.scrollY > 20);
    };

    toggleNavbar();
    window.addEventListener("scroll", toggleNavbar, { passive: true });
}

// Revela elementos conforme entram na viewport.
function setupRevealAnimations() {
    const revealItems = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
        revealItems.forEach((item) => item.classList.add("is-visible"));
        return;
    }

    const observer = new IntersectionObserver((entries, currentObserver) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                currentObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.18,
        rootMargin: "0px 0px -40px 0px"
    });

    revealItems.forEach((item) => observer.observe(item));
}

function setupScrollSpyHighlight() {
    const sections = [...document.querySelectorAll("main section[id], footer[id]")];
    const navLinks = [...document.querySelectorAll("#mainNav .nav-link")];

    if (!sections.length || !navLinks.length || !("IntersectionObserver" in window)) {
        return;
    }

    const activateLink = (currentId) => {
        navLinks.forEach((link) => {
            const isActive = link.getAttribute("href") === `#${currentId}`;
            link.classList.toggle("active", isActive);
        });
    };

    const observer = new IntersectionObserver((entries) => {
        const visibleEntry = entries
            .filter((entry) => entry.isIntersecting)
            .sort((first, second) => second.intersectionRatio - first.intersectionRatio)[0];

        if (visibleEntry) {
            activateLink(visibleEntry.target.id);
        }
    }, {
        threshold: 0.35,
        rootMargin: "-20% 0px -55% 0px"
    });

    sections.forEach((section) => observer.observe(section));
}

function updateCurrentYear() {
    document.querySelectorAll("[data-current-year]").forEach((item) => {
        item.textContent = new Date().getFullYear();
    });
}
