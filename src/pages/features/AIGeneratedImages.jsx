import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FiDownload } from 'react-icons/fi';
import { useImage } from '../../hooks/useImage';

const AIGeneratedImages = () => {
  const { t } = useTranslation();
  const [prompt, setPrompt] = useState('');
  const { imageUrl, generateImage, loading, error } = useImage();
  
  const handleGenerate = async () => {
    if (!prompt) return;
    await generateImage(prompt);
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
          {t('aiFeatures.aiGeneratedImages')}
        </h1>
        <p className="text-xl text-text-secondary max-w-3xl mx-auto">
          Transform text prompts into beautiful, high-quality images in various styles
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1">
          <div className="bg-secondary rounded-xl p-6 mb-6">
            <h2 className="text-xl font-bold text-white mb-4">Image Description</h2>
            <textarea
              className="w-full bg-primary text-white rounded-lg p-4 min-h-[120px] focus:outline-none focus:ring-2 focus:ring-accent"
              placeholder="Describe the image you want to generate in detail"
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
              'Generate Images'
            )}
          </button>
        </div>
        
        <div className="lg:col-span-2">
          <div className="bg-secondary rounded-xl p-6">
            <h2 className="text-xl font-bold text-white mb-4">Generated Images</h2>
            
            {loading ? (
              <div className="flex items-center justify-center h-96">
                <div className="text-center">
                  <div className="animate-spin h-12 w-12 border-t-2 border-b-2 border-accent rounded-full mx-auto mb-4"></div>
                  <p className="text-text-secondary">Creating your masterpiece...</p>
                  <p className="text-text-secondary text-sm mt-2">This may take a minute</p>
                </div>
              </div>
            ) : imageUrl ? (
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="relative group">
                  <img
                    src={imageUrl}
                    alt={prompt}
                    className="w-full rounded-lg"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <button 
                      className="bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70"
                      onClick={() => handleDownload(imageUrl)}
                    >
                      <FiDownload />
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="border-2 border-dashed border-gray-700 rounded-lg h-96 flex items-center justify-center">
                <p className="text-text-secondary text-center">
                  Your generated images will appear here
                </p>
              </div>
            )}
            {error && <p className="text-red-500 text-center mt-4">{error}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIGeneratedImages;
