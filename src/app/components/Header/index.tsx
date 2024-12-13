'use client';
import Logo from './assets/logo.svg';
import styles from './styles.module.css';

const navItems = [
  {
    title: 'Обо мне',
    id: '#about-me',
  },
  {
    title: 'Стек',
    id: '#skills',
  },
  {
    title: 'Опыт работы',
    id: '#experience',
  },
  {
    title: 'Контакты',
    id: '#contacts',
  },
];
const HEADER_HEIGHT = 64;

export const Header = () => {
  const scrollToTop = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;

      window.scrollTo({
        top: elementPosition - HEADER_HEIGHT,
        behavior: 'smooth',
      });
    }
  };
  return (
    <header className={styles.header}>
      <div className={styles.header__wrapper}>
        <a className={styles['header__logo-link']} onClick={scrollToTop}>
          <Logo />
        </a>
        <nav className={styles['header__navigation']}>
          <ul className={styles['header__menu-list']}>
            {navItems.map((item, idx) => (
              <li className={styles['header__menu-item']} key={idx}>
                <a className={styles['header__menu-link']} onClick={() => scrollToSection(item.id)}>
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};
