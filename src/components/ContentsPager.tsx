type PropsType = {
  total: number;
  page: number;
  pageChange: (index: number) => void;  
};

const ContentsPager = ({total, page, pageChange}: PropsType) => {
  const firstNum = Number((Math.ceil(page / 10) - 1) * 10);
  const lastNum = Number(Math.ceil(page / 10) * 10);
  const limitNum = Array.from({length: total}, (_, i) => i + 1);
  // Array.from은 ES6에 추가된 문법. 구세대 브라우저에서는 하단 방법 참조.
  // const limitNum = Array(total).fill(undefined).map((_, index) => {
  //   return Number(index + 1);
  // });

  return (
    <>
      {limitNum.slice(firstNum, lastNum).map((item) => {
        return <a className={`${page === item ? "active" : ""}`} key={item} onClick={() => {
          pageChange(Number(item));
        }}>{item}</a>
      })}
    </>
  );
};

export default ContentsPager;