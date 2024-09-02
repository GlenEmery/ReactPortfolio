
import './App.css';
import Contact from './components/contact.js'
import Employment from './components/Employment.js';
import Skills from './components/Skills.js';
import References from './components/References.js';
//import Projects from './components/Projects.js';
import Carousel from './components/Carousel.js';

//images
import fox from './images/fox.png';
import waterfall from './images/waterfall.png';
import MoveTogether from './images/MoveTogether.png';

function App() {

  const images = [
    {src: 'https://via.placeholder.com/800x400/ff5733/fff', link: null},
    {src: 'https://via.placeholder.com/800x400/33ff57/fff', link: null},
    {src: 'https://via.placeholder.com/800x400/5733ff/fff', link: null},
     {src: fox, link: null},
     {src: waterfall, link: null},
     {src: MoveTogether, link: 'https://www.nuffieldhealth.com/movetogether/faqs'}
  ];

  return (
  
    
    <div className="App">
    <Contact />
    <Employment />
    <Skills />
    <References />
    {/* <Projects /> */}
    <Carousel images={images} />
    
    </div>
    
  );
}

export default App;
