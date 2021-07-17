import React, {useState} from 'react'
import './Gallery.css'
import BtnSlider from './BtnSlider'
import dataSlider from './dataSlider'
import { motion } from 'framer-motion'

export default function Gallery() {

    const [slideIndex, setSlideIndex] = useState(1)

    const nextSlide = () => {
        if(slideIndex !== dataSlider.length){
            setSlideIndex(slideIndex + 1)
        } 
        else if (slideIndex === dataSlider.length){
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        if(slideIndex !== 1){
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1){
            setSlideIndex(dataSlider.length)
        }
    }

    const moveDot = index => {
        setSlideIndex(index)
    }

    const pageVariants = {
        initial: {
            opacity:0,
            x:'-100vw',
            scale: 0.8
        },
        in: {
            opacity:1,
            x:0,
            scale: 1
        },
        out: {
            opacity:0,
            x: '100vw',
            scale: 1.2
        }
      }
      
      const pageTransition= {
        type: 'tween',
        ease: 'anticipate',
        duration: 0.5
      }

    return (
        <motion.div 
        initial='initial'
        animate='in'
        exit='out'
        variants={pageVariants}
        transition={pageTransition} 
        className="container-slider">
            {dataSlider.map((obj, index) => {
                return (
                    <div
                    key={obj.id}
                    className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
                    >
                        <img 
                        src={process.env.PUBLIC_URL +`/images/${index + 1}.jpg`}
                        // src={process.env.PUBLIC_URL + `/Imgs/img${index + 1}.jpg`} 
                        />
                    </div>
                )
            })}
            <BtnSlider moveSlide={nextSlide} direction={"next"} />
            <BtnSlider moveSlide={prevSlide} direction={"prev"}/>

            <div className="container-dots">
                {Array.from({length: 4}).map((item, index) => (
                    <div 
                    onClick={() => moveDot(index + 1)}
                    className={slideIndex === index + 1 ? "dot active" : "dot"}
                    ></div>
                ))}
            </div>
            </motion.div>
    )
}