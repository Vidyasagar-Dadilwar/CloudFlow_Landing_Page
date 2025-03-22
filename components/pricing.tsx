'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';

const plans = [
  {
    name: 'Basic',
    description: 'Perfect for small teams getting started',
    monthlyPrice: 29,
    yearlyPrice: 290,
    features: [
      'Up to 5 team members',
      'Basic workflow automation',
      'Standard analytics',
      'Email support',
      '5GB storage',
      'API access',
    ],
  },
  {
    name: 'Pro',
    description: 'Ideal for growing businesses',
    monthlyPrice: 79,
    yearlyPrice: 790,
    features: [
      'Up to 20 team members',
      'Advanced automation',
      'Custom analytics',
      'Priority support',
      '20GB storage',
      'Advanced API access',
      'Custom integrations',
      'Team training',
    ],
    popular: true,
  },
  {
    name: 'Enterprise',
    description: 'For large organizations with custom needs',
    monthlyPrice: 199,
    yearlyPrice: 1990,
    features: [
      'Unlimited team members',
      'Enterprise automation',
      'Advanced analytics & reporting',
      'Dedicated support',
      'Unlimited storage',
      'Custom development',
      'SLA guarantee',
      'Custom training',
      'Compliance support',
    ],
  },
];

export function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Choose the perfect plan for your business
          </p>
        </div>

        <div className="mt-8 flex justify-center items-center gap-3">
          <span className={`text-sm ${!isYearly ? 'font-semibold text-gray-900' : 'text-gray-500'}`}>
            Monthly
          </span>
          <Switch
            checked={isYearly}
            onCheckedChange={setIsYearly}
            className="data-[state=checked]:bg-primary"
          />
          <span className={`text-sm ${isYearly ? 'font-semibold text-gray-900' : 'text-gray-500'}`}>
            Yearly
            <span className="ml-1.5 inline-block px-2 py-0.5 text-xs font-semibold text-primary bg-primary/10 rounded-full">
              Save 20%
            </span>
          </span>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-200 ${
                plan.popular ? 'md:scale-105' : ''
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-sm font-semibold text-white">
                  Most Popular
                </span>
              )}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900">{plan.name}</h3>
                <p className="mt-2 text-gray-500">{plan.description}</p>
                <div className="mt-6">
                  <span className="text-4xl font-bold text-gray-900">
                    ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                  </span>
                  <span className="text-gray-500">/{isYearly ? 'year' : 'month'}</span>
                </div>
              </div>

              <Button className="w-full mb-8">Get started</Button>

              <ul className="space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <Check className="h-5 w-5 text-primary shrink-0" />
                    <span className="ml-3 text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}