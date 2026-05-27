import { motion } from 'motion/react'

export default function SlideWrapper({ children, className = '' }) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className={`relative w-full h-full flex flex-col items-center justify-center px-14 md:px-24 lg:px-36 py-20 overflow-hidden ${className}`}
    >
      {children}
    </motion.section>
  )
}
