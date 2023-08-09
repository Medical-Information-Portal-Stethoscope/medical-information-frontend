/* eslint-disable react/no-array-index-key */
import { FC, useState } from 'react';
import { useAppDispatch } from 'services/app/hooks';
import FilterCheckbox from 'shared/checkboxes/filter-checkbox/filter-checkbox';
import ButtonWithIcon from 'shared/buttons/button-with-icon/button-with-icon';
import { getFilteredArticlesForModal } from 'services/features/filter/api';
import Button from 'shared/buttons/button/button';
import { Icon } from 'shared/icons';
import { TTags } from 'services/features/tags/api';
import styles from './styles.module.scss';

interface IFiltersProps {
  handleCloseClick: () => void;
  allDiseasesTags: TTags[];
  allTags: TTags[];
  newsTag: TTags | undefined;
}

export const FiltersPopup: FC<IFiltersProps> = ({
  handleCloseClick,
  allDiseasesTags,
  allTags,
  newsTag,
}) => {
  const [activeTags, setActiveTags] = useState<TTags[]>([]);

  const dispatch = useAppDispatch();

  const handleClickCheckbox = (tag: TTags) => {
    if (!activeTags.find((item) => item.pk === tag.pk)) {
      setActiveTags([...activeTags, tag]);
    } else {
      setActiveTags(activeTags.filter((item) => item.pk !== tag.pk));
    }
  };

  const clearFilters = () => {
    setActiveTags([]);
  };

  const sendFilters = () => {
    if (!activeTags.length) {
      handleCloseClick();
    } else {
      const idsArr = activeTags.map((item) => item.pk);
      const filterParamsArr = idsArr.map((item) => ['tags', item]);
      const params = new URLSearchParams(filterParamsArr);
      if (newsTag) params.set('tags_exclude', newsTag.pk);
      dispatch(getFilteredArticlesForModal(params.toString()));
      handleCloseClick();
    }
  };

  function generateFilters(filtersArr: TTags[]) {
    return filtersArr.map((item) => (
      <li key={item.pk}>
        <FilterCheckbox
          id={item.pk}
          label={item.name}
          onChange={() => handleClickCheckbox(item)}
          isChecked={!!activeTags.find(({ pk }) => pk === item.pk)}
        />
      </li>
    ));
  }

  return (
    <div className={styles.filters}>
      <ButtonWithIcon
        ariaLabel="Закрыть попап"
        icon={<Icon color="blue" icon="CloseIcon" />}
        hasBackground={false}
        onClick={handleCloseClick}
        extraClass={styles.filters__close}
      />

      <div className={styles.filters__content}>
        <h2 className={styles.filters__header}>Фильтры</h2>
        <div className={styles.filters__section}>
          <h3 className={styles.filters__name}>Заболевания</h3>
          <ul className={styles.filters__items}>
            {generateFilters(allDiseasesTags)}
          </ul>
        </div>

        <div className={styles.filters__section}>
          <h3 className={styles.filters__name}>Теги</h3>
          <ul className={styles.filters__items}>{generateFilters(allTags)}</ul>
        </div>

        <div className={styles.filters__buttons}>
          <Button
            label="Очистить всё"
            model="secondary"
            size="small"
            hasBorder={false}
            onClick={clearFilters}
            extraClass={styles.filters__button}
          />
          <Button
            label="Показать"
            model="primary"
            size="small"
            hasBorder={false}
            onClick={sendFilters}
            extraClass={styles.filters__button}
          />
        </div>
      </div>
    </div>
  );
};
