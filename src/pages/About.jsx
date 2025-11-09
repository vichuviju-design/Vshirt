import { motion } from 'framer-motion';

const About = () => {
  const teamMembers = [
    {
      name: 'Priya Sharma',
      role: 'Creative Director',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
    },
    {
      name: 'Rahul Kumar',
      role: 'Head of Design',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
    },
    {
      name: 'Anjali Patel',
      role: 'Brand Manager',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80',
    },
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
              About V Shirts
            </h1>
            <p className="text-xl text-white/90">
              V Shirts — Born from Vision, Built on Vibe.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Brand Story */}
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
                Our Story
              </h2>
              <p className="text-lg text-neutral-dark/70 leading-relaxed mb-4">
                Every thread tells a story — of roots, rhythm, and realness.
              </p>
              <p className="text-lg text-neutral-dark/70 leading-relaxed mb-4">
                From the heart of Tamil Nadu, we began with a purpose: to craft shirts that blend village calm with modern confidence.
              </p>
              <p className="text-lg text-neutral-dark/70 leading-relaxed mb-4">
                Our fashion is not fast — it's felt. Designed for people who move with meaning, live with style, and wear their vibe proudly.
              </p>
              <p className="text-lg text-neutral-dark/70 leading-relaxed mb-4">
                Each V Shirt is a promise — vivid in color, valuable in comfort, and vibrant in spirit.
              </p>
              <p className="text-lg text-neutral-dark/70 leading-relaxed">
                We don't follow trends; we create timeless simplicity that speaks for itself.
              </p>
              <p className="text-lg text-neutral-dark/70 leading-relaxed mt-4 font-semibold">
                V Shirts — Woven with Vision. Made for you.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 bg-neutral-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-dark mb-6 text-center">
                Our Mission
              </h2>
              <p className="text-xl text-neutral-dark/70 leading-relaxed text-center mb-8">
                To craft shirts that blend village calm with modern confidence, creating timeless simplicity that speaks for itself.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1, duration: 0.6 }}
                  className="text-center"
                >
                  <div className="text-5xl mb-4">🎨</div>
                  <h3 className="text-xl font-bold mb-2">Quality Design</h3>
                  <p className="text-neutral-dark/60">
                    Every piece is carefully crafted with attention to detail and quality materials.
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="text-center"
                >
                  <div className="text-5xl mb-4">🌱</div>
                  <h3 className="text-xl font-bold mb-2">Sustainability</h3>
                  <p className="text-neutral-dark/60">
                    We're committed to sustainable practices and ethical manufacturing processes.
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="text-center"
                >
                  <div className="text-5xl mb-4">❤️</div>
                  <h3 className="text-xl font-bold mb-2">Customer First</h3>
                  <p className="text-neutral-dark/60">
                    Your satisfaction is our priority. We listen, learn, and evolve based on your feedback.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Fashion Philosophy */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-dark mb-6">
                Our Philosophy
              </h2>
              <p className="text-lg text-neutral-dark/70 leading-relaxed mb-6">
                At V Shirts, we believe fashion is not fast — it's felt. Our philosophy centers around three core values:
              </p>
              <ul className="space-y-4 text-lg text-neutral-dark/70">
                <li className="flex items-start">
                  <span className="text-primary mr-3 font-bold">•</span>
                  <span>
                    <strong className="text-neutral-dark">Vibrant:</strong> Vivid in color, vibrant in spirit — every shirt tells a story of roots, rhythm, and realness.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 font-bold">•</span>
                  <span>
                    <strong className="text-neutral-dark">Versatile:</strong> Designed for people who move with meaning, live with style, and wear their vibe proudly.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 font-bold">•</span>
                  <span>
                    <strong className="text-neutral-dark">Valuable:</strong> Valuable in comfort — we create timeless simplicity that speaks for itself, blending village calm with modern confidence.
                  </span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-neutral-light">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-dark mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-neutral-dark/60 max-w-2xl mx-auto">
              The passionate individuals behind V Shirts
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="text-center"
              >
                <div className="relative overflow-hidden rounded-lg aspect-square mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-neutral-dark mb-1">
                  {member.name}
                </h3>
                <p className="text-neutral-dark/60">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

