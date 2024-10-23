import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
const Form: React.FC = () => {
  return (
    <div className="form">
      <h3 className="sideheading ">Fill this form</h3>
      <h4 className="contact__title">Contact Us</h4>
      <form id="contact-form" className="form__control">
        <div className="twice-two">
          <input type="text" className="form-control" id="name" autoComplete="off" placeholder="Name" />
          <input type="email" className="form-control" id="to" autoComplete="off" placeholder="Email" />
        </div>
        <div className="twice">
          <input type="text" className="form-control" id="subject" autoComplete="off" placeholder="Subject" />
        </div>
        <textarea className="form-control h-[200px]" id="message" placeholder="Message"></textarea>
        <button type="submit" className="form__btn">
          Contact Us <FaPaperPlane className="size-6" />
        </button>
      </form>
      <h3>OR</h3>
      <div className="other-contact">
        <div className="other__form">
          <div className="contact__icon">
            <IoCall className="size-5" />
          </div>
          <div>
            <p className="contact__title">Call Us :</p>
            <p className="contact__description">+971 545 418 559, +971 (06) 678 5591</p>
          </div>
        </div>
        <div className="other__form">
          <div className="contact__icon">
            <MdOutlineEmail className="size-5" />
          </div>
          <div>
            <p className="contact__title">Mail Us :</p>
            <p className="contact__description">info@pyroshields.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
