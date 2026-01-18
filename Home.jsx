import React from 'react'
import Hero from './Hero'
import Marquee from '../Marquee'
import Pillars from './Pillars'
import NumberCounting from './NumberCounting'
import Application from './Application'
import Explore from './Explore'
import Guide from './Guide'
import Apply from './Apply'
import Kapablepillars from './Kapablepillars'
import Transformleadership from './Transformleadership'
import ScrollAnimation from './ScrollAnimation'
import QnA from './QnA'

export default function Home() {
  return (
    <>
      <Hero/>
    <Marquee/>
     <Pillars/>
    <Kapablepillars/>
    <NumberCounting/>
     <ScrollAnimation/>
    <Apply/>
     <Application/>
        <Guide/>
     <Explore/>
     <QnA/>
     
    <Transformleadership/>

    </>
  )
}
