import React from "react";
import Aside_part from "./Aside_part";
import "./Contact.css";
import Contact_body from "./Contact_body";

const Contact = () => {
  return (
    <>
      <div class="section">
        <div class="container">
          <div class="row">
            <div class="col-md-8">
              <Contact_body />
            </div>
            <div class="col-md-4">
              <Aside_part />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
