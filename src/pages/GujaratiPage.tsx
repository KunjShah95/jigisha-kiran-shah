import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Phone, ShieldCheck } from 'lucide-react';
import { useSEO } from '../hooks/useSEO';
import { breadcrumbJsonLd, faqJsonLd, SITE_URL } from '../lib/seo';

const FAQs = [
  { q: 'મારા પરિવાર માટે કેટલો ટર્મ ઇન્શ્યોરન્સ કવર યોગ્ય છે?', a: 'દરેક પરિવાર માટે એક સરખી રકમ યોગ્ય નથી. તમારી આવક, ઘરખર્ચ, આશ્રિત સભ્યો, બાકી લોન, આવક કેટલાં વર્ષ સુધી જરૂરી રહેશે અને હાલનું જીવન વીમા કવર સાથે જોઈને અંદાજ બનાવવો જોઈએ. કોઈ પણ યોજના લેતા પહેલાં વ્યક્તિગત જરૂરિયાત અને LICની પોલિસી શરતો તપાસો.' },
  { q: 'બીજા એજન્ટ પાસેથી લીધેલી LIC પોલિસીનું રિવ્યૂ થઈ શકે?', a: 'હા. હાલની LIC પોલિસીનું રિવ્યૂ કરાવવા માટે એ જ એજન્ટ પાસે જવું જરૂરી નથી. પોલિસી નંબર, પ્લાન, પ્રીમિયમની સ્થિતિ, નોમિની, કવર અને મેચ્યોરિટીની તારીખ સાથે વિગતો તપાસી શકાય છે. ખરીદી કરવાની કોઈ ફરજ નથી.' },
  { q: 'પોલિસી રિવ્યૂ માટે કઈ માહિતી સાથે રાખવી?', a: 'પોલિસી બોન્ડ અથવા નંબર, છેલ્લી પ્રીમિયમ રસીદ, નોમિનીનું નામ, જન્મતારીખ, સંપર્કની વિગતો અને પરિવારના નાણાકીય લક્ષ્યો તૈયાર રાખો. મૂળ દસ્તાવેજ મોકલતાં પહેલાં સુરક્ષિત રીતે શેર કરો. ક્લેમમાં જરૂરી દસ્તાવેજો ક્લેમના પ્રકાર પ્રમાણે બદલાય છે.' },
  { q: 'શું આ LICની સત્તાવાર વેબસાઇટ છે?', a: 'ના. આ LIC એજન્ટ જિગિષા કિરણ શાહની વેબસાઇટ છે, LICની સત્તાવાર વેબસાઇટ નથી. પોલિસી LIC દ્વારા જારી થાય છે અને ક્લેમનો નિર્ણય LIC કરે છે. સત્તાવાર માહિતી માટે LICની વેબસાઇટ અને પોલિસી દસ્તાવેજ જુઓ.' },
  { q: 'અમદાવાદમાં ગુજરાતી ભાષામાં સલાહ કેવી રીતે મેળવી શકું?', a: 'શેલા સ્થિત ઓફિસમાં મુલાકાત માટે પહેલાં સમય નક્કી કરો અથવા +91 98240 25435 પર ફોન કે WhatsApp કરો. શેલા, સાઉથ બોપલ, બોપલ, સેટેલાઇટ, SG હાઇવે, વસ્ત્રાપુર, અંબાવાડી, મણિનગર, નારણપુરા, ગોટા અને ચાંદખેડા સહિત અમદાવાદમાં સલાહ મળે છે.' },
];

