import IntroContent from './IntroContent';
import IntroValue from './IntroValue';
import IntroSkill from './IntroSkill';

const Intro = () => {
  return (
    <div className="company_wrap">
      <div className="company_contents">
        <IntroContent />
        <IntroValue />
        <IntroSkill />
      </div>
    </div>
  );
};

export default Intro;