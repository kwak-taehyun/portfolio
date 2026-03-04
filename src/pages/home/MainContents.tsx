import {useState, useRef, useContext} from 'react';
import HomeContext from './HomeContext';
import MainMedia from './MainMedia';
import MainSlider from './MainSlider';
import Pager from './Pager';

export type StatesType = {
  currentIndex: number | undefined;
};

export type CallbacksType = {
  slidePrev: () => void,
  slideNext: () => void,
  dotsOnClick: (index: number) => void,
  slideActiveChange: (index: number) => void;
}

const MainContents = () => {
  const value = useContext(HomeContext);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const slickRef = useRef<any | null>(null);

  const slidePrev = () => {slickRef.current.slickPrev()};
  const slideNext = () => {slickRef.current.slickNext()};
  const dotsOnClick = (index: number) => {slickRef.current.slickGoTo(index)};
  const slideActiveChange = (index: number) => {setCurrentIndex(index)};

  const changeSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const callbacks: CallbacksType = {slidePrev, slideNext, dotsOnClick, slideActiveChange};
  const states: StatesType = {currentIndex};

  const modeOnChange = () => {
    value?.change.onChangeMode(false);
    setCurrentIndex(0);
  };

  const onScrollFunction = () => {
    if(value?.state.isHomeValid) {
      value?.change.onChangeMode(false);
      setCurrentIndex(0);
    }
  };

  return (
    <div className="contents_area" onWheel={onScrollFunction}>
      {value?.state.isHomeValid ? 
        <>
          <MainMedia modeOnChange={modeOnChange} values={value?.state.isHomeValid}/>
          <div className="scroll_arrow on">
            <span className="text"><i>Scroll</i></span>
          </div>
        </>
        :
        <>
          <MainSlider ref={slickRef} currentIndex={currentIndex} changeSlide={changeSlide} />
          <div className="scroll_arrow">
            <span className="text"><i>Scroll</i></span>
          </div>
        </>
      }
      <Pager callbacks={callbacks} states={states} />
    </div>
  );
};

export default MainContents;