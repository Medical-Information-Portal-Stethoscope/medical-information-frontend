import privacyPolicy from 'assets/documents/privacy-policy.pdf';
import termsOfUse from 'assets/documents/terms-of-use.pdf';

const footerLinks = [
  {
    _id: 1,
    heading: 'О портале',
    url: '#',
  },
  {
    _id: 2,
    heading: 'Контакты',
    url: '#',
  },
  {
    _id: 3,
    heading: 'Политика конфиденциальности',
    url: privacyPolicy,
  },
  {
    _id: 4,
    heading: 'Авторам',
    url: '#',
  },
  {
    _id: 5,
    heading: 'Полезные ссылки',
    url: '#',
  },
  {
    _id: 6,
    heading: 'Пользовательское соглашение',
    url: termsOfUse,
  },
];

export default footerLinks;
