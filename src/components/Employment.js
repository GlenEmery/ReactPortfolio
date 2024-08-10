import '../employmentCss.css'
import { Tabs } from 'antd';

const Employment = () => {

    const onChange = (key) => {
        console.log(key);
    };

    const items = [
        {
            key: '1',
            label: 'Associate Developer',
            children: 
            <div>
            <p className="employer">Nuffield Health – Associate Developer</p>
            <p className="description">February 2023 – Present
            Jenkins, Docker, Github, Agile. Helping our lead and senior developers with any front end / back-end development with our website and apps.</p>
            </div>
        },
        {
            key: '2',
            label: 'Configuration Developer',
            children: 
            <div>
            <p className="employer">Nuffield Health – Configuration Developer</p>
            <p className="description">June 2022 – February 2023
            Configuration of our application Vita. Email templates, using and understanding HTML and CSS to an expert level. Set up of Companies, Products, Contracts, Diaries, and appointment types as well as knowing support issues.</p>
            </div>
        },
    ];

    return (
        <div className="employment">
            <h2 className="history">
                Employment History
            </h2>
            <Tabs defaultActiveKey='1' items={items} onChange={onChange} className="employmentTabs" />
        </div>
    )
};

export default Employment;
