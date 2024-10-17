import { useState } from 'react';

const HighlightsSection = () => {
    const [activeCategory, setActiveCategory] = useState(0);

    const highlights = [
        {
            category: "Superhero Saga",
            title: "Marvel Studios",
            description: "Explore the entire Marvel Cinematic Universe",
            features: ["40+ Movies", "15+ Series", "Exclusive Content"],
            image: 'https://images.moviesanywhere.com/metaTag/8510da4d77ae351a78908942e5dec42f.jpeg?r=16x9&w=2560',
            items: [
                { title: "Avengers", type: "Movie Collection", image: 'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_.jpg' },
                { title: "Loki", type: "Original Series", image: 'https://m.media-amazon.com/images/M/MV5BM2FiMjQ0ZjAtYzc1OC00NzgzLWIyNmQtYmIwYjdhZWM5MmRiXkEyXkFqcGc@._V1_.jpg' },
                { title: "WandaVision", type: "Original Series", image: 'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/5525675DDD0ADAC6D5527A7E051241B2DB49578C204C32C9C097B67022EABFC8/scale?width=1200&aspectRatio=1.78&format=webp' },
                { title: "Black Panther", type: "Featured", image: 'https://m.media-amazon.com/images/M/MV5BMTg1MTY2MjYzNV5BMl5BanBnXkFtZTgwMTc4NTMwNDI@._V1_.jpg' }
            ]
        },
        {
            category: "Star Wars",
            title: "A Galaxy Far Away",
            description: "All Star Wars content in one place",
            features: ["Complete Saga", "New Series", "Behind the Scenes"],
            image: 'https://wallpapers.com/images/featured/star-wars-logo-pictures-xcw4lfbj6xjx2qvm.jpg',
            items: [
                { title: "The Mandalorian", type: "Original Series", image: 'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4826879538A92B52B2B316E2E9D5A1BEC5C774C094FF9F96E3265E0D4220E3E6/scale?width=1200&aspectRatio=1.78&format=webp' },
                { title: "Skywalker Saga", type: "Movie Collection", image: 'https://bloximages.newyork1.vip.townnews.com/breezejmu.org/content/tncms/assets/v3/editorial/3/a5/3a5b6338-c4b7-11ec-a5a1-afa644f7a4e4/6266d1762966a.image.png?crop=1915%2C1005%2C0%2C38&resize=1200%2C630&order=crop%2Cresize' },
                { title: "Ahsoka", type: "New Series", image: 'https://oregional.com.br/media/blog/6e6282a127554f30c6c5379408031b66.jpg' },
                { title: "Andor", type: "Original Series", image: 'https://thewindyhill.org/wp-content/uploads/2023/01/p22265604_b_h8_aa-e1673489907972.jpeg' }
            ]
        },
        {
            category: "Animation",
            title: "Disney & Pixar",
            description: "Timeless classics and new favorites",
            features: ["Classic Movies", "New Releases", "Short Films"],
            image: 'https://www.thejigsaw.in/blog/wp-content/uploads/2021/11/Walt-Disney-Animation-Studios.jpg',
            items: [
                { title: "Toy Story", type: "Collection", image: 'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/8F161B52338EE723D8F1C5DA31740A434E4A85F8749F9E2B9984309C287B90CF/scale?width=1200&aspectRatio=1.78&format=webp' },
                { title: "Elemental", type: "New Release", image: 'https://m.media-amazon.com/images/M/MV5BNjU2MjE1OGItZjdmYS00ZmIyLTljNjYtOWI5ZGRkZjM4NDEwXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg' },
                { title: "Encanto", type: "Featured", image: 'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/784BE9CC660F87F7F510084C2F37262DB8DE860A8F790562EF4F6B753DC6FBDD/scale?width=1200&aspectRatio=1.78&format=webp' },
                { title: "Inside Out 2", type: "Popular", image: 'https://m.media-amazon.com/images/M/MV5BYWY3MDE2Y2UtOTE3Zi00MGUzLTg2MTItZjE1ZWVkMGVlODRmXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg' }
            ]
        }
    ];

    return (
        <div className="py-8 md:py-16">
            <div className="max-w-7xl mx-auto px-4">

                <div className="text-center mb-8 md:mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 md:mb-4">
                        Highlights & Collections
                    </h2>
                    <p className="text-gray-400 text-base md:text-lg">
                        Discover our most popular franchises and collections
                    </p>
                </div>


                <div className="flex  md:justify-center gap-2 md:gap-4 mb-8 md:mb-12 pb-2 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0">
                    {highlights.map((item, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveCategory(index)}
                            className={`px-4 md:px-6 py-2 md:py-3 rounded-full whitespace-nowrap transition-all duration-300 text-sm md:text-base ${activeCategory === index
                                ? 'bg-white text-black font-bold scale-105'
                                : 'bg-gray-800 text-white hover:bg-gray-700'
                                }`}
                        >
                            {item.category}
                        </button>
                    ))}
                </div>


                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8">

                    <div className="relative group">
                        <div className="aspect-[16/9] rounded-xl overflow-hidden">
                            <img
                                src={highlights[activeCategory].image}
                                alt={highlights[activeCategory].title}
                                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                        </div>
                        <div className="absolute bottom-0 left-0 p-4 md:p-8">
                            <span className="text-sm md:text-lg font-bold text-blue-400 mb-1 md:mb-2 block">
                                {highlights[activeCategory].category}
                            </span>
                            <h3 className="text-xl md:text-3xl font-bold text-white mb-2 md:mb-3">
                                {highlights[activeCategory].title}
                            </h3>
                            <p className="text-sm md:text-base text-gray-300 mb-3 md:mb-6 hidden md:block">
                                {highlights[activeCategory].description}
                            </p>
                            <div className="flex flex-wrap gap-2 md:gap-4 mb-3 md:mb-6">
                                {highlights[activeCategory].features.map((feature, index) => (
                                    <span
                                        key={index}
                                        className="px-3 md:px-4 py-1 md:py-2 bg-gray-800/80 rounded-full text-xs md:text-sm text-white"
                                    >
                                        {feature}
                                    </span>
                                ))}
                            </div>
                            <button className="bg-white text-black px-6 md:px-8 py-2 md:py-3 rounded-full text-sm md:text-base font-bold hover:bg-gray-200 transition-colors">
                                Explore Collection
                            </button>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 md:gap-4">
                        {highlights[activeCategory].items.map((item, index) => (
                            <div
                                key={index}
                                className="group relative rounded-lg overflow-hidden cursor-pointer"
                            >
                                <div className="aspect-[4/3]">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>
                                <div className="absolute inset-0 p-3 md:p-4 flex flex-col justify-end opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <span className="text-xs md:text-sm text-blue-400 font-medium">
                                        {item.type}
                                    </span>
                                    <h4 className="text-sm md:text-lg font-bold text-white">
                                        {item.title}
                                    </h4>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>


                <div className="mt-8 md:mt-16 bg-gray-800/50 rounded-xl p-4 md:p-8 ">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
                        <div className="text-center">
                            <h4 className="text-xl md:text-2xl font-bold text-white mb-1 md:mb-2">1000+</h4>
                            <p className="text-sm md:text-base text-gray-400">Movies & Shows</p>
                        </div>
                        <div className="text-center">
                            <h4 className="text-xl md:text-2xl font-bold text-white mb-1 md:mb-2">4K Ultra HD</h4>
                            <p className="text-sm md:text-base text-gray-400">Available</p>
                        </div>
                        <div className="text-center">
                            <h4 className="text-xl md:text-2xl font-bold text-white mb-1 md:mb-2">Ad-Free</h4>
                            <p className="text-sm md:text-base text-gray-400">Entertainment</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HighlightsSection;