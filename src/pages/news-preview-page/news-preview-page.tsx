import CardArticlePreview from 'components/cards/article-preview/article-preview';
import Button from 'shared/buttons/button/button';
import data from 'components/articles/test-data/test-data';
import styles from './news-preview-page.module.scss';

const maxNumCardsDesktop = 5;

const news = data
  .slice(0, maxNumCardsDesktop)
  .map((item) => <CardArticlePreview key={item.id} data={item} type="news" />);

export default function NewsPreviewPage() {
  return (
    <section>
      <div className={styles.wrapper}>
        <h2 className={styles.heading}>Новости</h2>
        <div className={styles.gallery}>
          <div className={styles.news}>{news}</div>
          <Button
            label="Еще новости"
            model="secondary"
            size="small"
            hasBorder
          />
        </div>
      </div>
    </section>
  );
}

// TODO: логика кнопки после сдачи макета на планшет и телефон
