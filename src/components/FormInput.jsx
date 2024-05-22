function FormInput({
  className,
  type,
  placeholder,
  isDisabled,
  action,
  inputDefault,
  labelText,
  maxInputDate,
  modalLabel
}) {
  // seperating event handler here gives more
  // flexibility - i.e can add parameters to functions being passed down
  const handleInputChange = (e) => {
    const newValue = e.target.value;
    const sourceInput = className;
    action(newValue, sourceInput);
  };
  return (
    <div className={modalLabel}>
      <label>
        {labelText}
      </label>
      
      <input
        type={type}
        className={className}
        placeholder={placeholder}
        disabled={isDisabled}
        onChange={handleInputChange}
        defaultValue={inputDefault}
        max={maxInputDate}
      />
      <span className="error" aria-live="polite"></span>
    </div>
  );
}

export { FormInput };
