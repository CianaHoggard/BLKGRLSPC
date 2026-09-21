import { Link } from "react-router-dom";
import "./About.css";

function About() {
  return (
    <section className="aboutPage">
      <div className="page-container">
        <div className="aboutHero">
          <p className="aboutEyebrow">about blkgrlspc</p>

          <h1>
            made for the
            <br />
            bl(ac)k girl.
          </h1>
        </div>

        <div className="aboutStory">
          <div className="aboutArtwork">
            <img
              src="/images/branding/blkgrlspc-logo.png"
              alt="BLKGRLSPC Black Girl Magic illustration"
            />
          </div>

          <div className="aboutCopy">
            <p className="aboutLead">
              blkgrlspc was created as a little space for Black girls to feel
              seen, celebrated, protected, and reminded that we deserve to
              take up room.
            </p>

            <p>
              What started during a heavy moment became a collection of small
              things with something bigger to say — pins, affirmations,
              accessories, and wearable reminders made with us in mind.
            </p>

            <p>
              The pieces are playful, loud when they need to be, soft when
              they want to be, and rooted in the culture that Black girls
              continue to create.
            </p>

            <p>
              blkgrlspc is now in its archive era. There are no restocks and
              no relaunch planned. What remains is the final collection from
              this chapter.
            </p>

            <Link to="/archive" className="aboutLink">
              read the farewell
              <span>→</span>
            </Link>
          </div>
        </div>
      </div>

      <section className="aboutStatement">
        <div className="page-container">
          <p>
            take up space.
            <br />
            wear the reminder.
          </p>
        </div>
      </section>

      <section className="aboutShop">
        <div className="page-container aboutShopInner">
          <div>
            <p className="aboutShopEyebrow">the final collection</p>

            <h2>shop what&apos;s left.</h2>
          </div>

          <Link to="/shop" className="aboutShopButton">
            shop the archive
            <span>→</span>
          </Link>
        </div>
      </section>
    </section>
  );
}

export default About;
