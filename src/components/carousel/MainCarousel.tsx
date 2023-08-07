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

interface IData {
  pk: string;
  name: string;
}

const getArrayForCarousel = (dataArray: IData[], divider: number) => {
  const container = [];
  for (let i = 0; i < Math.ceil(dataArray.length / divider); i += 1) {
    container[i] = dataArray.slice(i * divider, i * divider + divider);
  }
  return container;
};

function MainCarousel({ type = 'main', onChangeTab }: IMainCarouselProps) {
  const [isPopupOpened, setIsPopupOpened] = useState(false);
  // Получаем список всех корневых тегов
  const { data: tags = [] } = useGetRootsTagsQuery();
  // Находим тег специализации
  const specializationsTag = tags.find((tag) => tag.name === 'Специализации');
  const idSpecializationsTag = specializationsTag ? specializationsTag.pk : '';

  // Получаем список тегов всех специализаций
  const { data: res = [], isSuccess } = useGetSubtreeTagsQuery(
    idSpecializationsTag,
    { skip: !specializationsTag }
  );
  const allSpecializationsTags = isSuccess ? res[0].children : [];

  const arrayOfTabsForMainPage = getArrayForCarousel(
    allSpecializationsTags,
    10
  );
  const arrayOfTabsForArticlesPage = getArrayForCarousel(
    allSpecializationsTags,
    8
  );

  const handleTogglePopup = () => setIsPopupOpened(!isPopupOpened);

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
                      onChange={() => onChangeTab('')}
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
                        onChange={() => onChangeTab(tab.pk)}
                      />
                    ) : (
                      <FilterTab
                        icon={
                          <Icon icon="FirstAidIcon" size="24" color="gray" />
                        }
                        id={tab.pk}
                        label={tab.name}
                        name="Filter"
                        onChange={() => onChangeTab(tab.pk)}
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
                      onChange={() => onChangeTab('')}
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
                        onChange={() => onChangeTab(tab.pk)}
                      />
                    ) : (
                      <FilterTab
                        icon={
                          <Icon icon="FirstAidIcon" size="24" color="gray" />
                        }
                        id={tab.pk}
                        label={tab.name}
                        name="Filter"
                        onChange={() => onChangeTab(tab.pk)}
                      />
                    )}
                  </div>
                ))}
              </div>
            ))}
      </Carousel>
      <Button
        label="Фильтры"
        model="tertiary"
        onClick={handleTogglePopup}
        size="small"
        type="button"
        customIcon={<Icon color="blue" icon="FiltersIcon" />}
      />
      {isPopupOpened && (
        <OverlayingPopup isOpened={isPopupOpened} onClose={handleTogglePopup}>
          <FiltersPopup handleCloseClick={handleTogglePopup} />
        </OverlayingPopup>
      )}
    </div>
  );
}

export default MainCarousel;
