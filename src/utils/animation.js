import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger)
export const gsapAnimation = (target, animationFromProps, animationToProps) => {
    gsap.fromTo(target, {
        ...animationFromProps
    }, {
        ...animationToProps,
        scrollTrigger: {
            trigger: target,
            start: 'top 80%',
            toggleActions: 'play none none none',
            once: true,
        }
    })
}