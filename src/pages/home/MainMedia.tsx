import TextType from '../../components/effect/TextType';
import Prism from '../../components/effect/Prism';
import MainAside from './MainAside';

type PropsType = {
  values: boolean;
  modeOnChange: () => void;
};

const MainMedia = (props: PropsType) => {
  const handleAnimationComplete = () => {
    setTimeout(() => {
      props.modeOnChange();
    }, 4000);
  };

  return (
    <div className="main_slider">
      <MainAside />
      <div className="my_ci">
        <div className="visual_area">
          <div className="visual_text">
            <TextType 
              text={["Welcome to taehyun's portfolio!"]}
              typingSpeed={75}
              pauseDuration={1500}
              showCursor
              cursorCharacter="_"
              deletingSpeed={50}
              cursorBlinkDuration={0.5}
              className="text"
              loop={false}
              onAnimationComplete={handleAnimationComplete}
            />
            {/*<BlurText
              text="Welcome to taehyun's portfolio!"
              delay={500}
              animateBy="words"
              direction="top"
              onAnimationComplete={handleAnimationComplete}
              className="text"
            />*/}
          </div>
          <div style={{width:'100%', height:'100%', position:'relative' }}>
            <Prism
              animationType="3drotate"
              timeScale={0.5}
              height={1.5}
              baseWidth={5.0}
              scale={2.4}
              hueShift={0}
              colorFrequency={1}
              noise={0}
              glow={1}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainMedia;