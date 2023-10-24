import { useNavigate } from 'react-router-dom';
import { useWindowDimensions } from 'hooks/useWindowDimensions';
import classNames from 'classnames';
import CardArticlePreview from 'components/cards/article-preview/article-preview';
import { Icon } from 'shared/icons';
import Button from 'shared/buttons/button/button';
import routes from 'utils/routes';
import testArticles from 'utils/data/tests/articles';
import { tabletAlbumOrientation } from 'utils/constants';
import styles from './favorites.module.scss';

export const FavoritesPage = () => {
  const navigate = useNavigate();

  const isSmallScreenDevice = useWindowDimensions() <= tabletAlbumOrientation;

  const emptyGallery = (
    <>
      <div className={styles.info}>
        <p>Сейчас у вас ничего нет в &laquo;Избранном&raquo;.</p>
        <p>
          Чтобы добавить понравившуюся статью в&nbsp;&laquo;Избранное&raquo;,
          отметьте её&nbsp;закладкой. Это&nbsp;можно сделать как
          со&nbsp;страницы статьи, так и&nbsp;из&nbsp;ленты статей.
        </p>
      </div>
      <div className={styles.tip}>
        <div className={styles.bookmarkIcon}>
          <Icon icon="BookmarkIcon" size="32" color="gray" />
        </div>
        <Icon icon="RightArrowLongIcon" color="gray" />
        <div className={styles.bookmarkIcon}>
          <Icon icon="BookmarkIcon" size="32" color="gray" />
        </div>
      </div>
      <Button
        extraClass={styles.button}
        label="Перейти к статьям"
        size={isSmallScreenDevice ? 'small' : 'medium'}
        onClick={() => navigate(routes.articles.route)}
      />
    </>
  );

  const cards = testArticles.map((card) => (
    <CardArticlePreview
      key={card.id}
      data={{
        id: card.id,
        title: card.title,
        annotation: card.annotation,
        text: card.text,
        image: card.image,
        created_at: card.created_at,
        author: card.author,
        views_count: card.views_count,
      }}
      type="favorites"
      route="test"
    />
  ));

  const isNotEmptyGallery = !!Object.keys(cards).length;

  return (
    <section
      className={classNames(styles.section, {
        [styles.emptyGallery]: !isNotEmptyGallery,
      })}
    >
      <h3
        className={classNames(styles.heading, {
          [styles.headingEmptyGallery]: isNotEmptyGallery,
        })}
      >
        Избранное
      </h3>
      {(!isNotEmptyGallery && <div className={styles.gallery}>{cards}</div>) ||
        emptyGallery}
      {/* TODO: добавить кнопку загрузки новых статей (после окончания логики избранных) */}
    </section>
  );
};
