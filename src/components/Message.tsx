import React from 'react';
import { motion } from 'framer-motion';

const Message = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-purple-100 flex items-center justify-center mb-0 p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-xl text-center"
      >
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          My Sweetest Sweetheart,
        </h1>
        <p className="text-xl text-gray-700 leading-relaxed mb-6">
        My Priyanshi, the most beautiful soul to ever exist! Every moment with you is a gift, and today, I celebrate the most precious gift life has given me—YOU!
        You are my happiness, my peace, my favorite person. I love the way you smile, the way you laugh, the way you make my heart race without even trying.
        On your special day, I just want to remind you—you are loved beyond words, cherished beyond measure, and perfect just the way you are. I hope this year brings you all the joy and love.
        </p>
        <p className="text-lg text-pink-600 font-semibold">
          and once again, Happiest birthday baby
        </p>
      </motion.div>
    </div>
  );
};

export default Message;