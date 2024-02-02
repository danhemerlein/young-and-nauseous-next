'use client'

import { createContext, useContext, useState } from 'react'

export const ModalContext = createContext()

export const UseModalState = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen)
    isModalOpen
      ? (document.body.style.overflow = 'auto')
      : (document.body.style.overflow = 'hidden')
  }

  return {
    isModalOpen,
    toggleModal,
  }
}

export const UseModal = () => {
  const { isModalOpen, toggleModal } = useContext(ModalContext)

  return {
    isModalOpen,
    toggleModal,
  }
}
