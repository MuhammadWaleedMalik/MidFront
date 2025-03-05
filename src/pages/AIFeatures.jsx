import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';

const AIFeatures = () => {
  const { t } = useTranslation();

  const features = [
    {
      id: 'gaming-characters',
      title: t('aiFeatures.gamingCharacters'),
      description: 'Create stunning game characters with customizable attributes, styles, and poses.',
      image: 'https://images.unsplash.com/photo-1655635949212-1d8f4f103ea1',
      link: '/ai-features/gaming-characters'
    },
    {
      id: 'avatars',
      title: t('aiFeatures.avatars'),
      description: 'Generate personalized avatars for social media, gaming profiles, or virtual worlds.',
      image: 'https://images.unsplash.com/photo-1675426513302-9be2a9c15c1a',
      link: '/ai-features/avatars'
    },
    {
      id: 'ai-generated-images',
      title: t('aiFeatures.aiGeneratedImages'),
      description: 'Transform text prompts into beautiful, high-quality images in various styles.',
      image: 'https://images.unsplash.com/photo-1675426513229-2d95e7c67abb',
      link: '/ai-features/ai-generated-images'
    },
    {
      id: 'book-covers',
      title: t('aiFeatures.bookCovers'),
      description: 'Design professional book covers that capture the essence of your story.',
      image: 'https://images.unsplash.com/photo-1675426513219-b706b256ff99',
      link: '/ai-features/book-covers'
    },
    {
      id: 'movie-posters',
      title: t('aiFeatures.moviePosters'),
      description: 'Create eye-catching movie posters with cinematic quality and visual impact.',
      image: 'https://images.unsplash.com/photo-1664478711535-fd3cc5d1a99a',
      link: '/ai-features/movie-posters'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-white mb-4">
          AI Features
        </h1>
        <p className="text-xl text-text-secondary max-w-3xl mx-auto">
          Explore our powerful AI image generation capabilities across different categories
        </p>
      </div>
      
      {/* Features grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature) => (
          <Link 
            key={feature.id}
            to={feature.link}
            className="bg-secondary rounded-xl overflow-hidden hover:transform hover:scale-[1.02] transition-transform"
          >
            <div className="h-48 overflow-hidden">
              <img 
                src={feature.image} 
                alt={feature.title} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-text-secondary mb-4">{feature.description}</p>
              <div className="flex items-center text-accent">
                Explore <FiArrowRight className="ml-2" />
              </div>
            </div>
          </Link>
        ))}
      </div>
      
      {/* Additional info section */}
      <div className="mt-20 bg-secondary rounded-xl p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">
              How Our AI Works
            </h2>
            <p className="text-text-secondary mb-4">
              Our advanced AI models have been trained on millions of images to understand and generate high-quality visuals from text descriptions.
            </p>
            <p className="text-text-secondary mb-4">
              Simply describe what you want to see, and our AI will transform your words into stunning images in seconds.
            </p>
            <ul className="space-y-2 text-text-secondary">
              <li className="flex items-start">
                <span className="text-accent mr-2">•</span>
                <span>State-of-the-art diffusion models</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2">•</span>
                <span>Multiple artistic styles and aesthetics</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2">•</span>
                <span>Customizable parameters for fine-tuning</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2">•</span>
                <span>Continuous learning and improvement</span>
              </li>
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img 
              src="https://images.unsplash.com/photo-1664478546384-d57e3ca563cf" 
              alt="AI Process" 
              className="rounded-lg"
            />
            <img 
              src="https://images.unsplash.com/photo-1664478546557-22c2fe7e1d3" 
              alt="AI Result" 
              className="rounded-lg"
            />
            <img 
              src="https://images.unsplash.com/photo-1675426513302-9be2a9c15c1a" 
              alt="AI Example" 
              className="rounded-lg"
            />
            <img 
              src="https://images.unsplash.com/photo-1675426513229-2d95e7c67abb" 
              alt="AI Example" 
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIFeatures;