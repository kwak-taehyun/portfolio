import {ChangeEvent, useState} from 'react';

type PropsType = {
  registComment: (value: string, date: string) => void;
}

interface SubmitForm extends HTMLFormElement {
  value: string;
}

interface DateTimeFormatOptions {
  localeMatcher?: "best fit" | "lookup" | undefined;
  weekday?: "long" | "short" | "narrow" | undefined;
  era?: "long" | "short" | "narrow" | undefined;
  year?: "numeric" | "2-digit" | undefined;
  month?: "numeric" | "2-digit" | "long" | "short" | "narrow" | undefined;
  day?: "numeric" | "2-digit" | undefined;
  hour?: "numeric" | "2-digit" | undefined;
  minute?: "numeric" | "2-digit" | undefined;
  second?: "numeric" | "2-digit" | undefined;
  timeZoneName?: "long" | "short" | undefined;
  formatMatcher?: "best fit" | "basic" | undefined;
  hour12?: boolean | undefined;
  timeZone?: string | undefined;
}

const TimesCommentWrite = ({registComment}: PropsType) => {
  const [textLimit, setTextLimit] = useState<number>(0);

  const registSubmit = (event: React.FormEvent<SubmitForm>) => {    
    const options: DateTimeFormatOptions = {year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", hour12: false};
    const writeDate = new Date().toLocaleDateString("ko-KR", options);
    event.preventDefault();

    if(event.currentTarget.reply_write.value.length > 0) {
      registComment(event.currentTarget.reply_write.value, writeDate);
      event.currentTarget.reply_write.value = null;
      setTextLimit(0);
    }else{
      alert("댓글이 입력되지 않았습니다.");
    }
  };

  const textLimitEvent = (event: ChangeEvent<HTMLTextAreaElement>) => {
    event.target.value = event.target.value.slice(0, 300);
    setTextLimit(event.target.value.length);
  };

  return (
    <>
      <div className="reply_form">
        <form onSubmit={registSubmit}>
          <textarea name="reply" id="reply_write" maxLength={300} placeholder="댓글을 입력해 주세요." onChange={textLimitEvent} />
          <button type="submit" className="btn type02">등록</button>
        </form>
        <span className="text_limit">
          <span>{Number(textLimit)}</span> / 300
        </span>
      </div>
    </>
  );
};

export default TimesCommentWrite;