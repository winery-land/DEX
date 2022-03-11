import React from 'react'
import { useWeb3React } from '@web3-react/core'
import { GradientButton, ButtonProps, ConnectorNames, useWalletModal } from '@apeswapfinance/uikit'
import { useTranslation } from 'react-i18next'
import { injected, walletconnect } from 'connectors'
import Swal from 'sweetalert2'
import useI18n from 'hooks/useI18n'
import useSwitchNetwork from '../../hooks/useSwitchNetwork'

const UnlockButton: React.FC<ButtonProps> = (props) => {
  const TranslateString = useI18n()
  const { account, activate, deactivate, chainId } = useWeb3React()
  const { switchNetwork } = useSwitchNetwork()
  const { t } = useTranslation()
  const handleLogin = async (connectorId: ConnectorNames) => {
    if (connectorId === 'walletconnect') {
      return activate(walletconnect)
    }
    return switchNetwork()
    // return activate(injected, () => {
    //   const Toast = Swal.mixin({
    //     toast: true,
    //     position: 'bottom-end',
    //     showConfirmButton: false,
    //     timer: 3000,
    //     timerProgressBar: true,
    //     didOpen: (toast) => {
    //       toast.addEventListener('mouseenter', Swal.stopTimer)
    //       toast.addEventListener('mouseleave', Swal.resumeTimer)
    //     }
    //   })

    //   Toast.fire({
    //     icon: 'info',
    //     title: 'Your network is not support, please switch to correct network!',
    //     iconColor: '#88032F'
    //   })
    // })
  }

  const { onPresentConnectModal } = useWalletModal(handleLogin, deactivate, account as string)

  return (
    <GradientButton onClick={onPresentConnectModal} {...props}>

      {t('Connect wallet')}
    </GradientButton>
  )
}

export default UnlockButton
