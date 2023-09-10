import { FORM_DATA } from "../../constants";
import Rings from "../../assets/images/pattern-rings.svg";
import "./ContactForm.scss";

const ContactForm = () => {
  // const fields = FORM_DATA.data.map(({ id }) => {});

  // TODO: form design + validation
  return (
    <section id="contact-form" className="contact-form">
      <div className="container">
        <div className="contact-form__wrapper">
          <div className="contact-form__info">
            <h2 className="main-title">{FORM_DATA.title}</h2>
            <p className="contact-form__description">{FORM_DATA.description}</p>
          </div>
          <form action="" className="form">
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
