import React from 'react'
import { useState } from 'react';
import BannerUse from '../Components/Banner/Banneruse.'
import Upcomming from '../Components/Upcoming/Upcoming'
import Trending from '../Components/Trending/Trending'
import { latest, recommended, upcome } from '../Data/Movie'


const MainPage = () => {
    const [items, setItems] = useState(upcome)
    const [item, setItem] = useState(latest)
    const [rec, setRec] = useState(recommended)
  return (
    <div>
       
        
        <BannerUse />

      <Upcomming items={items} title='Upcomming Movies' />
      <Upcomming items={item} title='Latest Movies' />
      <Trending />
      <Upcomming items={rec} title='Recommended Movies' />
    
    </div>
  )
}

export default MainPage;