import React from 'react';
import { NavLink } from 'react-router-dom';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import categories from '../data/categories.json';

function Menu({isOpened, offMenu}) {
    return (
        <ReactCSSTransitionGroup component="main"
                                 transitionName="slide"
                                 transitionEnterTimeout={300}
                                 transitionLeaveTimeout={300}>
            {isOpened
            ?
            <div className="mdc-permanent-drawer">
                <ListGroup>
                    {categories.map( category => {
                        return (
                            <ListGroupItem>
                                <NavLink
                                    key={category.id}
                                    to={`/products/${category.id}`}
                                    className="menuItem"
                                    onClick={offMenu}>
                                    {category.title}
                                </NavLink>
                            </ListGroupItem>
                        )
                    })}
                </ListGroup>
            </div>
            :
            null}
        </ReactCSSTransitionGroup>
    )
}

export default Menu;
