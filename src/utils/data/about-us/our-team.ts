export type TOurTeam = {
  department: string;
  data: {
    name: string;
    avatar: string;
    tg?: string;
    email?: string;
    github?: string;
    behance?: string;
    isTeamLead?: boolean;
  }[];
};

const data: TOurTeam[] = [
  {
    department: 'Проджект менеджеры',
    data: [
      {
        name: 'Ерохин Алексей',
        avatar: 'https://avatars.githubusercontent.com/u/137651407?v=4',
        email: 'irokez600sel@yandex.ru',
      },
      {
        name: 'Мазепова Валерия',
        avatar: 'https://avatars.githubusercontent.com/u/138275542?v=4',
        tg: 'https://t.me/Mazepova_Valeria',
        email: 'vmazepova@yandex.ru',
      },
    ],
  },
  {
    department: 'Дизайнеры',
    data: [
      {
        name: 'Гаврилова Дарья',
        avatar: 'https://avatars.githubusercontent.com/u/139123719?v=4',
        tg: 'https://t.me/d_gavri',
        behance: 'https://www.behance.net/daryga/',
      },
      {
        name: 'Токарский Илья',
        avatar: 'https://avatars.githubusercontent.com/u/119794992?v=4',
        tg: 'https://t.me/tokarsky_ilya',
        behance: 'https://www.behance.net/tokarsky',
      },
      {
        name: 'Жарова Натали',
        avatar: 'https://avatars.githubusercontent.com/u/137819000?v=4',
        tg: 'https://t.me/natashios',
        behance: 'https://www.behance.net/zharova',
      },
    ],
  },
  {
    department: 'Фронтенд-разработчики',
    data: [
      {
        name: 'Дронов Александр',
        avatar: 'https://avatars.githubusercontent.com/u/93670312?v=4',
        github: 'https://github.com/AleksandrDronov',
        tg: 'https://t.me/DronovAleksandr',
        email: 'dronovspb@gmail.com',
        isTeamLead: true,
      },
      {
        name: 'Зашляпин Борис',
        avatar: 'https://avatars.githubusercontent.com/u/108838349?v=4',
        github: 'https://github.com/elrouss',
        tg: 'https://t.me/elrouss',
        email: 'test-zashliapin-b@yandex.ru',
      },
      {
        name: 'Черепанова Полина',
        avatar: 'https://avatars.githubusercontent.com/u/76571113?v=4',
        github: 'https://github.com/bofeof',
        tg: 'https://t.me/takoedelo',
        email: 'pchrpnv@yandex.ru',
      },
      {
        name: 'Перунов Александр',
        avatar: 'https://avatars.githubusercontent.com/u/90974969?v=4',
        github: 'https://github.com/shuraaas',
        tg: 'https://t.me/shuraaas',
      },
      {
        name: 'Селезнев Сергей',
        avatar: 'https://avatars.githubusercontent.com/u/101753412?v=4',
        github: 'https://github.com/SirojaSB',
        tg: 'https://t.me/s_venzeles',
        email: 'reloqus@yandex.ru',
      },
      {
        name: 'Куров Алексей',
        avatar: 'https://avatars.githubusercontent.com/u/103077881?v=4',
        github: 'https://github.com/blaydasik',
        tg: 'https://t.me/blaydasik',
        email: 'blaydasik@yandex.ru',
      },
    ],
  },
  {
    department: 'Бэкенд-разработчики',
    data: [
      {
        name: 'Варюхин Иван',
        avatar: 'https://avatars.githubusercontent.com/u/98258568?v=4',
        github: 'https://github.com/ivan-varyukhin',
        tg: 'https://t.me/sVVintus',
        email: 'ivan@varyukhin.ru',
        isTeamLead: true,
      },
      {
        name: 'Гриценко Сергей',
        avatar: 'https://avatars.githubusercontent.com/u/105641816?v=4',
        github: 'https://github.com/GritsenkoSerge',
        tg: 'https://t.me/gritsenkoserge',
        email: 'gritsenko.serge.2013@yandex.ru',
      },
      {
        name: 'Андреев Алексей',
        avatar: 'https://avatars.githubusercontent.com/u/99258799?v=4',
        github: 'https://github.com/sinerslb',
        tg: 'https://t.me/sinerslb',
        email: 'siner1982@gmail.com',
      },
      {
        name: 'Андрющенко Станислав',
        avatar: 'https://avatars.githubusercontent.com/u/111901284?v=4',
        github: 'https://github.com/StAndUP-ru',
        tg: 'https://t.me/StAndSt',
        email: 'StAndryushchenko@yandex.ru',
      },
      {
        name: 'Михеев Дмитрий',
        avatar: 'https://avatars.githubusercontent.com/u/73609023?v=4',
        github: 'https://github.com/MkhvDm',
        tg: 'https://t.me/MkhvDm',
        email: 'mkhvdm@gmail.com',
      },
      {
        name: 'Уперенко Александр',
        avatar: 'https://avatars.githubusercontent.com/u/23294819?v=4',
        github: 'https://github.com/AlexanderUp',
        tg: 'https://t.me/Alexander_Uperenko',
        email: 'alexander.uperenk0@yandex.ru',
      },
    ],
  },
  {
    department: 'Тестировщики',
    data: [
      {
        name: 'Васюта Галина',
        avatar: 'https://avatars.githubusercontent.com/u/138145344?v=4',
        github: 'https://github.com/VasyutaG',
        tg: 'https://t.me/Galina_G_V',
        email: 'vasyuta@inbox.ru',
      },
      {
        name: 'Переходенко Евгения',
        avatar: 'https://avatars.githubusercontent.com/u/137201654?v=4',
        github: 'https://github.com/Perekhodenko',
        tg: 'https://t.me/Perehodenko_QA',
        email: 'EvgeniyaP1997@yandex.ru',
      },
      {
        name: 'Ткаченко Евгений',
        avatar: 'https://avatars.githubusercontent.com/u/137833199?v=4',
        github: 'https://github.com/tes161',
        tg: 'https://t.me/tes161',
        email: 'Tes11979@yandex.ru',
      },
      {
        name: 'Шведов Илья',
        avatar: 'https://avatars.githubusercontent.com/u/137996688?v=4',
        github: 'https://github.com/IlyaShvedov',
        tg: 'https://t.me/Il_Shved',
        email: 'Il.Shved.off@gmail.com',
      },
      {
        name: 'Эрендженова Баира',
        avatar: 'https://avatars.githubusercontent.com/u/138247376?v=4',
        github: 'https://github.com/BairaEr',
        tg: 'https://t.me/BairaErendzhenova',
      },
      {
        name: 'Харалгина Анна',
        avatar: 'https://avatars.githubusercontent.com/u/117649995?v=4',
        github: 'https://github.com/DzhuAnnet',
        tg: 'https://t.me/AnnetPika',
        email: 'pichukan93@gmail.com',
      },
    ],
  },
];

export default data;
