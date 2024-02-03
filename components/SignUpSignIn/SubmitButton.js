const SubmitButton = ({ isLoading, isError, error, creatingAccount }) => {
  return (
    <>
      <button className="button" type="submit" disabled={isLoading || isError}>
        {isLoading ? (
          <span>loading...</span>
        ) : (
          <span>{creatingAccount ? 'create account' : 'sign in'}</span>
        )}
      </button>

      {isError && <p className="mt-4 lowercase text-red">{error}</p>}
    </>
  )
}

export default SubmitButton
