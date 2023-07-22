import privacyPolicy from 'assets/documents/privacy-policy.pdf';
import termsOfUse from 'assets/documents/terms-of-use.pdf';

const footerLinks = [
  {
    _id: 1,
    heading: 'О портале',
    url: '#',
    isRoute: true,
  },
  {
    _id: 2,
    heading: 'Контакты',
    url: '#',
    isRoute: true,
  },
  {
    _id: 3,
    heading: 'Политика конфиденциальности',
    url: privacyPolicy,
    isRoute: false,
  },
  {
    _id: 4,
    heading: 'Авторам',
    url: '#',
    isRoute: true,
  },
  {
    _id: 5,
    heading: 'Полезные ссылки',
    url: '#',
    isRoute: true,
  },
  {
    _id: 6,
    heading: 'Пользовательское соглашение',
    url: termsOfUse,
    isRoute: false,
  },
];

export default footerLinks;
