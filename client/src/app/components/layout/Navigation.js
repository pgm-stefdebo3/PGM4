import { Fragment } from 'react';
import { NavLink as RRNavLink } from 'react-router-dom';
import { NavbarText, Nav, NavItem, NavLink } from 'reactstrap';
import UserContextNavigation from '../auth/UserContextNavigation';

const routes = [
  {
    title: 'Curriculum',
    type: 'internal',
    path: '/curriculum'
  },
  {
    title: 'Blogs',
    type: 'internal',
    path: '/blogs'
  },
  {
    title: 'Portfolio',
    type: 'internal',
    path: '/portfolio'
  },
  {
    title: 'WPL',
    type: 'internal',
    path: '/workplacelearning'
  },
  {
    title: 'Team',
    type: 'internal',
    path: '/team'
  }
];

const Navigation = () => {
  return (
    <>
      <Nav
        className="me-auto"
        navbar
      >
        {routes && routes.map(route => 
          <NavItem key={route.path}>
            <NavLink tag={RRNavLink} to={route.path}>
              {route.title}
            </NavLink>
          </NavItem>
        )}
      </Nav>
      <UserContextNavigation/>
      </>
  )
};

export default Navigation;