const links = [
  { href: '/services/term-insurance', title: 'ટર્મ વીમો', text: 'પરિવારની આવકને સુરક્ષિત કરવા જીવન વીમાની જરૂરિયાત સમજો.' },
  { href: '/services/child-education', title: 'બાળકોનું શિક્ષણ', text: 'સમયમર્યાદા અને બચત ક્ષમતા મુજબ શિક્ષણ લક્ષ્યનું આયોજન.' },
  { href: '/services/retirement', title: 'નિવૃત્તિ આયોજન', text: 'નિવૃત્તિ પછીની આવક અને પેન્શન વિકલ્પોની સમજ.' },
  { href: '/services/health-insurance', title: 'આરોગ્ય અને કેન્સર કવર', text: 'LIC યોજનાઓની હાલની માહિતી અને સત્તાવાર દસ્તાવેજો જુઓ.' },
];

export default function GujaratiPage() {
  useSEO({
    title: 'અમદાવાદમાં LIC સલાહકાર | ગુજરાતીમાં જીવન વીમા માર્ગદર્શન',
    description: 'અમદાવાદમાં ગુજરાતીમાં LIC સલાહ: ટર્મ કવર, પોલિસી રિવ્યૂ, ક્લેમ સહાય અને નિવૃત્તિ આયોજન. જિગિષા કિરણ શાહ, શેલા. ફોન અથવા WhatsApp: +91 98240 25435.',
    ogTitle: 'ગુજરાતીમાં LIC સલાહ — જિગિષા કિરણ શાહ, અમદાવાદ',
    path: '/gu',
    keywords: 'LIC advisor Ahmedabad Gujarati, LIC agent Ahmedabad Gujarati, અમદાવાદ LIC સલાહકાર, ગુજરાતી જીવન વીમા સલાહ, LIC પોલિસી રિવ્યૂ અમદાવાદ, LIC ક્લેમ સહાય ગુજરાતીમાં',
    breadcrumbLabel: 'ગુજરાતી માર્ગદર્શન',
    htmlLang: 'gu-IN',
    alternateLanguages: { 'en-IN': '/', 'gu-IN': '/gu', 'hi-IN': '/hi', 'x-default': '/' },
    jsonLd: [
      { '@context': 'https://schema.org', '@type': 'WebPage', '@id': `${SITE_URL}/gu#webpage`, url: `${SITE_URL}/gu`, name: 'ગુજરાતીમાં LIC સલાહ — અમદાવાદ', inLanguage: 'gu-IN', about: { '@id': `${SITE_URL}/#person` }, isPartOf: { '@id': `${SITE_URL}/#website` } },
      faqJsonLd(FAQs),
    ],
  });

  return (
    <div lang="gu" className="gu-page bg-cream pt-20 lg:pt-24 pb-16 lg:pb-24">
      <div className="container max-w-5xl">
        <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-8"><Link to="/" className="hover:text-gold-dark">હોમ</Link><span aria-hidden="true"> / </span><span>ગુજરાતી માર્ગદર્શન</span></nav>
        <section className="grid lg:grid-cols-[1.35fr_.65fr] gap-8 lg:gap-14 items-center mb-16">
          <div>
            <p className="text-xs font-bold tracking-[.16em] text-gold-dark mb-4">અમદાવાદ · શેલા · ગુજરાતીમાં સલાહ</p>
            <h1 className="text-3xl md:text-5xl font-display font-semibold text-midnight leading-tight mb-6">પરિવારના ભવિષ્ય માટે વીમાની સમજદાર પસંદગી</h1>
            <p className="text-lg text-gray-600 leading-relaxed mb-7">જીવન વીમો પસંદ કરતાં પહેલાં તમારી આવક, જવાબદારીઓ અને પરિવારના લક્ષ્યો સમજવા જરૂરી છે. જિગિષા કિરણ શાહ શેલા, અમદાવાદથી LIC પોલિસી, હાલના કવર, નોમિની, પ્રીમિયમ અને ક્લેમ પ્રક્રિયા વિશે ગુજરાતીમાં માર્ગદર્શન આપે છે.</p>
            <div className="flex flex-wrap gap-3">
              <a href="tel:+919824025435" data-cta="gu-call" className="inline-flex items-center gap-2 rounded-xl bg-midnight text-white px-5 py-3 font-semibold hover:bg-gold transition-colors"><Phone size={17} aria-hidden="true" /> ફોન કરો</a>
              <a href="https://wa.me/919824025435?text=%E0%AA%AE%E0%AA%A8%E0%AB%87%20ગુજરાતીમાં%20LIC%20પોલિસી%20માટે%20માર્ગદર્શન%20જોઈએ" target="_blank" rel="noopener noreferrer" data-cta="gu-whatsapp" className="inline-flex items-center gap-2 rounded-xl border border-border bg-white px-5 py-3 font-semibold text-midnight hover:border-gold transition-colors">WhatsApp પર પૂછો <ArrowRight size={16} aria-hidden="true" /></a>
            </div>
          </div>
          <aside className="rounded-3xl bg-white border border-border p-6 lg:p-8 shadow-sm">
            <ShieldCheck className="text-gold-dark mb-4" size={26} aria-hidden="true" />
            <h2 className="text-xl font-display font-semibold text-midnight mb-3">સલાહ પહેલાં તમારી જરૂરિયાત</h2>
            <ul className="space-y-3 text-gray-600 leading-relaxed list-disc pl-5">
              <li>ઘરખર્ચ, આવક અને આશ્રિત સભ્યો</li><li>ઘર અથવા વ્યવસાયની બાકી લોન</li><li>હાલનું જીવન વીમા કવર અને પ્રીમિયમ</li><li>બાળકોનું શિક્ષણ અને નિવૃત્તિના લક્ષ્યો</li>
            </ul>
            <Link to="/protection-check?lang=gu" className="inline-flex items-center gap-2 mt-5 font-semibold text-gold-dark hover:text-midnight">મફત કવર ચેક કરો <ArrowRight size={16} aria-hidden="true" /></Link>
          </aside>
        </section>

        <section className="mb-16" aria-labelledby="gu-review-heading">
          <h2 id="gu-review-heading" className="text-2xl md:text-3xl font-display font-semibold text-midnight mb-4">તમારી હાલની પોલિસી પરિવારને સમજાય છે?</h2>
          <p className="text-gray-600 leading-relaxed max-w-3xl mb-6">પોલિસી માત્ર ખરીદીને ફાઇલમાં રાખવી પૂરતી નથી. પ્રીમિયમ સમયસર ભરાય છે કે નહીં, નોમિનીનું નામ સાચું છે કે નહીં, પોલિસી ક્યારે પૂરી થાય છે અને પરિવારના સભ્યને દસ્તાવેજ ક્યાં છે તેની જાણ છે કે નહીં—આ બાબતો સમયાંતરે તપાસો. એક પાનાની યાદીમાં પોલિસી નંબર, પ્રીમિયમની તારીખ અને સંપર્કની માહિતી લખીને વિશ્વાસુ પરિવારજન સાથે રાખો.</p>
          <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold">
            <Link className="text-gold-dark hover:text-midnight" to="/services/policy-review-claims">હાલની LIC પોલિસીનું રિવ્યૂ <ArrowRight className="inline" size={14} /></Link>
            <Link className="text-gold-dark hover:text-midnight" to="/services/lic-policy-revival">લેપ્સ પોલિસી ફરી ચાલુ કરવી <ArrowRight className="inline" size={14} /></Link>
            <Link className="text-gold-dark hover:text-midnight" to="/guides/lic-claim-documents-checklist">ક્લેમ દસ્તાવેજોની યાદી <ArrowRight className="inline" size={14} /></Link>
            <Link className="text-gold-dark hover:text-midnight" to="/resources">LICના સત્તાવાર ફોર્મ અને લિંક્સ <ArrowRight className="inline" size={14} /></Link>
          </div>
        </section>

        <section className="mb-16" aria-labelledby="gu-services-heading">
          <h2 id="gu-services-heading" className="text-2xl md:text-3xl font-display font-semibold text-midnight mb-6">કયા વિષયમાં માર્ગદર્શન જોઈએ?</h2>
          <div className="grid sm:grid-cols-2 gap-4">{links.map((item) => <Link key={item.href} to={item.href} className="rounded-2xl bg-white border border-border p-5 hover:border-gold/50 hover:shadow-md transition-all"><h3 className="font-semibold text-midnight mb-2">{item.title}</h3><p className="text-sm text-gray-600 leading-relaxed">{item.text}</p><span className="inline-flex items-center gap-2 mt-4 text-sm font-semibold text-gold-dark">વિગતો જુઓ <ArrowRight size={15} aria-hidden="true" /></span></Link>)}</div>
        </section>

        <section className="mb-16" aria-labelledby="gu-faq-heading">
          <h2 id="gu-faq-heading" className="text-2xl md:text-3xl font-display font-semibold text-midnight mb-6">વારંવાર પૂછાતા પ્રશ્નો</h2>
          <div className="divide-y divide-border border-y border-border">{FAQs.map((faq) => <details key={faq.q} className="group py-5"><summary className="cursor-pointer list-none pr-8 font-semibold text-midnight marker:hidden">{faq.q}<span className="float-right text-gold-dark" aria-hidden="true">+</span></summary><p className="mt-3 max-w-4xl leading-relaxed text-gray-600">{faq.a}</p></details>)}</div>
        </section>

        <section className="rounded-3xl bg-midnight text-white p-7 md:p-10 mb-12">
          <p className="text-xs uppercase tracking-[.16em] text-gold mb-3">શેલા, અમદાવાદ</p>
          <h2 className="text-2xl md:text-3xl font-display font-semibold mb-4">તમારી પોલિસી અને પ્રશ્નો સાથે વાત શરૂ કરો</h2>
          <p className="text-white/75 leading-relaxed mb-6">જિગિષા કિરણ શાહ 2004થી LIC સલાહકાર છે, 2023 અને 2024માં MDRT પ્રાપ્ત કર્યું છે અને 2,700થી વધુ પરિવારોને સેવા આપી છે. ઓફિસ મુલાકાત માટે પહેલાં સમય નક્કી કરો. શેલા ઉપરાંત સાઉથ બોપલ, બોપલ, સેટેલાઇટ, SG હાઇવે, વસ્ત્રાપુર, અંબાવાડી, મણિનગર, નારણપુરા, ગોટા અને ચાંદખેડા સહિતના અમદાવાદ વિસ્તારોમાં ફોન, WhatsApp અથવા મુલાકાતથી સલાહ ઉપલબ્ધ છે.</p>
          <p className="text-sm text-white/65 mb-6">સરનામું: Orchid Legacy, D3-1303, Applewoods Township, Shela, Ahmedabad, Gujarat 380058. સોમવારથી શનિવાર, સવારે 9થી સાંજે 6 (IST).</p>
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-xl bg-white text-midnight px-5 py-3 font-semibold hover:bg-gold hover:text-white transition-colors">સંપર્ક વિગતો અને સમય <ArrowRight size={16} aria-hidden="true" /></Link>
        </section>
        <p className="flex gap-2 items-start text-xs text-gray-500 leading-relaxed"><BookOpen className="shrink-0 mt-0.5" size={15} aria-hidden="true" />આ વેબસાઇટ LIC એજન્ટ જિગિષા કિરણ શાહની છે, LICની સત્તાવાર વેબસાઇટ નથી. યોજનાઓના લાભ, પાત્રતા, પ્રીમિયમ અને ચુકવણી પોલિસી દસ્તાવેજ તથા LICના નિયમો પર આધારિત છે. <a className="underline" href="https://licindia.in/" target="_blank" rel="noopener noreferrer">સત્તાવાર LIC વેબસાઇટ</a> અને <a className="underline" href="https://irdai.gov.in/" target="_blank" rel="noopener noreferrer">IRDAI</a> જુઓ.</p>
      </div>
    </div>
  );
}
