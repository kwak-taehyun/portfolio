
import CxContents from './CxContents';

export type CxListType = {
  id: number;
  company: string;
  project: string;
  thumbnail: string;
}

const Cx = () => {
  const cxList: Array<CxListType> = [
    {id: 1, company: "SK렌터카", project: "UXUI 컨설팅", thumbnail: "/images/portpolio/thumb_bg_skr.png"},
    {id: 2, company: "대구은행", project: "비대면채널 전략 및 UXUI컨설팅", thumbnail: "/images/portpolio/thumb_bg_dgb.jpg"},
    {id: 3, company: "소노호텔 & 리조트", project: "UXUI 컨설팅", thumbnail: "/images/portpolio/thumb_bg_sonohotelsresorts.jpg"},
  ]

  const cxListItem = cxList.map((item, index) => {
    return <CxContents key={item.id} items={item} index={index} />
  });

  return (
    <div className="inner">
      <div className="sub_contents">
        <h3 className="sub_title">cx</h3>
        <div className="contents_wrap portpolio-list-cont cx">
          <ul>
            {cxListItem}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Cx;