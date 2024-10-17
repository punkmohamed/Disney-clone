import view1 from '../assets/images/viewers-disney.png'
import view2 from '../assets/images/viewers-marvel.png'
import view3 from '../assets/images/viewers-national.png'
import view4 from '../assets/images/viewers-pixar.png'
import view5 from '../assets/images/viewers-starwars.png'
import video1 from '../assets/videos/1564674844-disney.mp4'
import video2 from '../assets/videos/1564676115-marvel.mp4'
import video3 from '../assets/videos/1564676296-national-geographic.mp4'
import video4 from '../assets/videos/1564676714-pixar.mp4'
import video5 from '../assets/videos/1608229455-star-wars.mp4'


const viewers = [
    { img: view1, video: video1 },
    { img: view2, video: video2 },
    { img: view3, video: video3 },
    { img: view4, video: video4 },
    { img: view5, video: video5 },
];

const Viewers = () => {
    return (
        <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 justify-center   gap-6">
            {viewers.map((view, i) => (
                <div key={i} className=" group hover:scale-110 relative rounded-lg shadow-md cursor-pointer overflow-hidden transition-all duration-200  border border-white">
                    <img className=' size-full object-cover absolute inset-0 top-0  opacity-100 block transition-opacity duration-500 ease-in-out' src={view.img} alt="img" />
                    <video className='size-full  opacity-0 z-0 group-hover:opacity-100 transition-opacity' autoPlay
                        loop
                        muted
                        onMouseEnter={(e) => e.target.play()}
                        onMouseLeave={(e) => e.target.pause()}>
                        <source src={view.video} type='video/mp4' />
                    </video>
                </div>
            ))}
        </div>
    )
}

export default Viewers