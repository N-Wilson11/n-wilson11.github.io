const sections = document.querySelectorAll("main section[id]");
const navLinks = document.querySelectorAll(".section-nav a");
const panels = document.querySelectorAll(".panel");

const panelObserver = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            }

            entry.target.classList.add("is-visible");
            panelObserver.unobserve(entry.target);
        });
    },
    {
        threshold: 0.15
    }
);

panels.forEach(panel => panelObserver.observe(panel));

const sectionObserver = new IntersectionObserver(
    entries => {
        const visibleSection = entries
            .filter(entry => entry.isIntersecting)
            .sort((left, right) => right.intersectionRatio - left.intersectionRatio)[0];

        if (!visibleSection) {
            return;
        }

        navLinks.forEach(link => {
            const isMatch = link.getAttribute("href") === `#${visibleSection.target.id}`;
            link.classList.toggle("is-active", isMatch);
        });
    },
    {
        threshold: 0.4,
        rootMargin: "-20% 0px -35% 0px"
    }
);

sections.forEach(section => sectionObserver.observe(section));