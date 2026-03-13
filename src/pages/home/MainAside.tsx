import {useNavigate} from 'react-router-dom';

const MainAside = () => {
    const navigate = useNavigate();
    
    return (
        <aside className="aside_nav">
            <ul className="main_link">
            <li><a className="btn_link" onClick={() => navigate('intro')}>Intro</a></li>
            <li><a className="btn_link" onClick={() => navigate('work')}>Work</a></li>
            <li><a className="btn_link" onClick={() => navigate('career')}>Career</a></li>
            <li><a className="btn_link" onClick={() => navigate('skill')}>Skill</a></li>
            </ul>
        </aside>
    );
};

export default MainAside;