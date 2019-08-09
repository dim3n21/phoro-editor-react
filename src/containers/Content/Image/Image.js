import React from 'react';

const Image = ({src, type}) => {
      const style = { backgroundImage: `url(${src})`};

      return (
            <div className={type === "hero" ? "image_hero" : "image_filter"} style={style}>
                  
            </div>
      );
};

export default Image;