import React, { useState } from 'react';
import { ArrowRight, CheckCircle, Phone } from 'lucide-react';

const fmt = (n: number) => '$' + Math.round(n).toLocaleString('en-US');

const Hero: React.FC = () => {
  const [salary, setSalary] = useState(50000);
  const [overhead, setOverhead] = useState(25);

  const pct = overhead / 100;
  const payrollTax = salary * 0.0765;
  const benefits   = salary * pct * 0.55;
  const pto        = salary * 0.038;
  const fixed      = 2500 + 900 + 1200;
  const total      = salary + payrollTax + benefits + pto + fixed;
  const gpcAnnual  = 7164;
  const savings    = total - gpcAnnual;

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
                <strong>Professional bookkeeping services</strong> delivered by a <strong>QuickBooks Certified ProAdvisor</strong> — supporting both <strong>QuickBooks Online and QuickBooks Desktop</strong>. Proudly serving small business owners, contractors, medical &amp; dental practices, solopreneurs, e-commerce sellers, and professional service firms across Phoenix, Scottsdale, Peoria &amp; beyond.
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
                <span>Get Free Consultation</span>
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
                href="tel:2485952511"
                className="inline-flex items-center gap-2.5 w-fit bg-white border border-gray-200 rounded-full px-5 py-2.5 shadow-sm hover:shadow-md hover:border-blue-300 transition-all duration-300 group"
              >
                <span className="flex items-center justify-center w-8 h-8 bg-blue-700 rounded-full group-hover:bg-blue-800 transition-colors">
                  <Phone className="h-4 w-4 text-white" />
                </span>
                <div className="flex flex-col">
                  <span className="text-xs text-gray-400 leading-none">Call us today</span>
                  <span className="text-gray-800 font-semibold text-sm leading-snug">(248) 595-2511</span>
                </div>
              </a>
              <div className="flex items-center gap-3">
                <img src="/proadvisorgold.png" alt="QuickBooks ProAdvisor Gold" className="h-24 w-auto object-contain" />
                <img src="/quickboo.png" alt="QuickBooks Certified" className="h-24 w-auto object-contain" />
                <img src="/quickbooks2.png" alt="QuickBooks" className="h-24 w-auto object-contain" />
                <img src="/quickbookspayroll.png" alt="QuickBooks Payroll" className="h-24 w-auto object-contain" />
              </div>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 space-y-5">
              <div>
                <p className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-1">
                  True cost of hiring in-house
                </p>
                <p className="text-xs text-gray-500">Drag sliders to model your market</p>
              </div>

              {/* Salary slider */}
              <div>
                <div className="flex justify-between items-center mb-1.5">
                  <span className="text-xs font-medium text-gray-700">Bookkeeper salary</span>
                  <span className="text-xs font-semibold text-gray-900">{fmt(salary)}/yr</span>
                </div>
                <input
                  type="range" min={35000} max={75000} step={1000} value={salary}
                  onChange={e => setSalary(Number(e.target.value))}
                  className="w-full h-1 bg-gray-200 rounded appearance-none cursor-pointer accent-gray-800"
                />
                <div className="flex justify-between text-xs text-gray-400 mt-0.5">
                  <span>$35k</span><span>$75k</span>
                </div>
              </div>

              {/* Overhead slider */}
              <div>
                <div className="flex justify-between items-center mb-1.5">
                  <span className="text-xs font-medium text-gray-700">Benefits overhead</span>
                  <span className="text-xs font-semibold text-gray-900">{overhead}%</span>
                </div>
                <input
                  type="range" min={18} max={35} step={1} value={overhead}
                  onChange={e => setOverhead(Number(e.target.value))}
                  className="w-full h-1 bg-gray-200 rounded appearance-none cursor-pointer accent-gray-800"
                />
                <div className="flex justify-between text-xs text-gray-400 mt-0.5">
                  <span>18%</span><span>35%</span>
                </div>
              </div>

              {/* Cost rows */}
              <div className="border border-gray-100 rounded-lg overflow-hidden text-xs">
                {[
                  { label: 'Base salary',             val: salary },
                  { label: 'Payroll taxes (FICA)',     val: payrollTax },
                  { label: 'Benefits',                 val: benefits },
                  { label: 'PTO & sick leave',         val: pto },
                  { label: 'Recruiting / software / training', val: fixed },
                ].map((row, i) => (
                  <div key={i} className="flex justify-between px-3 py-2 border-b border-gray-100 last:border-0">
                    <span className="text-gray-600">{row.label}</span>
                    <span className="text-gray-800 tabular-nums font-medium">{fmt(row.val)}</span>
                  </div>
                ))}
                <div className="flex justify-between px-3 py-2 bg-gray-50 font-semibold border-t border-gray-200">
                  <span className="text-gray-900">Total in-house cost</span>
                  <span className="text-gray-900 tabular-nums">{fmt(total)}</span>
                </div>
                <div className="flex justify-between px-3 py-2" style={{ color: '#4f46e5' }}>
                  <span className="font-medium">GPC full service</span>
                  <span className="tabular-nums font-medium">{fmt(gpcAnnual)}</span>
                </div>
                <div className="flex justify-between px-3 py-2.5 bg-green-50 border-t border-green-100 rounded-b-lg">
                  <span className="font-semibold text-green-700">Your annual savings</span>
                  <span className="font-bold text-green-700 tabular-nums">{fmt(savings)}</span>
                </div>
              </div>

              <p className="text-xs text-gray-400 italic">Data: ZipRecruiter, BLS, QuickBooks 2025.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;