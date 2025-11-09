import { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Dummy action - just show alert
    alert('Thank you for your message! We will get back to you soon. (This is a demo)');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
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
              Contact
            </h1>
            <p className="text-xl text-white/90">
              Voice your vibe with V Shirts.
            </p>
            <p className="text-lg text-white/80 mt-2">
              Visit, verify, or vibe with us — we're always here to value you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-neutral-dark mb-4">
                Send us a Message
              </h2>
              <p className="text-neutral-dark/70 mb-6">
                We believe great fashion comes with great connection. Whether it's feedback, collaboration, or a friendly "hi," we're always happy to hear from you.
              </p>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-neutral-dark mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-neutral-dark/20 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-neutral-dark mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-neutral-dark/20 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-neutral-dark mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 rounded-lg border border-neutral-dark/20 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                    placeholder="Your message..."
                  />
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-primary text-white px-8 py-4 rounded-full font-semibold text-lg"
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-neutral-dark mb-6">
                Contact Information
              </h2>
              <div className="space-y-6 mb-8">
                <div>
                  <h3 className="text-lg font-semibold text-neutral-dark mb-2">📍 Address</h3>
                  <p className="text-neutral-dark/70">
                    V Shirts Studio<br />
                    Tamil Nadu, India
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-neutral-dark mb-2">✉️ Email</h3>
                  <a href="mailto:V_shirts_08@gmail.com" className="text-primary hover:underline">
                    V_shirts_08@gmail.com
                  </a>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-neutral-dark mb-2">☎️ Phone</h3>
                  <a href="tel:+919876543210" className="text-primary hover:underline">
                    +91 98765 43210
                  </a>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-neutral-dark mb-2">🕐 Business Hours</h3>
                  <p className="text-neutral-dark/70">
                    Monday – Saturday: 9:00 AM – 7:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>

              {/* Social Icons */}
              <div>
                <h3 className="text-lg font-semibold text-neutral-dark mb-4">🌐 Connect With Us Online</h3>
                <p className="text-neutral-dark/70 mb-4 text-sm">
                  Our team replies quickly because your voice drives our vision.
                </p>
                <div className="flex gap-4">
                  {[
                    { name: 'Instagram', icon: '📷', url: '#' },
                    { name: 'Facebook', icon: '📘', url: '#' },
                    { name: 'X (Twitter)', icon: '🐦', url: '#' },
                    { name: 'Threads', icon: '💬', url: '#' },
                  ].map((social) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      whileHover={{ scale: 1.2, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      className="text-3xl"
                      aria-label={social.name}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Map Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16 max-w-6xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-neutral-dark mb-2 text-center">
              Find Us
            </h2>
            <p className="text-neutral-dark/70 mb-6 text-center">
              V Shirts — Voice of Vision, Value of Style.
            </p>
            <div className="relative w-full h-[400px] rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.123456789!2d72.8776559!3d19.0759837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce%3A0x1234567890!2sMumbai!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="V-Shirt Location"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

