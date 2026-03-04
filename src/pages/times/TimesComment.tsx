import {useState} from 'react';
import {produce} from 'immer';
import TimesCommentList from './TimesCommentList';
import TimesCommentWrite from './TimesCommentWrite';

export type ReplyTypes = {
  id: number;
  reply: string;
  date: string;
}

const TimesComment = () => {
  const [commentData, setCommentData] = useState<Array<ReplyTypes>>([]);

  const registComment = (value: string, date: string) => {
    const newReplyData: Array<ReplyTypes> = produce(commentData, (draft) => {
      draft.push({id: Number(commentData.length), reply: value, date: date});
    });

    setCommentData(newReplyData);
  };

  return (
    <div className="reply_area">
      <div className="title">
        <label htmlFor="reply_write">댓글쓰기</label>
        <span className="total"><strong>{commentData.length}</strong>개의 댓글</span>
      </div>

      <TimesCommentWrite registComment={registComment} />

      <div className="reply_list">
        <ul className="list">
          {commentData.map((item, index) => {
            return <TimesCommentList key={index} items={item} commentId={index} />
          })}
        </ul>
      </div>
    </div>
  );
};

export default TimesComment; 