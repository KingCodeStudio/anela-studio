import Image from "next/image";
import CustomCursor from "./components/CustomCursor";

const services = [
  {
    number: "01",
    title: "Brand Strategy & Positioning",
    description:
      "Translating brand DNA into compelling narratives and distinctive identities that resonate across cultures and markets.",
  },
  {
    number: "02",
    title: "Social Media Management",
    description:
      "Full-service social strategy, content creation and community management for luxury beauty, fashion and lifestyle brands.",
  },
  {
    number: "03",
    title: "Influencer Marketing",
    description:
      "Strategic partnerships aligned with brand values, designed to drive awareness and conversion across GCC and Europe.",
  },
  {
    number: "04",
    title: "PR & Campaign Direction",
    description:
      "High-impact PR, press relations and campaign creative direction — from Dubai activations to pan-European digital campaigns.",
  },
  {
    number: "05",
    title: "Copywriting & Content",
    description:
      "Premium brand voice, campaign messaging, editorial content and copy across web, social and campaign touchpoints.",
  },
  {
    number: "06",
    title: "Virtual Events & Activations",
    description:
      "End-to-end virtual events and live activations that create immersive brand experiences beyond physical boundaries.",
  },
];

const clients = [
  "Miller Harris Perfumer London",
  "Oskia London",
  "Myriam.K Paris",
  "Ligne St Barth",
  "Faces",
  "Ounass",
  "GCC Lifestyle Houses",
  "Regional Fashion Brands",
  "Hospitality Partners",
];

const skills = [
  {
    letter: "I",
    title: "Influencer Marketing",
    description:
      "Talent identification, briefing, relationship management and performance tracking across GCC and European markets.",
  },
  {
    letter: "S",
    title: "Social Media Strategy",
    description:
      "Platform strategy, content calendars, community management and analytics-driven optimisation.",
  },
  {
    letter: "C",
    title: "Copywriting",
    description:
      "Premium brand copy, campaign messaging, editorial content and brand voice guidelines.",
  },
  {
    letter: "P",
    title: "PR & Media Relations",
    description:
      "Press strategy, media outreach, event-based PR and earned-media campaigns.",
  },
  {
    letter: "E",
    title: "Events & Activations",
    description:
      "Pop-up concepts, virtual launch events, brand experiences and cross-channel amplification.",
  },
];

const KING_CODE_STUDIO_URL = "#";

