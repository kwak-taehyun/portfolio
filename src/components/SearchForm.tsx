type PropsType = {
  itemCount: number;
  handleSubmit: (event: React.FormEvent<SubmitForm>) => void;
  setItemCount: (number: number) => void;
};

interface SubmitForm extends HTMLFormElement {
  value: string;
}

const SearchForm = ({itemCount, handleSubmit, setItemCount}: PropsType) => {
  return (
    <div className="search_area">
      <span className="search_box">
        <form onSubmit={handleSubmit}>
          <label htmlFor="title_search">검색어</label>
          <input type="text" placeholder="검색어를 입력해주세요." name="title" id="title_search" />
          <button type="submit" className="btn type01">검색</button>
        </form>
      </span>
      <span className="select_box">
        <label htmlFor="show_list_num">표시할 게시물 수</label>
        <select id="show_list_num" value={itemCount} onChange={({target : {value}}) => {setItemCount(Number(value))}}>
          <option value="20">20개</option>
          <option value="30">30개</option>
          <option value="40">40개</option>
          <option value="50">50개</option>
        </select>
      </span>
    </div>
  );
};

export default SearchForm;
;