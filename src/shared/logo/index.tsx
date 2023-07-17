export interface ILogoProps {
  extClassName?: string;
}

export const Logo = ({ extClassName }: ILogoProps) => (
  <div className={extClassName}>
    <svg
      width="344"
      height="72"
      viewBox="0 0 344 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M126.594 61.32C126.136 67.2124 121.002 71.626 115.142 71.1658C109.281 70.7055 104.891 65.5439 105.349 59.6515C105.807 53.7591 110.941 49.3455 116.801 49.8058C122.662 50.266 127.052 55.4276 126.594 61.32Z"
        fill="#FF0041"
      />
      <path
        d="M100.928 49.8534C100.716 50.1856 100.453 50.4853 100.116 50.7364C98.7122 51.8238 96.8602 51.5637 95.9447 50.2268C89.1332 40.0592 81.2231 32.9384 79.1979 33.7797C79.1729 33.7634 77.4714 35.2059 77.7684 43.9329C78.1226 55.0068 75.4893 62.8682 69.9196 66.8159C60.8382 73.265 45.5473 69.4165 45.0969 67.4717C43.6564 66.7343 43.6125 64.9429 44.4683 63.3832C45.2814 61.835 47.1325 61.155 48.573 61.8925C51.6739 64.5578 61.6416 65.8999 66.6497 62.3321C71.0179 59.2112 71.9152 50.5941 71.706 44.6644C71.5176 38.5916 71.8642 30.2425 77.331 27.9506C85.2785 24.6036 96.4846 39.6929 100.919 46.324C101.698 47.3765 101.619 48.7738 100.928 49.8534Z"
        fill="#014CFF"
      />
      <path
        d="M36.0501 2.57128C36.9582 4.63716 36.0127 7.04138 33.9916 7.94137L30.0649 9.68993C28.0149 10.6028 25.6273 9.64801 24.732 7.61123L24.668 7.46574C23.7599 5.39986 24.6766 3.00849 26.7265 2.09564L30.6532 0.347089C32.7032 -0.56576 35.0908 0.389011 35.9861 2.42579L36.0501 2.57128Z"
        fill="#014CFF"
      />
      <path
        d="M18.312 11.0178C19.2202 13.0837 18.2746 15.4879 16.2535 16.3879L12.3268 18.1365C10.2769 19.0493 7.88928 18.0946 6.99394 16.0578L6.92999 15.9123C6.02186 13.8464 6.93854 11.455 8.98851 10.5422L12.8863 8.8065C14.9363 7.89365 17.3239 8.84842 18.2192 10.8852L18.2832 11.0307L18.312 11.0178Z"
        fill="#014CFF"
      />
      <path
        d="M46.7183 67.3849C43.3317 68.8929 32.4545 70.0954 11.6262 41.1376L10.6385 41.5774C9.50962 42.0801 8.1962 41.8558 7.31429 41.0011C6.97144 40.6817 -0.656625 33.1549 0.0456476 24.3123C0.376094 19.6137 2.93829 15.5395 7.58769 12.2217C8.95946 11.2737 10.8484 11.5789 11.8157 12.935C12.783 14.2912 12.4398 16.1972 11.0804 17.1734C7.91911 19.424 6.27772 21.9081 6.03994 24.7448C5.70873 28.9044 8.45723 33.0074 10.2005 35.1306L11.4422 34.5777C12.7686 33.9871 14.3064 34.4148 15.1305 35.5987C34.1984 62.7781 43.1491 62.029 44.2642 61.8022C44.7002 61.7044 44.6993 61.7046 45.0261 61.4629C45.9429 60.7849 52.4044 54.6036 45.2705 22.1774C44.9544 20.7673 45.6742 19.3342 47.0006 18.7435L48.5528 18.0524C48.1607 15.3949 47.0174 10.6445 43.7769 8.10915C41.5312 6.37824 38.6008 5.92998 34.8198 6.77081C33.1877 7.1267 31.5961 6.11599 31.209 4.46776C30.8626 2.83516 31.8963 1.19484 33.5283 0.838948C39.1231 -0.404971 43.8419 0.426931 47.5347 3.30033C54.4679 8.70911 54.7936 19.3528 54.8136 19.7822C54.8489 21.0139 54.1304 22.143 53.0016 22.6457L51.6752 23.2363C59.2205 59.5925 50.1385 66.0304 47.0603 67.1651C46.9599 67.2436 46.8594 67.3221 46.7183 67.3849Z"
        fill="#014CFF"
      />
      <path
        d="M120.32 63.8115C118.918 66.6245 116.601 68.8704 113.754 70.1756C110.907 71.4808 107.701 71.7667 104.67 70.9858C101.639 70.2048 98.9652 68.4041 97.0933 65.8831C95.2214 63.362 94.2643 60.2727 94.3813 57.1288C94.4982 53.985 95.6821 50.9762 97.7361 48.6028C99.7901 46.2294 102.59 44.6345 105.671 44.0833C108.752 43.5322 111.927 44.0581 114.669 45.5735C117.412 47.0889 119.555 49.5024 120.744 52.4128L115.407 54.6153C114.72 52.9304 113.479 51.5331 111.891 50.6558C110.303 49.7785 108.465 49.474 106.681 49.7931C104.898 50.1122 103.277 51.0355 102.088 52.4096C100.899 53.7836 100.213 55.5255 100.145 57.3456C100.078 59.1657 100.632 60.9542 101.716 62.4137C102.799 63.8732 104.347 64.9157 106.102 65.3678C107.857 65.82 109.713 65.6544 111.361 64.8988C113.009 64.1432 114.351 62.8429 115.162 61.2144L120.32 63.8115Z"
        fill="#014CFF"
      />
      <path
        d="M121.77 43.8704V49.9918H130.903V71.4169H136.991V49.9918H146.124V43.8704H121.77Z"
        fill="#014CFF"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M166.943 70.4305C170.054 69.1786 172.601 66.8238 174.101 63.8116L168.944 61.2145C168.075 62.9583 166.601 64.3216 164.8 65.0464C162.999 65.7712 160.996 65.8072 159.171 65.1476C157.345 64.4881 155.823 63.1787 154.893 61.4672C154.67 61.0574 154.485 60.6313 154.338 60.1942H175.552V57.1335C175.552 57.0243 175.543 56.9172 175.527 56.8127C175.339 53.6801 174.091 50.6984 171.98 48.3687C169.724 45.8781 166.638 44.3054 163.306 43.9481C159.974 43.5907 156.627 44.4735 153.899 46.4295C151.171 48.3854 149.25 51.2788 148.501 54.5623C147.751 57.8459 148.224 61.2917 149.831 64.2481C151.438 67.2044 154.067 69.4661 157.22 70.6054C160.373 71.7447 163.833 71.6825 166.943 70.4305ZM154.338 55.093H169.367C169.019 54.057 168.46 53.0955 167.716 52.2741C166.409 50.8322 164.623 49.9217 162.694 49.7148C160.765 49.5079 158.827 50.019 157.248 51.1514C155.885 52.1288 154.87 53.5106 154.338 55.093Z"
        fill="#014CFF"
      />
      <path
        d="M177.581 43.8704V49.9918H186.714V71.4169H192.802V49.9918H201.935V43.8704H177.581Z"
        fill="#014CFF"
      />
      <path
        d="M231.363 57.6436C231.363 65.2504 225.23 71.4169 217.664 71.4169C210.098 71.4169 203.965 65.2504 203.965 57.6436C203.965 50.0369 210.098 43.8704 217.664 43.8704C225.23 43.8704 231.363 50.0369 231.363 57.6436ZM209.733 57.6436C209.733 62.0474 213.284 65.6174 217.664 65.6174C222.044 65.6174 225.595 62.0474 225.595 57.6436C225.595 53.2398 222.044 49.6698 217.664 49.6698C213.284 49.6698 209.733 53.2398 209.733 57.6436Z"
        fill="#014CFF"
      />
      <path
        d="M259.34 63.8116C257.939 66.6245 255.622 68.8704 252.775 70.1756C249.928 71.4808 246.722 71.7667 243.691 70.9858C240.66 70.2048 237.986 68.4041 236.114 65.8831C234.242 63.362 233.285 60.2727 233.402 57.1289C233.519 53.985 234.703 50.9762 236.757 48.6028C238.811 46.2294 241.611 44.6345 244.692 44.0833C247.772 43.5322 250.948 44.0581 253.69 45.5735C256.432 47.0889 258.576 49.5024 259.764 52.4128L254.428 54.6153C253.74 52.9304 252.499 51.5331 250.912 50.6558C249.324 49.7785 247.486 49.474 245.702 49.7931C243.919 50.1122 242.297 51.0355 241.108 52.4096C239.919 53.7836 239.234 55.5255 239.166 57.3456C239.098 59.1657 239.653 60.9542 240.736 62.4137C241.82 63.8732 243.368 64.9157 245.123 65.3678C246.878 65.82 248.734 65.6544 250.382 64.8988C252.03 64.1432 253.371 62.843 254.183 61.2144L259.34 63.8116Z"
        fill="#014CFF"
      />
      <path
        d="M268.893 43.8704H262.82V71.4169H268.893V61.2086C270.291 60.4339 271.943 60.2127 273.505 60.4834C275.163 60.7707 276.685 61.6587 277.82 63.0007C278.955 64.3427 279.084 64.7556 279.598 66.4807C279.673 66.7337 280.093 69.8493 280.091 71.3607L285.103 71.3538L285.107 71.1805C285.154 69.294 285.166 68.7926 285.088 67.5316C284.896 64.4139 283.722 61.4508 281.761 59.1328C280.946 58.1694 280.016 57.3413 279.001 56.667C280.955 54.9363 282.356 52.6067 283.013 49.9714C283.435 47.7946 283.451 47.4257 283.39 43.8704L278.172 43.8704C278.207 45.902 278.118 46.5877 277.686 48.3212C277.254 50.0547 276.265 51.5597 274.883 52.5872C273.501 53.6147 271.809 54.1031 270.087 53.9716C269.684 53.9408 269.285 53.8765 268.893 53.7803V43.8704Z"
        fill="#014CFF"
      />
      <path
        d="M314.572 57.6436C314.572 65.2504 308.439 71.4169 300.873 71.4169C293.307 71.4169 287.174 65.2504 287.174 57.6436C287.174 50.0369 293.307 43.8704 300.873 43.8704C308.439 43.8704 314.572 50.0369 314.572 57.6436ZM292.942 57.6436C292.942 62.0474 296.493 65.6174 300.873 65.6174C305.253 65.6174 308.804 62.0474 308.804 57.6436C308.804 53.2398 305.253 49.6698 300.873 49.6698C296.493 49.6698 292.942 53.2398 292.942 57.6436Z"
        fill="#014CFF"
      />
      <path
        d="M316.602 43.8704H344V71.4169H338.235V49.9918H322.367V71.4169H316.602V43.8704Z"
        fill="#014CFF"
      />
    </svg>
  </div>
);
