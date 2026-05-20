import "./FooterPage.css"

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* LEFT */}
        <div className="footer-col">
          <h2 className="footer-logo">ITCC Arduino</h2>
          <p>Learn Arduino the easy way. Build, explore and create projects.</p>
        </div>

        {/* LINKS */}
        <div className="footer-col">
          <h4>Navigation</h4>
          <p>Home</p>
          <p>Boards</p>
          <p>Sensors</p>
          <p>Modules</p>
        </div>

        {/* RESOURCES */}
        <div className="footer-col">
          <h4>Resources</h4>
          <p>Projects</p>
          <p>Documentation</p>
          <p>Guides</p>
        </div>

        {/* CONTACT */}
        <div className="footer-col">
          <h4>Contact</h4>
          <p>Email: itcc@email.com</p>
          <p>Telegram</p>
          <p>GitHub</p>
        </div>

      </div>

    <div className="footer-bottom">
  © 2026 ITCC. All rights reserved.
  <span className="footer-bottom2"> Клянусь</span>
</div>

    </footer>
  );
}

export default Footer;