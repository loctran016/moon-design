import * as React from 'react';
import styled from 'styled-components';
import { ColorProps, useTheme } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';

const Svg = ({ secondaryColor, ...rest }: any) => {
  return (
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
        d="M74.0079 80.62H139.229C141.143 80.62 142.419 82.592 141.665 84.332L126.73 119.045C126.295 120.031 125.338 120.64 124.294 120.64H85.8689C84.7379 120.64 83.7229 119.915 83.3459 118.842L71.4849 84.129C70.9049 82.418 72.1809 80.62 74.0079 80.62Z"
        fill="currentColor"
      />
      <path
        d="M68.817 73.631C68.614 73.631 68.382 73.573 68.208 73.428C67.715 73.08 67.57 72.413 67.918 71.891L87.87 42.63C89.204 40.774 91.727 40.252 93.641 41.441L122.757 59.189C123.772 59.798 124.497 60.842 124.729 62.002C124.961 63.162 124.7 64.409 124.033 65.366L118.494 73.138C118.146 73.631 117.45 73.747 116.957 73.399C116.464 73.051 116.348 72.355 116.696 71.862L122.235 64.09C122.583 63.597 122.699 63.017 122.583 62.437C122.467 61.857 122.119 61.364 121.597 61.045L92.51 43.326C91.553 42.746 90.335 43.007 89.668 43.906L69.716 73.167C69.513 73.457 69.165 73.631 68.817 73.631Z"
        fill="currentColor"
      />
      <path
        d="M84.158 73.631C83.955 73.631 83.723 73.573 83.549 73.457C83.056 73.109 82.911 72.442 83.259 71.92L100.195 46.661C100.543 46.168 101.21 46.023 101.732 46.371C102.225 46.719 102.37 47.386 102.022 47.908L85.086 73.167C84.854 73.457 84.506 73.631 84.158 73.631Z"
        fill="currentColor"
      />
      <path
        d="M118.726 72.094C118.523 72.094 118.349 72.036 118.146 71.949L84.0129 51.446C83.4909 51.127 83.3169 50.46 83.6359 49.938C83.9549 49.416 84.6219 49.242 85.1439 49.561L119.277 70.064C119.799 70.383 119.973 71.05 119.654 71.572C119.48 71.891 119.103 72.094 118.726 72.094Z"
        fill="currentColor"
      />
      <path
        d="M84.303 51.765L83.114 50.924C82.012 50.112 72.326 42.949 73.283 37.294C73.631 35.148 75.371 33.582 78.445 32.625C81.519 31.697 83.81 32.016 85.318 33.582C89.262 37.758 85.289 49.126 84.796 50.402L84.303 51.765ZM81.519 34.307C80.823 34.307 80.011 34.452 79.083 34.742C76.879 35.409 75.661 36.395 75.458 37.642C74.965 40.571 79.547 45.327 83.23 48.227C84.622 43.761 85.782 37.265 83.723 35.119C83.201 34.568 82.476 34.307 81.519 34.307Z"
        fill="currentColor"
      />
      <path
        d="M71.1951 58.725C70.6441 58.725 70.0931 58.638 69.5711 58.493C67.5121 57.826 66.2071 55.854 65.7431 52.693C65.2791 49.532 65.9461 47.27 67.7441 46.052C72.4711 42.775 83.0851 48.43 84.2741 49.097L85.5501 49.793L84.5351 50.837C83.6941 51.678 76.5891 58.725 71.1951 58.725ZM71.5431 47.212C70.5281 47.212 69.6581 47.386 69.0201 47.821C67.9761 48.546 67.6281 50.083 67.9471 52.345C68.2661 54.607 69.0491 55.97 70.2671 56.376C73.0801 57.304 78.4741 53.476 81.8961 50.315C78.7931 48.778 74.5301 47.212 71.5431 47.212Z"
        fill="currentColor"
      />
      <path
        d="M55.296 63.4172L55.296 63.4172L74.987 118.546L75.1056 118.878H75.4579H112.23C112.563 118.878 112.832 119.147 112.832 119.48C112.832 119.85 112.554 120.111 112.23 120.111H74.2443L54.1521 63.8415C54.1517 63.8403 54.1513 63.8392 54.1509 63.8381C53.6728 62.4427 52.3483 61.531 50.8949 61.531H44.5439C44.211 61.531 43.9419 61.2619 43.9419 60.929C43.9419 60.5962 44.211 60.327 44.5439 60.327H50.8949C52.8593 60.327 54.6423 61.5869 55.296 63.4172Z"
        fill={secondaryColor}
        stroke={secondaryColor}
      />
      <path
        d="M111.505 110.526H111.839L111.967 110.217L125.916 76.4318L125.918 76.4267C126.209 75.7 126.139 74.8591 125.696 74.1946C125.257 73.5362 124.522 73.131 123.714 73.131H58.4929C58.16 73.131 57.8909 72.8619 57.8909 72.529C57.8909 72.1961 58.16 71.927 58.4929 71.927H123.714C124.913 71.927 126.029 72.5126 126.688 73.5265L126.691 73.5314C127.353 74.5248 127.479 75.7984 127.023 76.8889L127.022 76.891L112.621 111.73H71.6879C71.355 111.73 71.0859 111.461 71.0859 111.128C71.0859 110.795 71.355 110.526 71.6879 110.526H111.505Z"
        fill={secondaryColor}
        stroke={secondaryColor}
      />
      <path
        d="M81.606 138.845C77.8801 138.845 74.856 135.821 74.856 132.095C74.856 128.369 77.8801 125.345 81.606 125.345C85.3318 125.345 88.356 128.369 88.356 132.095C88.356 135.821 85.3318 138.845 81.606 138.845ZM81.606 126.578C78.5458 126.578 76.06 129.064 76.06 132.124C76.06 135.184 78.5458 137.67 81.606 137.67C84.6661 137.67 87.152 135.184 87.152 132.124C87.152 129.064 84.6661 126.578 81.606 126.578Z"
        fill={secondaryColor}
        stroke={secondaryColor}
      />
      <path
        d="M106.343 138.845C102.617 138.845 99.593 135.821 99.593 132.095C99.593 128.369 102.617 125.345 106.343 125.345C110.069 125.345 113.093 128.369 113.093 132.095C113.093 135.821 110.069 138.845 106.343 138.845ZM106.343 126.578C103.283 126.578 100.797 129.064 100.797 132.124C100.797 135.184 103.283 137.67 106.343 137.67C109.403 137.67 111.889 135.184 111.889 132.124C111.889 129.064 109.403 126.578 106.343 126.578Z"
        fill={secondaryColor}
        stroke={secondaryColor}
      />
      <path
        d="M44.37 102.138H38.715C38.106 102.138 37.613 101.645 37.613 101.036C37.613 100.427 38.106 99.934 38.715 99.934H44.37C44.979 99.934 45.472 100.427 45.472 101.036C45.472 101.645 44.979 102.138 44.37 102.138Z"
        fill="currentColor"
      />
      <path
        d="M53.1571 102.138H51.3881C50.7791 102.138 50.2861 101.645 50.2861 101.036C50.2861 100.427 50.7791 99.934 51.3881 99.934H53.1571C53.7661 99.934 54.2591 100.427 54.2591 101.036C54.2591 101.645 53.7661 102.138 53.1571 102.138Z"
        fill="currentColor"
      />
      <path
        d="M39.498 129.456H33.843C33.234 129.456 32.741 128.963 32.741 128.354C32.741 127.745 33.234 127.252 33.843 127.252H39.498C40.107 127.252 40.6 127.745 40.6 128.354C40.6 128.963 40.107 129.456 39.498 129.456Z"
        fill="currentColor"
      />
      <path
        d="M48.2851 129.456H46.5161C45.9071 129.456 45.4141 128.963 45.4141 128.354C45.4141 127.745 45.9071 127.252 46.5161 127.252H48.2851C48.8941 127.252 49.3871 127.745 49.3871 128.354C49.3871 128.963 48.8941 129.456 48.2851 129.456Z"
        fill="currentColor"
      />
      <path
        d="M58.029 129.456H56.26C55.651 129.456 55.158 128.963 55.158 128.354C55.158 127.745 55.651 127.252 56.26 127.252H58.029C58.638 127.252 59.131 127.745 59.131 128.354C59.131 128.963 58.638 129.456 58.029 129.456Z"
        fill="currentColor"
      />
      <path
        d="M92.169 99.122V98.0202L91.3397 98.7458C90.4934 99.4863 89.3898 100.072 87.609 100.072C86.0851 100.072 84.6097 99.3348 83.689 98.0984L83.6874 98.0962C82.1497 96.0546 82.5454 93.442 84.2908 90.2909C86.028 87.1549 89.0053 83.6713 92.2719 80.0563L92.2721 80.0564L92.2806 80.0464C92.3631 79.9502 92.4582 79.902 92.5969 79.902C92.7006 79.902 92.8075 79.9462 92.9024 80.0377C96.1656 83.6639 99.1461 87.1508 100.889 90.2879C102.642 93.4435 103.044 96.0554 101.507 98.0962L101.505 98.0984C100.585 99.3337 99.1102 100.072 97.5559 100.072C95.7751 100.072 94.6715 99.4863 93.8252 98.7458L92.9959 98.0202V99.122V102.399V102.899H93.4959H95.4389C95.6747 102.899 95.8669 103.1 95.8669 103.327C95.8669 103.563 95.666 103.755 95.4389 103.755H89.7259C89.4902 103.755 89.298 103.554 89.298 103.327C89.298 103.091 89.4989 102.899 89.7259 102.899H91.669H92.169V102.399V99.122ZM92.9704 81.3606L92.5969 80.9411L92.2235 81.3606C88.9317 85.0585 86.3594 88.2494 84.9047 90.907C83.4662 93.5352 83.0118 95.8503 84.3721 97.6017C85.1579 98.6164 86.3738 99.245 87.667 99.245C88.6013 99.245 89.3458 99.0729 89.9875 98.729C90.6222 98.3889 91.1194 97.9 91.5877 97.3269C91.6647 97.2393 91.7842 97.186 91.9009 97.186H93.3219C93.4387 97.186 93.5582 97.2393 93.6352 97.3269C94.1013 97.8975 94.5913 98.3874 95.2233 98.7283C95.8629 99.0734 96.6083 99.245 97.5559 99.245C98.8423 99.245 100.093 98.6216 100.856 97.5953C102.195 95.8304 101.735 93.5198 100.292 90.8954C98.8342 88.2417 96.262 85.0582 92.9704 81.3606Z"
        fill={secondaryColor}
        stroke={secondaryColor}
      />
    </svg>
  );
};

type SvgProps = {
  color?: ColorProps;
  height?: string | number;
  width?: string | number;
  fontSize?: string | number;
  verticalAlign?: string;
};

const Component = styled(Svg)(
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

const CasinoBonus = props => {
  const theme = useTheme();
  return <Component secondaryColor={theme.color.bulma[100]} {...props} />;
};

CasinoBonus.defaultProps = {
  verticalAlign: 'middle',
};
export default CasinoBonus;
