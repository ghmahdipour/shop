import React from 'react';
import MenuTab from '../../components/MenuTab';

const Layout = props => {
  return (
    <React.Fragment>
      <main>{props.children}</main>
      <footer className='footer'>
        <MenuTab />
      </footer>
    </React.Fragment>
  );
};

export default Layout;