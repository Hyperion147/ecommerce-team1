import React, { useState } from 'react';

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is your shipping policy?",
      answer: "We offer free shipping on orders over ₹999 across India. Standard delivery takes 3-7 business days. Express shipping (1-2 days) is available for ₹199 extra."
    },
    {
      question: "What is your return policy?",
      answer: "You can return unworn items within 15 days of delivery. Items must have tags attached and be in original packaging. Refunds process within 5-7 business days."
    },
    {
      question: "How do I find the right size?",
      answer: "Check our detailed size charts on every product page. We recommend measuring a similar item you own and comparing measurements. Contact us if you're between sizes."
    },
    {
      question: "Are your products really sustainable?",
      answer: "Yes! We use organic cotton, recycled polyester, and eco-friendly dyes. 85% of our packaging is biodegradable, and we partner with ethical manufacturers certified by GOTS."
    },
    {
      question: "How can I track my order?",
      answer: "Once shipped, you'll receive a tracking link via email and WhatsApp. You can also check order status in your account dashboard under 'My Orders'."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-5xl mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600">Find answers to common questions</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-[#D4A57400] focus:ring-offset-2"
                aria-expanded={openIndex === index}
              >
                <span className="text-lg pr-4">{faq.question}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`lucide lucide-chevron-down w-5 h-5 shrink-0 transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  aria-hidden="true"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6 pt-2">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
