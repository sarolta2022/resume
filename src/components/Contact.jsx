import React, { useState } from "react";
import emailjs from "emailjs-com";
import hello from "../images/hello.jpg";

const Contact = () => {
  const [visible, setVisible] = useState(true);
  const [show, setShow] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_1vuy0h8",
        "template_1grd89t",
        e.target,
        "6rav0k25RfGoVXcSa"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

    setVisible(false);
  };

  const newMessageSubmit = (e) => {
    e.preventDefault();
    setVisible(true);
  };

  return (
    <div className="main-tile">
      <div
        className="tile-div"
        onClick={() => {
          setShow(!show);
        }}
      >
        <h1 className="tile-header">Hello</h1>
        <img className="tile" src={hello} alt="hello" />
      </div>

      {show && (
        <div>
          <button className="closeButton" onClick={() => setShow(false)}>
            x
          </button>
          {visible && (
            <form id="form-contact" type="submit" onSubmit={handleSubmit}>
              <div>
                <input
                  placeholder="Please enter your name"
                  type="text"
                  name="name"
                  id="name"
                  required
                />
              </div>
              <div>
                <input
                  placeholder="Please enter your email"
                  type="email"
                  name="email"
                  id="email"
                  required
                />
              </div>
              <div>
                <textarea
                  placeholder="your message"
                  id="message"
                  name="message"
                  required
                  rows="4"
                />
              </div>
              <button type="submit">Submit</button>
            </form>
          )}

          {!visible && (
            <div>
              <h3>Thanks for your message</h3>
              <form
                id="form-new-message"
                onSubmit={newMessageSubmit}
                type="submit"
              >
                <button type="submit">New message</button>
              </form>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Contact;
