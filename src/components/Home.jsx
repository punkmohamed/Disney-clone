import { useEffect } from 'react'
import homeBG from '../assets/images/home-background.png'
import ImgSlider from './ImgSlider'
import NewDisney from './NewDisney'
import Originals from './Originals'
import Recommands from './Recommands'
import Trending from './Trending'
import Viewers from './Viewers'
import { useDispatch, useSelector } from 'react-redux'
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase'
import { setMovies } from '../redux/reducers/movieSlice'
import ContentDiscoverySection from './ContentDiscoverySection'
import HighlightsSection from './HighLighted'
const Home = () => {


    const user = useSelector(state => state.user)
    const dispatch = useDispatch()
    console.log(user, "user");

    useEffect(() => {
        const movies = collection(db, 'movies')
        const unsubscribe = onSnapshot(movies, (snapshot) => {
            const moviesData = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            const recommendedMovie = moviesData.filter((movie) => movie.type === "recommend")
            const trendingMovie = moviesData.filter((movie) => movie.type === "trending")
            const originalMovie = moviesData.filter((movie) => movie.type === "original")
            const newMovie = moviesData.filter((movie) => movie.type === "new")


            dispatch(setMovies({
                recommended: recommendedMovie,
                newDisney: newMovie,
                originals: originalMovie,
                trending: trendingMovie
            }));

        }, (error) => {
            console.error("Error fetching movies: ", error);
        });

        return () => unsubscribe();
    }, [user.name, dispatch])
    return (
        <div className=" relative overflow-hidden top-20 p-10" style={{ minHeight: "calc(100vh - 250px)" }}>
            <div className=' bg-no-repeat bg-cover bg-fixed absolute inset-0 -z-1  ' style={{ backgroundImage: `url(${homeBG})` }} />
            <ImgSlider />
            <div className=" relative py-24">
                <Viewers />
                <Recommands />
                <NewDisney />
                <Originals />
                <Trending />
                <ContentDiscoverySection />
                <HighlightsSection />
            </div>
        </div>
    )
}

export default Home