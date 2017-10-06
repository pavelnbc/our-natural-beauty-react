import React from 'react';

function Content( {children, isMenuOpened, offMenu} ) {
    return (
        <div onClick={isMenuOpened ? offMenu : null} className={`supLayer ${isMenuOpened ? "hidContent" : ""}`}>
            <div className={`content ${isMenuOpened ? "contentLayer" : ""}`}>
                {children}
            </div>
        </div>
    )
}

Content.propTypes = {
    children: React.PropTypes.node,
    isMenuOpen: React.PropTypes.bool,
    offMenu: React.PropTypes.func
}

export default Content