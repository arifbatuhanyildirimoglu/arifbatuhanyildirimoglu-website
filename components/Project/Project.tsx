import Image from 'next/image';
import styles from './Project.module.css';
import Link from 'next/link';

const Project: React.FC<{
  title: string;
  year: string;
  description: string;
  techs: string[];
  imgSrc?: string;
  link?: string;
  linkText?: string;
}> = ({ title, year, description, techs, imgSrc, link, linkText }) => {
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
            <Image loader={() => imgSrc} src={imgSrc} alt={title} fill />
          </div>
        )}
        <div className={styles.projectContent}>
          <div className={styles.contentField}>
            <h3>Description</h3>
            <p>{description}</p>
          </div>
          <div className={styles.contentField}>
            <h3>Technologies Used</h3>
            <ul>
              {techs.map((tech, idx) => (
                <li key={idx}>{tech}</li>
              ))}
            </ul>
          </div>
          {link && (
            <div className={styles.contentField}>
              <h3>Link</h3>
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
