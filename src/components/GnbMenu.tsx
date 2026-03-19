import {NavLink, Link} from 'react-router-dom';

type NavListType = {
  id: number;
  name: string;
};

const GnbMenu = () => {
  const navList: Array<NavListType> = [
    {id: 1, name: "intro"},
    {id: 2, name: "career"},
    {id: 3, name: "work"},
    {id: 4, name: "skill"},
  ];

  return (
    <div className="gnb_nav">
      <div className="nav_inner">
        <div className="gnb_link">
          <h4>Kwak tae hyun Portfolio</h4>
          <ul className="nav_list">
            {navList.map((item, index) => {
              return <li key={index}><NavLink to={`/${item.name}`}>{item.name}</NavLink></li>
            })}
          </ul>
        </div>

        <div className="company_info">
          <div className="wylie_story">
            <h4>I can do Anything</h4>
            <ul className="wylie_link">
              <li><Link to="etc">Etc</Link></li>
              {/*<li><Link to="people">People</Link></li>*/}
            </ul>
          </div>
          <hr />
          <dl className="wylie_info">
            <dt>Request</dt>
            <dd><a href="mailto:wylie@wylie.co.kr" className="mail">falastic@gmail.co.kr</a></dd>
            <dt>Address</dt>
            <dd><a href="https://kwak-taehyun.github.io/portfolio/" target="_blank">https://kwak-taehyun.github.io/portfolio/</a></dd>
          </dl>
          <div className="quick_menu">
            <a href="mailto:falastic@gmail.co.kr" className="inquiry">문의</a>
            <a href="https://instagram.com/wylie__official?igshid=MzRlODBiNWFlZA==" target="_blank" className="facebook"><span className="blind">와일리 페이스북</span></a>
            <a href="https://instagram.com/wylie__official?igshid=MzRlODBiNWFlZA==" target="_blank" className="instagram"><span className="blind">와일리 인스타그램</span></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GnbMenu;