import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState } from 'react';

const Logo = ({ className = '', variant = 'default', layout = 'horizontal' }) => {
  // Variant colors: 'default' (green), 'dark' (black), 'light' (white)
  // Layout: 'horizontal' (for header) or 'vertical' (for standalone)
  const getColors = () => {
    switch (variant) {
      case 'light':
        return { v: '#FFFFFF', waves: '#FFFFFF', text: '#FFFFFF' };
      case 'dark':
        return { v: '#111111', waves: '#111111', text: '#111111' };
      default:
        return { v: '#32CD32', waves: '#111111', text: '#111111' }; // Lime green V, black waves
    }
  };

  const colors = getColors();
  const isVertical = layout === 'vertical';
  // Use static image assets from `public/` directory
  const [useImage, setUseImage] = useState(true);
  // Determine which logo image to use based on variant
  const imgSrc = variant === 'light' ? '/logo-white.png' : '/logo-black.png';

  return (
    <Link 
      to="/" 
      className={`flex ${isVertical ? 'flex-col items-center gap-1' : 'items-center gap-3'} ${className}`}
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="relative"
      >
        {/* Use static image file from public/ directory.
            If the image fails to load, fall back to the inline SVG below. */}
        {useImage && (
          <img
            src={imgSrc}
            alt="V SHIRTS Logo"
            className={`${isVertical ? 'w-48' : 'w-32'} h-auto block object-contain max-h-16`}
            onError={() => setUseImage(false)}
            onLoad={() => setUseImage(true)}
          />
        )}

        {/* Inline SVG fallback (kept for reliability and theming) */}
        {!useImage && (
          <svg
            width="60"
            height="50"
            viewBox="0 0 60 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="drop-shadow-sm"
          >
            <defs>
              <linearGradient id="vGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor={colors.v} stopOpacity="1" />
                <stop offset="50%" stopColor={colors.v} stopOpacity="0.9" />
                <stop offset="100%" stopColor={colors.v} stopOpacity="0.7" />
              </linearGradient>
              <filter id="shadow">
                <feDropShadow dx="2" dy="2" stdDeviation="2" floodColor="#000000" floodOpacity="0.2" />
              </filter>
            </defs>

            <path
              d="M15 38 L30 8 L45 38"
              stroke={colors.v}
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="url(#vGradient)"
              filter="url(#shadow)"
            />

            <path
              d="M20 12 Q15 5 10 8 Q5 11 7 15"
              stroke={colors.waves}
              strokeWidth="3.5"
              strokeLinecap="round"
              fill="none"
              filter="url(#shadow)"
            />

            <path
              d="M30 8 Q28 2 32 5 Q36 8 35 12"
              stroke={colors.waves}
              strokeWidth="3.5"
              strokeLinecap="round"
              fill="none"
              filter="url(#shadow)"
            />

            <path
              d="M40 12 Q45 5 50 8 Q55 11 53 15"
              stroke={colors.waves}
              strokeWidth="3.5"
              strokeLinecap="round"
              fill="none"
              filter="url(#shadow)"
            />
          </svg>
        )}
      </motion.div>
      {/* Only show text if using SVG fallback (image likely includes text) */}
      {!useImage && (
        <span className={`${isVertical ? 'text-xl' : 'text-2xl'} font-bold tracking-wide`} style={{ color: colors.text }}>
          V SHIRTS
        </span>
      )}
    </Link>
  );
};

export default Logo;

