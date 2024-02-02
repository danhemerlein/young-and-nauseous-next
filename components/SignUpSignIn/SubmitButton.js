const SubmitButton = ({ isLoading, isError, error }) => {
  return (
    <>
      <button
        className="transition-cubic-bezier w-full cursor-pointer rounded-sm border-2 border-ink bg-reverse p-2 text-ink hover:bg-ink hover:text-reverse disabled:cursor-not-allowed   disabled:opacity-50"
        type="submit"
        disabled={isLoading || isError}
      >
        {isLoading ? <span>loading...</span> : <span>sign in</span>}
      </button>

      {isError && <p className="mt-4 lowercase text-red">{error}</p>}
    </>
  )
}

export default SubmitButton
