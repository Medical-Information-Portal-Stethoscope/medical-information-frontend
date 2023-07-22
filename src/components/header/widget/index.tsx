import { CloudDrizzelIcon } from 'shared/icons/cloud-drizzel-icon';
import { LocationPinIcon } from 'shared/icons/location-pin-icon';
import { WidgetType } from '../types/widget';
import { getDatetimeData } from '../utils/getDatetimeData';

import styles from './styles.module.scss';

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
          <CloudDrizzelIcon color="blue" size="32" />
          {deg}&deg;
        </p>
        <p className={styles.widget__city}>
          {' '}
          <LocationPinIcon color="blue" size="16" />
          {city}
        </p>
      </div>
    </div>
  );
};
