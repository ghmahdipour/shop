import React, {useState} from 'react';
import MenuItem from './MenuItem'
import language from '../resources/language-dict'

const MenuTab = props => {
  const [is_active, set_is_active] = useState(1)
 
  return (
    <div className='footer footer-menu-tab'>
        <ul className="footer-menu-tab__list">
          <MenuItem 
              item={{
                name: language.tokens['MAIN_PAGE'], title: language.tokens['MAIN_PAGE'], 
                link: '/', 
                classname: is_active === 1 ? 'active' : '' ,
                onClick: () => set_is_active(1)
            }}
          />
          <MenuItem 
              item={{
                name: language.tokens['VENDORS_LIST'], title: language.tokens['VENDORS_LIST'] ,
                link: '/vendor-list',
                classname: is_active === 2 ? 'active' : '' ,
                onClick: () => set_is_active(2)
            }}
          />
        </ul>
    </div>
  );
};

export default MenuTab;
