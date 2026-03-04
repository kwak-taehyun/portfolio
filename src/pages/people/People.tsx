import PeopleImageZoom from './PeopleImageZoom';

const People = () => {
  return (
    <div className="inner">
      <div className="sub_contents">
        <h3 className="sub_title">People</h3>
        <div className="contents_wrap">
          <div className="map_viewer">
            <PeopleImageZoom />
          </div>
        </div>
      </div>
    </div>
  );
};

export default People;