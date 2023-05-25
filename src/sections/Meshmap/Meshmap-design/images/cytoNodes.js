export const k8sService = () => {
  const size = 32;
  const width = size;
  const height = size;

  const svg = `
           <svg
            width="${width}" height="${height}"
            viewBox="0 0 122 122"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
          <path fill-rule="evenodd" clip-rule="evenodd" d="M34.6666 116.007C4.28693 101.462 -8.55109 65.0398 5.99244 34.6565C12.9766 20.0659 25.47 8.84765 40.7244 3.46957C55.9788 -1.9085 72.7445 -1.00577 87.3334 5.97907C117.713 20.5243 130.551 56.9461 116.008 87.3294C101.464 117.713 65.0465 130.552 34.6666 116.007V116.007Z" fill="#326CE5"/>
          <path d="M68.1568 65.4967C68.0594 65.4779 67.96 65.4706 67.8608 65.4748C67.6894 65.4836 67.5216 65.526 67.3674 65.5994C67.0683 65.7399 66.8364 65.9873 66.7201 66.2901C66.6038 66.5929 66.6121 66.9276 66.7432 67.2245L66.7342 67.237L69.6866 74.1764C72.5113 72.4228 74.6547 69.8034 75.778 66.7321L68.1699 65.4812L68.1568 65.4967ZM56.3188 66.4802C56.2548 66.2066 56.0983 65.9619 55.8743 65.7851C55.6503 65.6084 55.3719 65.5099 55.0835 65.5054C54.9984 65.5044 54.9134 65.5118 54.8298 65.5273L54.817 65.5122L47.275 66.7577C48.4075 69.8048 50.542 72.4031 53.3473 74.1495L56.27 67.2788L56.2471 67.2518C56.3551 67.0087 56.3802 66.7382 56.3188 66.4802V66.4802ZM62.6352 69.1747C62.5251 68.9749 62.3612 68.808 62.1612 68.6917C61.9611 68.5754 61.7324 68.5141 61.4994 68.5144C61.2663 68.5147 61.0377 68.5765 60.838 68.6933C60.6383 68.81 60.4748 68.9774 60.3652 69.1774H60.3589L56.6501 75.7022C59.3057 76.5818 62.1605 76.7247 64.8949 76.1148C65.4019 76.0025 65.8972 75.8679 66.3808 75.7109L62.6633 69.1744L62.6352 69.1747ZM74.3763 54.018L68.6698 58.9871L68.673 59.0029C68.4977 59.152 68.3671 59.3445 68.2952 59.56C68.2233 59.7754 68.2127 60.0058 68.2645 60.2267C68.3163 60.4476 68.4287 60.6507 68.5896 60.8144C68.7505 60.9782 68.954 61.0965 69.1784 61.1568L69.1853 61.1868L76.5767 63.2582C76.8962 60.0275 76.1237 56.7835 74.3763 54.0187V54.018ZM63.7746 54.5748C63.7853 54.8011 63.8588 55.0203 63.9873 55.2093C64.1159 55.3982 64.2945 55.5498 64.5045 55.6479C64.7144 55.7459 64.9477 55.7869 65.1796 55.7664C65.4115 55.7459 65.6334 55.6646 65.8217 55.5313L65.8442 55.5408L72.0882 51.2332C69.7114 48.9683 66.6356 47.5258 63.3339 47.1274L63.7676 54.5727L63.7746 54.5748ZM57.1621 55.5589C57.3505 55.6922 57.5724 55.7732 57.8044 55.7934C58.0363 55.8137 58.2696 55.7723 58.4793 55.6738C58.689 55.5754 58.8673 55.4234 58.9953 55.2341C59.1233 55.0449 59.1961 54.8254 59.2061 54.599L59.2379 54.5842L59.6717 47.1274C59.1481 47.1886 58.628 47.2757 58.1135 47.3885C55.3764 47.987 52.8658 49.318 50.8651 51.2312L57.15 55.5657L57.1621 55.5589ZM53.8116 61.1932C54.0366 61.1335 54.2406 61.0155 54.4021 60.8518C54.5635 60.688 54.6762 60.4848 54.7281 60.2636C54.7801 60.0424 54.7694 59.8117 54.6971 59.596C54.6248 59.3803 54.4937 59.1878 54.3177 59.0389L54.324 59.0096L48.586 54.0163C46.8355 56.7883 46.0841 60.0487 46.4507 63.2825L53.8057 61.2178L53.8116 61.1932ZM59.3847 63.3865L61.5014 64.3768L63.6119 63.3889L64.136 61.172L62.6754 59.3949H60.3247L58.8599 61.1693L59.3847 63.3865Z" fill="white"/>
          <path d="M96.4933 67.7536L90.4618 42.2651C90.2996 41.6057 89.989 40.9895 89.5524 40.4611C89.1158 39.9326 88.564 39.505 87.937 39.2092L63.5225 27.8686C62.8897 27.5748 62.1975 27.4224 61.4964 27.4224C60.7952 27.4224 60.103 27.5748 59.4702 27.8686L35.0606 39.2152C34.4334 39.5109 33.8815 39.9384 33.4447 40.4668C33.008 40.9952 32.6973 41.6114 32.5351 42.2708L26.5132 67.7587C26.3647 68.4029 26.3642 69.0711 26.5118 69.7156C26.5553 69.9119 26.6121 70.1052 26.6818 70.2942C26.7997 70.6168 26.9557 70.9249 27.1468 71.2124C27.2295 71.3353 27.3168 71.4549 27.4116 71.5707L44.3076 92.008C44.3814 92.0969 44.4627 92.1781 44.5434 92.2606C44.8085 92.5353 45.1079 92.7766 45.4345 92.9791C45.8477 93.232 46.2979 93.4225 46.7698 93.5439C47.1568 93.6471 47.556 93.7007 47.9573 93.7032H48.2201L75.052 93.6971C75.2152 93.6964 75.3781 93.6871 75.5402 93.6692C75.7727 93.6436 76.0029 93.6011 76.2288 93.5419C76.3907 93.5004 76.5503 93.4507 76.7069 93.393C76.8291 93.3475 76.951 93.3021 77.0687 93.2472C77.2449 93.165 77.4159 93.0726 77.5807 92.9703C78.0058 92.7102 78.3844 92.3843 78.7013 92.0053L79.2165 91.3822L95.5915 71.564C95.9053 71.1811 96.1519 70.7503 96.3213 70.2891C96.392 70.0995 96.4498 69.9055 96.4944 69.7085C96.6423 69.0642 96.6418 68.396 96.493 67.7519L96.4933 67.7536ZM71.1697 77.6668C71.2383 77.8628 71.3196 78.0544 71.4131 78.2404C71.2638 78.4946 71.2231 78.7958 71.2999 79.079C71.6552 79.8705 72.0891 80.6263 72.5954 81.3357C72.8788 81.6983 73.1404 82.0767 73.3788 82.4687C73.4377 82.5748 73.5146 82.7392 73.5703 82.8514C73.6755 83.0224 73.7427 83.2129 73.7676 83.4107C73.7926 83.6085 73.7747 83.8091 73.7152 83.9998C73.6556 84.1905 73.5557 84.3669 73.4219 84.5178C73.288 84.6686 73.1232 84.7906 72.938 84.8757C72.7529 84.9609 72.5514 85.0074 72.3466 85.0123C72.1419 85.0172 71.9383 84.9803 71.7491 84.9041C71.5598 84.8278 71.3891 84.7139 71.2478 84.5696C71.1065 84.4253 70.9979 84.2538 70.9288 84.0662C70.873 83.9551 70.7955 83.8069 70.7481 83.7018C70.5811 83.2758 70.4395 82.8408 70.324 82.399C70.0706 81.5723 69.7348 80.7717 69.3214 80.0086C69.1415 79.7727 68.8738 79.6146 68.5756 79.5684C68.5289 79.4899 68.3558 79.1814 68.263 79.0218C63.9169 80.623 59.1168 80.611 54.7792 78.9881L54.4486 79.5711C54.2126 79.6067 53.9931 79.7107 53.8188 79.8695C53.3206 80.665 52.9397 81.5247 52.6874 82.4233C52.573 82.8651 52.4322 83.3001 52.2658 83.7261C52.219 83.8305 52.1408 83.9767 52.085 84.0875V84.0905L52.0826 84.0932C52.0137 84.2811 51.905 84.4528 51.7636 84.5973C51.6223 84.7418 51.4513 84.8558 51.2619 84.9321C51.0724 85.0084 50.8686 85.0452 50.6636 85.0401C50.4586 85.035 50.257 84.9882 50.0718 84.9027C49.8866 84.8172 49.7218 84.6948 49.5881 84.5435C49.4545 84.3922 49.3549 84.2154 49.2959 84.0243C49.2368 83.8333 49.2195 83.6324 49.2452 83.4344C49.2709 83.2365 49.3389 83.046 49.4449 82.8753C49.5 82.7624 49.5737 82.5991 49.6319 82.493C49.8702 82.0999 50.1317 81.7206 50.415 81.3569C50.9305 80.6288 51.3733 79.8544 51.7375 79.0443C51.7762 78.7697 51.7309 78.4901 51.6073 78.2404L51.8732 77.6206C47.8742 75.3244 44.8771 71.6839 43.4473 67.3858L42.8107 67.4912C42.5636 67.3207 42.2724 67.2209 41.9701 67.2032C41.0989 67.3654 40.246 67.6097 39.4234 67.9324C38.9963 68.1194 38.5586 68.2824 38.1124 68.4208C38.0068 68.4491 37.8544 68.4774 37.734 68.503C37.7243 68.5064 37.716 68.5104 37.7063 68.5128C37.6988 68.5139 37.6913 68.5145 37.6838 68.5148C37.4898 68.5769 37.2847 68.5988 37.0815 68.5793C36.8784 68.5598 36.6816 68.4993 36.5039 68.4015C36.3262 68.3038 36.1714 68.171 36.0494 68.0117C35.9275 67.8524 35.841 67.6701 35.7957 67.4765C35.7503 67.2828 35.747 67.0821 35.786 66.8871C35.825 66.6921 35.9054 66.5072 36.022 66.3442C36.1387 66.1812 36.289 66.0437 36.4635 65.9405C36.6379 65.8373 36.8326 65.7706 37.035 65.7448L37.0561 65.7398L37.0689 65.7364C37.1911 65.7085 37.3476 65.6691 37.4591 65.6482C37.9239 65.5854 38.392 65.5487 38.8612 65.5384C39.746 65.4821 40.623 65.342 41.4799 65.12C41.7338 64.9627 41.9484 64.7521 42.1079 64.5037L42.7196 64.3299C42.0558 59.8439 43.1176 55.2775 45.7014 51.5063L45.233 51.1001C45.216 50.8053 45.1142 50.521 44.9394 50.2796C44.2665 49.7168 43.5387 49.2194 42.7663 48.7943C42.3493 48.5873 41.9449 48.3573 41.555 48.1051C41.4664 48.0408 41.3486 47.9441 41.2524 47.868L41.2306 47.8532C40.8982 47.6209 40.6739 47.2702 40.6066 46.8775C40.5392 46.4848 40.6344 46.0822 40.8712 45.7575C41.0112 45.5909 41.1895 45.4586 41.3918 45.3716C41.5941 45.2845 41.8146 45.245 42.0355 45.2564C42.4074 45.2719 42.7643 45.4029 43.054 45.6302C43.1534 45.706 43.2895 45.8074 43.3777 45.8811C43.7179 46.1941 44.0392 46.5259 44.3402 46.8748C44.9373 47.513 45.5971 48.0931 46.3101 48.6067C46.5772 48.7433 46.8888 48.7727 47.178 48.6885C47.352 48.812 47.5276 48.9335 47.7049 49.0529C50.2725 46.3979 53.5972 44.5501 57.2521 43.7467C58.122 43.5551 59.0047 43.4231 59.8936 43.3517L59.9282 42.7508C60.1552 42.5546 60.3197 42.2994 60.4025 42.0152C60.4344 41.1527 60.3799 40.2893 60.2398 39.4372C60.1469 38.9906 60.0803 38.5392 60.0404 38.0852C60.0366 37.9818 60.0425 37.839 60.0439 37.7211C60.0439 37.7076 60.0404 37.6945 60.0404 37.6814C60.0197 37.4827 60.042 37.2819 60.1059 37.0921C60.1699 36.9023 60.274 36.7276 60.4116 36.5794C60.5492 36.4311 60.7172 36.3126 60.9049 36.2315C61.0925 36.1503 61.2955 36.1084 61.5008 36.1083C61.7061 36.1082 61.9091 36.15 62.0968 36.2309C62.2845 36.3119 62.4527 36.4303 62.5904 36.5784C62.7282 36.7265 62.8325 36.9011 62.8966 37.0908C62.9607 37.2806 62.9832 37.4813 62.9627 37.68C62.9627 37.8046 62.9703 37.97 62.9658 38.0842C62.9258 38.5381 62.8589 38.9894 62.7654 39.4358C62.6244 40.2881 62.569 41.1518 62.5999 42.0145C62.6576 42.3029 62.8289 42.5579 63.0773 42.7252C63.0825 42.8279 63.0998 43.1708 63.1126 43.3597C67.7316 43.7684 72.0412 45.7943 75.2407 49.061L75.7967 48.6747C76.0953 48.7245 76.4023 48.6921 76.683 48.5811C77.3959 48.0666 78.0556 47.4859 78.6529 46.8471C78.9545 46.4981 79.2766 46.1663 79.6177 45.8535C79.7074 45.7788 79.8428 45.6784 79.9418 45.6023C80.0884 45.4616 80.2638 45.3525 80.4565 45.2821C80.6493 45.2117 80.8551 45.1815 81.0607 45.1934C81.2662 45.2054 81.4668 45.2593 81.6496 45.3516C81.8323 45.4439 81.9931 45.5726 82.1214 45.7292C82.2497 45.8859 82.3427 46.067 82.3944 46.2609C82.4461 46.4548 82.4553 46.6572 82.4215 46.8547C82.3876 47.0523 82.3114 47.2408 82.1978 47.4079C82.0842 47.5749 81.9358 47.7169 81.7621 47.8246C81.6641 47.9017 81.5347 48.0091 81.4405 48.0772C81.0498 48.3295 80.6444 48.5596 80.2264 48.7663C79.4542 49.1916 78.7264 49.6891 78.0533 50.2517C77.8573 50.4749 77.7589 50.7638 77.7791 51.0567C77.6977 51.1294 77.4121 51.3756 77.2608 51.509C79.8519 55.2667 80.935 59.8191 80.3046 64.3023L80.8945 64.4693C81.0419 64.7276 81.26 64.9411 81.5246 65.086C82.3819 65.3082 83.2594 65.4487 84.1447 65.5054C84.6133 65.5158 85.081 65.5523 85.5454 65.6145C85.6683 65.6364 85.8459 65.6842 85.9712 65.7122C86.1737 65.738 86.3683 65.8048 86.5427 65.9081C86.7171 66.0114 86.8674 66.1489 86.984 66.312C87.1006 66.4751 87.1809 66.66 87.2198 66.855C87.2587 67.05 87.2553 67.2508 87.2098 67.4444C87.1643 67.6381 87.0778 67.8203 86.9558 67.9796C86.8337 68.1388 86.6789 68.2715 86.5011 68.3692C86.3233 68.4668 86.1265 68.5273 85.9233 68.5467C85.7201 68.5661 85.515 68.544 85.3211 68.4818L85.2999 68.4791C85.2903 68.4767 85.2812 68.4717 85.2712 68.4693C85.1507 68.4437 84.9994 68.4181 84.8939 68.3912C84.4477 68.2517 84.0102 68.0873 83.5835 67.8988C82.7601 67.5757 81.9064 67.3315 81.0344 67.1696C80.7326 67.1603 80.4391 67.2663 80.2167 67.4649C80.0089 67.4266 79.8008 67.3911 79.5921 67.3585C78.1794 71.6834 75.1818 75.3521 71.1697 77.6668V77.6668Z" fill="white"/>
          </svg>
          `;
  return {
    svg: "data:image/svg+xml;base64," + btoa(svg),
    width,
    height
  };
};

