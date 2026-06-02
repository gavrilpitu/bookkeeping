import React from 'react';
import { Calculator, TrendingUp, Clock, Settings, Building2 } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Calculator,
      title: "Bookkeeping & Accounting",
      description: "Complete monthly bookkeeping including transaction categorization, bank reconciliation, and financial statement preparation.",
      tagline: "So you always know exactly where your money went.",
      features: ["Daily transaction entry", "Bank reconciliation", "Financial statements", "Accounts payable/receivable", "Tax-ready books"]
    },
    {
      icon: Clock,
      title: "QuickBooks Cleanup & Catch-Up",
      description: "Behind on your books? We fix and organize everything fast so you can file taxes and make decisions with confidence.",
      tagline: "Stop filing taxes on messy books — we fix it fast.",
      features: ["Rebuild months or years of records", "Import statements with advanced tools", "Every transaction reviewed & corrected", "Tax-ready handoff for your CPA"]
    },
    {
      icon: Settings,
      title: "QuickBooks Setup",
      description: "Get your QuickBooks configured correctly from the start with a professional setup tailored to your business.",
      tagline: "Get set up right the first time so you never pay to fix it later.",
      features: ["Initial company file setup", "Chart of accounts customization", "Bank & credit card connections", "System optimization & training"]
    },
    {
      icon: TrendingUp,
      title: "Financial Reporting",
      description: "Detailed financial reports and analysis to help you make informed business decisions and track performance.",
      tagline: "Make confident decisions with real numbers, not gut feelings.",
      features: ["Monthly P&L reports", "Cash flow analysis", "Budget vs actual", "Custom reporting"]
    },
  ];

  return (
    <section id="services" className="pb-12 lg:pb-16 pt-4 lg:pt-6 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
            Every Service You Need. Zero Surprises.
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Clean books, tax-ready financials, and QuickBooks done right — delivered every month without you lifting a finger.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl hover:border-blue-200 transition-all duration-300 group"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-3 rounded-lg group-hover:bg-blue-200 transition-colors">
                    <IconComponent className="h-6 w-6 text-blue-700" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-3 leading-relaxed">
                  {service.description}
                </p>
                <p className="text-sm italic text-blue-700 mb-5 leading-snug">
                  {service.tagline}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 bg-teal-600 rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-8 mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-800 text-sm font-medium px-4 py-2 rounded-full mb-6">
            <Building2 className="w-4 h-4" />
            Industries We Serve
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-3 max-w-5xl mx-auto">
            {[
              "Construction & Contracting",
              "Real Estate",
              "Healthcare & Medical",
              "Restaurants & Food Service",
              "Retail & E-Commerce",
              "Professional Services",
              "Law Firms",
              "Dental & Veterinary Practices",
              "Auto Repair & Dealerships",
              "Property Management",
              "Landscaping & Tree Services",
              "Cleaning Services",
              "Trucking & Logistics",
              "Home Services & Plumbing",
              "Non-Profits",
              "Salons & Spas",
              "Gyms & Fitness Studios",
              "Childcare & Daycares",
              "Insurance Agencies",
              "Marketing & Creative Agencies",
            ].map((industry, i) => (
              <div
                key={i}
                className="bg-gray-50 border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-700 font-medium text-center hover:bg-blue-50 hover:border-blue-200 hover:text-blue-800 transition-colors duration-200"
              >
                {industry}
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-4">
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-blue-700 text-white px-8 py-4 rounded-lg hover:bg-blue-800 transition-colors font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
          >
            Discuss Your Needs
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;