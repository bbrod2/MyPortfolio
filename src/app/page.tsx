'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Home() {
  useEffect(() => {
    document.title = 'Brian Brod | Software Engineer';
  }, []);

  return (
    <main className="bg-white text-gray-900 dark:bg-gray-900 dark:text-white min-h-screen">
      <section className="h-screen flex flex-col justify-center items-center text-center p-4">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-bold mb-4"
        >
          Brian Brod
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-xl max-w-2xl"
        >
          Full-Stack Developer specializing in backend development, system optimization, and secure scalable applications.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-6 flex gap-4"
        >
          <a
            href="https://www.linkedin.com/in/brianbrod"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/bbrod2"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-50 transition"
          >
            GitHub
          </a>
              <a
            href="https://www.ncawmscog.org"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-50 transition"
          >
            MyProject 1
          </a>
            <a
            href="https://www.active-do.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-50 transition"
          >
            MyProject 2
          </a>
       
        </motion.div>
      </section>
      
      <footer className="text-center p-6 text-sm text-gray-500 dark:text-gray-400">
        &copy; {new Date().getFullYear()} Brian Brod. Built with Next.js, Tailwind CSS, and Framer Motion.
      </footer>
    </main>
  );
}
