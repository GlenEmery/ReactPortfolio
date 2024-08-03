import '../skillsCss.css'
import { Popover } from 'antd'

const js = (
    <div>
        <p>2 years experience - intermediate</p>
        <p>vanilla JS and JSX</p>
    </div>

);
const react = (
    <div>
        <p>1 year experience</p>
        <p>This page is using React</p>
    </div>

);

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
                <Popover content={js} title="title">
                    <div className="skill"><p>HTML</p></div>
                </Popover>
                <Popover content={react} title="title">
                    <div className="skill"><p>Jenkins</p></div>
                </Popover>

                <div className="skill"><p>React</p></div>
                <div className="skill"><p>HTML</p></div>
                <div className="skill"><p>Jenkins</p></div>
                <div className="skill"><p>JS</p></div>
                <div className="skill"><p>React</p></div>
                <div className="skill"><p>HTML</p></div>
                <div className="skill"><p>Jenkins</p></div>
                <div className="skill"><p>JS</p></div>
                <div className="skill"><p>React</p></div>
                <div className="skill"><p>HTML</p></div>
                <div className="skill"><p>Jenkins</p></div>
            </div>
        </div>
    )
};

export default Skills;