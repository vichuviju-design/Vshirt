import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative h-[600px] md:h-[700px] overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1920&q=80')`,
        }}
      >
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-white mb-4"
          >
            Vibe with V Shirts
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mb-6"
          >
            <p className="text-xl md:text-2xl font-medium text-primary/90 tracking-wide">
              <span className="inline-block mr-3">Versatile.</span>
              <span className="inline-block mr-3">Vibrant.</span>
              <span className="inline-block">Valuable.</span>
            </p>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg md:text-xl text-white/90 mb-8 max-w-xl leading-relaxed"
          >
            V Shirts — Vibrant by Nature. Versatile by Design.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex gap-4"
          >
            <Link to="/shop">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary text-white px-8 py-4 rounded-full font-semibold text-lg"
              >
                Shop Now
              </motion.button>
            </Link>
            <Link to="/about">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-neutral-dark px-8 py-4 rounded-full font-semibold text-lg"
              >
                Learn More
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

