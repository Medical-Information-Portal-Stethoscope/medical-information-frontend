/* eslint-disable react/no-array-index-key */
import { FC, useState } from 'react';
import FilterCheckbox from 'shared/checkboxes/filter-checkbox/filter-checkbox';
import ButtonWithIcon from 'shared/buttons/button-with-icon/button-with-icon';
import Button from 'shared/buttons/button/button';
import { Icon } from 'shared/icons';

import { tags, diseases } from './data/filtersData';

import styles from './styles.module.scss';

export const FiltersPopup: FC = () => {
  const allTags = tags;
  const allDiseases = diseases;

  const [activeDiseases, setActiveDiseases] = useState<string[]>([]);
  const [activeTags, setActiveTags] = useState<string[]>([]);

  const loadMoreDisease = () => null;
  const loadMoreTags = () => null;

  const clearFilters = () => {
    setActiveDiseases([]);
    setActiveTags([]);
  };

  // for FilterCheckbox onChange={}
  // const updateActiveDiseasesFilters = () => null;
  // const updateActiveTagsFilters = () => null;

  const closeFilterPopup = () => null;
  const sendFilters = () => [activeDiseases, activeTags];

  function generateFilters(filtersArr: string[]) {
    return filtersArr.map((item, idx) => (
      <li key={idx}>
        <FilterCheckbox id={item} label={item} onChange={() => null} />
      </li>
    ));
  }

  return (
    <div className={styles.filters}>
      <ButtonWithIcon
        ariaLabel="Закрыть попап"
        icon={<Icon color="blue" icon="CloseIcon" />}
        hasBackground={false}
        onClick={closeFilterPopup}
        extraClass={styles.filters__close}
      />

      <div className={styles.filters__content}>
        <h2 className={styles.filters__header}>Фильтры</h2>
        <div className={styles.filters__section}>
          <h3 className={styles.filters__name}>Заболевания</h3>
          <ul className={styles.filters__items}>
            {generateFilters(allDiseases)}
          </ul>
          <Button
            label="Ещё"
            model="secondary"
            size="small"
            hasBorder
            onClick={loadMoreDisease}
            extraClass={styles.filters__more}
          />
        </div>

        <div className={styles.filters__section}>
          <h3 className={styles.filters__name}>Теги</h3>
          <ul className={styles.filters__items}>{generateFilters(allTags)}</ul>
          <Button
            label="Ещё"
            model="secondary"
            size="small"
            hasBorder
            onClick={loadMoreTags}
            extraClass={styles.filters__more}
          />
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
