import React from "react";
import contacts from "../../assets/contacts.png";
import OptionsViews from "./optionsViews";
import "./contactsStyle.scss";

const Contacts = () => (
  <section className="row-item views">
    <div className="content-contacts">
      <p>+ top Reviews</p>
      <img src={contacts} className="contacts" alt="contacts" />
    </div>
    <div className="options">
      <OptionsViews />
    </div>
  </section>
);

export default Contacts;
