import CardArticlePreview from 'components/cards/article-preview/article-preview';
import CardMoreContent from 'components/cards/more-content/more-content';
import { Icon } from 'shared/icons';
import data from './test-data/test-data';
import styles from './articles.module.scss';

const maxNumArticlesDesktop = 6;

export default function Articles() {
  const articles = data
    .slice(0, maxNumArticlesDesktop)
    .map((article) => (
      <CardArticlePreview
        key={article.id}
        data={article}
        type="default"
        extraClass={styles.article}
      />
    ));

  return (
    <section>
      <div className={styles.wrapper}>
        <h2 className={styles.heading}>Статьи</h2>
        <div className={styles.articles}>
          {articles}
          <CardMoreContent
            heading="Еще статьи"
            icon={<Icon icon="BigArrowIcon" color="white" />}
            extraClass={styles.article}
          />
        </div>
      </div>
    </section>
  );
}
