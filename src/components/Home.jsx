import React from 'react'
import Corousel from './HomeComponents/Corousel'
import MiniNavbar from './HomeComponents/MiniNavbar'
import DealsCards from '../components/homeCards/DealsCards'
import FriesCards from '../components/homeCards/FriesCards'
import PizzaCards from '../components/homeCards/PizzaCards'
import ChickenBurgerCards from '../components/homeCards/ChickenBurgerCards'
import BeefBurgerCards from '../components/homeCards/BeefBurgerCards'
import QuickBitesCards from '../components/homeCards/QuickBitesCards'


const Home = () => {
  return (
    <div className='min-w-screen w-full'>
      <Corousel />
      <MiniNavbar />

      <div className='w-full h-auto bg-black/10 flex flex-col items-center justify-center'>
        <div id="deals"><DealsCards /></div>
        <div id="chicken"><ChickenBurgerCards /></div>
        <div id="beef"><BeefBurgerCards /></div>
        <div id="pizza"><PizzaCards /></div>
        <div id="fries"><FriesCards /></div>
        <div id="quick"><QuickBitesCards /></div>
      </div>

    </div>
  )
}

export default Home
