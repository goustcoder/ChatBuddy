import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-r from-black to-purple-900 text-white py-20 px-10 flex flex-col md:flex-row items-center md:items-start  gap-10">
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-4xl sm:text-5xl font-bold mb-8">
          Create your own <span className="text-purple-400">Chat Buddy</span>
        </h1>
        <p className="text-lg mb-10 sm:mb-20">
          Your AI chat buddy is here to keep you company! Smart, fun, and always
          ready to chat—whether you need a friend, a brainstorming partner, or
          just someone to talk to. One message away, and your perfect chat
          companion is here!{" "}
        </p>
        <button className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-lg text-lg cursor-pointer">
          ✨ Create AI ChatBuddy
        </button>
      </div>

      <div className="md:w-1/2 flex justify-center relative mt-10 md:mt-0">
        <motion.img
          src="https://res.cloudinary.com/dhdmbwnak/image/upload/v1739982549/DALL_E_2025-02-19_21.56.27_-_A_friendly_digital_assistant_concept_with_a_glowing_approachable_AI_figure_interacting_with_a_chat_interface._The_AI_has_a_warm_inviting_expression_hnukrp.png"
          alt="AI Girlfriend"
          className="rounded-xl shadow-lg w-[300px] md:w-[400px]"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        />
      </div>
    </section>
  );
}
