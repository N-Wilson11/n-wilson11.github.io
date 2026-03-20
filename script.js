const sections = document.querySelectorAll("main section[id]");
const navLinks = document.querySelectorAll(".section-nav a");
const panels = document.querySelectorAll(".panel");
const localizedNodes = document.querySelectorAll("[data-i18n]");
const localizedAttrNodes = document.querySelectorAll("[data-i18n-attr]");
const languageToggle = document.getElementById("lang-toggle");

const translations = {
    nl: {
        pageTitle: "Nathan Wilson | Portfolio",
        metaDescription: "Portfolio van Nathan Wilson, software developer en HBO Informatica student.",
        eyebrow: "Portfolio",
        role: "Software Developer",
        avansStudent: "Avans student",
        navProfile: "Profiel",
        navExperience: "Werkervaring",
        navEducation: "Opleiding",
        navStrengths: "Sterke punten",
        labelSkills: "Vaardigheden",
        labelWorkstyle: "Werkstijl",
        wsCurious: "Leergierig",
        wsStructured: "Planmatig",
        wsTeam: "Teamgericht",
        wsOnTime: "Op tijd",
        labelLocation: "Locatie",
        locationValue: "Nijmegen",
        labelLanguages: "Talen",
        languagesValue: "Nederlands, Engels",
        labelFocus: "Focus",
        focusSoftware: "Softwareontwikkeling",
        focusBackend: "Backend systemen",
        focusProblem: "Probleemoplossing",
        focusTeamwork: "Samenwerken",
        aboutTitle: "Profiel",
        aboutBody: "Mijn naam is Nathan Wilson en ik studeer Informatica aan Avans Hogeschool in 's-Hertogenbosch. Ik vind het leuk om aan uitdagende opdrachten te werken en nieuwe technologie snel eigen te maken. Tijdens schoolprojecten heb ik veel ervaring opgedaan met samenwerken, plannen en het opleveren van een goed eindresultaat.",
        expTitle: "Werkervaring",
        expIntro: "Praktijkervaring uit stage, sales en retail, met nadruk op samenwerken, verantwoordelijkheid en ontwikkeling.",
        exp1Role: "Stagiair Platformontwikkeling",
        exp1Company: "Yoast | Wijchen",
        exp1Date: "2025",
        exp1Body: "Tijdens een stage van 20 weken deed ik ervaring op in een professionele developmentomgeving. Ik werkte met bestaande systemen, backend-gerichte taken en DevOps-processen. Daarbij leerde ik meer over API's, databases, productieomgevingen en samenwerken binnen een team.",
        exp2Role: "Salesmedewerker",
        exp2Company: "Pepperminds | Nijmegen",
        exp2Date: "2023",
        exp2Body: "In deze functie ontwikkelde ik mijn communicatieve vaardigheden en leerde ik doelgericht werken. De rol vroeg om doorzettingsvermogen, verantwoordelijkheid en goed kunnen samenwerken in een resultaatgerichte omgeving.",
        exp3Role: "Winkelmedewerker",
        exp3Company: "Albert Heijn | Nijmegen",
        exp3Date: "2021 - 2023",
        exp3Body: "Bij Albert Heijn leerde ik klantgericht werken, verantwoordelijkheid nemen en effectief samenwerken met collega's. Deze ervaring heeft mijn discipline en werkhouding verder versterkt.",
        eduTitle: "Opleiding",
        eduIntro: "Mijn studieachtergrond met focus op softwareontwikkeling en informatica.",
        edu1Title: "HBO Informatica",
        edu1School: "Avans Hogeschool | Den Bosch",
        edu1Date: "2022 - heden",
        edu1Body: "Binnen mijn opleiding richt ik mij op softwareontwikkeling en werk ik aan projecten waarin techniek, samenwerking en het opleveren van kwaliteit centraal staan. De studie sluit goed aan op mijn ambitie om door te groeien als software developer.",
        edu2Title: "HBO Technische Informatica",
        edu2School: "Avans Hogeschool | Den Bosch",
        edu2Date: "2021 - 2022",
        edu2Body: "Oriëntatiejaar waarin ik een technische basis opbouwde die goed aansloot op mijn overstap naar Informatica.",
        strengthTitle: "Sterke punten",
        strengthIntro: "Eigenschappen en vaardigheden die terugkomen in mijn opleiding en werkervaring.",
        s1Tag1: "Samenwerking",
        s1Title: "Teamgericht",
        s1Body: "Ik werk graag samen aan een gezamenlijk doel en heb op school en tijdens werk geleerd hoe belangrijk duidelijke afstemming is.",
        s2Tag1: "Communicatie",
        s2Tag2: "Klantcontact",
        s2Title: "Communicatief",
        s2Body: "Door mijn ervaring bij Pepperminds en Albert Heijn heb ik geleerd helder te communiceren en professioneel met mensen om te gaan.",
        s3Title: "Technisch leergierig",
        s3Body: "Tijdens mijn stage heb ik gewerkt met API's, databases en productieomgevingen. Ik pak nieuwe technische onderwerpen snel op.",
        s4Tag1: "Planning",
        s4Tag2: "Verantwoordelijkheid",
        s4Title: "Betrouwbaar",
        s4Body: "Ik vind het belangrijk om op tijd te zijn, met een plan te werken en verantwoordelijkheid te nemen voor het resultaat van mijn werk."
    },
    en: {
        pageTitle: "Nathan Wilson | Portfolio",
        metaDescription: "Portfolio of Nathan Wilson, software developer and HBO Informatics student.",
        eyebrow: "Portfolio",
        role: "Software Developer",
        avansStudent: "Avans student",
        navProfile: "Profile",
        navExperience: "Experience",
        navEducation: "Education",
        navStrengths: "Strengths",
        labelSkills: "Skills",
        labelWorkstyle: "Work style",
        wsCurious: "Curious",
        wsStructured: "Structured",
        wsTeam: "Team-oriented",
        wsOnTime: "Punctual",
        labelLocation: "Location",
        locationValue: "Nijmegen",
        labelLanguages: "Languages",
        languagesValue: "Dutch, English",
        labelFocus: "Focus",
        focusSoftware: "Software development",
        focusBackend: "Backend systems",
        focusProblem: "Problem solving",
        focusTeamwork: "Collaboration",
        aboutTitle: "Profile",
        aboutBody: "My name is Nathan Wilson and I study Informatics at Avans University of Applied Sciences in 's-Hertogenbosch. I enjoy working on challenging assignments and quickly learning new technologies. During school projects, I gained strong experience in collaboration, planning, and delivering high-quality results.",
        expTitle: "Experience",
        expIntro: "Hands-on experience from internship, sales, and retail, with a strong focus on collaboration, responsibility, and personal growth.",
        exp1Role: "Platform Development Intern",
        exp1Company: "Yoast | Wijchen",
        exp1Date: "2025",
        exp1Body: "During a 20-week internship, I gained experience in a professional development environment. I worked with existing systems, backend-focused tasks, and DevOps processes. This helped me deepen my understanding of APIs, databases, production environments, and teamwork.",
        exp2Role: "Sales Associate",
        exp2Company: "Pepperminds | Nijmegen",
        exp2Date: "2023",
        exp2Body: "In this role, I developed strong communication skills and learned to work in a goal-oriented way. The job required perseverance, responsibility, and effective collaboration in a results-driven environment.",
        exp3Role: "Store Associate",
        exp3Company: "Albert Heijn | Nijmegen",
        exp3Date: "2021 - 2023",
        exp3Body: "At Albert Heijn, I learned customer-focused service, taking responsibility, and collaborating effectively with colleagues. This experience strengthened my discipline and work ethic.",
        eduTitle: "Education",
        eduIntro: "My educational background with a focus on software development and informatics.",
        edu1Title: "HBO Informatics",
        edu1School: "Avans University of Applied Sciences | Den Bosch",
        edu1Date: "2022 - present",
        edu1Body: "Within my degree, I focus on software development and projects where technology, collaboration, and quality delivery are central. The program aligns well with my ambition to grow as a software developer.",
        edu2Title: "HBO Technical Informatics",
        edu2School: "Avans University of Applied Sciences | Den Bosch",
        edu2Date: "2021 - 2022",
        edu2Body: "Orientation year in which I built a technical foundation that supported my transition to Informatics.",
        strengthTitle: "Strengths",
        strengthIntro: "Personal qualities and skills that consistently show in my studies and work experience.",
        s1Tag1: "Collaboration",
        s1Title: "Team-oriented",
        s1Body: "I enjoy working with others toward a shared goal and have learned through both study and work how important clear alignment is.",
        s2Tag1: "Communication",
        s2Tag2: "Customer contact",
        s2Title: "Communicative",
        s2Body: "Through my experience at Pepperminds and Albert Heijn, I learned to communicate clearly and interact professionally with people.",
        s3Title: "Technically curious",
        s3Body: "During my internship, I worked with APIs, databases, and production environments. I pick up new technical topics quickly.",
        s4Tag1: "Planning",
        s4Tag2: "Ownership",
        s4Title: "Reliable",
        s4Body: "I value punctuality, structured planning, and taking responsibility for the final quality of my work."
    }
};

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

