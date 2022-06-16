import { FaInstagramSquare, FaLinkedin } from 'react-icons/fa';

// Custom components

const Footer = () => {
  return (
    <footer className="footer">
    <div className='container-xl'>
    <h3>Connect with us on:</h3>
      <div className="socials">
        <a href='https://www.instagram.com/programmeren.ahs/'><FaInstagramSquare/></a>
        <a href='https://www.linkedin.com/company/graduaat-programmeren/'><FaLinkedin/></a>
      </div>
    </div>
    </footer>
  );
};

export default Footer;