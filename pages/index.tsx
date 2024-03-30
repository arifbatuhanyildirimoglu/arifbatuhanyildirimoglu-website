import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import Nav from '@/components/Nav/Nav';
import Hero from '@/components/Hero/Hero';
import About from '@/components/About/About';
import Projects from '@/components/Projects/Projects';
import Contact from '@/components/Contact/Contact';
import { useEffect, useState } from 'react';

export default function Home() {
  const [isNavShown, setIsNavShown] = useState(true);
  const [scrollPos, setScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      if (scrollPos === 0 || scrollPos < 75 || currentScrollPos < scrollPos) {
        setIsNavShown(true);
      } else {
        setIsNavShown(false);
      }
      setScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollPos]);

  return (
    <>
      <Head>
        <title>Arif Batuhan Yıldırımoğlu | Software Engineer</title>
        <meta
          name="description"
          content="Personel website of Arif Batuhan Yıldırımoğlu"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="Arif Batuhan Yıldırımoğlu, Software Engineer, Web Developer, Game Developer, Unity Developer"
        />
        <meta name="author" content="Arif Batuhan Yıldırımoğlu" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        {/* navbar */}
        {/* hero */}
        {/* about */}
        {/* projects */}
        {/* contact */}
        {/* Download CV butonu eklenebilir.
            siteye türkçe dil eklenebilir.
            navbar sticky yapılabilir.
        */}

        <div
          className={`${styles.nav} ${isNavShown ? '' : 'hiddenWithOpacity'} ${
            scrollPos < 80 ? '' : 'sticky'
          }`}
        >
          <Nav />
        </div>

        <div className={styles.hero}>
          <Hero />
        </div>
        <div className={styles.about} id="about">
          <About />
        </div>
        <div className={styles.projects} id="projects">
          <Projects />
        </div>
        <div className={styles.contact} id="contact">
          <Contact />
        </div>
      </main>
    </>
  );
}
