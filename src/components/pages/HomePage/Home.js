import { motion } from 'framer-motion'
import React from 'react'
import Section from '../../Section'
import { homeObjOne } from './Data'


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

function Home() {
    return (
        <motion.div 
        initial='initial'
        animate='in'
        exit='out'
        variants={pageVariants}
        transition={pageTransition}>
            <Section {...homeObjOne } />
        </motion.div>
    )
}

export default Home
