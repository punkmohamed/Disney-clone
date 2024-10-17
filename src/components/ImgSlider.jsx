
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import imgSlide1 from '../assets/images/slider-badging.jpg'
import imgSlide2 from '../assets/images/slider-badag.jpg'
import imgSlide3 from '../assets/images/slider-scale.jpg'
import imgSlide4 from '../assets/images/slider-scales.jpg'
const slideArr = [imgSlide1, imgSlide2, imgSlide3, imgSlide4]
const ImgSlider = () => {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    };

    return (
        <div>
            <Slider className="mt-5" {...settings}>
                {slideArr.map((img, i) => (
                    <div key={i} className="  rounded cursor-pointer relative hover:border-2 hover:p-0 hover:border-white hover:duration-300 hover:transition-all   ">
                        <a className=" shadow-md cursor-pointer p-1 relative">
                            <img className="size-full " src={img} alt="slideImg" />
                        </a>
                    </div>
                ))}


            </Slider>
        </div>
    );
};

export default ImgSlider;