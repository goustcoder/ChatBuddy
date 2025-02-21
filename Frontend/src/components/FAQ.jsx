import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
    const faqs = [
        {
            question: 'How does the 10-minute free trial work?',
            answer: "You'll get 10 minutes of free chat time with your chosen AI companion. During this time, you can experience the full features of our service and see how well your companion understands and responds to you."
        },
        {
            question: 'How do I customize my AI companion’s personality?',
            answer: "You can customize your AI companion's personality through advanced settings in the Premium plan."
        },
        {
            question: 'Is my conversation data secure and private?',
            answer: 'Yes, all your conversations are encrypted and stored securely to maintain your privacy.'
        },
        {
            question: 'Can I switch AI companions after choosing one?',
            answer: 'Yes, you can switch between different AI companions at any time from your dashboard.'
        },
        {
            question: 'What payment methods do you accept?',
            answer: 'We accept all major credit cards, PayPal, and select digital wallets.'
        }
    ];

    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className='bg-gradient-to-b from-[#000000] to-[#0d0319] py-10 px-4' id="faq">
            <h2 className='text-4xl text-white font-bold text-center mb-4'>Frequently Asked Questions</h2>
            <p className='text-xl text-zinc-400 text-center mb-10'>Get answers to common questions about our AI companion service</p>
            <div className='max-w-3xl mx-auto space-y-4'>
                {faqs.map((faq, index) => (
                    <div key={index} className='bg-zinc-800 p-4 rounded-xl shadow-md'>
                        <div className='flex justify-between items-center cursor-pointer' onClick={() => toggleFAQ(index)}>
                            <h3 className={`text-lg font-semibold ${openIndex === index ? 'text-white' : 'text-zinc-300'}`}>{faq.question}</h3>
                            {openIndex === index ? <ChevronUp className='text-pink-500'/> : <ChevronDown className='text-pink-500'/>}
                        </div>
                        {openIndex === index && (
                            <p className='text-zinc-400 mt-2'>{faq.answer}</p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQ;
