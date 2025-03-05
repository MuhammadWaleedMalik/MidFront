import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiImage, FiZap, FiLayers, FiUsers } from 'react-icons/fi';

const Home = () => {
  const { t } = useTranslation();

  const img  =  [

    "https://cdn.midjourney.com/5ed71200-8160-4400-9318-4cd585a4bd65/0_1.jpeg" ,
    "https://cdn.midjourney.com/812d7b46-9f74-49d7-82f3-9ac9b6297001/0_2.jpeg" ,
    "https://cdn.midjourney.com/cf88e9e7-80c9-4625-9e54-2e54ab7c596c/0_0.jpeg" ,
    "https://cdn.midjourney.com/a5fa334e-0fbe-4a2c-93a5-a378bceb2c2c/0_3_384_N.webp" ,
    // "https://cdn.midjourney.com/66344f6f-3c27-449d-9d7f-757a6813bbab/0_0.jpeg" ,
    // "https://cdn.midjourney.com/363554eb-8930-4be1-af0d-b15110dc1d0e/0_0.jpeg" ,
    // "https://cdn.midjourney.com/456c2cd6-0a33-4a11-947e-2305eb3ca7b0/0_0.jpeg" ,
    // "https://cdn.midjourney.com/09df49f0-fff4-4fd6-8736-b32746e050fb/0_1.jpeg" ,
    // "https://cdn.midjourney.com/0d26b910-3180-4048-b7d5-802fea122a3f/0_0.jpeg" ,
    // "https://cdn.midjourney.com/efabd8c4-7f6b-4f57-b6ac-e3d94b4d15e5/0_0.jpeg" ,
    // "https://cdn.midjourney.com/76942e97-b10a-493b-8cac-1debde209038/0_0.jpeg" ,
    // "https://cdn.midjourney.com/7dfd0f85-aa6f-478a-9745-2582c935187d/0_2.jpeg" ,
    // "https://cdn.midjourney.com/6dcb102f-f700-47ab-a8a3-71eecbb4f8d2/0_2.jpeg" ,
    // "https://cdn.midjourney.com/9889ac9c-1f85-4af5-b768-3046a0fdb1b0/0_1.jpeg" ,
    // "https://cdn.midjourney.com/ca9843bb-40f4-4484-848f-cb915fec1984/0_0.jpeg" ,
    // "https://cdn.midjourney.com/a799fab6-3d23-430a-9fc8-e30b466d77d1/0_0.jpeg" ,
    // "https://cdn.midjourney.com/398ef308-5c58-42ae-b620-1610b708e94b/0_2.jpeg" ,
    // "https://cdn.midjourney.com/ee119e15-212c-48a1-a97b-47ae0dd4dece/0_0.jpeg" ,
    // "https://cdn.midjourney.com/807b8924-5ae4-4856-8098-474fd3a3972b/0_3.jpeg" ,
    // "https://cdn.midjourney.com/d642deb7-cc88-47c3-a7ff-be53f9bb1fd4/0_0.jpeg" ,
    // "https://cdn.midjourney.com/25f61e37-426f-4b7c-81a8-eead6cc7f10c/0_3.jpeg" ,
    // "https://cdn.midjourney.com/810912c8-200f-4839-b809-2ca312cd56fc/0_3.jpeg" ,
    // "https://cdn.midjourney.com/fc5efafc-8a1f-4231-8682-7f176202d72d/0_0.jpeg" ,
    // "https://cdn.midjourney.com/1e420900-d1fb-4f66-8366-e66a0eb3c66b/0_3.jpeg" ,
    // "https://cdn.midjourney.com/385bb0cc-2527-4934-b815-3c3ae65cc3d1/0_1.jpeg" ,
    // "https://cdn.midjourney.com/cd5e3e85-0e75-4259-854d-930ddb8dc473/0_1.jpeg" ,
    // "https://cdn.midjourney.com/132126e8-23ca-4481-aea0-689139d59083/0_3.jpeg" ,
    // "https://cdn.midjourney.com/261bf08b-5a09-4690-9521-24d16debb221/0_0.jpeg" ,
    // "https://cdn.midjourney.com/261bf08b-5a09-4690-9521-24d16debb221/0_0.jpeg" ,
  
    // "https://cdn.midjourney.com/65088a9e-2a00-4744-b58a-2fd288fe3152/0_1.jpeg" ,
    // "https://cdn.midjourney.com/1ca20386-bb62-4602-aabe-f5e241a5d01e/0_2.jpeg" ,
    // "https://cdn.midjourney.com/e8cd7279-a143-419d-9c6a-4c3451d4d94a/0_0.jpeg" ,
    // "https://cdn.midjourney.com/d727c11d-7835-4af7-aa44-773e74686319/0_2.jpeg" ,
    // "https://cdn.midjourney.com/2eab7082-54ba-4f8b-98bc-00c416f93a7e/0_1.jpeg" ,
    // "https://cdn.midjourney.com/3012051b-c9c7-4b26-b75b-5a4797a16c73/0_1.jpeg" ,
  
  
    // "https://cdn.midjourney.com/364239cd-5362-4963-b31c-c459e9c7534f/0_2.jpeg" ,
    // "https://cdn.midjourney.com/50a043e0-b2f7-44ec-b8ce-efe3242647e3/0_3.jpeg" ,
    // "https://cdn.midjourney.com/434444ac-80b7-4433-a684-0ccf04042b17/0_0.jpeg" ,
    // "https://cdn.midjourney.com/76aa4a41-3f63-4c42-91d4-7054ebb2791f/0_0.jpeg" ,
  
  ]
  return (
    <div className="bg-primary">
      {/* Hero Section */}
      <section className="relative">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-accent/20 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              {t('home.hero.title')}
            </h1>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto mb-8">
              {t('home.hero.subtitle')}
            </p>
            <Link to="/signup" className="btn-primary text-lg px-8 py-3 inline-flex items-center">
              {t('home.hero.cta')} <FiArrowRight className="ml-2" />
            </Link>
          </div>
          
          {/* Example images grid */}
        
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
            <img 
              src={img[0]} 
              alt="AI generated art" 
              className="rounded-lg shadow-lg h-48 w-full object-cover"
            />
            <img 
              src={img[1]} 
              alt="AI generated art" 
              className="rounded-lg shadow-lg h-48 w-full object-cover"
            />
            <img 
            
              src={img[2]} 
              alt="AI generated art" 
              className="rounded-lg shadow-lg h-48 w-full object-cover"
            />
            <img 
             
              src={img[3]} 
              alt="AI generated art" 
              className="rounded-lg shadow-lg h-48 w-full object-cover"
            />
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {t('home.features.title')}
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              {t('home.features.subtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="bg-primary p-6 rounded-xl">
              <div className="bg-accent/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <FiImage className="text-accent text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">High Quality Images</h3>
              <p className="text-text-secondary">Generate stunning, high-resolution images that look like they were created by professional artists.</p>
            </div>
            
            {/* Feature 2 */}
            <div className="bg-primary p-6 rounded-xl">
              <div className="bg-accent/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <FiZap className="text-accent text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Fast Generation</h3>
              <p className="text-text-secondary">Create images in seconds with our optimized AI models, no waiting required.</p>
            </div>
            
            {/* Feature 3 */}
            <div className="bg-primary p-6 rounded-xl">
              <div className="bg-accent/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <FiLayers className="text-accent text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Multiple Styles</h3>
              <p className="text-text-secondary">Choose from dozens of artistic styles or create your own unique aesthetic.</p>
            </div>
            
            {/* Feature 4 */}
            <div className="bg-primary p-6 rounded-xl">
              <div className="bg-accent/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <FiUsers className="text-accent text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Community</h3>
              <p className="text-text-secondary">Join a vibrant community of creators and share your AI-generated masterpieces.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-accent/10 rounded-2xl p-8 md:p-12">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to create amazing images?
              </h2>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto mb-8">
                Join thousands of creators who are already using our platform to bring their ideas to life.
              </p>
              <Link to="/signup" className="btn-primary text-lg px-8 py-3 inline-flex items-center">
                Get Started <FiArrowRight className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;