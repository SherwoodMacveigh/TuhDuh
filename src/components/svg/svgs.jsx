import React from "react";

const svgs = {
  logo: (
    <svg viewBox="0 0 88 50" fill="none">
      <path
        d="M16.5228 27.2242V6.70265H24.7071V1.80963H2.77759V6.70459H10.9618V27.1989C11.8414 26.9368 12.7808 26.7951 13.7684 26.7951C14.756 26.7951 15.6722 26.9679 16.5228 27.2261V27.2242Z"
        fill="currentColor"
      />
      <path
        d="M39.1872 27.6882C43.2437 27.6882 46.4977 26.1737 48.2819 23.603C49.7151 21.5603 50.2397 18.7798 50.2397 14.9412V1.80963H44.889V14.9082C44.889 17.5838 44.5746 19.3449 43.805 20.5409C42.9659 21.8438 41.5308 22.6535 39.328 22.6535C36.9497 22.6535 35.4799 21.6671 34.7103 20.4361C33.9754 19.2381 33.7304 17.5838 33.7304 14.8732V1.80963H28.1694V15.0829C28.1694 18.7099 28.6941 21.4904 30.0578 23.5331C31.842 26.1737 35.1288 27.6882 39.1872 27.6882Z"
        fill="currentColor"
      />
      <path
        d="M59.8224 19.2187V16.5625H70.7688V27.3018H76.3317V1.80963H70.7688V11.6675H59.8224V1.80963H54.2595V19.1391L59.8224 19.2187Z"
        fill="currentColor"
      />
      <path
        d="M78.8528 33.1113C78.8528 31.5832 79.9812 30.527 81.615 30.527C83.0925 30.527 84.2595 31.3871 84.2595 33.0725C84.2595 34.7579 83.2102 35.8141 81.4973 35.8141C79.9407 35.8141 78.8528 34.7559 78.8528 33.1113ZM79.5144 25.9854C79.5144 22.5389 79.1634 15.413 79.1634 9.46177C79.1634 8.91422 79.4353 8.48317 80.0969 8.48317H82.9748C83.7136 8.48317 83.9856 8.91422 83.9856 9.50061C83.9856 15.413 83.675 22.5389 83.675 25.9466C83.675 26.5737 83.3645 26.9252 82.7414 26.9252H80.3689C79.825 26.9252 79.5125 26.6126 79.5125 25.9854H79.5144Z"
        fill="currentColor"
      />
      <path
        d="M24.0378 20.7409C24.7765 20.7409 25.1276 21.2108 25.1276 21.9157C25.1276 24.9699 24.5836 35.8161 24.5836 40.3188C24.5836 42.0022 25.1681 43.2546 26.5665 43.2546C28.3372 43.2546 29.9671 40.8256 30.7271 38.9732V31.1172C30.7271 30.3736 31.1168 30.0202 31.8169 30.0202H35.4336C36.1338 30.0202 36.5234 30.4512 36.5234 31.0784C36.5234 33.5443 36.2514 37.1481 36.2514 39.7713C36.2514 42.0819 36.7568 43.2566 38.3906 43.2566C40.7245 43.2566 42.8637 38.2451 42.8637 32.4104V31.1172C42.8637 30.4512 43.1742 30.0202 43.9149 30.0202H47.5316C48.2703 30.0202 48.66 30.4124 48.66 31.1561C48.66 31.8997 48.1932 37.6568 48.1932 40.4742C48.1932 42.0022 48.8934 43.2546 50.0989 43.2546C51.8638 43.2546 53.4552 40.7343 54.1824 38.9713V22.8088C54.1824 22.0263 54.5334 21.6341 55.2722 21.6341H58.6959C59.3961 21.6341 59.7858 22.0652 59.7858 22.8088V27.162C59.7858 29.0804 59.6295 31.9386 59.5138 33.0356L59.67 33.0744C60.9527 30.96 63.0147 29.4726 66.2437 29.4726C69.8623 29.4726 72.1557 31.4687 72.1557 35.0724C72.1557 36.2471 71.9609 38.3616 71.9609 40.2023C71.9609 42.043 72.4277 43.2566 73.7104 43.2566C75.3056 43.2566 77.0165 40.9071 77.8343 38.6762C77.9115 38.4801 78.0291 38.4024 78.1835 38.4024C78.5345 38.4024 81.2176 39.6159 81.2176 40.0858C81.2176 40.2043 81.179 40.3596 81.1404 40.478C80.3631 43.2585 77.4447 48.1923 72.2714 48.1923C68.7319 48.1923 66.126 45.5691 66.126 42.4352C66.126 40.5169 66.2417 38.9111 66.2417 37.0704C66.2417 35.5831 65.6592 34.4084 64.2974 34.4084C61.3404 34.4084 59.7858 40.9071 59.7858 45.1361V46.4273C59.7858 47.2486 59.4752 47.6797 58.6959 47.6797H55.2336C54.5334 47.6797 54.1824 47.2486 54.1824 46.4273V46.0176C52.7087 47.3166 50.8261 48.1884 48.5442 48.1884C45.3538 48.1884 43.2919 46.5827 43.2919 44.507V44.3886L43.1356 44.3497C42.0458 46.4254 39.9472 48.1865 36.6391 48.1865C34.2145 48.1865 32.4843 47.0739 31.545 45.2079C29.9729 46.9263 27.7952 48.1865 25.0871 48.1865C21.781 48.1865 19.3293 46.7768 19.3293 44.5458V44.3886L19.1731 44.3497C18.1624 46.1904 16.139 48.1865 12.8329 48.1865C8.04923 48.1865 5.24849 44.3497 5.24849 39.1422C5.24849 33.9346 8.43886 29.4707 13.7664 29.4707C16.139 29.4707 18.3186 30.6842 19.4856 31.5075L19.6013 31.4687V21.8749C19.6013 21.1312 19.991 20.739 20.6121 20.739H24.0358M14.0808 43.2566C17.2693 43.2566 18.905 38.4412 18.905 35.7772C18.1662 35.1909 16.9993 34.4064 15.6375 34.4064C13.0701 34.4064 11.1258 36.5597 11.1258 39.4975C11.1258 41.7692 12.2542 43.2566 14.0828 43.2566"
        fill="currentColor"
      />
    </svg>
  ),
  star: (
    <svg viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M3.64009 8.91267L5.75896 7.63463L7.87782 8.92949L7.32288 6.50793L9.18949 4.89356L6.7343 4.67495L5.75896 2.38792L4.78361 4.65813L2.32842 4.87674L4.19503 6.50793L3.64009 8.91267ZM5.75896 9.21536L2.96744 10.897C2.84412 10.9755 2.71519 11.0091 2.58066 10.9979C2.44613 10.9867 2.32842 10.9418 2.22752 10.8634C2.12662 10.7849 2.04815 10.6868 1.99209 10.5691C1.93604 10.4514 1.92483 10.3196 1.95846 10.1739L2.69838 6.9956L0.226374 4.85993C0.114265 4.75903 0.0441968 4.64412 0.0161696 4.51519C-0.0118577 4.38627 -0.00344951 4.26014 0.0413941 4.13682C0.0862377 4.0135 0.153503 3.91261 0.24319 3.83413C0.332878 3.75565 0.456198 3.7052 0.61315 3.68278L3.87552 3.3969L5.13675 0.403593C5.1928 0.269062 5.27969 0.168164 5.3974 0.100898C5.51512 0.0336327 5.63564 0 5.75896 0C5.88228 0 6.00279 0.0336327 6.12051 0.100898C6.23822 0.168164 6.32511 0.269062 6.38116 0.403593L7.64239 3.3969L10.9048 3.68278C11.0617 3.7052 11.185 3.75565 11.2747 3.83413C11.3644 3.91261 11.4317 4.0135 11.4765 4.13682C11.5214 4.26014 11.5298 4.38627 11.5017 4.51519C11.4737 4.64412 11.4036 4.75903 11.2915 4.85993L8.81953 6.9956L9.55945 10.1739C9.59309 10.3196 9.58187 10.4514 9.52582 10.5691C9.46976 10.6868 9.39129 10.7849 9.29039 10.8634C9.18949 10.9418 9.07178 10.9867 8.93725 10.9979C8.80272 11.0091 8.67379 10.9755 8.55047 10.897L5.75896 9.21536Z"
        fill="currentColor"
      />
    </svg>
  ),
  "checkmark-circle-icon": (
    <svg viewBox="0 0 18 18" fill="none">
      <path
        fill="currentColor"
        d="M6.3 13.5h5.4a.87.87 0 0 0 .641-.259.87.87 0 0 0 .259-.641.87.87 0 0 0-.259-.641.871.871 0 0 0-.641-.259H6.3a.87.87 0 0 0-.641.259.87.87 0 0 0-.259.641.87.87 0 0 0 .259.641.87.87 0 0 0 .641.259Zm1.755-5.22L6.75 6.975a.853.853 0 0 0-.63-.247.853.853 0 0 0-.63.247.853.853 0 0 0-.248.63c0 .255.083.465.248.63l1.935 1.935c.18.18.39.27.63.27s.45-.09.63-.27l3.825-3.825a.838.838 0 0 0 .259-.641.841.841 0 0 0-.281-.619.875.875 0 0 0-.642-.236.88.88 0 0 0-.619.258L8.055 8.28ZM9 18a8.764 8.764 0 0 1-3.51-.709 9.089 9.089 0 0 1-2.858-1.924A9.089 9.089 0 0 1 .71 12.51 8.764 8.764 0 0 1 0 9c0-1.245.236-2.415.709-3.51a9.089 9.089 0 0 1 1.923-2.858A9.089 9.089 0 0 1 5.49.71 8.764 8.764 0 0 1 9 0c1.245 0 2.415.236 3.51.709a9.089 9.089 0 0 1 2.857 1.923 9.089 9.089 0 0 1 1.924 2.858A8.764 8.764 0 0 1 18 9a8.764 8.764 0 0 1-.709 3.51 9.089 9.089 0 0 1-1.924 2.857 9.089 9.089 0 0 1-2.857 1.924A8.764 8.764 0 0 1 9 18Zm0-1.8c2.01 0 3.713-.697 5.107-2.092C15.503 12.712 16.2 11.01 16.2 9s-.697-3.713-2.092-5.107C12.712 2.498 11.01 1.8 9 1.8s-3.713.698-5.107 2.093C2.498 5.287 1.8 6.99 1.8 9c0 2.01.698 3.713 2.093 5.107C5.287 15.503 6.99 16.2 9 16.2Z"
      />
    </svg>
  ),
  "messages-icon": (
    <svg viewBox="0 0 17 17" fill="none">
      <path
        fill="currentColor"
        d="M4.25 14.619a.794.794 0 0 1-.606-.263.92.92 0 0 1-.244-.65v-1.828h11.05V3.655h1.7c.24 0 .443.087.606.262a.92.92 0 0 1 .244.651v11.49c0 .411-.174.697-.52.857-.348.16-.656.095-.925-.194L13.6 14.619H4.25Zm-.85-4.568-1.955 2.101c-.27.29-.577.354-.924.194-.347-.16-.521-.445-.521-.856V.914A.92.92 0 0 1 .244.263.794.794 0 0 1 .85 0H11.9c.24 0 .443.088.606.263a.92.92 0 0 1 .244.65v8.224a.92.92 0 0 1-.244.65.794.794 0 0 1-.606.264H3.4Zm7.65-1.828V1.827H1.7v6.396h9.35Z"
      />
    </svg>
  ),
  "home-icon": (
    <svg viewBox="0 0 20 19" fill="none">
      <path
        fill="currentColor"
        d="M2.755 16.306v-6.68l-.906.701a.936.936 0 0 1-.68.181.827.827 0 0 1-.589-.362.935.935 0 0 1-.18-.68.85.85 0 0 1 .339-.588l2.016-1.54V5.435c0-.256.086-.471.26-.645a.877.877 0 0 1 .645-.26c.257 0 .472.086.646.26.173.174.26.389.26.645v.521L8.892 2.65a1.771 1.771 0 0 1 1.11-.385c.407 0 .777.128 1.11.385l8.152 6.228a.85.85 0 0 1 .34.589.935.935 0 0 1-.181.679.85.85 0 0 1-.589.34.864.864 0 0 1-.657-.181l-.928-.68v6.681c0 .498-.178.925-.532 1.28a1.745 1.745 0 0 1-1.28.532H4.567c-.499 0-.925-.178-1.28-.532a1.745 1.745 0 0 1-.532-1.28Zm1.811 0h4.53v-2.718c0-.256.087-.471.26-.645a.877.877 0 0 1 .646-.26c.256 0 .471.086.645.26.174.174.26.389.26.645v2.718h4.53V8.244l-5.435-4.145-5.436 4.145v8.062ZM3.932 3.624a.907.907 0 0 1-.804-.43.8.8 0 0 1-.034-.884 2.869 2.869 0 0 1 1.008-1.03c.415-.25.872-.374 1.37-.374A.973.973 0 0 0 5.948.78a.803.803 0 0 0 .34-.35A.824.824 0 0 1 7.035 0a.88.88 0 0 1 .793.43.814.814 0 0 1 .022.884 2.869 2.869 0 0 1-1.008 1.03c-.415.25-.872.374-1.37.374a1.05 1.05 0 0 0-.475.113.724.724 0 0 0-.34.362.854.854 0 0 1-.295.317.795.795 0 0 1-.43.114Z"
      />
    </svg>
  ),
  "mood-icon": (
    <svg viewBox="0 0 18 18" fill="none">
      <path
        fill="currentColor"
        d="M9 13.95c.87 0 1.672-.21 2.408-.63a4.978 4.978 0 0 0 1.777-1.71.536.536 0 0 0-.023-.54.513.513 0 0 0-.472-.27H5.31c-.21 0-.367.09-.472.27a.536.536 0 0 0-.023.54 4.95 4.95 0 0 0 1.789 1.71c.742.42 1.541.63 2.396.63ZM6.21 7.155l.473.473a.648.648 0 0 0 .472.202c.18 0 .337-.067.473-.202a.61.61 0 0 0 .19-.473.738.738 0 0 0-.19-.473l-.788-.81a.876.876 0 0 0-.641-.27.876.876 0 0 0-.641.27l-.81.81a.648.648 0 0 0-.203.473c0 .18.067.337.202.473.12.12.274.183.462.19a.661.661 0 0 0 .484-.168l.517-.495Zm5.58 0 .518.495c.135.12.292.18.472.18s.338-.067.473-.202a.648.648 0 0 0 .202-.473.648.648 0 0 0-.203-.473l-.81-.81a.876.876 0 0 0-.64-.27.876.876 0 0 0-.642.27l-.81.81a.689.689 0 0 0-.18.473c0 .18.068.337.203.473a.648.648 0 0 0 .472.202c.18 0 .337-.067.473-.202l.472-.473ZM9 18a8.764 8.764 0 0 1-3.51-.709 9.089 9.089 0 0 1-2.858-1.924A9.089 9.089 0 0 1 .71 12.51 8.764 8.764 0 0 1 0 9c0-1.245.236-2.415.709-3.51a9.089 9.089 0 0 1 1.923-2.858A9.089 9.089 0 0 1 5.49.71 8.764 8.764 0 0 1 9 0c1.245 0 2.415.236 3.51.709a9.089 9.089 0 0 1 2.857 1.923 9.089 9.089 0 0 1 1.924 2.858A8.764 8.764 0 0 1 18 9a8.764 8.764 0 0 1-.709 3.51 9.089 9.089 0 0 1-1.924 2.857 9.089 9.089 0 0 1-2.857 1.924A8.764 8.764 0 0 1 9 18Zm0-1.8c2.01 0 3.713-.697 5.107-2.092C15.503 12.712 16.2 11.01 16.2 9s-.697-3.713-2.092-5.107C12.712 2.498 11.01 1.8 9 1.8s-3.713.698-5.107 2.093C2.498 5.287 1.8 6.99 1.8 9c0 2.01.698 3.713 2.093 5.107C5.287 15.503 6.99 16.2 9 16.2Z"
      />
    </svg>
  ),
};

export default svgs;
