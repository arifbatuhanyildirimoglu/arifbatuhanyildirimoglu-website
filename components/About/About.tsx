import Image from 'next/image';
import styles from './About.module.css';

const About: React.FC = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>About Me</h2>
      <div className={styles.imageContainer}>
        <Image
          src="/images/author.jpg"
          alt="Picture of the author"
          fill
          quality={100}
        />
      </div>
      <div className={styles.explanationContainer}>
        <p className={styles.explanation}>
          I am a software engineer who is passionate about writing clean and
          efficient code. I have experience in web development and game
          development. I am always eager to learn new technologies and improve
          my skills. I am a team player and I enjoy working in a collaborative
          environment.
        </p>
      </div>
    </div>
  );
};

export default About;
