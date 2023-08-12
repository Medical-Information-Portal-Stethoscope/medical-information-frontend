import { FC } from 'react';
import classNames from 'classnames';
import { UserHeaderIcon } from 'components/user-header-icon';
import { useAppSelector } from 'services/app/hooks';
import { showUserPersonalData } from 'services/features/user/selectors';
import styles from './styles.module.scss';

// type CommentType = {
//   id: string;
//   text: string;
//   author: {
//     id: string;
//     first_name: string;
//     last_name: string;
//     role: string;
//   };
//   created_at: string;
//   updated_at?: string;
// };

const commentExample = {
  id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
  text: 'Очень важный комментарий',
  author: {
    id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
    first_name: 'Дарья',
    last_name: 'Врачева',
    role: 'user',
  },
  created_at: '2023-08-11T23:31:31.734Z',
  updated_at: '2023-08-11T23:31:31.734Z',
};

export const Comment: FC = (comment = commentExample) => {
  const { user } = useAppSelector(showUserPersonalData);
  //   const isMaterialOwner = user?.id === comment.author.id;

  //   const name =
  //     user?.first_name && user?.last_name
  //       ? `${user?.first_name} ${user?.last_name}`
  //       : 'Дарья Врачева';

  return (
    <div className={styles.comment}>
      <div className={styles.comment__data}>
        <UserHeaderIcon />
        {/* <div className={styles.comment__info}>
          <span
            className={
              (styles.comment__name,
              classNames({ [styles.comment__owner]: isMaterialOwner }))
            }
          >
            {name}
          </span>
          <span>time</span>
        </div>
        <span>remove btn</span> */}
      </div>
      {/* <p>comment</p> */}
    </div>
  );
};
