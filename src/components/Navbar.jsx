import { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FiMenu, FiX, FiChevronDown, FiGlobe } from 'react-icons/fi';
import LanguageSwitcher from './LanguageSwitcher';
import { useAuth } from '../contexts/AuthContext';

const Navbar = () => {
  const { t } = useTranslation();
  const { user, logout } = useAuth();
  const isAuthenticated = localStorage.getItem('token');
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);
  const [showAIFeaturesMenu, setShowAIFeaturesMenu] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleLanguageMenu = () => setShowLanguageMenu(!showLanguageMenu);
  const toggleAIFeaturesMenu = () => setShowAIFeaturesMenu(!showAIFeaturesMenu);

  const handleLogout = () => {
    // logout();
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <nav className="bg-primary border-b border-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
        <div className="flex items-center">
  <Link to="/" className="flex-shrink-0 flex items-center space-x-2">
    <img 
      src="public/midtrip.jpg" 
      alt="Mid Trip Logo" 
      className="w-12 h-12 object-cover rounded-lg"
    />
    <span className="text-white text-xl font-bold">Mid Trip</span>
  </Link>
</div>


          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link-active' : 'nav-link'}>
              {t('nav.home')}
            </NavLink>
            <NavLink to="/explore" className={({ isActive }) => isActive ? 'nav-link-active' : 'nav-link'}>
              {t('nav.explore')}
            </NavLink>
          
            
            {/* AI Features Dropdown */}
            <div className="relative">
              <button 
                className="nav-link flex items-center"
                onClick={toggleAIFeaturesMenu}
              >
                {t('nav.aiFeatures')} <FiChevronDown className="ml-1" />
              </button>
              
              {showAIFeaturesMenu && (
                <div className="dropdown-menu">
               
                  {/* <NavLink to="/ai-features" className="dropdown-item">
                    {t('nav.aiFeatures')}
                  </NavLink> */}
               
                  <NavLink to="/ai-features/gaming-characters" className="dropdown-item">
                    {t('aiFeatures.gamingCharacters')}
                  </NavLink>
                  <NavLink to="/ai-features/avatars" className="dropdown-item">
                    {t('aiFeatures.avatars')}
                  </NavLink>
                  <NavLink to="/ai-features/ai-generated-images" className="dropdown-item">
                    {t('aiFeatures.aiGeneratedImages')}
                  </NavLink>
                  <NavLink to="/ai-features/book-covers" className="dropdown-item">
                    {t('aiFeatures.bookCovers')}
                  </NavLink>
                  <NavLink to="/ai-features/movie-posters" className="dropdown-item">
                    {t('aiFeatures.moviePosters')}
                  </NavLink>
                </div>
              )}
            </div>
            
            <NavLink to="/pricing" className={({ isActive }) => isActive ? 'nav-link-active' : 'nav-link'}>
              {t('nav.pricing')}
            </NavLink>
            
            {/* Language Switcher */}
            <div className="relative">
              <button 
                className="nav-link flex items-center"
                onClick={toggleLanguageMenu}
              >
                <FiGlobe className="mr-1" /> {t('language')} <FiChevronDown className="ml-1" />
              </button>
              
              {showLanguageMenu && (
                <div className="dropdown-menu">
                  <LanguageSwitcher onClose={() => setShowLanguageMenu(false)} />
                </div>
              )}
            </div>
            
            {/* Auth Links */}
            {isAuthenticated ? (
              <button onClick={handleLogout} className="nav-link">
                {t('nav.logout')}
              </button>
            ) : (
              <>
                <NavLink to="/login" className={({ isActive }) => isActive ? 'nav-link-active' : 'nav-link'}>
                  {t('nav.login')}
                </NavLink>
                <NavLink to="/signup" className="btn-primary">
                  {t('nav.signup')}
                </NavLink>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-text-secondary hover:text-white hover:bg-secondary focus:outline-none"
            >
              {isOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLink to="/" className="block px-3 py-2 nav-link" onClick={toggleMenu}>
              {t('nav.home')}
            </NavLink>
            <NavLink to="/explore" className="block px-3 py-2 nav-link" onClick={toggleMenu}>
              {t('nav.explore')}
            </NavLink>
            <NavLink to="/gallery" className="block px-3 py-2 nav-link" onClick={toggleMenu}>
              {t('nav.gallery')}
            </NavLink>
            <NavLink to="/ai-features" className="block px-3 py-2 nav-link" onClick={toggleMenu}>
              {t('nav.aiFeatures')}
            </NavLink>
            <NavLink to="/pricing" className="block px-3 py-2 nav-link" onClick={toggleMenu}>
              {t('nav.pricing')}
            </NavLink>
            
            {/* AI Features Submenu */}
            <div className="pl-4 space-y-1">
              <NavLink to="/ai-features/gaming-characters" className="block px-3 py-2 nav-link" onClick={toggleMenu}>
                {t('aiFeatures.gamingCharacters')}
              </NavLink>
              <NavLink to="/ai-features/avatars" className="block px-3 py-2 nav-link" onClick={toggleMenu}>
                {t('aiFeatures.avatars')}
              </NavLink>
              <NavLink to="/ai-features/ai-generated-images" className="block px-3 py-2 nav-link" onClick={toggleMenu}>
                {t('aiFeatures.aiGeneratedImages')}
              </NavLink>
              <NavLink to="/ai-features/book-covers" className="block px-3 py-2 nav-link" onClick={toggleMenu}>
                {t('aiFeatures.bookCovers')}
              </NavLink>
              <NavLink to="/ai-features/movie-posters" className="block px-3 py-2 nav-link" onClick={toggleMenu}>
                {t('aiFeatures.moviePosters')}
              </NavLink>
            </div>
            
            {/* Language Switcher */}
            <div className="px-3 py-2">
              <LanguageSwitcher onClose={toggleMenu} />
            </div>
            
            {/* Auth Links */}
            {isAuthenticated ? (
              <button onClick={() => { handleLogout(); toggleMenu(); }} className="block w-full text-left px-3 py-2 nav-link">
                {t('nav.logout')}
              </button>
            ) : (
              <>
                <NavLink to="/login" className="block px-3 py-2 nav-link" onClick={toggleMenu}>
                  {t('nav.login')}
                </NavLink>
                <NavLink to="/signup" className="block px-3 py-2 btn-primary mt-2 text-center" onClick={toggleMenu}>
                  {t('nav.signup')}
                </NavLink>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;