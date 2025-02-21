import React from 'react';

const Plan = () => {
    const plan = [
        {
            title: "Free Trial",
            extra: "",
            pay: "$0",
            inr: "₹0",
            features: [
                "10 Minutes Chat Time", "Basic Character Selection", "Core Features Access"
            ],
            btn: "Start Free Trial"
        },
        {
            title: "Premium Monthly",
            extra: "MOST POPULAR",
            pay: "$9.99/month",
            inr: "₹799/month",
            features: [
                "Unlimited Chat Time", "All Characters Available", "Advanced Personality Customization", "Priority Support"
            ],
            btn: "Choose Premium Monthly"
        },
        {
            title: "Annual Plan",
            extra: "",
            pay: "$99.99/year",
            inr: "₹7990/year",
            features: [
                "All Premium Features", "Exclusive Character Access", "VIP Support"
            ],
            btn: "Choose Annual Plan"
        },
    ];

    return (
        <div className='bg-gradient-to-b from-[#0d0319] to-[#000000] py-10' id="pricing">
            <div>
                <h3 className='text-3xl text-white font-bold text-center sm:text-4xl mb-4'>Choose Your Perfect Plan</h3>
                <p className='text-xl text-zinc-400 text-center mb-10'>Start with a free trial and upgrade to continue your journey</p>
            </div>
            <div className='text-white max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-5'>
                {plan.map((elem, index) => (
                    <div key={index} className='max-w-4xl bg-zinc-700 rounded-3xl p-10 shadow-lg hover:scale-105 transition-all min-h-[500px] flex flex-col justify-between'>
                        {elem.extra && (
                            <span className='text-center mb-4 p-2 bg-gradient-to-r from-pink-500 to-indigo-500 w-full block rounded-t-3xl font-semibold'>
                                {elem.extra}
                            </span>
                        )}
                        <div>
                            <p className='text-white text-2xl font-bold mb-2'>{elem.title}</p>
                            <p className='text-pink-600 text-4xl font-bold mb-1'>{elem.pay}</p>
                            <p className='text-sm text-zinc-400 mb-4'>{elem.inr}</p>
                            <ul className='mb-4 mt-4  space-y-3'>
                                {elem.features.map((item, idx) => (
                                    <li key={idx} className='flex items-center space-x-4 '>
                                        <span className='text-green-500'>✔</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <button className='cursor-pointer w-full bg-gradient-to-r from-pink-500 to-indigo-500 py-3 rounded-xl text-white font-semibold hover:opacity-90 transition-all'>
                            {elem.btn}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Plan;
