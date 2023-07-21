import styles from './styles.module.scss';
import { Weather } from '../icons/Weather';
import { Location } from '../icons/Location';

import { WidgetType } from '../types/widget';

import { getDatetimeData } from '../utils/getDatetimeData';

export const Widget = ({ city, deg }: WidgetType) => {
  const [date, time] = getDatetimeData();
  return (
    <div className={styles.widget}>
      <div className={styles.widget__date}>
        <p className={styles.widget__currentday}>{date}</p>
        <p className={styles.widget__currenttime}>{time}</p>
      </div>
      <div className={styles.widget__info}>
        <p className={styles.widget__temperature}>
          <Weather /> {deg}&deg;
        </p>
        <p className={styles.widget__city}>
          {' '}
          <Location /> {city}
        </p>
      </div>
    </div>
  );
};
