import React, {useState} from 'react';

export type SlideListType = {
  id: number;
  title: string;  
  desc: string;
  thumbnail: string;
};

export type HomeContextValueType = {
  state: {slideList: Array<SlideListType>, isHomeValid: boolean, isOpenGnb: boolean, isPaused: boolean};
  change: {
    onChangeMode: (mode: boolean) => void;
    gnbClick: () => void;
    onChangePause: (mode: boolean) => void;
  };
}

type PropsType = {
  children: JSX.Element | JSX.Element[];
}

const HomeContext = React.createContext<HomeContextValueType | null>(null);

export const HomeProvider = (props: PropsType) => {
  const slideList: Array<SlideListType> = [
    {id: 1, title: "Respect", desc: "존중하는 자세", thumbnail: "images/main/main_visual06.png"},
    {id: 2, title: "Creative", desc: "창조적인 사고", thumbnail: "images/main/main_visual03.png"},
    {id: 3, title: "Challenge", desc: "목표 도전 의식", thumbnail: "images/main/main_visual04.png"},
  ];
  const [isHomeValid, setIsHomeValid] = useState<boolean>(true);
  const [isOpenGnb, setIsOpenGnb] = useState<boolean>(false);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  const onChangeMode = (mode: boolean) => {
    setIsHomeValid(mode);
  };

  const gnbClick = () => {
    setIsOpenGnb(!isOpenGnb);
  };

  const onChangePause = (mode: boolean) => {
    setIsPaused(mode);
  };

  const values: HomeContextValueType = {
    state: {slideList, isHomeValid, isOpenGnb, isPaused},
    change: {onChangeMode, gnbClick, onChangePause},
  }

  return (
    <HomeContext.Provider value={values}>
      {props.children}
    </HomeContext.Provider>
  );
};

export default HomeContext;