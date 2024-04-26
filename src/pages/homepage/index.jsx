import React, { useState } from 'react'
import HeroSection from './_components/hero-section'
import RocketLists from './_components/rocket-lists'
import Select from '../../components/ui/search'

const Homepage = () => {
  const [searchClick, setSearchClick] = useState(false)
  const handleClick = (click) => {
    setSearchClick(click)
  }
  return (
    <div>
        <HeroSection handleSearchClick={handleClick} />
        <RocketLists />
    </div>
  )
}

export default Homepage