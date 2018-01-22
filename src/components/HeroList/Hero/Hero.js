import React from 'react'

const renderImage = (hero, banHero, isBanned) => {
  if(hero.heroid !== undefined) {
    return (
      <div className="relative" onClick={e => banHero(e, hero.heroid, isBanned)} style={{backgroundImage: `url('https://www.arenaofvalor.com/images/heroes/pic_122_122/${hero.heroid}.jpg')`}}>
        { isBanned ? <div className="banned"> <i className="fa fa-close fa-5x danger"></i> </div>: ''}
      </div>
    )
  }
  return ''
}

const Hero = ({
  hero,
  banHero,
  isBanned
}) => {
  return hero ? renderImage(hero, banHero, isBanned) : 'No hero available.'
}

export default Hero