import {Link} from 'react-router-dom';
import {HistoryListType} from './CompanyHistory';

type PropsType = {
  item: HistoryListType;
}

const CompanyHistoryListDetails = (props: PropsType) => {
  let str: string = props.item.awards.replace(/\s+/g, '');
  let strToLower = str.toLowerCase();
  
  return (
    <>
      <li>
        <span className={`awards ${strToLower}`}><span>{`${props.item.awards}`}</span></span>
        <span className="detail">{`${props.item.details}`}</span>
        <span className="sector">{`${props.item.sector}`}</span>
        <span className="project">{`${props.item.project}`}</span>
        <span className="link">
          <Link to="/company">프로젝트 보기</Link>
        </span>
      </li>
    </>
  );
};

export default CompanyHistoryListDetails;