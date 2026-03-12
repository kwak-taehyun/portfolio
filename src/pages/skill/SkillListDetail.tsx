import {SkillListType} from './Skill';

type PropsType = {
  tool: SkillListType;
}

const SkillListDetail = (props: PropsType) => {
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