import playBlack from '../assets/images/play-icon-black.png';
import playWhite from '../assets/images/play-icon-white.png';
import people from '../assets/images/group-icon.png';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const MovieDetails = () => {
    const { id } = useParams();
    const [detailData, setDetailData] = useState({});

    useEffect(() => {
        const fetchMovieDetails = async () => {
            try {
                const movieDoc = await getDoc(doc(db, 'movies', id));
                if (movieDoc.exists()) {
                    setDetailData(movieDoc.data());
                } else {
                    console.log("No such document exists!");
                }
            } catch (error) {
                console.error("Error fetching movie details:", error);
            }
        };

        if (id) {
            fetchMovieDetails();
        }
    }, [id]);
    useGSAP(() => {
        gsap.fromTo('#imgTop', {
            opacity: 0,
            y: -100
        }, {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "back.inOut"
        })
        gsap.fromTo('#buLeft', {
            opacity: 0,
            x: -100
        }, {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: "back.inOut"
        })
        gsap.fromTo('#text-bottom', {
            opacity: 0,
            y: 100
        }, {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "back.inOut"
        })
    }, [])
    return (
        <div className="relative overflow-hidden  p-7  h-screen  sm:p-10 " >
            <div
                className="bg-no-repeat top-7 bg-cover bg-fixed absolute inset-0 bg-center  opacity-85"
                style={{ backgroundImage: `url(${detailData.backgroundImg})` }}
            />
            <div className='z-10 relative mt-14 '>
                <div id='imgTop' className="flex justify-start items-end mx-auto h-[25vw] min-h-[170px] pb-6 w-full">
                    <img className="max-w-[650px] min-w-[200px] w-[35vw]" src={detailData.titleImg} alt={detailData.title} />
                </div>
                <div className="max-w-[874px] ">
                    <div id='buLeft' className="flex items-center flex-wrap my-6 min-h-[56px] space-x-4 gap-y-4">
                        {/* Play Button */}
                        <button className="flex items-center justify-center px-6 h-11 md:h-14 bg-white text-black rounded-lg text-base md:text-lg uppercase tracking-widest transition-colors duration-300 hover:bg-gray-200">
                            <img src={playBlack} className="w-6 md:w-8 mr-2" alt="playIcon" />
                            <span>Play</span>
                        </button>

                        {/* Trailer Button */}
                        <button className="flex items-center justify-center px-6 h-11 md:h-14 bg-blue-950 text-white rounded-lg text-base md:text-lg uppercase tracking-widest border border-white transition-colors duration-300 hover:bg-blue-900">
                            <img src={playWhite} className="w-6 md:w-8 mr-2" alt="trailerIcon" />
                            <span>Trailer</span>
                        </button>

                        {/* Add to List */}
                        <div className="relative flex justify-center items-center w-11 h-11 bg-black bg-opacity-60 border border-white rounded-full cursor-pointer transition-colors duration-300 hover:bg-opacity-80">
                            <span className="absolute w-5 h-0.5 bg-white"></span>
                            <span className="absolute h-5 w-0.5 bg-white"></span>
                        </div>

                        <div className="w-11 h-11 flex justify-center items-center bg-white rounded-full cursor-pointer border border-white ml-4 transition-transform duration-300 hover:scale-110">
                            <div className="w-10 h-10 bg-black rounded-full flex justify-center items-center">
                                <img src={people} className="w-full" alt="group icon" />
                            </div>
                        </div>
                    </div>
                    {/* Subtitle and Description */}
                    <div id='text-bottom' className="text-white">
                        <p className="text-sm md:text-base">{detailData.subTitle}</p>
                        <p className="text-lg md:text-xl mt-4 leading-relaxed">{detailData.description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieDetails;
