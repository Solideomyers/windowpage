'use client'
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavLinks } from './navlinks';

interface MobileMenuProps {
  isOpen: boolean;
  ref: React.RefObject<HTMLDivElement>;
  onClose: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  ref,
  onClose,
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: '100%' }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: '100%' }}
          transition={{ type: 'tween' }}
          className={`
            fixed
            top-20
            right-0
            z-10
            bg-pallete-black
            p-4
            w-3/5
            sm:hidden
            `}
        >
          <NavLinks onMobileLinkClick={onClose} isMobile={true} />
        </motion.div>
      )}
    </AnimatePresence>
  );
};
