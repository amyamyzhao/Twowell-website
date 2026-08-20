import Image from "next/image";

const whatsappUrl = "https://wa.me/8618957372563";

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M20.5 3.5A11.8 11.8 0 0 0 12.1 0C5.6 0 .3 5.3.3 11.8c0 2.1.5 4.2 1.6 6L.2 24l6.4-1.7c1.7.9 3.6 1.4 5.5 1.4h.1c6.5 0 11.8-5.3 11.8-11.8 0-3.2-1.2-6.1-3.5-8.4Zm-8.4 18.2c-1.8 0-3.5-.5-5-1.4l-.4-.2-3.8 1 1-3.7-.2-.4a9.8 9.8 0 1 1 8.4 4.7Zm5.4-7.3c-.3-.2-1.8-.9-2.1-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-1.8-.9-3-1.6-4.2-3.7-.3-.6.3-.5.9-1.7.1-.2 0-.4 0-.6l-1-2.4c-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.2 1.2-1.2 2.9s1.2 3.3 1.4 3.6c.2.2 2.5 3.8 6 5.3.8.4 1.5.6 2 .7.8.3 1.6.2 2.2.1.7-.1 1.8-.7 2-1.4.3-.7.3-1.3.2-1.4 0-.2-.3-.3-.6-.4Z" />
  </svg>
);

const ArrowIcon = () => <span aria-hidden="true">↗</span>;

const products = [
  {
    number: "01",
    title: "Shoe Cleaning Wipes",
    text: "Portable, dual-texture and formula options developed for footwear-care brands, retailers and promotional programs.",
    tags: ["Single sachet", "Raised dots", "Custom formula"],
    style: "shoe",
    packTitle: "STEP / FRESH",
    packSub: "SHOE CLEANING WIPES",
  },
  {
    number: "02",
    title: "Feminine Care Wipes",
    text: "Gentle personal-care wipe programs with customizable substrate, fragrance direction and discreet pack formats.",
    tags: ["pH-conscious options", "Single sachet", "Soft pack"],
    style: "feminine",
    packTitle: "SOFT / DAY",
    packSub: "FEMININE CARE WIPES",
  },
  {
    number: "03",
    title: "Makeup Remover Wipes",
    text: "Private-label cleansing wipes in individual or multi-count packs, shaped for beauty, travel and daily-care ranges.",
    tags: ["Alcohol-free options", "Soft & gentle", "Resealable pack"],
    style: "makeup",
    packTitle: "BARE / SKIN",
    packSub: "MAKEUP REMOVER WIPES",
  },
];

const customOptions = [
  ["01", "Material", "Spunlace, cotton, bamboo and other substrate directions."],
  ["02", "Size & Weight", "Sheet dimensions, GSM and folded format for your use case."],
  ["03", "Embossing", "Plain, pearl, mesh, weave and raised-dot texture options."],
  ["04", "Formula", "Fragrance, moisture level and ingredient direction by brief."],
  ["05", "Packaging", "Single sachet, resealable soft pack, canister and box."],
  ["06", "Branding", "Custom colors, graphics, logo, barcode and market copy."],
];

const processSteps = [
  ["01", "Send your brief", "Product use, pack type, quantity and target market."],
  ["02", "Confirm solution", "We align substrate, size, formula and packaging."],
  ["03", "Sample in 7 days", "Review the physical product before bulk production."],
  ["04", "Artwork approval", "Your print-ready design is checked and confirmed."],
  ["05", "Mass production", "Planned lead time is around 30 days after approval."],
  ["06", "Inspection & ship", "Final checks and export coordination for delivery."],
];

const faqs = [
  ["What is your minimum order quantity?", "The MOQ is 10,000 pieces for individual sachets, 5,000 packs for resealable soft packs, and 5,000 canisters. Final MOQ can vary with material, formula and print requirements."],
  ["Can you develop a fully custom wet wipe?", "Yes. Twowell supports OEM and ODM development across substrate, sheet size, embossing, formula direction, moisture level, fragrance and packaging design."],
  ["How long does sampling and production take?", "Typical sample preparation is 7 days. Planned mass-production lead time is around 30 days after sample, formula and artwork approval."],
  ["Can you help with packaging artwork?", "We can provide dielines and production requirements, then check your final artwork for size, print area and manufacturing feasibility before production."],
  ["Which markets do you mainly export to?", "Our main business serves customers in Europe, North America and other developed markets. Product specifications and documentation are aligned to the buyer's requested destination and program."],
  ["How do I receive a quotation?", "Send the product type, pack format, wipe count, size, estimated order quantity and destination market to Jacky by email or WhatsApp. A photo or reference product is also helpful."],
];

