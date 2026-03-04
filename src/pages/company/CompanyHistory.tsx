import {useState} from 'react';
import CompanyHistoryList from './CompanyHistoryList';

export type CompanyHistoryType = {
  years: number;
  history: Array<HistoryListType>;
};

export type HistoryListType = {
  awards: string;
  details: string;
  sector: string;
  project: string;
}

const CompanyHistory = () => {
  const historys: Array<CompanyHistoryType> = [
    {
      years: 2023,
      history: [
        {awards: "ICT AWARD", details: "부분대상/전자신문사상", sector: "디지털 기술 혁신 부문", project: "이디야 멤버스 리뉴얼 프로젝트"},
        {awards: "ICT AWARD", details: "SILVER PRIZE", sector: "웹/앱사이트 품질부문", project: "종근당건강몰 리뉴얼 프로젝트"},
        {awards: "ICT AWARD", details: "SILVER PRIZE", sector: "디지털 콘텐츠 & 마케팅 부문", project: "보솜이 리브랜딩 프로젝트"},
        {awards: "ICT AWARD", details: "SILVER PRIZE", sector: "디지털 인사이트 부문", project: "풀무원 다논 그릭시그니처 신제품 런칭 캠페인"},
        {awards: "SOCIAL i-AWARD", details: "인스타그램 분야 대상", sector: "식품브랜드 부문", project: "크래프트하인즈 인스타그램 채널"}
      ],
    },
    {
      years: 2022,
      history: [
        {awards: "APP AWARD", details: "최고대상", sector: "스마트앱어워드", project: "포켓CU"},
        {awards: "APP AWARD", details: "대상", sector: "지역정보분야", project: "세종지역정보포털 세종엔"},
        {awards: "WEB AWARD", details: "통합대상", sector: "모바일웹 마케팅분야", project: "러쉬코리아"},
        {awards: "WEB AWARD", details: "대상", sector: "전문쇼핑분야", project: "디플롯"},
      ],
    },
    {
      years: 2021,
      history: [
        {awards: "APP AWARD", details: "대상", sector: "금융연계서비스분야", project: "KB리브메이트"},
        {awards: "WEB AWARD", details: "최우수상", sector: "영상가전분야", project: "Astell&Kern Brand Site"},
        {awards: "WEB AWARD", details: "최우수상", sector: "생활쇼핑몰분야", project: "초록마을"},
        {awards: "WEB AWARD", details: "최우수상", sector: "체험전시분야", project: "현대모터스튜디오"},
        {awards: "WEB AWARD", details: "최우수상", sector: "고객서비스분야", project: "기아 플래그십 스토어"},
      ],
    },
  ];

  const [clickIndex, setClickIndex] = useState<number>(0);

  const handler = (index:number) => {
    setClickIndex(index);
  };

  return (
    <div  className="awards_area">
      <div className="inner">
        <h4 className="area_tit">국내 유수의 어워드에서 인정받는<br />전문성과 크리에이티브</h4>
        <div className="awards_contents">
          <p className="inner_tit"><strong>Awards</strong></p>
          <ul className="awards_list">
            {historys.map((item, index) => {
              return <CompanyHistoryList key={index} items={item} index={index} thisIndex={clickIndex} handler={handler} />;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CompanyHistory;