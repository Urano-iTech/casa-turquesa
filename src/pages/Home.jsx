import React from 'react'
import { motion } from 'framer-motion'
import styles from '../styles'
import {  fadeIn, slideIn, staggerContainer, textVariant, textoVariante,} from '../utils/motion'
import { exploreCasas} from '../constants'
import ExploreCard from '../components/ExploreCard'
import { useState } from 'react'
import Hero from '../components/Hero/Hero'

import "flowbite"




const Home = () => {
const [active, setActive] = useState('casa-1')
const [ selectedId, setSelectId] = useState(null)

  return (
    <section className={`${styles.yPaddings} sm:pl-4 pl-4`}>
      <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.15}}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
      <div className='flex justify-center items-center flex-col relative z-10'>
      <motion.h1 variants={textVariant(0.5)} className={styles.heroHeading}>
       <span className='text-[#333]'> Casa Turquesa</span>   <span className='text-black'></span>   <span className='text-[#333]'> </span> 
      </motion.h1>
      <motion.div
      variants={textVariant(1.2)}
      className='flex flex-row justify-center items-center'
      >
       
       <h1 className={styles.heroHeading}>  <span className='text-[#34fddc]'>  Casa</span></h1>
        <div className={styles.heroDText}/> 
       <h1 className={styles.heroHeading}> <span className='text-[#13493c]'> Turquesa </span> </h1>
      </motion.div>
      </div>
   
      <motion.div
      variants={slideIn('right', 'tween', 0.2, 1)}
      className='relative w-full md:-mt-[20px] -mt-[12px]'
      >
       <div className='absolute w-full h-[300px] hero-gradient rounded-tl-[140px] z-[0] -top-[30px]' />
        
        <img
        src='/1095601719.jpg'
        alt='cover'
        className='w-full sm:h-[500px] h-[350px] object-cover rounded-tl-[140px] z-10 relative'
       />

     
      </motion.div>

      {/** */}
      <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{once: false, amount:0.25}}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
       <motion.h1 variants={textVariant(0.2)}  className={styles.heroHeading1}>
       <span className='text-[#333333] '> Explora Todas las Casas</span>  <span className='text-[#0f0faf9e]'>Conecta con Metamask</span> 
      </motion.h1>
             
      </motion.div>
    
       <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{once: false, amount:0.4}}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
       />
        
   
 

    {/** slider animado */}

   <div className='mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5'>
   {exploreCasas.map((casa,index) =>(
    <ExploreCard 
    key={casa.id}
    {...casa}
    index={index}
    active={active}
    handleclick={setActive}
    />
   ) )} 


   </div>

   <div>

<h1 className={styles.heroHeading}>  <span className='text-[#34fddc] '>Explora </span></h1>
<h1 className={styles.heroHeading1}>  <span className='text-[#a08aff] '>Las Propiedades </span><span className='text-[#6f85e7]'>Web 3.0 NFT</span> </h1>

{/**Slider */}
<div id="animation-carousel" className="relative w-full" data-carousel="slide">
<div className='relative h-56 overflow-hidden rounded-lg md:h-96'>

 <div className='hidden duration-100 ease-linear' data-carousel-item>
  <img src="/1095601718.jpg" className='absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2' alt='' />
 </div>

 <div className='hidden duration-100 ease-linear' data-carousel-item>
  <img src="/1095601721.jpg" className='absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2' alt='' />
 </div>

 <div className='hidden duration-100 ease-linear' data-carousel-item>
  <img src="/1095601721.jpg" className='absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2' alt='' />
 </div>

 <div className='hidden duration-100 ease-linear' data-carousel-item>
  <img src="/1095601719.jpg" className='absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2' alt='' />
 </div>

 <div className='hidden duration-200 ease-linear' data-carousel-item>
  <img src="/1095601720.jpg" className='absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2' alt='' />
 </div>

{/**indicadores */}

 
 {/**slider control */}

</div>
</div>


</div>

<motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{once: false, amount:0.15}}
      className={`${styles.innerWidth} `}
      >
  <Hero />


      </motion.div>  

<motion.div
variants={staggerContainer}
initial="hidden"
whileInView="show"
viewport={{once: false, amount:0.15}}
className={`${styles.innerWidth} `}
>

       <motion.h1 variants={textoVariante}  className={styles.heroHeading1}>
       <span className='text-[#c2242454] tex-center'>Conecta tu wallet</span>  <span className='text-[#0f0faf9e]'>Conecta con Metamask</span> 
      </motion.h1> 

</motion.div>

     


   </motion.div>



{/** */}




    
      
    </section>
   
  )
}

export default Home