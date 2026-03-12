import SkillList from './SkillList';

export type SkillType = {
  category: string;
  tool: Array<SkillListType>;
};

export type SkillListType = {
  name: string;
  logo: string;
};

const Skill = () => {
  const skillList: Array<SkillType> = [
    {
      category: "Language",
      tool: [
        {name: "Html", logo: "images/ico/logo/ico_html.svg"},
        {name: "Css", logo: "images/ico/logo/ico_css.svg"},
        {name: "Javascript", logo: "images/ico/logo/ico_javascript.svg"},
        {name: "Sass", logo: "images/ico/logo/ico_sass.svg"},
      ],
    },
    {
      category: "Framework/Library",
      tool: [
        {name: "Jquery", logo: "images/ico/logo/ico_jquery.svg"},
        {name: "React", logo: "images/ico/logo/ico_react.svg"},
        {name: "Vue", logo: "images/ico/logo/ico_vue.svg"},
      ],
    },
    {
      category: "SCM Tools",
      tool: [
        {name: "Git", logo: "images/ico/logo/ico_git.svg"},
        {name: "SVN", logo: "images/ico/logo/ico_svn.svg"},
      ],
    },
    {
      category: "Collaboration Tool",
      tool: [
        {name: "Slack", logo: "images/ico/logo/ico_slack.svg"},
        {name: "Jira", logo: "images/ico/logo/ico_jira.svg"},
        {name: "confluence", logo: "images/ico/logo/ico_confluence.svg"},
      ],
    },
    {
      category: "Design Tool",
      tool: [
        {name: "Figma", logo: "images/ico/logo/ico_figma.svg"},
        {name: "Zeplin", logo: "images/ico/logo/ico_zeplin.svg"},
        {name: "Photoshop", logo: "images/ico/logo/ico_photoshop.svg"},
      ],
    },
  ];

  return (
    <div className="inner">
      <div className="sub_contents">
        <h3 className="sub_title">My Skill</h3>
        <div className="contents_wrap">
          <ul className="skill_list">
            {skillList.map((item, index) => {
              return <SkillList key={index} items={item} index={index} />;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skill;