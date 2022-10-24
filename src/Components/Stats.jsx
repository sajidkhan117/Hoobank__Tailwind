import React from 'react'
import styles from '../style'
import { stats } from '../Constants/Index'
const Stats = () => (
  <section className={`${styles.flexCenter}
       flex-row flex-wrap sm:mb-20 mb-6
      `}>
    {stats.map((stat) => (
      <div key={stat.id} className={`flex-1  flex justify-start items-center `}>
        <h4 className='font-popins font-semibold xs:font-semibold xs:text-[40px] text-[30px] xs:leading-[53px]  leading-[43px] text-white' >{stat.value}</h4>
        <p className='font-popins font-normal  xs:text-[15px] text-[26px] xs:leading-[21px]  leading-[21px] text-gradient  uppercase ml-3'>{stat.title}</p>
      </div>
    ))}


  </section>
)


export default Stats