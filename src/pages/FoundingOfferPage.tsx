import React, { useState } from 'react';
import {
  ShieldCheck,
  CheckCircle,
  Star,
  ArrowRight,
  Phone,
  Mail,
  Clock,
  Calculator,
  AlertCircle,
  Send,
  Lock,
} from 'lucide-react';

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;

const SPOTS_TOTAL = 5;
const SPOTS_LEFT = 3;

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

const FoundingOfferPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    business: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    try {
      const response = await fetch(`${SUPABASE_URL}/functions/v1/send-contact-email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
        },
        body: JSON.stringify({ ...formData, service: 'founding-offer' }),
      });
      if (!response.ok) throw new Error('Failed');
      setIsSubmitted(true);
    } catch {
      setError('Something went wrong. Please call us at (602) 888-2841.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans">

      {/* ── Minimal nav bar ── */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Calculator className="h-6 w-6 text-blue-700" />
            <span className="font-bold text-gray-900 text-lg">GPC Bookkeeping</span>
          </div>
          <a
            href="tel:6028882841"
            className="inline-flex items-center gap-2 text-sm font-medium text-blue-700 hover:text-blue-800 transition-colors"
          >
            <Phone className="h-4 w-4" />
            (602) 888-2841
          </a>
        </div>
      </header>

      {/* ── Hero / headline ── */}
      <section className="bg-gradient-to-b from-blue-700 to-blue-800 text-white py-14 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          {/* Urgency badge */}
          <div className="inline-flex items-center gap-2 bg-yellow-400 text-yellow-900 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
            <Clock className="h-3.5 w-3.5" />
            Founding Client Offer — {SPOTS_LEFT} of {SPOTS_TOTAL} Spots Remaining
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-5">
            Get Your First Month of&nbsp;
            <span className="text-yellow-300">Clean, Tax-Ready Books</span>
            &nbsp;— Completely Free
          </h1>
          <p className="text-blue-100 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto mb-8">
            The next {SPOTS_TOTAL} new clients who start a monthly bookkeeping plan with GPC get their
            full QuickBooks cleanup &amp; catch-up done free — a $500–$1,200 value, at no extra cost.
          </p>

          {/* Spot meter */}
          <div className="max-w-xs mx-auto mb-8">
            <div className="flex justify-between text-xs font-semibold text-blue-200 mb-1.5">
              <span>{SPOTS_TOTAL - SPOTS_LEFT} claimed</span>
              <span>{SPOTS_LEFT} left</span>
            </div>
            <div className="h-3 bg-blue-900/60 rounded-full overflow-hidden">
              <div
                className="h-full bg-yellow-400 rounded-full transition-all duration-700"
                style={{ width: `${((SPOTS_TOTAL - SPOTS_LEFT) / SPOTS_TOTAL) * 100}%` }}
              />
            </div>
          </div>

          <a
            href="#claim"
            className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-yellow-900 font-bold px-8 py-4 rounded-xl text-lg shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5"
          >
            Claim My Free Cleanup
            <ArrowRight className="h-5 w-5" />
          </a>
          <p className="text-blue-300 text-sm mt-3">No credit card. No commitment. Cancel any time.</p>
        </div>
      </section>

      {/* ── What you get ── */}
      <section className="py-14 sm:py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-10">
            Everything Included in the Founding Offer
          </h2>
          <div className="grid sm:grid-cols-2 gap-5">
            {[
              {
                title: 'Full QuickBooks Cleanup — Free',
                body: 'Every transaction reviewed, categorized, and corrected. Months or years of messy books made tax-ready.',
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
                body: 'Direct access to Gavril — a QuickBooks ProAdvisor Gold — not a ticketing queue or offshore team.',
              },
              {
                title: 'Tax-Ready Handoff',
                body: 'Your CPA gets everything they need, organized and labeled, so tax season costs you less.',
              },
              {
                title: 'Accuracy Guarantee',
                body: 'If your books aren\'t delivered by the 7th, or we make an uncorrectable error, that month is free.',
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

      {/* ── Guarantee ── */}
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

      {/* ── Social proof ── */}
      <section className="py-14 sm:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col items-center mb-8 gap-2">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-current text-yellow-400" />
              ))}
            </div>
            <p className="text-sm font-semibold text-gray-700">5.0 on Google — 14 reviews</p>
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

      {/* ── Claim form ── */}
      <section id="claim" className="scroll-mt-16 py-14 sm:py-16 bg-gray-50">
        <div className="max-w-xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-800 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
              <Clock className="h-3.5 w-3.5" />
              {SPOTS_LEFT} Founding Spots Left
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
              Claim Your Free QuickBooks Cleanup
            </h2>
            <p className="text-gray-600">
              Fill in the form and Gavril will reach out within one business day to get started.
            </p>
          </div>

          {isSubmitted ? (
            <div className="bg-white border border-gray-200 rounded-2xl p-10 text-center shadow-sm">
              <CheckCircle className="h-14 w-14 text-teal-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">You're in!</h3>
              <p className="text-gray-600 mb-1">Gavril will be in touch within one business day.</p>
              <p className="text-sm text-gray-400">In the meantime, feel free to call (602) 888-2841.</p>
            </div>
          ) : (
            <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-sm">
              {error && (
                <div className="mb-5 flex items-start gap-3 bg-red-50 border border-red-200 rounded-lg p-4">
                  <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-red-700">{error}</p>
                </div>
              )}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="fo-name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      id="fo-name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="fo-business" className="block text-sm font-medium text-gray-700 mb-1">
                      Business Name
                    </label>
                    <input
                      id="fo-business"
                      name="business"
                      type="text"
                      value={formData.business}
                      onChange={handleChange}
                      placeholder="Your business name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="fo-email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    id="fo-email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="fo-phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number *
                  </label>
                  <input
                    id="fo-phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(555) 123-4567"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="fo-message" className="block text-sm font-medium text-gray-700 mb-1">
                    What's your biggest bookkeeping headache? (optional)
                  </label>
                  <textarea
                    id="fo-message"
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Behind on books, messy QuickBooks, need tax-ready records..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-bold text-base shadow-md transition-all duration-200 ${
                    isSubmitting
                      ? 'bg-gray-400 text-white cursor-not-allowed'
                      : 'bg-blue-700 text-white hover:bg-blue-800 hover:shadow-lg hover:-translate-y-0.5'
                  }`}
                >
                  {isSubmitting ? 'Sending…' : 'Claim My Free Cleanup'}
                  {!isSubmitting && <Send className="h-4 w-4" />}
                </button>

                <div className="flex items-center justify-center gap-1.5 text-xs text-gray-400 mt-1">
                  <Lock className="h-3.5 w-3.5" />
                  Your information is private and never shared.
                </div>
              </form>
            </div>
          )}
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
            <a href="tel:6028882841" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Phone className="h-4 w-4" />
              (602) 888-2841
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
