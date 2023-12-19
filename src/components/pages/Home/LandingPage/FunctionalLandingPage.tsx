import { motion } from 'framer-motion';
import BrandHead from './BrandHead';
import { useNavigate } from 'react-router-dom';
import FormButton from '../../../common/FormButton';
import SecretText from './SecretText';

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

      <div className="p-[1rem] text-lg">
        <FormButton
          text={'Submit Request!'}
          onClick={() => {
            navigate('/request');
          }}
        />
      </div>
      <SecretText
        text={'Are you a provider?'}
        onClick={() => {
          navigate('/provider/login');
        }}
      />
    </motion.div>
  );
};

export default FunctionalLandingPage;
