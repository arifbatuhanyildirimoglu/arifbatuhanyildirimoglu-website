import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import Nav from '@/components/Nav/Nav';
import Hero from '@/components/Hero/Hero';
import axios from 'axios';
import { InferGetServerSidePropsType } from 'next';
import About from '@/components/About/About';
import Projects from '@/components/Projects/Projects';

export default function Home() {
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
        <div className={styles.nav}>
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
        <div className={styles.contact} id="contact"></div>
      </main>
    </>
  );
}
