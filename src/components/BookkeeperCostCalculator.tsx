import React, { useState } from 'react';

const fmt = (n: number) => '$' + Math.round(n).toLocaleString('en-US');

const BookkeeperCostCalculator: React.FC = () => {
  const [salary, setSalary] = useState(50000);
  const [overhead, setOverhead] = useState(25);

  const pct = overhead / 100;

  const baseSalary = salary;
  const payrollTax = salary * 0.0765;
  const benefits   = salary * pct * 0.55;
  const pto        = salary * 0.038;
  const recruiting = 2500;
  const training   = 1200;

  const total = baseSalary + payrollTax + benefits + pto + recruiting + training;
  const gpcAnnual  = 7164;
  const gpcMonthly = 597;
  const savingsAnnual  = total - gpcAnnual;
  const savingsMonthly = Math.round(total / 12) - gpcMonthly;

  return (
    <section className="py-14 bg-white border-t border-gray-200">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section label */}
        <p className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-3">
          Why hire a bookkeeper when you can own one?
        </p>

        {/* Subheading */}
        <p className="text-gray-700 text-base leading-relaxed mb-8">
          Most owners think in-house is the safe choice. Below is what that choice actually costs —
          before they take a sick day, make a mistake, or quit on you.
        </p>

        {/* Sliders */}
        <div className="space-y-5 mb-8">
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-700 w-44 shrink-0">Bookkeeper salary</span>
            <input
              type="range"
              min={35000}
              max={75000}
              step={1000}
              value={salary}
              onChange={e => setSalary(Number(e.target.value))}
              className="flex-1 h-px bg-gray-300 appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-gray-700 [&::-webkit-slider-thumb]:cursor-pointer [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-gray-700 [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:cursor-pointer"
            />
            <span className="text-sm text-gray-900 font-medium w-28 text-right">{fmt(salary)}/yr</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-700 w-44 shrink-0">Benefits overhead %</span>
            <input
              type="range"
              min={0}
              max={35}
              step={1}
              value={overhead}
              onChange={e => setOverhead(Number(e.target.value))}
              className="flex-1 h-px bg-gray-300 appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-gray-700 [&::-webkit-slider-thumb]:cursor-pointer [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-gray-700 [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:cursor-pointer"
            />
            <span className="text-sm text-gray-900 font-medium w-28 text-right">{overhead}%</span>
          </div>
        </div>

        {/* Table */}
        <div className="border border-gray-200 rounded">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="text-left py-3 px-4 text-xs font-semibold tracking-widest text-gray-500 uppercase border-b border-gray-200 w-1/2">Cost Item</th>
                <th className="text-right py-3 px-4 text-xs font-semibold tracking-widest text-gray-500 uppercase border-b border-gray-200">Annual</th>
                <th className="text-right py-3 px-4 text-xs font-semibold tracking-widest text-gray-500 uppercase border-b border-gray-200">Monthly</th>
              </tr>
            </thead>
            <tbody>
              {/* Base salary */}
              <tr className="border-b border-gray-100">
                <td className="py-3 px-4 text-gray-800">
                  Base salary
                  <div className="text-xs text-gray-400 mt-0.5">Avg US bookkeeper, 2025</div>
                </td>
                <td className="py-3 px-4 text-right text-gray-800 tabular-nums">{fmt(baseSalary)}</td>
                <td className="py-3 px-4 text-right text-gray-800 tabular-nums">{fmt(baseSalary / 12)}</td>
              </tr>

              <tr className="border-b border-gray-100">
                <td className="py-3 px-4 text-gray-800">Payroll taxes (FICA ~7.65%)</td>
                <td className="py-3 px-4 text-right text-gray-800 tabular-nums">{fmt(payrollTax)}</td>
                <td className="py-3 px-4 text-right text-gray-800 tabular-nums">{fmt(payrollTax / 12)}</td>
              </tr>

              <tr className="border-b border-gray-100">
                <td className="py-3 px-4 text-gray-800">Health / dental / vision benefits</td>
                <td className="py-3 px-4 text-right text-gray-800 tabular-nums">{fmt(benefits)}</td>
                <td className="py-3 px-4 text-right text-gray-800 tabular-nums">{fmt(benefits / 12)}</td>
              </tr>

              <tr className="border-b border-gray-100">
                <td className="py-3 px-4 text-gray-800">PTO &amp; sick leave (~3.8%)</td>
                <td className="py-3 px-4 text-right text-gray-800 tabular-nums">{fmt(pto)}</td>
                <td className="py-3 px-4 text-right text-gray-800 tabular-nums">{fmt(pto / 12)}</td>
              </tr>

              <tr className="border-b border-gray-100">
                <td className="py-3 px-4 text-gray-800">Recruiting &amp; onboarding (amortized)</td>
                <td className="py-3 px-4 text-right text-gray-800 tabular-nums">{fmt(recruiting)}</td>
                <td className="py-3 px-4 text-right text-gray-800 tabular-nums">$208</td>
              </tr>

              <tr className="border-b border-gray-100">
                <td className="py-3 px-4 text-gray-800">Training, errors &amp; downtime risk</td>
                <td className="py-3 px-4 text-right text-gray-800 tabular-nums">{fmt(training)}</td>
                <td className="py-3 px-4 text-right text-gray-800 tabular-nums">$100</td>
              </tr>

              {/* Total */}
              <tr className="bg-gray-50 border-b border-gray-200">
                <td className="py-3 px-4 font-semibold text-gray-900">Total true cost of in-house bookkeeper</td>
                <td className="py-3 px-4 text-right font-semibold text-gray-900 tabular-nums">{fmt(total)}</td>
                <td className="py-3 px-4 text-right font-semibold text-gray-900 tabular-nums">{fmt(total / 12)}</td>
              </tr>

              {/* GPC row */}
              <tr className="border-b border-gray-100">
                <td className="py-3 px-4 font-medium text-indigo-600">GPC Bookkeeping — full service</td>
                <td className="py-3 px-4 text-right font-medium text-indigo-600 tabular-nums">{fmt(gpcAnnual)}</td>
                <td className="py-3 px-4 text-right font-medium text-indigo-600 tabular-nums">{fmt(gpcMonthly)}</td>
              </tr>

              {/* Savings row */}
              <tr>
                <td className="py-3 px-4 font-semibold text-green-600">Your annual savings with GPC</td>
                <td className="py-3 px-4 text-right font-semibold text-green-600 tabular-nums">{fmt(savingsAnnual)}</td>
                <td className="py-3 px-4 text-right font-semibold text-green-600 tabular-nums">{fmt(savingsMonthly)}/mo</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Footer note */}
        <p className="mt-4 text-xs text-gray-400 italic">
          Drag sliders to match your local market. Data: ZipRecruiter, BLS, QuickBooks 2025.
        </p>
      </div>
    </section>
  );
};

export default BookkeeperCostCalculator;
