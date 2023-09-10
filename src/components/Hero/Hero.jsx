import React from 'react'
import "./Hero.css"


const Hero = () => {
  return (
 
    <section className='h-full max-h-[640px] mb-8 xl:mb-24'>
        <div className='flex flex-col lg:flex-row'>
 
 <div className="lg:ml-8 xl:ml-[135px] flex flex-col items-center lg-text-left justify-center flex-1 px-4 lg:px-0">
    
      <h1 className='text-7x1 lg:text-[80px] font-semibold leading-none mb-15 text-center'>
       <span className='text-violet-700 text-center'>CASAS AHORA </span> <span className='text-center'>WEb 3.0</span> 
   </h1>
      <p className='max-w-[480px] mb-8 text-center font-semi leading-none mb-15'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo commodi fugiat excepturi voluptas,
         consequuntur velit obcaecati optio iste soluta, ipsum laudantium molestias sed hic eligendi illum recusandae illo! Odit, tenetur.</p>
  
    <div>
      <button>
        marketplace
      </button> 
    </div>
 </div>

 <div className="flex-1 lg-flex justify-end items-end">
<div className="image-container">
    <img src='./1095601721.jpg' alt='' />
</div>
 </div>

 
        </div>
    </section>

  )
}

export default Hero