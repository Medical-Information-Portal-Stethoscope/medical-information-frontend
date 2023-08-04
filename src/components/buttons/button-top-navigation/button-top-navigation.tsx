import { FC, ReactElement } from 'react';
import { Icon } from 'shared/icons';
import ButtonWithIcon from 'shared/buttons/button-with-icon/button-with-icon';

export const ButtonTopNavigation: FC = (): ReactElement => (
  <ButtonWithIcon
    icon={<Icon icon="UpArrowLongIcon" color="blue" />}
    ariaLabel="Прокрутить страницу вверх к началу"
    onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })}
  />
);
