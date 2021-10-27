import React from "react";
import '../styles/MenuDesktop.scss';
import '../styles/MenuMobile.scss';

import closeIcon from '../assets/icons/icon_close.png'

const MenuDesktop = () => {
  return(
    <div className="desktop-menu">
    <ul>
      <li>
        <a href="/orders" className="desktop-menu-title">My orders</a>
      </li>

      <li>
        <a href="/myAccount">My account</a>
      </li>

      <li>
        <a href="/">Sign out</a>
      </li>
    </ul>
  </div>
  );
}

const MenuMobile = ({handleMenuMobile, user}) => {
  return (
    <div className="mobile-menu">
      <div className="mobile-menu-closeIcon">
        <img
          onClick={() => {
            handleMenuMobile();
          }}
          src={closeIcon}
        />
      </div>
      <ul>
        <li>
          <a href="/">CATEGORIES</a>
        </li>
        <li>
          <a href="/">All</a>
        </li>
        <li>
          <a href="/">Clothes</a>
        </li>
        <li>
          <a href="/">Electronics</a>
        </li>
        <li>
          <a href="/">Furnitures</a>
        </li>
        <li>
          <a href="/">Toys</a>
        </li>
        <li>
          <a href="/">Other</a>
        </li>
      </ul>
      {!user && (
        <ul>
        <li>
          <a href="/" className="sign-out">
            login
          </a>
        </li>
      </ul>
      )}

      {!!user && (
        <>
          <ul>
            <li>
              <a href="/orders">My orders</a>
            </li>
            <li>
              <a href="/myAccount">My account</a>
            </li>
          </ul>

          <ul>
            <li>
              <a href="/" className="email">
                platzi@example.com
              </a>
            </li>
            <li>
              <a href="/" className="sign-out">
                Sign out
              </a>
            </li>
          </ul>
        </>
      )}
    </div>
  );
}

export { MenuDesktop, MenuMobile };