export default function Home() {
  return (
    <main>
      <div className="topbar">
        <div className="shell topbar-inner">
          <p>OEM &amp; ODM Wet Wipes Manufacturer · Haining, China</p>
          <div>
            <a href="mailto:allen@twowell.net">allen@twowell.net</a>
            <span>·</span>
            <a href="tel:+8618957372563">+86 189 5737 2563</a>
          </div>
        </div>
      </div>

      <header className="site-header">
        <div className="shell header-inner">
          <a className="brand" href="#top" aria-label="Twowell home"><span className="brand-mark" aria-hidden="true" /></a>
          <nav aria-label="Main navigation">
            <a href="#products">Products</a>
            <a href="#oem">OEM &amp; ODM</a>
            <a href="#factory">Manufacturing</a>
            <a href="#quality">Quality</a>
            <a href="#about">About Us</a>
          </nav>
          <a className="header-cta" href="#quote">Get a Quote <ArrowIcon /></a>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="hero-orb hero-orb-one" />
        <div className="hero-orb hero-orb-two" />
        <div className="shell hero-grid">
          <div className="hero-copy">
            <p className="eyebrow"><span /> Custom Wet Wipes Manufacturer · Since 2015</p>
            <h1>Custom Wet Wipes,<br /><em>Ready for Your Brand.</em></h1>
            <p className="hero-lead">From material and formula to shelf-ready packaging, Twowell helps brands and distributors launch reliable wet wipes with flexible OEM &amp; ODM support.</p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#quote">Get an OEM Quote <span>→</span></a>
              <a className="btn btn-whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer"><WhatsAppIcon /> WhatsApp Jacky</a>
            </div>
            <p className="response-note"><span /> Direct factory response within 24 hours</p>
          </div>

          <div className="hero-visual" aria-label="Twowell custom wet wipes manufacturing">
            <div className="factory-frame">
              <Image src="/assets/factory/wet-wipe-line.jpg" alt="Twowell wet wipes production line" fill priority sizes="(max-width: 980px) 90vw, 520px" />
              <div className="factory-label"><span>01</span><strong>In-house<br />production</strong></div>
            </div>
            <div className="product-stage">
              <div className="soft-pack">
                <span className="pack-lid" /><span className="pack-kicker">YOUR BRAND</span>
                <strong>PURE<br />CARE</strong><small>PREMIUM WET WIPES</small><i>80 WIPES</i>
              </div>
              <div className="sachet sachet-one"><span>YOUR LOGO</span><strong>SHOE<br />WIPES</strong><small>ON THE GO</small></div>
              <div className="sachet sachet-two"><span>PRIVATE LABEL</span><strong>DAILY<br />CARE</strong><small>GENTLE &amp; FRESH</small></div>
            </div>
            <div className="hero-badge"><strong>3</strong><span>Packaging<br />formats</span></div>
          </div>
        </div>
        <div className="shell proof-strip">
          <div><strong>5,000 m²</strong><span>Factory Area</span></div>
          <div><strong>15</strong><span>Production Lines</span></div>
          <div><strong>7 Days</strong><span>Sample Time</span></div>
          <div><strong>5,000</strong><span>MOQ from Packs</span></div>
        </div>
      </section>

      <section className="buyer-bar">
        <div className="shell buyer-grid">
          <p>Built for ambitious</p>
          <div><span>01</span> Consumer Brands</div>
          <div><span>02</span> Importers &amp; Distributors</div>
          <div><span>03</span> Retail &amp; Private Label</div>
        </div>
      </section>

      <section className="section products-section" id="products">
        <div className="shell">
          <div className="section-heading heading-split">
            <div><p className="section-kicker">What we make</p><h2>Three categories built<br />to lead your range.</h2></div>
            <p>Product-first programs for buyers who need reliable manufacturing, flexible customization and packaging that is ready for market.</p>
          </div>
          <div className="product-grid">
            {products.map((product) => (
              <article className={`product-card ${product.style}`} key={product.title}>
                <div className="product-image">
                  <span className="product-number">{product.number}</span>
                  <div className="product-pack">
                    <small>YOUR BRAND</small><strong>{product.packTitle}</strong><i>{product.packSub}</i><b>20 WIPES</b>
                  </div>
                  <div className="wipe-sheet" aria-hidden="true" />
                </div>
                <div className="product-content">
                  <h3>{product.title}</h3><p>{product.text}</p>
                  <ul>{product.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
                  <a href="#quote">Request product options <span>→</span></a>
                </div>
              </article>
            ))}
          </div>
          <div className="more-products"><strong>More wet wipe programs</strong><span>Eyelid Wipes</span><span>Body Wipes</span><span>Pet Wipes</span><a href="#quote">Ask about another application <ArrowIcon /></a></div>
        </div>
      </section>

      <section className="section oem-section" id="oem">
        <div className="shell">
          <div className="section-heading center-heading">
            <p className="section-kicker light">Build your own product</p>
            <h2>One partner. Every custom detail.</h2>
            <p>Start with a clear brief or a reference sample. We turn it into a coordinated specification for production.</p>
          </div>
          <div className="custom-grid">
            {customOptions.map(([number, title, text]) => (
              <article className="custom-card" key={title}><span>{number}</span><div className={`custom-icon icon-${number}`} aria-hidden="true" /><h3>{title}</h3><p>{text}</p></article>
            ))}
          </div>
          <div className="packaging-panel">
            <div className="packaging-intro"><p className="section-kicker">Flexible packaging</p><h3>Choose the format that fits your channel.</h3><p>MOQ is based on your final material, printing and specification. These figures are the standard starting points.</p></div>
            <div className="package-types">
              <div className="package-type"><div className="mini-sachet"><span>YOUR LOGO</span><b>ONE</b></div><div><strong>Individual Sachet</strong><p>Travel, beauty, care &amp; promotional use</p><span>MOQ <b>10,000 pcs</b></span></div></div>
              <div className="package-type"><div className="mini-soft"><i /><span>BRAND</span></div><div><strong>Resealable Soft Pack</strong><p>Everyday multi-count consumer packs</p><span>MOQ <b>5,000 packs</b></span></div></div>
              <div className="package-type"><div className="mini-can"><i /><span>WIPES</span></div><div><strong>Canister</strong><p>High-count household or professional use</p><span>MOQ <b>5,000 canisters</b></span></div></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section factory-section" id="factory">
        <div className="shell factory-grid">
          <div className="factory-gallery">
            <div className="factory-main"><Image src="/assets/factory/factory-floor.png" alt="Twowell wet wipes factory floor" fill sizes="(max-width: 980px) 90vw, 500px" /></div>
            <div className="factory-small"><Image src="/assets/factory/packing-line.jpg" alt="Twowell wet wipes packing line" fill sizes="(max-width: 640px) 45vw, 260px" /></div>
            <div className="since-card"><span>Since</span><strong>2015</strong><small>Wet wipes manufacturing</small></div>
          </div>
          <div className="factory-copy">
            <p className="section-kicker">Manufacturing at scale</p>
            <h2>A factory set up for repeatable OEM delivery.</h2>
            <p>Haining Twowell Daily Commodity Co., Ltd. develops and manufactures custom wet wipe programs for overseas brands, importers and retailers.</p>
            <ul className="factory-points">
              <li><span>✓</span><div><strong>Multi-format production</strong><p>Individual, soft-pack and canister formats from one manufacturing partner.</p></div></li>
              <li><span>✓</span><div><strong>Export-oriented coordination</strong><p>Focused on customers in Europe, North America and other developed markets.</p></div></li>
              <li><span>✓</span><div><strong>Commercially workable timing</strong><p>7-day sample target and around 30 days for planned bulk production.</p></div></li>
            </ul>
            <a className="text-link" href="#quote">Discuss your production plan <span>→</span></a>
          </div>
        </div>
        <div className="shell capacity-grid">
          <div><strong>500,000,000</strong><span>Packs monthly capacity</span></div>
          <div><strong>15</strong><span>Production lines</span></div>
          <div><strong>5,000 m²</strong><span>Factory area</span></div>
          <div><strong>30 Days</strong><span>Planned production</span></div>
        </div>
      </section>

      <section className="section quality-section" id="quality">
        <div className="shell quality-grid">
          <div className="quality-copy">
            <p className="section-kicker">Quality built into the workflow</p><h2>Clear checkpoints from material to shipment.</h2>
            <p>Every project begins with an agreed specification. Material, formula, packaging and finished-product checks are coordinated around that approved brief.</p>
            <a className="btn btn-primary" href="#quote">Ask for documentation <span>→</span></a>
          </div>
          <div className="quality-checks">
            <div><span>01</span><h3>Incoming Material</h3><p>Substrate and packaging inputs checked against the confirmed specification.</p></div>
            <div><span>02</span><h3>Formula Records</h3><p>Batch and formula requirements documented for repeatable production.</p></div>
            <div><span>03</span><h3>In-process Control</h3><p>Production and packing checkpoints monitored during the manufacturing run.</p></div>
            <div><span>04</span><h3>Finished Goods</h3><p>Final appearance, packing and order checks before release for shipment.</p></div>
          </div>
        </div>
        <div className="shell documentation-note"><span>i</span><p><strong>Need compliance documents?</strong> Tell us the product and destination market. Available test and technical documentation can be discussed for your specific project.</p></div>
      </section>

      <section className="section process-section">
        <div className="shell">
          <div className="section-heading heading-split"><div><p className="section-kicker">How we work</p><h2>From brief to bulk<br />in six clear steps.</h2></div><p>A practical development process keeps specifications, timing and approvals visible before production begins.</p></div>
          <div className="process-grid">
            {processSteps.map(([number,title,text]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}
          </div>
        </div>
      </section>

      <section className="section about-section" id="about">
        <div className="shell about-grid">
          <div><p className="section-kicker light">Your China manufacturing team</p><h2>Responsive support for buyers across developed markets.</h2></div>
          <p>Our role is more than making a wipe. We help commercial teams translate a market idea into substrate, formula, pack format and production details that a factory can execute.</p>
          <div className="market-list"><span>EUROPE</span><span>NORTH AMERICA</span><span>OTHER DEVELOPED MARKETS</span></div>
        </div>
      </section>

      <section className="section faq-section">
        <div className="shell faq-grid">
          <div className="faq-intro"><p className="section-kicker">Buyer questions</p><h2>What you may want to know first.</h2><p>For a precise answer, send Jacky your product brief and destination market.</p><a className="text-link" href="mailto:allen@twowell.net">Email Jacky <span>→</span></a></div>
          <div className="faq-list">
            {faqs.map(([question,answer], index) => <details key={question} open={index === 0}><summary><span>{question}</span><i>+</i></summary><p>{answer}</p></details>)}
          </div>
        </div>
      </section>

      <section className="quote-section" id="quote">
        <div className="shell quote-grid">
          <div className="quote-copy">
            <p className="section-kicker light">Start your OEM project</p>
            <h2>Tell us what you want to put on the shelf.</h2>
            <p>For the fastest quotation, include product type, pack format, wipe count, size, quantity and destination market.</p>
            <div className="contact-person"><span>J</span><div><small>Your contact</small><strong>Jacky · Twowell</strong></div></div>
          </div>
          <div className="quote-cards">
            <a className="contact-card whatsapp-card" href={whatsappUrl} target="_blank" rel="noreferrer"><WhatsAppIcon /><div><span>Fastest response</span><strong>Chat on WhatsApp</strong><small>+86 189 5737 2563</small></div><b>↗</b></a>
            <a className="contact-card" href="mailto:allen@twowell.net?subject=Custom%20Wet%20Wipes%20OEM%20Inquiry&amp;body=Product%20type%3A%0APackaging%20format%3A%0AWipe%20size%20and%20count%3A%0AEstimated%20quantity%3A%0ADestination%20market%3A%0AOther%20requirements%3A"><span className="mail-icon">@</span><div><span>Send your specification</span><strong>Email your RFQ</strong><small>allen@twowell.net</small></div><b>↗</b></a>
            <p className="quote-note"><span>✓</span> Your product details are used only to prepare the requested quotation.</p>
          </div>
        </div>
      </section>

      <footer>
        <div className="shell footer-main">
          <div className="footer-brand"><a className="brand footer-logo" href="#top"><span className="brand-mark" /></a><p>Custom wet wipes OEM &amp; ODM manufacturing for brands, distributors and retailers.</p></div>
          <div><strong>Explore</strong><a href="#products">Products</a><a href="#oem">OEM &amp; ODM</a><a href="#factory">Manufacturing</a><a href="#quality">Quality</a></div>
          <div><strong>Contact</strong><a href="mailto:allen@twowell.net">allen@twowell.net</a><a href="tel:+8618957372563">+86 189 5737 2563</a><a href={whatsappUrl}>WhatsApp Jacky</a></div>
          <div><strong>Factory</strong><p>Haining Twowell Daily Commodity Co., Ltd.</p><p>No. 1 Tangnan West Road<br />Haining, Zhejiang, China 314400</p></div>
        </div>
        <div className="shell footer-bottom"><span>© 2026 Twowell. All rights reserved.</span><span>WIN-WIN SITUATION</span></div>
      </footer>

      <a className="floating-whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Contact Jacky on WhatsApp"><WhatsAppIcon /><span>WhatsApp</span></a>
    </main>
  );
}
