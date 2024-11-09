'use client';
import Logo  from './assets/logo.svg'
import styles from './styles.module.css';
const navItems = [
  {
    title: 'Обо мне',
  },
  {
    title: 'Навыки',
  },
  {
    title: 'Опыт',
  },
  {
    title: 'Контакты',
  },
];

export const Header = () => {
  const scrollToTop = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <header className={styles.header}>
      <div className={styles.header__wrapper}>
        <a className={styles['header__logo-link']} onClick={scrollToTop}>
          <Logo/>
        </a>
        <nav className={styles['header__navigation']}>
          <ul className={styles['header__menu-list']}>
            {navItems.map((item, idx) => (
              <li className={styles['header__menu-item']} key={idx}>
                <a className={styles['header__menu-link']}>{item.title}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};
