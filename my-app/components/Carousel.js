import React from 'react';
import Carousel from 'react-elastic-carousel';


const breakPoints = [
  { width: 1, itemsToShow: 1, itemsToScroll: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3, itemsToScroll: 3 },
  { width: 1200, itemsToShow: 3, itemsToScroll: 3 }
];

const ElasticCarousel = () => {
  return (
    <div className="carousel-container">
      <Carousel breakPoints={breakPoints}>
        <img src="Course offering faculty.jpg" alt="Image 1" style={{ height: '350px' }}/>
        <img src="Course offering faculty.jpg" alt="Image 2" style={{ height: '350px' }}/>
        <img src="Course offering faculty.jpg" alt="Image 3" style={{ height: '350px' }}/>
        <img src="Course offering faculty.jpg" alt="Image 4" style={{ height: '350px' }}/>
        <img src="Course offering faculty.jpg" alt="Image 1" style={{ height: '350px' }}/>
        <img src="Course offering faculty.jpg" alt="Image 2" style={{ height: '350px' }}/>
        <img src="Course offering faculty.jpg" alt="Image 3" style={{ height: '350px' }}/>
        <img src="Course offering faculty.jpg" alt="Image 4" style={{ height: '350px' }}/>
      </Carousel>
    </div>
  );
};

export default ElasticCarousel;
