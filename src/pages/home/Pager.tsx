import {useContext} from 'react';
import HomeContext from './HomeContext';
import {CallbacksType, StatesType} from './MainContents';
import PagerDots from './PagerDots';

type PropsType = {
  callbacks: CallbacksType;
  states: StatesType;
}

const Pager = ({callbacks, states}: PropsType) => {
  const value = useContext(HomeContext);
  const dotsItems = value?.state.slideList;

  return (
    <div className="slide_control">
      <a className="prev_arrow arrow" onClick={() => {
        if(value?.state.isHomeValid) {
          value?.change.onChangeMode(false);
          callbacks.slideActiveChange(Number(value?.state.slideList.length - 1));
        }else{
          callbacks.slidePrev();
        }
      }}><span className="blind">이전 슬라이드</span></a>
      <div className="slide_pager">
        <a className={`home ${value?.state.isHomeValid ? "on" : ""}`} onClick={() => value?.change.onChangeMode(true)}><span className="blind">슬라이드 홈</span></a>
        {dotsItems?.map((item, index) => {
          return <PagerDots key={index} callbacks={callbacks} states={states} item={item} index={index} />
        })}
      </div>
      <a className="next_arrow arrow" onClick={() => {
        if(value?.state.isHomeValid) {
          value?.change.onChangeMode(false);
          callbacks.slideActiveChange(Number(0));
        }else{
          callbacks.slideNext();
        }
      }}><span className="blind">다음 슬라이드</span></a>
    </div>
  );
};

export default Pager;