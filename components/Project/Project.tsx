import Image from 'next/image';
import styles from './Project.module.css';

const Project: React.FC<{
  title: string;
  year: string;
  description: string;
  techs: string[];
  imgSrc?: string;
  link?: string;
}> = ({ title, year, description, techs, imgSrc, link }) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>
          {title} - <span>{year}</span>
        </h2>
      </div>
      <div className={styles.content}>
        {/* image varsa image */}
        <div className={styles.imgContainer}>
          {imgSrc && (
            <Image loader={() => imgSrc} src={imgSrc} alt={title} fill />
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
