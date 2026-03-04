import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';
import {effects} from '../../components/Motion';

const CompanyKnowhow = () => {
  return (
    <div  className="knowhow_area">
      <div className="inner">
        <div className="text_box">
          <dl>
            <dt>수년간의 노하우를 기반으로<br />새로운 디지털 솔루션 개발</dt>
            <dd>
              <motion.div className="knowhow_img" initial="offscreen" whileInView="onscreen" viewport={{once: true, amount: 0.8}} variants={effects.hideToShow}>
                <img src="/images/contents/img_knowhow.png" alt="Knowhow AI AD Tech Data mobility UIUX Tech" />
              </motion.div>
              <strong>디지털 솔루션 개발</strong>
              <ul className="solution_list">
                <li>
                  <Link to="/cx">
                    <dl>
                      <dt>Fromto[X]</dt>
                      <dd>
                        <p className="text">AI 성과 분석 및 예측 결과 바탕의 고도화된 인사이트와 솔루션을 제공하는 디지털 마케팅 인사이트 & 솔루션 서비스</p>
                        <ul className="work_list">
                          <li>데이터 솔루션</li>
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

export default CompanyKnowhow;