import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const CategoryCard = ({ category, image, link }) => {
  return (
    <Link to={link}>
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="relative overflow-hidden rounded-lg aspect-[4/5] cursor-pointer group"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${image}')` }}
        >
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
        </div>
        <div className="absolute inset-0 flex items-end p-6">
          <motion.h3
            initial={{ y: 20, opacity: 0 }}
            whileHover={{ y: 0, opacity: 1 }}
            className="text-3xl font-bold text-white"
          >
            {category}
          </motion.h3>
        </div>
      </motion.div>
    </Link>
  );
};

export default CategoryCard;

