/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable react/jsx-no-bind */
import FilterTab from 'shared/checkboxes/filter-tab/filter-tab';
import { Icon } from 'shared/icons';

const data = [
  {
    id: '1',
    icon: (
      <FilterTab
        icon={<Icon icon="AllIcon" size="24" color="gray" />}
        id="1"
        label="Все разделы"
        isChecked
        onChange={function noRefCheck() {}}
      />
    ),
  },
  {
    id: '2',
    icon: (
      <FilterTab
        icon={<Icon icon="OphthalmologyIcon" size="24" color="gray" />}
        id="2"
        label="Офтальмология"
        onChange={function noRefCheck() {}}
      />
    ),
  },
  {
    id: '3',
    icon: (
      <FilterTab
        icon={<Icon icon="VaccinationIcon" size="24" color="gray" />}
        id="3"
        label="Вакцинация"
        onChange={function noRefCheck() {}}
      />
    ),
  },
  {
    id: '4',
    icon: (
      <FilterTab
        icon={<Icon icon="GastroenterologyIcon" size="24" color="gray" />}
        id="4"
        label="Гастроэнтерология"
        onChange={function noRefCheck() {}}
      />
    ),
  },
  {
    id: '5',
    icon: (
      <FilterTab
        icon={<Icon icon="GeneticsIcon" size="24" color="gray" />}
        id="5"
        label="Генетика"
        onChange={function noRefCheck() {}}
      />
    ),
  },
  {
    id: '6',
    icon: (
      <FilterTab
        icon={<Icon icon="GynecologyIcon" size="24" color="gray" />}
        id="6"
        label="Гинекология"
        onChange={function noRefCheck() {}}
      />
    ),
  },
  {
    id: '7',
    icon: (
      <FilterTab
        icon={<Icon icon="DiagnosticsIcon" size="24" color="gray" />}
        id="7"
        label="Диагностика"
        onChange={function noRefCheck() {}}
      />
    ),
  },
  {
    id: '8',
    icon: (
      <FilterTab
        icon={<Icon icon="CardiologyIcon" size="24" color="gray" />}
        id="8"
        label="Кардиология"
        onChange={function noRefCheck() {}}
      />
    ),
  },
  {
    id: '9',
    icon: (
      <FilterTab
        icon={<Icon icon="PediatricsIcon" size="24" color="gray" />}
        id="9"
        label="Педиатрия"
        onChange={function noRefCheck() {}}
      />
    ),
  },
  {
    id: '10',
    icon: (
      <FilterTab
        icon={<Icon icon="FirstAidIcon" size="24" color="gray" />}
        id="10"
        label="Первая помощь"
        onChange={function noRefCheck() {}}
      />
    ),
  },
];

export default data;
