import React from 'react';
import AuthContext from '../../../context/auth-context';

const Image = ({src, type}) => {
     
      return (
            <AuthContext.Consumer>
                  {(context) => <div className={type === "hero" ? "image_hero" : "image_filter"} style={{backgroundImage: `url(${context.image})`}}></div>}
            </AuthContext.Consumer>
            
      );
};

export default Image;