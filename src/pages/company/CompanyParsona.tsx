import {motion} from 'framer-motion';
import {effects} from '../../components/Motion';

const CompanyParsona = () => {
  return (
    <div className="parsona_area">
      <div className="inner">
        <div className="slogan">
          <h3 className="text">Beyond Wylie<br />Next Wylie</h3>
        </div>
        <motion.div className="text_box" initial="offscreen" whileInView="onscreen" viewport={{once: true, amount: 0.8}}>
          <motion.dl variants={effects.rightToShow}>
            <dt>세상에서 가장 강력한 보랏빛,<br />우리는 퍼플 페르소나입니다.</dt>
            <dd>
              <span>세상에 없던 새로운 판을 만듭니다.</span>
              <span>대한민국 최고의 웹에이전시에서 온/오프라인을 넘어선 브랜드 마케팅까지.</span>
              <span>뜨거운 열정과 차가운 이성이 만나 누구보다 강력한 보랏빛으로 탄생합니다.</span>
            </dd>
            <dd>
              <span>이 전장의 유일한 퍼플 페르소나.</span>
              <span>토털 커뮤니케이션 그룹 와일리입니다.</span>
            </dd>
          </motion.dl>
        </motion.div>
        <motion.div className="text_box flex_box vision_box" initial="offscreen" whileInView="onscreen" viewport={{once: true, amount: 0.8}}>
          <motion.div className="vision_img" variants={effects.hideToShow}>
            <img src="/images/contents/img_vision.png" alt="wylie vision" />
          </motion.div>
          <motion.dl variants={effects.leftToShow}>
            <dt>Our Vision</dt>
            <dd>
              <span>와일리는 디지털 마케팅의 A부터 Z까지를 아우르는 밸류체인을 통합하여 고객사와 브랜드의 성장을 돕는 토탈 커뮤니케이션 그룹으로,</span>
              <span>빠르게 변화하는 디지털 세상에서 변화를 미리 예측하고 변화에 맞는 혁신적인 플랫폼 구축 및 운영, 전략적인 마케팅과 브랜딩을 실현하고 있습니다.</span>
            </dd>
          </motion.dl>
        </motion.div>
      </div>
    </div>
  );
};

export default CompanyParsona;