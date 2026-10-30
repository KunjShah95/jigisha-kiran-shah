import { Link } from 'react-router-dom';
import { FileText, ExternalLink, Download, ArrowRight } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useSEO } from '../hooks/useSEO';
import { useSpotlight } from '../hooks/useSpotlight';

const IMPORTANT_LINKS: { label: string; href: string; note: string }[] = [
  { label: 'LIC of India — official website', href: 'https://licindia.in/', note: 'Plan brochures, premium payment, branch locator' },
  { label: 'LIC Premium Pay Direct', href: 'https://licindia.in/Premium-Payment', note: 'Pay your LIC premium online' },
  { label: 'LIC Forms', href: 'https://licindia.in/Forms', note: 'Nomination, address change, revival, claim forms' },
  { label: 'LIC NRI Center', href: 'https://licindia.in/NRI', note: 'NRI policy servicing and remittance' },
  { label: 'IRDAI (regulator)', href: 'https://irdai.gov.in/', note: 'Regulator, product rules, grievance redressal' },
  { label: 'Bima Bharosa (grievances)', href: 'https://bimabharosa.irdai.gov.in/', note: 'Lodge an insurance grievance' },
  { label: 'MDRT (Million Dollar Round Table)', href: 'https://www.mdrt.org/', note: 'International association of life-insurance professionals' },
  { label: 'Update Aadhaar / PAN to policy', href: 'https://licindia.in/', note: 'Keep KYC current to avoid claim delays' },
];

const FORMS: { label: string; href: string; note: string }[] = [
  { label: 'LIC claim forms (death / maturity / survival)', href: 'https://licindia.in/Forms', note: 'Official LIC forms — fill with your branch' },
  { label: 'Nomination change form', href: 'https://licindia.in/Forms', note: 'Register or update a nominee — free, one form' },
  { label: 'Address / name correction', href: 'https://licindia.in/Forms', note: 'Keep policy records current' },
  { label: 'Policy revival (lapsed policy)', href: 'https://licindia.in/Forms', note: 'Revive a lapsed policy with arrears + interest' },
  { label: 'Jigisha\'s contact card (vCard)', href: '/jigisha-kiran-shah.vcf', note: 'Save her number to your phone' },
];

export default function ResourcesPage() {
  const onMove = useSpotlight();
  useSEO({
    title: 'Resources & Forms | LIC Advisor Ahmedabad',
    description:
      'Useful links and forms for LIC policyholders: LIC premium pay direct, LIC forms, IRDAI, Bima Bharosa grievances, NRI center, nomination and claim forms. From Jigisha Kiran Shah, LIC advisor in Shela, Ahmedabad.',
    path: '/resources',
    keywords:
      'LIC forms Ahmedabad, LIC premium pay direct, LIC claim forms, IRDAI grievance, Bima Bharosa, LIC NRI center, nomination change form LIC',
    breadcrumbLabel: 'Resources',
  });
  useScrollReveal();

  return (
    <section className="pt-28 lg:pt-32 pb-16 lg:pb-24 bg-cream relative overflow-hidden">
      <div className="container relative z-10">
        <div className="inline-block px-3 py-1 bg-white border border-gold/20 text-gold-dark text-[11px] font-bold tracking-[0.2em] uppercase rounded-full mb-4">Resources</div>
        <h1 className="text-3xl md:text-4xl font-display font-medium text-midnight mb-4">
          Useful Links &amp; Forms for LIC Policyholders
        </h1>
        <p className="text-base lg:text-lg text-gray-600 mb-8 leading-relaxed font-light max-w-3xl">
          <strong className="text-midnight font-semibold">Jigisha Kiran Shah, LIC advisor in Shela, Ahmedabad, maintains this page as a single place for the links and forms LIC policyholders need most.</strong>{' '}
          It covers premium payment, nomination, revival, claims, and grievances — and she has personally guided
          1,000+ claims to settlement, so she can also handle any of these with you directly; just call or WhatsApp.
        </p>

        <div className="grid lg:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-display font-bold text-midnight mb-4 flex items-center gap-2">
              <ExternalLink className="w-5 h-5 text-gold-dark" aria-hidden="true" /> Important links
            </h2>
            <div className="space-y-3">
              {IMPORTANT_LINKS.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseMove={onMove}
                  className="spotlight-card group flex items-start gap-4 p-4 bg-white rounded-2xl border border-border shadow-sm hover:shadow-lg hover:border-gold/40 transition-all min-h-11 relative overflow-hidden"
                >
                  <span className="relative z-10 w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center shrink-0 group-hover:bg-gold transition-colors">
                    <ExternalLink className="w-4 h-4 text-gold-dark group-hover:text-white transition-colors" aria-hidden="true" />
                  </span>
                  <span className="relative z-10 flex-1 min-w-0">
                    <span className="block font-bold text-midnight text-[15px] group-hover:text-gold-dark transition-colors">{l.label}</span>
                    <span className="block text-xs text-gray-500 font-light">{l.note}</span>
                  </span>
                  <ArrowRight className="relative z-10 w-4 h-4 text-gold-dark shrink-0 self-center group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-xl font-display font-bold text-midnight mb-4 flex items-center gap-2">
              <FileText className="w-5 h-5 text-gold-dark" aria-hidden="true" /> Forms &amp; documents
            </h2>
            <div className="space-y-3">
              {FORMS.map((f) => {
                const isDownload = f.href.endsWith('.vcf');
                return (
                  <a
                    key={f.label}
                    href={f.href}
                    download={isDownload ? 'jigisha-kiran-shah.vcf' : undefined}
                    target={isDownload ? undefined : '_blank'}
                    rel={isDownload ? undefined : 'noopener noreferrer'}
                    onMouseMove={onMove}
                    className="spotlight-card group flex items-start gap-4 p-4 bg-white rounded-2xl border border-border shadow-sm hover:shadow-lg hover:border-gold/40 transition-all min-h-11 relative overflow-hidden"
                  >
                    <span className="relative z-10 w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center shrink-0 group-hover:bg-gold transition-colors">
                      {isDownload ? (
                        <Download className="w-4 h-4 text-gold-dark group-hover:text-white transition-colors" aria-hidden="true" />
                      ) : (
                        <FileText className="w-4 h-4 text-gold-dark group-hover:text-white transition-colors" aria-hidden="true" />
                      )}
                    </span>
                    <span className="relative z-10 flex-1 min-w-0">
                      <span className="block font-bold text-midnight text-[15px] group-hover:text-gold-dark transition-colors">{f.label}</span>
                      <span className="block text-xs text-gray-500 font-light">{f.note}</span>
                    </span>
                    <ArrowRight className="relative z-10 w-4 h-4 text-gold-dark shrink-0 self-center group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                  </a>
                );
              })}
            </div>

            <div className="mt-6 p-5 bg-white rounded-2xl border border-border">
              <p className="text-sm text-gray-600 font-light leading-relaxed">
                Need a form filled or a claim filed? Jigisha handles the paperwork end to end —
                intimation, documents, branch follow-up.{' '}
                <Link to="/services/policy-review-claims" className="font-semibold text-gold-dark underline underline-offset-2 hover:text-gold">
                  See claim assistance
                </Link>{' '}
                or{' '}
                <Link to="/contact" className="font-semibold text-gold-dark underline underline-offset-2 hover:text-gold">
                  book a free consultation
                </Link>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
