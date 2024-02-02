const Input = ({
  label,
  type,
  id,
  placeholder,
  value,
  onChange,
  className,
}) => {
  return (
    <>
      <label htmlFor={id} className="block mb-2">
        {label}
      </label>

      <input
        className={className}
        type={type}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </>
  )
}

export default Input
