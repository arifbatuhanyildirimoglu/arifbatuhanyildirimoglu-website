import { convertToAwsLink } from '@/utils/convertToAwsLink';
import Project from '../Project/Project';
import styles from './Projects.module.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useTranslations } from 'next-intl';

const Projects: React.FC = () => {
  const t = useTranslations('Projects');

  const [imageLinks, setImageLinks] = useState<Map<string, string>>(new Map());
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const imageKeys = [
      'images/fisher-rope.jpg',
      'images/fashion-tailor.jpg',
      'images/hepsiorada.png',
      'images/personal-website.png',
    ];
    async function getLinks() {
      const query = imageKeys.map((key) => `key=${key}`).join('&');
      const res = await axios.get(`/api/getAwsImageLink?${query}`);
      const links = res.data.links;
      const newImageLinks = new Map<string, string>();
      for (let i = 0; i < imageKeys.length; i++) {
        newImageLinks.set(imageKeys[i], links[i]);
      }
      setImageLinks(newImageLinks);
      setLoading(false);
    }
    getLinks();
  }, []);

  if (loading) return <div>{t('loading')}</div>;

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{t('title')}</h2>
      <div className={styles.projectContainer}>
        <Project
          title="Personal Website"
          year="2024"
          description={t('personalWebsiteDescription')}
          techs={[
            'HTML',
            'CSS',
            'Javascript',
            'Nextjs',
            'React',
            'Nodejs',
            'AWS (S3, Cloudfront)',
          ]}
          imgSrc={imageLinks.get('images/personal-website.png')}
        />
        <Project
          title="Fashion Tailor"
          year="2023"
          description={t('fashionTailorDescription')}
          techs={['Unity', 'C#', 'Blender']}
          imgSrc={imageLinks.get('images/fashion-tailor.jpg')}
          link="https://play.google.com/store/apps/details?id=happy.game.fashiontailor"
          linkText="Fashion Tailor on Google Play Store"
        />
        <Project
          title="Fisher Rope"
          year="2022"
          description={t('fisherRopeDescription')}
          techs={['Unity', 'C#']}
          imgSrc={imageLinks.get('images/fisher-rope.jpg')}
          link="https://play.google.com/store/apps/details?id=happy.game.fisherrope&hl=en&gl=US"
          linkText="Fisher Rope on Google Play Store"
        />
        <Project
          title="hepsiorada"
          year="2020"
          description={t('hepsioradaDescription')}
          techs={['Java', 'JavaFX', 'CSS', 'SceneBuilder', 'SQLite']}
          imgSrc={imageLinks.get('images/hepsiorada.png')}
        />
      </div>
    </div>
  );
};

export default Projects;
