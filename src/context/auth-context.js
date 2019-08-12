import React from 'react';

const AuthContext = React.createContext({
      image: 'https://images.unsplash.com/flagged/photo-1565241758499-3bf9d63d9094?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
      implementFilter: () => {}
});

export default AuthContext;