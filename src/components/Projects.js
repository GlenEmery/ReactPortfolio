import fox from '../fox.png';
import waterfall from '../waterfall.png';
import '../projects.css';

const Projects = () => {
    return (
        <>
        <div className="project-main">
            <h3>Projects</h3>
            <p className="projects">How should this look, and I will also need to create more projects to add!</p>
        </div>
        <div className="projectTiles">
            <div className="projectCard"><img src={fox} alt="logo"></img></div>
            <div className="projectCard"><img src={waterfall} alt="waterfall"></img></div>
            <div className="projectCard"><img src={fox} alt="logo"></img></div>
            

        </div>
        </>

    )
};

export default Projects