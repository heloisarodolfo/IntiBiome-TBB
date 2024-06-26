import "../App.css";

function Footer() {
  return (
    <div className="footer-container">
      <div className="content">
        <p>contact us | </p>
        <p>faq | </p>
        <p>site map | </p>
        <p>privacy policy |</p>
        <p>cookies policy | </p>
        <p>legal notice</p>
      </div>
      <div className="responsive-content">
        <p>contact us</p>
        <p>faq</p>
        <p>site map</p>
        <p>privacy policy</p>
        <p>cookies policy</p>
        <p>legal notice</p>
      </div>
      <div className="footer-images">
        <img src="../ulabs.png" alt="" className="ulabs" />
        <img src="../instagram-icon.png" alt="" className="instagram" />
      </div>
    </div>
  );
}

export default Footer;
