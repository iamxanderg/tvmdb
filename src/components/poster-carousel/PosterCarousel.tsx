import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function PosterCarousel() {
  return (
    <Carousel
      showIndicators={true}
      autoPlay={true}
      axis='horizontal'
      infiniteLoop={true}
      interval={6000}
      showArrows={false}
      showStatus={false}
      showThumbs={false}
      stopOnHover={false}
      centerSlidePercentage={90}
      centerMode={true}
    >
      <div>
        <img src='assets/images/banner1.jpg' />
      </div>
      <div>
        <img src='assets/images/banner2.jpg' />
      </div>
      <div>
        <img src='assets/images/banner3.jpg' />
      </div>
      <div>
        <img src='assets/images/banner4.jpg' />
      </div>
      <div>
        <img src='assets/images/banner5.jpg' />
      </div>
    </Carousel>
  );
}

export default PosterCarousel;
