import React, { useEffect } from 'react';
import {
  ShieldCheck,
  CheckCircle,
  Star,
  ArrowRight,
  Phone,
  Mail,
  Clock,
  Calculator,
  Check,
  Sparkles,
} from 'lucide-react';

const CALENDLY_URL = 'https://calendly.com/gavril-gpcbookkeeping/30min';

const scrollToCalendly = () => {
  const el = document.getElementById('calendly-embed');
  if (el) {
    const offset = 72;
    const top = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  }
};

// ── Pricing data ────────────────────────────────────────────────────────────
const tiers = [
  {
    name: 'Essential',
    monthly: '$497',
    annual: '$447',
    highlight: false,
    features: [
      'Monthly bookkeeping & categorization',
      'Bank & credit card reconciliation',
      'P&L and balance sheet by the 7th',
      'CPA-ready books',
    ],
  },
  {
    name: 'Growth',
    monthly: '$1,297',
    annual: '$1,097',
    highlight: true,
    badge: 'Most Popular',
    features: [
      'Everything in Essential',
      '90-day hidden deductions audit',
      'Payroll processing',
      'AR & AP tracking',
      'Quarterly performance summary',
    ],
  },
  {
    name: 'Scale',
    monthly: '$2,697',
    annual: '$2,397',
    highlight: false,
    features: [
      'Everything in Growth',
      'Custom KPI dashboards',
      'Cash-flow forecasting',
      'Dedicated account manager',
      'Monthly Loom walk-through',
    ],
  },
];

// ── Testimonials ─────────────────────────────────────────────────────────────
const testimonials = [
  {
    name: 'Brian Luca',
    title: 'Owner, Desert Sanctuary Assisted Living',
    quote: 'Gavril is highly skilled in bookkeeping. His QuickBooks expertise made a huge difference for me.',
    initials: 'BL',
    color: 'bg-sky-700',
  },
  {
    name: 'Andy',
    title: 'Owner, Hill Top Construction',
    quote: 'Gabe has been wonderfully patient in explaining all the options. He is the expert in QuickBooks. 10/10 would recommend!',
    initials: 'A',
    color: 'bg-amber-600',
  },
  {
    name: 'Anthony Zaha',
    title: 'Business Owner',
    quote: 'GPC Bookkeeping made the entire process incredibly easy and stress-free. Communication was clear, everything handled professionally from start to finish.',
    initials: 'AZ',
    color: 'bg-blue-600',
  },
];

