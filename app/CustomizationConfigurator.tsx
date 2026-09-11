"use client";

import { useEffect, useState } from "react";

const decisions = [
  {
    number: "01",
    kind: "material",
    title: "Material & Texture",
    railText: "Performance starts with the right substrate.",
    kicker: "START WITH PERFORMANCE",
    description: "Tell us how the wipe should feel and perform. We recommend the substrate and surface structure together.",
    result: "Material direction ready for the physical sample",
  },
  {
    number: "02",
    kind: "size",
    title: "Size & Weight",
    railText: "Custom dimensions and nonwoven GSM.",
    kicker: "CUSTOM SIZE & GSM",
    description: "Custom sheet dimensions plus nonwoven GSM.",
    result: "Confirmed size and GSM specification",
  },
  {
    number: "03",
    kind: "formula",
    title: "Formula & Fragrance",
    railText: "Fragrance direction matched to the user.",
    kicker: "CHOOSE THE USER EXPERIENCE",
    description: "Start with the fragrance experience, then align the formula direction with the user, application and target market.",
    result: "Fragrance and formula direction prepared for sampling",
  },
  {
    number: "04",
    kind: "packaging",
    title: "Packaging",
    railText: "Format, artwork and production plan.",
    kicker: "MAKE IT READY FOR MARKET",
    description: "Bring the format, artwork and quantity together in a practical route that can move into production.",
    result: "Production-ready packaging plan",
  },
];

const fragranceOptions = [
  ["fragrance-daisy.png", "DAISY"],
  ["fragrance-aloe-vera.png", "ALOE VERA"],
  ["fragrance-lavender.png", "LAVENDER"],
  ["fragrance-lemon.png", "LEMON"],
];

const packagingOptions = [
  ["package-soft-pack.png", "SOFT PACK", "Real soft pack format"],
  ["package-canister.png", "CANISTER", "Real canister format"],
  ["package-sachet-carton.png", "SACHET + CARTON", "Real sachet and carton format"],
];

function RailThumb({ kind }: { kind: string }) {
  if (kind === "size") return <span className="decision-size-thumb" aria-hidden="true" />;

  if (kind === "material") {
    return (
      <span className="decision-line-thumb" aria-hidden="true">
        <svg viewBox="0 0 48 48"><path d="M7 13h28v22H7z"/><path d="M7 20h28M10 28c5-5 10-5 15 0s10 5 15 0"/><path className="accent" d="M36 10c4 0 6 2 6 6M36 14c2 0 3 1 3 3"/></svg>
        <b>MATERIAL</b>
      </span>
    );
  }

  if (kind === "formula") {
    return (
      <span className="decision-line-thumb" aria-hidden="true">
        <svg viewBox="0 0 48 48"><path d="M17 7s-8 10-8 17a8 8 0 0 0 16 0c0-7-8-17-8-17z"/><path className="accent" d="M27 29c3-8 8-12 15-12-1 7-5 12-12 13M29 30l8-8M28 34c4 0 8 2 10 6"/></svg>
        <b>FORMULA</b>
      </span>
    );
  }

  return (
    <span className="decision-line-thumb" aria-hidden="true">
      <svg viewBox="0 0 48 48"><path d="M5 17h22v23H5zM8 21h16M8 36h16"/><path d="M31 15h11v25H31zM30 15c0-2 3-4 7-4s6 2 6 4-3 4-6 4-7-2-7-4z"/><path className="accent" d="M11 27h10M14 31h4M33 25h7"/></svg>
      <b>PACKAGE</b>
    </span>
  );
}

export default function CustomizationConfigurator() {
  const [activeStep, setActiveStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const active = decisions[activeStep];

  useEffect(() => {
    if (isPaused) return;
    const timer = window.setTimeout(() => setActiveStep((current) => (current + 1) % decisions.length), 4800);
    return () => window.clearTimeout(timer);
  }, [activeStep, isPaused]);

  return (
    <div className="decision-configurator" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
      <aside className="decision-step-rail" aria-label="Customization steps">
        <div className="decision-rail-title"><span>4 DECISIONS</span><span>STEP {active.number} / 04</span></div>
        <div className="decision-rail-list" role="tablist" aria-label="Wet wipes customization decisions">
          {decisions.map((item, index) => (
            <button
              className={`decision-rail-item${activeStep === index ? " is-active" : ""}`}
              type="button"
              role="tab"
              aria-selected={activeStep === index}
              key={item.number}
              onClick={() => setActiveStep(index)}
            >
              <span className="decision-rail-thumb"><RailThumb kind={item.kind} /></span>
              <span><strong>{item.title}</strong><small>{item.railText}</small></span>
              <em>{activeStep === index ? "→" : item.number}</em>
            </button>
          ))}
        </div>
      </aside>

      <div className="decision-stage" role="tabpanel" aria-live="polite">
        <div className="decision-stage-visual">
          <div className={`decision-visual is-${active.kind}`} key={active.number}>
            {active.kind === "material" && <img className="decision-material-art" src="/assets/configurator-v22/01-user-final.png" alt="Twowell material and texture customization options" />}

            {active.kind === "size" && (
              <div className="decision-size-artboard">
                <img className="decision-size-art" src="/assets/configurator-v22/02-user-final.png" alt="Twowell custom wipe sizes and material textures" />
                <span className="decision-size-prompt">Custom your own size</span>
                <div className="decision-size-options"><span>15 × 20 CM<small>5.9 × 7.9 IN</small></span><span>18 × 18 CM<small>7.1 × 7.1 IN</small></span><span>18 × 20 CM<small>7.1 × 7.9 IN</small></span><b>CUSTOM SIZE</b></div>
                <div className="decision-gsm-panel"><span>NONWOVEN BASIS WEIGHT</span><strong>CUSTOM GSM</strong><div><b>___</b><span>g/m²</span></div><div className="decision-gsm-gauge"><span>LIGHT</span><i /><span>MEDIUM</span><i /><span>HEAVY</span></div><p>Select the GSM for the required softness, strength and absorbency.</p></div>
              </div>
            )}

            {active.kind === "formula" && (
              <div className="decision-fragrance-grid">
                {fragranceOptions.map(([file, label]) => <article key={file}><img src={`/assets/configurator-v22/${file}`} alt={`${label.toLowerCase()} fragrance`} /><span>{label}</span></article>)}
              </div>
            )}

            {active.kind === "packaging" && (
              <div className="decision-packaging-grid">
                {packagingOptions.map(([file, label, alt]) => <article key={file}><img src={`/assets/configurator-v22/${file}`} alt={alt} /><span>{label}</span></article>)}
              </div>
            )}
          </div>
          <span className="decision-stage-number">STEP {active.number} / 04</span>
        </div>

        <div className="decision-stage-copy">
          <div className="decision-copy-content" key={`copy-${active.number}`}>
            <span>{active.kicker}</span>
            <h3>{active.title}</h3>
            <p>{active.description}</p>
            <div><b>CONFIRMED RESULT</b><span>{active.result}</span></div>
          </div>
          <button type="button" onClick={() => setActiveStep((activeStep + 1) % decisions.length)}><span>CONFIRM &amp; CONTINUE</span><i>→</i></button>
          <div className="decision-stage-progress" aria-label="Step progress">
            {decisions.map((item, index) => <button type="button" key={item.number} className={`${index < activeStep ? "is-complete " : ""}${index === activeStep ? "is-active" : ""}`} onClick={() => setActiveStep(index)} aria-label={`Show step ${item.number}`} />)}
          </div>
        </div>
      </div>
    </div>
  );
}
