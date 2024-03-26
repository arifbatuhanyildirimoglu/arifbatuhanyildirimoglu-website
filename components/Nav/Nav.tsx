import Link from 'next/link';

import styles from './Nav.module.css';
import { useEffect, useState } from 'react';

const Nav: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(true);
      } else {
        setIsMenuOpen(false);
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
      <div className={styles.logo}>
        <Link href="/">
          <span className={styles.logo}>{'<ABY>'}</span>
        </Link>
      </div>
      <div className={`${styles.listContainer} ${isMenuOpen ? '' : ' hidden'}`}>
        <ul className={styles.list}>
          <li>
            <Link href="#about" onClick={() => setIsMenuOpen((prev) => !prev)}>
              About
            </Link>
          </li>
          <li>
            <Link
              href="#projects"
              onClick={() => setIsMenuOpen((prev) => !prev)}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="#contact"
              onClick={() => setIsMenuOpen((prev) => !prev)}
            >
              Contact
            </Link>
          </li>
          <li className={styles.listItemX}>
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
          </li>
        </ul>
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
      {isMenuOpen && <div className={styles.panel}></div>}
    </nav>
  );
};

export default Nav;
