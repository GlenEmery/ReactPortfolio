import '../skillsCss.css'
import { Popover } from 'antd'

const js = (
    <div>
        <p>2 years experience - intermediate</p>
        <p>vanilla JS and JSX. Form validations.</p>
    </div>

);
const react = (
    <div>
        <p>1 year experience</p>
        <p>This page is using React</p>
    </div>

);

const jenkins = (
    <div>
        <p>2 years experience</p>
        <p>Used Jenkins to deploy code through test environments to Production</p>
    </div>
);

const newRelic = (
    <div>
        <p>3 years experience</p>
        <p>Creating Dashboards, NRQL</p>
    </div>
);

const agile = (
    <div>
        <p>3 years experience</p>
        <p>working to Agile methodology including Scrum and Kanban</p>
    </div>
)

const Skills = () => {
    return (
        <div className="skills">
            <h3>Skills</h3>
            <div className="skillTiles">
                <Popover content={js} title="JavaScript">
                    <div className="skill"><p>JS</p></div>
                </Popover>
                <Popover content={react} title="React">
                    <div className="skill"><p>React</p></div>
                </Popover>
                <Popover content={newRelic} title="New Relic">
                    <div className="skill"><p>New Relic</p></div>
                </Popover>
                <Popover content={jenkins} title="Jenkins">
                    <div className="skill"><p>Jenkins</p></div>
                </Popover>
                <Popover content={agile} title="Agile">
                    <div className="skill"><p>Agile</p></div>
                </Popover>

                
            </div>
        </div>
    )
};

export default Skills;