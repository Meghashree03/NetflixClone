import React, { useState } from "react"
import "./banner.css"
import Banner from "./Banner"
import { homeData } from "../../Data/Movie"


const BannerUse = () => {
  const [items, setItems] = useState(homeData)

  return (
    <>
      <section className='home'>
        <Banner items={items} />
      </section>
      <div className='mragin'></div>
    </>
  )
}

export default BannerUse;