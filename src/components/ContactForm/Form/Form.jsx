import { useFormik } from 'formik';
import { CONTACT_FORM_SCHEMA } from '../../../validationSchema';
import { FORM_DATA } from '../../../constants';
import InputField from '../InputField';
import './Form.scss';

const Form = () => {
  const onSubmitCallback = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };

  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleSubmit,
    handleChange,
    handleBlur,
    setFieldTouched,
  } = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validationSchema: CONTACT_FORM_SCHEMA,
    onSubmit: onSubmitCallback,
  });

  const fields = FORM_DATA.data.map(({ id, label, placeholder, type, inputType }) => {
    return (
      <InputField
        key={id}
        label={label}
        placeholder={placeholder}
        type={type}
        inputType={inputType}
        id={id}
        value={values[id]}
        onChange={handleChange}
        onBlur={handleBlur}
        onFocus={() => setFieldTouched(id, false)}
        isError={errors[id] && touched[id]}
        errorText={errors[id]}
      />
    );
  });

  return (
    <form className="form" onSubmit={handleSubmit}>
      {fields}
      <button disabled={isSubmitting} type="submit" className="main-button">
        {FORM_DATA.buttonText}
      </button>
    </form>
  );
};

export default Form;
