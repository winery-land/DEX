import React from 'react'
import { Modal } from '@apeswapfinance/uikit'
import { useTranslation } from 'react-i18next'

import SlippageToleranceSetting from './SlippageToleranceSetting'
import TransactionDeadlineSetting from './TransactionDeadlineSetting'

type SettingsModalProps = {
  onDismiss?: () => void
}

// TODO: Fix UI Kit typings
const defaultOnDismiss = () => null

const SettingsModal = ({ onDismiss = defaultOnDismiss }: SettingsModalProps) => {
  const {t }= useTranslation();
  return (
    <Modal title={t("Settings")} onDismiss={onDismiss}>
      <SlippageToleranceSetting />
      <TransactionDeadlineSetting />
    </Modal>
  )
}

export default SettingsModal
