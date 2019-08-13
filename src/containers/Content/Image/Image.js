import React from 'react';


const Image = ({src, type}) => {
     
      return (
            <div className={type === "hero" ? "image_hero" : "image_filter"} style={{backgroundImage: `url(${src})`}}>
            </div>
      );
};

export default Image;