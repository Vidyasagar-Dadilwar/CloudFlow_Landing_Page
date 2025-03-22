'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const testimonials = [
  {
    content: "CloudFlow has transformed how we manage our projects. The automation features alone have saved us countless hours.",
    author: "Sarah Johnson",
    role: "CTO at TechCorp",
    image: "https://i.pravatar.cc/128?img=1",
    company: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=128&h=32&fit=crop"
  },
  {
    content: "The best investment we've made in our workflow. The analytics provide insights we never had before.",
    author: "Michael Chen",
    role: "Product Manager at InnovateCo",
    image: "https://i.pravatar.cc/128?img=2",
    company: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=128&h=32&fit=crop"
  },
  {
    content: "Exceptional platform with even better support. They've thought of everything a growing business needs.",
    author: "Emily Rodriguez",
    role: "Operations Director at ScaleUp",
    image: "https://i.pravatar.cc/128?img=3",
    company: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=128&h=32&fit=crop"
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Trusted by industry leaders
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            See what our customers have to say about their experience with CloudFlow
          </p>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-8 rounded-2xl"
            >
              <p className="text-lg text-gray-600 italic">"{testimonial.content}"</p>
              <div className="mt-6 flex items-center gap-4">
                <Image
                  src={testimonial.image}
                  alt={testimonial.author}
                  width={48}
                  height={48}
                  className="rounded-full"
                />
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.author}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <div className="mt-4">
                <Image
                  src={testimonial.company}
                  alt="Company logo"
                  width={128}
                  height={32}
                  className="opacity-50"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}