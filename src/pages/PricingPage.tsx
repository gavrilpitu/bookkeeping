import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';
import Contact from '../components/Contact';

type TierKey = 'essential' | 'growth' | 'scale';

interface PricingTier {
  key: TierKey;
  name: string;
  description: string;
  price: string;
  period: string;
  features: string[];
  bestFor: string;
  planLimits: string[];
  highlighted?: boolean;
  cta: string;
}

interface ValueRow {
  deliverable: string;
  value: string;
  bonus?: boolean;
}

const valueStacks: Record<TierKey, { rows: ValueRow[]; total: string; yourPrice: string }> = {
  essential: {
    rows: [
      { deliverable: 'Monthly bookkeeping & bank reconciliation', value: '$400/mo' },
      { deliverable: 'P&L + balance sheet by the 5th', value: '$150/mo' },
      { deliverable: 'QuickBooks setup & optimization', value: '$600 one-time' },
      { deliverable: 'Unlimited email support', value: '$100/mo', bonus: true },
      { deliverable: 'CPA-ready year-end handoff package', value: '$400/yr', bonus: true },
    ],
    total: '~$1,250+/mo',
    yourPrice: '$497/mo',
  },
  growth: {
    rows: [
      { deliverable: 'Everything in Essential', value: '$1,250/mo' },
      { deliverable: '60-min monthly financial clarity call', value: '$300/mo', bonus: true },
      { deliverable: '90-day hidden deductions audit', value: '$400 one-time', bonus: true },
      { deliverable: 'Light AR & AP tracking', value: '$200/mo', bonus: true },
      { deliverable: 'Quarterly performance summary', value: '$150/mo', bonus: true },
    ],
    total: '~$2,300+/mo',
    yourPrice: '$1,297/mo',
  },
  scale: {
    rows: [
      { deliverable: 'Everything in Growth', value: '$2,300/mo' },
      { deliverable: 'Custom KPI dashboards', value: '$300/mo', bonus: true },
      { deliverable: 'Accrual, payroll & loan tracking', value: '$250/mo', bonus: true },
      { deliverable: 'Monthly Loom walk-through', value: '$150/mo', bonus: true },
      { deliverable: 'Dedicated account manager', value: '$400/mo', bonus: true },
    ],
    total: '~$4,200+/mo',
    yourPrice: '$2,697/mo',
  },
};

interface CostRow {
  label: string;
  amount: string;
}

interface ComparisonTier {
  key: TierKey;
  label: string;
  vsLabel: string;
  rows: CostRow[];
  marketTotal: string;
  gpcPrice: string;
  savings: string;
}

const comparisonTiers: ComparisonTier[] = [
  {
    key: 'essential',
    label: 'Essential',
    vsLabel: 'vs. Hiring a Bookkeeper',
    rows: [
      { label: 'Part-time bookkeeper (20 hrs/mo)', amount: '$3,600/mo' },
      { label: 'QuickBooks subscription', amount: '$85/mo' },
      { label: 'Payroll taxes & benefits', amount: '$720/mo' },
      { label: 'Recruiting & onboarding costs', amount: '$1,205/mo' },
    ],
    marketTotal: '$5,610/mo',
    gpcPrice: '$497/mo',
    savings: '$5,113/mo',
  },
  {
    key: 'growth',
    label: 'Growth',
    vsLabel: 'vs. Bookkeeper + Accountant',
    rows: [
      { label: 'Part-time bookkeeper (20 hrs/mo)', amount: '$3,600/mo' },
      { label: 'Part-time accountant (10 hrs/mo)', amount: '$2,800/mo' },
      { label: 'QuickBooks subscription', amount: '$85/mo' },
      { label: 'Payroll taxes & benefits (est.)', amount: '$1,169/mo' },
    ],
    marketTotal: '$7,654/mo',
    gpcPrice: '$1,297/mo',
    savings: '$6,357/mo',
  },
  {
    key: 'scale',
    label: 'Scale',
    vsLabel: 'vs. Full CFO Team',
    rows: [
      { label: 'Full-time CFO salary (prorated)', amount: '$10,000/mo' },
      { label: 'Senior accountant (full-time)', amount: '$5,200/mo' },
      { label: 'QuickBooks + reporting tools', amount: '$390/mo' },
      { label: 'Benefits & overhead (est. 30%)', amount: '$800/mo' },
    ],
    marketTotal: '$16,390/mo',
    gpcPrice: '$2,697/mo',
    savings: '$13,693/mo',
  },
];

