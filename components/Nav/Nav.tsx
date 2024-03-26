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
      if (window.innerWidth > 768) {
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
