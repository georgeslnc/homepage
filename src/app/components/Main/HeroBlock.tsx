import styles from './styles.module.css';

export const HeroBlock = () => {
  return (
    <section className={styles['hero-block']} id="hero-block">
      <h1 className={styles['hero-block__title']}>
        Привет!
        <br />Я - Сланский Георгий.
      </h1>
      <p className={styles['hero-block__text']}>
        Я&nbsp;могу намного <span className={styles['hero-block__text-highlight']}>лучше</span>, чем эта страница.
      </p>
      <button className={styles['hero-block__button']}>Странно, покажи</button>
    </section>
  );
};
