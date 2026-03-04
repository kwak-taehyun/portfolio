import {useState} from 'react';

type recommType = {
  recomm: number;
  unrecomm: number;
}

const TimesRecomm = () => {
  const recommCount:recommType = {recomm: 0, unrecomm: 0} 
  const [countData, setCountData] = useState<recommType>(recommCount);
  const recommClick = () => {
    let count: number = countData.recomm;

    count++;
    setCountData((prevState) => ({
      ...prevState,
      recomm: count,
    }));
  };
  const unrecommClick = () => {
    let count: number = countData.unrecomm;

    count++;
    setCountData((prevState) => ({
      ...prevState,
      unrecomm: count,
    }));
  };

  return (
    <span className="recomm_box">
      <a className="btn recomm" onClick={(event) => {
        event.preventDefault();
        recommClick();
      }}>
        <span className="icon"><span className="blind">공감</span></span>
        <em>{countData.recomm}</em>
      </a>
      <a className="btn unrecomm" onClick={(event) => {
        event.preventDefault();
        unrecommClick();
      }}>
        <span className="icon"><span className="blind">비공감</span></span>
        <em>{countData.unrecomm}</em>
      </a>
    </span>
  );
};

export default TimesRecomm;