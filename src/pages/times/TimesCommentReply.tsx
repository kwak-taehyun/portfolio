import {useState} from 'react';
import {produce} from 'immer';
import {ReplyTypes} from './TimesComment';
import TimesCommentWrite from './TimesCommentWrite';

type PropsType = {
  valid: boolean;
  setReplyValid: (value: boolean) => void;
};

const TimesCommentReply = ({valid, setReplyValid}: PropsType) => {
  const [replyData, setReplyData] = useState<Array<ReplyTypes>>([]);

  const registComment = (value: string, date: string) => {
    const newReplyData: Array<ReplyTypes> = produce(replyData, (draft) => {
      draft.push({id: Number(replyData.length), reply: value, date: date});
    });

    setReplyData(newReplyData);
    setReplyValid(false);
  };

  return (
    <>
      {valid ? <TimesCommentWrite registComment={registComment} /> : ""}
    </>
  );
};

export default TimesCommentReply;