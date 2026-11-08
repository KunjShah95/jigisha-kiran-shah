import { Link } from 'react-router-dom'
import { useSEO } from '../hooks/useSEO'
import { EMAIL, PHONE_DISPLAY, ADDRESS } from '../lib/seo'

/** Change this when the policy text changes, not on every build. */
const UPDATED = '8 November 2026'

/**
 * The privacy notice describes what the code actually does. If a form starts
 * storing enquiries again, or a new analytics tool is added, this page must
 * change in the same commit. GA4 and Clarity are listed only when their IDs
 * are set at build time, i.e. only when they really load.
 */
export default function PrivacyPage() {
  useSEO({
    title: 'Privacy Policy',
    description:
      'How jigishakiranshah.in handles your information: enquiry forms open WhatsApp and nothing is stored on the website. What analytics run, and how to contact us.',
    path: '/privacy',
    breadcrumbLabel: 'Privacy Policy',
  })

  const ga4 = Boolean(import.meta.env.VITE_GA4_ID)
  const clarity = Boolean(import.meta.env.VITE_CLARITY_ID)

  return (
    <main className="pt-28 lg:pt-32 pb-16 lg:pb-24 bg-cream">
      <article className="container max-w-3xl mx-auto text-gray-700 leading-relaxed space-y-8">
        <header>
          <nav aria-label="Breadcrumb" className="text-xs text-gray-500 mb-4">
            <Link to="/" className="hover:text-gold-dark">Home</Link>
            {' · '}
            <span aria-current="page">Privacy Policy</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-display font-medium text-midnight mb-3">Privacy Policy</h1>
          <p className="text-sm text-gray-500">Last updated: {UPDATED}</p>
        </header>

        <section className="space-y-3">
          <p>
            This website is run by Jigisha Kiran Shah, an individual insurance agent of Life Insurance Corporation of
            India (LIC), from {ADDRESS}. This page explains what information the website handles and why.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-display font-bold text-midnight">Enquiry forms</h2>
          <p>
            The contact, call-back, booking and assessment forms do <strong>not</strong> send your details to a server
            or save them in a database. When you press submit, the website composes a message from the fields you
            filled in and opens WhatsApp with that message ready to send. Nothing reaches Jigisha Kiran Shah until you
            press send in WhatsApp.
          </p>
          <p>
            Once sent, your message is held in WhatsApp, which is operated by Meta under its own privacy policy. It is
            used only to reply to your enquiry and arrange a consultation, and is not sold or shared for marketing.
          </p>
          <p>
            Please do not enter policy numbers, bank details, health information or identity documents in a website
            form. Anything needed for a policy or a claim is collected during the consultation, as part of the LIC
            process.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-display font-bold text-midnight">Calculators and the protection check</h2>
          <p>
            The calculators and the protection check run entirely in your browser. The figures you enter are not sent
            anywhere unless you choose to share the result on WhatsApp. The protection check remembers your language
            choice (English or Gujarati) in your browser&rsquo;s local storage.
          </p>
          <p>
            For the length of your visit, this browser tab also remembers how you arrived (for example &ldquo;Google
            search&rdquo; or &ldquo;LinkedIn&rdquo;) and the first page you saw. If you send an enquiry, that line is
            added to the WhatsApp message so we know which channels help people find us. It is cleared when you close
            the tab and contains nothing about you personally.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-display font-bold text-midnight">Analytics</h2>
          <p>The website measures visits so we can see which pages help people and which do not:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Vercel Web Analytics</strong> counts page views and button clicks (for example, &ldquo;WhatsApp
              button pressed&rdquo;) without cookies and without identifying individual visitors.
            </li>
            {ga4 && (
              <li>
                <strong>Google Analytics 4</strong> records page views and the same button-click events. Google may set
                cookies to do this. See Google&rsquo;s privacy policy for details.
              </li>
            )}
            {clarity && (
              <li>
                <strong>Microsoft Clarity</strong> records how pages are used (scrolling, clicks) to find layout
                problems. Text typed into forms is masked and is not recorded. See Microsoft&rsquo;s privacy statement for
                details.
              </li>
            )}
          </ul>
          <p>Analytics never receive the contents of a form.</p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-display font-bold text-midnight">Embedded content and links</h2>
          <p>
            Some pages embed YouTube videos or link to Google Maps, LIC, IRDAI and other sites. Those services apply
            their own privacy policies when you use them.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-display font-bold text-midnight">Your choices and rights</h2>
          <p>
            Under India&rsquo;s Digital Personal Data Protection Act, 2023, you can ask what personal information we
            hold about you, ask for it to be corrected, or ask for it to be deleted, subject to records LIC or the law
            require us to keep. You can also ask us to stop contacting you at any time.
          </p>
          <p>
            Write to <a href={`mailto:${EMAIL}`} className="text-gold-dark underline underline-offset-4">{EMAIL}</a> or
            call <a href="tel:+919824025435" className="text-gold-dark underline underline-offset-4">{PHONE_DISPLAY}</a>.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-display font-bold text-midnight">Policy information</h2>
          <p>
            Information about an LIC policy you hold is handled under LIC&rsquo;s own privacy policy and the
            regulations of the Insurance Regulatory and Development Authority of India (IRDAI).
          </p>
        </section>
      </article>
    </main>
  )
}
