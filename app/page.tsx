"use client";

import Image from "next/image";
import CustomizationConfigurator from "./CustomizationConfigurator";

const whatsappUrl = "https://wa.me/8618957372563";
const quoteEmail =
  "mailto:allen@twowell.net?subject=Win-Win%20Wet%20Wipes%20Solution%20Inquiry&body=Product%20or%20market%20idea%3A%0ACurrent%20challenge%3A%0APackaging%20format%3A%0AEstimated%20quantity%3A%0ADestination%20market%3A%0ATarget%20launch%20date%3A";

const Arrow = () => <span aria-hidden="true">↗</span>;
const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.198-.347.223-.644.074-.297-.148-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.009-.371-.011-.57-.011-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.981.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884a9.82 9.82 0 0 1 7.021 2.91 9.825 9.825 0 0 1 2.9 7.02c-.003 5.45-4.438 9.884-9.889 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
  </svg>
);

const solutions = [
  {
    number: "01",
    label: "NEW PRODUCT",
    title: "Launch a Market-Ready Wipe",
    text: "Turn a buyer need into the right material, formula, format and approved sample.",
    result: "7-day sampling",
  },
  {
    number: "02",
    label: "PRODUCT UPGRADE",
    title: "Improve an Existing Wipe",
    text: "Improve wipe performance, packaging or cost from an existing product reference.",
    result: "Practical upgrades",
  },
  {
    number: "03",
    label: "RELIABLE SUPPLY",
    title: "Scale with Better Control",
    text: "Lock the approved specification, checkpoints and delivery plan before bulk production.",
    result: "Repeatable orders",
  },
];

const productFamilies = [
  {
    number: "01",
    title: "Cleaning & Hygiene Wipes",
    text: "Daily-use wipes for personal hygiene, footwear and household cleaning.",
    items: ["Baby Wipes", "Shoe Cleaning Wipes", "Household Cleaning Wipes", "Body Wipes"],

    images: ["/assets/products/shoe-cleaning-wipes.jpg"],
    crop: "family-cleaning",
  },
  {
    number: "02",
    title: "Women’s & Beauty Wipes",
    text: "Gentle-care and cleansing programs covering intimate care, facial care and beauty routines.",
    items: ["Feminine Care Wipes", "Makeup Remover Wipes", "Eyelid Wipes", "Nail Polish Remover Wipes", "Sunscreen Wipes"],

    images: ["/assets/products/feminine-care-wipes.jpg", "/assets/products/makeup-remover-wipes.jpg"],
    crop: "family-women",
  },
  {
    number: "03",
    title: "Functional Wipes",
    text: "Purpose-built wipes developed around specific environments, functions and performance needs.",
    items: ["Gym Wipes", "Mosquito Repellent Wipes", "Lens Wipes"],

    images: ["/assets/customization/material-bamboo.jpg", "/assets/customization/packaging-formats.jpg"],
    crop: "family-personal",
  },
];
const process = [
  ["01", "DEFINE", "Share Requirements", "Tell us the use, target market, pack format and estimated quantity."],
  ["02", "DESIGN", "Build the Solution", "We align the substrate, sheet size, formula direction and packaging plan."],
  ["03", "TEST", "Develop the Sample", "A physical sample is prepared in about 7 days for your evaluation."],
  ["04", "CONFIRM", "Approve the Details", "Confirm the sample, artwork, specification and commercial terms."],
  ["05", "MAKE", "Start Mass Production", "The approved sample becomes the production reference for the order."],
  ["06", "DELIVER", "Inspect & Ship", "Complete final inspection, packing and shipment preparation."],
];

