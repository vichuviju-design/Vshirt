import { motion } from 'framer-motion';

const Careers = () => {
  const benefits = [
    {
      icon: '🎨',
      title: 'Creative Freedom',
      description: 'Express your creativity and bring your vision to life in a supportive environment.'
    },
    {
      icon: '🌱',
      title: 'Growth Opportunities',
      description: 'Grow with V Shirts as we expand and create new possibilities together.'
    },
    {
      icon: '❤️',
      title: 'Family Culture',
      description: 'Join a family of creators, dreamers, and doers who value collaboration and connection.'
    },
    {
      icon: '✨',
      title: 'Make an Impact',
      description: 'Be part of a brand that blends village calm with modern confidence, creating timeless fashion.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[400px] overflow-hidden">
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
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Careers
            </h1>
            <p className="text-xl text-white/90 mb-2">
              Venture with Vision. Grow with V Shirts.
            </p>
            <p className="text-lg text-white/80">
              We're more than a fashion brand — we're a family of creators, dreamers, and doers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
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
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-dark mb-6">
                Join Our Journey
              </h2>
              <p className="text-lg text-neutral-dark/70 leading-relaxed mb-4">
                If you're passionate about style, creativity, and comfort, join our journey and vibe with us!
              </p>
              <p className="text-lg text-neutral-dark/70 leading-relaxed">
                At V Shirts, we believe in creating timeless simplicity that speaks for itself. We're looking for people who move with meaning, live with style, and wear their vibe proudly.
              </p>
            </motion.div>

            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-8 text-center">
                Why Join V Shirts?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    className="bg-neutral-light p-6 rounded-lg"
                  >
                    <div className="text-4xl mb-3">{benefit.icon}</div>
                    <h3 className="text-xl font-bold text-neutral-dark mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-neutral-dark/70">
                      {benefit.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Contact Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-primary/10 p-8 rounded-lg text-center"
            >
              <h2 className="text-3xl font-bold text-neutral-dark mb-4">
                Ready to Vibe with Us?
              </h2>
              <p className="text-lg text-neutral-dark/70 mb-6">
                Send us your resume and a note about why you'd love to join the V Shirts family.
              </p>
              <div className="space-y-4">
                <div>
                  <p className="text-neutral-dark font-semibold mb-2">📧 Email us at:</p>
                  <a
                    href="mailto:V_shirts_08@gmail.com"
                    className="text-primary hover:underline text-lg font-semibold"
                  >
                    V_shirts_08@gmail.com
                  </a>
                </div>
              </div>
              <p className="text-neutral-dark/70 mt-6 text-sm">
                V Shirts — Vision Starts with You.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;

