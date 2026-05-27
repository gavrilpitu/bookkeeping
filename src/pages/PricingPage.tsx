import React from 'react';
import { Link } from 'react-router-dom';
import { Check, Sparkles, ArrowRight } from 'lucide-react';
import Contact from '../components/Contact';

interface PricingTier {
  name: string;
  description: string;
  price: string;
  period: string;
  features: string[];
  highlighted?: boolean;
  cta: string;
}

const PricingPage: React.FC = () => {
  const tiers: PricingTier[] = [
    {
      name: "Starter",
      description: "Perfect for freelancers and sole proprietors just getting started",
      price: "$497",
      period: "/month",
      features: [
        "Up to 150 transactions/month",
        "Monthly bank and card reconciliation",
        "Expense categorization with bank rules",
        "Monthly financial statements",
        "QuickBooks Online integration",
        "Priority email & phone support",
        "CPA ready books for tax time"
      ],
      cta: "Get Started"
    },
    {
      name: "Growth",
      description: "Ideal for growing small businesses with increasing complexity",
      price: "$1,497",
      period: "/month",
      features: [
        "Up to 500 transactions/month",
        "Everything in Starter",
        "Light AR and AP tracking",
        "Light bill pay",
        "Quarterly performance summary",
        "Priority email & phone support",
        "CPA ready books for tax time"
      ],
      highlighted: true,
      cta: "Most Popular"
    },
    {
      name: "Enterprise",
      description: "Comprehensive solution for established businesses",
      price: "Starting at $1,000",
      period: "/month",
      features: [
        "Unlimited transactions/month",
        "Everything in Growth",
        "Custom reports and KPI dashboards",
        "Accrual, payroll, and loan tracking",
        "Monthly loom walk-throughs",
        "CPA ready books for tax time"
      ],
      cta: "Contact Us"
    }
  ];

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const faqs = [
    {
      question: "How does billing work?",
      answer: "We bill monthly at the beginning of each service period. You can cancel anytime with 30 days notice and won't be charged for the following month."
    },
    {
      question: "What if I exceed my transaction limit?",
      answer: "We'll notify you when you're approaching your limit and discuss upgrading to a plan that better fits your needs. We never charge surprise overage fees."
    },
    {
      question: "Can I switch plans?",
      answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle."
    },
    {
      question: "Do you offer annual discounts?",
      answer: "Yes! Pay annually and receive 2 months free. Contact us to set up annual billing."
    },
    {
      question: "What accounting software do you support?",
      answer: "We exclusively work with QuickBooks products, including QuickBooks Online and QuickBooks Desktop."
    },
    {
      question: "How quickly can I get started?",
      answer: "Most clients are fully onboarded within 1-2 weeks. We'll gather your financial data, set up systems, and begin managing your books."
    }
  ];

  return (
    <div>
      <section className="pt-24 pb-10 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-sm font-medium mb-3">
              <Sparkles className="w-4 h-4" />
              Transparent Pricing
            </span>
            <h1 className="text-4xl font-bold text-gray-900 mb-3">
              Plans That Scale With Your Business
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose the plan that fits your needs. All plans include our core bookkeeping
              services with no hidden fees or long-term contracts.
            </p>
          </div>

          <div className="mt-12 mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
              What You're Actually Getting
            </h2>
            <div className="max-w-2xl mx-auto overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="text-left py-3.5 px-6 text-sm font-semibold text-gray-700 uppercase tracking-wide">Deliverable</th>
                    <th className="text-right py-3.5 px-6 text-sm font-semibold text-gray-700 uppercase tracking-wide">Market Value</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { label: "Monthly bookkeeping & bank reconciliation", value: "$500/mo" },
                    { label: "P&L + balance sheet reports delivered by the 5th", value: "$200/mo" },
                    { label: "QuickBooks setup & chart of accounts", value: "$750 one-time" },
                    { label: "60-min monthly financial clarity call (Bonus)", value: "$300/mo", bonus: true },
                    { label: "Tax-ready year-end CPA handoff package (Bonus)", value: "$500/yr", bonus: true },
                    { label: "90-day hidden deductions audit (Bonus)", value: "$400 one-time", bonus: true },
                    { label: "Unlimited email support 48-hr response (Bonus)", value: "$150/mo", bonus: true },
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                      <td className={`py-3.5 px-6 text-sm ${row.bonus ? 'text-blue-700' : 'text-gray-700'}`}>
                        {row.label}
                      </td>
                      <td className={`py-3.5 px-6 text-sm text-right font-medium ${row.bonus ? 'text-blue-700' : 'text-gray-700'}`}>
                        {row.value}
                      </td>
                    </tr>
                  ))}
                  <tr className="bg-gray-900">
                    <td className="py-4 px-6 text-sm font-bold text-white">Total value</td>
                    <td className="py-4 px-6 text-sm font-bold text-white text-right">~$1,900+/mo</td>
                  </tr>
                  <tr className="bg-green-50">
                    <td className="py-4 px-6 text-sm font-bold text-green-700">Your price</td>
                    <td className="py-4 px-6 text-sm font-bold text-green-700 text-right">Starting at $497/mo</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-center text-sm italic text-gray-500 mt-4">
              All plans include our Accurate Books by the 5th guarantee.
            </p>
          </div>

          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-300 text-amber-800 text-sm font-medium px-5 py-2.5 rounded-full shadow-sm">
              <span className="w-2 h-2 rounded-full bg-amber-500 shrink-0 animate-pulse"></span>
              Only 5 new client spots open per month — sign up this week and get a free 30-minute Financial Health Check ($150 value).
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 items-start mt-16">
            {tiers.map((tier, index) => (
              <div
                key={index}
                className={`relative rounded-2xl p-6 transition-all duration-300 ${
                  tier.highlighted
                    ? 'bg-blue-700 text-white shadow-2xl scale-105'
                    : 'bg-white border border-gray-200 hover:shadow-xl hover:border-blue-200'
                }`}
              >
                {tier.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-teal-500 text-white text-sm font-semibold px-4 py-1.5 rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="mb-4">
                  <h3 className={`text-2xl font-bold mb-1 ${tier.highlighted ? 'text-white' : 'text-gray-900'}`}>
                    {tier.name}
                  </h3>
                  <p className={`text-sm leading-relaxed ${tier.highlighted ? 'text-blue-100' : 'text-gray-600'}`}>
                    {tier.description}
                  </p>
                </div>

                <div className="mb-5">
                  <div className="flex items-baseline gap-1">
                    <span className={`text-4xl font-bold ${tier.highlighted ? 'text-white' : 'text-gray-900'}`}>
                      {tier.price}
                    </span>
                    <span className={tier.highlighted ? 'text-blue-200' : 'text-gray-500'}>
                      {tier.period}
                    </span>
                  </div>
                </div>

                <ul className="space-y-3 mb-6">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 ${
                        tier.highlighted ? 'bg-blue-600' : 'bg-teal-100'
                      }`}>
                        <Check className={`w-3 h-3 ${tier.highlighted ? 'text-white' : 'text-teal-600'}`} />
                      </div>
                      <span className={`text-sm ${tier.highlighted ? 'text-blue-50' : 'text-gray-700'}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={scrollToContact}
                  className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                    tier.highlighted
                      ? 'bg-white text-blue-700 hover:bg-blue-50 shadow-lg'
                      : 'bg-blue-700 text-white hover:bg-blue-800 shadow-md hover:shadow-lg'
                  }`}
                >
                  {tier.cta}
                </button>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-3">All plans include:</p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-700">
              {[
                "No setup fees",
                "Cancel anytime",
                "Secure data handling",
                "100% satisfaction guarantee"
              ].map((item, index) => (
                <span key={index} className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-teal-600" />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Compare Plans
            </h2>
            <p className="text-gray-600">
              See what's included in each plan at a glance
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-4 px-6 font-semibold text-gray-900">Features</th>
                  <th className="text-center py-4 px-6 font-semibold text-gray-900">Starter</th>
                  <th className="text-center py-4 px-6 font-semibold text-blue-700 bg-blue-50 rounded-t-lg">Growth</th>
                  <th className="text-center py-4 px-6 font-semibold text-gray-900">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: "Transactions/Month", starter: "Up to 150", growth: "Up to 350", enterprise: "Unlimited" },
                  { feature: "Bank & Card Reconciliation", starter: true, growth: true, enterprise: true },
                  { feature: "Expense Categorization with Bank Rules", starter: true, growth: true, enterprise: true },
                  { feature: "Monthly Financial Statements", starter: true, growth: true, enterprise: true },
                  { feature: "QuickBooks Online Integration", starter: true, growth: true, enterprise: true },
                  { feature: "AR & AP Tracking", starter: false, growth: "Light", enterprise: true },
                  { feature: "Bill Pay", starter: false, growth: "Light", enterprise: true },
                  { feature: "Quarterly Performance Summary", starter: false, growth: true, enterprise: true },
                  { feature: "Custom Reports & KPI Dashboards", starter: false, growth: false, enterprise: true },
                  { feature: "Accrual, Payroll & Loan Tracking", starter: false, growth: false, enterprise: true },
                  { feature: "Loom Walk-throughs", starter: false, growth: false, enterprise: "Monthly" },
                  { feature: "Support", starter: "Priority", growth: "Priority", enterprise: "Priority" },
                  { feature: "CPA Ready Books for Tax Time", starter: true, growth: true, enterprise: true },
                ].map((row, index) => (
                  <tr key={index} className="border-b border-gray-100">
                    <td className="py-4 px-6 text-gray-700">{row.feature}</td>
                    <td className="py-4 px-6 text-center">
                      {typeof row.starter === 'boolean' ? (
                        row.starter ? (
                          <Check className="w-5 h-5 text-teal-600 mx-auto" />
                        ) : (
                          <span className="text-gray-300">-</span>
                        )
                      ) : (
                        <span className="text-gray-700">{row.starter}</span>
                      )}
                    </td>
                    <td className="py-4 px-6 text-center bg-blue-50">
                      {typeof row.growth === 'boolean' ? (
                        row.growth ? (
                          <Check className="w-5 h-5 text-teal-600 mx-auto" />
                        ) : (
                          <span className="text-gray-300">-</span>
                        )
                      ) : (
                        <span className="text-gray-900 font-medium">{row.growth}</span>
                      )}
                    </td>
                    <td className="py-4 px-6 text-center">
                      {typeof row.enterprise === 'boolean' ? (
                        row.enterprise ? (
                          <Check className="w-5 h-5 text-teal-600 mx-auto" />
                        ) : (
                          <span className="text-gray-300">-</span>
                        )
                      ) : (
                        <span className="text-gray-700">{row.enterprise}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-10 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Need a Custom Solution?
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Every business is unique. If our standard plans don't quite fit your needs,
                  we'll work with you to create a custom package tailored to your specific
                  requirements and budget.
                </p>
                <ul className="space-y-3">
                  {[
                    "Multi-entity bookkeeping",
                    "Industry-specific reporting",
                    "Transaction-based pricing that scales with your volume"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3 text-gray-700">
                      <div className="w-1.5 h-1.5 bg-teal-600 rounded-full"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="text-center md:text-right">
                <button
                  onClick={scrollToContact}
                  className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-xl font-semibold hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Schedule a Consultation
                </button>
                <p className="mt-4 text-sm text-gray-500">
                  Free 30-minute discovery call
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600">
              Everything you need to know about our pricing and services
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 bg-blue-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-3">
            Ready to Get Started?
          </h2>
          <p className="text-blue-100 text-lg mb-6">
            Join hundreds of small businesses who trust us with their financial records.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={scrollToContact}
              className="inline-flex items-center justify-center gap-2 bg-white text-blue-700 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 shadow-lg"
            >
              Contact Us Today
              <ArrowRight className="w-5 h-5" />
            </button>
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>

      <Contact />
    </div>
  );
};

export default PricingPage;
