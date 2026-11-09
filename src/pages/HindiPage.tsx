import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Phone, ShieldCheck } from 'lucide-react';
import { useSEO } from '../hooks/useSEO';
import { faqJsonLd, SITE_URL } from '../lib/seo';
import { whatsappUrl } from '../lib/contact';

/**
 * Hindi landing page. Search Console (to 7 Nov 2026) showed ~55 impressions a
 * month for Hindi term-insurance searches ("अहमदाबाद में टर्म इंश्योरेंस",
 * "अहमदाबाद टर्म प्लान", "गुजरात टर्म प्लान") with no Hindi page to land on.
 * Facts mirror the English term-insurance page; nothing here is new product
 * information. Have Jigisha read the copy for natural phrasing.
 */
const FAQS = [
  {
    q: 'अहमदाबाद में सबसे अच्छा (बेस्ट) टर्म इंश्योरेंस कौन सा है?',
    a: 'कोई एक प्लान हर परिवार के लिए सबसे अच्छा नहीं होता। सही प्लान आपकी उम्र, आय, लोन, आश्रित सदस्यों और प्रीमियम भरने के तरीके पर निर्भर करता है। LIC में Tech Term और Jeevan Amar दो मुख्य टर्म प्लान हैं। कवर की राशि, अवधि और राइडर देखकर दोनों की तुलना करें। यह तुलना मुफ़्त में करवाई जा सकती है।',
  },
  {
    q: 'मुझे कितना टर्म कवर चाहिए?',
    a: 'शुरुआत के लिए: सालाना आय का 10 से 15 गुना, उसमें बाकी लोन जोड़ें और पहले से मौजूद बीमा घटाएँ। उदाहरण: 35 साल की उम्र, ₹12 लाख सालाना आय और ₹40 लाख होम लोन वाले व्यक्ति को लगभग ₹1.5 से 2.2 करोड़ का कवर चाहिए।',
  },
  {
    q: 'LIC Tech Term और Jeevan Amar में क्या फ़र्क है?',
    a: 'Tech Term LIC का ऑनलाइन टर्म प्लान है, जिसमें प्रीमियम कम रहता है। Jeevan Amar में नियमित प्रीमियम के साथ लेवल या बढ़ता हुआ कवर चुन सकते हैं और महिलाओं के लिए विशेष दरें हैं। मृत्यु होने पर दोनों में परिवार को बीमा राशि मिलती है; चुनाव प्रीमियम भरने के तरीके और राइडर पर निर्भर है।',
  },
  {
    q: 'क्या गुजरात में कहीं से भी टर्म प्लान ले सकते हैं?',
    a: 'हाँ। पहली बातचीत फ़ोन या WhatsApp पर हो सकती है, और काग़ज़ी काम LIC की प्रक्रिया के अनुसार पूरा होता है। अहमदाबाद और गांधीनगर में मुलाकात भी हो सकती है। कॉल या WhatsApp करें: +91 98240 25435।',
  },
  {
    q: 'क्या यह LIC की आधिकारिक वेबसाइट है?',
    a: 'नहीं। यह LIC एजेंट जिगिषा किरण शाह की वेबसाइट है। पॉलिसी LIC जारी करती है और क्लेम का निर्णय LIC करती है। आधिकारिक जानकारी के लिए licindia.in और पॉलिसी दस्तावेज़ देखें।',
  },
];

const PLANS = [
  { name: 'LIC Tech Term', text: 'ऑनलाइन टर्म प्लान। कम प्रीमियम में बड़ा कवर, लेवल या बढ़ते कवर का विकल्प।' },
  { name: 'LIC Jeevan Amar', text: 'नियमित प्रीमियम वाला टर्म प्लान। लेवल या बढ़ता कवर, महिलाओं के लिए विशेष दरें।' },
];

