import React from 'react'
import { useRouter } from 'next/router'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import { SlideImagesText } from '../../locales/SlideImagesText';
//photos
import image1 from "../../Assets/bg1.png";
import image2 from "../../Assets/bg2.png";
const ImageSlider = () => {
    const router = useRouter();
    const l = router.locale === 'en' ? '1' : router.locale === 'cn' ? '2' : '0';
    const t = SlideImagesText[`${l}`];
    const slideImages = [
        {
            bgImage: `${image1.src}`,
            url: "../services/aiport",
            class1: "bg-gradient-to-l from-transparent lg:to-black/10 to-black/0 items-end",
            class2: "text-right",
            class3: "border-white text-white hover:bg-white/10",
            class4: "text-gray-500 text-right",
            class5: 'font-medium text-white',
            text0: `${t.text0.slide2}`,
            text2: `${t.text2.slide2}`,
            text3: `${t.text3.slide2}`,
            text4: `${t.text4}`,
        },
        {
            bgImage: `${image2.src}`,
            url: "../services/airport",
            class1: "bg-gradient-to-l from-transparent lg:to-black/20 to-black/0 items-end",
            class2: "text-right",
            class3: "border-white text-white hover:bg-white/10",
            class4: "text-gray-500 text-right",
            class5: 'font-medium text-white',
            text0: `${t.text0.slide3}`,
            text2: `${t.text2.slide3}`,
            text3: `${t.text3.slide3}`,
            text4: `${t.text4}`,
        },
    ];
    const SlideProperties = { 
        duration: 4000,
        transitionDuration: 2000,
        canSwipe : false,
    }
  return (
          <div className=''>
         <div className="slide-container">
        <Slide {...SlideProperties} easing="ease">
         {slideImages.map((slideImage, index)=> (
            <div className="each-slide w-screen" style={{height: 500}} key={index}>
                <div className='w-full h-full bg-cover bg-center' style={{'backgroundImage': `url(${slideImage.bgImage}`}}>
                    <div className={`w-screen h-full flex justify-center flex-col md:p-20 p-10 ${slideImage.class1}`} >
                        <div className={`font-bold text-white md:text-6xl mt-20 text-4xl ${slideImage.class2}`}>
                            <p>
                            {slideImage.text0}
                            </p>
                        </div>
                        <div className={`tracking-widest md:font-thin md:text-sm md:pt-10 pt-5 text-[12px] font-light ${slideImage.class4}`}>
                            <p className='text-white'> {slideImage.text2} </p>
                            <p className={`${slideImage.class5}`}> {slideImage.text3} </p>
                        </div>
                        <div className={`transition-all duration-500 ease-in-out border md:mt-10 w-64 sm:h-12 h-10 mt-5 flex items-center justify-center rounded-lg cursor-default hover:translate-x-2  ${slideImage.class3}`} onClick={() => {router.push(slideImage.url)}}>
                            <p className='p-2 font-medium'>{slideImage.text4} </p>
                            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
          ))} 
        </Slide>
      </div>
    </div> 
  )
}

export default ImageSlider