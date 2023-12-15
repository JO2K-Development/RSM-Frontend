import { motion } from 'framer-motion';
import BrandHead from './BrandHead';

const EntryLandingPage = () => {
  return (
    <motion.div
      animate={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full absolute h-screen flex flex-col justify-center items-center  overflow-y-hidden  "
    >
      <motion.div
        initial={{ scale: 1.5 }}
        animate={{ scale: 0.2, y: '600%', opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        <BrandHead />
      </motion.div>
    </motion.div>
  );
};

export default EntryLandingPage;
