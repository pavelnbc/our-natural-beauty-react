import React from 'react';
import { ListGroupItem } from 'react-bootstrap'
import FontAwesome from 'react-fontawesome';

function CartItem({ medication, deleteItem }) {
  return (
    <ListGroupItem className="order-item">
      <img src="/img/pills.png" alt="med"/>
      <div className="cart-med-title">{medication.title}</div>
      <div className="cart-med-dosage-and-quantity">{medication.dosage}mg × {medication.quantity}pills</div>
      <div className="cart-med-price">{medication.price.toFixed(2)}</div>
      <div className="cart-close-btn" onClick={() => { deleteItem(medication.id) }}>
          <FontAwesome name="times" />
      </div>
    </ListGroupItem>
  )
}

export default CartItem