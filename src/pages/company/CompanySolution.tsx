import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';
import {effects} from '../../components/Motion';

const CompanySolution = () => {
  return (
    <div  className="solution_area">
      <div className="inner">
        <div className="text_box">
          <dl>
            <dt>와일리만의 통합된 디지털 경험,<br />웹/앱 구축부터 마케팅까지 완벽한 솔루션</dt>
            <dd>
              <motion.div className="solution_img" initial="offscreen" whileInView="onscreen" viewport={{once: true, amount: 0.8}} variants={effects.hideToShow}>
                <img src="/images/contents/img_solution.png" alt="INTEGRATED DIGITAL MARKETING" />
              </motion.div>
              <ul className="solution_list">
                <li>
                  <Link to="/cx">
                    <dl>
                      <dt>CX</dt>
                      <dd>
                        <p className="text">와일리는 고객사의 비즈니스 목표와 사용자의 가치있는 경험을 위한 단계별 전략과 방안을 제시하여 가치있는 고객경험(CX)을 제공합니다.</p>
                        <ul className="work_list">
                          <li>데이터 및 트렌트 분석</li>
                          <li>플랫폼 전략 수립 및 기획</li>
                          <li>서비스 전략 컨설팅</li>
                          <li>UIUX 컨설팅</li>
                        </ul>
                      </dd>
                    </dl>
                  </Link>
                </li>
                <li>
                  <Link to="/platform">
                    <dl>
                      <dt>Platform</dt>
                      <dd>
                        <p className="text">사용자 경험을 중심으로 한 사용자 친화적인 웹사이트와 APP을 개발하고 운영합니다.<br />최신 디지털 기술을 활용하여 맞춤형 솔루션을 제공하고 혁신적인 플랫폼을 구축합니다.</p>
                        <ul className="work_list">
                          <li>플랫폼 기획 및 활성화</li>
                          <li>데이터 설계</li>
                          <li>UIUX 기획 및 디자인</li>
                          <li>퍼블리싱</li>
                          <li>웹&amp;앱 개발</li>
                          <li>개발운영</li>
                        </ul>
                      </dd>
                    </dl>
                  </Link>
                </li>
                <li>
                  <Link to="/marketing">
                    <dl>
                      <dt>Marketing</dt>
                      <dd>
                        <p className="text">와일리만의 시퀀스 마케팅은 전략과 전술의 총체적 관리 운영을 통해 기능적 프레임을 넘어서 성장 중심 프레임으로 고도화된 마케팅 Framework로 고객사의 마케팅 상황에 맞춰 커스터마이징 플랜을 수립하고 캠페인을 운영합니다.</p>
                        <ul className="work_list">
                          <li>마케팅/브랜드 전략 컨설팅</li>
                          <li>IMC 마케팅 기획 및 운영</li>
                          <li>미디어 서비스</li>
                          <li>KPI관리</li>
                          <li>마케팅 데이터 분석</li>
                          <li>광고 기획 및 제작</li>
                        </ul>
                      </dd>
                    </dl>
                  </Link>
                </li>
                <li>
                  <Link to="/service">
                    <dl>
                      <dt>Service</dt>
                      <dd>
                        <p className="text">끊임없이 진화하는 디지털 기술 환경에서 선도적인 역할을 하기 위해 디지털 기술을 강화하고 연구합니다.<br />새로운 기술 도입과 혁신을 통해 변화하는 비즈니스 환경에서 앞서가며 최신 기술을 제공합니다.</p>
                        <ul className="work_list">
                          <li>AD Tech</li>
                          <li>AI솔루션</li>
                          <li>디지털 기술 R&amp;D</li>
                          <li>신규 비즈니스 모델 개발</li>
                        </ul>
                      </dd>
                    </dl>
                  </Link>
                </li>
              </ul>
            </dd>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default CompanySolution;