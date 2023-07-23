import { getColor, IIconProps } from './utils';

export const RainyWeatherFiveIcon = ({
  color,
  size = '32',
  ...props
}: IIconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill={getColor(color)}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M28.9332 10.0933C28.7726 9.93553 28.5746 9.821 28.3578 9.76038C28.141 9.69976 27.9123 9.69503 27.6932 9.74664C27.4043 9.81265 27.1094 9.8484 26.8132 9.85331C25.7523 9.85331 24.7349 9.43188 23.9848 8.68173C23.2346 7.93159 22.8132 6.91417 22.8132 5.85331C22.817 5.56139 22.8528 5.27077 22.9198 4.98664C22.9728 4.76655 22.9689 4.53659 22.9084 4.31844C22.8479 4.10029 22.7329 3.90112 22.5742 3.73972C22.4154 3.57832 22.2182 3.45999 22.0011 3.39588C21.784 3.33178 21.5541 3.32401 21.3332 3.37331C20.0061 3.66629 18.8025 4.36338 17.888 5.36864C16.9735 6.37389 16.393 7.63788 16.2265 8.98664C15.5022 8.77966 14.7531 8.67201 13.9998 8.66664C12.0783 8.66555 10.2206 9.35611 8.76634 10.6121C7.31209 11.868 6.35847 13.6054 6.07984 15.5066C5.15136 15.7652 4.3257 16.3049 3.71629 17.0516C3.10688 17.7983 2.74362 18.7153 2.6764 19.6768C2.60919 20.6383 2.84132 21.597 3.34091 22.4212C3.84049 23.2454 4.58303 23.8948 5.46651 24.28C5.63643 24.3473 5.8171 24.3834 5.99985 24.3866C6.30811 24.3892 6.60771 24.2848 6.84768 24.0913C7.08765 23.8978 7.25316 23.6271 7.31603 23.3253C7.37891 23.0235 7.33526 22.7092 7.19253 22.436C7.0498 22.1628 6.8168 21.9474 6.53318 21.8266C6.17544 21.6743 5.87069 21.4196 5.6572 21.0946C5.4437 20.7696 5.33098 20.3888 5.33318 20C5.33318 19.4695 5.54389 18.9608 5.91896 18.5858C6.29404 18.2107 6.80275 18 7.33318 18C7.6868 18 8.02594 17.8595 8.27599 17.6094C8.52604 17.3594 8.66651 17.0203 8.66651 16.6666C8.66651 15.2522 9.22841 13.8956 10.2286 12.8954C11.2288 11.8952 12.5854 11.3333 13.9998 11.3333C15.0345 11.3325 16.0461 11.6387 16.9065 12.2133C17.8758 12.8509 18.6107 13.7871 18.9998 14.88C19.0761 15.1091 19.2131 15.3132 19.3962 15.4706C19.5794 15.6279 19.8018 15.7325 20.0398 15.7733C20.6806 15.8427 21.2837 16.1105 21.7648 16.5392C22.246 16.968 22.5812 17.5364 22.7237 18.1649C22.8661 18.7935 22.8087 19.4509 22.5594 20.0452C22.3101 20.6395 21.8814 21.1411 21.3332 21.48C21.0361 21.6745 20.8285 21.979 20.756 22.3266C20.6835 22.6741 20.752 23.0363 20.9465 23.3333C21.141 23.6304 21.4455 23.838 21.7931 23.9105C22.1407 23.983 22.5028 23.9145 22.7998 23.72C23.5878 23.1872 24.2316 22.4675 24.6736 21.6253C25.1157 20.7831 25.3423 19.8445 25.3332 18.8933C25.3384 17.9642 25.114 17.0481 24.6798 16.2266C25.8249 15.9069 26.862 15.2832 27.6813 14.4217C28.5005 13.5601 29.0714 12.493 29.3332 11.3333C29.3781 11.1097 29.365 10.8782 29.295 10.6611C29.2249 10.444 29.1004 10.2485 28.9332 10.0933ZM22.8132 13.8533C22.6268 13.8684 22.4395 13.8684 22.2532 13.8533C21.962 13.6538 21.6542 13.4798 21.3332 13.3333C20.7867 12.1358 19.9532 11.0916 18.9065 10.2933C18.9065 10.1333 18.9065 9.95997 18.9065 9.79997C18.9065 9.22221 19.0316 8.6513 19.2733 8.12651C19.515 7.60172 19.8674 7.13552 20.3065 6.75997C20.513 8.18245 21.1736 9.5001 22.19 10.5165C23.2064 11.5329 24.524 12.1935 25.9465 12.4C25.566 12.8609 25.087 13.2308 24.5448 13.4823C24.0026 13.7338 23.4109 13.8606 22.8132 13.8533ZM14.8132 19.1066C14.5927 18.9576 14.3326 18.878 14.0665 18.878C13.8004 18.878 13.5403 18.9576 13.3198 19.1066C13.1198 19.2133 9.99985 21.3333 9.99985 24.6666C9.99985 25.7275 10.4213 26.7449 11.1714 27.4951C11.9216 28.2452 12.939 28.6666 13.9998 28.6666C15.0607 28.6666 16.0781 28.2452 16.8283 27.4951C17.5784 26.7449 17.9998 25.7275 17.9998 24.6666C17.9998 21.3333 14.8665 19.2 14.7465 19.1066H14.8132ZM13.9998 26C13.6462 26 13.3071 25.8595 13.057 25.6094C12.807 25.3594 12.6665 25.0203 12.6665 24.6666C12.7507 23.6391 13.2284 22.6838 13.9998 22C14.7713 22.6838 15.249 23.6391 15.3332 24.6666C15.3332 25.0203 15.1927 25.3594 14.9427 25.6094C14.6926 25.8595 14.3535 26 13.9998 26Z" />
  </svg>
);