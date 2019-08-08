import React from 'react';

const Filter = ({children, settings}) => {
      
      const filter = {
            filter: `contrast(${settings.contrast}) brightness(${settings.brightness}%) saturate(${settings.saturate}%) sepia(${settings.sepia}%) hue-rotate(${settings.hue}deg)`
      }

      return (
            <div style={filter}>
                  {children}
            </div>
      );
};

export default Filter;