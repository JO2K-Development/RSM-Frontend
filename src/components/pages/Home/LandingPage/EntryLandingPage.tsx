import { motion } from "framer-motion";
import BrandHead from "./BrandHead";

const EntryLandingPage = () => {
  return (
    <motion.div
      animate={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full absolute h-screen flex flex-col justify-center items-center  overflow-y-hidden  "
    >
      <motion.div
        initial={{ scale: 1.5 }}
        animate={{ scale: 7.5, y: "600%", opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <BrandHead />
      </motion.div>
    </motion.div>
  );
};

export default EntryLandingPage;
