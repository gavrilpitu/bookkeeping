import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Users, Shield, Heart } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: BookOpen,
      title: "Faith-Driven Service",
      description: "Rooted in Christian principles, I believe in serving others with honesty, humility, and a heart for excellence in all I do."
    },
    {
      icon: Shield,
      title: "Integrity & Honesty",
      description: "Guided by biblical values, I am committed to complete transparency and truthfulness in every aspect of our work together."
    },
    {
      icon: Users,
      title: "Serving Others",
      description: "I view my work as a ministry — an opportunity to bless others and glorify God by using my gifts to help your business thrive."
    },
    {
      icon: Heart,
      title: "Genuine Care",
      description: "You are more than just a client. I am dedicated to building lasting relationships and treating every person with the respect and care they deserve."
    }
  ];

  const scrollToContact = () => {
    window.open('https://calendly.com/gavril-gpcbookkeeping/30min', '_blank');
  };

  return (
    <section id="about">
      <div className="py-12 lg:py-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div className="relative max-w-xs mx-auto">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/untitled-0649.jpg"
                  alt="Gavril Pitu - Founder of GPC Bookkeeping"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="mt-6">
                <p className="text-sm text-gray-500 mb-4">Intuit ProAdvisor Certified</p>
                <div className="flex flex-wrap items-center gap-4">
                  <img
                    src="/image.png"
                    alt="Intuit Bookkeeping Trained"
                    className="h-20 w-auto"
                  />
                  <img
                    src="/quickboo.png"
                    alt="Intuit ProAdvisor QuickBooks Level 1 Certified"
                    className="h-20 w-auto"
                  />
                  <img
                    src="/quickbooks2.png"
                    alt="Intuit ProAdvisor QuickBooks Level 2 Certified"
                    className="h-20 w-auto"
                  />
                  <img
                    src="/quickbookspayroll.png"
                    alt="Intuit ProAdvisor QuickBooks Payroll Certified"
                    className="h-20 w-auto"
                  />
                  <img
                    src="/proadvisorgold.png"
                    alt="Intuit ProAdvisor Gold"
                    className="h-20 w-auto"
                  />
                </div>
              </div>
            </div>

            <div>
              <span className="inline-block bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-sm font-medium mb-4">
                About Me
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Meet Gavril Pitu
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Hi, I'm Gavril - the founder of GPC Bookkeeping, proudly based in Phoenix, Arizona. I started
                  this business to give local Arizona business owners the same level of care, clarity,
                  and professionalism that big firms offer - without the corporate runaround.
                </p>
                <p>
                  My goal is simple: keep your books clean, your finances organized, your records tax-ready, and your
                  peace of mind intact.
                </p>
                <p>
                  I earned my degree in Accounting and Finance from the University of Michigan in 2021.
                  With years of experience helping Arizona businesses of all sizes manage their finances,
                  I understand the unique challenges that local business owners face. From startups
                  getting off the ground to established businesses across the Valley, I have
                  helped my clients gain clarity and confidence in their financial picture.
                </p>
                <p>
                  When I'm not crunching numbers, you can find me exploring the Arizona outdoors, spending
                  time with my wife and two kids (third on the way!), or diving into the latest accounting
                  technology to better serve my clients across the state.
                </p>
              </div>
              <div className="mt-6 flex flex-wrap gap-4">
                <button
                  onClick={scrollToContact}
                  className="inline-flex items-center gap-2 bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Get My Free QuickBooks Cleanup
                  <ArrowRight className="w-5 h-5" />
                </button>
                <Link
                  to="/pricing"
                  className="inline-flex items-center gap-2 border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-xl font-semibold hover:border-blue-700 hover:text-blue-700 transition-all duration-300"
                >
                  View Pricing
                </Link>
              </div>

            </div>
          </div>
        </div>
      </div>

      <div className="py-12 lg:py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
              My Values
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These core principles guide everything I do and ensure you receive
              exceptional service every time.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-blue-700" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {value.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-12 lg:py-14 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-6 md:p-10 border border-gray-200">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Why Choose GPC Bookkeeping?
                </h3>
                <div className="space-y-4 text-gray-600">
                  <p>
                    When you work with me, you're not just getting a bookkeeper — you're getting
                    a partner who genuinely cares about your business success.
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Direct communication with me, not a rotating team",
                      "Transparent pricing with no hidden fees",
                      "Modern technology for real-time financial visibility",
                      "Proactive advice to help your business grow",
                      "Flexible plans that scale with your needs"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-teal-600 rounded-full mt-2"></div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="text-center md:text-right">
                <div className="inline-block bg-blue-50 rounded-2xl p-8">
                  <p className="text-5xl font-bold text-blue-700 mb-2">100%</p>
                  <p className="text-gray-600">Satisfaction Guaranteed</p>
                  <p className="text-sm text-gray-500 mt-4">
                    If you're not happy with my work, <br />I'll make it right.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
