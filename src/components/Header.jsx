
import { Link, useNavigate } from 'react-router-dom'
import headerLogo from '../assets/images/logo.svg'
import homeIcon from '../assets/images/home-icon.svg';
import movieIcon from '../assets/images/movie-icon.svg';
import watchlistIcon from '../assets/images/watchlist-icon.svg';
import searchIcon from '../assets/images/search-icon.svg';
import seriesIcon from '../assets/images/series-icon.svg';
import originalIcon from '../assets/images/original-icon.svg';
import { auth, provider } from '../firebase';
import { onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { setSignOutState, setUserLoginDetails } from '../redux/reducers/userSlice';
import { useEffect } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
const links = [
    {
        icon: homeIcon,
        text: "HOME",
        to: '/home'
    },
    {
        icon: movieIcon,
        text: "MOVIES"
    },
    {
        icon: watchlistIcon,
        text: "WATCHLIST"
    },
    {
        icon: searchIcon,
        text: "SEARCH"
    },
    {
        icon: seriesIcon,
        text: "SERIES"
    },
    {
        icon: originalIcon,
        text: "ORIGINALS"
    }
];
const Header = () => {
    const navi = useNavigate()
    const dispatch = useDispatch()
    const user = useSelector((state) => state.user)
    console.log(user, "user");
    useGSAP(() => {
        gsap.fromTo('#nav', {
            y: -100,
            opacity: 0,
        }, {
            y: 0,
            opacity: 1,
            duration: 2,
            ease: 'back.inOut'
        })
        gsap.fromTo('#stagger', {
            y: -100,
            opacity: 0,
        }, {
            y: 0,
            opacity: 1,
            stagger: {
                amount: 1.5,
                ease: 'circ.inOut',
                from: 'start'
            },
            duration: 2,
            ease: 'back.inOut'
        })
    }, [user])
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                navi('/home');
            }
        });
        return () => unsubscribe();
    }, [user]);

    const handleAuth = async () => {
        try {
            const response = await signInWithPopup(auth, provider)
            console.log(response.user, "response");
            setUser(response.user)
            navi('home')
        } catch (error) {
            console.log(error);
        }
    }
    const setUser = (user) => {
        dispatch(setUserLoginDetails({
            name: user.displayName,
            email: user.email,
            photo: user.photoURL,
        }))
    }
    console.log(user, "user");
    const handleLogout = async () => {
        try {
            await signOut(auth)
            dispatch(setSignOutState())
            navi('/')
        } catch (error) {
            console.log(error);

        }
    }
    return (
        <nav id='nav' className=' fixed top-0 h-20 px-[36px] leading-4 flex justify-between items-center bg-nav w-full z-10'>
            <Link to={'/'} className='w-[80px] mt-[4px] max-h-[70px]' >
                <img src={headerLogo} className='w-full' alt="logo" />
            </Link>
            {!user.name ? <button onClick={handleAuth} className='bg-black p-3 px-4 rounded-lg border border-white  transition-colors hover:bg-white hover:text-black font-bold uppercase tracking-widest'>Login</button>
                :
                <>
                    <div className='md:flex flex-nowrap items-center justify-end relative p-0 m-0 mr-auto ml-[25px] hidden '>
                        {links.map((link, i) => (
                            <Link id='stagger' key={i} to={link?.to} className="flex items-center px-3  ">
                                <img className="size-5 min-w-[20px] z-auto" src={link.icon} alt="home icon" />
                                <span className=" uppercase text-lg tracking-widest relative whitespace-nowrap py-2 before:absolute before:content-[''] 
before:bg-[#f9f9f9] before:rounded-b-md before:h-[2px] before:left-0 before:right-0 
before:bottom-[-6px] before:opacity-0 before:scale-x-0 before:transition-transform 
before:duration-[250ms] before:origin-left before:ease-custom 
hover:before:opacity-100 hover:before:scale-x-100">{link.text}</span>
                            </Link>
                        ))}
                    </div>

                    <div className='relative group '>
                        <img src={user.photo} className='rounded-full size-12 cursor-pointer' alt="userImg" />
                        <div className="absolute right-0 mt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 transform scale-95 group-hover:scale-100">
                            <button
                                onClick={handleLogout}
                                className="bg-black z-[9999] text-white p-3 px-4 rounded-lg border border-white hover:bg-[#0063e5] hover:text-black font-bold uppercase tracking-widest whitespace-nowrap shadow-lg"
                            >
                                Logout
                            </button>
                        </div>
                    </div>

                </>
            }


        </nav>
    )
}

export default Header