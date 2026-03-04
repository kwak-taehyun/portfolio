import {ReplyTypes} from './TimesComment';
import TimesRecomm from './TimesRecomm';

type PropsType = {
  replyItems: ReplyTypes;
  replyId: number;
}

const TimesCommentReplyList = ({replyItems, replyId}: PropsType) => {
  return (
    <div className="comment_reply">
      <div className="reply_text">
        <p className="text">{replyItems.reply}</p>
        <span className="btn_area">
          <a className="btn" onClick={() => {console.log(replyId)}}>삭제</a>
        </span>
      </div>
      <div className="reply_info">
        <span>{replyItems.date}</span>
        <TimesRecomm />
      </div>
    </div>
  );
};

export default TimesCommentReplyList;