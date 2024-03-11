const Input = ({
  label,
  type,
  id,
  placeholder,
  value,
  onChange,
  className,
  required = true,
}) => {
  return (
    <>
      <label htmlFor={id} className="mb-2 block">
        {label}
      </label>

      <input
        required={required}
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
