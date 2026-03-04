import {Link} from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="inner">
        <div className="footer_cont">
          <ul className="footer_link">
            <li><Link to="cx">CX</Link></li>
            <li><Link to="platform">platform</Link></li>
            <li><Link to="market">Market</Link></li>
            <li><Link to="service">Service</Link></li>
            <li><Link to="company">Company</Link></li>
            <li><Link to="people">People</Link></li>
            <li><Link to="times">Wylie Times</Link></li>
          </ul>
          <address className="address">
            <span>대표 박수인</span>
            <span>211-88-56742</span>
            <span>서울특별시 강남구 학동로 336 메이트리빌딩</span>
            <span>Tel. 02-545-3477</span>
            <span>Fax. 02-545-3494</span>
            <span>E-mail. wylie@wylie.co.kr</span>
            <span className="copyright">ⓒ wylie. All right reserved.</span>
          </address>
        </div>
        <div className="footer_cont">
          <h2 className="footer_logo">
            <img src="/images/common/footer_logo.png" alt="wylie footer logo" />
          </h2>
          <div className="sns">
            <a href="https://www.facebook.com/digitalwylie/" target="_blank" className="facebook">facebook</a>
            <a href="https://www.instagram.com/digitalwylie/" target="_balnk" className="instagram">instagram</a>
            <a href="Wylie_Company Brochure_Summary_202309.pdf" className="brief">company brief</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;