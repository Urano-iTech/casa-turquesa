import React from 'react'
import { motion } from 'framer-motion'
import { TypingText } from '../CustomText'
import styles from '../styles'
import {fadeIn, staggerContainer} from '../utils/motion'


const About = () => {
  return (
    <section className={`${styles.paddings} relative z-10`}>
   <div className='gradient-02 z-0' />
   <motion.div
   variants={staggerContainer}
   initial="hidden"
   whileInView="show"
   viewport={{ once: false, amount: 0.25}}
   className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
   >
   <TypingText title="Sobre Casa-Turquesa🏩"
   textStyles="text-center" />

    <motion.p
    variants={fadeIn('up', 'tween', 0.2, 1)}
    className='mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white'
    >
    <span className='font-extrabold text-teal-800'>Casa Turquesa </span>
    
    ipsum dolor sit amet consectetur adipisicing elit. Voluptatem modi quidem molestiae ut tenetur pariatur consectetur, minima sint, inventore iusto 
    fugit repellendus unde esse temporibus architecto alias porro accusantium. Consequatur.
    
    </motion.p>

   </motion.div>
 

    </section>
  )
}

export default About