import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const NewDisney = () => {
    const movies = useSelector(state => state.movie.newDisney)

    return (
        <div className="py-7 ">
            <h3 className=' text-lg sm:text-xl lg:text-3xl '>New to Disney+</h3>
            <div className=" mt-10 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 justify-center  gap-6">
                {movies && movies?.map((movie) => (
                    <div key={movie.id} className='relative rounded-xl max-w-[580px] shadow overflow-hidden cursor-pointer  transition-all border border-gray-700 hover:shadow-xl transform hover:scale-110 hover:border-white'>
                        <Link to={`/detail/${movie.id}`}>
                            <img className='object-contain w-full  opacity-100 transition-opacity duration-300 ease-in-out z-1  ' src={movie.cardImg} alt={movie.title} /></Link>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default NewDisney