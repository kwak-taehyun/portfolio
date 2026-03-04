import {CompanyHistoryType} from './CompanyHistory';
import CompanyHistoryListDetails from './CompanyHistoryListDetails';

type PropsType = {
  items: CompanyHistoryType;
  index: number;
  thisIndex: number;
  handler: (index: number) => void;
}

const CompanyHistoryList = (props: PropsType) => {
  return (
    <>
      <li className={`${props.thisIndex === props.index ? "active" : ""}`} onClick={() => props.handler(Number(props.index))}>
        <dl className="history_info">
          <dt>
            <span className="years">{props.items.years}</span>
            <span className="number">{props.items.history.length}</span>
          </dt>
          <dd>
            <ul className="list_table">
              {props.items.history.map((item, index) => {
                return <CompanyHistoryListDetails key={index} item={item} />
              })}
            </ul>            
          </dd>
        </dl>
      </li>
    </>
  );
};

export default CompanyHistoryList;