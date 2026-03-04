import {useNavigate} from 'react-router-dom';
import ReactPlayer from 'react-player';

type PropsType = {
  values: boolean;
  modeOnChange: () => void;
};

const MainMedia = (props: PropsType) => {
  const navigate = useNavigate();

  return (
    <div className="main_slider">
      <div className="wylie_contents">
        <ul className="main_link">
          <li><a className="btn_link" onClick={() => navigate('cx')}>CX</a></li>
          <li><a className="btn_link" onClick={() => navigate('platform')}>Platform</a></li>
          <li><a className="btn_link" onClick={() => navigate('market')}>Market</a></li>
          <li><a className="btn_link" onClick={() => navigate('service')}>Service</a></li>
          <li><a className="btn_link" onClick={() => navigate('company')}>Company</a></li>
          <li><a className="btn_link" onClick={() => navigate('people')}>People</a></li>
          <li className="wylie_times"><a className="btn_link" onClick={() => navigate('times')}>Wylie Times</a></li>
        </ul>
      </div>
      <div className="wylie_ci">
        <div className="movie_area">
          <ReactPlayer playing={props.values} muted={props.values} width={"100%"} height={"100%"} url="/images/main/wylie_ci_movie.mp4" onEnded={() => props.modeOnChange()}></ReactPlayer>
        </div>
      </div>
    </div>
  );
};

export default MainMedia;