import vk from 'components/footer/test-icons/vk.svg';
import tg from 'components/footer/test-icons/telegram.svg';
import youtube from 'components/footer/test-icons/youtube.svg';

const footerContacts = [
  {
    _id: 1,
    icon: vk,
    alt: 'Иконка социальной сети ВКонтакте',
    url: '#',
    ariaLabel: 'Переход на официальную страницу портала на сайте ВКонтакте',
  },
  {
    _id: 2,
    icon: tg,
    alt: 'Иконка мессенджера Telegram',
    url: '#',
    ariaLabel: 'Переход на официальный канал портала в мессенджере Telegram',
  },
  {
    _id: 3,
    icon: youtube,
    alt: 'Иконка видеохостинга YouTube',
    url: '#',
    ariaLabel: 'Переход на официальную страницу портала на сайте YouTube',
  },
];

export default footerContacts;
