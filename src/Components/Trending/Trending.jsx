import React, { useState } from "react"
import { trending } from "../../Data/Movie"
import Banner from "../Banner/Banner"
import "./tending.css";



const Trending = () => {
  const [items, setItems] = useState(trending)
  return (
    <>
      <section className='trending'>
        
        <Banner items={items} />
      </section>
    </>
  )
}

export default Trending