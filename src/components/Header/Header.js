import React from 'react';
import './Header.scss'
const Header = ({onLogout}) => {
    return(
        <div class="header">
  <a href="#default" class="logo">Demo Login App</a>
  <div class="header-right">
    <a href="javascript:void(0)" onClick={onLogout}>Logout</a>
  </div>
</div>
    )
}

export default Header;