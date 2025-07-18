import { motion } from "framer-motion";

interface AnimatedSectionProps {
  children: React.ReactNode;
  animation: any;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ children, animation }) => {
  return (
    <motion.section
      className="h-screen snap-start flex items-center justify-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.6 }}
      variants={animation}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <div className="w-full h-full">{children}</div>
    </motion.section>
  );
};

export default AnimatedSection;
