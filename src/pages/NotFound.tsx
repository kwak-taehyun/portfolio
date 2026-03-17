import {MdOutlineSpeakerNotesOff} from 'react-icons/md';

const NotFound = () => {
  return (
    <div className="not_found">
      <div className="icon">
        <MdOutlineSpeakerNotesOff />
      </div>
      <p>요청하신 페이지를 찾지 못했습니다.</p>
    </div>
  );
};

export default NotFound;