import Image from "next/image";

const whatsappUrl = "https://wa.me/8618957372563";
const quoteEmail =
  "mailto:allen@twowell.net?subject=Win-Win%20Wet%20Wipes%20Solution%20Inquiry&body=Product%20or%20market%20idea%3A%0ACurrent%20challenge%3A%0APackaging%20format%3A%0AEstimated%20quantity%3A%0ADestination%20market%3A%0ATarget%20launch%20date%3A";

const Arrow = () => <span aria-hidden="true">↗</span>;

const solutions = [
  {
    number: "01",
    label: "NEW PRODUCT",
    title: "Launch a Market-Ready Wipe",
    challenge: "You have a customer group or product idea, but no finished specification.",
    answer: "We translate the idea into material, formula, sheet size, pack format and a production-ready sample.",
    result: "A clear product path with fewer development loops.",
  },
  {
    number: "02",
    label: "PRODUCT UPGRADE",
    title: "Improve an Existing Wipe",
    challenge: "Your current wipe, formula or packaging is not meeting the market expectation.",
    answer: "We compare the reference, identify the gap, then test practical upgrades around performance and cost.",
    result: "A stronger offer without rebuilding the whole program.",
  },
  {
    number: "03",
    label: "RELIABLE SUPPLY",
    title: "Scale with Better Control",
    challenge: "You need repeatable quality, lead-time visibility and capacity for growing orders.",
    answer: "We align the approved sample, production checkpoints, packaging files and shipment plan before scale-up.",
    result: "More predictable delivery and easier repeat orders.",
  },
];

const products = [
  {
    number: "01",
    title: "Shoe Cleaning Wipes",
    text: "Portable single-use and multi-count solutions for shoe-care brands, retailers and travel programs.",
    tags: ["Single sachet", "Raised-dot texture", "Custom cleaning formula"],
    crop: "shot-shoe",
  },
  {
    number: "02",
    title: "Feminine Care Wipes",
    text: "Discreet, gentle product programs with customizable substrate, formula direction and packaging.",
    tags: ["Single sachet", "Soft pack", "Gentle-care options"],
    crop: "shot-feminine",
  },
  {
    number: "03",
    title: "Makeup Remover Wipes",
    text: "Private-label cleansing wipes for beauty, travel and daily-care ranges in flexible formats.",
    tags: ["Resealable pack", "Soft substrate", "Formula customization"],
    crop: "shot-makeup",
  },
];

const customization = [
  ["01", "Material", "Spunlace, cotton, bamboo and other substrate directions."],
  ["02", "Size & Weight", "Sheet dimensions, GSM, fold and wipe count for the use case."],
  ["03", "Embossing", "Plain, pearl, mesh, weave and raised-dot texture options."],
  ["04", "Formula", "Fragrance, moisture level and ingredient direction by brief."],
  ["05", "Packaging", "Single sachet, resealable soft pack, canister and carton."],
  ["06", "Branding", "Custom graphics, color, logo, barcode and market copy."],
];

