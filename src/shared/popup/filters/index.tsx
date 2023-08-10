/* eslint-disable react/no-array-index-key */
import React, { FC } from 'react';
import { useAppDispatch } from 'services/app/hooks';
import FilterCheckbox from 'shared/checkboxes/filter-checkbox/filter-checkbox';
import ButtonWithIcon from 'shared/buttons/button-with-icon/button-with-icon';
import { getFilteredArticlesForModal } from 'services/features/filter/api';
import { getFirstPageArticles } from 'services/features/information-material/slice';
import Button from 'shared/buttons/button/button';
import { Icon } from 'shared/icons';
import { TTags } from 'services/features/tags/api';
import styles from './styles.module.scss';

interface IFiltersProps {
  handleCloseClick: () => void;
  allDiseasesTags: TTags[];
  allTags: TTags[];
  newsTag: TTags | undefined;
  activeTags: TTags[];
  setActiveTags: React.Dispatch<React.SetStateAction<TTags[]>>;
  isButtonShowPress: boolean;
  setIsButtonShowPress: React.Dispatch<React.SetStateAction<boolean>>;
  activeTagsForClearModal: TTags[] | null;
  setActiveTagsForClearModal: React.Dispatch<
    React.SetStateAction<TTags[] | null>
  >;
  activeTab: TTags | null;
}

export const FiltersPopup: FC<IFiltersProps> = ({
  handleCloseClick,
  allDiseasesTags,
  allTags,
  newsTag,
  activeTags,
  setActiveTags,
  isButtonShowPress,
  setIsButtonShowPress,
  activeTagsForClearModal,
  setActiveTagsForClearModal,
  activeTab,
}) => {
  const dispatch = useAppDispatch();

  const handleClickCheckbox = (tag: TTags) => {
    if (!activeTags.find((item) => item.pk === tag.pk)) {
      setActiveTags([...activeTags, tag]);
    } else {
      setActiveTags(activeTags.filter((item) => item.pk !== tag.pk));
    }
  };

  const clearFilters = () => {
    setActiveTagsForClearModal(activeTags);
    setActiveTags([]);
  };

  const sendFilters = async () => {
    if (!activeTags.length) {
      const params = new URLSearchParams();
      if (newsTag) params.set('tags_exclude', newsTag.pk);
      if (activeTab) params.set('tags', activeTab.pk);
      const res = await dispatch(
        getFilteredArticlesForModal(params.toString())
      );
      dispatch(getFirstPageArticles(res.payload));
      handleCloseClick();
      setIsButtonShowPress(true);
      setActiveTagsForClearModal(null);
      setActiveTagsForClearModal(activeTags);
    } else {
      const idsArr = activeTags.map((item) => item.pk);
      if (activeTab) idsArr.push(activeTab.pk);
      const filterParamsArr = idsArr.map((item) => ['tags', item]);
      const params = new URLSearchParams(filterParamsArr);
      if (newsTag) params.set('tags_exclude', newsTag.pk);
      const res = await dispatch(
        getFilteredArticlesForModal(params.toString())
      );
      dispatch(getFirstPageArticles(res.payload));
      handleCloseClick();
      setIsButtonShowPress(true);
      setActiveTagsForClearModal(activeTags);
    }
  };

  const handlePopupClose = () => {
    if (!isButtonShowPress) {
      setActiveTags([]);
    } else if (activeTagsForClearModal) {
      setActiveTags(activeTagsForClearModal);
    }
    handleCloseClick();
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
        onClick={handlePopupClose}
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
