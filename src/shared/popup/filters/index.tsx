/* eslint-disable react/no-array-index-key */
import { FC, useRef, useState } from 'react';
import FilterCheckbox from 'shared/checkboxes/filter-checkbox/filter-checkbox';
import ButtonWithIcon from 'shared/buttons/button-with-icon/button-with-icon';
import Button from 'shared/buttons/button/button';
import { Icon } from 'shared/icons';
import styles from './styles.module.scss';

interface IFiltersProps {
  handleCloseClick: () => void;
  allDiseasesTags: { pk: string; name: string }[];
  allTags: { pk: string; name: string }[];
}

export const FiltersPopup: FC<IFiltersProps> = ({
  handleCloseClick,
  allDiseasesTags,
  allTags,
}) => {
  const [activeTags, setActiveTags] = useState<{ pk: string; name: string }[]>(
    []
  );
  const ref = useRef(null);
  console.log('ref:', ref);

  const clearFilters = () => {
    setActiveTags([]);
  };

  const sendFilters = () => [activeTags];

  function generateFilters(filtersArr: { pk: string; name: string }[]) {
    return filtersArr.map((item) => (
      <li key={item.pk}>
        <FilterCheckbox
          id={item.pk}
          label={item.name}
          onChange={() => null}
          ref={ref}
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
