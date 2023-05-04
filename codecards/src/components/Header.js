import React from 'react';


const Header = () => {

  return (
    <header data-testid="header-component" className="header">
      <div className="header-elements">
        <img className="logo" src={require("../assets/logoFinal.png")} alt=""/>
        <h1>code &lt;/cards&gt;</h1>
        <div className="menu-elements">
        <span className="headerLink">
          Download
        </span>

        <span className="headerLink">
          FAQ/Support
        </span>
        </div>
        <img className="profile-icon" src={require("../assets/profile_white.png")} alt=""/>
      </div>
    </header>
  )
}

export default Header;