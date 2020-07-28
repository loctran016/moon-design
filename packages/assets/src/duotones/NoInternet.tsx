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
      d="M92.6883 112.491C113.235 112.491 129.891 95.8349 129.891 75.2882C129.891 54.7414 113.235 38.085 92.6883 38.085C72.1415 38.085 55.4851 54.7414 55.4851 75.2882C55.4851 95.8349 72.1415 112.491 92.6883 112.491Z"
      fill="currentColor"
    />
    <path
      d="M120.696 97.6548C120.646 97.6548 120.572 97.6548 120.522 97.63C120 97.5306 119.677 97.0335 119.777 96.5116C120.274 94.0513 120.522 91.5164 120.522 89.0064C120.522 68.0315 103.474 50.9831 82.499 50.9831C76.1866 50.9831 69.9239 52.5737 64.4068 55.5559C63.9595 55.8044 63.3879 55.6304 63.1394 55.1831C62.8909 54.7358 63.0648 54.1642 63.5122 53.9157C69.3026 50.7595 75.8884 49.1193 82.5238 49.1193C104.518 49.1193 122.411 67.0126 122.411 89.0064C122.411 91.6655 122.138 94.3247 121.641 96.8844C121.516 97.3317 121.143 97.6548 120.696 97.6548Z"
      fill={secondaryColor}
    />
    <path
      d="M82.4989 128.894C60.5051 128.894 42.6118 111 42.6118 89.0064C42.6118 88.0869 42.6367 87.1425 42.7112 86.1982C42.7361 85.6763 43.1834 85.2787 43.7053 85.3284C44.2272 85.3532 44.6248 85.8254 44.5751 86.3224C44.5254 87.2171 44.4757 88.1118 44.4757 89.0064C44.4757 109.981 61.524 127.03 82.4989 127.03C86.4255 127.03 90.2775 126.433 93.9805 125.265C94.4775 125.116 94.9994 125.389 95.1734 125.886C95.3225 126.384 95.0491 126.905 94.5521 127.079C90.6752 128.272 86.6243 128.894 82.4989 128.894Z"
      fill={secondaryColor}
    />
    <path
      d="M95.3724 68.9261C94.9747 68.9261 94.6268 68.6776 94.4777 68.3048C94.3037 67.8078 94.5523 67.2859 95.0493 67.112C99.8457 65.422 104.195 62.8375 107.972 59.4328C108.37 59.0848 108.941 59.1097 109.289 59.5073C109.637 59.9049 109.612 60.4765 109.215 60.8245C105.239 64.428 100.666 67.1368 95.6457 68.9013C95.596 68.9013 95.4718 68.9261 95.3724 68.9261Z"
      fill={secondaryColor}
    />
    <path
      d="M56.3798 118.853C56.1313 118.853 55.8579 118.754 55.684 118.555C55.3361 118.158 55.3609 117.586 55.7585 117.238C63.1147 110.603 72.6081 106.924 82.5239 106.924C85.8789 106.924 89.2339 107.347 92.4647 108.167C92.9617 108.291 93.2599 108.813 93.1357 109.31C93.0114 109.807 92.4895 110.106 91.9925 109.981C88.9109 109.186 85.7298 108.788 82.5239 108.788C73.0802 108.788 64.0342 112.268 57.026 118.605C56.8272 118.754 56.6035 118.853 56.3798 118.853Z"
      fill={secondaryColor}
    />
    <path
      d="M104.99 97.0335C104.965 97.0335 104.915 97.0335 104.891 97.0335C104.369 96.9838 103.996 96.5116 104.046 95.9897C104.294 93.7033 104.418 91.3424 104.418 89.0063C104.418 68.0314 94.5771 50.9831 82.4743 50.9831C78.8211 50.9831 75.1927 52.5985 71.962 55.6552C71.5892 56.0032 70.9928 56.0032 70.62 55.6304C70.2721 55.2576 70.2721 54.6612 70.6448 54.2884C74.2235 50.8837 78.2992 49.0944 82.4494 49.0944C95.5712 49.0944 106.257 66.9877 106.257 88.9815C106.257 91.3921 106.133 93.8276 105.885 96.1637C105.885 96.6855 105.462 97.0335 104.99 97.0335Z"
      fill={secondaryColor}
    />
    <path
      d="M82.4989 128.894C69.3772 128.894 58.6909 111 58.6909 89.0064C58.6909 87.6892 58.7406 86.3472 58.8152 85.0549C58.84 84.5331 59.2874 84.1354 59.8092 84.1603C60.3311 84.1851 60.7288 84.6325 60.7039 85.1544C60.6294 86.4218 60.6045 87.7141 60.6045 89.0064C60.6045 109.981 70.4458 127.03 82.5486 127.03C86.1273 127.03 89.706 125.464 92.8621 122.531C93.2349 122.184 93.8314 122.208 94.2041 122.581C94.5521 122.954 94.5272 123.55 94.1544 123.923C90.5758 127.179 86.5746 128.894 82.4989 128.894Z"
      fill={secondaryColor}
    />
    <path
      d="M121.467 89.9507H43.5313C43.0094 89.9507 42.5869 89.5282 42.5869 89.0063C42.5869 88.4844 43.0094 88.062 43.5313 88.062H121.442C121.964 88.062 122.386 88.4844 122.386 89.0063C122.386 89.5282 121.964 89.9507 121.467 89.9507Z"
      fill={secondaryColor}
    />
    <path
      d="M111.153 132C101.933 132 94.428 124.495 94.428 115.275C94.428 106.055 101.933 98.5494 111.153 98.5494C120.373 98.5494 127.879 106.055 127.879 115.275C127.879 124.495 120.398 132 111.153 132ZM111.153 100.413C102.977 100.413 96.2919 107.074 96.2919 115.275C96.2919 123.476 102.952 130.136 111.153 130.136C119.354 130.136 126.015 123.476 126.015 115.275C126.015 107.074 119.354 100.413 111.153 100.413Z"
      fill="currentColor"
    />
    <path
      d="M104.244 123.153C103.996 123.153 103.772 123.053 103.573 122.879C103.201 122.507 103.201 121.91 103.573 121.537L117.416 107.695C117.789 107.322 118.385 107.322 118.758 107.695C119.131 108.068 119.131 108.664 118.758 109.037L104.915 122.879C104.716 123.053 104.468 123.153 104.244 123.153Z"
      fill="currentColor"
    />
    <path
      d="M118.087 123.153C117.838 123.153 117.615 123.053 117.416 122.879L103.573 109.037C103.201 108.664 103.201 108.068 103.573 107.695C103.946 107.322 104.543 107.322 104.915 107.695L118.758 121.537C119.131 121.91 119.131 122.507 118.758 122.879C118.584 123.053 118.335 123.153 118.087 123.153Z"
      fill="currentColor"
    />
    <path
      d="M85.5807 82.0727H42.2889C39.0581 82.0727 36.4238 79.4384 36.4238 76.2077V63.5581C36.4238 60.3274 39.0581 57.6931 42.2889 57.6931H85.5807C88.8114 57.6931 91.4457 60.3274 91.4457 63.5581V76.2077C91.4457 79.4384 88.8114 82.0727 85.5807 82.0727ZM42.2889 59.5819C40.1019 59.5819 38.3126 61.3712 38.3126 63.5581V76.2077C38.3126 78.3947 40.1019 80.184 42.2889 80.184H85.5807C87.7677 80.184 89.557 78.3947 89.557 76.2077V63.5581C89.557 61.3712 87.7677 59.5819 85.5807 59.5819H42.2889Z"
      fill="currentColor"
    />
    <path
      d="M46.091 74.1947C45.7183 74.1947 45.3455 73.971 45.2212 73.5982L42.4627 66.4409C42.2639 65.9439 42.5124 65.422 43.0094 65.2232C43.4816 65.0244 44.0283 65.2729 44.2272 65.7699L46.9857 72.9024C47.1845 73.3994 46.936 73.9213 46.439 74.1201C46.3147 74.1698 46.1904 74.1947 46.091 74.1947Z"
      fill="currentColor"
    />
    <path
      d="M51.5832 74.1947C51.459 74.1947 51.3596 74.1698 51.2353 74.1201C50.7383 73.9213 50.5146 73.3994 50.6886 72.9024L53.4471 65.7699C53.6459 65.2729 54.1678 65.0492 54.6649 65.2232C55.1619 65.422 55.3856 65.9439 55.2116 66.4409L52.4531 73.5734C52.3039 73.971 51.956 74.1947 51.5832 74.1947Z"
      fill="currentColor"
    />
    <path
      d="M46.0909 74.1699C45.9666 74.1699 45.8672 74.145 45.743 74.0953C45.2708 73.8965 45.0223 73.3746 45.1962 72.8776L47.9548 65.7699C48.1536 65.2978 48.6755 65.0492 49.1725 65.2232C49.6447 65.422 49.8932 65.9439 49.7192 66.4409L46.9607 73.5486C46.8116 73.9462 46.4637 74.1699 46.0909 74.1699Z"
      fill="currentColor"
    />
    <path
      d="M51.5832 74.1698C51.2104 74.1698 50.8377 73.9462 50.7134 73.5734L47.9549 66.4658C47.756 65.9687 48.0046 65.4468 48.5016 65.248C48.9986 65.0492 49.5205 65.2977 49.7193 65.7948L52.4779 72.9024C52.6767 73.3994 52.4282 73.9213 51.9311 74.1201C51.8069 74.145 51.6826 74.1698 51.5832 74.1698Z"
      fill="currentColor"
    />
    <path
      d="M61.1267 74.1947C60.7539 74.1947 60.3811 73.971 60.2569 73.5982L57.4983 66.4658C57.2995 65.9687 57.548 65.4468 58.0451 65.248C58.5172 65.0492 59.064 65.2977 59.2628 65.7948L62.0213 72.9272C62.2202 73.4243 61.9716 73.9462 61.4746 74.145C61.3504 74.1698 61.2509 74.1947 61.1267 74.1947Z"
      fill="currentColor"
    />
    <path
      d="M66.6189 74.1947C66.4946 74.1947 66.3952 74.1698 66.271 74.1201C65.7739 73.9213 65.5503 73.3994 65.7242 72.9024L68.4828 65.7699C68.6816 65.2729 69.2035 65.0492 69.7005 65.2232C70.1976 65.422 70.4212 65.9439 70.2473 66.4409L67.4887 73.5734C67.3644 73.971 67.0165 74.1947 66.6189 74.1947Z"
      fill="currentColor"
    />
    <path
      d="M61.1265 74.1699C61.0023 74.1699 60.9029 74.145 60.7786 74.0953C60.3064 73.8965 60.0579 73.3746 60.2319 72.8776L62.9904 65.7699C63.1892 65.2978 63.7111 65.0492 64.2082 65.2232C64.6803 65.422 64.9289 65.9439 64.7549 66.4409L62.0212 73.5486C61.8721 73.9462 61.5242 74.1699 61.1265 74.1699Z"
      fill="currentColor"
    />
    <path
      d="M66.6189 74.1698C66.2461 74.1698 65.8733 73.9462 65.7491 73.5734L62.9905 66.4658C62.7917 65.9687 63.0402 65.4468 63.5372 65.248C64.0343 65.0492 64.5562 65.2977 64.755 65.7948L67.5135 72.9024C67.7123 73.3994 67.4638 73.9213 66.9668 74.1201C66.8674 74.145 66.7431 74.1698 66.6189 74.1698Z"
      fill="currentColor"
    />
    <path
      d="M76.1867 74.1947C75.814 74.1947 75.4412 73.971 75.3169 73.5982L72.5584 66.4658C72.3596 65.9687 72.6081 65.4468 73.1051 65.248C73.5773 65.0492 74.124 65.2977 74.3229 65.7948L77.0814 72.9272C77.2802 73.4243 77.0317 73.9462 76.5347 74.145C76.4104 74.1698 76.311 74.1947 76.1867 74.1947Z"
      fill="currentColor"
    />
    <path
      d="M81.679 74.1947C81.5548 74.1947 81.4554 74.1698 81.3311 74.1201C80.8589 73.9213 80.6104 73.3994 80.7844 72.9024L83.5429 65.7699C83.7417 65.2729 84.2636 65.0492 84.7607 65.2232C85.2328 65.422 85.4813 65.9439 85.3074 66.4409L82.5488 73.5734C82.4246 73.971 82.0518 74.1947 81.679 74.1947Z"
      fill="currentColor"
    />
    <path
      d="M76.1868 74.1699C76.0626 74.1699 75.9632 74.145 75.8389 74.0953C75.3667 73.8965 75.1182 73.3746 75.2922 72.8776L78.0507 65.7699C78.2495 65.2729 78.7714 65.0492 79.2685 65.2232C79.7655 65.422 79.9892 65.9439 79.8152 66.4409L77.0567 73.5486C76.9324 73.9462 76.5596 74.1699 76.1868 74.1699Z"
      fill="currentColor"
    />
    <path
      d="M81.6789 74.1698C81.3062 74.1698 80.9334 73.9462 80.8091 73.5734L78.0506 66.4658C77.8518 65.9687 78.1003 65.4468 78.5973 65.248C79.0695 65.0492 79.6162 65.2977 79.815 65.7948L82.5736 72.9024C82.7724 73.3994 82.5239 73.9213 82.0269 74.1201C81.9026 74.145 81.8032 74.1698 81.6789 74.1698Z"
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

const NoInternet = (props): any => {
  const theme = useTheme();
  return <Component secondaryColor={theme.color.bulma[100]} {...props} />;
};

NoInternet.defaultProps = {
  verticalAlign: 'middle',
};
export default NoInternet;