const process = [
  ["01", "Brief", "Use, pack, quantity and target market."],
  ["02", "Solution", "Material, formula and format proposal."],
  ["03", "Sample", "Physical sample in about 7 days."],
  ["04", "Approval", "Sample, artwork and commercial terms."],
  ["05", "Production", "Planned bulk lead time: 30 days."],
  ["06", "Delivery", "Inspection, packing and shipment."],
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
            <Image src="/assets/brand/twowell-logo-full-v2.png" alt="Twowell — Win-Win Situation" width={183} height={138} priority />
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
        <div className="shell hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">TWOWELL · WIN-WIN SOLUTION</p>
            <h1>Your Wet Wipes<br />Solution Partner.</h1>
            <p className="hero-lead">
              From a market idea to a repeatable product, we connect material, formula, packaging and manufacturing into one practical OEM &amp; ODM solution.
            </p>
            <div className="hero-actions">
              <a className="button" href="#contact">Build Your Solution <Arrow /></a>
              <a className="text-link" href={whatsappUrl} target="_blank" rel="noreferrer">WhatsApp Allen <Arrow /></a>
            </div>
            <div className="hero-points" aria-label="Key service points">
              <span>7-day sampling</span>
              <span>Flexible OEM formats</span>
              <span>Export-market experience</span>
            </div>
          </div>
          <div className="hero-visual">
            <Image src="/assets/solutions/white-label-product-solutions-v2.png" alt="Twowell wet wipes solution range" fill sizes="(max-width: 900px) 100vw, 50vw" priority />
            <div className="visual-label"><span>FROM IDEA</span><strong>TO SHELF</strong></div>
            <p>Unbranded customization presentation</p>
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
            <div><p className="eyebrow">SOLUTIONS BEFORE PRODUCTS</p><h2>Start with the business problem.</h2></div>
            <p>B2B buyers do not only need a wipe. They need a viable product, a controllable supply plan and a partner who can make both sides win.</p>
          </div>
          <div className="solution-grid">
            {solutions.map((item) => (
              <article className="solution-card" key={item.number}>
                <div className="card-top"><span>{item.number}</span><em>{item.label}</em></div>
                <h3>{item.title}</h3>
                <dl>
                  <div><dt>Your challenge</dt><dd>{item.challenge}</dd></div>
                  <div><dt>Twowell solution</dt><dd>{item.answer}</dd></div>
                </dl>
                <p className="result"><span>Result</span>{item.result}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section product-section" id="products">
        <div className="shell">
          <div className="section-heading split-heading light-heading">
            <div><p className="eyebrow">FOCUS CATEGORIES</p><h2>Three routes to a stronger shelf offer.</h2></div>
            <p>Each category is presented as a complete product direction—not an isolated package mockup.</p>
          </div>
          <div className="product-grid">
            {products.map((product) => (
              <article className="product-card" key={product.number}>
                <div className={`product-photo ${product.crop}`}>
                  <Image src="/assets/solutions/white-label-product-solutions-v2.png" alt={product.title} fill sizes="(max-width: 900px) 100vw, 33vw" />
                  <span>{product.number}</span>
                </div>
                <div className="product-copy">
                  <h3>{product.title}</h3>
                  <p>{product.text}</p>
                  <ul>{product.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section customize-section" id="customization">
        <div className="shell customize-grid">
          <div className="customize-photo">
            <Image src="/assets/solutions/oem-customization-samples-v2.png" alt="Wet wipes OEM customization samples" fill sizes="(max-width: 900px) 100vw, 48vw" />
            <div className="photo-note"><strong>6 connected choices</strong><span>One production-ready solution</span></div>
          </div>
          <div>
            <p className="eyebrow">OEM &amp; ODM SYSTEM</p>
            <h2>Customize what matters to the user—and the order.</h2>
            <p className="section-intro">We coordinate the six decisions together so performance, cost, packaging and production do not work against each other.</p>
            <div className="custom-list">
              {customization.map(([number, title, text]) => (
                <article key={number}><span>{number}</span><div><h3>{title}</h3><p>{text}</p></div></article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section evidence-section">
        <div className="shell">
          <div className="section-heading split-heading">
            <div><p className="eyebrow">CUSTOMIZATION EVIDENCE</p><h2>Real choices, clearly explained.</h2></div>
            <p>These production materials show buyers the specific choices behind a finished wet-wipe program.</p>
          </div>
          <div className="evidence-grid">
            <figure className="evidence-wide"><Image src="/assets/reference/raw-material-options.jpg" alt="Biodegradable, flushable, wood pulp and bamboo wet wipe material options" fill sizes="(max-width: 900px) 100vw, 50vw" /><figcaption>Material &amp; texture options</figcaption></figure>
            <figure><Image src="/assets/reference/custom-size.jpg" alt="Custom wet wipe sheet size" fill sizes="(max-width: 900px) 100vw, 25vw" /><figcaption>Sheet size</figcaption></figure>
            <figure><Image src="/assets/reference/custom-fragrance.jpg" alt="Custom wet wipe fragrance choices" fill sizes="(max-width: 900px) 100vw, 25vw" /><figcaption>Fragrance direction</figcaption></figure>
          </div>
        </div>
      </section>

      <section className="section packaging-section">
        <div className="shell packaging-grid">
          <div className="packaging-copy">
            <p className="eyebrow">PACKAGING SOLUTIONS</p>
            <h2>The right format for the channel, user and MOQ.</h2>
            <p>Choose the structure first, then align artwork, film, printing and packing around the order.</p>
            <div className="moq-list">
              <div><span>Individual sachet</span><strong>MOQ 10,000 pcs</strong></div>
              <div><span>Resealable soft pack</span><strong>MOQ 5,000 packs</strong></div>
              <div><span>Canister</span><strong>MOQ 5,000 units</strong></div>
            </div>
          </div>
          <figure className="packaging-image">
            <Image src="/assets/reference/package-styles.jpg" alt="Twowell custom wet wipes packaging styles" fill sizes="(max-width: 900px) 100vw, 52vw" />
            <figcaption>Authorized packaging examples</figcaption>
          </figure>
        </div>
      </section>

      <section className="section manufacturing-section" id="manufacturing">
        <div className="shell">
          <div className="section-heading split-heading">
            <div><p className="eyebrow">MANUFACTURING</p><h2>Built to move from approval to repeat orders.</h2></div>
            <p>Factory capability supports the solution, while the approved specification keeps every team aligned.</p>
          </div>
          <div className="factory-grid">
            <figure className="factory-main"><Image src="/assets/factory/factory-floor.png" alt="Twowell wet wipes factory floor" fill sizes="(max-width: 900px) 100vw, 60vw" /></figure>
            <figure><Image src="/assets/factory/wet-wipe-line.jpg" alt="Twowell wet wipes production line" fill sizes="(max-width: 900px) 100vw, 35vw" /></figure>
            <figure><Image src="/assets/factory/packing-line.jpg" alt="Twowell wet wipes packing line" fill sizes="(max-width: 900px) 100vw, 35vw" /></figure>
            <div className="factory-badge"><span>ESTABLISHED</span><strong>2015</strong><p>Haining, Zhejiang, China</p></div>
          </div>
          <div className="capacity-note"><strong>500,000,000 packs</strong><span>stated monthly production capacity</span><p>Capacity planning is confirmed against the product format and production schedule for each order.</p></div>
        </div>
      </section>

      <section className="section quality-section" id="quality">
        <div className="shell quality-grid">
          <div className="quality-copy"><p className="eyebrow">QUALITY IN PRACTICE</p><h2>Control the product at the points that change the outcome.</h2><p>Quality is not a badge on a page. It is a sequence of checks connected to the approved sample and order requirements.</p></div>
          <div className="quality-cards">
            <article><Image src="/assets/reference/raw-material-options.jpg" alt="Wet wipe raw material check" fill sizes="160px" /><div><span>01</span><h3>Incoming material</h3><p>Confirm substrate and packaging materials against the order specification.</p></div></article>
            <article><Image src="/assets/reference/custom-size.jpg" alt="Wet wipe size specification" fill sizes="160px" /><div><span>02</span><h3>Sample alignment</h3><p>Use the approved size, fold, feel and product direction as the production reference.</p></div></article>
            <article><Image src="/assets/factory/wet-wipe-line.jpg" alt="Wet wipe in-process production check" fill sizes="160px" /><div><span>03</span><h3>In-process checks</h3><p>Monitor key production and packing details during the run.</p></div></article>
            <article><Image src="/assets/factory/packing-line.jpg" alt="Wet wipes final packing inspection" fill sizes="160px" /><div><span>04</span><h3>Final packing</h3><p>Check pack presentation and shipment readiness before dispatch.</p></div></article>
          </div>
        </div>
      </section>

      <section className="section process-section">
        <div className="shell">
          <div className="section-heading split-heading"><div><p className="eyebrow">WORKING TOGETHER</p><h2>One visible path from brief to delivery.</h2></div><p>Clear checkpoints make decisions easier and reduce avoidable changes late in the order.</p></div>
          <div className="process-grid">
            {process.map(([number, title, text]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}
          </div>
          <figure className="process-visual"><Image src="/assets/reference/custom-service-process.jpg" alt="Twowell customized service process" fill sizes="100vw" /></figure>
        </div>
      </section>

      <section className="about-section">
        <div className="shell about-grid">
          <div><p className="eyebrow">WHY “WIN-WIN”</p><h2>A product only works when it works for both sides.</h2></div>
          <p>For buyers, that means a useful product, a workable MOQ and reliable delivery. For Twowell, it means clear requirements, stable production and a partnership that can grow. Our solution process is designed around that shared outcome.</p>
          <div className="about-mark"><Image src="/assets/brand/twowell-logo-full-v2.png" alt="Twowell Win-Win Situation" width={274} height={207} /></div>
        </div>
      </section>

      <section className="section faq-section">
        <div className="shell faq-grid">
          <div><p className="eyebrow">BUYER FAQ</p><h2>Useful answers before the first quote.</h2></div>
          <div className="faq-list">{faqs.map(([q, a]) => <details key={q}><summary>{q}<span>+</span></summary><p>{a}</p></details>)}</div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="shell contact-grid">
          <div><p className="eyebrow">START WITH YOUR CHALLENGE</p><h2>What are you trying to launch, improve or scale?</h2><p>Send the product idea, pack format, estimated quantity, destination market and target date. Allen will help turn it into a practical next step.</p></div>
          <div className="contact-card">
            <p>DIRECT CONTACT</p><h3>Allen</h3>
            <a href="mailto:allen@twowell.net">allen@twowell.net</a>
            <a href="tel:+8618957372563">+86 189 5737 2563</a>
            <div><a className="button" href={quoteEmail}>Send My Brief <Arrow /></a><a className="button button-outline" href={whatsappUrl} target="_blank" rel="noreferrer">WhatsApp <Arrow /></a></div>
          </div>
        </div>
      </section>

      <footer>
        <div className="shell footer-grid">
          <div className="footer-brand"><Image src="/assets/brand/twowell-logo-full-v2.png" alt="Twowell — Win-Win Situation" width={183} height={138} /><p>Haining Twowell Daily Commodity Co., Ltd.</p></div>
          <div><strong>Solutions</strong><a href="#products">Product Categories</a><a href="#customization">OEM &amp; ODM</a><a href="#manufacturing">Manufacturing</a></div>
          <div><strong>Contact Allen</strong><a href="mailto:allen@twowell.net">allen@twowell.net</a><a href="tel:+8618957372563">+86 189 5737 2563</a><a href={whatsappUrl} target="_blank" rel="noreferrer">WhatsApp</a></div>
        </div>
        <div className="shell footer-bottom"><span>© 2026 Twowell. All rights reserved.</span><span>Wet Wipes OEM &amp; ODM · Win-Win Solution</span></div>
      </footer>
    </main>
  );
}