export default function Home() {
  return (
<>
  <CustomCursor />

    <main>
      {/* NAVIGATION */}
      <header className="navigation">
        <a href="#top" className="logo">
          Anela<span>.</span>
        </a>

        <nav>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#clients">Clients</a>
          <a href="#contact" className="navButton">
            Let&apos;s talk
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section id="top" className="hero">
        <div className="heroContent">
          <p className="eyebrow">Brand Strategy · Marketing Agency</p>

          <h1>
            Make your brand <em>unforgettable.</em>
          </h1>

          <p className="heroText">
            We craft bold brand narratives and unforgettable campaigns for
            luxury beauty, fashion and lifestyle houses — from Dubai to
            London, Paris to Bali.
          </p>

          <a href="#contact" className="button">
            Start a conversation
            <span>↗</span>
          </a>
        </div>

        <div className="heroVisual">
          <div className="heroCard">
            <span>Anela Studio</span>
            <strong>Creative<br />Direction</strong>
            <small>Dubai · Europe</small>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section">
        <p className="sectionLabel">Who We Are</p>

        <div className="twoColumn">
          <h2>
            About <em>Us</em>
          </h2>

          <div className="sectionCopy">
            <p className="largeText">
              We&apos;re Anela — a marketing agency with 5+ years of
              experience building powerful brand presences for renowned
              luxury beauty, fashion and lifestyle houses across the GCC and
              Europe.
            </p>

            <p>
              With a portfolio spanning over 30 prestigious brands, we
              specialise in translating brand DNA into compelling campaigns —
              from pop-up activations in Dubai&apos;s finest malls to
              pan-European digital campaigns and high-impact PR strategies.
            </p>

            <p>
              We bring creative direction and commercial acumen together to
              deliver results that matter — and stories that last.
            </p>
          </div>
        </div>

        <div className="stats">
          <div>
            <strong>5+</strong>
            <span>Years Experience</span>
          </div>

          <div>
            <strong>30+</strong>
            <span>Prestigious Brands</span>
          </div>

          <div>
            <strong>2</strong>
            <span>Continents</span>
          </div>
        </div>

        <div className="imagePlaceholder">
          <span>ANELA / EDITORIAL</span>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="section pinkSection">
        <p className="sectionLabel">What We Do</p>

        <div className="sectionHeading">
          <h2>
            Services &amp; <em>Expertise</em>
          </h2>

          <p>
            Strategy, creativity and execution — connected by a clear
            understanding of the brand.
          </p>
        </div>

        <div className="serviceList">
          {services.map((service) => (
            <article className="serviceRow" key={service.number}>
              <span className="serviceNumber">{service.number}</span>

              <h3>{service.title}</h3>

              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* CLIENTS */}
      <section id="clients" className="section">
        <p className="sectionLabel">Selected Clients</p>

        <div className="twoColumn">
          <h2>
            Brands we&apos;ve <em>worked with.</em>
          </h2>

          <p className="largeText">
            A curated selection of houses we&apos;ve had the privilege of
            working with — spanning luxury beauty, niche fragrance, fashion,
            hospitality and lifestyle.
          </p>
        </div>

        <div className="clientGrid">
          {clients.map((client) => (
            <div className="client" key={client}>
              <span>—</span>
              {client}
            </div>
          ))}
        </div>

        <blockquote>
          “Always brand-first, audience-always.”
        </blockquote>
      </section>

      {/* EXPERTISE */}
      <section className="section paleSection">
        <p className="sectionLabel">Core Skills</p>

        <div className="sectionHeading">
          <h2>
            Deep <em>Expertise</em>
          </h2>

          <p>
            Focused capabilities for brands that care about how they show up
            in the world.
          </p>
        </div>

        <div className="skills">
          {skills.map((skill) => (
            <article className="skill" key={skill.title}>
              <span className="skillIcon">{skill.letter}</span>

              <div>
                <h3>{skill.title}</h3>
                <p>{skill.description}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="approach">
          <span>Approach</span>

          <p>
            “Every strategy starts with understanding the brand&apos;s soul —
            then we find the language, channels, and moments to make it
            undeniable.”
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section contactSection">
        <p className="sectionLabel">Let&apos;s Connect</p>

        <h2>
          Work <em>Together</em>
        </h2>

        <p className="largeText">
          Ready to build something extraordinary?
        </p>

        <div className="contactDetails">
          <div>
            <span>Email</span>
            <a href="mailto:hello@anelastudio.com">
              hello@anelastudio.com
            </a>
          </div>

          <div>
            <span>Based In</span>
            <p>Dubai, UAE · Available Globally</p>
          </div>

          <div>
            <span>Specialities</span>
            <p>Luxury Beauty · Fashion · Lifestyle</p>
          </div>

          <div>
            <span>Markets</span>
            <p>GCC · Europe · Bali · MENA</p>
          </div>

          <div>
            <span>Languages</span>
            <p>English · French</p>
          </div>
        </div>

        <div className="contactBox">
          <p>
            Whether you&apos;re launching a new brand into the GCC, scaling a
            European beauty house across the Gulf, or need a strategic partner
            who understands both worlds — we&apos;re ready.
          </p>

          <a
            href="mailto:hello@anelastudio.com"
            className="button darkButton"
          >
            hello@anelastudio.com
            <span>↗</span>
          </a>
        </div>
      </section>

      {/* FOOTER */}
    <footer className="footer">
  <span>Anela Studio</span>

  <span>Dubai · London · Paris · Bali · GCC</span>

  <a
    href={KING_CODE_STUDIO_URL}
    className="kingCodeLink"
    aria-label="King Code Studio"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Image
      src="/branding/king-code-studio.png"
      alt="King Code Studio"
      width={42}
      height={42}
    />
  </a>

  <span>© 2026 Anela Studio</span>
</footer>
    </main>
    
  </>
  );
}