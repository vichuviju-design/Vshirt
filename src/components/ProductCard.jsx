import { motion } from 'framer-motion';
import { useState } from 'react';

const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group cursor-pointer"
    >
      <div className="relative overflow-hidden bg-neutral-light rounded-lg aspect-[3/4]">
        <motion.img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
        
        {/* Quick View Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          className="absolute inset-0 bg-black/40 flex items-center justify-center z-10"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-neutral-dark px-6 py-2 rounded-full font-semibold"
          >
            Quick View
          </motion.button>
        </motion.div>

        {/* Badge */}
        {product.badge && (
          <span className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-xs font-semibold z-20">
            {product.badge}
          </span>
        )}
      </div>

      <div className="mt-4">
        <h3 className="font-semibold text-lg text-neutral-dark">{product.name}</h3>
        <p className="text-neutral-dark/60 text-sm mt-1">{product.category}</p>
        <div className="flex items-center justify-between mt-2">
          <span className="text-xl font-bold text-neutral-dark">₹{product.price}</span>
          {product.originalPrice && (
            <span className="text-neutral-dark/40 line-through text-sm">
              ₹{product.originalPrice}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;

