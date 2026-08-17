import "./FooterPage.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* LEFT */}
        <div className="footer-left">
          <span className="footer-brand">
            <span className="footer-highlight">Tajik-Korean</span> IT
            Communication Center (
            <span className="footer-bold">WTIT/TUT</span>)
          </span>

          <div className="footer-logos">
            <div className="tut-logo-container">
              <img
                src="img/TUT.jpg"
                alt="TUT Logo"
                className="footer-logo-img"
              />
            </div>
            <div className="tut-logo-container">
              <img
                src="img/WTIT.jpg"
                alt="WTIT Logo"
                className="footer-logo-img2"
              />
            </div>
          </div>
        </div>

        {/* CENTER */}
        <div className="footer-center">
          <span>About Us</span>
          <span>Resources</span>
          <span>Contact</span>
        </div>

        {/* RIGHT - SOCIAL */}
        <div className="footer-right">
          <a href="#" aria-label="Facebook">
            <svg
              width="20"
              height="20"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
          </a>
          <a href="#" aria-label="Instagram">
            <svg
              width="20"
              height="20"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
            </svg>
          </a>
          <a href="#" aria-label="Twitter">
            <svg
              width="20"
              height="20"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 22.43.36a9 9 0 0 1-2.88 1.1A4.52 4.52 0 0 0 16.11 0c-2.5 0-4.52 2-4.52 4.5 0 .35.04.7.11 1.03C7.69 5.3 4.07 3.58 1.64.9a4.5 4.5 0 0 0-.61 2.26c0 1.56.8 2.94 2 3.75A4.48 4.48 0 0 1 .96 6v.06c0 2.18 1.55 4 3.6 4.42a4.52 4.52 0 0 1-2.04.08c.57 1.8 2.24 3.1 4.2 3.13A9.05 9.05 0 0 1 0 15.54 12.8 12.8 0 0 0 6.92 17.5c8.3 0 12.85-6.88 12.85-12.85l-.01-.59A9.17 9.17 0 0 0 22 1.89z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;