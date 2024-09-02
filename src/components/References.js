
import { useState } from 'react';

import ReactCardFlip from 'react-card-flip'



const References = () => {

    const [isFlipped, setIsFlipped] = useState(false);
    

    function flipCard() {
        setIsFlipped(!isFlipped);
        
    };
    console.log(isFlipped + 'isflipped');


    return (
        
        <ReactCardFlip flipDirection='vertical' isFlipped={isFlipped}>
            <div onClick={flipCard}>
                <h3 className='references'> References </h3>
                
            </div>
        <div className="references back" onClick={flipCard}>
            <p>Content content content</p>
            <p>Content content content</p>
            <p>Content content content</p>
            <p>Content content content</p>
          
        </div>
        </ReactCardFlip>
        
    )
};

export default References;