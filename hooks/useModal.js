import { useState, useContext, createContext } from 'react'

export const ModalContext = createContext()

export const useModalState = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen)
  }

  return {
    isModalOpen,
    toggleModal,
  }
}

export const useModal = () => {
  const { isModalOpen, toggleModal } = useContext(ModalContext)

  return {
    isModalOpen,
    toggleModal,
  }
}
