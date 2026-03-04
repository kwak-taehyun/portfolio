import {useContext} from 'react';
import HomeContext, {SlideListType} from './HomeContext';
import {CallbacksType, StatesType} from './MainContents';

type PropsType = {
  callbacks: CallbacksType;
  states: StatesType;
  item: SlideListType;
  index: number;
}

const PagerDots = ({callbacks, states, item, index}: PropsType) => {
  const value = useContext(HomeContext);

  return (
    <>
      <a className={`${value?.state.isHomeValid ? "dots" : states.currentIndex === index ? "dots on" : "dots"}`} onClick={() => {
        if(value?.state.isHomeValid) {
          value?.change.onChangeMode(false);
          callbacks.slideActiveChange(Number(item.id - 1));
        }else{
          callbacks.dotsOnClick(Number(item.id - 1));
        }
      }}>
        <span className="blind">{index}</span>
      </a>

    </>
  );
};

export default PagerDots;