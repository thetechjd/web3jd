import lokkeestudiosLogo from '@assets/images/logos/jd.png';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
    document.body.classList.remove('fixed');
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          animate={{ y: '0%' }}
          exit={{ y: '-100%' }}
          transition={{ duration: 1, delay: 0.35 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-neutrals-900"
        >
          <motion.img
            src={lokkeestudiosLogo.src}
            alt="THE WEB3 JD"
            width={196}
            height={196}
            decoding="async"
            loading="eager"
            animate={{ opacity: 1, background: 1 }}
            exit={{
              opacity: [1, 0, 0],
              scale: [1, 0.75, 0],
            }}
            transition={{ duration: 0.5 }}
            className="animate-pulse"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default LoadingScreen;
