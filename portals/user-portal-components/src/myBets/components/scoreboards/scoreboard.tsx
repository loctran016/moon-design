import * as React from 'react';
import styled from '@emotion/styled';
import rem from 'polished/lib/helpers/rem';
import { mq, spacing } from '@heathmont/sportsbet-utils';
import { breakpoints, colors } from '@heathmont/sportsbet-tokens';
import { MarketProps } from './market';

type CompetitorProps = {
  name: string;
  image: string;
};

export type EventProps = {
  name: string;
  marketCount: number;
  market: MarketProps;
  competitors: { home: CompetitorProps; away: CompetitorProps };
  information: {
    homeScore: string;
    awayScore: string;
    periodScores: {
      homeScore: null | number;
      awayScore: null | number;
    }[];
  };
  videoStream: boolean;
  onClick: () => void;
};

/* @TODO Revisit post-EPL */
/* eslint-disable-next-line @typescript-eslint/no-explicit-any */
export const ScoreboardsContainer = ({ children }: any) => {
  const Wrapper = styled.div({
    display: 'flex',
    flexDirection: 'row',
    overflow: 'auto',
    flexFlow: 'row nowrap',
    scrollSnapType: 'x mandatory',
  });

  const Container = styled.div({
    marginRight: spacing('small'),
    scrollSnapAlign: 'center',
    minWidth: rem(320),
  });

  if (children.length > 1) {
    return (
      <Wrapper>
        {children.map((scoreboard: React.ReactChild, index: number) => {
          /* @TODO Revisit post-EPL */
          /* eslint-disable-next-line react/no-array-index-key */
          return <Container key={index}>{scoreboard}</Container>;
        })}
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <Container>{children}</Container>
    </Wrapper>
  );
};
