import { useEffect } from 'react';
import { Header } from 'components/header';
import Footer from 'components/footer/footer';
import CardArticlePreview from 'components/cards/article-preview/article-preview';
import { useGetRootsTagsQuery } from 'services/features/tags/api';
import { useGetAllNewsQuery } from 'services/features/information-material/api';
import Button from 'shared/buttons/button/button';
import styles from './news-preview-page.module.scss';

const maxNumCardsDesktop = 5;

export default function NewsPreviewPage() {
  // Получаем список всех тегов
  const { data: tags = [] } = useGetRootsTagsQuery();
  // Находим тег новости
  const newsTag = tags.find((tag) => tag.name === 'Новости');
  // Получаем список всех новостей
  const { data } = useGetAllNewsQuery(newsTag?.pk, { skip: !newsTag });

  const news = data?.results
    .slice(0, maxNumCardsDesktop)
    .map((item) => (
      <CardArticlePreview key={item.id} data={item} type="news" />
    ));

  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'auto',
    });
  }, []);

  return (
    <>
      <Header />
      <main>
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
      </main>
      <Footer />
    </>
  );
}

// TODO: логика кнопки после сдачи макета на планшет и телефон
