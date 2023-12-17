import { motion } from 'framer-motion';
import BrandHead from './BrandHead';
import RequestButton from './RequestButton';
import ProviderButton from './ProviderButton';
import { useNavigate } from 'react-router-dom';

const FunctionalLandingPage = () => {
  const navigate = useNavigate();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, delay: 0.5 }}
      className="absolute flex h-screen w-full flex-col items-center justify-center bg-black bg-opacity-70 "
    >
      <BrandHead />
      <RequestButton
        onClick={() => {
          navigate('/request');
        }}
      />
      <ProviderButton
        onClick={() => {
          navigate('/provider/login');
        }}
      />
    </motion.div>
  );
};

export default FunctionalLandingPage;
