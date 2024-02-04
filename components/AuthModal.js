'use client'
import { useState } from 'react'
import ReactModal from 'react-modal'
import cn from 'classnames'

import { UseModal } from '@/hooks/UseModal'

import SignInForm from './SignUpSignIn/SignInForm'
import SignUpForm from './SignUpSignIn/SignUpForm'

ReactModal.setAppElement('#__next')

const Auth = ({ className }) => {
  const { isModalOpen, toggleModal } = UseModal()
  const [creatingAccount, setCreatingAccount] = useState(false)
  return (
    <ReactModal
      isOpen={isModalOpen}
      onRequestClose={toggleModal}
      className={{
        base: cn(
          'transition-cubic-bezier relative flex min-h-[32rem] w-[32rem] items-center justify-center border border-solid border-ink bg-reverse p-4 font-lack text-ink opacity-0 duration-500 lg:p-24',
          className,
        ),
        afterOpen: '!translate-y-0 !opacity-100',
        beforeClose: '!translate-y-full',
      }}
      overlayClassName="fixed top-0 left-0 h-full w-full flex items-center justify-center bg-ink bg-opacity-50 z-50 p-4 lg:p-24 opacity-100"
    >
      <div className="flex w-full flex-col">
        <button
          className="absolute right-8 top-8 font-lack"
          onClick={toggleModal}
        >
          &#x2715;
        </button>

        {creatingAccount ? (
          <SignUpForm
            setCreatingAccount={setCreatingAccount}
            creatingAccount={creatingAccount}
          />
        ) : (
          <SignInForm
            setCreatingAccount={setCreatingAccount}
            creatingAccount={creatingAccount}
          />
        )}
      </div>
    </ReactModal>
  )
}

export default Auth
