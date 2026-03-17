
import WorkListDetails from './WorkListDetails';

export type WorkListType = {
  id: number;
  company: string;
  project: string;
  thumbnail: string;
}

const Work = () => {
  const workList: Array<WorkListType> = [
    {id: 1, company: "KB Pay 3.0", project: "모바일 구축(2025.09 ~ 2026.02)", thumbnail: "images/portpolio/thumb_bg_kb.png"},
    {id: 2, company: "SK렌터카 & 기업홈페이지", project: "PC,모바일 리뉴얼 및 운영(2023.04 ~ 2025.08)", thumbnail: "images/portpolio/thumb_bg_skr.png"},
  ]

  const workListItem = workList.map((item, index) => {
    return <WorkListDetails key={item.id} items={item} index={index} />
  });

  return (
    <div className="inner">
      <div className="sub_contents">
        <h3 className="sub_title">Latest Work</h3>
        <div className="contents_wrap portpolio-list-cont cx">
          <ul>
            {workListItem}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Work;