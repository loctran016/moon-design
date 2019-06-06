import * as React from 'react';
import styled from '@emotion/styled';
import { breakpoints, colors } from '@heathmont/sportsbet-tokens';
import { mq, spacing } from '@heathmont/sportsbet-utils';
import rem from 'polished/lib/helpers/rem';

export const FreeBetsWrapper: React.FC<{ badgeClosed?: boolean }> = styled.div({
  display: 'grid',
  gridTemplateColumns: '1fr',
  rowGap: spacing(),
  [mq(breakpoints.medium)]: {
    gridTemplateColumns: '1fr 1fr',
    columnGap: spacing('medium'),
    rowGap: spacing('medium'),
  },
});

export const FreeBet: React.FC<{ inActive?: boolean }> = styled.div({
  paddingTop: spacing('large'),
  paddingLeft: spacing('medium'),
  paddingRight: spacing('medium'),
  paddingBottom: spacing('medium'),
  border: `${rem(1)} solid ${colors.neutral[70]}`,
  borderRadius: rem(4),
  position: 'relative',
  [mq(breakpoints.medium)]: {
    padding: `${spacing('large')} ${spacing('large')} ${spacing('medium')}`,
  },
  Button: {
    marginTop: spacing('medium'),
  },
});

export const FreeBetCaption = styled.p({
  marginTop: spacing('small'),
  color: colors.neutral[20],
});
