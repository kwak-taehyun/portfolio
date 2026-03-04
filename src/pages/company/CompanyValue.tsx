import {motion} from 'framer-motion';
import {effects} from '../../components/Motion';

const CompanyValue = () => {
  return (
    <div  className="value_area">
      <div className="inner">
        <div className="text_box">
          <dl>
            <dt>디지털 세상의 행복한 경험.<br />와일리, 세 가지의 가치와 함께 자랍니다.</dt>
            <dd>
              <motion.div className="value_box" initial="offscreen" whileInView="onscreen" viewport={{once: true, amount: 0.8}} variants={effects.hideToShowDelay}>
                <motion.div className="value respect" variants={effects.upToShow}>
                  <div className="value_tit">
                    <p className="tit"><span className="eng">Respect</span>존중하는 자세</p>
                    <p className="text">함께 일하는 사람과 관계에 대한<br />존중과 인정</p>
                  </div>
                  <div className="img"></div>
                </motion.div>

                <motion.div className="value creative" variants={effects.upToShow}>
                  <div className="value_tit">
                    <p className="tit"><span className="eng">Creative</span>창조적인 사고</p>
                    <p className="text">변화를 두려워 하지 않고<br />새로운 대안을 제시하는 노력</p>
                  </div>
                  <div className="img"></div>
                </motion.div>

                <motion.div className="value challenge" variants={effects.upToShow}>
                  <div className="value_tit">
                    <p className="tit"><span className="eng">Challenge</span>목표 도전 의식</p>
                    <p className="text">과정에 열정을 쏟고<br />결과를 돌아보는 의지와 노력</p>
                  </div>
                  <div className="img"></div>
                </motion.div>
              </motion.div>
            </dd>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default CompanyValue;