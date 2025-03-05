import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiHeart, FiEye, FiDownload, FiShare2 } from 'react-icons/fi';

const ImageCard = ({ image }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="card overflow-hidden relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img 
        src={image.url} 
        alt={image.prompt} 
        className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
        loading="lazy"
      />
      
      {/* Overlay that appears on hover */}
      <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <p className="text-white text-sm line-clamp-2 mb-2">{image.prompt}</p>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Link to={`/user/${image.userId}`} className="flex items-center">
                <img 
                  src={image.userAvatar || 'https://via.placeholder.com/40'} 
                  alt={image.username} 
                  className="w-6 h-6 rounded-full mr-2"
                />
                <span className="text-white text-xs">{image.username}</span>
              </Link>
            </div>
            
            <div className="flex items-center space-x-3">
              <button className="text-white hover:text-accent">
                <FiHeart size={16} />
              </button>
              <button className="text-white hover:text-accent">
                <FiDownload size={16} />
              </button>
              <button className="text-white hover:text-accent">
                <FiShare2 size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Stats that are always visible */}
      <div className="absolute top-2 right-2 flex items-center space-x-2 bg-black/50 rounded-full px-2 py-1">
        <FiHeart size={12} className="text-white" />
        <span className="text-white text-xs">{image.likes}</span>
        <FiEye size={12} className="text-white" />
        <span className="text-white text-xs">{image.views}</span>
      </div>
    </div>
  );
};

export default ImageCard;