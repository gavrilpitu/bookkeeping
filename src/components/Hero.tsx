import React from 'react';
import { ArrowRight, CheckCircle, Phone, Star } from 'lucide-react';

const Hero: React.FC = () => {

  return (
    <section id="home" className="pt-16 bg-gradient-to-br from-blue-50 via-white to-teal-50 flex items-center min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-12">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-3">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
                Guaranteed
                <span className="text-blue-700 block">Clean Books</span>
                Every Month — Or You Don't Pay
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Expert bookkeeping delivered by a <strong>QuickBooks Certified ProAdvisor Gold</strong> — so your books are clean, your taxes are ready, and you never lose sleep over your finances again. Serving small business owners, contractors, medical &amp; dental practices, and professional service firms across Phoenix, Scottsdale, Peoria &amp; beyond.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-3">
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-teal-600 flex-shrink-0" />
                <span className="text-gray-700">Serving Locally in Arizona</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-teal-600 flex-shrink-0" />
                <span className="text-gray-700">QuickBooks Certified</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-teal-600 flex-shrink-0" />
                <span className="text-gray-700">Monthly Reports</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-teal-600 flex-shrink-0" />
                <span className="text-gray-700">Tax-Ready Books</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://calendly.com/gavril-gpcbookkeeping/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-700 text-white px-8 py-4 rounded-lg hover:bg-blue-800 transition-all duration-300 font-semibold text-lg flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <span>Book My Free Financial Health Check</span>
                <ArrowRight className="h-5 w-5" />
              </a>
              <button
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:border-blue-700 hover:text-blue-700 transition-colors font-semibold text-lg"
              >
                View Services
              </button>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="tel:6028882841"
                className="inline-flex items-center gap-2.5 w-fit bg-white border border-gray-200 rounded-full px-5 py-2.5 shadow-sm hover:shadow-md hover:border-blue-300 transition-all duration-300 group"
              >
                <span className="flex items-center justify-center w-8 h-8 bg-blue-700 rounded-full group-hover:bg-blue-800 transition-colors">
                  <Phone className="h-4 w-4 text-white" />
                </span>
                <div className="flex flex-col">
                  <span className="text-xs text-gray-400 leading-none">Call us today</span>
                  <span className="text-gray-800 font-semibold text-sm leading-snug">(602) 888-2841</span>
                </div>
              </a>
            </div>
          </div>

          <div className="relative hidden lg:flex flex-col gap-6">
            {/* Badge row */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
              <p className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-4 text-center">Certified & Verified</p>
              <div className="flex items-center justify-center gap-3">
                <img src="/proadvisorgold.png" alt="QuickBooks ProAdvisor Gold" className="h-20 w-auto object-contain" />
                <img src="/quickboo.png" alt="QuickBooks Certified" className="h-20 w-auto object-contain" />
                <img src="/quickbooks2.png" alt="QuickBooks" className="h-20 w-auto object-contain" />
                <img src="/quickbookspayroll.png" alt="QuickBooks Payroll" className="h-20 w-auto object-contain" />
              </div>
            </div>

            {/* Stats row */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
              <div className="grid grid-cols-3 divide-x divide-gray-100">
                <div className="text-center px-4">
                  <p className="font-bold text-gray-900 text-sm leading-snug">100% On-Time</p>
                  <p className="text-xs text-gray-500 mt-0.5">Delivery</p>
                </div>
                <div className="text-center px-4">
                  <p className="font-bold text-gray-900 text-sm leading-snug">ProAdvisor Gold</p>
                  <p className="text-xs text-gray-500 mt-0.5">QuickBooks Certified</p>
                </div>
                <div className="text-center px-4">
                  <p className="font-bold text-gray-900 text-sm leading-snug">Proudly Serving Arizona</p>
                  <p className="text-xs text-gray-500 mt-0.5">Remote-Friendly</p>
                </div>
              </div>
            </div>

            {/* Testimonial card */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
              <div className="flex gap-0.5 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-gray-700 text-sm leading-relaxed mb-4">
                "Gavril is very sharp with numbers and genuinely cares about doing things correctly. I'd highly recommend him."
              </p>
              <div>
                <p className="font-semibold text-gray-900 text-sm">Benjamin Illioi</p>
                <p className="text-xs text-gray-500">Owner, Absolute Iron Doors</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;