const setLanguage = language => {
    const currentTranslations = translations[language] ?? translations.nl;

    localizedNodes.forEach(node => {
        const key = node.dataset.i18n;
        const translatedValue = currentTranslations[key];

        if (translatedValue) {
            node.textContent = translatedValue;
        }
    });

    localizedAttrNodes.forEach(node => {
        const [key, attribute] = node.dataset.i18nAttr.split("|");
        const translatedValue = currentTranslations[key];

        if (translatedValue && attribute) {
            node.setAttribute(attribute, translatedValue);
        }
    });

    document.documentElement.lang = language;

    if (languageToggle) {
        const nextLanguage = language === "nl" ? "en" : "nl";
        languageToggle.textContent = nextLanguage.toUpperCase();
        languageToggle.setAttribute(
            "aria-label",
            nextLanguage === "en" ? "Switch language to English" : "Wijzig taal naar Nederlands"
        );
    }

    localStorage.setItem("portfolio-language", language);
};

if (languageToggle) {
    languageToggle.addEventListener("click", () => {
        const activeLanguage = document.documentElement.lang === "en" ? "en" : "nl";
        setLanguage(activeLanguage === "nl" ? "en" : "nl");
    });
}

const savedLanguage = localStorage.getItem("portfolio-language");
setLanguage(savedLanguage === "en" ? "en" : "nl");