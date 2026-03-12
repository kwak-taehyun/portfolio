import {CareerListType} from './Career';

type PropsType = {
  item: CareerListType;
}

const CareerListDetails = (props: PropsType) => {
  let str: string = props.item.period.replace(/\s+/g, '');
  let strToLower = str.toLowerCase();
  
  return (
    <>
      <li>
        <span className={`awards ${strToLower}`}><span>{`${props.item.period}`}</span></span>
        <span className="detail">{`${props.item.details}`}</span>
        <span className="sector">{`${props.item.sector}`}</span>
        <span className="project">{`${props.item.project}`}</span>
        <span className="link">
          {props.item.link ? <a href={`${props.item.link}`} target="_blank">링크보기</a> : ""}
        </span>
      </li>
    </>
  );
};

export default CareerListDetails;