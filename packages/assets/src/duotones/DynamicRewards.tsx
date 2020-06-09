import * as React from 'react';
import styled from 'styled-components';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';

const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 174 174"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      opacity={0.1}
      d="M78.5007 133.136C80.4055 133.136 82.1637 131.631 82.6033 129.674L83.922 123.203C85.2406 122.752 86.4128 122.3 87.7315 121.548L93.0062 125.16C94.6179 126.213 96.8157 126.063 98.2809 124.558L100.918 121.849C102.237 120.495 102.53 118.237 101.504 116.431L97.9879 111.014C98.574 109.81 99.16 108.455 99.5996 107.101L105.9 105.747C107.805 105.295 109.27 103.64 109.27 101.533V97.6202C109.27 95.6639 107.805 93.858 105.9 93.4065L99.5996 92.0521C99.16 90.6977 98.7205 89.4938 97.9879 88.1394L101.504 82.7218C102.53 81.0664 102.383 78.8091 100.918 77.3042L98.2809 74.5954C96.9622 73.241 94.7644 72.94 93.0062 73.9935L87.7315 77.6052C86.5593 77.0032 85.2406 76.4013 83.922 75.9498L82.6033 69.4788C82.1637 68.2749 80.552 66.77 78.5007 66.77H72.9329C71.0282 66.77 69.2699 68.2749 68.8304 70.2312L67.5117 76.7023C66.193 77.1537 65.0209 77.6052 63.7022 78.3576L58.4274 74.7459C56.9622 73.3915 54.7644 73.6925 53.4458 75.0469L50.6619 77.9062C49.3432 79.2606 49.0502 81.5179 50.0758 83.3238L53.5923 88.7414C53.0062 89.9453 52.4201 91.2997 51.9806 92.6541L45.9732 93.858C44.0685 94.159 42.6033 95.9649 42.6033 97.9212V101.834C42.6033 103.79 44.0685 105.596 45.9732 106.048L52.1271 107.402C52.5666 108.756 53.0062 109.96 53.7388 111.315L50.2223 116.732C49.1967 118.388 49.3432 120.645 50.8084 122.15L53.4458 124.859C54.7644 126.213 56.9622 126.514 58.7205 125.461L63.9952 121.849C65.1674 122.451 66.4861 123.053 67.8047 123.504L69.1234 129.975C69.563 131.932 71.1747 133.437 73.226 133.437H78.5007V133.136Z"
      fill="currentColor"
    />
    <path
      d="M97.6876 84.8681C98.1566 83.9301 98.4693 82.9921 98.7819 82.0541L105.504 80.6471C107.537 80.1781 109.1 78.4584 109.1 76.2697V72.205C109.1 70.1726 107.537 68.2966 105.504 67.8276L98.7819 66.4206C98.3129 65.0136 97.8439 63.7629 97.0623 62.3559L100.814 56.7278C101.909 55.0082 101.752 52.6631 100.189 51.0998L97.3749 48.2858C95.9679 46.8787 93.6229 46.5661 91.7469 47.6604L86.1188 51.4125C84.8681 50.7871 83.4611 50.1618 82.0541 49.6928L80.6471 42.9704C80.3344 41.5633 78.6147 40 76.426 40H72.3613C70.329 40 68.453 41.5633 67.984 43.5957L66.5769 50.3181C65.1699 50.7871 63.9192 51.2561 62.5122 52.0378L56.8842 48.2858C55.1645 47.1914 52.8195 47.3477 51.2561 48.9111L48.5984 51.5688C47.1914 52.9758 46.8787 55.3208 47.9731 57.1968L51.7251 62.8249C51.0998 64.0756 50.4744 65.4826 50.0054 66.8896L43.5957 68.1403C41.5633 68.453 40 70.329 40 72.3613V76.426C40 78.4584 41.5633 80.3344 43.5957 80.8034L50.1618 82.2104C50.6308 83.6175 51.0998 84.8681 51.8815 86.2751L48.1294 91.9032C47.0351 93.6229 47.1914 95.9679 48.7548 97.5313L51.5688 100.345C52.9758 101.752 55.3208 102.065 57.1968 100.971L62.8249 97.2186C64.0756 97.8439 65.4826 98.4693 66.8896 98.9383L68.2966 105.661C68.7656 107.693 70.4853 109.256 72.674 109.256H76.7387C78.7711 109.256 80.6471 107.693 81.1161 105.661L82.5231 98.9383C83.6175 98.6256 84.7118 98.1566 85.6498 97.6876"
      stroke="white"
      strokeWidth={2}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M87.8385 107.537C87.6822 108.006 87.5259 108.475 87.5259 108.944V111.601C87.5259 113.165 88.6202 114.572 90.1836 114.884L94.2483 115.666C94.561 116.448 94.7173 117.073 95.1863 117.855L92.9976 121.294C92.0596 122.545 92.3723 124.421 93.4666 125.515L95.3426 127.391C96.437 128.486 98.1567 128.642 99.5637 127.86L103.003 125.672C103.628 125.984 104.41 126.297 105.192 126.61L105.973 130.674C106.286 132.238 107.693 133.332 109.256 133.332H111.914C113.477 133.332 114.884 132.238 115.197 130.674L115.979 126.61C116.761 126.297 117.386 126.141 118.168 125.672L121.607 127.86C122.858 128.798 124.734 128.486 125.828 127.391L127.704 125.515C128.798 124.421 128.955 122.701 128.173 121.294L125.984 117.855C126.297 117.229 126.61 116.448 126.922 115.666L130.987 114.884C132.55 114.572 133.645 113.165 133.645 111.601V108.787C133.645 107.224 132.55 105.817 130.987 105.504L126.922 104.723C126.61 103.941 126.453 103.316 125.984 102.534L128.173 99.0946C129.111 97.8439 128.798 95.9679 127.704 94.8736L125.203 93.1539C124.108 92.0595 122.389 91.9032 120.982 92.6849L117.542 94.8736C116.917 94.5609 116.135 94.2482 115.354 93.9356L114.572 89.8709C114.259 88.3075 112.852 87.2132 111.289 87.2132H108.787C107.224 87.2132 105.817 88.3075 105.504 89.8709L104.723 93.9356C103.941 94.2482 103.316 94.4046 102.534 94.8736L99.0947 92.6849C97.844 91.7469 95.968 92.0595 94.8736 93.1539L93.1539 95.0299C92.0596 96.1243 91.9033 97.8439 92.6849 99.251L94.8736 102.69"
      stroke="white"
      strokeWidth={2}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M90.0272 78.7711C90.3398 77.3641 90.6525 75.9571 90.6525 74.55C90.6525 65.6389 83.4611 58.2912 74.3937 58.2912C70.1726 58.2912 66.4206 59.8545 63.6066 62.5122"
      stroke="currentColor"
      strokeWidth={2}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M58.4476 71.5797C58.2912 72.5177 58.1349 73.4557 58.1349 74.3937C58.1349 83.3048 65.3263 90.6525 74.3937 90.6525C77.9894 90.6525 81.2725 89.5582 83.9302 87.5258"
      stroke="currentColor"
      strokeWidth={2}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M74.3936 81.8978C78.538 81.8978 81.8977 78.5381 81.8977 74.3937C81.8977 70.2493 78.538 66.8896 74.3936 66.8896C70.2492 66.8896 66.8895 70.2493 66.8895 74.3937C66.8895 78.5381 70.2492 81.8978 74.3936 81.8978Z"
      stroke="currentColor"
      strokeWidth={2}
      strokeMiterlimit={10}
    />
    <path
      d="M118.011 110.194C118.011 105.817 114.572 102.378 110.194 102.378C105.817 102.378 102.378 105.817 102.378 110.194C102.378 114.572 105.817 118.011 110.194 118.011C111.758 118.011 113.321 117.542 114.572 116.604"
      stroke="white"
      strokeWidth={2}
      strokeMiterlimit={10}
      strokeLinecap="round"
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
const DynamicRewards = styled(Svg)<SvgProps>(
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
DynamicRewards.defaultProps = {
  verticalAlign: 'middle',
};
export default DynamicRewards;
