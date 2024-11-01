import loginBg from '../assets/images/login-background.jpg'
import Logo1 from '../assets/images/cta-logo-one.svg';
import Logo2 from '../assets/images/cta-logo-two.png';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
const Login = () => {
    useGSAP(() => {
        gsap.fromTo('.logo', {
            opacity: 0,
            scale: 0
        }, {
            scale: 1,
            opacity: 1,
            duration: 2
        })
        gsap.fromTo('#button', {
            x: 140,
            opacity: 0,
        }, {
            x: 0,
            delay: 2,
            opacity: 1,
            duration: 2,
            ease: 'back.inOut'
        })
        gsap.fromTo('#par', {
            x: -140,
            opacity: 0,
        }, {
            x: 0,
            delay: 2,
            opacity: 1,
            duration: 2,
            ease: 'back.inOut'
        })
    }, [])
    return (
        <div className="flex flex-col h-screen items-center justify-center bg-no-repeat bg-cover bg-top" style={{ backgroundImage: `url(${loginBg})` }} >
            <div className="mb-10 relative min-h-[100vh] w-full flex justify-center items-center flex-col p-20">
                <div className='mb-1 max-w-[650px] flex flex-wrap flex-col justify-center mt-0 text-center mx-auto transition-opacity ease-out w-full'>
                    <img className=' logo max-w-[600px] block min-h-1 w-full mb-3 mx-auto' src={Logo1} alt="" />
                    <div className='max-w-[650px] w-full flex flex-col'>
                        <button id='button' className='font-bold text-white bg-[#0063e5] mb-3  tracking-widest text-lg p-4 border border-transparent rounded hover:bg-[#0483ee] '>GET ALL THERE</button>
                        <p id='par' className='text-md tracking-widest leading-6 '> Get Premier Access to Raya and the Last Dragon for an additional fee
                            with a Disney+ subscription. As of 03/26/21, the price of Disney+
                            and The Disney Bundle will increase by $1.</p>
                        <img src={Logo2} alt="" className='logo max-w-[600px] my-5 w-full mx-auto' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login