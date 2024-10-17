import { useState } from 'react';

const ContentDiscoverySection = () => {
    const [activeCategory, setActiveCategory] = useState('featured');

    const categories = [
        {
            id: 'featured',
            title: 'Featured Collections',
            items: [
                {
                    title: 'Friends: The Reunion',
                    description: 'Join Jennifer Aniston, Courteney Cox, Lisa Kudrow, Matt LeBlanc, Matthew Perry, and David Schwimmer for this special reunion',
                    image: 'https://static1.colliderimages.com/wordpress/wp-content/uploads/2023/04/friends-feature-image.jpg',
                    badge: 'TRENDING'
                },
                {
                    title: 'The Kardashians',
                    description: 'Follow the lives of the Kardashian-Jenner family in this intimate reality series',
                    image: 'https://deadline.com/wp-content/uploads/2024/05/the-kardashians-season-5-hulu.jpg?w=1024',
                    badge: 'NEW EPISODE'
                },
                {
                    title: 'Modern Family',
                    description: 'Follow the hilarious adventures of three modern-day families',
                    image: 'https://img1.hulu.com/user/v3/artwork/082d165e-2369-45fb-ace3-26c63d5e6470?base_image_bucket_name=image_manager&base_image=2f4a8c6a-2114-402a-9325-674c671bc836&size=1200x630&format=webp',
                    badge: 'POPULAR'
                }
            ]
        },
        {
            id: 'reality',
            title: 'Reality TV',
            items: [
                {
                    title: 'The Kardashians: Season 5',
                    description: 'New drama, new beginnings, same family',
                    image: 'https://facts.net/wp-content/uploads/2023/10/16-intriguing-facts-about-the-kardashian-family-1696417643.jpg',
                    badge: 'NEW'
                },
                {
                    title: 'MasterChef US',
                    description: 'Amateur chefs compete for the coveted white apron',
                    image: 'https://m.media-amazon.com/images/S/pv-target-images/8f9c88d209ce8b8b2a84504a41c394f27fd2758a87a3a3970fb80d1737dde8db.jpg',
                    badge: 'TRENDING'
                },
                {
                    title: 'Dancing with the Stars',
                    description: 'Celebrities paired with pro dancers compete for the trophy',
                    image: 'https://www.hollywoodreporter.com/wp-content/uploads/2024/09/How-to-Stream-Dancing-With-the-Stars-Season-33-Online-MAIN.jpg?w=1296',
                    badge: 'LIVE'
                }
            ]
        },
        {
            id: 'comedy',
            title: 'Comedy Hits',
            items: [
                {
                    title: 'Friends',
                    description: 'All 10 seasons of the iconic sitcom about six friends in New York',
                    image: 'https://img.posterstore.com/zoom/wb0195-8friends-thelogo50x70-17043-24173.jpg',
                    badge: 'COMPLETE SERIES'
                },
                {
                    title: 'How I Met Your Mother',
                    description: 'Ted Mosby recounts the story of how he met his children\'s mother',
                    image: 'https://img2.hulu.com/user/v3/artwork/bc68ac79-3ace-4427-9ec0-5ee6f314d194?base_image_bucket_name=image_manager&base_image=1cb772bb-21c3-4c43-b7cc-e894ec0a29a5&size=1200x630&format=webp',
                    badge: 'FAN FAVORITE'
                },
                {
                    title: 'The Office US',
                    description: 'Follow the everyday lives of office employees in Scranton, PA',
                    image: 'https://m.media-amazon.com/images/M/MV5BZjQwYzBlYzUtZjhhOS00ZDQ0LWE0NzAtYTk4MjgzZTNkZWEzXkEyXkFqcGc@._V1_.jpg',
                    badge: 'MOST WATCHED'
                }
            ]
        }
    ];

    return (
        <div className="bg-[#040714] py-16 mt-24 rounded-lg">
            <div className="max-w-7xl mx-auto px-4">

                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Popular on Disney+</h2>
                        <p className="text-gray-400 text-lg">Trending shows and fan favorites</p>
                    </div>

                    <div className="flex flex-wrap gap-4 mt-6 md:mt-0">
                        {categories.map(category => (
                            <button
                                key={category.id}
                                onClick={() => setActiveCategory(category.id)}
                                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${activeCategory === category.id
                                    ? 'bg-white text-black'
                                    : 'bg-gray-800 text-white hover:bg-gray-700'
                                    }`}
                            >
                                {category.title}
                            </button>
                        ))}
                    </div>
                </div>


                {categories.map(category => (
                    <div
                        key={category.id}
                        className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-opacity duration-300 ${activeCategory === category.id ? 'block' : 'hidden'
                            }`}
                    >
                        {category.items.map((item, index) => (
                            <div
                                key={index}
                                className="group relative rounded-lg overflow-hidden cursor-pointer shadow-lg"
                            >

                                <div className="aspect-video relative">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>

                                <div className="absolute inset-0 flex flex-col justify-end p-6">
                                    {item.badge && (
                                        <span className="inline-block px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full mb-3 self-start">
                                            {item.badge}
                                        </span>
                                    )}
                                    <h3 className="text-xl font-bold text-white mb-2 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-75">
                                        {item.description}
                                    </p>
                                </div>

                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <button className="bg-white/90 text-black px-8 py-2 rounded-full font-semibold transform scale-0 group-hover:scale-100 transition-transform duration-300 flex items-center">
                                        <span className="mr-2">▶</span> Play Now
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                ))}

                <div className="mt-16 text-center">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-colors duration-300">
                        Explore All Shows
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ContentDiscoverySection;