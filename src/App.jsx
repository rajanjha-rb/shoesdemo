import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { SiTailwindcss, SiFramer, SiAppwrite } from "react-icons/si";

const techStack = [
  { name: "React", icon: <FaReact className="text-sky-500 text-4xl" /> },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-cyan-400 text-4xl" />,
  },
  { name: "Appwrite", icon: <SiAppwrite className="text-pink-500 text-4xl" /> },
  { name: "Framer Motion", icon: <SiFramer className="text-white text-4xl" /> },
];

const features = [
  "Fast & Responsive Design",
  "User & Admin Login System",
  "Modern Product UI/UX",
  "Cart + Checkout Integration",
  "SEO Optimized Pages",
  "Secure with Appwrite Auth",
  "Blog System (For SEO)",
  "100% Mobile Friendly",
];

const App = () => {
  return (
    <div className="bg-zinc-900 text-white font-sans scroll-smooth">
      {/* Hero */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-br from-black via-zinc-800 to-black">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-bold mb-6"
        >
          Launch Your Shoe Brand Online.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-lg md:text-xl text-gray-300 max-w-2xl"
        >
          We build premium eCommerce websites using React, Tailwind CSS,
          Appwrite & Framer Motion. From design to deployment, we’ve got you
          covered.
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-8 px-8 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold shadow-lg"
        >
          Let’s Build Your Store
        </motion.button>
      </section>

      {/* Technologies */}
      <section className="py-20 px-6 bg-zinc-800 text-center">
        <h2 className="text-4xl font-bold mb-12">Tech Stack We Use</h2>
        <div className="flex justify-center flex-wrap gap-12">
          {techStack.map((tech, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center"
              whileHover={{ scale: 1.1 }}
            >
              {tech.icon}
              <p className="mt-2 text-lg">{tech.name}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-6 bg-zinc-900">
        <h2 className="text-4xl font-bold text-center mb-12">
          Powerful Features You'll Get
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              className="bg-zinc-800 p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300"
              whileHover={{ y: -5 }}
            >
              <p className="text-white font-medium text-lg">{feature}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6 bg-gradient-to-b from-zinc-800 to-zinc-900 text-center">
        <h2 className="text-4xl font-bold mb-10">Why People Choose Us</h2>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 text-left">
          <div className="space-y-6">
            <p className="text-gray-300">
              We’re not just developers. We’re eCommerce experts focused on
              growing your shoe brand. Our team blends UI/UX design, SEO,
              performance, and scalability to deliver a result you’ll be proud
              to show off.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-400">
              <li>Clean and maintainable code structure</li>
              <li>Mobile-first and responsive layout</li>
              <li>Optimized images and performance best practices</li>
              <li>Modern animations that increase engagement</li>
            </ul>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-zinc-800 p-6 rounded-xl shadow-md"
          >
            <h3 className="text-xl font-semibold mb-4">
              🔥 Real Brands We Helped
            </h3>
            <ul className="space-y-3 text-gray-300">
              <li>✅ Helped a local Nepali shoe shop 3x online orders</li>
              <li>✅ Created fully managed admin dashboard</li>
              <li>✅ Fast-loading app with 95+ Lighthouse score</li>
              <li>✅ Delivered within 3–5 days</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Our Workflow */}
      <section className="py-20 px-6 bg-zinc-950 text-center">
        <h2 className="text-4xl font-bold mb-12">How We Work</h2>
        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto text-sm text-gray-300">
          {[
            "1. We Understand Your Brand",
            "2. Design UI Mockup & Flow",
            "3. Develop with Clean Code",
            "4. Deliver & Launch in Days",
          ].map((step, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -4 }}
              className="bg-zinc-800 rounded-lg p-6 border border-zinc-700"
            >
              <p>{step}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact + CTA */}
      <section className="py-20 px-6 bg-zinc-900 text-center">
        <h2 className="text-4xl font-bold mb-4">Ready to Start?</h2>
        <p className="text-gray-400 mb-6">
          Let’s build a custom shoe website that works for your business.
          Contact us now.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mb-8 px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold"
        >
          Talk to Us on WhatsApp
        </motion.button>

        <div className="flex justify-center gap-6 text-2xl">
          <a
            href="https://www.facebook.com/profile.php?id=61577022802153"
            target="_blank"
          >
            <FaFacebook className="hover:text-blue-500" />
          </a>
          <a href="https://www.instagram.com/codocu_official/" target="_blank">
            <FaInstagram className="hover:text-pink-400" />
          </a>
          <a href="https://wa.me/9779762717552" target="_blank">
            <FaWhatsapp className="hover:text-green-400" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-6 text-center text-sm text-gray-600">
        © 2025 Codocu Software. All rights reserved.
      </footer>
    </div>
  );
};

export default App;
