import {ItemsTypes} from './Times';
import {Link} from 'react-router-dom';

type PropsType = {
  items: ItemsTypes;
}

const TimesList = ({items}: PropsType) => {
  const timesDate = new Date(items.publishedAt).toLocaleDateString();

  return (
    <Link to={`/times/${items.no}`} state={items}>
      <div className="times_content">
        <dl>
          <dt>{items.title}</dt>
          <dd>{timesDate}</dd>
        </dl>
      </div>
    </Link>
  );
};

export default TimesList;