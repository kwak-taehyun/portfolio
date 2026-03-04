import {useState} from 'react';
import {produce} from 'immer';
import {ReplyTypes} from './TimesComment';
import TimesRecomm from './TimesRecomm';
import TimesCommentReply from './TimesCommentReply';
import TimesCommentWrite from './TimesCommentWrite';
import TimesCommentReplyList from './TimesCommentReplyList';

type PropsType = {
  items: ReplyTypes;
  commentId: number;
};

const TimesCommentList = ({items, commentId}: PropsType) => {
  const [replyData, setReplyData] = useState<Array<ReplyTypes>>([]);
  const [replyValid, setReplyValid] = useState<boolean>(false);
  
  const registComment = (value: string, date: string) => {
    const newReplyData: Array<ReplyTypes> = produce(replyData, (draft) => {
      draft.push({id: Number(replyData.length), reply: value, date: date});
    });

    setReplyData(newReplyData);
    setReplyValid(false);
  };

  const deleteComment = (id: number) => {
    console.log(id);
  };

  return (
    <li>
      <div className="comment_box">
        <div className="reply_text">
          <p className="text">{items.reply}</p>
          <span className="btn_area">
            <a className="btn" onClick={() => {setReplyValid(!replyValid)}}>{`${replyValid? "취소" : "답글"}`}</a>
            <a className="btn" onClick={() => {deleteComment(Number(commentId))}}>삭제</a>
          </span>
        </div>
        <div className="reply_info">
          <span>{items.date}</span>
          <TimesRecomm />
        </div>
      </div>

      <TimesCommentReply valid={replyValid} setReplyValid={setReplyValid} />

      {replyData.length ? 
        replyData.map((item, index) => {
        return <TimesCommentReplyList replyItems={item} replyId={index} key={index} />
        })
       
        : ""
      }
      {replyValid ? <TimesCommentWrite registComment={registComment} /> : ""}
    </li>
  );
};

export default TimesCommentList;