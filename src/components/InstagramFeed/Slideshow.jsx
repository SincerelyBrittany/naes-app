import React from 'react';
import Slider from 'react-slick';

const Slideshow = ({media}) => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div>
             <Slider {...settings}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
    {/* {media ?  
    <Slider {...settings}>
      {media?.data?.map((item) => (
        <div key={item.id} className="media-container">
          {item.media_type === 'VIDEO' ? (
            <video src={item.media_url} controls />
          ) : (
            <img src={item.media_url} alt="Instagram Media" />
          )}
        </div>
      ))}
    </Slider> : null} */}
  </div>
    // <Slider {...settings}>
    //   {media?.data.map((item) => (
    //     <div key={item.id} className="media-container">
    //       {item.media_type === 'VIDEO' ? (
    //         <video src={item.media_url} controls />
    //       ) : (
    //         <img src={item.media_url} alt="Instagram Media" />
    //       )}
    //     </div>
    //   ))}
    // </Slider>
  );
};

export default Slideshow;