export default function HindiPage() {
  useSEO({
    title: 'अहमदाबाद में टर्म इंश्योरेंस | हिंदी में LIC सलाह',
    description:
      'अहमदाबाद और गुजरात में टर्म इंश्योरेंस: कितना कवर चाहिए, LIC Tech Term और Jeevan Amar में फ़र्क। हिंदी में मुफ़्त सलाह: +91 98240 25435.',
    ogTitle: 'अहमदाबाद में टर्म इंश्योरेंस — जिगिषा किरण शाह, LIC एजेंट',
    path: '/hi',
    keywords:
      'अहमदाबाद में टर्म इंश्योरेंस, अहमदाबाद टर्म प्लान, गुजरात टर्म प्लान, गुजरात में टर्म इंश्योरेंस, LIC टर्म प्लान, LIC एजेंट अहमदाबाद, term insurance Ahmedabad Hindi',
    breadcrumbLabel: 'हिंदी में सलाह',
    htmlLang: 'hi-IN',
    alternateLanguages: { 'en-IN': '/', 'gu-IN': '/gu', 'hi-IN': '/hi', 'x-default': '/' },
    jsonLd: [
      {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        '@id': `${SITE_URL}/hi#webpage`,
        url: `${SITE_URL}/hi`,
        name: 'अहमदाबाद में टर्म इंश्योरेंस — हिंदी में LIC सलाह',
        inLanguage: 'hi-IN',
        about: { '@id': `${SITE_URL}/#person` },
        isPartOf: { '@id': `${SITE_URL}/#website` },
      },
      faqJsonLd(FAQS),
    ],
  });

  return (
    <div lang="hi" className="bg-cream pt-20 lg:pt-24 pb-16 lg:pb-24">
      <div className="container max-w-5xl">
        <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-8">
          <Link to="/" className="hover:text-gold-dark">होम</Link>
          <span aria-hidden="true"> / </span>
          <span aria-current="page">हिंदी में सलाह</span>
        </nav>

        <section className="grid lg:grid-cols-[1.35fr_.65fr] gap-8 lg:gap-14 items-center mb-16">
          <div>
            <p className="text-xs font-bold tracking-[.16em] text-gold-dark mb-4">अहमदाबाद · शेला · हिंदी में सलाह</p>
            <h1 className="text-3xl md:text-5xl font-display font-semibold text-midnight leading-tight mb-6">
              अहमदाबाद में टर्म इंश्योरेंस: परिवार के लिए सही कवर
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed mb-7">
              टर्म इंश्योरेंस सबसे कम प्रीमियम में सबसे बड़ा जीवन कवर देता है: अगर पॉलिसी की अवधि में आपको कुछ हो जाए, तो
              परिवार को पूरी बीमा राशि मिलती है। जिगिषा किरण शाह 2004 से अहमदाबाद में LIC एजेंट हैं और हिंदी, गुजराती व अंग्रेज़ी
              में सलाह देती हैं। पहली बातचीत मुफ़्त है।
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="tel:+919824025435" data-cta="hi-call" className="inline-flex items-center gap-2 rounded-xl bg-midnight text-white px-5 py-3 font-semibold hover:bg-gold transition-colors min-h-11">
                <Phone size={17} aria-hidden="true" /> कॉल करें
              </a>
              <a
                href={whatsappUrl('नमस्ते जिगिषा जी, मुझे अहमदाबाद में टर्म इंश्योरेंस के बारे में हिंदी में जानकारी चाहिए।')}
                target="_blank"
                rel="noopener noreferrer"
                data-cta="hi-whatsapp"
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-white px-5 py-3 font-semibold text-midnight hover:border-gold transition-colors min-h-11"
              >
                WhatsApp पर पूछें <ArrowRight size={16} aria-hidden="true" />
              </a>
            </div>
          </div>
          <aside className="rounded-3xl bg-white border border-border p-6 lg:p-8 shadow-sm">
            <ShieldCheck className="text-gold-dark mb-4" size={26} aria-hidden="true" />
            <h2 className="text-xl font-display font-semibold text-midnight mb-3">कवर तय करने से पहले</h2>
            <ul className="space-y-3 text-gray-600 leading-relaxed list-disc pl-5">
              <li>सालाना आय और घर का खर्च</li>
              <li>घर या कारोबार का बाकी लोन</li>
              <li>आप पर निर्भर परिवार के सदस्य</li>
              <li>पहले से मौजूद जीवन बीमा</li>
            </ul>
            <Link to="/protection-check" className="inline-flex items-center gap-2 mt-5 font-semibold text-gold-dark hover:text-midnight">
              मुफ़्त कवर चेक करें <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </aside>
        </section>

        <section className="mb-16" aria-labelledby="hi-cover-heading">
          <h2 id="hi-cover-heading" className="text-2xl md:text-3xl font-display font-semibold text-midnight mb-4">कितना कवर चाहिए?</h2>
          <p className="text-gray-600 leading-relaxed max-w-3xl mb-4">
            एक आसान नियम: सालाना आय का 10 से 15 गुना, उसमें घर या कारोबार का बाकी लोन जोड़ें, और पहले से मौजूद बीमा घटाएँ।
            ऐसा कवर परिवार को EMI और रोज़मर्रा का खर्च दोनों संभालने देता है।
          </p>
          <p className="text-gray-600 leading-relaxed max-w-3xl">
            उदाहरण: 35 साल की उम्र, ₹12 लाख सालाना आय और ₹40 लाख का होम लोन — लगभग ₹1.5 से 2.2 करोड़ का कवर।
            आपकी उम्र और सेहत के हिसाब से सही राशि मुफ़्त बातचीत में तय की जा सकती है।
          </p>
        </section>

        <section className="mb-16" aria-labelledby="hi-plans-heading">
          <h2 id="hi-plans-heading" className="text-2xl md:text-3xl font-display font-semibold text-midnight mb-6">LIC के टर्म प्लान</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {PLANS.map((p) => (
              <div key={p.name} className="rounded-2xl bg-white border border-border p-5">
                <h3 className="font-semibold text-midnight mb-2">{p.name}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{p.text}</p>
              </div>
            ))}
          </div>
          <Link to="/services/term-insurance" className="inline-flex items-center gap-2 mt-5 text-sm font-semibold text-gold-dark hover:text-midnight">
            पूरी जानकारी (अंग्रेज़ी में) <ArrowRight size={15} aria-hidden="true" />
          </Link>
        </section>

        <section className="mb-16" aria-labelledby="hi-nominee-heading">
          <h2 id="hi-nominee-heading" className="text-2xl md:text-3xl font-display font-semibold text-midnight mb-4">क्लेम में सबसे ज़्यादा देरी क्यों होती है?</h2>
          <p className="text-gray-600 leading-relaxed max-w-3xl">
            नॉमिनी दर्ज न होना। नॉमिनी दर्ज हो तो क्लेम सिर्फ़ काग़ज़ी काम है; न हो तो परिवार को क़ानूनी वारिस की प्रक्रिया से
            गुज़रना पड़ता है, जिसमें महीनों लग सकते हैं। हर पॉलिसी में नॉमिनी की जाँच करें।{' '}
            <Link to="/services/nominee-change" className="font-semibold text-gold-dark underline underline-offset-4">नॉमिनी बदलने की जानकारी</Link>
          </p>
        </section>

        <section className="mb-16" aria-labelledby="hi-faq-heading">
          <h2 id="hi-faq-heading" className="text-2xl md:text-3xl font-display font-semibold text-midnight mb-6">अक्सर पूछे जाने वाले सवाल</h2>
          <div className="divide-y divide-border border-y border-border">
            {FAQS.map((faq) => (
              <details key={faq.q} className="group py-5">
                <summary className="cursor-pointer list-none pr-8 font-semibold text-midnight marker:hidden">
                  {faq.q}
                  <span className="float-right text-gold-dark" aria-hidden="true">+</span>
                </summary>
                <p className="mt-3 max-w-4xl leading-relaxed text-gray-600">{faq.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="rounded-3xl bg-midnight text-white p-7 md:p-10 mb-12">
          <p className="text-xs uppercase tracking-[.16em] text-gold mb-3">शेला, अहमदाबाद</p>
          <h2 className="text-2xl md:text-3xl font-display font-semibold mb-4">अपने सवालों के साथ बात शुरू करें</h2>
          <p className="text-white/75 leading-relaxed mb-6">
            जिगिषा किरण शाह 2004 से LIC एजेंट हैं और 2023 व 2024 में MDRT हासिल कर चुकी हैं। पूरे अहमदाबाद और गांधीनगर में फ़ोन,
            WhatsApp या मुलाकात से सलाह मिलती है।
          </p>
          <p className="text-sm text-white/65 mb-6">
            पता: Orchid Legacy, D3-1303, Applewoods Township, Shela, Ahmedabad, Gujarat 380058। सोमवार से शनिवार, सुबह 9 से शाम 6 बजे।
          </p>
          <Link to="/book" className="inline-flex items-center gap-2 rounded-xl bg-white text-midnight px-5 py-3 font-semibold hover:bg-gold hover:text-white transition-colors min-h-11">
            मुफ़्त सलाह का समय चुनें <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </section>

        <p className="flex gap-2 items-start text-xs text-gray-500 leading-relaxed">
          <BookOpen className="shrink-0 mt-0.5" size={15} aria-hidden="true" />
          बीमा आग्रह की विषयवस्तु है। यह LIC एजेंट जिगिषा किरण शाह की वेबसाइट है, LIC की आधिकारिक वेबसाइट नहीं। योजनाओं के लाभ,
          पात्रता और प्रीमियम पॉलिसी दस्तावेज़ और LIC के नियमों पर निर्भर हैं।{' '}
          <a className="underline" href="https://licindia.in/" target="_blank" rel="noopener noreferrer">LIC की आधिकारिक वेबसाइट</a> और{' '}
          <a className="underline" href="https://irdai.gov.in/" target="_blank" rel="noopener noreferrer">IRDAI</a> देखें।
        </p>
      </div>
    </div>
  );
}
