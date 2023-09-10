import React from 'react'
import styles from '../styles'

const Items = ({ number, title }) => {
  return (
    <div className={`${styles.flexCenter} flex-row`}>
        <div className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[24px] bg-[#323f5d]`}>
            <p className='font-bold text-[20px] text-black'>
             0{number}
            </p>
        </div>
        <p className='flex-1 ml-[30px] font-normal text-[18px] text-black leading-[32px]'>
      {title}
        </p>
     </div>
  )
}

export default Items