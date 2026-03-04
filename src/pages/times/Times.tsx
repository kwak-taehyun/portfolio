import axios, {AxiosHeaders} from 'axios';
import {useEffect, useState} from 'react';
import {produce} from 'immer';
import Loading from '../Loading';
import NoList from '../../components/NoList';
import TimesList from './TimesList';

export type ItemsTypes = {
  author: string;
  content: string;
  description: string;
  publishedAt: Date;
  source: {
    id: string;
    name: string;
  }
  title: string;
  url: string;
  urlToImage: string;
  no: number;
};

const Times = () => {
  const [keyword, setKeyword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [documents, setDocuments] = useState<Array<ItemsTypes>>([]);

  const useApi = async() => {
    const apiKey: string = import.meta.env.VITE_TIMES_API_KEY;
    const apiUrl: string = `https://newsapi.org/v2/top-headlines?country=kr&category=${keyword}&apiKey=${apiKey}`;

    try {
      setLoading(true);

      const result: AxiosHeaders = await axios.get(apiUrl);

      console.log(result);

      setDocuments(result.data.articles);
    } catch(e) {
      console.log(e);
    }
    setLoading(false);
  };

  const newResult: Array<ItemsTypes> = produce(documents, (draft: Array<ItemsTypes>) => {
    draft.map((item, index) => {
      const keyIndex:number = new Date(item.publishedAt).getTime();
      item.no = Number(keyIndex + index);

      return item;
    });
  });

  const handleCategory = (event: any, word: string) => {
    event.preventDefault();
    setKeyword(word);
  };

  useEffect(() => {
    useApi();
  }, [keyword]);

  if(loading) return <Loading />;

  return (
    <div className="inner">
      <div className="sub_contents">
        <h3 className="sub_title">Wylie Times</h3>
        <div className="contents_wrap">
          <div className="times_area">
            <div className="times_category">
              <a className={`${keyword === "" ? "active" : ""}`} onClick={(event) => {handleCategory(event, "")}}>전체</a>
              <a className={`${keyword === "politics" ? "active" : ""}`} onClick={(event) => {handleCategory(event, "politics")}}>정치</a>
              <a className={`${keyword === "science" ? "active" : ""}`} onClick={(event) => {handleCategory(event, "science")}}>과학</a>
              <a className={`${keyword === "technology" ? "active" : ""}`} onClick={(event) => {handleCategory(event, "technology")}}>IT</a>
              <a className={`${keyword === "entertainment" ? "active" : ""}`} onClick={(event) => {handleCategory(event, "entertainment")}}>연예</a>
              <a className={`${keyword === "sports" ? "active" : ""}`} onClick={(event) => {handleCategory(event, "sports")}}>스포츠</a>
            </div>
            <div className="times_list">
              {documents === null || documents.length === 0 ? <NoList /> :
                <>
                  {newResult.map((item) => {
                    return <TimesList key={item.no} items={item} />
                  })}
                </>
              }
            </div>
          </div>          
        </div>
      </div>
    </div>
  );
};

export default Times;