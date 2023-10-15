/* eslint-disable react/no-array-index-key */
import { useEffect, useMemo, useRef, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import ButtonWithIcon from 'shared/buttons/button-with-icon/button-with-icon';
import { OverlayingPopup } from 'shared/overlaying-popup/overlaying-popup';
import { FiltersPopup } from 'shared/popup/filters';
import Button from 'shared/buttons/button/button';
import { Icon } from 'shared/icons';
import {
  TTags,
  useGetRootsTagsQuery,
  useGetSubtreeTagsQuery,
} from 'services/features/tags/api';
import FilterTab from 'shared/checkboxes/filter-tab/filter-tab';
import { getFilteredArticlesForModal } from 'services/features/filter/api';
import { useAppDispatch } from 'services/app/hooks';
import { getFirstPageArticles } from 'services/features/information-material/slice';
import { tabletCarouselWidth } from 'utils/constants';
import classNames from 'classnames';
import { useMount } from 'hooks/useMount';
import { iconsData } from './data/data';
import styles from './styles.module.scss';

interface IMainCarouselProps {
  onChangeTab: (id: string) => void;
}

const getArrayForCarousel = (dataArray: TTags[], divider: number) => {
  const container = [];
  for (let i = 0; i < Math.ceil(dataArray.length / divider); i += 1) {
    if (i === 0) {
      container[0] = dataArray.slice(0, divider - 1);
    } else if (i === Math.ceil(dataArray.length / divider) - 1) {
      container[i] = dataArray.slice(i * divider - 1, i * divider + divider);
    } else {
      container[i] = dataArray.slice(
        i * divider - 1,
        i * divider + divider - 1
      );
    }
  }
  return container;
};

function MainCarousel({ onChangeTab }: IMainCarouselProps) {
  const [activeTags, setActiveTags] = useState<TTags[]>([]);
  const [activeTagsForClearModal, setActiveTagsForClearModal] = useState<
    TTags[] | null
  >(null);
  const [activeTab, setActiveTab] = useState<TTags | null>(null);
  const [isPopupOpened, setIsPopupOpened] = useState(false);
  const [isButtonShowPress, setIsButtonShowPress] = useState(false);
  const dispatch = useAppDispatch();
  const { mounted } = useMount({ isOpened: isPopupOpened });
  const ref = useRef<any>(null);
  const [carouselWidth, setCarouselWidth] = useState(0);
  const [arrayOfTabs, setArrayOfTabs] = useState<TTags[][]>([]);

  useEffect(() => {
    setCarouselWidth(ref?.current?.offsetWidth);
    const listener = () => setCarouselWidth(ref?.current?.offsetWidth);
    window.addEventListener('resize', listener);

    return () => window.removeEventListener('resize', listener);
  }, []);

  // Получаем список всех корневых тегов
  const { data: tags = [] } = useGetRootsTagsQuery();
  // Находим тег специализации
  const specializationsTag = tags.find((tag) => tag.name === 'Специализации');
  const idSpecializationsTag = specializationsTag ? specializationsTag.pk : '';
  // Находим тег заболевания
  const diseasesTag = tags.find((tag) => tag.name === 'Заболевания');
  const idDiseasesTag = diseasesTag ? diseasesTag.pk : '';
  // Находим тег "Теги"
  const tagsTag = tags.find((tag) => tag.name === 'Теги');
  const idTagsTag = tagsTag ? tagsTag.pk : '';
  // Находим тег Новости
  const newsTag = tags.find((tag) => tag.name === 'Новости');

  // Получаем список тегов всех специализаций
  const { data: resSpecializations = [], isSuccess: isSuccessSpecializations } =
    useGetSubtreeTagsQuery(idSpecializationsTag, { skip: !specializationsTag });
  const allSpecializationsTags = useMemo<TTags[]>(
    () =>
      // eslint-disable-next-line no-unused-expressions
      isSuccessSpecializations ? resSpecializations[0].children : [],
    [isSuccessSpecializations, resSpecializations]
  );

  // Получаем список тегов всех заболеваний
  const { data: resDiseases = [], isSuccess: isSuccessDiseases } =
    useGetSubtreeTagsQuery(idDiseasesTag, { skip: !diseasesTag });
  const allDiseasesTags = isSuccessDiseases ? resDiseases[0].children : [];

  // Получаем список все тегов тега "Теги"
  const { data: resTags = [], isSuccess: isSuccessTags } =
    useGetSubtreeTagsQuery(idTagsTag, { skip: !idTagsTag });
  const allTags = isSuccessTags ? resTags[0].children : [];

  useEffect(() => {
    if (allSpecializationsTags.length && carouselWidth) {
      const tabWidth = carouselWidth > tabletCarouselWidth ? 190 : 110;
      const countOfTabs = Math.floor(carouselWidth / tabWidth);
      setArrayOfTabs(getArrayForCarousel(allSpecializationsTags, countOfTabs));
    }
  }, [allSpecializationsTags, carouselWidth]);

  const handleTogglePopup = () => {
    setIsPopupOpened(!isPopupOpened);
  };

  const handlePopupClose = () => {
    if (!isButtonShowPress) {
      setActiveTags([]);
    } else if (activeTagsForClearModal) {
      setActiveTags(activeTagsForClearModal);
    }
    handleTogglePopup();
  };

  const handleChangeTab = async (tab: TTags | string) => {
    if (typeof tab === 'string' && !activeTags.length) {
      onChangeTab(tab);
      setActiveTab(null);
    } else if (typeof tab !== 'string' && activeTags.length) {
      setActiveTab(tab);
      const idsArr = activeTags.map((item) => item.pk);
      idsArr.push(tab.pk);
      const filterParamsArr = idsArr.map((item) => ['tags', item]);
      const params = new URLSearchParams(filterParamsArr);
      if (newsTag) params.set('tags_exclude', newsTag.pk);
      const res = await dispatch(
        getFilteredArticlesForModal(params.toString())
      );
      dispatch(getFirstPageArticles(res.payload));
      setActiveTagsForClearModal(activeTags);
    } else if (typeof tab !== 'string') {
      onChangeTab(tab.pk);
      setActiveTab(tab);
    } else if (typeof tab === 'string' && activeTags.length) {
      setActiveTab(null);
      const idsArr = activeTags.map((item) => item.pk);
      const filterParamsArr = idsArr.map((item) => ['tags', item]);
      const params = new URLSearchParams(filterParamsArr);
      if (newsTag) params.set('tags_exclude', newsTag.pk);
      const res = await dispatch(
        getFilteredArticlesForModal(params.toString())
      );
      dispatch(getFirstPageArticles(res.payload));
      setActiveTagsForClearModal(activeTags);
    }
  };

  return (
    <div className={styles.wrapper} ref={ref}>
      <Carousel
        infiniteLoop={false}
        swipeScrollTolerance={10}
        showThumbs={false}
        showIndicators={false}
        showStatus={false}
        className={styles.carousel}
        renderArrowNext={(onClickHandler, hasNext) => (
          <ButtonWithIcon
            ariaLabel="Прокрутить табы влево"
            extraClass={
              hasNext
                ? styles.next_button
                : classNames(styles.next_button, styles.next_button_disabled)
            }
            isDisabled={!hasNext}
            hasBackground
            icon={<Icon color="blue" icon="RightArrowIcon" />}
            onClick={onClickHandler}
          />
        )}
        renderArrowPrev={(onClickHandler, hasNext) => (
          <ButtonWithIcon
            ariaLabel="Прокрутить табы вправо"
            extraClass={
              hasNext
                ? styles.prev_button
                : classNames(styles.prev_button, styles.prev_button_disabled)
            }
            hasBackground
            isDisabled={!hasNext}
            icon={<Icon color="blue" icon="LeftArrowIcon" />}
            onClick={onClickHandler}
          />
        )}
      >
        {arrayOfTabs.map((array, index) => (
          <div className={styles.container_main} key={index}>
            {index === 0 && (
              <div>
                <FilterTab
                  icon={<Icon icon="AllIcon" size="24" color="gray" />}
                  id="Все статьи"
                  label="Все статьи"
                  isChecked
                  name="Filter"
                  onChange={() => handleChangeTab('')}
                />
              </div>
            )}
            {array.map((tab) => (
              <div key={tab.pk}>
                {iconsData[tab.name] ? (
                  <FilterTab
                    icon={
                      <Icon icon={iconsData[tab.name]} size="24" color="gray" />
                    }
                    id={tab.name}
                    label={tab.name}
                    name="Filter"
                    onChange={() => handleChangeTab(tab)}
                  />
                ) : (
                  <FilterTab
                    icon={<Icon icon="FirstAidIcon" size="24" color="gray" />}
                    id={tab.name}
                    label={tab.name}
                    name="Filter"
                    onChange={() => handleChangeTab(tab)}
                  />
                )}
              </div>
            ))}
          </div>
        ))}
      </Carousel>
      <div className={styles.button_filter_wrapper}>
        <Button
          label="Фильтры"
          model="tertiary"
          onClick={handleTogglePopup}
          size="small"
          type="button"
          customIcon={<Icon color="blue" icon="FiltersIcon" />}
        />
        {activeTags.length > 0 && (
          <div className={styles.counter}>{activeTags.length}</div>
        )}
      </div>
      {mounted && (
        <OverlayingPopup isOpened={isPopupOpened} onClose={handlePopupClose}>
          <FiltersPopup
            handleCloseClick={handleTogglePopup}
            allDiseasesTags={allDiseasesTags}
            allTags={allTags}
            newsTag={newsTag}
            activeTags={activeTags}
            setActiveTags={setActiveTags}
            isButtonShowPress={isButtonShowPress}
            setIsButtonShowPress={setIsButtonShowPress}
            activeTagsForClearModal={activeTagsForClearModal}
            setActiveTagsForClearModal={setActiveTagsForClearModal}
            activeTab={activeTab}
            isOpened={isPopupOpened}
          />
        </OverlayingPopup>
      )}
    </div>
  );
}

export default MainCarousel;
