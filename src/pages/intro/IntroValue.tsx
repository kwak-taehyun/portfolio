import {motion} from 'framer-motion';
import {effects} from '../../components/Motion';

const IntroValue = () => {
  return (
    <div className="value_area">
      <div className="inner">
        <div className="text_box">
          <dl>
            <dt>일에 대한 가치관.<br />끊임없는 노력과 배움으로 나아가고자 합니다.</dt>
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
                    <p className="text">변화를 두려워 하지 않고<br />새로운 것을 배우려는 노력</p>
                  </div>
                  <div className="img"></div>
                </motion.div>

                <motion.div className="value challenge" variants={effects.upToShow}>
                  <div className="value_tit">
                    <p className="tit"><span className="eng">Challenge</span>목표 도전 의식</p>
                    <p className="text">과정에 열정을 다하고<br />결과를 향상시키려는 노력</p>
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

export default IntroValue;