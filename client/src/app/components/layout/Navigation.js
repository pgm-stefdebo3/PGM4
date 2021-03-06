import { Fragment } from 'react';
import { NavLink as RRNavLink } from 'react-router-dom';
import { Nav, NavItem, NavLink } from 'reactstrap';
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
    title: 'Team',
    type: 'internal',
    path: '/team'
  },
  {
    title: 'Services',
    type: 'internal',
    path: '/services'
  },
  {
    title: 'Search',
    type: 'internal',
    path: '/search'
  },
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
      <Nav>
        <UserContextNavigation/>
      </Nav>
      </>
  )
};

export default Navigation;