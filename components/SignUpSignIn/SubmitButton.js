const SubmitButton = ({ isLoading, isError, error }) => {
  return (
    <>
      <button
        className="border-2 border-ink p-2 rounded-sm cursor-pointer transition-cubic-bezier bg-reverse text-ink hover:bg-ink hover:text-reverse w-full disabled:cursor-not-allowed   disabled:opacity-50"
        type="submit"
        disabled={isLoading || isError}
      >
        {isLoading ? <span>loading...</span> : <span>sign in</span>}
      </button>

      {isError && <p className="text-red mt-4 lowercase">{error}</p>}
    </>
  )
}

export default SubmitButton
