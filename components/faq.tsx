'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'What is CloudFlow?',
    answer: 'CloudFlow is a comprehensive SaaS platform designed to streamline your business operations, automate workflows, and boost productivity. It includes features for project management, automation, analytics, and team collaboration.',
  },
  {
    question: 'How does pricing work?',
    answer: 'We offer flexible pricing plans to suit businesses of all sizes. Our plans include Basic, Pro, and Enterprise tiers, with monthly or annual billing options. Custom pricing is available for large organizations.',
  },
  {
    question: 'Is there a free trial?',
    answer: 'Yes! We offer a 14-day free trial on all our plans. No credit card is required to start your trial, and you will have full access to all features during the trial period.',
  },
  {
    question: 'What kind of support do you offer?',
    answer: 'We provide 24/7 customer support through email and chat. Enterprise customers also get dedicated support managers and priority response times.',
  },
  {
    question: 'Can I cancel my subscription?',
    answer: 'Yes, you can cancel your subscription at any time. If you cancel, you will retain access to CloudFlow until the end of your current billing period.',
  },
  {
    question: 'Is my data secure?',
    answer: 'Absolutely. We use industry-standard encryption and security measures to protect your data. Our platform is SOC 2 Type II certified and GDPR compliant.',
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-24 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Frequently asked questions
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Have a different question? Contact our support team for help.
          </p>
        </div>

        <div className="mt-12">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}