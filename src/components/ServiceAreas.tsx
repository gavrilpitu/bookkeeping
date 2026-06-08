import React from 'react';
import { MapPin } from 'lucide-react';

const ServiceAreas: React.FC = () => {
  return (
    <section id="service-areas" className="py-12 lg:py-14 bg-gradient-to-br from-amber-50 via-white to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <MapPin className="w-4 h-4" />
            Proudly Serving Arizona
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
            Your Local Arizona Bookkeeping Partner
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Based in Arizona and dedicated to helping local businesses thrive. We understand the unique needs of Arizona entrepreneurs and provide personalized service across the state.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="text-center md:text-left md:col-span-2">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Why Arizona Businesses Choose Us
              </h3>
              <p className="text-gray-600 mb-4">
                As a local Arizona business ourselves, we understand the state's business landscape and what it takes to succeed here. From small startups in Tempe to established firms in Scottsdale, we're committed to helping Arizona businesses grow.
              </p>
              <div className="flex flex-wrap gap-3">
<span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">Local Business Knowledge</span>
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">100% Remote Service</span>
              </div>
            </div>
            <div className="text-center">
              <div className="inline-block bg-gradient-to-br from-amber-500 to-orange-600 text-white rounded-2xl p-6">
                <p className="text-4xl font-bold mb-1">Statewide</p>
                <p className="text-sm opacity-90">Arizona Coverage</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreas;
