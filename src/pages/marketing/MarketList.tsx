import {productTypes} from './Market';

type PropsType = {
  item: productTypes;
}

const MarketList = ({item}: PropsType) => {
  const markup = () => {return {__html: item.title}};
  const price = item.lprice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  return (
    <>
      <li>
        <a onClick={() => {console.log("click"
          )}}>
          <div className="info_box">
            <div className="thumb">
              <img src={`${item.image}`} alt={`${item.title}`} />
            </div>
            <div className="product_info">
              <dl className="list">
                <dt dangerouslySetInnerHTML={markup()}></dt>
                <dd className="price">판매가 : <span>{price}</span>원</dd>
                <dd className="category">
                  <span>{item.category1}</span>
                  <span>{item.category2}</span>
                  <span>{item.category3}</span>
                  {item.category4 === "" ? "" :<span>{item.category4}</span>}
                </dd>
              </dl>
              <div className="seller_info">
                <span>판매자</span>
                <span className="seller">{item.mallName}</span>
              </div>
            </div>
          </div>          
        </a>
      </li>
    </>
  );
};

export default MarketList;