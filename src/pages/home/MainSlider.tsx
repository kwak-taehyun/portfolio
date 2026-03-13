import {useState, useEffect, useContext, forwardRef} from 'react';
import Slick from '../../components/Slick';
import BlurText from '../../components/effect/BlurText';
import HomeContext from './HomeContext';
import MainAside from './MainAside';

type PropsType = {
  currentIndex: number;
  changeSlide: (index: number) => void;
}

const MainSlider = (props: PropsType, ref: any) => {
  const value = useContext(HomeContext);
  const [textIndex, setTextIndex] = useState<number>(1);
  const sliderItems = value?.state.slideList;

  useEffect(() => {
    ref.current.slickGoTo(Number(props.currentIndex));
    setTextIndex(Number(props.currentIndex));
  }, [props.changeSlide]);

  return (
    <div className="main_slider">
      <MainAside />
      <div className="slide_area">
        <div className="slide_text">
          <div className="text_area">
            <p className="group">
              <BlurText
                key={value?.state.slideList[textIndex].title}
                text={value?.state.slideList[textIndex].title}
                delay={200}
                animateBy="words"
                direction="top"
                className="group"
              />
            </p>
            <p className="text">
              <BlurText
                key={value?.state.slideList[textIndex].desc}
                text={value?.state.slideList[textIndex].desc}
                delay={200}
                animateBy="words"
                direction="top"
                className="text"
              />
            </p>
          </div>
        </div>
        <Slick className="slide_img" changeSlide={props.changeSlide} ref={ref}>
          {sliderItems?.map((item, index) => (
            <div key={index}>
              <img src={item.thumbnail} alt={`${item.title} ${item.desc}`} />
            </div>
          ))}
        </Slick>
      </div>
    </div>
  );
};

export default forwardRef(MainSlider);