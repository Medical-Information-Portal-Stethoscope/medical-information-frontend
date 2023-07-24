import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import ButtonWithIcon from 'shared/buttons/button-with-icon/button-with-icon';
import Button from 'shared/buttons/button/button';
import { Icon } from 'shared/icons';
import data from './test-data/test-data';
import styles from './styles.module.scss';

interface IMainCarouselProps {
  type?: 'main' | 'articles';
}

function MainCarousel({ type = 'main' }: IMainCarouselProps) {
  const dataForArticles = data.slice(0, -1);

  return (
    <div className={styles.wrapper}>
      <Carousel
        swipeScrollTolerance={1}
        showThumbs={false}
        showIndicators={false}
        showStatus={false}
        centerMode
        centerSlidePercentage={type === 'main' ? 9.3 : 6}
        width={type === 'main' ? 1542 : 1262}
        className={styles.carousel}
        renderArrowPrev={(onClickHandler) => (
          <ButtonWithIcon
            ariaLabel="Отправить письмо"
            extraClass={styles.prev_button}
            hasBackground
            icon={<Icon color="blue" icon="RightArrowIcon" />}
            onClick={onClickHandler}
          />
        )}
        renderArrowNext={(onClickHandler) => (
          <ButtonWithIcon
            ariaLabel="Отправить письмо"
            extraClass={styles.next_button}
            hasBackground
            icon={<Icon color="blue" icon="LeftArrowIcon" />}
            onClick={onClickHandler}
          />
        )}
      >
        {type === 'main'
          ? data.map((item) => <div key={item.id}>{item.icon}</div>)
          : dataForArticles.map((item) => <div key={item.id}>{item.icon}</div>)}
      </Carousel>
      <Button
        label="Фильтры"
        model="tertiary"
        // onClick={function noRefCheck() {}}
        size="small"
        type="button"
        customIcon={<Icon color="blue" icon="FiltersIcon" />}
      />
    </div>
  );
}

export default MainCarousel;
