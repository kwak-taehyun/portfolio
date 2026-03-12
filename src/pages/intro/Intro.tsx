import IntroContent from './IntroContent';
import IntroValue from './IntroValue';

const Intro = () => {
  return (
    <div className="company_wrap">
      <div className="company_contents">
        <IntroContent />
        <IntroValue />
      </div>
    </div>
  );
};

export default Intro;