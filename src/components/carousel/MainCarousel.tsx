import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import ButtonWithIcon from 'shared/buttons/button-with-icon/button-with-icon';
import Button from 'shared/buttons/button/button';
import { Icon } from 'shared/icons';
import data from './test-data/test-data';
import styles from './styles.module.scss';

function MainCarousel() {
  return (
    <section className={styles.section}>
      <Carousel
        swipeScrollTolerance={1}
        showThumbs={false}
        showIndicators={false}
        showStatus={false}
        centerMode
        centerSlidePercentage={9.3}
        width={1542}
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
        {data.map((item) => (
          <div key={item.id}>{item.icon}</div>
        ))}
      </Carousel>
      <Button
        label="Фильтры"
        model="tertiary"
        // onClick={function noRefCheck() {}}
        size="small"
        type="button"
        customIcon={<Icon color="blue" icon="FiltersIcon" />}
      />
    </section>
  );
}

export default MainCarousel;
