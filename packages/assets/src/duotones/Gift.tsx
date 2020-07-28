import * as React from 'react';
import styled from 'styled-components';
import { ColorProps, useTheme } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';

const Svg = ({ secondaryColor, ...rest }: any) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 174 174"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <path
      opacity={0.1}
      d="M102.515 106.517H58.464C52.838 106.517 48.285 101.964 48.285 96.338V53.621C48.285 47.995 52.838 43.442 58.464 43.442H102.515C108.141 43.442 112.694 47.995 112.694 53.621V96.338C112.694 101.964 108.141 106.517 102.515 106.517Z"
      fill="currentColor"
    />
    <path
      d="M62.8501 115.304V83.121H112.31V93.641C112.31 93.9739 112.041 94.243 111.708 94.243C111.375 94.243 111.106 93.9739 111.106 93.641V84.825V84.325H110.606H64.5541H64.0541V84.825V115.333C64.0541 118.161 66.366 120.473 69.1941 120.473H95.7291C96.0619 120.473 96.3311 120.742 96.3311 121.075C96.3311 121.391 96.0796 121.648 95.7291 121.648H69.1941C65.7002 121.648 62.8501 118.798 62.8501 115.304Z"
      fill={secondaryColor}
      stroke={secondaryColor}
    />
    <path
      d="M112.984 84.796H62.1761C59.7111 84.796 57.7101 82.795 57.7101 80.33V74.414C57.7101 71.949 59.7111 69.948 62.1761 69.948H112.955C115.42 69.948 117.421 71.949 117.421 74.414V80.33C117.421 82.795 115.42 84.796 112.984 84.796ZM62.1761 72.181C60.9291 72.181 59.9141 73.196 59.9141 74.443V80.359C59.9141 81.606 60.9291 82.621 62.1761 82.621H112.955C114.202 82.621 115.217 81.606 115.217 80.359V74.443C115.217 73.196 114.202 72.181 112.955 72.181H62.1761Z"
      fill="currentColor"
    />
    <path
      d="M87.58 121.648C87.2472 121.648 86.978 121.379 86.978 121.046V71.079C86.978 70.7461 87.2472 70.477 87.58 70.477C87.9129 70.477 88.182 70.7461 88.182 71.079V121.075C88.182 121.391 87.9305 121.648 87.58 121.648Z"
      fill={secondaryColor}
      stroke={secondaryColor}
    />
    <path
      d="M68.2745 64.8451L68.2743 64.8447C66.9809 62.3657 67.4177 59.7165 69.3846 57.9356L69.3846 57.9357L69.3877 57.9328C71.4306 56.0512 75.4135 55.098 79.2159 57.5778L79.2178 57.579C82.3453 59.5986 84.5503 62.8232 85.9936 65.6274C87.3547 68.272 88.0155 70.4967 88.1316 70.8873C88.1368 70.9051 88.141 70.919 88.144 70.9291L88.3288 71.5912L87.6228 71.654L87.5956 71.6564L87.569 71.6617C87.5702 71.6615 87.5699 71.6615 87.5679 71.6618C87.5629 71.6625 87.5467 71.6649 87.5149 71.6685C87.4753 71.673 87.4214 71.6783 87.3532 71.6842C87.2172 71.6959 87.0305 71.7091 86.7991 71.7216C86.3366 71.7465 85.7003 71.768 84.941 71.768C82.6443 71.768 79.2489 71.559 76.0319 70.5755C72.8107 69.5906 69.8399 67.8524 68.2745 64.8451ZM70.2219 58.8179L70.2219 58.8179L70.2188 58.8207C69.4357 59.5399 68.9445 60.4071 68.7943 61.3625C68.6445 62.3158 68.8405 63.3158 69.3605 64.2938C70.9704 67.3876 74.3175 68.9588 77.6096 69.7561C80.9198 70.5578 84.298 70.6078 86.1419 70.5639L86.8378 70.5473L86.5999 69.8931C86.129 68.5982 85.2675 66.506 83.9647 64.3764C82.6643 62.251 80.9057 60.0573 78.6283 58.5943L78.627 58.5935C77.1854 57.6733 75.7293 57.297 74.414 57.297C72.7299 57.297 71.2169 57.9192 70.2219 58.8179Z"
      fill={secondaryColor}
      stroke={secondaryColor}
    />
    <path
      d="M87.5461 71.6588L87.5273 71.6557L87.5082 71.654L86.8022 71.5912L86.987 70.929C86.99 70.919 86.9941 70.905 86.9994 70.8873C87.1155 70.4966 87.7763 68.272 89.1374 65.6274C90.5807 62.8232 92.7857 59.5986 95.9132 57.579L95.9137 57.5787C99.7428 55.0994 103.699 56.0775 105.745 57.9342C107.718 59.7488 108.175 62.3702 106.859 64.841L106.859 64.8409L106.856 64.8467C105.305 67.8528 102.342 69.5907 99.1242 70.5755C95.911 71.559 92.5157 71.768 90.2189 71.768C88.6865 71.768 87.6771 71.6806 87.5461 71.6588ZM88.5884 69.8948L88.3558 70.5418L89.0429 70.5637C90.8754 70.6224 94.2468 70.5797 97.5576 69.7778C100.852 68.9801 104.205 67.4009 105.829 64.2925L105.83 64.2903C106.334 63.3145 106.53 62.3165 106.384 61.3646C106.238 60.41 105.755 59.5416 104.97 58.8207L104.969 58.8193C103.174 57.1851 99.8225 56.5025 96.591 58.5645L96.589 58.5658C94.2984 60.0426 92.5327 62.2352 91.2283 64.3614C89.9216 66.4912 89.0598 68.5839 88.5884 69.8948Z"
      fill={secondaryColor}
      stroke={secondaryColor}
    />
    <path
      d="M87.58 144.79C87.2472 144.79 86.978 144.521 86.978 144.188V136.01C86.978 135.677 87.2472 135.408 87.58 135.408C87.9129 135.408 88.182 135.677 88.182 136.01V144.188C88.182 144.521 87.9129 144.79 87.58 144.79Z"
      fill={secondaryColor}
      stroke={secondaryColor}
    />
    <path
      d="M87.58 44.015C87.2472 44.015 86.978 43.7459 86.978 43.413V35.235C86.978 34.9021 87.2472 34.633 87.58 34.633C87.9129 34.633 88.182 34.9021 88.182 35.235V43.413C88.182 43.7459 87.9129 44.015 87.58 44.015Z"
      fill={secondaryColor}
      stroke={secondaryColor}
    />
    <path
      d="M142.042 90.299H133.864C133.531 90.299 133.262 90.0299 133.262 89.697C133.262 89.3642 133.531 89.095 133.864 89.095H142.042C142.375 89.095 142.644 89.3642 142.644 89.697C142.644 90.0503 142.384 90.299 142.042 90.299Z"
      fill={secondaryColor}
      stroke={secondaryColor}
    />
    <path
      d="M41.2961 90.299H33.1181C32.7853 90.299 32.5161 90.0299 32.5161 89.697C32.5161 89.3642 32.7853 89.095 33.1181 89.095H41.2961C41.629 89.095 41.8981 89.3642 41.8981 89.697C41.8981 90.0503 41.6376 90.299 41.2961 90.299Z"
      fill={secondaryColor}
      stroke={secondaryColor}
    />
    <path
      d="M54.839 57.587C54.6976 57.587 54.553 57.5349 54.3967 57.4016L48.6385 51.6434C48.3988 51.4037 48.3988 51.0243 48.6385 50.7845C48.8783 50.5448 49.2577 50.5448 49.4974 50.7845L55.2684 56.5555C55.5082 56.7953 55.5082 57.1747 55.2684 57.4144C55.163 57.5199 55.0019 57.587 54.839 57.587Z"
      fill={secondaryColor}
      stroke={secondaryColor}
    />
    <path
      d="M49.068 128.811C48.9271 128.811 48.7832 128.759 48.6276 128.627C48.3989 128.387 48.4025 128.016 48.6385 127.78L54.4095 122.009C54.6493 121.769 55.0287 121.769 55.2684 122.009C55.5082 122.248 55.5082 122.628 55.2684 122.867L49.4974 128.638C49.37 128.766 49.2415 128.811 49.068 128.811Z"
      fill={secondaryColor}
      stroke={secondaryColor}
    />
    <path
      d="M120.321 57.587C120.18 57.587 120.036 57.5353 119.881 57.4032C119.652 57.163 119.656 56.7916 119.892 56.5555L125.663 50.7845C125.902 50.5448 126.282 50.5448 126.521 50.7845C126.761 51.0243 126.761 51.4037 126.521 51.6434L120.764 57.4014C120.611 57.5303 120.44 57.587 120.321 57.587Z"
      fill={secondaryColor}
      stroke={secondaryColor}
    />
    <path
      d="M68.6089 131.945L68.6089 131.945L68.6108 131.941C68.7325 131.652 69.1018 131.5 69.406 131.628C69.6943 131.749 69.8466 132.117 69.72 132.421L66.4731 139.93L66.4724 139.931C66.3786 140.15 66.1555 140.295 65.917 140.295C65.8416 140.295 65.7609 140.28 65.6721 140.245C65.3863 140.122 65.236 139.756 65.362 139.454L68.6089 131.945Z"
      fill={secondaryColor}
      stroke={secondaryColor}
    />
    <path
      d="M108.687 39.4934L108.687 39.4935L108.689 39.489C108.81 39.2001 109.18 39.0478 109.484 39.1758C109.772 39.2972 109.925 39.6653 109.798 39.9691L106.554 47.4702C106.434 47.7231 106.208 47.843 105.995 47.843C105.92 47.843 105.839 47.8284 105.75 47.7935C105.464 47.6704 105.314 47.3043 105.44 47.0019L108.687 39.4934Z"
      fill={secondaryColor}
      stroke={secondaryColor}
    />
    <path
      d="M37.3765 68.6191L37.3765 68.619L37.3721 68.6172C37.0831 68.4955 36.9308 68.1261 37.0589 67.822C37.1803 67.5337 37.5484 67.3814 37.8521 67.508L45.3606 70.7549L45.3606 70.7549L45.365 70.7568C45.6494 70.8765 45.8014 71.2361 45.6842 71.5373C45.555 71.7822 45.3176 71.913 45.1241 71.913C45.049 71.913 44.9687 71.8986 44.8804 71.864L37.3765 68.6191Z"
      fill={secondaryColor}
      stroke={secondaryColor}
    />
    <path
      d="M66.9907 39.2845L66.9908 39.2845L66.9868 39.275C66.871 38.9997 67.0107 38.6428 67.3291 38.5088C67.6031 38.3934 67.9581 38.5315 68.0935 38.8469L71.1073 46.4395L71.1072 46.4395L71.1112 46.449C71.2271 46.7242 71.0873 47.0812 70.769 47.2152L70.754 47.2215L70.7394 47.2288C70.707 47.245 70.6419 47.263 70.557 47.263C70.3246 47.263 70.1039 47.1248 70.0064 46.8817C70.0064 46.8816 70.0063 46.8814 70.0063 46.8813L66.9907 39.2845Z"
      fill={secondaryColor}
      stroke={secondaryColor}
    />
    <path
      d="M36.3664 109.956L36.3664 109.956L36.3629 109.948C36.2476 109.674 36.3857 109.319 36.7011 109.184L44.2936 106.17L44.2936 106.17L44.3031 106.166C44.5784 106.05 44.9353 106.19 45.0693 106.508L45.5237 106.317L45.0693 106.508C45.1847 106.782 45.0466 107.137 44.7312 107.272L37.1386 110.286L37.1187 110.294L37.0995 110.304C37.0671 110.32 37.002 110.338 36.9171 110.338C36.6846 110.338 36.4637 110.2 36.3664 109.956Z"
      fill={secondaryColor}
      stroke={secondaryColor}
    />
    <path
      d="M130.065 72.9233L130.065 72.9233L130.062 72.915C129.947 72.641 130.085 72.2859 130.4 72.1506L137.993 69.1367L137.994 69.1363C138.303 69.0127 138.634 69.157 138.768 69.475C138.884 69.7491 138.746 70.1041 138.43 70.2395L130.838 73.2533L130.818 73.2612L130.798 73.2708C130.766 73.287 130.701 73.305 130.616 73.305C130.384 73.305 130.163 73.1667 130.065 72.9233Z"
      fill={secondaryColor}
      stroke={secondaryColor}
    />
    <path
      d="M118.929 137.054C108.17 137.054 99.412 128.296 99.412 117.537C99.412 106.778 108.17 98.02 118.929 98.02C129.688 98.02 138.446 106.778 138.446 117.537C138.446 128.296 129.717 137.054 118.929 137.054ZM118.929 100.166C109.359 100.166 101.587 107.938 101.587 117.508C101.587 127.078 109.359 134.85 118.929 134.85C128.499 134.85 136.271 127.078 136.271 117.508C136.271 107.938 128.499 100.166 118.929 100.166Z"
      fill="currentColor"
    />
    <path
      d="M116.754 125.918C116.464 125.918 116.203 125.802 115.971 125.599C115.536 125.164 115.536 124.468 115.971 124.033L129.427 110.577C129.862 110.142 130.558 110.142 130.993 110.577C131.428 111.012 131.428 111.708 130.993 112.143L117.537 125.599C117.305 125.831 117.015 125.918 116.754 125.918Z"
      fill="currentColor"
    />
    <path
      d="M116.754 125.918C116.464 125.918 116.203 125.802 115.971 125.599L107.88 117.537C107.445 117.102 107.445 116.406 107.88 115.971C108.315 115.536 109.011 115.536 109.446 115.971L117.537 124.062C117.972 124.497 117.972 125.193 117.537 125.628C117.305 125.831 117.015 125.918 116.754 125.918Z"
      fill="currentColor"
    />
  </svg>
);

type SvgProps = {
  color?: ColorProps;
  height?: string | number;
  width?: string | number;
  fontSize?: string | number;
  verticalAlign?: string;
};

const Component = styled(Svg)<SvgProps>(
  ({ color, height, width, fontSize, verticalAlign, theme }) => ({
    ...(color && {
      color: themed('color', color)(theme),
    }),
    height,
    width,
    fontSize,
    verticalAlign,
  })
);

const Gift = (props): any => {
  const theme = useTheme();
  return <Component secondaryColor={theme.color.bulma[100]} {...props} />;
};

Gift.defaultProps = {
  verticalAlign: 'middle',
};
export default Gift;
