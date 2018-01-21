import React from 'react'
import { Button } from 'reactstrap'

const Menu = ({
  randomHero,
  toggleSameHero,
  randomTeam,
  randomTeamAndHero,
  randomPositions,
  randomAll,
  samehero
}) => {
  return (
    <div className="mt-5 d-flex flex-column w-50 mx-auto">
      <Button className="mt-3" color={`${samehero ? 'success' : 'danger'}`} active={samehero} outline onClick={() => toggleSameHero()}> Same Hero </Button>
      <hr/>
      <Button className="mt-3" color="primary" onClick={() => randomHero()}> Random Hero </Button>
      <Button className="mt-3" color="success" onClick={() => randomTeam()}> Random Team</Button>
      <Button className="mt-3" color="info" onClick={() => randomPositions()}> Random Position</Button>
      <Button className="mt-3" color="warning" onClick={() => randomTeamAndHero()}> Random Team&Hero</Button>
      <Button className="mt-3" color="danger" onClick={() => randomAll()}> Random All</Button>
    </div>
  )
}

export default Menu