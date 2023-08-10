/* eslint-disable react/no-array-index-key */
import { useState } from 'react';
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
import classNames from 'classnames';
import { iconsData } from './test-data/test-data';
import styles from './styles.module.scss';

interface IMainCarouselProps {
  type?: 'main' | 'articles';
  onChangeTab: (id: string) => void;
}

const getArrayForCarousel = (dataArray: TTags[], divider: number) => {
  const container = [];
  for (let i = 0; i < Math.ceil(dataArray.length / divider); i += 1) {
    container[i] = dataArray.slice(i * divider, i * divider + divider);
  }
  return container;
};

function MainCarousel({ type = 'main', onChangeTab }: IMainCarouselProps) {
  const [activeTags, setActiveTags] = useState<TTags[]>([]);
  const [activeTagsForClearModal, setActiveTagsForClearModal] = useState<
    TTags[] | null
  >(null);
  const [activeTab, setActiveTab] = useState<TTags | null>(null);
  const [isPopupOpened, setIsPopupOpened] = useState(false);
  const [isButtonShowPress, setIsButtonShowPress] = useState(false);

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
  const allSpecializationsTags = isSuccessSpecializations
    ? resSpecializations[0].children
    : [];

  // Получаем список тегов всех заболеваний
  const { data: resDiseases = [], isSuccess: isSuccessDiseases } =
    useGetSubtreeTagsQuery(idDiseasesTag, { skip: !diseasesTag });
  const allDiseasesTags = isSuccessDiseases ? resDiseases[0].children : [];

  // Получаем список все тегов тега "Теги"
  const { data: resTags = [], isSuccess: isSuccessTags } =
    useGetSubtreeTagsQuery(idTagsTag, { skip: !idTagsTag });
  const allTags = isSuccessTags ? resTags[0].children : [];

  const arrayOfTabsForMainPage = getArrayForCarousel(
    allSpecializationsTags,
    10
  );
  const arrayOfTabsForArticlesPage = getArrayForCarousel(
    allSpecializationsTags,
    8
  );

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

  const handleChangeTab = (tab: TTags | string) => {
    if (typeof tab === 'string') {
      onChangeTab(tab);
      setActiveTab(null);
    } else {
      onChangeTab(tab.pk);
      setActiveTab(tab);
    }
    setActiveTags([]);
    setActiveTagsForClearModal([]);
  };

  return (
    <div className={styles.wrapper}>
      <Carousel
        infiniteLoop={false}
        swipeScrollTolerance={10}
        showThumbs={false}
        showIndicators={false}
        showStatus={false}
        width={type === 'main' ? 1542 : 1262}
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
        {type === 'main'
          ? arrayOfTabsForMainPage.map((arrayOfTabs, index) => (
              <div className={styles.container_main} key={index}>
                {index === 0 && (
                  <div key={index}>
                    <FilterTab
                      icon={<Icon icon="AllIcon" size="24" color="gray" />}
                      id="0"
                      label="Все статьи"
                      isChecked
                      name="Filter"
                      onChange={() => handleChangeTab('')}
                    />
                  </div>
                )}
                {arrayOfTabs.map((tab) => (
                  <div key={tab.pk}>
                    {iconsData[tab.name] ? (
                      <FilterTab
                        icon={
                          <Icon
                            icon={iconsData[tab.name]}
                            size="24"
                            color="gray"
                          />
                        }
                        id={tab.pk}
                        label={tab.name}
                        name="Filter"
                        onChange={() => handleChangeTab(tab)}
                      />
                    ) : (
                      <FilterTab
                        icon={
                          <Icon icon="FirstAidIcon" size="24" color="gray" />
                        }
                        id={tab.pk}
                        label={tab.name}
                        name="Filter"
                        onChange={() => handleChangeTab(tab)}
                      />
                    )}
                  </div>
                ))}
              </div>
            ))
          : arrayOfTabsForArticlesPage.map((arrayOfTabs, index) => (
              <div className={styles.container_articles} key={index}>
                {index === 0 && (
                  <div key={index}>
                    <FilterTab
                      icon={<Icon icon="AllIcon" size="24" color="gray" />}
                      id="0"
                      label="Все статьи"
                      isChecked
                      name="Filter"
                      onChange={() => handleChangeTab('')}
                    />
                  </div>
                )}
                {arrayOfTabs.map((tab) => (
                  <div key={tab.pk}>
                    {iconsData[tab.name] ? (
                      <FilterTab
                        icon={
                          <Icon
                            icon={iconsData[tab.name]}
                            size="24"
                            color="gray"
                          />
                        }
                        id={tab.pk}
                        label={tab.name}
                        name="Filter"
                        onChange={() => handleChangeTab(tab.pk)}
                      />
                    ) : (
                      <FilterTab
                        icon={
                          <Icon icon="FirstAidIcon" size="24" color="gray" />
                        }
                        id={tab.pk}
                        label={tab.name}
                        name="Filter"
                        onChange={() => handleChangeTab(tab.pk)}
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
      {isPopupOpened && (
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
          />
        </OverlayingPopup>
      )}
    </div>
  );
}

export default MainCarousel;
