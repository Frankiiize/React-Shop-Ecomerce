import React from "react";
import { Link } from "react-router-dom";
import '../styles/MenuDesktop.scss';
import '../styles/MenuMobile.scss';

import closeIcon from '../assets/icons/icon_close.png'

const MenuDesktop = () => {
  return(
    <div className="desktop-menu">
    <ul>
      <li>
        <Link to="/orders" className="desktop-menu-title">My orders</Link>
      </li>

      <li>
        <Link to="/myAccount">My account</Link>
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
          <Link to="/">All</Link>
        </li>
        <li>
          <Link to="/home/clothes">Clothes</Link>
        </li>
        <li>
          <Link to="/home/electronics">Electronics</Link>
        </li>
        <li>
          <Link to="/home/fornitures">Furnitures</Link>
        </li>
        <li>
          <Link to="/home/toys">Toys</Link>
        </li>
        <li>
          <Link to="/home/others">Others</Link>
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
              <Link to="/orders">My orders</Link>
            </li>
            <li>
              <Link to="/myAccount">My account</Link>
            </li>
          </ul>

          <ul>
            <li>
              <a href="/" className="email">
                platzi@example.com
              </a>
            </li>
            <li>
              <Link to="/" className="sign-out">
                Sign out
              </Link>
            </li>
          </ul>
        </>
      )}
    </div>
  );
}

export { MenuDesktop, MenuMobile };