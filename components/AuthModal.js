import ReactModal from 'react-modal'
import { useState } from 'react'
import { useModal } from '@/hooks/useModal'
import cn from 'classnames'
import SignInForm from './SignInForm'
import SignUpForm from './SignUpForm'
import classNames from 'classnames'
ReactModal.setAppElement('#__next')

const Auth = ({ className }) => {
  const { isModalOpen, toggleModal } = useModal()
  const [creatingAccount, setCreatingAccount] = useState(false)
  return (
    <ReactModal
      isOpen={isModalOpen}
      onRequestClose={toggleModal}
      className={{
        base: cn(
          'transition-cubic-bezier relative opacity-0 duration-500 flex items-center justify-center bg-reverse text-ink min-h-[500px] w-[500px] border-2 border-solid border-ink font-lack p-24',
          className
        ),
        afterOpen: cn('!opacity-100', '!translate-y-0'),
        beforeClose: cn('!translate-y-full'),
      }}
      overlayClassName={{
        base: cn(
          'fixed top-0 left-0 h-full w-full flex items-center justify-center bg-ink bg-opacity-50 z-50'
        ),
        afterOpen: 'opacity-100',
      }}
    >
      <div className="flex flex-col w-full">
        <button
          className="absolute top-8 right-8 font-lack"
          onClick={toggleModal}
        >
          &#x2715;
        </button>

        {creatingAccount ? (
          <SignUpForm setCreatingAccount={setCreatingAccount} />
        ) : (
          <SignInForm setCreatingAccount={setCreatingAccount} />
        )}
      </div>
    </ReactModal>
  )
}

export default Auth
