import React from 'react';

const features = [
  {
    title: 'Personalized Characters',
    description: 'Choose from a variety of personalities and customize them to match your preferences.',
    icon: 'https://res.cloudinary.com/dhdmbwnak/image/upload/v1740138093/woman_qmnmx6.png',
  },
  {
    title: 'Emotional Intelligence',
    description: 'AI companions that understand and respond to your emotional needs and moods.',
    icon: 'https://res.cloudinary.com/dhdmbwnak/image/upload/v1740138204/love_hgq7fz.png',
  },
  {
    title: 'Secure Conversations',
    description: 'End-to-end encrypted chats ensuring your conversations remain private and secure.',
    icon: 'https://res.cloudinary.com/dhdmbwnak/image/upload/v1740138337/cyber-security_aoofdt.png',
  },
  {
    title: 'Real-time Learning',
    description: 'Our AI adapts and learns from your interactions to provide better conversations.',
    icon: 'https://res.cloudinary.com/dhdmbwnak/image/upload/v1740138337/learning_z11cda.png',
  },
  {
    title: '24/7 Availability',
    description: 'Your AI companion is always there when you need someone to talk to.',
    icon: 'https://res.cloudinary.com/dhdmbwnak/image/upload/v1740138337/convenience_p2qazu.png',
  },
  {
    title: 'Memory Retention',
    description: 'AI remembers your past conversations and important details about you.',
    icon: 'https://res.cloudinary.com/dhdmbwnak/image/upload/v1740138337/memorization_zgtcyn.png',
  }
];

const Features = () => {
  return (
    <section className="bg-gradient-to-b from-[#000] to-[#0d0319] text-white py-12 " id="features">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold">Features That Make Us Special</h2>
        <p className="text-gray-400 mt-2">Experience a new level of AI companionship with our advanced features</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <div key={index} className="bg-[#22252e] p-6 rounded-2xl shadow-md hover:shadow-2xl  transition-all transform hover:scale-105">
            <div className="mb-2 w-16 h-16 rounded-full bg-gradient-to-r from-pink-500 to-indigo-500 
         
            p-1 flex items-center justify-center hover:scale-105 transition-transform duration-200">
                <img
                  className="w-full h-full object-contain rounded-full bg-white p-1"
                  src={feature.icon}
                  alt=""
                />
              </div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-400">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
