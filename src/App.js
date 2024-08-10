
import './App.css';
import Contact from './components/contact.js'
import Employment from './components/Employment.js';
import Skills from './components/Skills.js';
import References from './components/References.js';
import Projects from './components/Projects.js';
import Carousel from './components/Carousel.js';

function App() {

  const images = [
    'https://via.placeholder.com/800x400/ff5733/fff',
    'https://via.placeholder.com/800x400/33ff57/fff',
    'https://via.placeholder.com/800x400/5733ff/fff',
  ];

  return (
  
    
    <div className="App">
    <Contact />
    <Employment />
    <Skills />
    <References />
    <Projects />
    <Carousel images={images} />
    
    </div>
    
  );
}

export default App;
