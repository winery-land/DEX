import React from 'react'
import styled from 'styled-components'
import { ButtonMenu, ButtonMenuItem } from '@apeswapfinance/uikit'
import { useTranslation } from 'react-i18next'

import { darken } from 'polished'
import { NavLink, Link as HistoryLink } from 'react-router-dom'
import { ArrowLeft } from 'react-feather'
import { RowBetween } from 'components/Row'
import QuestionHelper from 'components/QuestionHelper'
import TranslatedText from 'components/TranslatedText'

const Tabs = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  border-radius: 3rem;
  justify-content: space-evenly;
`

const activeClassName = 'ACTIVE'

const StyledAbsoluteLink = styled.a`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  height: 3rem;
  border-radius: 3rem;
  outline: none;
  cursor: pointer;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.textDisabled};
  font-size: 20px;

  &.${activeClassName} {
    border-radius: 12px;
    font-weight: 450;
    color: ${({ theme }) => theme.colors.text};
  }

  :hover,
  :focus {
    color: ${({ theme }) => darken(0.1, theme.colors.text)};
  }
`

const StyledNavLink = styled(NavLink).attrs({
  activeClassName,
})`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  height: 3rem;
  border-radius: 3rem;
  outline: none;
  cursor: pointer;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.textDisabled};
  font-size: 20px;

  &.${activeClassName} {
    border-radius: 12px;
    font-weight: 450;
    color: ${({ theme }) => theme.colors.text};
  }

  :hover,
  :focus {
    color: ${({ theme }) => darken(0.1, theme.colors.text)};
  }
`

const ActiveText = styled.div`
  font-weight: 450;
  font-size: 20px;
`

const StyledArrowLeft = styled(ArrowLeft)`
  color: ${({ theme }) => theme.colors.text};
`

export function SwapPoolTabs({ active }: { active: 'swap' | 'pool' }) {
  return (
    <Tabs style={{ marginBottom: '20px' }}>
      <StyledNavLink id="swap-nav-link" to="/trade/swap" isActive={() => active === 'swap'}>
        <TranslatedText translationId={8}>Swap</TranslatedText>
      </StyledNavLink>
      <StyledNavLink id="pool-nav-link" to="/trade/pool" isActive={() => active === 'pool'}>
        <TranslatedText translationId={74}>Pool</TranslatedText>
      </StyledNavLink>
      <StyledAbsoluteLink id="pool-nav-link" target="_blank" href="https://www.binance.org/en/panama">
        Bridge
      </StyledAbsoluteLink>
    </Tabs>
  )
}

export const Nav = ({ activeIndex = 0 }: { activeIndex?: number }) => {
  const { t } = useTranslation()

  return (
    <ButtonMenu activeIndex={activeIndex} size="sm" variant="subtle">
      <ButtonMenuItem id="swap-nav-link" to="/trade/swap" as={HistoryLink}>
        {t('Swap')}
      </ButtonMenuItem>
      <ButtonMenuItem id="pool-nav-link" to="/trade/pool" as={HistoryLink}>
        {t('Liquidity')}
      </ButtonMenuItem>
      <ButtonMenuItem
        id="pool-nav-link"
        as="a"
        href="https://www.binance.org/en/panama"
        target="_blank"
        rel="noreferrer noopener"
      >
        {t('Bridge')}
      </ButtonMenuItem>
    </ButtonMenu>
  )
}
export function FindPoolTabs() {
  const { t } = useTranslation()

  return (
    <Tabs>
      <RowBetween style={{ padding: '1rem' }}>
        <HistoryLink to="/trade/pool">
          <StyledArrowLeft />
        </HistoryLink>
        <ActiveText>{t('Import Pool')}</ActiveText>
        <QuestionHelper text={t("Use this tool to find pairs that don't automatically appear in the interface.")} />
      </RowBetween>
    </Tabs>
  )
}

export function AddRemoveTabs({ adding }: { adding: boolean }) {
  const { t } = useTranslation()
  return (
    <Tabs>
      <RowBetween style={{ padding: '1rem' }}>
        <HistoryLink to="/trade/pool">
          <StyledArrowLeft />
        </HistoryLink>
        <ActiveText>
          {adding ? t('Add') : t('Remove')} {t('Liquidity')}
        </ActiveText>
        <QuestionHelper
          text={
            adding
              ? t(
                  'When you add liquidity, you are given pool tokens representing your position. These tokens automatically earn fees proportional to your share of the pool, and can be redeemed at any time.'
                )
              : t(
                  'Removing pool tokens converts your position back into underlying tokens at the current rate, proportional to your share of the pool. Accrued fees are included in the amounts you receive.'
                )
          }
        />
      </RowBetween>
    </Tabs>
  )
}
