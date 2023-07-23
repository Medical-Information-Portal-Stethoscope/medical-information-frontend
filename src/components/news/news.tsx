import { Link } from 'react-router-dom';
import CardArticlePreview from 'components/cards/article-preview/article-preview';
import Button from 'shared/buttons/button/button';
import data from 'components/articles/test-data/test-data';
import { data as newsTestData } from './test-data/test-data';
import styles from './news.module.scss';

const maxNumNewsDesktop = 6;

// TODO: Ссылка
const news = newsTestData.slice(0, maxNumNewsDesktop).map(({ id, heading }) => (
  <li className={styles.newsItem} key={id}>
    <Link className={styles.newsLink} to="/">
      {heading}
    </Link>
  </li>
));

export default function News() {
  return (
    <section aria-label="Популярные статьи и актуальные новости">
      <div className={styles.wrapper}>
        <section>
          <h2 className={styles.heading}>Самое популярное</h2>
          <CardArticlePreview data={data[0]} type="media" />
        </section>
        <section>
          <h2 className={styles.heading}>Новости</h2>
          <ul className={styles.news}>{news}</ul>
          <Button model="tertiary" label="Показать все новости" />
          {/* TODO: Вероятно, добавить флаг Link для кнопки, как изначально и предполагалось  */}
        </section>
      </div>
    </section>
  );
}
