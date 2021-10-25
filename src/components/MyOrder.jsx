import React from "react";
import '../styles/MyOrder.scss';

const MyOrder = () => {
  return(
    <div class="my-order">
    <div class="my-order-container">
      <h1 class="title">My order</h1>

      <div class="my-order-content">
        <div class="order">
          <p>
            <span>03.25.21</span>
            <span>6 articles</span>
          </p>
          <p>$560.00</p>
        </div>

        <div class="shopping-cart">
          <figure>
            <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="bike"/>
          </figure>
          <p>Bike</p>
          <p>$30,00</p>
        </div>

        <div class="shopping-cart">
          <figure>
            <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="bike"/>
          </figure>
          <p>Bike</p>
          <p>$30,00</p>
        </div>

        <div class="shopping-cart">
          <figure>
            <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="bike"/>
          </figure>
          <p>Bike</p>
          <p>$30,00</p>
        </div>
      </div>
    </div>
  </div>
  );
}

export { MyOrder };