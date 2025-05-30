// components/Toast.js
'use client';
import { motion, AnimatePresence } from 'framer-motion';

export default function Toast({ visible, message, type = 'success' }) {
  const colors = {
    success: {
      bg: 'bg-green-600',
      border: 'border-green-700',
    },
    info: {
      bg: 'bg-blue-600',
      border: 'border-blue-700',
    },
    error: {
      bg: 'bg-red-600',
      border: 'border-red-700',
    },
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.3 }}
          className={`fixed bottom-6 left-1/2 transform -translate-x-1/2 px-4 py-3 rounded-xl shadow-lg text-white text-sm border ${colors[type].bg} ${colors[type].border} z-50`}
        >
          {message}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
