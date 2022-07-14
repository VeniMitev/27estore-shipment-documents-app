import React from "react";
import { NavLink } from "react-router-dom";
import './NavBar.css'

export const NavBar = () => {
    return (
        <nav >
          <ul className="sidebar">
            <li>
              <NavLink
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/shipment-manifest"
              >
                Shipment Manifest
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/pricing"
              >
                Pricing
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/invoice-bg"
              >
                Invoice BG
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/invoice-us"
              >
                Invoice US
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/packing-list"
              >
                Packing List
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/declaration"
              >
                Declaration
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dictionary"
              >
                Dictionary
              </NavLink>
            </li>
          </ul>
        </nav>
    );
}