import React from 'react'
import Hero from './Hero/Hero'

const Herolist = ({
  heroes,
  banned,
  banHero
}) => {
  
  return (
    <div className="d-flex flex-wrap mt-3 justify-content-center">
      {
        heroes ? heroes.map(hero => {
          return <Hero isBanned={!!banned.find(banned => hero.heroid === banned.heroid)} banHero={banHero} key={hero.heroid} hero={hero} />
        }) : ''
      }
    </div>
  )
}

export default Herolist