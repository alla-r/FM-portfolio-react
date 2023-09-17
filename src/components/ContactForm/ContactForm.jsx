import { useFormik } from 'formik';
import { FORM_DATA } from '../../constants';
// import Rings from "../../assets/images/pattern-rings.svg";
import InputField from './InputField';
import { CONTACT_FORM_SCHEMA } from '../../validationSchema';
import './ContactForm.scss';

const ContactForm = () => {
  const onSubmitCallback = (values, actions) => {
    console.log(values);
    actions.resetForm();
    // TODO: sent data
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

  // TODO: rings design + move form logic to a component
  return (
    <section id="contact-form" className="contact-form">
      <div className="container">
        <div className="contact-form__wrapper">
          <div className="contact-form__info">
            <h2 className="main-title">{FORM_DATA.title}</h2>
            <p className="contact-form__description">{FORM_DATA.description}</p>
          </div>
          <form className="form" onSubmit={handleSubmit}>
            {fields}
            <button disabled={isSubmitting} type="submit" className="main-button">
              {FORM_DATA.buttonText}
            </button>
          </form>
        </div>
      </div>
      {/* <img className="skills__rings" src={Rings} alt="rings" /> */}
    </section>
  );
};

export default ContactForm;
