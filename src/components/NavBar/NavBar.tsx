import React from 'react';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

export const NavBar: React.FC = React.memo(() => (
  <nav
    className="navbar is-light is-fixed-top is-mobile has-shadow"
    data-cy="Nav"
  >
    <div className="container">
      <div className="navbar-brand">
        <NavLink
          to="/"
          className={({ isActive }) => classNames(
            'navbar-item',
            { 'is-active': isActive },
          )}
        >
          My Articles
        </NavLink>
        <NavLink
          to="/addarticle"
          className={({ isActive }) => classNames(
            'navbar-item',
            { 'is-active': isActive },
          )}
        >
          Add Article
        </NavLink>
        <NavLink
          to="/newsapi"
          className={({ isActive }) => classNames(
            'navbar-item',
            { 'is-active': isActive },
          )}
        >
          Newsapi Articles
        </NavLink>
      </div>
    </div>
  </nav>
));
