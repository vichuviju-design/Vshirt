import { motion } from 'framer-motion';
import { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Dummy action - just show alert
    alert('Thank you for subscribing! (This is a demo)');
    setEmail('');
  };

  return (
    <section className="bg-primary text-white py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold mb-4">Stay in Style</h2>
          <p className="text-lg mb-8 opacity-90">
            Subscribe to our newsletter and get exclusive offers, style tips, and early access to new collections. Vibe with V Shirts!
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-6 py-3 rounded-full text-neutral-dark focus:outline-none focus:ring-2 focus:ring-white"
            />
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-primary px-8 py-3 rounded-full font-semibold"
            >
              Subscribe
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;

