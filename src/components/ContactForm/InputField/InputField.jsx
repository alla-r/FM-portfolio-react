import PropTypes from "prop-types";
import "./InputField.scss";

const InputField = ({
  label,
  id,
  type,
  inputType,
  isError,
  errorText,
  ...rest
}) => {
  const classNames = isError
    ? "form__text-field_error form__text-field"
    : "form__text-field";

    // TODO: add error icon and adaptive for tablet and desktop
  return (
    <div className="form__control">
      <label htmlFor={id} className={"visually-hidden"}>
        {label}
      </label>
      {type === "input" && (
        <input
          id={id}
          name={id}
          type={inputType}
          className={classNames}
          {...rest}
        />
      )}
      {type === "textarea" && (
        <textarea id={id} name={id} className={classNames} {...rest} />
      )}
      {isError && <p className="form__error-message">{errorText}</p>}
    </div>
  );
};

InputField.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
  inputType: PropTypes.string,
  isError: PropTypes.bool,
  errorText: PropTypes.string,
};

export default InputField;
