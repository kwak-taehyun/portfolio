import {Link, useLocation} from 'react-router-dom';
import {ItemsTypes} from './Times';
import TimesComment from './TimesComment';

const TimesDetail = () => {
  const states: ItemsTypes = useLocation().state;
  const timesDate = new Date(states.publishedAt).toLocaleDateString();
  const markup = () => {return {__html: states.description}};

  return (
    <div className="inner">
      <div className="sub_contents">
        <h3 className="sub_title">Wylie Times</h3>
        <div className="contents_wrap">
          <div className="times_area">
            <dl className="times_detail">
              <dt>
                <span className="title">{states.title}</span>
                <span className="date">{timesDate}</span>
              </dt>
              <dd>
                <div className="detail_info">
                  <div className="thumbnail">
                    <img src={`${states.urlToImage}`} alt={`${states.description}`} />
                  </div>
                  <p className="text">
                    <span dangerouslySetInnerHTML={markup()}></span>
                    <a href={`${states.url}`} target="_blank" rel="noopener noreferrer">기사 본문보기</a></p>
                  <div className="btn_area">
                    <Link to="/times"  className="btn">목록으로</Link>
                  </div>
                </div>
              </dd>
              <dd>
                <TimesComment />
              </dd>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimesDetail;