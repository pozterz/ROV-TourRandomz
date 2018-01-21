import React from 'react'

const Hero = ({
  hero,
  banHero,
  isBanned
}) => {
  return (
    <div className="relative" onClick={e => banHero(e, hero.heroid, isBanned)} >
      { isBanned ? <div className="banned"> <i className="fa fa-close fa-5x danger"></i> </div>: ''}
      { hero ? <img className="relative" src={`https://www.arenaofvalor.com/images/heroes/pic_122_122/${hero.heroid || ''}.jpg`} alt={hero.name} width={90} /> : 'No Hero available' }
    </div>
  )
}

export default Hero