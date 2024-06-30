import React, { useState } from 'react';
import cx from 'clsx';

const baseClass = 'logo';

import './Logo.scss';

export type LogoProps = {};

export const Logo: React.FC<LogoProps> = (props) => {
  return (
    <div className={cx(baseClass)}>
      <svg
        width="333"
        height="48"
        viewBox="0 0 333 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_4322_14)">
          <path
            d="M12.9541 48.6357C10.512 48.6357 8.23145 48.4036 6.1123 47.9395C4.01335 47.4753 1.99512 46.8092 0.0576172 45.9414L-0.0332031 36.6777H6.1123L7.29297 41.4004C7.97917 41.7435 8.72591 42.016 9.5332 42.2178C10.3607 42.4196 11.2992 42.5205 12.3486 42.5205C14.3265 42.5205 15.7191 42.1976 16.5264 41.5518C17.3337 40.9059 17.7373 40.0986 17.7373 39.1299C17.7373 38.2217 17.3034 37.4245 16.4355 36.7383C15.5879 36.0319 13.8825 35.4163 11.3193 34.8916C7.44434 34.0843 4.58854 32.833 2.75195 31.1377C0.915365 29.4424 -0.00292969 27.2728 -0.00292969 24.6289C-0.00292969 22.8125 0.451172 21.1576 1.35938 19.6641C2.28776 18.1706 3.69043 16.9697 5.56738 16.0615C7.46452 15.1533 9.88639 14.6992 12.833 14.6992C15.2952 14.6992 17.5456 14.9414 19.584 15.4258C21.6426 15.89 23.3682 16.5055 24.7607 17.2725L24.8516 26.2334H18.7363L17.7979 21.9346C17.2529 21.5309 16.6071 21.2282 15.8604 21.0264C15.1338 20.8245 14.3063 20.7236 13.3779 20.7236C11.8239 20.7236 10.6331 21.0365 9.80566 21.6621C8.97819 22.2878 8.56445 23.0951 8.56445 24.084C8.56445 24.6491 8.70573 25.1738 8.98828 25.6582C9.29102 26.1426 9.8763 26.5967 10.7441 27.0205C11.612 27.4443 12.8734 27.848 14.5283 28.2314C18.585 29.1598 21.5417 30.401 23.3984 31.9551C25.2552 33.4889 26.1836 35.6484 26.1836 38.4336C26.1836 41.4811 25.0736 43.9434 22.8535 45.8203C20.6536 47.6973 17.3538 48.6357 12.9541 48.6357ZM45.6191 48.6357C42.4707 48.6357 39.7461 47.9294 37.4453 46.5166C35.1647 45.1038 33.4089 43.1562 32.1777 40.6738C30.9466 38.1712 30.3311 35.3154 30.3311 32.1064V31.1982C30.3311 27.9691 30.9567 25.1133 32.208 22.6309C33.4593 20.1484 35.2253 18.2008 37.5059 16.7881C39.7865 15.3551 42.4707 14.6387 45.5586 14.6387C48.5052 14.6387 51.0381 15.1029 53.1572 16.0312C55.2965 16.9395 57.0322 17.999 58.3643 19.21L58.3037 28.5947H51.6436L50.4629 22.752C49.9785 22.2676 49.363 21.874 48.6162 21.5713C47.8695 21.2686 47.1126 21.1172 46.3457 21.1172C44.7311 21.1172 43.389 21.5208 42.3193 22.3281C41.2699 23.1354 40.4827 24.2858 39.958 25.7793C39.4333 27.2728 39.1709 29.0791 39.1709 31.1982V32.1064C39.1709 34.3467 39.4635 36.1934 40.0488 37.6465C40.6341 39.0794 41.4111 40.139 42.3799 40.8252C43.3688 41.5114 44.4688 41.8545 45.6797 41.8545C47.2337 41.8545 48.4749 41.4508 49.4033 40.6436C50.3519 39.8161 50.9977 38.6556 51.3408 37.1621H58.9092L59 37.3438C58.6569 39.6647 57.9707 41.6729 56.9414 43.3682C55.9323 45.0635 54.4993 46.3652 52.6426 47.2734C50.806 48.1816 48.4648 48.6357 45.6191 48.6357ZM63.4502 48V42.7021L67.7188 41.7939V21.4502H62.8447V15.2441H67.7188V11.6113C67.7188 7.93815 68.7682 5.11263 70.8672 3.13477C72.9863 1.13672 75.943 0.137695 79.7373 0.137695C80.6859 0.137695 81.6849 0.218424 82.7344 0.379883C83.7839 0.521159 84.682 0.692708 85.4287 0.894531L84.6719 7.46387C84.1875 7.32259 83.6325 7.22168 83.0068 7.16113C82.3812 7.0804 81.7454 7.04004 81.0996 7.04004C79.5658 7.04004 78.4255 7.43359 77.6787 8.2207C76.932 9.00781 76.5586 10.138 76.5586 11.6113V15.2441H83.9756V21.4502H76.5586V41.7939L82.3408 42.7021V48H63.4502ZM86.458 48V42.7021L91.1807 41.7939V21.4502H87.0635V15.2441H91.1807V13.8213C91.1807 9.44173 92.5026 6.07129 95.1465 3.70996C97.7904 1.32845 101.514 0.137695 106.317 0.137695C108.053 0.137695 109.769 0.299154 111.464 0.62207C113.159 0.924805 115.127 1.36882 117.367 1.9541H122.574V41.7939L126.843 42.7021V48H109.466V42.7021L113.734 41.7939V7.91797C112.544 7.67578 111.413 7.48405 110.344 7.34277C109.294 7.2015 108.235 7.13086 107.165 7.13086C104.743 7.13086 102.947 7.69596 101.776 8.82617C100.606 9.95638 100.021 11.6214 100.021 13.8213V15.2441H107.286V21.4502H100.021V41.7939L104.289 42.7021V48H86.458ZM142.827 48.6357C140.224 48.6357 137.983 47.9697 136.106 46.6377C134.25 45.2855 132.827 43.4085 131.838 41.0068C130.849 38.585 130.354 35.7594 130.354 32.5303V31.8945C130.354 28.4434 130.849 25.4261 131.838 22.8428C132.847 20.2594 134.28 18.2513 136.137 16.8184C137.993 15.3652 140.214 14.6387 142.797 14.6387C144.593 14.6387 146.167 15.002 147.52 15.7285C148.872 16.4349 150.042 17.444 151.031 18.7559V7.00977L146.309 6.10156V0.773438H151.031H159.871V41.7939L164.109 42.7021V48H152.212L151.546 44.0039C150.517 45.5176 149.285 46.668 147.853 47.4551C146.44 48.2422 144.765 48.6357 142.827 48.6357ZM145.461 41.7637C146.692 41.7637 147.772 41.5013 148.7 40.9766C149.629 40.4518 150.406 39.695 151.031 38.7061V24.8105C150.426 23.7611 149.659 22.9538 148.73 22.3887C147.802 21.8034 146.732 21.5107 145.521 21.5107C144.048 21.5107 142.837 21.9548 141.889 22.8428C140.96 23.7106 140.274 24.9215 139.83 26.4756C139.406 28.0296 139.194 29.8359 139.194 31.8945V32.5303C139.194 35.3962 139.679 37.6566 140.647 39.3115C141.616 40.9463 143.221 41.7637 145.461 41.7637Z"
            fill="#F01879"
          />
          <path
            d="M199.057 39V8.45454H208.915C211.083 8.45454 212.893 8.8473 214.344 9.63281C215.806 10.4084 216.905 11.4872 217.641 12.8693C218.386 14.2415 218.759 15.8175 218.759 17.5973C218.759 19.3771 218.386 20.9482 217.641 22.3104C216.905 23.6726 215.811 24.7365 214.359 25.5021C212.908 26.2678 211.108 26.6506 208.96 26.6506H200.563V24.1001H208.886C210.477 24.1001 211.799 23.8366 212.853 23.3097C213.917 22.7827 214.707 22.032 215.224 21.0575C215.751 20.0831 216.015 18.9297 216.015 17.5973C216.015 16.2649 215.751 15.1016 215.224 14.1072C214.697 13.103 213.902 12.3274 212.838 11.7805C211.784 11.2337 210.452 10.9602 208.841 10.9602H201.846V39H199.057ZM212.525 25.2188L220.042 39H216.82L209.378 25.2188H212.525ZM231.017 39.4773C228.879 39.4773 227.03 38.9801 225.469 37.9858C223.908 36.9815 222.7 35.5945 221.844 33.8246C220.999 32.0447 220.577 29.9964 220.577 27.6797C220.577 25.3729 220.999 23.3246 221.844 21.5348C222.7 19.7351 223.878 18.3281 225.379 17.3139C226.891 16.2898 228.636 15.7777 230.614 15.7777C231.857 15.7777 233.055 16.0064 234.209 16.4638C235.362 16.9112 236.396 17.6023 237.311 18.5369C238.236 19.4616 238.967 20.63 239.504 22.0419C240.04 23.4439 240.309 25.1044 240.309 27.0234V28.3359H222.411V25.9943H237.594C237.594 24.5227 237.296 23.2003 236.7 22.027C236.113 20.8437 235.293 19.9091 234.239 19.223C233.195 18.5369 231.987 18.1939 230.614 18.1939C229.163 18.1939 227.885 18.5817 226.781 19.3572C225.678 20.1328 224.813 21.157 224.186 22.4297C223.57 23.7024 223.256 25.0945 223.246 26.6058V28.0078C223.246 29.8274 223.56 31.4183 224.186 32.7805C224.822 34.1328 225.722 35.1818 226.886 35.9276C228.049 36.6733 229.426 37.0462 231.017 37.0462C232.101 37.0462 233.05 36.8771 233.866 36.5391C234.691 36.201 235.382 35.7486 235.939 35.1818C236.506 34.6051 236.933 33.9737 237.222 33.2876L239.742 34.108C239.394 35.0724 238.822 35.9624 238.027 36.7777C237.241 37.593 236.257 38.2493 235.074 38.7464C233.901 39.2337 232.548 39.4773 231.017 39.4773ZM251.899 48.0682C250.338 48.0682 248.971 47.8643 247.798 47.4567C246.624 47.0589 245.635 46.5121 244.83 45.8161C244.024 45.12 243.398 44.3395 242.95 43.4744L245.128 42.0426C245.456 42.6193 245.894 43.1861 246.441 43.7429C246.997 44.2997 247.718 44.7621 248.603 45.13C249.498 45.4979 250.597 45.6818 251.899 45.6818C253.928 45.6818 255.563 45.1747 256.806 44.1605C258.059 43.1463 258.686 41.5703 258.686 39.4325V34.272H258.447C258.139 34.968 257.696 35.6641 257.119 36.3601C256.543 37.0462 255.787 37.6179 254.852 38.0753C253.928 38.5327 252.779 38.7614 251.407 38.7614C249.578 38.7614 247.952 38.3089 246.53 37.4041C245.118 36.4993 244.004 35.2067 243.189 33.5263C242.384 31.8359 241.981 29.8224 241.981 27.4858C241.981 25.169 242.374 23.1307 243.159 21.3707C243.955 19.6108 245.063 18.2386 246.485 17.2543C247.907 16.2699 249.563 15.7777 251.452 15.7777C252.854 15.7777 254.017 16.0263 254.942 16.5234C255.867 17.0107 256.607 17.6172 257.164 18.343C257.731 19.0689 258.173 19.7749 258.492 20.4609H258.76V16.0909H261.355V39.5966C261.355 41.5355 260.943 43.1314 260.117 44.3842C259.292 45.6371 258.169 46.5618 256.747 47.1584C255.325 47.7649 253.709 48.0682 251.899 48.0682ZM251.72 36.3303C253.192 36.3303 254.45 35.9773 255.494 35.2713C256.538 34.5554 257.338 33.5312 257.895 32.1989C258.452 30.8665 258.73 29.2805 258.73 27.4411C258.73 25.6513 258.457 24.0653 257.91 22.6832C257.363 21.2912 256.568 20.1974 255.524 19.402C254.49 18.5966 253.222 18.1939 251.72 18.1939C250.189 18.1939 248.896 18.6065 247.843 19.4318C246.789 20.2571 245.993 21.3707 245.456 22.7727C244.919 24.1648 244.651 25.7209 244.651 27.4411C244.651 29.1911 244.924 30.7372 245.471 32.0795C246.018 33.4119 246.818 34.456 247.872 35.2116C248.926 35.9574 250.209 36.3303 251.72 36.3303ZM265.414 39V16.0909H268.083V39H265.414ZM266.771 12.1534C266.224 12.1534 265.757 11.9695 265.369 11.6016C264.981 11.2237 264.787 10.7713 264.787 10.2443C264.787 9.71733 264.981 9.26989 265.369 8.90199C265.757 8.52415 266.224 8.33523 266.771 8.33523C267.318 8.33523 267.785 8.52415 268.173 8.90199C268.561 9.26989 268.755 9.71733 268.755 10.2443C268.755 10.7713 268.561 11.2237 268.173 11.6016C267.785 11.9695 267.318 12.1534 266.771 12.1534ZM287.497 21.1172L285.066 21.8033C284.827 21.1172 284.489 20.4957 284.051 19.9389C283.614 19.3821 283.042 18.9396 282.336 18.6115C281.64 18.2834 280.775 18.1193 279.741 18.1193C278.19 18.1193 276.917 18.4872 275.923 19.223C274.928 19.9588 274.431 20.9084 274.431 22.0717C274.431 23.0561 274.769 23.8565 275.445 24.473C276.132 25.0795 277.186 25.5618 278.607 25.9197L282.068 26.7699C283.987 27.2372 285.423 27.978 286.378 28.9922C287.343 30.0064 287.825 31.2791 287.825 32.8104C287.825 34.103 287.467 35.2514 286.751 36.2557C286.035 37.2599 285.036 38.0504 283.753 38.6271C282.48 39.1939 281.004 39.4773 279.323 39.4773C277.086 39.4773 275.242 38.9751 273.79 37.9709C272.338 36.9567 271.409 35.495 271.001 33.5859L273.551 32.9595C273.879 34.3217 274.521 35.3509 275.475 36.0469C276.44 36.7429 277.708 37.0909 279.279 37.0909C281.039 37.0909 282.445 36.6982 283.499 35.9126C284.553 35.1172 285.08 34.1229 285.08 32.9297C285.08 32.005 284.772 31.2294 284.156 30.603C283.539 29.9666 282.605 29.4993 281.352 29.201L277.608 28.3061C275.619 27.8288 274.148 27.0732 273.193 26.0391C272.239 25.005 271.762 23.7223 271.762 22.1911C271.762 20.9283 272.105 19.8196 272.791 18.8651C273.477 17.9006 274.421 17.1449 275.624 16.598C276.828 16.0511 278.2 15.7777 279.741 15.7777C281.839 15.7777 283.514 16.255 284.767 17.2095C286.03 18.1541 286.94 19.4567 287.497 21.1172ZM299.661 16.0909V18.4027H288.729V16.0909H299.661ZM292.144 10.6023H294.814V33.0192C294.814 33.9737 294.978 34.7244 295.306 35.2713C295.634 35.8082 296.062 36.1911 296.589 36.4197C297.116 36.6385 297.678 36.7479 298.274 36.7479C298.622 36.7479 298.92 36.728 299.169 36.6882C299.418 36.6385 299.636 36.5888 299.825 36.5391L300.392 38.9403C300.134 39.0398 299.815 39.1293 299.438 39.2088C299.06 39.2983 298.592 39.343 298.036 39.343C297.061 39.343 296.121 39.1293 295.217 38.7017C294.322 38.2741 293.586 37.6378 293.009 36.7926C292.433 35.9474 292.144 34.8984 292.144 33.6456V10.6023ZM302.691 39V16.0909H305.271V19.6108H305.465C305.922 18.4574 306.718 17.5277 307.851 16.8217C308.994 16.1058 310.287 15.7479 311.729 15.7479C311.948 15.7479 312.191 15.7528 312.46 15.7628C312.728 15.7727 312.952 15.7827 313.131 15.7926V18.4922C313.012 18.4723 312.803 18.4425 312.504 18.4027C312.206 18.3629 311.883 18.343 311.535 18.343C310.342 18.343 309.278 18.5966 308.343 19.1037C307.419 19.6009 306.688 20.2919 306.151 21.1768C305.614 22.0618 305.345 23.071 305.345 24.2045V39H302.691ZM317.208 47.5909C316.681 47.5909 316.189 47.5412 315.731 47.4418C315.274 47.3423 314.911 47.233 314.643 47.1136L315.358 44.772C316.263 45.0504 317.069 45.1499 317.775 45.0703C318.481 45.0007 319.107 44.6825 319.654 44.1158C320.201 43.5589 320.688 42.7038 321.116 41.5504L321.951 39.2237L313.524 16.0909H316.403L323.204 35.495H323.412L330.214 16.0909H333.092L323.398 42.6243C322.99 43.728 322.488 44.6477 321.891 45.3835C321.295 46.1293 320.604 46.6811 319.818 47.0391C319.042 47.407 318.172 47.5909 317.208 47.5909Z"
            fill="#666666"
          />
          <rect x="180" y="8" width="1" height="32" fill="#999999" />
        </g>
        <defs>
          <clipPath id="clip0_4322_14">
            <rect width="333" height="48" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};
