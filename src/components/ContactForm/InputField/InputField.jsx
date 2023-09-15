import PropTypes from "prop-types";
import "./InputField.scss";

const InputField = ({ label, id, type, inputType, ...rest }) => {
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
          className="form__text-field"
          {...rest}
        />
      )}
      {type === "textarea" && (
        <textarea id={id} name={id} className="form__text-field" {...rest} />
      )}
    </div>
  );
};

InputField.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
  inputType: PropTypes.string,
};

export default InputField;
