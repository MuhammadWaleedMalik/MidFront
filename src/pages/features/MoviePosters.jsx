import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FiDownload } from 'react-icons/fi';
import { useImage } from '../../hooks/useImage';

const MoviePosters = () => {
  const { t } = useTranslation();
  const [prompt, setPrompt] = useState('');
  const [selectedAvatar, setSelectedAvatar] = useState(null);
  const { imageUrl, generateImage, loading, error } = useImage();

  const handleGenerate = () => {
    if (!prompt) return;
    generateImage(prompt);
  };

  const handleDownload = async (url) => {
    try {
      const response = await fetch(url);
      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);
      
      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = 'generated-image.jpg';
      document.body.appendChild(link);
      link.click();
      
      document.body.removeChild(link);
      window.URL.revokeObjectURL(blobUrl);
    } catch (error) {
      console.error("Error downloading the image:", error);
    }
  };
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-white mb-4">
          {t('aiFeatures.avatars')}
        </h1>
        <p className="text-xl text-text-secondary max-w-3xl mx-auto">
        Design professional MoviePosters that capture the essence of your Movie
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1">
          <div className="bg-secondary rounded-xl p-6 mb-6">
            <h2 className="text-xl font-bold text-white mb-4">Movie Posters Description</h2>
            <textarea
              className="w-full bg-primary text-white rounded-lg p-4 min-h-[100px] focus:outline-none focus:ring-2 focus:ring-accent"
              placeholder="Describe how you want your Movie Poster to look"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
            />
          </div>
          
          <button
            className="w-full btn-primary py-3 flex items-center justify-center"
            onClick={handleGenerate}
            disabled={loading || !prompt}
          >
            {loading ? (
              <>
                <span className="animate-spin h-5 w-5 mr-3 border-t-2 border-b-2 border-white rounded-full"></span>
                Generating...
              </>
            ) : (
              'Generate Movie Poster'
            )}
          </button>
        </div>
        
        <div className="lg:col-span-2">
          <div className="bg-secondary rounded-xl p-6">
            <h2 className="text-xl font-bold text-white mb-4">Your Movie Posters</h2>
            
            {loading ? (
              <div className="flex items-center justify-center h-64">
                <div className="text-center">
                  <div className="animate-spin h-12 w-12 border-t-2 border-b-2 border-accent rounded-full mx-auto mb-4"></div>
                  <p className="text-text-secondary">Generating your MoviePosters...</p>
                </div>
              </div>
            ) : imageUrl ? (
              <div className="mb-6 relative">
              <img
                src={imageUrl}
                alt="Generated avatar"
                className="w-full h-[500px] object-contain rounded-lg"
              />
              <div className="absolute top-4 right-4 flex space-x-2">
                <button 
                  className="bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70" 
                  onClick={() => handleDownload(imageUrl)}
                >
                  <FiDownload />
                </button>
              </div>
            </div>
            

            ) : selectedAvatar ? (
              <img
                src={selectedAvatar}
                alt="Selected avatar"
                className="w-full h-64 object-cover rounded-lg"
              />
            ) : (
              <div className="border-2 border-dashed border-gray-700 rounded-lg h-64 flex items-center justify-center">
                <p className="text-text-secondary text-center">Your MoviePosters will appear here</p>
              </div>
            )}
            {error && <p className="text-red-500 text-center mt-4">Error: {error}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoviePosters;