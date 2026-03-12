import {SkillListType} from './Skill';

const SkillListDetail = (props: SkillListType) => {
  return (
    <>
      <li>
        <span className="skill_icon">
          <img src={`${props.tool.logo}`} />
        </span>
        <p className="skill_name">{props.tool.name}</p>
      </li>
    </>
  );
};

export default SkillListDetail;