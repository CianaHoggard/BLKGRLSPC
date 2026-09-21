import { Link } from "react-router-dom";
import "./Archive.css";

function Archive() {
  return (
    <section className="archivePage">
      <div className="page-container archiveInner">
        <div className="archiveHeading">
          <p className="archiveEyebrow">the archive era</p>

          <h1>
            archive era —
            <br />
            farewell.
          </h1>
        </div>

        <div className="archiveArtwork">
          <img
            src="/images/branding/blkgrlspc.jpg"
            alt="BLKGRLSPC Black Girl Magic illustration"
          />
        </div>

        <div className="archiveLetter">
          <p>
            In 2020, the world split open. George Floyd. Protests. Pandemic.
            Quiet that felt loud. For the first time since I was 18, I wasn’t
            working. I didn’t know what to do with the stillness — so I made
            something to hold myself. Something to hold us.
          </p>

          <p>
            Blkgrlspc was born out of grief, identity, softness and survival.
            A little offering in a heavy moment. Knick knacks. Affirmations.
            A reminder to breathe. A reminder to take up room.
          </p>

          <p>
            6 years later, I’m different. The world is different. It’s time
            to close this chapter with gratitude instead of dragging it
            forward out of obligation. What’s left in the shop is the end of
            the collection. No relaunch. No rebrand. When it sells out,
            that’s it.
          </p>

          <p>
            Thank you for being part of this moment.
            <br />
            For every order, every repost, every Black girl who felt seen —
            thank you.
          </p>

          <p className="archiveClosing">
            For the bl(ac)k girl who deserves to take up sp(a)c(e).
            <br />
            <span>♥ Cici</span>
          </p>
        </div>

        <div className="archiveCta">
          <Link to="/shop">
            shop what&apos;s left
            <span>→</span>
          </Link>
        </div>
      </div>

      <div className="archiveQuote">
        <div className="page-container">
          <p>
            a reminder to breathe.
            <br />
            a reminder to take up room.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Archive;
