import {useState, useEffect, useContext, forwardRef} from 'react';
import {useNavigate} from 'react-router-dom';
import Slick from '../../components/Slick';
import TextTransition, {presets} from 'react-text-transition';
import HomeContext from './HomeContext';

type PropsType = {
  currentIndex: number;
  changeSlide: (index: number) => void;
}

const MainSlider = (props: PropsType, ref: any) => {
  const value = useContext(HomeContext);
  const navigate = useNavigate();
  const [textIndex, setTextIndex] = useState<number>(1);
  const sliderItems = value?.state.slideList;

  useEffect(() => {
    ref.current.slickGoTo(Number(props.currentIndex));
    setTextIndex(Number(props.currentIndex));
  }, [props.changeSlide]);

  return (
    <div className="main_slider">
      <div className="slide_area">
        <div className="slide_text">
          <TextTransition springConfig={presets.slow} direction="up">
            {
              <div className="text_area">
                <p className="group"><span>{value?.state.slideList[textIndex].group}</span></p>
                <p className="text">
                  <span className="company">{value?.state.slideList[textIndex].company}</span>
                  <span>{value?.state.slideList[textIndex].project}</span>
                </p>
                <a className="btn_more" onClick={() => navigate('/cx')}>Detail View</a>
              </div>
            }
          </TextTransition>
        </div>
        <Slick className="slide_img" changeSlide={props.changeSlide} ref={ref}>
          {sliderItems?.map((item, index) => (
            <div key={index}>
              <img src={item.thumbnail} alt={`${item.company} ${item.project}`} />
            </div>
          ))}
        </Slick>
      </div>
    </div>
  );
};

export default forwardRef(MainSlider);