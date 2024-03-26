import Link from 'next/link';

import styles from './Nav.module.css';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const Nav: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const list = {
    hidden: { opacity: 0, y: -20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
  const listItem = {
    hidden: { opacity: 0, x: 20 },
    show: { opacity: 1, x: 0 },
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(true);
        setIsMobile(false);
      } else {
        setIsMenuOpen(false);
        setIsMobile(true);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <nav className={styles.nav}>
      <motion.div className={styles.logo} whileHover={{ borderRadius: '0' }}>
        <Link href="/">
          <span className={styles.logo}>{'<ABY>'}</span>
        </Link>
      </motion.div>
      <div className={`${styles.listContainer} ${isMenuOpen ? '' : ' hidden'}`}>
        {isMenuOpen && (
          <AnimatePresence>
            <motion.ul
              className={styles.list}
              variants={list}
              initial="hidden"
              animate="show"
            >
              <motion.li variants={listItem} whileHover={{ scale: 1.1 }}>
                <Link
                  href="#about"
                  onClick={() => {
                    if (isMobile) setIsMenuOpen((prev) => !prev);
                  }}
                >
                  About
                </Link>
              </motion.li>
              <motion.li variants={listItem} whileHover={{ scale: 1.1 }}>
                <Link
                  href="#projects"
                  onClick={() => {
                    if (isMobile) setIsMenuOpen((prev) => !prev);
                  }}
                >
                  Projects
                </Link>
              </motion.li>
              <motion.li variants={listItem} whileHover={{ scale: 1.1 }}>
                <Link
                  href="#contact"
                  onClick={() => {
                    if (isMobile) setIsMenuOpen((prev) => !prev);
                  }}
                >
                  Contact
                </Link>
              </motion.li>
              <motion.li
                className={styles.listItemX}
                variants={listItem}
                whileHover={{ scale: 1.1 }}
              >
                <div onClick={() => setIsMenuOpen((prev) => !prev)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                </div>
              </motion.li>
            </motion.ul>
          </AnimatePresence>
        )}
      </div>
      <div
        className={`${styles.listSocialContainer} ${
          isMenuOpen ? '' : ' hidden'
        }`}
      >
        <AnimatePresence>
          <motion.ul
            className={styles.listSocial}
            
          >
            <motion.li whileHover={{ scale: 1.1 }}>
              <Link
                href="https://www.linkedin.com/in/arifbatuhanyildirimoglu/"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#e1e2e2"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-linkedin"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </Link>
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }}>
              <Link
                href="https://github.com/arifbatuhanyildirimoglu"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#e1e2e2"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-github"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
              </Link>
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }}>
              <Link
                href="https://www.instagram.com/arifbatuhanyildirimoglu/"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#e1e2e2"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-instagram"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </Link>
            </motion.li>
          </motion.ul>
        </AnimatePresence>
      </div>
      <div
        className={styles.burger}
        onClick={() => setIsMenuOpen((prev) => !prev)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </div>
      {isMenuOpen && (
        <motion.div
          className={styles.panel}
          onClick={() => setIsMenuOpen((prev) => !prev)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        ></motion.div>
      )}
    </nav>
  );
};

export default Nav;
