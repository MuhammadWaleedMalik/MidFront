import React from "react";

const Blog = () => {

    const images = [
    

        "https://cdn.midjourney.com/a799fab6-3d23-430a-9fc8-e30b466d77d1/0_0.jpeg" ,
        "https://cdn.midjourney.com/ee119e15-212c-48a1-a97b-47ae0dd4dece/0_0.jpeg" ,
        "https://cdn.midjourney.com/398ef308-5c58-42ae-b620-1610b708e94b/0_2.jpeg" ,
        "https://cdn.midjourney.com/807b8924-5ae4-4856-8098-474fd3a3972b/0_3.jpeg" ,

        "https://cdn.midjourney.com/2eab7082-54ba-4f8b-98bc-00c416f93a7e/0_1.jpeg" ,
        
    
      ];
    
  const blogs = [
    {
      title: "Cinematic Movie Posters: AI in Film Art",
      description: "Discover how AI transforms movie poster design, creating stunning visuals that captivate audiences.",
      image: images[0],
    },
    {
      title: "AI-Powered Book Covers: Redefining Publishing",
      description: "Learn how AI-generated book covers are revolutionizing the publishing industry with unique, eye-catching designs.",
      image: images[1],
    
    },
    {
      title: "Custom AI Avatars: The Future of Digital Identity",
      description: "Explore how AI avatars are shaping online identities, gaming profiles, and social media branding.",
      image: images[2],
    
    },
    {
      title: "NFT Art: AI-Generated Digital Collectibles",
      description: "Unveil the impact of AI-generated NFTs and how they are shaping the digital art and crypto world.",
      image: images[3],
    
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-blue-400 mb-8">Mid Trip Blog</h1>
      
      <div className="space-y-6 w-full max-w-5xl">
        {blogs.map((blog, index) => (
          <div key={index} className="bg-gray-800 p-4 rounded-lg flex items-center shadow-lg transition-transform duration-300 hover:scale-105">
            {/* Image Section */}
            <img src={blog.image} alt={blog.title} className="w-40 h-40 object-cover rounded-lg mr-6" />

            {/* Content Section */}
            <div className="flex flex-col flex-1">
              <h2 className="text-2xl font-semibold text-blue-300">{blog.title}</h2>
              <p className="text-gray-300 text-sm mt-2">{blog.description}</p>
       
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
