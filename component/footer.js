export default function Footer() {
  return (
    <footer id="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="footer-info">
                <h3>TukangGo<span>.</span>my</h3>
                <p>
                  NO. 31, JALAN ANGGERIK 17<br />
                  TAMAN KULAI UTAMA 81000<br />
                  KULAI JOHOR MALAYSIA<br /><br />
                  <strong>Phone:</strong> +60 11-1080 8027<br />
                  <strong>Email:</strong> tukanggo.my@gmail.com
                </p>
                <div className="social-links mt-3">
                  <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
                  <a href="https://www.facebook.com/tukanggo/" className="facebook"><i className="bx bxl-facebook"></i></a>
                  <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
                  <a href="#" className="google-plus"><i className="bx bxl-skype"></i></a>
                  <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
                </div>
              </div>
            </div>

            <div className="col-lg-2 col-md-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li><i className="bx bx-chevron-right"></i> <a href="/">Home</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="/">About us</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="term">Terms and Conditions</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="policy">Privacy policy</a></li>
              </ul>
            </div>

            <div className="col-lg-2 col-md-6 footer-links">
              <h4>For Customer</h4>
              <ul>
                <li><i className="bx bx-chevron-right"></i> <a href="/">How it works?</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="reward.html">Rewards</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="faq">FAQ</a></li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 footer-links">
              <h4>For Tukang</h4>
              <ul>
                <li><i className="bx bx-chevron-right"></i> <a href="/#cta">How to join us?</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="help">Help center</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="copyright">
          &copy; Copyright <strong><span>TUKANGGO</span></strong>. All Rights Reserved
        </div>
      </div>
    </footer>
  );
}
