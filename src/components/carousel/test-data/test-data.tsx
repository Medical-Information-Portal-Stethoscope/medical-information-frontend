/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable react/jsx-no-bind */
// import FilterTab from 'shared/checkboxes/filter-tab/filter-tab';
// import { Icon } from 'shared/icons';

export interface IData {
  pk: string;
  name: string;
}

// const data: IData[] = [
//   {
//     id: '1',
//     name: 'Все разделы',
//     icon: (
//       <FilterTab
//         icon={<Icon icon="AllIcon" size="24" color="gray" />}
//         id="1"
//         label="Все разделы"
//         isChecked
//         onChange={function noRefCheck() {}}
//       />
//     ),
//   },
//   {
//     id: '2',
//     name: 'Офтальмология',
//     icon: (
//       <FilterTab
//         icon={<Icon icon="OphthalmologyIcon" size="24" color="gray" />}
//         id="2"
//         label="Офтальмология"
//         onChange={function noRefCheck() {}}
//       />
//     ),
//   },
//   {
//     id: '3',
//     name: 'Вакцинация',
//     icon: (
//       <FilterTab
//         icon={<Icon icon="VaccinationIcon" size="24" color="gray" />}
//         id="3"
//         label="Вакцинация"
//         onChange={function noRefCheck() {}}
//       />
//     ),
//   },
//   {
//     id: '4',
//     name: 'Гастроэнтерология',
//     icon: (
//       <FilterTab
//         icon={<Icon icon="GastroenterologyIcon" size="24" color="gray" />}
//         id="4"
//         label="Гастроэнтерология"
//         onChange={function noRefCheck() {}}
//       />
//     ),
//   },
//   {
//     id: '5',
//     name: 'Генетика',
//     icon: (
//       <FilterTab
//         icon={<Icon icon="GeneticsIcon" size="24" color="gray" />}
//         id="5"
//         label="Генетика"
//         onChange={function noRefCheck() {}}
//       />
//     ),
//   },
//   {
//     id: '6',
//     name: 'Гинекология',
//     icon: (
//       <FilterTab
//         icon={<Icon icon="GynecologyIcon" size="24" color="gray" />}
//         id="6"
//         label="Гинекология"
//         onChange={function noRefCheck() {}}
//       />
//     ),
//   },
//   {
//     id: '7',
//     name: 'Диагностика',
//     icon: (
//       <FilterTab
//         icon={<Icon icon="DiagnosticsIcon" size="24" color="gray" />}
//         id="7"
//         label="Диагностика"
//         onChange={function noRefCheck() {}}
//       />
//     ),
//   },
//   {
//     id: '8',
//     name: 'Кардиология',
//     icon: (
//       <FilterTab
//         icon={<Icon icon="CardiologyIcon" size="24" color="gray" />}
//         id="8"
//         label="Кардиология"
//         onChange={function noRefCheck() {}}
//       />
//     ),
//   },
//   {
//     id: '9',
//     name: 'Педиатрия',
//     icon: (
//       <FilterTab
//         icon={<Icon icon="PediatricsIcon" size="24" color="gray" />}
//         id="9"
//         label="Педиатрия"
//         onChange={function noRefCheck() {}}
//       />
//     ),
//   },
//   {
//     id: '10',
//     name: 'Первая помощь',
//     icon: (
//       <FilterTab
//         icon={<Icon icon="FirstAidIcon" size="24" color="gray" />}
//         id="10"
//         label="Первая помощь"
//         onChange={function noRefCheck() {}}
//       />
//     ),
//   },
//   {
//     id: '11',
//     name: 'Психотерапия',
//     icon: (
//       <FilterTab
//         icon={<Icon icon="PsychotherapyIcon" size="24" color="gray" />}
//         id="11"
//         label="Психотерапия"
//         onChange={function noRefCheck() {}}
//       />
//     ),
//   },
//   {
//     id: '12',
//     name: 'Оториноларингология',
//     icon: (
//       <FilterTab
//         icon={<Icon icon="OtorhinolaryngologyIcon" size="24" color="gray" />}
//         id="12"
//         label="Оториноларингология"
//         onChange={function noRefCheck() {}}
//       />
//     ),
//   },
//   {
//     id: '13',
//     name: 'Стоматология',
//     icon: (
//       <FilterTab
//         icon={<Icon icon="DentistryIcon" size="24" color="gray" />}
//         id="13"
//         label="Стоматология"
//         onChange={function noRefCheck() {}}
//       />
//     ),
//   },
//   {
//     id: '14',
//     name: 'Урология',
//     icon: (
//       <FilterTab
//         icon={<Icon icon="UrologyIcon" size="24" color="gray" />}
//         id="14"
//         label="Урология"
//         onChange={function noRefCheck() {}}
//       />
//     ),
//   },
// ];

type TIcons = {
  [key: string]:
    | 'OphthalmologyIcon'
    | 'VaccinationIcon'
    | 'GastroenterologyIcon'
    | 'GeneticsIcon'
    | 'GynecologyIcon'
    | 'DiagnosticsIcon'
    | 'CardiologyIcon'
    | 'PediatricsIcon'
    | 'PsychotherapyIcon'
    | 'OtorhinolaryngologyIcon'
    | 'DentistryIcon'
    | 'UrologyIcon';
};

export const iconsData: TIcons = {
  Офтальмология: 'OphthalmologyIcon',
  Вакцинация: 'VaccinationIcon',
  Гастроэнтерология: 'GastroenterologyIcon',
  Генетика: 'GeneticsIcon',
  Гинекология: 'GynecologyIcon',
  Диагностика: 'DiagnosticsIcon',
  Кардиология: 'CardiologyIcon',
  Педиатрия: 'PediatricsIcon',
  Психотерапия: 'PsychotherapyIcon',
  Оториноларингология: 'OtorhinolaryngologyIcon',
  Стоматология: 'DentistryIcon',
  Урология: 'UrologyIcon',
};

// export default data;
