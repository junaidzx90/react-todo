import React from 'react';
import './headerOptions.css'

function HeaderOptions({Icon, title}) {
    return (
        <div className="header__options">
            {Icon && <Icon className="headerOption__icon" />}
            <h3>{ title }</h3>
        </div>
    )
}

export default HeaderOptions
