import {CareerType} from './Career';
import CareerListDetails from './CareerListDetails';

type PropsType = {
  items: CareerType;
  index: number;
  thisIndex: number;
  handler: (index: number) => void;
}

const CareerList = (props: PropsType) => {
  return (
    <>
      <li className={`${props.thisIndex === props.index ? "active" : ""}`} onClick={() => props.handler(Number(props.index))}>
        <dl className="history_info">
          <dt>
            <span className="years">
              {props.items.years === 2020 ?
                `${props.items.years} ~` : `${props.items.years}`
              }
            </span>
            <span className="number">{props.items.history.length}</span>
          </dt>
          <dd>
            <ul className="list_table">
              {props.items.history.map((item, index) => {
                return <CareerListDetails key={index} item={item} />
              })}
            </ul>            
          </dd>
        </dl>
      </li>
    </>
  );
};

export default CareerList;