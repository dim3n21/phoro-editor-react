import React from 'react';

const Filter = ({children, settings}) => {
      
      const filter = {
            filter: `contrast(${settings.contrast}) brightness(${settings.brightness}%) saturate(${settings.saturate}%) sepia(${settings.sepia}%) hue-rotate(${settings.hue}deg) blur(${settings.blur}px)`
      }

      return (
            <div style={filter}>
                  {children}
            </div>
      );
};

export default Filter;