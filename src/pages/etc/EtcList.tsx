import {BookData} from './Etc';

type PropsType = {
  items: BookData;
}

const EtcList = (props: PropsType) => {
  const authers: string = props.items.authors.join("/");
  const price = props.items.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  const salePrice = props.items.sale_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  return (
    <li>
      <a href={`${props.items.url}`} target="_blank">
        <div className="items">
          <span className="img">
            <img src={`${props.items.thumbnail === "" ? "https://search1.kakaocdn.net/thumb/R120x174.q85/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flbook%2Fimage%2F4619063%3Ftimestamp%3D20190301200007" : props.items.thumbnail}`} alt={`${props.items.contents}`} />
          </span>
          <div className="info">
            <span className="tit_box">
              <span className="tit" title={props.items.title}>{props.items.title}</span>
              <span className="pub">{props.items.publisher}</span>
              <span className="author">저자 : {authers}</span>
            </span>
            <span className="price_box">
              <span className="price">정가 {price}원</span>
              <span className="sale_price">판매가 {salePrice}원</span>
            </span>
          </div>          
        </div>        
      </a>
    </li>
  );
};

export default EtcList;