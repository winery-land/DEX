import React, { useContext, useEffect } from 'react'
import { Menu as UikitMenu, ConnectorNames } from '@apeswapfinance/uikit'
import { useWeb3React } from '@web3-react/core'
import { useTranslation } from 'react-i18next'

import { LanguageContext } from 'hooks/LanguageContext'
import useTheme from 'hooks/useTheme'
import { useGetPriceDataFromLP } from 'hooks/useGetPriceData'
import useGetLocalProfile from 'hooks/useGetLocalProfile'
import { useActiveWeb3React } from 'hooks'
import { injected, bsc, walletconnect } from 'connectors'
import { allLanguages } from 'constants/localisation/languageCodes'
import links from './config'
import useSwitchNetwork from '../../hooks/useSwitchNetwork'

const Menu: React.FC = (props) => {
  const { account, activate, deactivate } = useActiveWeb3React()
  const { selectedLanguage, setSelectedLanguage } = useContext(LanguageContext)
  const { isDark, toggleTheme } = useTheme()
  const { switchNetwork } = useSwitchNetwork()
  // const priceData = useGetPriceData()
  // const cakePriceUsd = priceData ? Number(priceData.prices.Cake) : undefined
  // const lpPrice = useGetPriceDataFromLP()
  const { i18n } = useTranslation()
  const changeLang = (newLang) => {
    i18n.changeLanguage(newLang.code)
  }
  const profile = useGetLocalProfile()
  const { chainId }: any = useActiveWeb3React()
  return (
    <UikitMenu
      chainId={chainId}
      switchNetwork={async () => {
        await switchNetwork()
      }}
      links={links}
      account={account as string}
      login={(connectorId: ConnectorNames) => {
        if (connectorId === 'walletconnect') {
          return activate(walletconnect)
        }

        if (connectorId === 'bsc') {
          return activate(bsc)
        }

        return activate(injected)
      }}
      logout={deactivate}
      isDark={isDark}
      toggleTheme={toggleTheme}
      langs={allLanguages}
      currentLang={i18n.language}
      setLang={changeLang}
      // bananaPriceUsd={lpPrice}
      profile={profile}
      {...props}
    />
  )
}

export default Menu
