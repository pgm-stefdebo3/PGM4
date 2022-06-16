import { Outlet } from 'react-router-dom'; 
import Header from './Header';
import Footer from './Footer';
import ThemeSwitcher from './ThemeSwitcher';
import { useEffect, useState } from 'react';

const PublicLayout = ({
  children,
  ...rest
}) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const onDarkModeChange = () => {
    setIsDarkMode(!isDarkMode)
  }
  
  // change colors every time isDarkMode changes
  useEffect(() => {
    setIsDarkMode(isDarkMode)
  }, [isDarkMode]);

  return (
    <div style={isDarkMode ? {  filter: "invert(100%) hue-rotate(180deg)", backgroundColor: "white"} : {} }>
      <Header />
      <div className='container-md theme-switcher'>
        <ThemeSwitcher onDarkmodeChange={onDarkModeChange} isDarkMode={isDarkMode}/>
      </div>
      <main>
        <Outlet/>
      </main>
      <Footer/>
    </div>  
  );
};

export default PublicLayout;