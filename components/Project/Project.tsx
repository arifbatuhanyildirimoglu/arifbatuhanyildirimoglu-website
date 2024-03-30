import Image from 'next/image';
import styles from './Project.module.css';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

const Project: React.FC<{
  title: string;
  year: string;
  description: string;
  techs: string[];
  imgSrc?: string;
  link?: string;
  linkText?: string;
}> = ({ title, year, description, techs, imgSrc, link, linkText }) => {
  const t = useTranslations('Project');

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>
          {title} - <span>{year}</span>
        </h2>
      </div>
      <div className={styles.body}>
        {/* image varsa image */}
        {imgSrc && (
          <div className={styles.imgContainer}>
            <Image
              loader={() => imgSrc}
              src={imgSrc}
              alt={title}
              sizes="100%"
              fill
            />
          </div>
        )}
        <div className={styles.projectContent}>
          <div className={styles.contentField}>
            <h3>{t('description')}</h3>
            <p>{description}</p>
          </div>
          <div className={styles.contentField}>
            <h3>{t('tech')}</h3>
            <ul>
              {techs.map((tech, idx) => (
                <li key={idx}>{tech}</li>
              ))}
            </ul>
          </div>
          {link && (
            <div className={styles.contentField}>
              <h3>{t('link')}</h3>
              <Link href={link} target="_blank">
                {linkText}
              </Link>
            </div>
          )}
        </div>
        {/* Project description */}
        {/* technologies used */}
        {/* link to project */}
      </div>
    </div>
  );
};

export default Project;
