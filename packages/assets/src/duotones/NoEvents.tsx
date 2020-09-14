import React from 'react';
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
      d="M106.836 103.008H46.69C43.036 103.008 40.078 100.05 40.078 96.396V44.573C40.078 40.919 43.036 37.961 46.69 37.961H106.865C110.519 37.961 113.477 40.919 113.477 44.573V96.396C113.448 100.05 110.49 103.008 106.836 103.008Z"
      fill="currentColor"
    />
    <path
      d="M98.832 122.083H61.509C56.2761 122.083 52.033 117.813 52.033 112.607V64.206C52.033 58.9731 56.3032 54.73 61.509 54.73H61.886C62.2188 54.73 62.488 54.9991 62.488 55.332C62.488 55.6649 62.2188 55.934 61.886 55.934H61.509C56.9408 55.934 53.237 59.6379 53.237 64.206V112.578C53.237 117.146 56.9408 120.85 61.509 120.85H98.832C99.1648 120.85 99.434 121.119 99.434 121.452C99.434 121.822 99.1564 122.083 98.832 122.083Z"
      fill={secondaryColor}
      stroke={secondaryColor}
    />
    <path
      d="M52.635 76.212C52.026 76.212 51.533 75.719 51.533 75.11V64.206C51.533 58.696 56.028 54.23 61.509 54.23H61.886C62.495 54.23 62.988 54.723 62.988 55.332C62.988 55.941 62.495 56.434 61.886 56.434H61.509C57.217 56.434 53.737 59.914 53.737 64.206V75.11C53.737 75.719 53.244 76.212 52.635 76.212Z"
      fill="currentColor"
    />
    <path
      d="M126.005 91.546C125.672 91.546 125.403 91.2769 125.403 90.944V64.235C125.403 59.6669 121.699 55.963 117.131 55.963H116.493C116.16 55.963 115.891 55.6939 115.891 55.361C115.891 55.0281 116.16 54.759 116.493 54.759H117.131C122.364 54.759 126.607 59.0292 126.607 64.235V90.944C126.607 91.2769 126.338 91.546 126.005 91.546Z"
      fill={secondaryColor}
      stroke={secondaryColor}
    />
    <path
      d="M126.005 76.212C125.396 76.212 124.903 75.719 124.903 75.11V64.206C124.903 59.914 121.423 56.434 117.131 56.434H116.493C115.884 56.434 115.391 55.941 115.391 55.332C115.391 54.723 115.884 54.23 116.493 54.23H117.131C122.641 54.23 127.107 58.725 127.107 64.206V75.11C127.107 75.719 126.614 76.212 126.005 76.212Z"
      fill="currentColor"
    />
    <path
      d="M106.053 56.434H79.634C79.025 56.434 78.532 55.941 78.532 55.332C78.532 54.723 79.025 54.23 79.634 54.23H106.053C106.662 54.23 107.155 54.723 107.155 55.332C107.155 55.941 106.662 56.434 106.053 56.434Z"
      fill="currentColor"
    />
    <path
      d="M102.276 128.093V128.116L102.278 128.138C102.308 128.466 102.065 128.724 101.732 128.724H60.291C56.9132 128.724 54.15 125.961 54.15 122.583V118.755C54.15 118.422 54.4192 118.153 54.752 118.153C55.0849 118.153 55.354 118.422 55.354 118.755V122.583C55.354 125.295 57.5499 127.491 60.262 127.491H101.674C102.007 127.491 102.276 127.76 102.276 128.093Z"
      fill={secondaryColor}
      stroke={secondaryColor}
    />
    <path
      d="M69.8029 63.561H68.8459C67.005 63.561 65.4889 62.0449 65.4889 60.204V52.635C65.4889 50.7941 67.005 49.278 68.8459 49.278H69.8029C71.6437 49.278 73.1599 50.7941 73.1599 52.635V60.204C73.1599 62.0739 71.6727 63.561 69.8029 63.561ZM68.8459 50.511C67.6765 50.511 66.6929 51.4542 66.6929 52.664V60.233C66.6929 61.4024 67.636 62.386 68.8459 62.386H69.8029C70.9723 62.386 71.9559 61.4428 71.9559 60.233V52.664C71.9559 51.4946 71.0127 50.511 69.8029 50.511H68.8459Z"
      fill={secondaryColor}
      stroke={secondaryColor}
    />
    <path
      d="M109.794 63.561H108.837C106.996 63.561 105.48 62.0449 105.48 60.204V52.635C105.48 50.7941 106.996 49.278 108.837 49.278H109.794C111.635 49.278 113.151 50.7941 113.151 52.635V60.204C113.151 62.0714 111.637 63.561 109.794 63.561ZM108.808 50.511C107.639 50.511 106.655 51.4542 106.655 52.664V60.233C106.655 61.4024 107.598 62.386 108.808 62.386H109.765C110.934 62.386 111.918 61.4428 111.918 60.233V52.664C111.918 51.4946 110.975 50.511 109.765 50.511H108.808Z"
      fill={secondaryColor}
      stroke={secondaryColor}
    />
    <path
      d="M126.005 76.212H52.635C52.026 76.212 51.533 75.719 51.533 75.11C51.533 74.501 52.026 74.008 52.635 74.008H126.005C126.614 74.008 127.107 74.501 127.107 75.11C127.107 75.719 126.614 76.212 126.005 76.212Z"
      fill="currentColor"
    />
    <path
      d="M68.7299 88.762H65.8589C65.7291 88.762 65.6339 88.6669 65.6339 88.537V85.666C65.6339 85.5362 65.7291 85.441 65.8589 85.441H68.7299C68.8598 85.441 68.9549 85.5362 68.9549 85.666V88.537C68.9549 88.6669 68.8598 88.762 68.7299 88.762Z"
      fill={secondaryColor}
      stroke={secondaryColor}
    />
    <path
      d="M83.4039 88.762H80.5329C80.403 88.762 80.3079 88.6669 80.3079 88.537V85.666C80.3079 85.5362 80.403 85.441 80.5329 85.441H83.4039C83.5337 85.441 83.6289 85.5362 83.6289 85.666V88.537C83.6289 88.6669 83.5337 88.762 83.4039 88.762Z"
      fill={secondaryColor}
      stroke={secondaryColor}
    />
    <path
      d="M98.1069 88.762H95.2359C95.106 88.762 95.0109 88.6669 95.0109 88.537V85.666C95.0109 85.5362 95.106 85.441 95.2359 85.441H98.1069C98.2367 85.441 98.3319 85.5362 98.3319 85.666V88.537C98.3319 88.6669 98.2367 88.762 98.1069 88.762Z"
      fill={secondaryColor}
      stroke={secondaryColor}
    />
    <path
      d="M112.781 88.762H109.91C109.78 88.762 109.685 88.6669 109.685 88.537V85.666C109.685 85.5362 109.78 85.441 109.91 85.441H112.781C112.911 85.441 113.006 85.5362 113.006 85.666V88.537C113.006 88.6669 112.911 88.762 112.781 88.762Z"
      fill={secondaryColor}
      stroke={secondaryColor}
    />
    <path
      d="M68.7299 99.84H65.8589C65.7291 99.84 65.6339 99.7449 65.6339 99.615V96.744C65.6339 96.6141 65.7291 96.519 65.8589 96.519H68.7299C68.8598 96.519 68.9549 96.6141 68.9549 96.744V99.615C68.9549 99.7449 68.8598 99.84 68.7299 99.84Z"
      fill={secondaryColor}
      stroke={secondaryColor}
    />
    <path
      d="M83.4039 99.84H80.5329C80.403 99.84 80.3079 99.7449 80.3079 99.615V96.744C80.3079 96.6141 80.403 96.519 80.5329 96.519H83.4039C83.5337 96.519 83.6289 96.6141 83.6289 96.744V99.615C83.6289 99.7449 83.5337 99.84 83.4039 99.84Z"
      fill={secondaryColor}
      stroke={secondaryColor}
    />
    <path
      d="M98.1069 99.84H95.2359C95.106 99.84 95.0109 99.7449 95.0109 99.615V96.744C95.0109 96.6141 95.106 96.519 95.2359 96.519H98.1069C98.2367 96.519 98.3319 96.6141 98.3319 96.744V99.615C98.3319 99.7449 98.2367 99.84 98.1069 99.84Z"
      fill={secondaryColor}
      stroke={secondaryColor}
    />
    <path
      d="M112.781 99.84H109.91C109.78 99.84 109.685 99.7449 109.685 99.615V96.744C109.685 96.6141 109.78 96.519 109.91 96.519H112.781C112.911 96.519 113.006 96.6141 113.006 96.744V99.615C113.006 99.7449 112.911 99.84 112.781 99.84Z"
      fill={secondaryColor}
      stroke={secondaryColor}
    />
    <path
      d="M68.7299 110.918H65.8589C65.7291 110.918 65.6339 110.823 65.6339 110.693V107.822C65.6339 107.692 65.7291 107.597 65.8589 107.597H68.7299C68.8598 107.597 68.9549 107.692 68.9549 107.822V110.693C68.9549 110.823 68.8598 110.918 68.7299 110.918Z"
      fill={secondaryColor}
      stroke={secondaryColor}
    />
    <path
      d="M83.4039 110.918H80.5329C80.403 110.918 80.3079 110.823 80.3079 110.693V107.822C80.3079 107.692 80.403 107.597 80.5329 107.597H83.4039C83.5337 107.597 83.6289 107.692 83.6289 107.822V110.693C83.6289 110.823 83.5337 110.918 83.4039 110.918Z"
      fill={secondaryColor}
      stroke={secondaryColor}
    />
    <path
      d="M98.1069 110.918H95.2359C95.106 110.918 95.0109 110.823 95.0109 110.693V107.822C95.0109 107.692 95.106 107.597 95.2359 107.597H98.1069C98.2367 107.597 98.3319 107.692 98.3319 107.822V110.693C98.3319 110.823 98.2367 110.918 98.1069 110.918Z"
      fill={secondaryColor}
      stroke={secondaryColor}
    />
    <path
      d="M122.467 134.821C111.592 134.821 102.776 125.976 102.776 115.13C102.776 104.284 111.621 95.439 122.467 95.439C133.313 95.439 142.158 104.284 142.158 115.13C142.158 125.976 133.342 134.821 122.467 134.821ZM122.467 97.643C112.839 97.643 104.98 105.473 104.98 115.13C104.98 124.787 112.81 132.617 122.467 132.617C132.124 132.617 139.954 124.787 139.954 115.13C139.954 105.473 132.095 97.643 122.467 97.643Z"
      fill="currentColor"
    />
    <path
      d="M114.318 124.381C114.028 124.381 113.738 124.265 113.535 124.062C113.1 123.627 113.1 122.931 113.535 122.496L129.833 106.198C130.268 105.763 130.964 105.763 131.399 106.198C131.834 106.633 131.834 107.329 131.399 107.764L115.101 124.062C114.869 124.294 114.608 124.381 114.318 124.381Z"
      fill="currentColor"
    />
    <path
      d="M130.616 124.381C130.326 124.381 130.036 124.265 129.833 124.062L113.535 107.764C113.1 107.329 113.1 106.633 113.535 106.198C113.97 105.763 114.666 105.763 115.101 106.198L131.399 122.496C131.834 122.931 131.834 123.627 131.399 124.062C131.196 124.294 130.906 124.381 130.616 124.381Z"
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

const NoEvents: React.FC<any> = props => {
  const theme = useTheme();
  return <Component secondaryColor={theme.color.bulma[100]} {...props} />;
};

NoEvents.defaultProps = {
  verticalAlign: 'middle',
};
export default NoEvents;
