import { NavLink as RRNavLink } from 'react-router-dom';
import { Navbar, NavbarBrand, NavLink, NavbarToggler, Collapse } from 'reactstrap';

// Custom components
import Navigation from './Navigation';

const Header = () => {
  return (
    <header className="header">
      <div className='container-xl'>
        <Navbar
          color="light"
          expand="md"
          light
        >
          <NavbarBrand tag={RRNavLink} to="/">
            PGM Platform
          </NavbarBrand>
          <NavbarToggler onClick={function noRefCheck(){}} />
          <Collapse navbar>
            <Navigation/>
          </Collapse>
        </Navbar>
      </div>
    </header>
  );
};

export default Header;