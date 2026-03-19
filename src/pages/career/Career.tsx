import {useState, useEffect} from 'react';
import CareerList from './CareerList';

export type CareerType = {
  years: number;
  history: Array<CareerListType>;
};

export type CareerListType = {
  period: string;
  details: string;
  sector: string;
  project: string;
  link?: string;
}

const Career = () => {
  const careers: Array<CareerType> = [
    {
      years: 2025,
      history: [
        {period: "2025.08 ~ 2026.02", details: "KB카드", sector: "모바일/앱", project: "KB Pay 3.0 구축"},
        {period: "2025.01 ~ 2025.08", details: "SK렌터카", sector: "PC/모바일", project: "SK렌터카 닷컴/빌리카, 기업홈페이지, 중고차 사이트 운영", link: "https://company.skcarrental.com/"},
      ],
    },
    {
      years: 2024,
      history: [
        {period: "2024.01 ~ 2024.12", details: "SK렌터카", sector: "PC/모바일", project: "SK렌터카 닷컴/빌리카 고도화 및 영문 사이트 구축", link: "https://homepage.skdirect.co.kr/en"},
      ],
    },
    {
      years: 2023,
      history: [
        {period: "2023.04 ~ 2023.12", details: "SK렌터카", sector: "PC/모바일", project: "SK렌터카 닷컴/빌리카 UI/UX 고도화", link: "https://www.billycar.co.kr/"},
        {period: "2023.02 ~ 2023.03", details: "더현대닷컴", sector: "PC 반응형", project: "Nanushka 오피셜 사이트 구축 컨텐츠 페이지 작업"}
      ],
    },
    {
      years: 2022,
      history: [
        {period: "2022.11 ~ 2023.01", details: "KTNET", sector: "PC", project: "디지털무역데이터 포탈(공급망분석, 글로벌HS Advisor) 구축", link: "https://tradedata.utradehub.or.kr"},
      ],
    },
    {
      years: 2021,
      history: [
        {period: "2021.01 ~ 2022.10", details: "신라면세점", sector: "PC/모바일", project: "신라면세점 소개 & 리워즈 사이트 운영 및 QR가입 고도화"},
      ],
    },
    {
      years: 2020,
      history: [
        {period: "2020", details: "NH농협", sector: "태블릿", project: "NH농협 태블릿브랜치(상호), 스마트워크(상호), 스마크워크 관리자 고도화"},
        {period: "2020", details: "신세계", sector: "모바일", project: "신세계 매장지원통합시스템 구축"},
        {period: "2019", details: "NH농협", sector: "태블릿", project: "NH농협 태블릿브랜치(은행, 상호), 스마트워크(은행) 고도화"},
        {period: "2019", details: "미트프렌즈", sector: "PC/모바일", project: "미트프렌즈 쇼핑몰 사이트 구축"},
        {period: "2019", details: "SK Stoa", sector: "PC", project: "SK Stoa 홍보사이트 구축"},
        {period: "2018", details: "KT", sector: "PC", project: "KT 서울도시철도공사 5호선 iot 시스템 관리자 구축"},
        {period: "2018", details: "KT", sector: "PC", project: "KT 기가 energy 관리자 고도화"},
        {period: "2018", details: "KT", sector: "PC 반응형", project: "KT Smart iot support 고도화"},
        {period: "2017", details: "KT", sector: "PC", project: "KT Smart iot support 구축"},
        {period: "2017 ~ 2014", details: "한솔루션", sector: "PC/모바일", project: "JSP 기반 솔루션 홈페이지 작업"},
        {period: "2013 ~ 2014", details: "네모웹", sector: "PC/모바일", project: "그누보드 기반 홈페이지 작업"},
      ],
    },
  ];

  const [clickIndex, setClickIndex] = useState<number>(0);

  const handler = (index:number) => {
    setClickIndex(index);
  };

  // useEffect(() => {
  //   console.log('reloading');
  // }, [clickIndex]);

  return (
    <div  className="awards_area">
      <div className="inner">
        <h4 className="area_tit">PC, 모바일, 태블릿 등 다양한 기기와<br />다양한 반응형 홈페이지 작업</h4>
        <div className="awards_contents">
          <p className="inner_tit"><strong>My Carrer</strong></p>
          <ul className="awards_list">
            {careers.map((item, index) => {
              return <CareerList key={index} items={item} index={index} thisIndex={clickIndex} handler={handler} />;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Career;