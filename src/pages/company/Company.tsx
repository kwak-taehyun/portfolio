import CompanyParsona from './CompanyParsona';
import CompanyValue from './CompanyValue';
import CompanySolution from './CompanySolution';
import CompanyKnowhow from './CompanyKnowhow';
import CompanyHistory from './CompanyHistory';

const Company = () => {
  return (
    <div className="company_wrap">
      <div className="company_contents">
        <CompanyParsona />
        <CompanyValue />
        <CompanySolution />
        <CompanyKnowhow />
        <CompanyHistory />
      </div>
    </div>
  );
};

export default Company;