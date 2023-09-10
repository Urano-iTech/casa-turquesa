import React from 'react'
import { motion } from 'framer-motion'
import { useState } from 'react'
import styles from '../styles'
import { staggerContainer, textContainer } from '../utils/motion'
import { exploreCasas} from '../constants'
import { TypingText } from './CustomText'


const Sobre = () => {
  return (
    <section className={`${styles.paddings}`}
    id='explore'> 
     <motion.div
     variants={staggerContainer}
     initial="hidden"
     whileInView="show"
     viewport={{once: false, amount:0.25}}
     className={`${styles.innerWidth} mx-auto flex flex-col`}
     >
      
    
     </motion.div>

   Sobre las perras 
   </section>
  )
}

export default Sobre