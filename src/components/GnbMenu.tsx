import {NavLink, Link} from 'react-router-dom';

type NavListType = {
  id: number;
  name: string;
};

const GnbMenu = () => {
  const navList: Array<NavListType> = [
    {id: 1, name: "CX"},
    {id: 2, name: "Platform"},
    {id: 3, name: "Market"},
    {id: 4, name: "Service"},
  ];

  return (
    <div className="gnb_nav">
      <div className="nav_inner">
        <div className="gnb_link">
          <h4>wylie do Anything</h4>
          <ul className="nav_list">
            {navList.map((item, index) => {
              return <li key={index}><NavLink to={`/${item.name}`}>{item.name}</NavLink></li>
            })}
          </ul>
        </div>

        <div className="company_info">
          <div className="wylie_story">
            <h4>wylie's Story</h4>
            <ul className="wylie_link">
              <li><Link to="company">Company</Link></li>
              <li><Link to="people">People</Link></li>
            </ul>
          </div>
          <hr />
          <dl className="wylie_info">
            <dt>Project Request</dt>
            <dd><a href="mailto:wylie@wylie.co.kr" className="mail">wylie@wylie.co.kr</a></dd>
            <dt>Address</dt>
            <dd>서울시 강남구 학동로 366 메이트리빌딩</dd>
          </dl>
          <div className="quick_menu">
            <a href="mailto:wylie@wylie.co.kr" className="inquiry">프로젝트 문의</a>
            <a href="https://instagram.com/wylie__official?igshid=MzRlODBiNWFlZA==" target="_blank" className="facebook"><span className="blind">와일리 페이스북</span></a>
            <a href="https://instagram.com/wylie__official?igshid=MzRlODBiNWFlZA==" target="_blank" className="instagram"><span className="blind">와일리 인스타그램</span></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GnbMenu;