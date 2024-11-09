'use client';
import styles from './styles.module.css';
import { HeroBlock } from './HeroBlock';
import { Skils } from './Skils';
import { Experience } from './Experience';
import { AboutMe } from './AboutMe';

export const Main = () => {
  return (
    <div className={styles['main__wrapper']}>
      <HeroBlock />
      <AboutMe />
      <Skils />
      <Experience />
    </div>
  );
};
