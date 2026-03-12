import {SkillType} from './Skill';
import SkillListDetail from './SkillListDetail';

type PropsType = {
  items: SkillType;
  index: number;
}

const SkillList = (props: PropsType) => {
  return (
    <>
      <li>
        <dl className="skill_box">
          <dt>{props.items.category}</dt>
          <dd>
            <ul className="skill_detail">
              {props.items.tool.map((item, index) => {
                return <SkillListDetail key={index} tool={item} />
              })}
            </ul>
          </dd>
        </dl>
      </li>
    </>
  );
};

export default SkillList;