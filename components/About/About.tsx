import Image from 'next/image';
import styles from './About.module.css';
import { useTranslations } from 'next-intl';

const About: React.FC = () => {
  const t = useTranslations('About');

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{t('title')}</h2>
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
          {t('explanation')}
        </p>
      </div>
    </div>
  );
};

export default About;
