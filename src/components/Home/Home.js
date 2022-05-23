import React from 'react'

///import style
import '../Home/Home.css'

///import components
import HomeIntro from './HomeIntro'
import HomeProject from './HomeProject'
import HomeContact from './HomeContact'


function Home() {
  return (
    <div>
        <HomeIntro />
        <HomeProject />
        <HomeContact />
    </div>
  )
}

export default Home