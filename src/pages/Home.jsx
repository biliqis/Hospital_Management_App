import React from 'react'
import SpecialityMenu from '../components/SpecialityMenu'
import Headers from '../components/Headers'
import TopDoctors from '../components/TopDoctors'

const Home = () => {
  return (
    <div>
<Headers/>
       <SpecialityMenu/>
       <TopDoctors/>
    </div>
  )
}

export default Home
