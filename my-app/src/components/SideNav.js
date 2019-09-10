import React from 'react';
import Header from './Header';
import SideNavOptions from './SideNavOptions'
import style from './css/SideNav.module.css'
function SideNav() {
    return (
        <div className={style.content}  >
            <Header content="DrinkPrime" ></Header>
            <SideNavOptions />
        </div>
    )
}

export default SideNav;
