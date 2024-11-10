import Image from 'next/image';
import styles from './styles.module.css';
import ReactLogo from './assets/react.png';
import TypeScriptLogo from './assets/TypeScript.png';
import JavaScriptLogo from './assets/JavaScript.png';
import NextLogo from './assets/nextjs-icon.png';
import ReduxLogo from './assets/Redux.png';
import HTMLLogo from './assets/HTML5.png';
import CSSLogo from './assets/CSS3.png';
import SassLogo from './assets/Sass.png';
import WebpackLogo from './assets/Webpack.png';
import ViteLogo from './assets/Vite.js.png';
import MaterialLogo from './assets/Material_UI.png';
import GitLogo from './assets/Git.png';
import GitLabLogo from './assets/GitLab.png';

const skillCards = [
  {
    title: 'React',
    img: ReactLogo,
  },
  {
    title: 'TypeScript',
    img: TypeScriptLogo,
  },
  {
    title: 'JavaScript',
    img: JavaScriptLogo,
  },
  {
    title: 'Next',
    img: NextLogo,
  },
  {
    title: 'Redux',
    img: ReduxLogo,
  },
  {
    title: 'HTML',
    img: HTMLLogo,
  },
  {
    title: 'CSS',
    img: CSSLogo,
  },
  {
    title: 'Sass',
    img: SassLogo,
  },
  {
    title: 'Webpack',
    img: WebpackLogo,
  },
  {
    title: 'Vite',
    img: ViteLogo,
  },
  {
    title: 'Material UI',
    img: MaterialLogo,
  },
  {
    title: 'Git',
    img: GitLogo,
  },
  {
    title: 'Gitlab',
    img: GitLabLogo,
  },
];

export const Skills = () => {
  return (
    <section className={styles['skills']} id="skills">
      <div className={styles['skills__text-block']}>
        <h3 className={styles['skills__title']}>Стек</h3>
        <p className={styles['skills__text']}>
          <span className={styles['skills__text-highlight']}>Хард-скиллов</span> и&nbsp;описание того, что я&nbsp;
          <span className={styles['skills__text-highlight']}>человек</span> без капчи
        </p>
      </div>
      <ul className={styles['skills__list']}>
        {skillCards.map((skill, idx) => (
          <li className={styles['skills__list-item']} key={idx}>
            <figure className={styles['skills__list-card']}>
              <Image
                className={styles['skills__list-image']}
                src={skill.img}
                alt={skill.title}
                width={136}
                height={136}
              />
              <figcaption className={styles['skills__list-title']}>{skill.title}</figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </section>
  );
};
