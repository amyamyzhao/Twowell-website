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
  assert.match(html, /Twowell \| Win-Win Wet Wipes Solutions/);
  assert.match(html, /Your Wet Wipes/);
  assert.match(html, /Solution Partner/);
  assert.match(html, /Start with the business problem/);
  assert.match(html, /Shoe Cleaning Wipes/);
  assert.match(html, /Feminine Care Wipes/);
  assert.match(html, /Makeup Remover Wipes/);
  assert.match(html, /500,000,000/);
  assert.match(html, /allen@twowell\.net/);
  assert.match(html, /8618957372563/);
  assert.match(html, /https:\/\/twowell\.example\/og\.png/);
  assert.doesNotMatch(html, /react-loading-skeleton|codex-preview|Your site is taking shape/);
});
