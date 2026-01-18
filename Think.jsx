import React from 'react'
     
    

import ThinkHero from './ThinkHero'
// import Marquee from '../Marquee'
import ThinkExplore from './ThinkExplore'
import ThinkQnA from "./ThinkQnA";
import ThinkPotential from './ThinkPotential';
import Apply from "../Home/Apply.jsx"
import ThinkPace from './ThinkPace';

// import ThinkMarquee from './ThinkMarquee'



export default function Think() {
  return (
    <div className='overflow-hidden'>
        <ThinkHero/>
          {/* <Marquee/> */}

         
       
        <ThinkExplore/>
          <ThinkPotential/>
          <ThinkPace/>
       
        {/* <ThinkMarquee/> */}
           <ThinkQnA/>
           <Apply/>
          
          
    </div>
  )
}