// ── Page ─────────────────────────────────────────────────────────────────────
const FoundingOfferPage: React.FC = () => {
  // FIX 7: inject noindex / nofollow only while this page is mounted
  useEffect(() => {
    const meta = document.createElement('meta');
    meta.name = 'robots';
    meta.content = 'noindex, nofollow';
    document.head.appendChild(meta);
    return () => {
      document.head.removeChild(meta);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans">

      {/* ── Minimal nav ── */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Calculator className="h-6 w-6 text-blue-700" />
            <span className="font-bold text-gray-900 text-lg">GPC Bookkeeping</span>
          </div>
          <a
            href="tel:+12485952511"
            className="inline-flex items-center gap-2 text-sm font-medium text-blue-700 hover:text-blue-800 transition-colors"
          >
            <Phone className="h-4 w-4" />
            (248) 595-2511
          </a>
        </div>
      </header>

      {/* ── FIX 6: Light hero ── */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-16 sm:py-22">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          {/* FIX 4: clean "5 spots remaining" badge, no meter */}
          <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-800 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
            <Clock className="h-3.5 w-3.5" />
            5 Spots Remaining
          </div>

          {/* FIX 2: exact headline */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-5">
            Free QuickBooks Catch-Up &amp; Cleanup for the&nbsp;
            <span className="text-blue-700">Next 5 Phoenix Businesses</span>
          </h1>

          {/* FIX 2: exact subhead */}
          <p className="text-gray-600 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto mb-8">
            Sign a monthly bookkeeping plan and we'll get your books completely current — every month
            behind, waived. Plus your rate locked for life.
          </p>

          <button
            onClick={scrollToCalendly}
            className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-bold px-8 py-4 rounded-xl text-lg shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5"
          >
            Claim My Free Cleanup
            <ArrowRight className="h-5 w-5" />
          </button>
          <div className="flex items-center justify-center gap-1.5 mt-3">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-3.5 w-3.5 fill-current text-amber-400" />
            ))}
            <span className="text-gray-500 text-xs ml-1"><strong className="text-gray-700">5.0</strong> &middot; 18 Google reviews</span>
          </div>
          <p className="text-gray-400 text-sm mt-1.5">No credit card. No commitment. Cancel any time.</p>
        </div>
      </section>

      {/* ── FIX 7 note: "Everything Included" kept exactly as-is ── */}
      <section className="py-14 sm:py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-10">
            Everything Included
          </h2>
          <div className="grid sm:grid-cols-2 gap-5">
            {[
              {
                title: 'Full QuickBooks Cleanup — Free',
                // FIX 3: no dollar cap
                body: 'Every transaction reviewed, categorized, and corrected. Every month you\'re behind is waived — your monthly rate times however many months, entirely on us.',
              },
              {
                title: 'Monthly Bookkeeping (ongoing)',
                body: 'Clean books delivered by the 7th of every month — reconciled, categorized, and ready for your CPA.',
              },
              {
                title: 'P&L + Balance Sheet Reports',
                body: 'Easy-to-read financial statements every month so you always know where your business stands.',
              },
              {
                title: 'Dedicated ProAdvisor Support',
                body: 'Direct access to a QuickBooks ProAdvisor Gold — not a ticketing queue or offshore team.',
              },
              {
                title: 'Tax-Ready Handoff',
                body: 'Your CPA gets everything they need, organized and labeled, so tax season costs you less.',
              },
              {
                title: 'Accuracy Guarantee',
                body: "If your books aren't delivered by the 7th, or we make an uncorrectable error, that month is free.",
              },
            ].map((item, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-xl p-5 flex gap-4">
                <CheckCircle className="h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">{item.title}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FIX 5: Pricing section ── */}
      <section className="py-14 sm:py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
              Transparent Pricing
            </h2>
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-800 text-sm font-semibold px-5 py-2 rounded-full">
              <Sparkles className="h-4 w-4" />
              Next 5 clients lock these rates for life.
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`relative rounded-2xl border p-7 flex flex-col transition-all duration-300 ${
                  tier.highlight
                    ? 'border-blue-600 shadow-xl shadow-blue-100 bg-white'
                    : 'border-gray-200 bg-white hover:shadow-lg hover:border-blue-200'
                }`}
              >
                {tier.highlight && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="bg-blue-700 text-white text-xs font-bold px-4 py-1.5 rounded-full whitespace-nowrap">
                      {tier.badge}
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-1">
                    {tier.name}
                  </p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold text-gray-900">{tier.monthly}</span>
                    <span className="text-gray-500 text-sm">/mo</span>
                  </div>
                  <p className="text-sm text-teal-700 font-medium mt-1">
                    or {tier.annual}/mo billed annually
                  </p>
                </div>

                <ul className="space-y-3 flex-1 mb-7">
                  {tier.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-gray-700">
                      <Check className="h-4 w-4 text-teal-600 flex-shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={scrollToCalendly}
                  className={`w-full py-3 rounded-xl font-semibold text-sm transition-all duration-200 ${
                    tier.highlight
                      ? 'bg-blue-700 text-white hover:bg-blue-800 shadow-md hover:shadow-lg hover:-translate-y-0.5'
                      : 'border-2 border-gray-300 text-gray-700 hover:border-blue-700 hover:text-blue-700'
                  }`}
                >
                  Claim My Free Cleanup
                </button>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-500 text-sm mt-8">
            Not sure which fits?{' '}
            <button
              onClick={scrollToCalendly}
              className="text-blue-700 font-medium hover:underline"
            >
              Book a free call and we'll figure it out together.
            </button>
          </p>
        </div>
      </section>

      {/* ── Guarantee (kept exactly as-is) ── */}
      <section className="py-12 bg-blue-700">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
            <ShieldCheck className="h-14 w-14 text-white opacity-90 flex-shrink-0" strokeWidth={1.5} />
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                Accurate Books by the 7th — Or That Month Is Free
              </h3>
              <p className="text-blue-100 leading-relaxed">
                We stake our revenue on your accuracy every single month. If we miss the deadline or make
                an error we can't correct within 72 hours, you pay nothing for that month. No questions asked.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Testimonials (kept exactly as-is) ── */}
      <section className="py-14 sm:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col items-center mb-8 gap-2">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-current text-yellow-400" />
              ))}
            </div>
            <p className="text-sm font-semibold text-gray-700">5.0 on Google — 18 reviews</p>
          </div>
          <div className="grid sm:grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-gray-50 border border-gray-200 rounded-xl p-5">
                <p className="text-sm text-gray-700 leading-relaxed mb-4">"{t.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0 ${t.color}`}>
                    {t.initials}
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-gray-900">{t.name}</p>
                    {t.title && <p className="text-xs text-gray-500">{t.title}</p>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FIX 1: Calendly embed (replaces form entirely) ── */}
      <section id="calendly-embed" className="scroll-mt-16 py-14 sm:py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-800 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
              <Clock className="h-3.5 w-3.5" />
              5 Spots Remaining
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
              Book Your Free Strategy Call
            </h2>
            <p className="text-gray-600">
              Pick a time that works for you — we'll walk through your books situation and get everything set up.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
            <iframe
              src={`${CALENDLY_URL}?hide_gdpr_banner=1&hide_event_type_details=0&background_color=ffffff&text_color=111827&primary_color=1d4ed8`}
              width="100%"
              height="700"
              frameBorder="0"
              title="Schedule a call with GPC Bookkeeping"
            />
          </div>
        </div>
      </section>

      {/* ── Footer strip ── */}
      <footer className="bg-gray-900 text-gray-400 py-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-sm">
          <div className="flex items-center gap-2 text-white font-semibold">
            <Calculator className="h-5 w-5 text-blue-400" />
            GPC Bookkeeping
          </div>
          <div className="flex flex-wrap justify-center gap-5">
            <a href="tel:+12485952511" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Phone className="h-4 w-4" />
              (248) 595-2511
            </a>
            <a href="mailto:info@gpcbookkeeping.com" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Mail className="h-4 w-4" />
              info@gpcbookkeeping.com
            </a>
          </div>
          <p>© {new Date().getFullYear()} GPC Bookkeeping</p>
        </div>
      </footer>
    </div>
  );
};

export default FoundingOfferPage;
