import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Page404() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-50 text-center px-6">
      {/* Animated 404 Number */}
      <motion.h1
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-9xl font-extrabold text-indigo-600 drop-shadow-lg"
      >
        404
      </motion.h1>

      {/* Animated "Not Found" */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="mt-4 text-3xl font-semibold text-gray-800"
      >
        Page Not Found
      </motion.h2>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="mt-2 text-gray-500"
      >
        Oops! The page you are looking for doesn’t exist.
      </motion.p>

      {/* Back to Home Button */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="mt-6"
      >
        <Link
          to="/"
          className="px-6 py-3 text-white bg-indigo-600 rounded-xl shadow-lg hover:bg-indigo-700 transition"
        >
          Back to Home
        </Link>
      </motion.div>
    </div>
  );
}

export default Page404;
