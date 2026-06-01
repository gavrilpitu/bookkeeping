import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Testimonial {
  name: string;
  title?: string;
  quote: string;
  rating: number;
  initials: string;
  avatarColor: string;
}

const testimonials: Testimonial[] = [
  {
    name: "RiverglenCare LLC",
    quote: "Takes care of all my accounting needs and really knows how to stay on top of things!",
    rating: 5,
    initials: "RC",
    avatarColor: "bg-slate-600",
  },
  {
    name: "JTT",
    quote: "Highly recommend this team. They're professional, reliable, and great to work with. Couldn't be happier with their service.",
    rating: 5,
    initials: "JT",
    avatarColor: "bg-rose-600",
  },
  {
    name: "Christian Peretz",
    quote: "GPC Bookkeeping is a great business to work with. Highly recommend their services to anyone looking for trustworthy and efficient bookkeeping support.",
    rating: 5,
    initials: "CP",
    avatarColor: "bg-teal-600",
  },
  {
    name: "Lawrence Baraiac",
    quote: "Gabe has been amazing to work with!",
    rating: 5,
    initials: "LB",
    avatarColor: "bg-emerald-600",
  },
  {
    name: "Anthony Zaha",
    quote: "Gavril and the team at GPC Bookkeeping made the entire process incredibly easy and stress-free. Communication was clear, everything was handled professionally, and they stayed on top of every detail from start to finish. It's hard to find someone dependable and knowledgeable when it comes to finances, but GPC definitely delivers. I'd confidently recommend them to anyone looking for trustworthy bookkeeping services.",
    rating: 5,
    initials: "AZ",
    avatarColor: "bg-blue-600",
  },
  {
    name: "Sam Pitu",
    quote: "Great experience with GPC Bookkeeping. Gavril is professional, helpful, and easy to work with. Everything was handled smoothly and on time. Highly recommend.",
    rating: 5,
    initials: "SP",
    avatarColor: "bg-orange-600",
  },
  {
    name: "George Barbu",
    quote: "Working with Gavril has been a huge help. He's organized and very prompt with communication. If you're looking for someone trustworthy and detail-oriented to help manage your finances, this is the business to go with.",
    rating: 5,
    initials: "GB",
    avatarColor: "bg-cyan-700",
  },
  {
    name: "Dennis Cleminte",
    quote: "I'm not much of an accountant, but GPC helped me with all of my accounting needs, especially during the stressful month of April. They made the whole process simple, stress-free, and easy to understand. Highly recommend them to anyone looking for a reliable and accounting professional.",
    rating: 5,
    initials: "DC",
    avatarColor: "bg-violet-600",
  },
  {
    name: "Andy",
    title: "Local Guide",
    quote: "Gabe has been wonderfully patient in explaining and walking me through all the options. He is the expert in Quickbooks and if you want to externalize bookkeeping, he is your guy. 10/10 would recommend!",
    rating: 5,
    initials: "A",
    avatarColor: "bg-amber-600",
  },
  {
    name: "Tobias Termure",
    quote: "I've used GPC bookkeeping to help me resolve some issues my last bookkeeper over looked. Would highly recommend giving him a try. Helped me get my books back in order.",
    rating: 5,
    initials: "TT",
    avatarColor: "bg-indigo-700",
  },
  {
    name: "James Fazecas",
    quote: "Love working with GPC, Gavril is top notch and cares for my books as if they are his own. Always quick to communicate anything that comes up which I really appreciate.",
    rating: 5,
    initials: "JF",
    avatarColor: "bg-green-700",
  },
  {
    name: "Michael Jakab",
    quote: "Gavril is very detail-oriented and knows QuickBooks extremely well. Everything he touches is clean and accurate! Highly recommend",
    rating: 5,
    initials: "MJ",
    avatarColor: "bg-red-700",
  },
  {
    name: "Brian Luca",
    title: "Owner, Desert Sanctuary Assisted Living LLC",
    quote: "Gavril is highly skilled in bookkeeping. His QuickBooks expertise made a huge difference for me. I've recommended him to family who love to work with him as well.",
    rating: 5,
    initials: "BL",
    avatarColor: "bg-sky-700",
  },
  {
    name: "Benjamin Illioi",
    title: "Owner, Absolute Iron Doors",
    quote: "Gavril is very sharp with numbers and genuinely cares about doing things correctly. I'd highly recommend him to anyone needing bookkeeping help.",
    rating: 5,
    initials: "BI",
    avatarColor: "bg-pink-700",
  },
];

const TestimonialCard: React.FC<{ testimonial: Testimonial; featured?: boolean }> = ({
  testimonial,
  featured = false,
}) => (
  <div
    className={`relative rounded-2xl p-6 flex flex-col h-full transition-all duration-300 ${
      featured
        ? 'bg-blue-700 text-white shadow-2xl shadow-blue-200'
        : 'bg-white border border-gray-200 text-gray-900 hover:shadow-lg hover:border-blue-100'
    }`}
  >
    <Quote
      className={`w-7 h-7 mb-3 flex-shrink-0 ${featured ? 'text-blue-300' : 'text-blue-200'}`}
    />
    <p className={`text-sm leading-relaxed mb-6 flex-1 ${featured ? 'text-blue-50' : 'text-gray-600'}`}>
      "{testimonial.quote}"
    </p>
    <div className="flex items-center gap-3 mt-auto">
      <div
        className={`w-9 h-9 rounded-full flex items-center justify-center font-semibold text-xs flex-shrink-0 text-white ${testimonial.avatarColor}`}
      >
        {testimonial.initials}
      </div>
      <div className="min-w-0">
        <p className={`font-semibold text-sm truncate ${featured ? 'text-white' : 'text-gray-900'}`}>
          {testimonial.name}
        </p>
        {testimonial.title && (
          <p className={`text-xs mt-0.5 truncate ${featured ? 'text-blue-200' : 'text-gray-500'}`}>
            {testimonial.title}
          </p>
        )}
      </div>
      <div className="ml-auto flex gap-0.5 flex-shrink-0">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star
            key={i}
            className={`w-3 h-3 fill-current ${featured ? 'text-yellow-300' : 'text-yellow-400'}`}
          />
        ))}
      </div>
    </div>
  </div>
);

const Testimonials: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  return (
    <section id="testimonials" className="py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 bg-yellow-50 border border-yellow-200 rounded-full px-4 py-1.5 mb-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-current text-yellow-400" />
            ))}
            <span className="text-sm font-semibold text-yellow-700 ml-1">5.0 on Google</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {testimonials.length} five-star reviews from business owners who trust us with their books.
          </p>
        </div>

        {/* Desktop: masonry-style grid */}
        <div className="hidden md:grid grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} testimonial={t} featured={i === 4} />
          ))}
        </div>

        {/* Mobile: carousel */}
        <div className="md:hidden">
          <div className="mb-5">
            <TestimonialCard testimonial={testimonials[current]} featured={current === 4} />
          </div>
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:border-blue-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-1.5 flex-wrap justify-center max-w-[200px]">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-200 ${
                    i === current ? 'bg-blue-700 w-4' : 'w-1.5 bg-gray-300 hover:bg-gray-400'
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
          <p className="text-center text-sm text-gray-400 mt-3">
            {current + 1} of {testimonials.length}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
