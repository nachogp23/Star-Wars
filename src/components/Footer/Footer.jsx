const Footer = () => {
  
  //Get Actual year using Date class instance and save the year on constant  
  const date = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer">
        <div className="footer__linksContainer">
          <p className="footer__text">Want to know more abou us?</p>
          <div>
            <a className="footer__linksContainer__link" href="https://twitter.com/">
              Twitter
            </a>
            <span>|</span>
            <a
              className="footer__linksContainer__link"
              href="https://www.instagram.com/"
            >
              Instagram
            </a>
            <span>|</span>
            <a
              className="footer__linksContainer__link"
              href="https://es-es.facebook.com/"
            >
              Facebook
            </a>
            <span>|</span>
            <a
              className="footer__linksContainer__link"
              href="https://www.youtube.com/"
            >
              YouTube
            </a>
          </div>
        </div>

        <p className="footer__copyright">@Copyright {date}</p>
      </div>
    </footer>
  );
};

export default Footer;
