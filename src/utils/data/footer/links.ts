import privacyPolicy from 'assets/documents/privacy-policy.pdf';
import termsOfUse from 'assets/documents/terms-of-use.pdf';

const footerLinks = [
  {
    _id: 1,
    heading: 'Политика конфиденциальности',
    url: privacyPolicy,
    isRoute: false,
  },
  {
    _id: 2,
    heading: 'Пользовательское соглашение',
    url: termsOfUse,
    isRoute: false,
  },
];

export default footerLinks;
