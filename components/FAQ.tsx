'use client';
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
    const faqs = [
        {
            q: "Is the app free for farmers?",
            a: "Yes, the disease detection and basic features are completely free. Only purchases from vendors involve costs."
        },
        {
            q: "How accurate is the AI detection?",
            a: "Our CNN model achieves 92% accuracy on test datasets. Results may vary based on image quality."
        },
        {
            q: "Which crops are supported?",
            a: "Currently: Rice, Tomato, Potato, Brinjal, Chili. More crops being added regularly."
        },
        {
            q: "Do I need internet connection?",
            a: "Disease detection requires internet. Some features work offline once data is cached."
        },
        {
            q: "How are vendors verified?",
            a: "All vendors undergo document verification and quality checks by our admin team."
        }
    ];

    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 max-w-3xl">
                <div className="text-center mb-16" data-aos="fade-up">
                    <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-[#2e7d32]">Common Questions</h2>
                    <p className="text-gray-600">Find answers to frequently asked questions about Krishi App.</p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, i) => (
                        <div
                            key={i}
                            className="border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                            data-aos="fade-up"
                            data-aos-delay={i * 50}
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                className="w-full flex items-center justify-between p-6 text-left focus:outline-none bg-white hover:bg-gray-50 transition-colors"
                            >
                                <span className="font-bold text-gray-800">{faq.q}</span>
                                {openIndex === i ? (
                                    <ChevronUp className="w-5 h-5 text-[#2e7d32]" />
                                ) : (
                                    <ChevronDown className="w-5 h-5 text-gray-400" />
                                )}
                            </button>

                            {openIndex === i && (
                                <div className="px-6 pb-6 bg-white text-gray-600 border-t border-gray-50 pt-4 animate-fadeIn">
                                    {faq.a}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
