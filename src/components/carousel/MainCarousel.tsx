import { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import ButtonWithIcon from 'shared/buttons/button-with-icon/button-with-icon';
import { OverlayingPopup } from 'shared/overlaying-popup/overlaying-popup';
import { FiltersPopup } from 'shared/popup/filters';
import Button from 'shared/buttons/button/button';
import { Icon } from 'shared/icons';
import data, { IData } from './test-data/test-data';
import styles from './styles.module.scss';

interface IMainCarouselProps {
  type?: 'main' | 'articles';
}

const getArrayForCarousel = (dataArray: IData[], divider: number) => {
  const container = [];
  for (let i = 0; i < Math.ceil(dataArray.length / divider); i += 1) {
    container[i] = dataArray.slice(i * divider, i * divider + divider);
  }
  return container;
};

const arrayOfTabsForMainPage = getArrayForCarousel(data, 10);
const arrayOfTabsForArticlesPage = getArrayForCarousel(data, 9);

function MainCarousel({ type = 'main' }: IMainCarouselProps) {
  const [isPopupOpened, setIsPopupOpened] = useState(false);

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
        renderArrowNext={(onClickHandler) => (
          <ButtonWithIcon
            ariaLabel="Прокрутить табы влево"
            extraClass={styles.next_button}
            hasBackground
            icon={<Icon color="blue" icon="RightArrowIcon" />}
            onClick={onClickHandler}
          />
        )}
        renderArrowPrev={(onClickHandler) => (
          <ButtonWithIcon
            ariaLabel="Прокрутить табы вправо"
            extraClass={styles.prev_button}
            hasBackground
            icon={<Icon color="blue" icon="LeftArrowIcon" />}
            onClick={onClickHandler}
          />
        )}
      >
        {type === 'main'
          ? arrayOfTabsForMainPage.map((arrayOfTabs) => (
              <div className={styles.container_main}>
                {arrayOfTabs.map((tab) => (
                  <div key={tab.id}>{tab.icon}</div>
                ))}
              </div>
            ))
          : arrayOfTabsForArticlesPage.map((arrayOfTabs) => (
              <div className={styles.container_articles}>
                {arrayOfTabs.map((tab) => (
                  <div key={tab.id}>{tab.icon}</div>
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
