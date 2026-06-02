import React from 'react';
import { ShieldCheck } from 'lucide-react';

const GuaranteeBanner: React.FC = () => {
  return (
    <section className="bg-blue-700 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <div className="shrink-0">
            <ShieldCheck className="h-14 w-14 text-white opacity-95" strokeWidth={1.5} />
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white leading-tight mb-3">
              Accurate Books by the 7th — Or That Month Is Free
            </h2>
            <p className="text-blue-100 text-base sm:text-lg leading-relaxed max-w-2xl">
              If your books aren't delivered by the 7th of the month, or if we make an error we can't correct within 72 hours, that month is completely free. No questions asked. We stake our revenue on your accuracy every single month.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeBanner;
