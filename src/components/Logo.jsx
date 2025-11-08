import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Logo = ({ className = '' }) => {
  return (
    <Link to="/" className={`flex items-center gap-2 ${className}`}>
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="relative"
      >
        {/* Stylized V Logo */}
        <svg
          width="50"
          height="50"
          viewBox="0 0 50 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-primary"
        >
          {/* V Shape */}
          <path
            d="M10 40 L25 10 L40 40"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          {/* Flame/Wave elements */}
          <path
            d="M25 10 Q20 5 15 8 Q10 11 12 15"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
            opacity="0.8"
          />
          <path
            d="M25 10 Q30 5 35 8 Q40 11 38 15"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
            opacity="0.8"
          />
          <path
            d="M25 10 Q28 3 32 6"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
            opacity="0.6"
          />
        </svg>
      </motion.div>
      <span className="text-2xl font-bold text-neutral-dark">V SHIRTS</span>
    </Link>
  );
};

export default Logo;

