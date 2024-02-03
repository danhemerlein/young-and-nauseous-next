'use client'

import { ModalContext, UseModalState } from '@/hooks/UseModal'

const AppState = ({ children }) => {
  const modal = UseModalState()

  return <ModalContext.Provider value={modal}>{children}</ModalContext.Provider>
}
export default AppState
