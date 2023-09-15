import { useState } from "react";
import { FORM_DATA } from "../../constants";
// import Rings from "../../assets/images/pattern-rings.svg";
import InputField from "./InputField";
import "./ContactForm.scss";


const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e, id) => {
    const value = e.target.value;

    setFormData({ ...formData, [id]: value });
  }

  const fields = FORM_DATA.data.map(
    ({ id, label, placeholder, type, inputType }) => {
      return (
        <InputField
          key={id}
          label={label}
          placeholder={placeholder}
          type={type}
          inputType={inputType}
          id={id}
          value={formData[id]}
          onChange={(e) => handleChange(e, id)}
          required
        />
      );
    }
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    // TODO: add validation

    console.log(JSON.stringify(formData));
  }

  // TODO: form design + validation yump formik
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
            {/* <div className="form__control">
              <label htmlFor="name" className="visually-hidden">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                className="form__text-field"
              />
            </div>
            <div className="form__control">
              <label htmlFor="email" className="visually-hidden">
                Name
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                className="form__text-field"
              />
            </div>
            <div className="form__control">
              <label htmlFor="message" className="visually-hidden">
                Message
              </label>
              <textarea
                id="message"
                className="form__text-field"
                name="message"
                placeholder="Message"
              ></textarea>
            </div> */}
            <button type="submit" className="main-button">
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
