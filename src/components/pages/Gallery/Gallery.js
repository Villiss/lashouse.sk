import React, { useState } from 'react'
import './Gallery.css'
import {MdClose} from 'react-icons/md'
import { motion } from 'framer-motion'


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


function Gallery() {


    let data = [
        {
            id:1,
            imgSrc: 'images/contact.jpg',
        },
        {
            id:2,
            imgSrc: 'images/design.jpg',
        },
        {
            id:3,
            imgSrc: 'images/home.jpg',
        },
        {
            id:4,
            imgSrc: 'images/tech.jpg',
        }
    ]
    const [model, setModel] = useState(false)
    const [tempingSrc, setTempingSrc] = useState('')

    const getImg = (imgSrc) => {
        setTempingSrc(imgSrc)
        setModel(true)
    }

    return (
        <motion.div 
        initial='initial'
        animate='in'
        exit='out'
        variants={pageVariants}
        transition={pageTransition}>
        <h1>Galéria</h1>
        <div className={model? 'model open' : 'model'}>
            <img src={tempingSrc} />
            <MdClose onClick={() => setModel(false)}/>
        </div>
        <div className='galeria'>
            {data.map((item, index) =>{
                return(
                    <div className='pics' key={index} onClick={() =>getImg(item.imgSrc)}>
                        <img src={item.imgSrc} style={{ width: '100%' }}/>
                    </div>
                )
            } )}
        </div>
        </motion.div>
    )
}

export default Gallery
