const Footer = () => {
  return (
    <footer className="footer">
      <div className="inner">
        <div className="footer_cont">
          <address className="address">
            <span>Pub. Kwak tae Hyun</span>
            <span>E-mail. falastic@gmail.com</span>
            <span className="copyright">ⓒ Kwak's. All right reserved.</span>
          </address>
        </div>
        <div className="footer_cont">
          <div className="sns">
            <a href="https://www.facebook.com/falastic/" target="_blank" className="facebook">facebook</a>
            <a href="https://www.instagram.com/taehyun.0110/" target="_balnk" className="instagram">instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;