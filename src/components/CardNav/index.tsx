import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { ButtonMenuItem } from '@apeswapfinance/uikit'
import { useTranslation } from 'react-i18next'

import TranslatedText from '../TranslatedText'

const StyledNav = styled.div`
  margin-bottom: 40px;
  background-color: ${({ theme }) => (theme.isDark ? theme.colors.tertiary : '#fff')};
  width: 100%;
  text-align: center;
  padding: 1rem 0px;
`

const Nav = ({ activeIndex = 0 }: { activeIndex?: number }) => {
  const { t } = useTranslation()
  return (
    <StyledNav>
      <div
        style={{
          backgroundColor: 'transparent',
          padding: '5px',
        }}
      >
        <ButtonMenuItem
          isActive={activeIndex === 0}
          fontSize="24px"
          variant="gradient"
          id="swap-nav-link"
          to="/trade/swap"
          as={Link}
        >
          {t('Exchange')}
        </ButtonMenuItem>
        <ButtonMenuItem
          isActive={activeIndex === 1}
          fontSize="24px"
          variant="gradient"
          id="pool-nav-link"
          to="/trade/pool"
          as={Link}
        >
          {t('Liquidity')}
        </ButtonMenuItem>
      </div>
      {/* <ButtonMenu activeIndex={activeIndex} variant="primary" size="sm">
        <ButtonMenuItem variant="primary" id="swap-nav-link" to="/trade/swap" as={Link}>
          <TranslatedText translationId={8}>Exchange</TranslatedText>
        </ButtonMenuItem>
        <ButtonMenuItem variant="primary" id="pool-nav-link" to="/trade/pool" as={Link}>
          <TranslatedText translationId={74}>Liquidity</TranslatedText>
        </ButtonMenuItem>
      </ButtonMenu> */}
    </StyledNav>
  )
}

export default Nav