export const clusterRole = () => {
  const size = 30;
  const width = size;
  const height = size;
  const svg = `
    <svg width="${width}" height="${height}" viewBox="0 0 121 151" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="2.5791" y="3.15723" width="115" height="145" rx="22.5" fill="#326CE5" stroke="#326CE5" stroke-width="5"/>
<path d="M29.0791 106.657C29.0791 100.292 31.5695 94.1875 36.0026 89.6867C40.4356 85.1858 46.448 82.6572 52.7173 82.6572C58.9865 82.6572 64.999 85.1858 69.432 89.6867C73.865 94.1875 76.3555 100.292 76.3555 106.657H29.0791ZM52.7173 79.6572C42.9222 79.6572 34.9886 71.6022 34.9886 61.6572C34.9886 51.7122 42.9222 43.6572 52.7173 43.6572C62.5124 43.6572 70.4459 51.7122 70.4459 61.6572C70.4459 71.6022 62.5124 79.6572 52.7173 79.6572ZM74.4733 86.3562C78.993 87.5357 83.0311 90.1328 86.0126 93.7777C88.9941 97.4227 90.7671 101.93 91.0791 106.657H82.265C82.265 98.8272 79.3102 91.6992 74.4733 86.3562ZM68.4958 79.5282C70.9719 77.2797 72.952 74.5252 74.3065 71.4455C75.661 68.3657 76.3592 65.0301 76.3555 61.6572C76.3618 57.5576 75.3289 53.5253 73.3564 49.9482C76.7031 50.631 79.7136 52.4693 81.8763 55.1508C84.039 57.8323 85.2205 61.1914 85.2198 64.6572C85.2206 66.7946 84.7714 68.9075 83.9023 70.8543C83.0332 72.801 81.7643 74.5366 80.1806 75.9449C78.5969 77.3531 76.7351 78.4013 74.7198 79.0193C72.7046 79.6373 70.5825 79.8108 68.4958 79.5282Z" fill="white"/>
</svg>
    `;
  return {
    svg: "data:image/svg+xml;base64," + btoa(svg),
    width,
    height
  };
};

