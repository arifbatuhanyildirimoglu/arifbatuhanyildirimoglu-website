import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import Nav from '@/components/Nav/Nav';

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
        <div className="nav">
          <Nav />
        </div>
        <div className="hero"></div>
        <div className="about"></div>
        <div className="projects"></div>
        <div className="contact"></div>
      </main>
    </>
  );
}
