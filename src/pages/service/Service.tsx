import axios, {AxiosResponse} from 'axios';
import {useState, useEffect} from 'react';
import ServiceList from './ServiceList';
import SearchForm from '../../components/SearchForm';
import ContentsPager from '../../components/ContentsPager';
import NoList from '../../components/NoList';
import Loading from '../Loading';

export type BookData = {
  authors: Array<string>;
  contents: string;
  price: number;
  publisher: string;
  title: string;
  thumbnail: string;
  url: string;
  sale_price: number;
};

interface SubmitForm extends HTMLFormElement {
  value: string;
}

const Service = () => {  
  const [keyword, setKeyword] = useState<string>("리액트");
  const [page, setPage] = useState<number>(1);
  const [itemCount, setItemCount] = useState<number>(20);
  const [total, setTotal] = useState<number>(1);
  const [documents, setDocuments] = useState<Array<BookData> | null>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const useApi = async() => {
    const url: string = `https://dapi.kakao.com/v3/search/book?target=title&query=${keyword}&page=${page}&size=${itemCount}`;
    const config: any  = {headers:'Authorization: KakaoAK ' + import.meta.env.VITE_KAKAO_API_KEY};
    try {
      setDocuments(null);
      setLoading(true);

      const result: AxiosResponse = await axios.get(url, config);
      setDocuments(result.data.documents);
      const posts = result.data.meta.pageable_count;
      setTotal(Math.ceil(posts/itemCount));
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  };

  const handleSubmit = (event: React.FormEvent<SubmitForm>) => {
    event.preventDefault();
    setKeyword(event.currentTarget.title_search.value);
    setPage(1);
    event.currentTarget.title_search.value = null;
  }

  const pageChange = (index: number) => {
    setPage(index);
  };

  useEffect(() => {
    useApi();    
  }, [page, itemCount, keyword]);

  if(loading) return <Loading />;

  return (
    <div className="inner">
      <div className="sub_contents">
        <h3 className="sub_title">Service</h3>
        <div className="contents_wrap">
          <div className="service_area">
            <SearchForm itemCount={itemCount} handleSubmit={handleSubmit} setItemCount={setItemCount} />
            {documents === null || documents.length === 0 ? <NoList /> :
              <>
                <ul className="service_list">
                  {documents.map((item, index) => {
                    return <ServiceList key={index} items={item} />;
                  })}
                </ul>
                <div className="pager_area">
                  <a className={`${page === 1 ? "btn prev disabled" : "btn prev"}`} onClick={() => {if(page > 1) setPage(page - 1)}}><span className="blind">이전 페이지</span></a>
                  <span className="pager">
                    <ContentsPager total={total} page={page} pageChange={pageChange} />
                  </span>
                  <a className={`${page === total ? "btn next disabled" : "btn next"}`} onClick={() => {if(page < total) setPage(page + 1)}}><span className="blind">다음 페이지</span></a>
                </div>
              </>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;