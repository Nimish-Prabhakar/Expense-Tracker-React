import React from 'react';
import { Header } from 'semantic-ui-react';

function MainHeader({ title, size = 'huge', style = { marginTop: '15px' } }) {
  return (
    <Header size={size} textAlign="center" color="grey" style={style}>
      {title}
    </Header>
  );
}

export default MainHeader;
