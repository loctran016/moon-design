/** @jsx jsx */
import { useState, default as React } from 'react';
import { jsx } from '@emotion/core';
import { MyBetsHeader } from './dumb-components/my-bets-header';
import { ScoreboardsContainer } from './components/Scoreboards/Scoreboard';
import {
  event,
  footballEventNoStream,
  tennis1,
  tennis2,
  liveBadge,
  wonBadge,
  activeBadge,
} from './dummyData';
import { DummyFootballScoreboard } from './components/Scoreboards/Football/FootballScoreboard';
import { TennisScoreboard } from './components/Scoreboards/Tennis/TennisScoreboard';
import { MyBetsNav } from './dumb-components/navigation';
import { container } from '@heathmont/sportsbet-utils/lib/container';
import { LoggedInNav } from '../../../nav/dumb-components/logged-in-nav';
import { NonLoggedNav } from '../../../nav/dumb-components/non-logged-in-nav';
import { Badge, Button } from '@heathmont/sportsbet-components';
import { colors } from '@heathmont/sportsbet-tokens';
import { IconHyperlink } from '@heathmont/sportsbet-icons';
import {
  CashierHeading,
  CashierLayout,
  MyBetCaptionRow,
  MyBetCaptions,
  MyBetCaptionTitle,
  MyBetCaptionValue,
  MyBetContainer,
  MyBetContainerHeader,
  MyBetContainerHeaderBetDetails,
  MyBetContainerHeaderOdds,
  MyBetContainerHeaderPotentialWin,
  MyBetContainerHeaderStake,
  MyBetContainerHeaderStatus,
  MyBetContents,
  MyBetFooter,
  MyBetFooterAmount,
  MyBetFooterCashout,
  MyBetHeader,
  MyBetHeaderCaption,
  MyBetHeaderCaptionDate,
  MyBetHeaderCaptionMatchName,
  MyBetHeaderCashout,
  MyBetHeaderCashoutAmount,
  MyBetHeaderCashoutContainer,
  MyBetHeaderContainer,
  MyBetHeaderOdds,
  MyBetHeaderPotential,
  MyBetHeaderStake,
  MyBetHeaderStatus,
  MyBetHeaderStatusContainer,
  MyBetHeaderTitle,
  MyBetHeaderTitleAmount,
} from '@heathmont/sportsbet-user-portal-components';
jsx;

export const MyBetsView = () => {
  const [isUserLoggedIn, login] = useState(false);

  return (
    <React.Fragment>
      {isUserLoggedIn ? (
        <LoggedInNav />
      ) : (
        <NonLoggedNav login={() => login(true)} />
      )}
      <div
        css={[
          {
            position: 'sticky',
            top: 0,
            zIndex: 1,
          },
          { ...container('default') },
          {
            overflowX: 'auto',
          },
        ]}
      >
        <MyBetsNav />
      </div>

      <CashierLayout>
        <CashierHeading>My Bets</CashierHeading>
        <MyBetContainerHeader>
          <MyBetContainerHeaderBetDetails>
            Bet Details
          </MyBetContainerHeaderBetDetails>
          <MyBetContainerHeaderStatus>Status</MyBetContainerHeaderStatus>
          <MyBetContainerHeaderOdds>Odds</MyBetContainerHeaderOdds>
          <MyBetContainerHeaderStake>Stake</MyBetContainerHeaderStake>
          <MyBetContainerHeaderPotentialWin>
            Potential win
          </MyBetContainerHeaderPotentialWin>
        </MyBetContainerHeader>
        <MyBetContainer>
          <MyBetHeader>
            <MyBetHeaderContainer>
              <MyBetHeaderTitle>
                <Badge backgroundColor={colors.highlight}>Single</Badge>
                <MyBetHeaderTitleAmount>1535.82 mBTC</MyBetHeaderTitleAmount>
              </MyBetHeaderTitle>
              <MyBetHeaderCaption>
                <MyBetHeaderCaptionDate>17.11.2018</MyBetHeaderCaptionDate>
                <MyBetHeaderCaptionMatchName>
                  Double Result (1st set/match) - Martinez Sanchez M Jep jep
                </MyBetHeaderCaptionMatchName>
              </MyBetHeaderCaption>
            </MyBetHeaderContainer>
            <MyBetHeaderStatusContainer>
              <MyBetHeaderStatus>
                <Badge>Active</Badge>
              </MyBetHeaderStatus>
              <MyBetHeaderOdds>5.20</MyBetHeaderOdds>
              <MyBetHeaderStake>134,133,334 EUR</MyBetHeaderStake>
              <MyBetHeaderPotential>122,133,334 EUR</MyBetHeaderPotential>
            </MyBetHeaderStatusContainer>
            <MyBetHeaderCashoutContainer>
              <Button modifier="optional">Cash out</Button>
              <MyBetHeaderCashout>
                <MyBetHeaderCashoutAmount>
                  1535.82 mbtc
                </MyBetHeaderCashoutAmount>
              </MyBetHeaderCashout>
            </MyBetHeaderCashoutContainer>
          </MyBetHeader>
          <MyBetContents>
            <ScoreboardsContainer>
              <DummyFootballScoreboard event={event} timer="45:21" />
              <DummyFootballScoreboard
                event={footballEventNoStream}
                timer="12:11"
                badges={[wonBadge]}
              />
              <TennisScoreboard
                event={tennis1}
                timer="45:21"
                badges={[liveBadge, activeBadge]}
              />
              <TennisScoreboard event={tennis2} timer="Set 2" />
              <DummyFootballScoreboard
                event={footballEventNoStream}
                timer="14:11"
              />
              <TennisScoreboard event={tennis1} timer="Set 1" />
              <TennisScoreboard
                event={tennis2}
                timer="Set 5"
                badges={[liveBadge, liveBadge, liveBadge, liveBadge]}
              />
            </ScoreboardsContainer>
            <MyBetCaptions>
              <MyBetCaptionRow>
                <MyBetCaptionTitle>Status</MyBetCaptionTitle>
                <MyBetCaptionValue>
                  <Badge>Active</Badge>
                </MyBetCaptionValue>
              </MyBetCaptionRow>
              <MyBetCaptionRow>
                <MyBetCaptionTitle>Odds</MyBetCaptionTitle>
                <MyBetCaptionValue>5.20</MyBetCaptionValue>
              </MyBetCaptionRow>
              <MyBetCaptionRow>
                <MyBetCaptionTitle>Stake</MyBetCaptionTitle>
                <MyBetCaptionValue>135,3444,321 EUR</MyBetCaptionValue>
              </MyBetCaptionRow>
              <MyBetCaptionRow>
                <MyBetCaptionTitle>Potential win</MyBetCaptionTitle>
                <MyBetCaptionValue color={colors.brand}>
                  1535.82mBTC
                </MyBetCaptionValue>
              </MyBetCaptionRow>
            </MyBetCaptions>
          </MyBetContents>

          <MyBetFooter>
            <Button modifier="optional">
              Copy bet ID <IconHyperlink />
            </Button>
          </MyBetFooter>
        </MyBetContainer>
        <MyBetFooter>
          <Button modifier="optional">
            Copy bet ID <IconHyperlink />
          </Button>
          <MyBetFooterCashout>
            <MyBetFooterAmount>1535.82 mBTC</MyBetFooterAmount>
            <Button modifier="optional">Cash out</Button>
          </MyBetFooterCashout>
        </MyBetFooter>
      </CashierLayout>
    </React.Fragment>
  );
};
