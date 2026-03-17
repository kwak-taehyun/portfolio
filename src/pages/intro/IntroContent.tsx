import {useState, useEffect} from 'react';
import {motion} from 'framer-motion';
import {effects} from '../../components/Motion';
import TextType from '../../components/effect/TextType';
import ScrollReveal from '../../components/effect/ScrollReveal';
import {PiMouseMiddleClickLight} from 'react-icons/pi';

const IntroContent = () => {
  const [iconShow, setIconShow] = useState<boolean>(true);
  const [lastScrollY, setLastScrollY] = useState<number>(0);

  const scrollEvent = () => {
    if(typeof window !== 'undefined'){
      if(window.scrollY > lastScrollY && window.scrollY > 200) {
        setIconShow(false);
      }else{
        setIconShow(true);
      }
    }

    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    if(typeof window !== 'undefined'){
      window.addEventListener('scroll', scrollEvent);
    }

    return () => {
      window.removeEventListener('scroll', scrollEvent);
    }
  }, [lastScrollY]);

  return (
    <div className="parsona_area">
      <div className="inner">
        {iconShow ? 
          <div className="mouse_icon">
            <PiMouseMiddleClickLight />
            <span>Scroll Down</span>
          </div>
          : ""
        }
        <div className="slogan">
          <TextType 
            text={["Beyond Publisher", "Next Frontend developer"]}
            className="text"
            typingSpeed={75}
            pauseDuration={1500}
            showCursor
            cursorCharacter="_"
            deletingSpeed={50}
            cursorBlinkDuration={0.5}
            loop={false}
            multiLine={true}
          />
        </div>
        <motion.div className="text_box" initial="offscreen" whileInView="onscreen" viewport={{once: true, amount: 0.8}}>
          <motion.div variants={effects.upToShow}>
            <dl>
              <dt>배움에 대한 끊임없는 열정이 있는 Publisher 곽태현입니다.</dt>
              <dd>
                <ScrollReveal
                  baseOpacity={0.1}
                  baseRotation={3}
                  blurStrength={4}
                >
                  10년 이상 퍼블리셔로 근무하면서 구축, 고도화, 운영 등 다양한 프로젝트를 경험하였으며,
                  Git과 SVN을 통한 형상관리툴을 사용한 업무진행이 가능하며 Jira, Confluence, Slack을 사용한 협업이 가능합니다. React, Vue 프레임워크를 이용한 퍼블리싱이 가능하며 지속적으로 발전하는 웹 트렌트와 기술을 습득하고 적용하기 위해 노력하고 있으며 다양한 분야의 팀원들과 커뮤니케이션을 통해 최선의 결과를 만들어 내기 위해 노력합니다. 
                  퍼블리셔를 기반으로 인터랙티브한 인터페이스를 만들어가는 프런트엔트 개발자로 나아가고자 합니다.
                </ScrollReveal>
              </dd>
            </dl>
          </motion.div>          
        </motion.div>
        <motion.div className="text_box flex_box vision_box" initial="offscreen" whileInView="onscreen" viewport={{once: true, amount: 0.8}}>
          <motion.div className="vision_img" variants={effects.hideToShow}>
            <img src="images/contents/img_vision.png" alt="vision" />
          </motion.div>
          <motion.dl variants={effects.leftToShow}>
            <dt>My Vision</dt>
            <dd>
              <p>긍정적인 성과를 이루어내기 위해 노력하고 맡은 업무에 대해 최선을 다하며, 다양한 파트와의 협업을 통해 최선을 결과를 만들어 내기 위해 상호 존중과 소통하며 함께 일하고 싶은 동료로 회사의 발전을 이끌어갈 핵심 인력이 되겠습니다.</p>
            </dd>
          </motion.dl>
        </motion.div>
      </div>
    </div>
  );
};

export default IntroContent;