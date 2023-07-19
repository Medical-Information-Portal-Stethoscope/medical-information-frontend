import React from 'react';
import { getColor, IIconProps } from './utils';

export const RainThreeIcon = ({ color, size = '24', ...props }: IIconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={getColor(color)}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M15.9999 22.6667C15.7362 22.6667 15.4784 22.7449 15.2591 22.8914C15.0398 23.0379 14.8689 23.2461 14.768 23.4898C14.6671 23.7334 14.6407 24.0015 14.6922 24.2601C14.7436 24.5188 14.8706 24.7563 15.0571 24.9428C15.2435 25.1293 15.4811 25.2563 15.7397 25.3077C15.9984 25.3592 16.2665 25.3328 16.5101 25.2318C16.7537 25.1309 16.962 24.96 17.1085 24.7408C17.255 24.5215 17.3332 24.2637 17.3332 24C17.3332 23.6464 17.1927 23.3072 16.9427 23.0572C16.6926 22.8071 16.3535 22.6667 15.9999 22.6667ZM10.6665 14.6667C10.4028 14.6667 10.145 14.7449 9.92577 14.8914C9.70651 15.0379 9.53561 15.2461 9.43469 15.4898C9.33377 15.7334 9.30737 16.0015 9.35882 16.2601C9.41026 16.5188 9.53725 16.7563 9.72372 16.9428C9.91019 17.1293 10.1478 17.2563 10.4064 17.3077C10.6651 17.3592 10.9331 17.3328 11.1768 17.2318C11.4204 17.1309 11.6286 16.96 11.7752 16.7408C11.9217 16.5215 11.9999 16.2637 11.9999 16C11.9999 15.6464 11.8594 15.3072 11.6093 15.0572C11.3593 14.8071 11.0202 14.6667 10.6665 14.6667ZM15.9999 17.3333C15.7362 17.3333 15.4784 17.4115 15.2591 17.558C15.0398 17.7046 14.8689 17.9128 14.768 18.1564C14.6671 18.4001 14.6407 18.6681 14.6922 18.9268C14.7436 19.1854 14.8706 19.423 15.0571 19.6095C15.2435 19.7959 15.4811 19.9229 15.7397 19.9744C15.9984 20.0258 16.2665 19.9994 16.5101 19.8985C16.7537 19.7976 16.962 19.6267 17.1085 19.4074C17.255 19.1882 17.3332 18.9304 17.3332 18.6667C17.3332 18.313 17.1927 17.9739 16.9427 17.7239C16.6926 17.4738 16.3535 17.3333 15.9999 17.3333ZM10.6665 25.3333C10.4028 25.3333 10.145 25.4115 9.92577 25.558C9.70651 25.7045 9.53561 25.9128 9.43469 26.1564C9.33377 26.4001 9.30737 26.6681 9.35882 26.9268C9.41026 27.1854 9.53725 27.423 9.72372 27.6095C9.91019 27.7959 10.1478 27.9229 10.4064 27.9744C10.6651 28.0258 10.9331 27.9994 11.1768 27.8985C11.4204 27.7976 11.6286 27.6267 11.7752 27.4074C11.9217 27.1882 11.9999 26.9304 11.9999 26.6667C11.9999 26.313 11.8594 25.9739 11.6093 25.7239C11.3593 25.4738 11.0202 25.3333 10.6665 25.3333ZM10.6665 20C10.4028 20 10.145 20.0782 9.92577 20.2247C9.70651 20.3712 9.53561 20.5795 9.43469 20.8231C9.33377 21.0667 9.30737 21.3348 9.35882 21.5935C9.41026 21.8521 9.53725 22.0897 9.72372 22.2761C9.91019 22.4626 10.1478 22.5896 10.4064 22.641C10.6651 22.6925 10.9331 22.6661 11.1768 22.5652C11.4204 22.4643 11.6286 22.2934 11.7752 22.0741C11.9217 21.8548 11.9999 21.597 11.9999 21.3333C11.9999 20.9797 11.8594 20.6406 11.6093 20.3905C11.3593 20.1405 11.0202 20 10.6665 20ZM21.3332 20C21.0695 20 20.8117 20.0782 20.5924 20.2247C20.3732 20.3712 20.2023 20.5795 20.1014 20.8231C20.0004 21.0667 19.974 21.3348 20.0255 21.5935C20.0769 21.8521 20.2039 22.0897 20.3904 22.2761C20.5769 22.4626 20.8144 22.5896 21.0731 22.641C21.3317 22.6925 21.5998 22.6661 21.8434 22.5652C22.0871 22.4643 22.2953 22.2934 22.4418 22.0741C22.5883 21.8548 22.6665 21.597 22.6665 21.3333C22.6665 20.9797 22.5261 20.6406 22.276 20.3905C22.026 20.1405 21.6868 20 21.3332 20ZM15.9999 12C15.7362 12 15.4784 12.0782 15.2591 12.2247C15.0398 12.3712 14.8689 12.5795 14.768 12.8231C14.6671 13.0667 14.6407 13.3348 14.6922 13.5935C14.7436 13.8521 14.8706 14.0897 15.0571 14.2761C15.2435 14.4626 15.4811 14.5896 15.7397 14.641C15.9984 14.6925 16.2665 14.6661 16.5101 14.5652C16.7537 14.4643 16.962 14.2934 17.1085 14.0741C17.255 13.8548 17.3332 13.597 17.3332 13.3333C17.3332 12.9797 17.1927 12.6406 16.9427 12.3905C16.6926 12.1405 16.3535 12 15.9999 12ZM21.3332 14.6667C21.0695 14.6667 20.8117 14.7449 20.5924 14.8914C20.3732 15.0379 20.2023 15.2461 20.1014 15.4898C20.0004 15.7334 19.974 16.0015 20.0255 16.2601C20.0769 16.5188 20.2039 16.7563 20.3904 16.9428C20.5769 17.1293 20.8144 17.2563 21.0731 17.3077C21.3317 17.3592 21.5998 17.3328 21.8434 17.2318C22.0871 17.1309 22.2953 16.96 22.4418 16.7408C22.5883 16.5215 22.6665 16.2637 22.6665 16C22.6665 15.6464 22.5261 15.3072 22.276 15.0572C22.026 14.8071 21.6868 14.6667 21.3332 14.6667ZM24.5599 8.29333C23.7452 6.42134 22.3392 4.8681 20.5573 3.87164C18.7754 2.87517 16.7159 2.49045 14.6945 2.77641C12.673 3.06238 10.8011 4.00327 9.36554 5.4549C7.92998 6.90653 7.00998 8.78882 6.74653 10.8133C5.58308 11.0946 4.54808 11.7591 3.80804 12.6999C3.06799 13.6407 2.66593 14.803 2.66653 16C2.66415 16.7552 2.82219 17.5023 3.1302 18.1919C3.43821 18.8815 3.88915 19.4978 4.4532 20C4.58301 20.1247 4.73671 20.2218 4.90506 20.2855C5.07341 20.3492 5.2529 20.3781 5.43273 20.3706C5.61256 20.363 5.78901 20.3191 5.95142 20.2416C6.11384 20.164 6.25887 20.0544 6.37778 19.9192C6.49668 19.7841 6.587 19.6263 6.64329 19.4554C6.69957 19.2844 6.72066 19.1038 6.70529 18.9245C6.68991 18.7451 6.63838 18.5708 6.55381 18.4119C6.46924 18.253 6.35337 18.1129 6.2132 18C5.9336 17.7477 5.71062 17.439 5.55895 17.0943C5.40727 16.7495 5.33033 16.3766 5.3332 16C5.3332 15.2928 5.61415 14.6145 6.11425 14.1144C6.61434 13.6143 7.29262 13.3333 7.99986 13.3333C8.35349 13.3333 8.69262 13.1929 8.94267 12.9428C9.19272 12.6928 9.3332 12.3536 9.3332 12C9.3366 10.423 9.89891 8.89834 10.9202 7.69678C11.9415 6.49522 13.3557 5.6946 14.9115 5.43717C16.4673 5.17973 18.064 5.48214 19.418 6.29068C20.7719 7.09922 21.7953 8.36152 22.3065 9.85333C22.3827 10.0825 22.5197 10.2866 22.7029 10.4439C22.8861 10.6012 23.1085 10.7059 23.3465 10.7467C24.2721 10.9063 25.1119 11.3866 25.719 12.1033C26.326 12.82 26.6614 13.7275 26.6665 14.6667C26.6869 15.6484 26.3343 16.6013 25.6799 17.3333C25.467 17.5984 25.3634 17.9348 25.3903 18.2737C25.4172 18.6126 25.5726 18.9284 25.8246 19.1566C26.0766 19.3848 26.4062 19.5081 26.7461 19.5013C27.086 19.4945 27.4105 19.3581 27.6532 19.12C28.3876 18.2807 28.8997 17.2707 29.1427 16.1822C29.3857 15.0938 29.3517 13.9618 29.044 12.8899C28.7362 11.818 28.1644 10.8404 27.381 10.0467C26.5976 9.25298 25.6276 8.66846 24.5599 8.34667V8.29333ZM21.3332 25.3333C21.0695 25.3333 20.8117 25.4115 20.5924 25.558C20.3732 25.7045 20.2023 25.9128 20.1014 26.1564C20.0004 26.4001 19.974 26.6681 20.0255 26.9268C20.0769 27.1854 20.2039 27.423 20.3904 27.6095C20.5769 27.7959 20.8144 27.9229 21.0731 27.9744C21.3317 28.0258 21.5998 27.9994 21.8434 27.8985C22.0871 27.7976 22.2953 27.6267 22.4418 27.4074C22.5883 27.1882 22.6665 26.9304 22.6665 26.6667C22.6665 26.313 22.5261 25.9739 22.276 25.7239C22.026 25.4738 21.6868 25.3333 21.3332 25.3333Z" />
  </svg>
);
