import { motion } from 'framer-motion';
import { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What makes V Shirts different?",
      answer: "V Shirts are born from vision and built on vibe. We blend village calm with modern confidence, creating timeless simplicity that speaks for itself. Our fashion is not fast — it's felt."
    },
    {
      question: "Where are V Shirts made?",
      answer: "From the heart of Tamil Nadu, we craft shirts that tell a story of roots, rhythm, and realness. Each thread is woven with vision and made for you."
    },
    {
      question: "What sizes are available?",
      answer: "We offer a variety that fits your vibe. Check our Shop page for available sizes for each product. Our shirts are designed to be versatile and comfortable."
    },
    {
      question: "How do I care for my V Shirt?",
      answer: "Each V Shirt is a promise — vivid in color, valuable in comfort, and vibrant in spirit. Follow the care instructions on the label to maintain the quality and vibrancy of your shirt."
    },
    {
      question: "What is your return policy?",
      answer: "We stand behind the value of our shirts. If you're not completely satisfied, please contact us at V_shirts_08@gmail.com and we'll help you with returns or exchanges."
    },
    {
      question: "Do you ship internationally?",
      answer: "Currently, we focus on serving customers in India. For international shipping inquiries, please contact us at V_shirts_08@gmail.com."
    },
    {
      question: "How can I track my order?",
      answer: "Once your order is placed, you'll receive a confirmation email with tracking information. Our team ensures quick replies because your voice drives our vision."
    },
    {
      question: "Are V Shirts sustainable?",
      answer: "We don't follow trends; we create timeless simplicity. Our fashion philosophy values quality over quantity, ensuring each shirt is valuable in comfort and vibrant in spirit."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[300px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1920&q=80')`,
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              V-Talks
            </h1>
            <p className="text-xl text-white/90">
              We answer what you're thinking — straight from the V Shirts crew.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-dark mb-6 text-center">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-neutral-dark/70 text-center mb-8">
                Got questions? We've got answers. Your voice drives our vision.
              </p>
            </motion.div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="border border-neutral-dark/10 rounded-lg overflow-hidden"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between bg-neutral-light hover:bg-primary/10 transition-colors"
                  >
                    <span className="font-semibold text-neutral-dark text-lg">
                      {faq.question}
                    </span>
                    <motion.svg
                      className="w-5 h-5 text-neutral-dark flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      animate={{ rotate: openIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </motion.svg>
                  </button>
                  <motion.div
                    initial={false}
                    animate={{
                      height: openIndex === index ? 'auto' : 0,
                      opacity: openIndex === index ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 py-4 text-neutral-dark/70">
                      {faq.answer}
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-12 text-center"
            >
              <p className="text-lg text-neutral-dark/70 mb-4">
                Still have questions? We're here to help!
              </p>
              <a
                href="/contact"
                className="inline-block bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-primary-dark transition-colors"
              >
                Contact Us
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;

