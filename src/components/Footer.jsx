import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  
  return (
    <footer className="bg-secondary pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="text-white text-xl font-bold">Mid Trip </Link>
            <p className="mt-4 text-text-secondary">
                Bundle Dreams, Art Reams
            </p>
   
   
         </div>
          
          {/* Company links */}
          <div>
            <h3 className="text-white font-medium mb-4">{t('footer.company')}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-text-secondary hover:text-white">
                          About Us 
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-text-secondary hover:text-white">
            
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-text-secondary hover:text-white">
                          Blogs
                </Link>
              </li>
            </ul>
          </div>
          
         
          
          {/* Legal links */}
          <div>
            <h3 className="text-white font-medium mb-4">{t('footer.legal')}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/terms" className="text-text-secondary hover:text-white">
                              Terms 
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-text-secondary hover:text-white">
                        Privacy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8">
          <p className="text-text-secondary text-center">
         
                MidTrip <br/>
                Bundle Dreams, Art Reams
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;