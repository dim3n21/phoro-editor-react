import React from 'react';
import AuthContext from '../../../context/auth-context';

const Filter = ({children, settings}) => {
      
      const filter = {
            filter: `contrast(${settings.contrast}) brightness(${settings.brightness}%) saturate(${settings.saturate}%) sepia(${settings.sepia}%) hue-rotate(${settings.hue}deg) blur(${settings.blur}px)`
      }

      return (
            <AuthContext.Consumer>
                  {(context) => <div style={filter} onClick={() => context.implementFilter(settings)}>
                        {children}
                  </div>}
            </AuthContext.Consumer>
      );
};

export default Filter;