const CostComparison: React.FC = () => {
  const [active, setActive] = useState<TierKey>('growth');
  const tier = comparisonTiers.find((t) => t.key === active)!;

  return (
    <div className="mb-14">
      <h2 className="text-2xl font-bold text-gray-900 text-center mb-2">
        What It Would Cost You Otherwise
      </h2>
      <p className="text-sm text-gray-500 text-center mb-7">
        See how GPC stacks up against hiring in-house.
      </p>

      <div className="max-w-2xl mx-auto">
        {/* Tabs */}
        <div className="flex rounded-xl border border-gray-200 bg-gray-50 p-1 mb-5 gap-1">
          {comparisonTiers.map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setActive(key)}
              className={`flex-1 py-2 px-4 rounded-lg text-sm font-semibold transition-all duration-200 ${
                active === key
                  ? 'bg-white text-blue-700 shadow-sm border border-gray-200'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Table */}
        <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="py-3 px-5 text-xs font-semibold text-gray-500 uppercase tracking-wide">
                  {tier.vsLabel}
                </th>
                <th className="py-3 px-5 text-xs font-semibold text-gray-500 uppercase tracking-wide text-right">
                  Monthly Cost
                </th>
              </tr>
            </thead>
            <tbody>
              {tier.rows.map((row, i) => (
                <tr key={i} className="border-b border-gray-100 bg-white hover:bg-gray-50 transition-colors">
                  <td className="py-3.5 px-5 text-sm text-gray-700">{row.label}</td>
                  <td className="py-3.5 px-5 text-sm text-gray-700 text-right font-medium">{row.amount}</td>
                </tr>
              ))}
              <tr className="bg-gray-900">
                <td className="py-4 px-5 text-sm font-bold text-white">Market total</td>
                <td className="py-4 px-5 text-sm font-bold text-white text-right">{tier.marketTotal}</td>
              </tr>
              <tr className="bg-blue-700">
                <td className="py-4 px-5 text-sm font-bold text-white">GPC {tier.label} plan</td>
                <td className="py-4 px-5 text-sm font-bold text-white text-right">{tier.gpcPrice}</td>
              </tr>
              <tr className="bg-green-50">
                <td className="py-4 px-5 text-sm font-bold text-green-700">You save</td>
                <td className="py-4 px-5 text-sm font-bold text-green-700 text-right">{tier.savings}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const annualSavings: Record<TierKey, string> = {
  essential: '$600',
  growth: '$2,400',
  scale: '$3,600',
};

const annualPrices: Record<TierKey, string> = {
  essential: '$447',
  growth: '$1,097',
  scale: '$2,397',
};

const monthlyPrices: Record<TierKey, string> = {
  essential: '$497',
  growth: '$1,297',
  scale: '$2,697',
};

const PricingPage: React.FC = () => {
  const [selectedTier, setSelectedTier] = useState<TierKey>('growth');
  const [isAnnual, setIsAnnual] = useState(false);

  const tiers: PricingTier[] = [
    {
      key: 'essential',
      name: 'Essential',
      description: 'Clean books delivered by the 5th every month. Stop guessing where your money went.',
      price: isAnnual ? annualPrices.essential : monthlyPrices.essential,
      period: '/mo',
      features: [
        'Monthly bookkeeping and reconciliation',
        'P&L and balance sheet by the 5th',
        'QuickBooks setup and optimization',
        'Unlimited email support',
        'CPA-ready books',
      ],
      bestFor: 'Freelancers, solopreneurs & small businesses getting their books in order.',
      planLimits: [
        'Up to 150 transactions/month',
        'Up to 3 bank or credit card accounts',
        '1 business entity included',
        'Email support',
      ],
      cta: 'Get Started',
    },
    {
      key: 'growth',
      name: 'Growth',
      description: 'Never be surprised by your numbers again. Clarity, strategy, and zero tax-time panic.',
      price: isAnnual ? annualPrices.growth : monthlyPrices.growth,
      period: '/mo',
      features: [
        'Everything in Essential',
        '90-day hidden deductions audit',
        'Payroll processing',
        'Light AR and AP tracking',
        'Light bill pay',
        'Quarterly performance summary',
      ],
      bestFor: 'Growing businesses that want clarity, strategy & zero tax-time surprises.',
      planLimits: [
        'Up to 500 transactions/month',
        'Up to 20 AR and AP transactions/month',
        'Up to 10 bills/month',
        'Up to 6 bank or credit card accounts',
        '1 business entity included',
        'Priority email support',
      ],
      highlighted: true,
      cta: 'Most Popular',
    },
    {
      key: 'scale',
      name: 'Scale',
      description: 'A dedicated CFO-level partner for a fraction of the hire. Forecasting, strategy, and full financial command.',
      price: isAnnual ? annualPrices.scale : monthlyPrices.scale,
      period: '/mo',
      features: [
        'Everything in Growth',
        'Custom KPI dashboards',
        'Accrual, payroll, and loan tracking',
        'Monthly Loom walk-through',
        'Dedicated account manager',
      ],
      bestFor: 'Established businesses that need a dedicated CFO-level partner.',
      planLimits: [
        'Unlimited transactions',
        'Unlimited bank or credit card accounts',
        'Multi-entity support included',
        'Priority support + dedicated account manager',
      ],
      cta: 'Get Started',
    },
  ];

  const scrollToContact = () => {
    window.open('https://calendly.com/gavril-gpcbookkeeping/30min', '_blank');
  };

  const faqs = [
    {
      question: 'How does billing work?',
      answer: 'We bill monthly at the beginning of each service period. You can cancel anytime with 30 days notice and won\'t be charged for the following month.',
    },
    {
      question: 'What if I exceed my transaction limit?',
      answer: 'We\'ll notify you when you\'re approaching your limit and discuss upgrading to a plan that better fits your needs. We never charge surprise overage fees.',
    },
    {
      question: 'Can I switch plans?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle.',
    },
    {
      question: 'Do you offer annual discounts?',
      answer: 'Yes! Pay annually and receive 2 months free. Contact us to set up annual billing.',
    },
    {
      question: 'What accounting software do you support?',
      answer: 'We exclusively work with QuickBooks products, including QuickBooks Online and QuickBooks Desktop.',
    },
    {
      question: 'How quickly can I get started?',
      answer: 'Most clients are fully onboarded within 1–2 weeks. We\'ll gather your financial data, set up systems, and begin managing your books.',
    },
  ];

  const stack = valueStacks[selectedTier];

  const tabLabels: { key: TierKey; label: string }[] = [
    { key: 'essential', label: 'Essential' },
    { key: 'growth', label: 'Growth' },
    { key: 'scale', label: 'Scale' },
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
              One Simple Investment. Guaranteed Results.
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Every plan includes our Accurate Books by the 5th guarantee. No long-term contracts. Cancel anytime.
            </p>
          </div>

          {/* Value stack */}
          <div className="mt-12 mb-16 max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-6">
              What You're Actually Getting
            </h2>

            {/* Tier tabs */}
            <div className="flex rounded-xl border border-gray-200 bg-gray-50 p-1 mb-4 gap-1">
              {tabLabels.map(({ key, label }) => (
                <button
                  key={key}
                  onClick={() => setSelectedTier(key)}
                  className={`flex-1 py-2 px-4 rounded-lg text-sm font-semibold transition-all duration-200 ${
                    selectedTier === key
                      ? 'bg-white text-blue-700 shadow-sm border border-gray-200'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>

            {/* Value table */}
            <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="text-left py-3.5 px-6 text-sm font-semibold text-gray-700 uppercase tracking-wide">Deliverable</th>
                    <th className="text-right py-3.5 px-6 text-sm font-semibold text-gray-700 uppercase tracking-wide">Market Value</th>
                  </tr>
                </thead>
                <tbody>
                  {stack.rows.map((row, i) => (
                    <tr key={i} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                      <td className={`py-3.5 px-6 text-sm ${row.bonus ? 'text-blue-700' : 'text-gray-700'}`}>
                        {row.deliverable}
                      </td>
                      <td className={`py-3.5 px-6 text-sm text-right font-medium ${row.bonus ? 'text-blue-700' : 'text-gray-700'}`}>
                        {row.value}
                      </td>
                    </tr>
                  ))}
                  <tr className="bg-gray-900">
                    <td className="py-4 px-6 text-sm font-bold text-white">Total value</td>
                    <td className="py-4 px-6 text-sm font-bold text-white text-right">{stack.total}</td>
                  </tr>
                  <tr className="bg-green-50">
                    <td className="py-4 px-6 text-sm font-bold text-green-700">Your price</td>
                    <td className="py-4 px-6 text-sm font-bold text-green-700 text-right">{stack.yourPrice}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-center text-sm italic text-gray-500 mt-4">
              All plans include our Accurate Books by the 5th guarantee.
            </p>
          </div>

          {/* What Happens When You Sign Up */}
          <div className="mb-14">
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
              What Happens When You Sign Up
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { step: 1, timing: 'Day 1–2', title: 'Onboarding', description: 'We onboard your books and connect QuickBooks.' },
                { step: 2, timing: 'Days 3–7', title: 'Reconciliation', description: 'We reconcile your accounts and identify any gaps.' },
                { step: 3, timing: 'Day 14', title: 'First Snapshot', description: 'You receive your first financial snapshot.' },
                { step: 4, timing: 'Day 30', title: 'Clean P&L', description: 'Your first clean P&L delivered — guaranteed.' },
              ].map(({ step, timing, title, description }) => (
                <div key={step} className="relative bg-white border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow duration-200">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-full bg-blue-700 text-white flex items-center justify-center text-sm font-bold flex-shrink-0">
                      {step}
                    </div>
                    <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full">{timing}</span>
                  </div>
                  <h3 className="text-base font-bold text-gray-900 mb-1">{title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
                  {step < 4 && (
                    <div className="hidden lg:block absolute top-1/2 -right-2.5 -translate-y-1/2 z-10">
                      <ArrowRight className="w-4 h-4 text-gray-300" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Cost comparison */}
          <CostComparison />

          {/* Scarcity pill */}
          <div className="flex justify-center mb-10">
            <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-300 text-amber-800 text-sm font-medium px-5 py-2.5 rounded-full shadow-sm">
              <span className="w-2 h-2 rounded-full bg-amber-500 shrink-0 animate-pulse"></span>
              Only 5 new client spots open per month — sign up this week and get a free 30-minute Financial Health Check ($150 value).
            </div>
          </div>

          {/* Billing toggle */}
          <div className="flex justify-center items-center gap-4 mb-8">
            <span className={`text-sm font-semibold ${!isAnnual ? 'text-gray-900' : 'text-gray-400'}`}>Monthly</span>
            <button
              onClick={() => setIsAnnual((v) => !v)}
              className={`relative w-14 h-7 rounded-full transition-colors duration-300 focus:outline-none ${
                isAnnual ? 'bg-blue-700' : 'bg-gray-300'
              }`}
              aria-label="Toggle annual billing"
            >
              <span
                className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full shadow transition-transform duration-300 ${
                  isAnnual ? 'translate-x-7' : 'translate-x-0'
                }`}
              />
            </button>
            <span className={`text-sm font-semibold ${isAnnual ? 'text-gray-900' : 'text-gray-400'}`}>
              Annual
              <span className="ml-2 inline-block bg-teal-100 text-teal-700 text-xs font-bold px-2 py-0.5 rounded-full">
                Save up to 11%
              </span>
            </span>
          </div>

          {/* Pricing cards */}
          <div className="grid lg:grid-cols-3 gap-6 items-start">
            {tiers.map((tier) => {
              const isSelected = selectedTier === tier.key;
              return (
                <div
                  key={tier.key}
                  onClick={() => setSelectedTier(tier.key)}
                  className={`relative rounded-2xl p-6 cursor-pointer transition-all duration-300 ${
                    tier.highlighted
                      ? 'bg-blue-700 text-white shadow-2xl scale-105'
                      : isSelected
                      ? 'bg-white border-2 border-blue-500 shadow-xl'
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
                      <span className={`text-4xl font-bold transition-all duration-300 ${tier.highlighted ? 'text-white' : 'text-gray-900'}`}>
                        {tier.price}
                      </span>
                      <span className={tier.highlighted ? 'text-blue-200' : 'text-gray-500'}>
                        {tier.period}
                      </span>
                    </div>
                    {isAnnual && (
                      <div className="flex items-center gap-2 mt-1.5">
                        <span className={`text-xs ${tier.highlighted ? 'text-blue-200' : 'text-gray-500'}`}>
                          billed annually
                        </span>
                        <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                          tier.highlighted ? 'bg-green-500/30 text-green-200' : 'bg-green-100 text-green-700'
                        }`}>
                          Save {annualSavings[tier.key]}/yr
                        </span>
                      </div>
                    )}
                  </div>

                  <ul className="space-y-3 mb-6">
                    {tier.features.map((feature, i) => {
                      const isDeductionsAudit = tier.key === 'growth' && feature === '90-day hidden deductions audit';
                      return (
                        <li key={i} className="flex items-start gap-3">
                          <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 ${
                            tier.highlighted ? 'bg-blue-600' : 'bg-teal-100'
                          }`}>
                            <Check className={`w-3 h-3 ${tier.highlighted ? 'text-white' : 'text-teal-600'}`} />
                          </div>
                          <span className={`text-sm ${tier.highlighted ? 'text-blue-50' : 'text-gray-700'}`}>
                            {feature}
                            {isDeductionsAudit && (
                              <span className="text-green-400 font-medium"> (finds avg $2,000–$8,000 in missed write-offs)</span>
                            )}
                          </span>
                        </li>
                      );
                    })}
                  </ul>

                  {/* Best For */}
                  <div className={`mb-4 px-3 py-3 rounded-lg ${
                    tier.highlighted ? 'bg-white/10' : 'bg-gray-50 border border-gray-200'
                  }`}>
                    <p className={`text-xs font-semibold uppercase tracking-widest mb-1 ${
                      tier.highlighted ? 'text-blue-200' : 'text-gray-400'
                    }`}>Best For</p>
                    <p className={`text-sm leading-snug ${
                      tier.highlighted ? 'text-white' : 'text-gray-700'
                    }`}>{tier.bestFor}</p>
                  </div>

                  {/* Plan Limits */}
                  <div className="mb-5">
                    <p className={`text-xs font-semibold uppercase tracking-widest mb-2 ${
                      tier.highlighted ? 'text-blue-200' : 'text-gray-400'
                    }`}>Plan Limits</p>
                    <ul className="space-y-1.5">
                      {tier.planLimits.map((limit, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                            tier.highlighted ? 'bg-blue-300' : 'bg-gray-400'
                          }`} />
                          <span className={`text-sm ${
                            tier.highlighted ? 'text-blue-100' : 'text-gray-500'
                          }`}>{limit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className={`flex items-center gap-2 mb-4 px-3 py-2 rounded-lg ${
                    tier.highlighted ? 'bg-green-500/20' : 'bg-green-50 border border-green-200'
                  }`}>
                    <ShieldCheck className={`w-4 h-4 flex-shrink-0 ${tier.highlighted ? 'text-green-300' : 'text-green-600'}`} />
                    <span className={`text-xs font-semibold ${tier.highlighted ? 'text-green-200' : 'text-green-700'}`}>
                      Accurate Books by the 5th or it's free
                    </span>
                  </div>

                  <button
                    onClick={(e) => { e.stopPropagation(); scrollToContact(); }}
                    className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                      tier.highlighted
                        ? 'bg-white text-blue-700 hover:bg-blue-50 shadow-lg'
                        : 'bg-blue-700 text-white hover:bg-blue-800 shadow-md hover:shadow-lg'
                    }`}
                  >
                    {tier.highlighted ? 'Get Started' : tier.cta}
                  </button>
                </div>
              );
            })}
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-3">All plans include:</p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-700">
              {['No setup fees', 'Cancel anytime', 'Secure data handling', '100% satisfaction guarantee'].map((item, i) => (
                <span key={i} className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-teal-600" />
                  {item}
                </span>
              ))}
            </div>
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
                    'Multi-entity bookkeeping',
                    'Industry-specific reporting',
                    'Transaction-based pricing that scales with your volume',
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-700">
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
            {faqs.map((faq, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-6">
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
