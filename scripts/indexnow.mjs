/**
 * Submit every URL in the live sitemap to IndexNow (Bing, Yandex, Seznam,
 * Naver; Bing's index also feeds Copilot and ChatGPT search).
 *
 * Google does not use IndexNow — it reads sitemap.xml via Search Console.
 *
 * The key is the existing verification file public/<key>.txt, which IndexNow
 * fetches from the live site to prove ownership. Run AFTER a production
 * deploy is live (the GitHub workflow does this on Vercel's deployment
 * success), never at build time: the key file must already be served.
 *
 * Run manually: npm run indexnow
 */
const SITE = 'https://www.jigishakiranshah.in';
const KEY = 'a5538c0fd1c13580df3ed215c9ca6396';

const res = await fetch(`${SITE}/sitemap.xml`);
if (!res.ok) throw new Error(`indexnow: sitemap fetch failed (${res.status})`);
const urls = [...(await res.text()).matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
if (!urls.length) throw new Error('indexnow: sitemap has no URLs');

const submit = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({
    host: new URL(SITE).host,
    key: KEY,
    keyLocation: `${SITE}/${KEY}.txt`,
    urlList: urls,
  }),
});
// 200 = accepted, 202 = accepted, key validation pending. Anything else is a failure.
if (submit.status !== 200 && submit.status !== 202) {
  throw new Error(`indexnow: submission failed (${submit.status}) ${await submit.text()}`);
}
console.log(`indexnow: submitted ${urls.length} URLs (HTTP ${submit.status})`);
