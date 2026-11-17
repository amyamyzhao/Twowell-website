import assert from "node:assert/strict";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("https://twowell.example/", { headers: { accept: "text/html", host: "twowell.example" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("renders the Twowell B2B homepage", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /Twowell \| Custom Wet Wipes, Ready for Your Brand/);
  assert.match(html, /Custom Wet Wipes/);
  assert.match(html, /Ready for Your Brand/);
  assert.match(html, /twowell-logo-transparent\.png/);
  assert.match(html, /twowell-home-banner-clean-v4\.png/);
  assert.doesNotMatch(html, /YOUR WET WIPES SOLUTION PARTNER/);
  assert.match(html, /Turn Your Market Need into a Production-Ready Wipes Solution/);
  assert.match(html, /One Factory\. Wet Wipes for More Markets/);
  assert.match(html, /Cleaning &amp; Hygiene Wipes/);
  assert.match(html, /Women’s &amp; Beauty Wipes/);
  assert.match(html, /Functional Wipes/);
  assert.match(html, /Lens Wipes/);
  assert.doesNotMatch(html, /Priority Programs|Also Available|Available Programs/);
  assert.doesNotMatch(html, /EXPLORE MORE CATEGORIES/);
  assert.match(html, /Baby Wipes/);
  assert.match(html, /Body Wipes/);
  assert.match(html, /Eyelid Wipes/);
  assert.match(html, /Household Cleaning Wipes/);
  assert.match(html, /Gym Wipes/);
  assert.match(html, /Mosquito Repellent Wipes/);
  assert.match(html, /Nail Polish Remover Wipes/);
  assert.match(html, /Shoe Cleaning Wipes/);
  assert.match(html, /Feminine Care Wipes/);
  assert.match(html, /Makeup Remover Wipes/);
  assert.match(html, /Material &amp; Texture/);
  assert.match(html, /Size &amp; Weight/);
  assert.match(html, /Formula &amp; Fragrance/);
  assert.match(html, /STEP [\s\S]{0,80}\/ 04/);
  assert.doesNotMatch(html, />Embossing</);
  assert.doesNotMatch(html, />Branding</);
  assert.doesNotMatch(html, /Choose the Packaging Format That Fits Your Product/);
  assert.match(html, /Already have artwork/);
  assert.match(html, /Individual Sachet/);
  assert.match(html, /Resealable Soft Pack/);
  assert.match(html, /Canister/);
  assert.match(html, /From Approved Sample to Stable Mass Production/);
  assert.match(html, /Quality Control at Every Production Checkpoint/);
  assert.match(html, /From Your Brief to Delivery, Every Step Is Clear/);
  assert.match(html, /About 7 Days/);
  assert.match(html, /About 30 Days/);
  assert.match(html, /Questions Buyers Ask Before Starting/);
  assert.match(html, /Can you develop a wipe application that is not listed here/);
  assert.match(html, /Request My Wipes Solution/);
  assert.match(html, /Household Cleaning Wipes/);
  assert.match(html, /Lens Wipes/);
  assert.doesNotMatch(html, /One visible path from brief to delivery/);
  assert.match(html, /Incoming Materials/);
  assert.match(html, /Pre-production Alignment/);
  assert.match(html, /In-process Inspection/);
  assert.match(html, /Final Packing &amp; Release/);
  assert.doesNotMatch(html, /The right format for the channel/);
  assert.doesNotMatch(html, /Built to move from approval to repeat orders/);
  assert.doesNotMatch(html, /Control the product at the points that change the outcome/);
  assert.match(html, /500,000,000/);
  assert.match(html, /allen@twowell\.net/);
  assert.match(html, /8618957372563/);
  assert.match(html, /wa\.me\/8618957372563\?text=/);
  assert.match(html, /https:\/\/api\.web3forms\.com\/submit/);
  assert.match(html, /name="access_key" value="aebf155f-6a24-4342-bd99-f0c8b5632d81"/);
  assert.doesNotMatch(html, /formsubmit\.co/);
  assert.match(html, /WhatsApp/);
  assert.doesNotMatch(html, />WhatsApp(?: Allen)?</);
  assert.match(html, /https:\/\/www\.twowellwipes\.com\/assets\/hero\/twowell-home-banner-copy-v2\.png/);
  assert.doesNotMatch(html, /react-loading-skeleton|codex-preview|Your site is taking shape/);
});

test("redirects the root domain to the canonical www domain", async () => {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `redirect-${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  const response = await worker.fetch(
    new Request("https://twowellwipes.com/customization?source=root"),
    {},
    { waitUntil() {}, passThroughOnException() {} },
  );

  assert.equal(response.status, 308);
  assert.equal(
    response.headers.get("location"),
    "https://www.twowellwipes.com/customization?source=root",
  );
});
