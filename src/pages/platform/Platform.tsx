import {useMemo} from 'react';
import Slider, {Settings} from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
//import {useReducer} from 'react';

// type State = {count: number};

// type Action = {
//   type: 'up' | 'down' | 'reset';
//   payload?: State;
// }

// function init(count: State): State {
//   return count;
// }

// const initialState: State = {count: 0};

// function reducer(state: State, action: Action): State {
//   switch (action.type) {
//     case 'up':
//       return {count: state.count + 1};
//     case 'down':
//       return {count: state.count - 1 > 0 ? state.count - 1 : 0};
//     case 'reset':
//       return init(action.payload || {count: 0});
//     default:
//       throw new Error(`Unexpected action type ${action.type}`);
//   }
// }

const Platform = () => {
  // const [state, dispatcher] = useReducer(reducer, initialState, init);

  // function handleUpButtonClick() {
  //   dispatcher({type: 'up'});
  // }

  // function handleDownButtonClick() {
  //   dispatcher({type: 'down'});
  // }

  // function handleResetButtonClick() {
  //   dispatcher({type: 'reset', payload: {count: 0}});
  // }
  // 
  const settings = useMemo<Settings>(() => ({
    className: "payment_list",
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    dots: false,
    infinite: false,
    arrows: false,
    variableWidth: true,
    outerEdgeLimit: true,
  }), []);

  return (
    <div className="inner">
      <div className="sub_contents">
        <h3 className="sub_title">Platform</h3>
        <div className="contents_wrap">
          <p>Platform 페이지</p>
{/*          <p><strong>{state.count}</strong></p>
          <button onClick={handleUpButtonClick}>+</button>
          <button onClick={handleDownButtonClick}>-</button>
          <button onClick={handleResetButtonClick}>reset</button>*/}
          <div className="easy_payment">
            <div className="payment_cont list">
              <Slider {...settings}>
                <div>
                  <div className="card">
                    <span className="name"><em>[대표]</em>현대카드</span>
                    <span className="info">
                      <span>3231</span>
                      <span className="type">개인</span>
                    </span>
                    <span className="chk_box pg_chk">
                      <input type="checkbox" id="point01" name="chk01" />
                      <label htmlFor="point01">현대카드 M포인트 5% 사용</label>
                    </span>
                  </div>
                </div>
                <div>
                  <div className="card">
                    <span className="name">삼성카드</span>
                    <span className="info">
                      <span>9205</span>
                      <span className="type">법인</span>
                    </span>
                    <span className="chk_box pg_chk">
                      <input type="checkbox" id="point02" name="chk02" />
                      <label htmlFor="point02">삼성카드 보너스포인트 사용</label>
                    </span>
                  </div>
                </div>
                <div>
                  <div className="card add">
                    <span>카드 등록하기</span>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Platform;