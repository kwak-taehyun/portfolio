import React, {useState} from 'react';

export type SlideListType = {
  id: number;
  group: string;  
  company: string;
  project: string;
  thumbnail: string;
};

export type HomeContextValueType = {
  state: {slideList: Array<SlideListType>, isHomeValid: boolean, isOpenGnb: boolean,};
  change: {
    onChangeMode: (mode: boolean) => void;
    gnbClick: () => void;
  };
}

type PropsType = {
  children: JSX.Element | JSX.Element[];
}

const HomeContext = React.createContext<HomeContextValueType | null>(null);

export const HomeProvider = (props: PropsType) => {
  const slideList: Array<SlideListType> = [
    {id: 1, group: "MARKETING", company:"보솜이", project: "리브랜딩 프로젝트", thumbnail: "/images/main/main_visual06.png"},
    {id: 2, group: "CX", company:"KB국민카드", project: "마이데이터 2.0 고도화", thumbnail: "/images/main/main_visual03.png"},
    {id: 3, group: "PLATFORM", company:"SK렌터카", project: "UIUX 컨설팅", thumbnail: "/images/main/main_visual04.png"},
    {id: 4, group: "MARKETING", company:"크래프트하인즈", project: "디지털 마케팅", thumbnail: "/images/main/main_visual05.png"},
  ];
  const [isHomeValid, setIsHomeValid] = useState<boolean>(true);
  const [isOpenGnb, setIsOpenGnb] = useState<boolean>(false);

  const onChangeMode = (mode: boolean) => {
    setIsHomeValid(mode);
  };

  const gnbClick = () => {
    setIsOpenGnb(!isOpenGnb);
  };

  const values: HomeContextValueType = {
    state: {slideList, isHomeValid, isOpenGnb},
    change: {onChangeMode, gnbClick},
  }

  return (
    <HomeContext.Provider value={values}>
      {props.children}
    </HomeContext.Provider>
  );
};

export default HomeContext;