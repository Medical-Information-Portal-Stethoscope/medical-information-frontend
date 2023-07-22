import { getColor, IIconProps } from './utils';

export const DesertIcon = ({ color, size = '32', ...props }: IIconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill={getColor(color)}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M23.9998 2.66666C22.945 2.66666 21.9139 2.97945 21.0368 3.56549C20.1597 4.15152 19.4761 4.98447 19.0725 5.95901C18.6688 6.93355 18.5632 8.00591 18.769 9.04047C18.9748 10.075 19.4827 11.0253 20.2286 11.7712C20.9745 12.5171 21.9248 13.0251 22.9594 13.2308C23.9939 13.4366 25.0663 13.331 26.0408 12.9273C27.0154 12.5237 27.8483 11.8401 28.4343 10.963C29.0204 10.086 29.3332 9.05482 29.3332 7.99999C29.3332 6.5855 28.7713 5.22895 27.7711 4.22875C26.7709 3.22856 25.4143 2.66666 23.9998 2.66666ZM23.9998 10.6667C23.4724 10.6667 22.9568 10.5103 22.5183 10.2172C22.0798 9.92422 21.738 9.50775 21.5362 9.02048C21.3343 8.53321 21.2815 7.99703 21.3844 7.47975C21.4873 6.96247 21.7413 6.48731 22.1142 6.11437C22.4872 5.74143 22.9623 5.48746 23.4796 5.38456C23.9969 5.28167 24.5331 5.33448 25.0203 5.53631C25.5076 5.73814 25.9241 6.07994 26.2171 6.51847C26.5101 6.957 26.6665 7.47257 26.6665 7.99999C26.6665 8.70723 26.3856 9.38551 25.8855 9.88561C25.3854 10.3857 24.7071 10.6667 23.9998 10.6667ZM19.9998 26.6667H17.3332V24C17.3332 23.6464 17.1927 23.3072 16.9426 23.0572C16.6926 22.8071 16.3535 22.6667 15.9998 22.6667C15.6462 22.6667 15.3071 22.8071 15.057 23.0572C14.807 23.3072 14.6665 23.6464 14.6665 24V26.6667H11.9998V22.16L16.5998 19.8533C16.8197 19.7425 17.0046 19.573 17.1341 19.3635C17.2635 19.1541 17.3324 18.9129 17.3332 18.6667V13.3333C17.3332 12.9797 17.1927 12.6406 16.9426 12.3905C16.6926 12.1405 16.3535 12 15.9998 12C15.6462 12 15.3071 12.1405 15.057 12.3905C14.807 12.6406 14.6665 12.9797 14.6665 13.3333V17.84L11.9998 19.1733V10.6667C11.9998 10.313 11.8594 9.9739 11.6093 9.72385C11.3593 9.4738 11.0201 9.33332 10.6665 9.33332C10.3129 9.33332 9.97374 9.4738 9.7237 9.72385C9.47365 9.9739 9.33317 10.313 9.33317 10.6667V21.84L6.6665 20.5067V17.3333C6.6665 16.9797 6.52603 16.6406 6.27598 16.3905C6.02593 16.1405 5.68679 16 5.33317 16C4.97955 16 4.64041 16.1405 4.39036 16.3905C4.14031 16.6406 3.99984 16.9797 3.99984 17.3333V21.3333C4.00058 21.5795 4.0695 21.8208 4.19893 22.0302C4.32837 22.2397 4.51328 22.4092 4.73317 22.52L9.33317 24.8267V26.6667H3.99984C3.64622 26.6667 3.30708 26.8071 3.05703 27.0572C2.80698 27.3072 2.6665 27.6464 2.6665 28C2.6665 28.3536 2.80698 28.6928 3.05703 28.9428C3.30708 29.1929 3.64622 29.3333 3.99984 29.3333H19.9998C20.3535 29.3333 20.6926 29.1929 20.9426 28.9428C21.1927 28.6928 21.3332 28.3536 21.3332 28C21.3332 27.6464 21.1927 27.3072 20.9426 27.0572C20.6926 26.8071 20.3535 26.6667 19.9998 26.6667Z" />
  </svg>
);
