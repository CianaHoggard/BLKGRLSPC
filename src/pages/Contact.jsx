import "./Contact.css";

function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault();

    // We'll connect this to the real form service/backend later.
  };

  return (
    <section className="contactPage">
      <div className="page-container contactInner">
        <div className="contactHeading">
          <p className="contactEyebrow">get in touch</p>

          <h1>
            say
            <br />
            hey.
          </h1>
        </div>

        <div className="contactContent">
          <div className="contactIntro">
            <p className="contactLead">
              questions about the archive or one of the remaining pieces?
            </p>

            <p>
              send a message and we&apos;ll get back to you as soon as we can.
            </p>

            <p className="contactArchiveNote">
              blkgrlspc is currently in its archive era. quantities are limited
              and there will be no restocks.
            </p>
          </div>

          <form className="contactForm" onSubmit={handleSubmit}>
            <div className="formGroup">
              <label htmlFor="name">name</label>

              <input
                type="text"
                id="name"
                name="name"
                autoComplete="name"
                required
              />
            </div>

            <div className="formGroup">
              <label htmlFor="email">email</label>

              <input
                type="email"
                id="email"
                name="email"
                autoComplete="email"
                required
              />
            </div>

            <div className="formGroup">
              <label htmlFor="subject">subject</label>

              <input
                type="text"
                id="subject"
                name="subject"
                required
              />
            </div>

            <div className="formGroup">
              <label htmlFor="message">message</label>

              <textarea
                id="message"
                name="message"
                rows="7"
                required
              />
            </div>

            <button type="submit" className="contactSubmit">
              <span>send message</span>
              <span>→</span>
            </button>
          </form>
        </div>
      </div>

      <div className="contactBottom">
        <div className="page-container">
          <p>
            made with us
            <br />
            in mind.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
