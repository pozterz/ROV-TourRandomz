import React from 'react'
import { Card, CardBody, Button, CardTitle, CardText, CardImg, FormGroup, Label, Input } from 'reactstrap'
import Hero from '../../HeroList/Hero/Hero'

const Member = ({
  member,
  teamId,
  saveMember,
  randomPosition,
  onTyping,
  positions
}) => {
  return (
    <div className="mb-3">
      <Card>
          { member.saved ? (
            <CardBody>
              <div className="d-flex justify-content-between">
              <div>
              <CardTitle>{member.name}</CardTitle>
              <CardText>{positions[member.position]}</CardText>
              <Button onClick={() => saveMember(member.id, teamId)}>Edit</Button>

              </div>
              <Hero className="card-img-top" hero={member.heroe} />
              </div>
            </CardBody>
          ) : 
          (
            <CardBody>
              <FormGroup>
                <Label for="name">Name</Label>
                <Input type="text" name="name" value={member.name} onChange={e => onTyping(e, 'name', member.id, teamId)} placeholder="Name" />
              </FormGroup>
              <FormGroup>
                <Label for="position">Position</Label>
                <Input type="select" onChange={e => onTyping(e, 'position', member.id, teamId)} value={member.position}>
                  { positions ? positions.map((position, index) => {
                      return <option key={index} value={index}>{position}</option>
                    }) : ''
                  }
                </Input>
              </FormGroup>
              <Button onClick={() => saveMember(member.id, teamId)} color="success">Save</Button>
              <Button onClick={() => randomPosition(member.id, teamId)} className="ml-2">
                  <i className="fa fa-refresh"></i>
              </Button>
            </CardBody>
          )
        }
      </Card>
    </div>
  )
}

export default Member