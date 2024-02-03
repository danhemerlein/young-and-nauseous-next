const RangeInput = ({ label, min, max, value, step, cb }) => {
  const handleInputChange = (e, setterFunction) => {
    setterFunction(e.target.value)
  }

  return (
    <>
      <label htmlFor="label">label</label>
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        step={step}
        id={label}
        onChange={(e) => handleInputChange(e, cb)}
      />
    </>
  )
}

export default RangeInput
