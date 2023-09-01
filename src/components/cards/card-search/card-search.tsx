/* eslint-disable camelcase */ // TODO: for tests before installing npm package for cases transfer
import { FC } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { converMdToHTML } from 'utils/functions/convert-md-to-html';
import styles from './card-search.module.scss';

interface ICardArticlePreviewProps {
  data: {
    id: string;
    title: string;
    annotation: string;
    image: string;
  };
  extraClass?: string;
  route: string;
}

const CardSearch: FC<ICardArticlePreviewProps> = ({
  data: { id, title, annotation, image },
  extraClass,
  route,
}) => (
  <article className={classNames(styles.article, extraClass)}>
    <Link to={`${route}/${id}`}>
      <div className={styles.wrapper}>
        <img className={styles.image} src={image} alt="Превью статьи" />
        <div>
          <h2 className={styles.heading}>{title}</h2>
          <p className={classNames(styles.text)}>
            {converMdToHTML(annotation, true)}
          </p>
        </div>
      </div>
    </Link>
  </article>
);

export default CardSearch;
