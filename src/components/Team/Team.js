import React from 'react'
import { Badge, Button } from 'reactstrap';
import Member from './Member/Member'

const Team = ({
  data,
  positions,
  onTyping,
  randomPosition,
  removeMember,
  saveMember,
  addMember
}) => {
  return (
    <div className="w-25">
      <div className="d-flex flex-column">
        <h2 className="text-center">
          <Badge color={data.color}>{ data.name }</Badge>
        </h2>
        <Button color="success" outline onClick={() => addMember(data.id)}> Add Member </Button>
      </div>
      <div className="mt-4">
        {
          data.members ? data.members.map(member => {
            return <Member teamId={data.id} positions={positions} onTyping={onTyping} removeMember={removeMember} saveMember={saveMember} randomPosition={randomPosition} key={member.id} member={member} />
          }) : ''
        }
      </div>
    </div>
  )
}

export default Team