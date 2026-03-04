import axios, {AxiosResponse} from 'axios';
import {useState, useEffect} from 'react';
import MarketList from './MarketList';
import SearchForm from '../../components/SearchForm';
import ContentsPager from '../../components/ContentsPager';
import NoList from '../../components/NoList';
import Loading from '../Loading';

export type productTypes = {
  brand: string;
  category1: string;
  category2: string;
  category3: string;
  category4: string;
  image: string;
  link: string;
  lprice: number;
  mallName: string;
  productId: number;
  title: string;
};

interface SubmitForm extends HTMLFormElement {
  value: string;
}

const Market = () => {
  const [keyword, setKeyword] = useState<string>("축구화");
  const [itemCount, setItemCount] = useState<number>(20);
  const [loading, setLoading] = useState<boolean>(false);
  const [product, setProduct] = useState<Array<productTypes> | null>([]);
  const [total, setTotal] = useState<number>(1);
  const [page, setPage] = useState<number>(1);
  const [start, setStart] = useState<number>(1);

  const useApi = async() => {
    const apiUrl: string = `/api/v1/search/shop?query=${keyword}&display=${itemCount}&start=${start}`;

    try {
      setLoading(true);

      const result: AxiosResponse = await axios.get(apiUrl, {
        headers: {
          "Content-Type": "application/json",
          "X-Naver-Client-Id": import.meta.env.VITE_NAVER_SHOP_API_ID,
          "X-Naver-Client-Secret": import.meta.env.VITE_NAVER_SHOP_API_KEY,
        }
      });

      setProduct(result.data.items);
      setTotal(Math.ceil(result.data.total/itemCount));
    } catch(e) {
      console.log(e);
    }
    setLoading(false);
  };

  const handleSubmit = (event: React.FormEvent<SubmitForm>) => {
    event.preventDefault();
    setKeyword(event.currentTarget.title_search.value);
    setPage(1);
    event.currentTarget.title_search.value = null;
    setStart(1)
  }

  const pageChange = (index: number) => {
    setPage(index);
    if(index === 1) {
      setStart(1);
    }else{
      setStart(Number(itemCount * index));
    }
  };
  
  useEffect(() => {
    useApi();
  }, [keyword, itemCount, start]);

  if(loading) return <Loading />;

  return (
    <div className="inner">
      <div className="sub_contents">
        <h3 className="sub_title">Market</h3>
        <div className="contents_wrap">
          <div className="market_area">
            <SearchForm itemCount={itemCount} handleSubmit={handleSubmit} setItemCount={setItemCount} />

            {product === null || product.length === 0 ? <NoList /> :
              <div className="inner_contents">
                <div className="market_items">
                  <ul className="market_list">
                    {product.map((item, index) => {
                      return <MarketList key={index} item={item} />;
                    })}
                  </ul>
                </div>
                <div className="pager_area">
                  <a className={`${page === 1 ? "btn prev disabled" : "btn prev"}`} onClick={() => {if(page > 1) setPage(page - 1)}}><span className="blind">이전 페이지</span></a>
                  <span className="pager">
                    <ContentsPager total={total} page={page} pageChange={pageChange} />
                  </span>
                  <a className={`${page === total ? "btn next disabled" : "btn next"}`} onClick={() => {if(page < total) setPage(page + 1)}}><span className="blind">다음 페이지</span></a>
                </div>
              </div>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Market;