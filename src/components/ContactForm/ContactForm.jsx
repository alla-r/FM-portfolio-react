import { FORM_DATA } from '../../constants';
import Rings from '../../assets/images/pattern-rings.svg';
import Form from './Form';
import './ContactForm.scss';

const ContactForm = () => {
  return (
    <section id="contact-form" className="contact-form">
      <div className="container">
        <div className="contact-form__wrapper">
          <div className="contact-form__info">
            <h2 className="main-title">{FORM_DATA.title}</h2>
            <p className="contact-form__description">{FORM_DATA.description}</p>
          </div>
          <Form />
        </div>
        <img className="contact-form__rings" src={Rings} alt="rings" />
      </div>
    </section>
  );
};

export default ContactForm;
