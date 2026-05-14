import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Testimonial {
  name: string;
  title: string;
  quote: string;
  rating: number;
  initials: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Brian Luca",
    title: "Owner, Desert Sanctuary Assisted Living LLC",
    quote: "Gavril is highly skilled in bookkeeping. His QuickBooks expertise made a huge difference for me. I've recommended him to family who love to work with him as well.",
    rating: 5,
    initials: "BL",
  },
  {
    name: "Benjamin Illioi",
    title: "Owner, Absolute Iron Doors",
    quote: "Gavril is very sharp with numbers and genuinely cares about doing things correctly. I'd highly recommend him to anyone needing bookkeeping help.",
    rating: 5,
    initials: "BI",
  },
];

const Testimonials: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  return (
    <section id="testimonials" className="py-16 lg:py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Business owners trust us to keep their finances accurate and stress-free.
          </p>
        </div>

        {/* Desktop: 2 cards side by side */}
        <div className="hidden md:grid grid-cols-2 gap-6 mb-8">
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} testimonial={t} featured={i === 0} />
          ))}
        </div>

        {/* Mobile: single card with navigation */}
        <div className="md:hidden mb-8">
          <TestimonialCard testimonial={testimonials[current]} featured />
        </div>

        {/* Mobile dot navigation */}
        <div className="md:hidden flex items-center justify-center gap-4">
          <button
            onClick={prev}
            aria-label="Previous testimonial"
            className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:border-blue-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-200 ${
                  i === current ? 'bg-blue-700 w-5' : 'w-2 bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
          <button
            onClick={next}
            aria-label="Next testimonial"
            className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:border-blue-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

const TestimonialCard: React.FC<{ testimonial: Testimonial; featured?: boolean }> = ({
  testimonial,
  featured = false,
}) => (
  <div
    className={`relative rounded-2xl p-8 flex flex-col transition-all duration-300 ${
      featured
        ? 'bg-blue-700 text-white shadow-2xl shadow-blue-200'
        : 'bg-white border border-gray-200 text-gray-900 hover:shadow-lg hover:border-blue-100'
    }`}
  >
    <Quote
      className={`w-8 h-8 mb-4 flex-shrink-0 ${featured ? 'text-blue-300' : 'text-blue-200'}`}
    />
    <p className={`text-base leading-relaxed mb-8 flex-1 ${featured ? 'text-blue-50' : 'text-gray-600'}`}>
      "{testimonial.quote}"
    </p>
    <div className="flex items-center gap-3 mt-auto">
      <div
        className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm flex-shrink-0 ${
          featured ? 'bg-blue-500 text-white' : 'bg-blue-100 text-blue-700'
        }`}
      >
        {testimonial.initials}
      </div>
      <div>
        <p className={`font-semibold text-sm ${featured ? 'text-white' : 'text-gray-900'}`}>
          {testimonial.name}
        </p>
        <p className={`text-xs mt-0.5 ${featured ? 'text-blue-200' : 'text-gray-500'}`}>
          {testimonial.title}
        </p>
      </div>
      <div className="ml-auto flex gap-0.5">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star
            key={i}
            className={`w-3.5 h-3.5 fill-current ${featured ? 'text-yellow-300' : 'text-yellow-400'}`}
          />
        ))}
      </div>
    </div>
  </div>
);

export default Testimonials;