const faqs = [
  [
    "What are your minimum order quantities?",
    "10,000 pieces for individual sachets, 5,000 packs for resealable soft packs, and 5,000 canisters. Final MOQ depends on material, formula and print requirements.",
  ],
  [
    "Can Twowell develop a fully customized wet wipe?",
    "Yes. We support OEM and ODM development across substrate, sheet size, embossing, formula direction, moisture level, fragrance and packaging.",
  ],
  [
    "How long do sampling and production take?",
    "Typical sample preparation is 7 days. Planned mass-production lead time is around 30 days after sample, formula and artwork approval.",
  ],
  [
    "Can you support packaging design?",
    "We provide the production dimensions and check final artwork for print area and manufacturing feasibility before production.",
  ],
  [
    "Which markets do you serve?",
    "Our main export business serves customers in Europe, North America and other developed markets.",
  ],
  [
    "Can you develop a wipe application that is not listed here?",
    "Yes. Share the use case, user, target market and expected pack format. We will assess the material, formula, size, packaging and production route for a practical OEM or ODM proposal.",
  ],
];

export default function Home() {
  return (
    <main>
      <div className="topbar">
        <div className="shell topbar-inner">
          <p>Win-Win Wet Wipes Solutions · OEM &amp; ODM from Haining, China</p>
          <div>
            <a href="mailto:allen@twowell.net">allen@twowell.net</a>
            <span>·</span>
            <a href="tel:+8618957372563">+86 189 5737 2563</a>
          </div>
        </div>
      </div>

      <header className="site-header">
        <div className="shell header-inner">
          <a className="brand" href="#top" aria-label="Twowell home">
            <Image src="/assets/brand/twowell-logo-transparent.png" alt="Twowell — Win-Win Situation" width={1162} height={864} priority />
          </a>
          <nav aria-label="Main navigation">
            <a href="#solutions">Solutions</a>
            <a href="#products">Products</a>
            <a href="#customization">Customization</a>
            <a href="#manufacturing">Manufacturing</a>
            <a href="#quality">Quality</a>
          </nav>
          <a className="button button-small" href="#contact">Build My Solution <Arrow /></a>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="hero-banner-frame">
          <Image className="hero-banner" src="/assets/hero/twowell-home-banner-clean-v4.png" alt="Twowell wet wipes manufacturing line" width={1730} height={909} sizes="100vw" priority />
          <div className="hero-banner-copy">
            <p>WIN-WIN SOLUTION</p>
            <h1><span>Custom Wet Wipes,</span><span>Ready for Your Brand.</span></h1>
          </div>
          <div className="hero-banner-cta">
            <p className="hero-cta-kicker">READY TO BUILD YOUR OWN WIPES?</p>
            <p className="hero-cta-copy">Tell us the use, pack format and target market. We&apos;ll turn your brief into a practical OEM &amp; ODM proposal.</p>
            <div className="hero-actions">
              <a className="button" href="#contact">Get a Custom Proposal <Arrow /></a>

            </div>
          </div>
        </div>
      </section>

      <section className="proof-strip" aria-label="Factory facts">
        <div className="shell proof-grid">
          <div><strong>5,000</strong><span>m² Factory</span></div>
          <div><strong>15</strong><span>Production Lines</span></div>
          <div><strong>7 Days</strong><span>Sample Time</span></div>
          <div><strong>30 Days</strong><span>Planned Bulk Lead Time</span></div>
        </div>
      </section>

      <section className="section solutions-section" id="solutions">
        <div className="shell">
          <div className="section-heading split-heading">
            <div><p className="eyebrow">YOUR GOAL · OUR WIN-WIN SOLUTION</p><h2>Turn Your Market Need into a Production-Ready Wipes Solution.</h2></div>
            <p>Whether you are launching a new range, improving an existing product or securing repeat supply, Twowell builds the specification and production plan around your commercial goal.</p>
          </div>
          <div className="solution-grid">
            {solutions.map((item) => (
              <article className="solution-card" key={item.number}>
                <div className="card-top"><span>{item.number}</span><em>{item.label}</em></div>
                <h3>{item.title}</h3>
                <p className="solution-summary">{item.text}</p>
                <p className="result"><span>Outcome</span>{item.result}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section product-section" id="products">
        <div className="shell">
          <div className="section-heading split-heading light-heading">
            <div><p className="eyebrow">WET WIPES SOLUTIONS BY MARKET</p><h2>One Factory. Wet Wipes for More Markets.</h2></div>
            <p>Three clear product families help buyers find the right route faster—from daily hygiene and beauty care to purpose-built functional wipes.</p>
          </div>
          <div className="product-family-grid">
            {productFamilies.map((family) => (
              <article className="product-family-card" key={family.number}>
                <div className={`product-family-media ${family.crop}`}>
                  {family.images.map((image, index) => (
                    <div className="family-image" key={image}>
                      <Image src={image} alt="" fill sizes="(max-width: 900px) 100vw, 33vw" />
                      {family.crop === "family-personal" && index === 0 && <span className="development-label">CUSTOM CATEGORY DEVELOPMENT</span>}
                    </div>
                  ))}
                  <span className="family-number">{family.number}</span>
                </div>
                <div className="product-family-copy">
                  <h3>{family.title}</h3>
                  <p className="family-intro">{family.text}</p>
                  <div className="family-products family-range">
                    <ul>{family.items.map((item) => <li key={item}>{item}</li>)}</ul>
                  </div>
                  <a className="family-link" href="#contact">Build This Solution <Arrow /></a>
                </div>
              </article>
            ))}
          </div>
          <div className="product-family-cta">
            <div><strong>Do not see your category?</strong><p>Tell us the application, pack format and target market. We will build a practical OEM or ODM route around it.</p></div>
            <a className="button button-small" href="#contact">Discuss My Wipes <Arrow /></a>
          </div>
        </div>
      </section>

      <section className="section customize-section" id="customization">
        <div className="shell">
          <div className="section-heading split-heading">
            <div><p className="eyebrow">OEM &amp; ODM CUSTOMIZATION</p><h2>Build your wipe, one decision at a time.</h2></div>
            <p>Move through four practical decisions—from substrate and texture to finished packaging—with Twowell guiding each specification.</p>
          </div>
          <CustomizationConfigurator />
          <div className="packaging-support" id="packaging"><div><strong>Already have artwork?</strong><p>Send us the design and pack idea. We will check the print area and production feasibility before sampling.</p></div><a className="button button-small" href="#contact">Plan My Packaging <Arrow /></a></div>
        </div>
      </section>

      <section className="section manufacturing-section" id="manufacturing">
        <div className="shell">
          <div className="section-heading split-heading">
            <div><p className="eyebrow">MANUFACTURING CAPABILITY</p><h2>From Approved Sample to Stable Mass Production.</h2></div>
            <p>The approved sample becomes the production reference for material, formula, size, fold and packaging.</p>
          </div>
          <div className="factory-grid">
            <figure className="factory-main"><Image src="/assets/factory/factory-floor.png" alt="Twowell wet wipes factory floor" fill sizes="(max-width: 900px) 100vw, 60vw" /></figure>
            <figure><Image src="/assets/factory/wet-wipe-line.jpg" alt="Twowell wet wipes production line" fill sizes="(max-width: 900px) 100vw, 35vw" /></figure>
            <figure><Image src="/assets/factory/packing-line.jpg" alt="Twowell wet wipes packing line" fill sizes="(max-width: 900px) 100vw, 35vw" /></figure>
            <div className="factory-badge"><span>OEM &amp; ODM FACTORY</span><strong>15 Lines</strong><p>Wet wipes production and packing</p></div>
          </div>
          <div className="manufacturing-facts">
            <article><strong>5,000 m²</strong><span>Factory Area</span></article>
            <article><strong>15</strong><span>Production Lines</span></article>
            <article><strong>500,000,000</strong><span>Packs / Month</span></article>
            <article><strong>30 Days</strong><span>Planned Bulk Lead Time</span></article>
          </div>
          <p className="manufacturing-note">Production capacity and schedule are confirmed against the pack format, approved specification and order plan before production.</p>
        </div>
      </section>

      <section className="section quality-section" id="quality">
        <div className="shell">
          <div className="section-heading quality-heading">
            <div><p className="eyebrow">QUALITY CONTROL</p><h2>Quality Control at Every Production Checkpoint.</h2></div>
            <p>Each order is checked against the approved sample and confirmed specification from incoming materials to final packing.</p>
          </div>
          <div className="quality-control-grid">
            <article className="quality-control-card"><div className="quality-card-top"><span>01</span><strong>CHECKPOINT</strong></div><h3>Incoming Materials</h3><p>Confirm the substrate, packaging materials and order-specific inputs before production.</p><div className="quality-checks"><span>Substrate</span><span>Packaging</span><span>Order specification</span></div></article>
            <article className="quality-control-card"><div className="quality-card-top"><span>02</span><strong>CHECKPOINT</strong></div><h3>Pre-production Alignment</h3><p>Use the approved sample as the reference for size, fold, feel, formula and pack direction.</p><div className="quality-checks"><span>Approved sample</span><span>Size &amp; fold</span><span>Formula direction</span></div></article>
            <article className="quality-control-card"><div className="quality-card-top"><span>03</span><strong>CHECKPOINT</strong></div><h3>In-process Inspection</h3><p>Monitor key production and packing details while the order is running.</p><div className="quality-checks"><span>Moisture &amp; count</span><span>Seal</span><span>Print position</span></div></article>
            <article className="quality-control-card"><div className="quality-card-top"><span>04</span><strong>CHECKPOINT</strong></div><h3>Final Packing &amp; Release</h3><p>Check pack presentation, carton requirements and shipment readiness before dispatch.</p><div className="quality-checks"><span>Pack appearance</span><span>Carton</span><span>Shipment readiness</span></div></article>
          </div>
          <div className="quality-standard"><span>CONTROL BASIS</span><strong>Approved Sample + Confirmed Order Specification</strong><a href="#contact">Discuss Quality Requirements <Arrow /></a></div>
        </div>
      </section>

      <section className="section process-section" id="process">
        <div className="shell">
          <div className="section-heading split-heading process-heading">
            <div><p className="eyebrow">WORKING TOGETHER</p><h2>From Your Brief to Delivery, Every Step Is Clear.</h2></div>
            <p>You approve the important product and packaging decisions before mass production starts.</p>
          </div>
          <div className="process-route">
            {process.map(([number, phase, title, text]) => (
              <article className="process-step" key={number}>
                <div className="process-step-top"><span>{number}</span><strong>{phase}</strong></div>
                <h3>{title}</h3>
                <p>{text}</p>
                <div className="process-step-line" aria-hidden="true"><i /></div>
              </article>
            ))}
          </div>
          <div className="process-timing">
            <div><span>Typical Sampling</span><strong>About 7 Days</strong></div>
            <div className="process-timing-arrow" aria-hidden="true">→</div>
            <div><span>Planned Bulk Lead Time</span><strong>About 30 Days</strong></div>
            <a href="#contact">Start With Your Brief <Arrow /></a>
          </div>
        </div>
      </section>

      <section className="about-section">
        <div className="shell about-grid">
          <div><p className="eyebrow">WHY “WIN-WIN”</p><h2>A product only works when it works for both sides.</h2></div>
          <p>For buyers, that means a useful product, a workable MOQ and reliable delivery. For Twowell, it means clear requirements, stable production and a partnership that can grow. Our solution process is designed around that shared outcome.</p>
          <div className="about-mark"><Image src="/assets/brand/twowell-logo-transparent.png" alt="Twowell Win-Win Situation" width={1162} height={864} /></div>
        </div>
      </section>

      <section className="section faq-section" id="faq">
        <div className="shell faq-grid">
          <div className="faq-intro">
            <p className="eyebrow">BUYER FAQ</p>
            <h2>Questions Buyers Ask Before Starting.</h2>
            <p>MOQ, customization, sample timing and packaging are easier to confirm once we know the product use and target market.</p>
            <a className="faq-contact" href="#contact"><span>Need a category-specific answer?</span><strong>Send Your Brief <Arrow /></strong></a>
          </div>
          <div className="faq-list">{faqs.map(([q, a], index) => <details key={q} open={index === 0}><summary>{q}<span>+</span></summary><p>{a}</p></details>)}</div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="shell contact-grid">
          <div className="contact-copy">
            <p className="eyebrow">BUILD YOUR WIN-WIN SOLUTION</p>
            <h2>Send One Brief. Get a Practical Next Step.</h2>
            <p>Share what the wipe needs to do, how it should be packed and where it will be sold. Allen will review the production route with you.</p>
            <div className="contact-brief-points">
              <span>Product use &amp; target user</span>
              <span>Pack format &amp; estimated quantity</span>
              <span>Destination market &amp; launch plan</span>
            </div>
            <div className="contact-direct">
              <span>DIRECT CONTACT · ALLEN</span>
              <a href="mailto:allen@twowell.net">allen@twowell.net</a>
              <a href="tel:+8618957372563">+86 189 5737 2563</a>
              <a className="whatsapp-icon contact-whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Chat with Allen on WhatsApp"><WhatsAppIcon /></a>
            </div>
          </div>
          <form className="inquiry-form" action="https://formsubmit.co/allen@twowell.net" method="POST">
            <input type="hidden" name="_subject" value="New Twowell Website Inquiry" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_captcha" value="false" />
            <input className="form-honey" type="text" name="_honey" tabIndex={-1} autoComplete="off" />
            <div className="form-heading"><span>REQUEST A SOLUTION</span><strong>Tell Us What You Need.</strong></div>
            <div className="form-grid">
              <label><span>Your Name *</span><input name="name" type="text" required placeholder="Name" /></label>
              <label><span>Work Email *</span><input name="email" type="email" required placeholder="name@company.com" /></label>
              <label><span>Company</span><input name="company" type="text" placeholder="Company name" /></label>
              <label><span>Product Interest *</span><select name="product" required defaultValue=""><option value="" disabled>Select a category</option><option>Shoe Cleaning Wipes</option><option>Household Cleaning Wipes</option><option>Body Wipes</option><option>Baby Wipes</option><option>Feminine Care Wipes</option><option>Makeup Remover Wipes</option><option>Eyelid Wipes</option><option>Nail Polish Remover Wipes</option><option>Sunscreen Wipes</option><option>Gym Wipes</option><option>Mosquito Repellent Wipes</option><option>Lens Wipes</option><option>Other Custom Wipes</option></select></label>
              <label><span>Packaging Format</span><select name="packaging" defaultValue=""><option value="">Not decided yet</option><option>Individual Sachet</option><option>Resealable Soft Pack</option><option>Canister</option><option>Other</option></select></label>
              <label><span>Estimated Quantity</span><input name="quantity" type="text" placeholder="e.g. 10,000 packs" /></label>
              <label className="form-wide"><span>Destination Market</span><input name="market" type="text" placeholder="Country / region" /></label>
              <label className="form-wide"><span>Your Brief *</span><textarea name="message" required rows={4} placeholder="Use case, formula direction, sheet size, pack idea and target launch date" /></label>
            </div>
            <button className="button form-submit" type="submit">Request My Wipes Solution <Arrow /></button>
            <p className="form-note">Or email <a href={quoteEmail}>allen@twowell.net</a>. We usually reply within one business day.</p>
          </form>
        </div>
      </section>

      <footer>
        <div className="shell footer-grid footer-grid-expanded">
          <div className="footer-brand"><Image src="/assets/brand/twowell-logo-transparent.png" alt="Twowell — Win-Win Situation" width={1162} height={864} /><p>Custom wet wipes OEM &amp; ODM solutions from Haining, China.</p></div>
          <div><strong>Product Categories</strong><a href="#products">Cleaning &amp; Hygiene</a><a href="#products">Women’s &amp; Beauty</a><a href="#products">Functional Wipes</a></div>
          <div><strong>OEM &amp; ODM</strong><a href="#customization">Customization</a><a href="#packaging">Packaging Solutions</a><a href="#manufacturing">Manufacturing</a><a href="#quality">Quality Control</a></div>
          <div><strong>Contact Allen</strong><a href="mailto:allen@twowell.net">allen@twowell.net</a><a href="tel:+8618957372563">+86 189 5737 2563</a><a className="whatsapp-icon footer-whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Chat with Allen on WhatsApp"><WhatsAppIcon /></a></div>
        </div>
        <div className="shell footer-bottom"><span>© 2026 Twowell. All rights reserved.</span><span>Wet Wipes OEM &amp; ODM · Win-Win Solution</span></div>
      </footer>

      <a className="whatsapp-icon floating-whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Chat with Allen on WhatsApp"><WhatsAppIcon /></a>
    </main>
  );
}
