import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';
import {effects} from '../../components/Motion';
import {WorkListType} from './Work';

type PropsType = {
  items: WorkListType;
  index: number;
};

const WorkListDetails = (props: PropsType) => {
  return (
    <li>
      <Link to="/cx">
        <motion.div className="list-box" initial="offscreen" whileInView="onscreen" viewport={{once: false, amount: 0.8}}>
          <motion.div className="list-img-wrap" variants={effects.bounceUp}>
            <span className="brand-bg"><img src={`${props.items.thumbnail}`} alt={`${props.items.company} ${props.items.project}`} /></span>
          </motion.div>
          {props.index % 2 === 1 ?
            <motion.div className="list-title" variants={effects.leftToShow}>
              <strong className="brand-name">{props.items.company}</strong>
              <p className="project-name">{props.items.project}</p>
            </motion.div>
            :
            <motion.div className="list-title" variants={effects.rightToShow}>
              <strong className="brand-name">{props.items.company}</strong>
              <p className="project-name">{props.items.project}</p>
            </motion.div>
          }          
        </motion.div>
      </Link>
    </li>
  );
};

export default WorkListDetails;