import * as React from 'react';
import styled from '@emotion/styled';

const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 12 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12 17.377L4.986 10 12 2.624 9.5 0 0 10l9.502 10z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
);

export const IconChevronLeft = styled(Svg)(
  ({ backgroundColor }: { backgroundColor?: string }) => [
    {
      verticalAlign: 'middle',
    },
    backgroundColor && {
      backgroundColor,
      padding: backgroundColor ? '0.25em' : 0,
      overflow: 'visible',
      borderRadius: '50%',
    },
  ]
);
