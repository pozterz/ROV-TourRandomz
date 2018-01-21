import React, { Component } from 'react';
import './App.css';
import Herolist from './components/HeroList/Herolist'
import Team from './components/Team/Team'
import Menu from './components/Menu/Menu'
import Heroes from './Heroes'

const positions = [
  'tank',
  'fighter',
  'jungle',
  'mage',
  'carry',
  'support'
]

class App extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      samehero: false,
      herolist: Heroes.data,
      ban: [],
      teamA: {
        id: 1,
        name: 'A',
        color: 'danger',
        members: []
      },
      teamB: {
        id: 2,
        name: 'B',
        color: 'primary',
        members: []
      },
    }
  }

  addMember = (team) => {
    const { teamA, teamB } = this.state

    const member = {
      name: '',
      position: 0,
      saved: false,
      heroe: {}
    }

    if(team === 1){
      member.id = teamA.members.length + 1
      teamA.members.push(member)
      this.setState({
        teamA
      })
    } else {
      member.id = teamB.members.length + 1
      teamB.members.push(member)
      this.setState({
        teamB
      })
    }
  }

  onTyping = (e, key, id, team) => {
    e.preventDefault()
    const { teamA, teamB } = this.state
    
    if(team === 1){
      teamA.members = teamA.members.map(member => {
        if(member.id === id) {
          member[key] = e.target.value
        }
        return member
      })
      this.setState({
        teamA
      })
    } else {
      teamB.members = teamB.members.map(member => {
        if(member.id === id) {
          member[key] = e.target.value
        }
        return member
      })
      this.setState({
        teamB
      })
    }
  }

  saveMember = (id, team) => {
    const { teamA, teamB } = this.state
    
    if(team === 1){
      teamA.members = teamA.members.map(member => {
        if(member.id === id) {
          member['saved'] = !member.saved
        }
        return member
      })
      this.setState({
        teamA
      })
    } else {
      teamB.members = teamB.members.map(member => {
        if(member.id === id) {
          member['saved'] = !member.saved
        }
        return member
      })
      this.setState({
        teamB
      })
    }
  }

  removeMember = (id, team) => {
    const { teamA, teamB } = this.state
    
    if(team === 1){
      teamA.members = teamA.members.filter(member => member.id !== id)
      this.setState({
        teamA
      })
    } else {
      teamB.members = teamB.members.filter(member => member.id !== id)
      this.setState({
        teamB
      })
    }
  }

  randomHero =  () => {
    const { herolist, samehero, teamA, teamB } = this.state
    this.randomAlgor(teamA.members, teamB.members, herolist, samehero)
    console.log(teamA, teamB)
    this.setState({
      teamA,
      teamB,
    })
  }

  randomAlgor = (Amembers, Bmembers, herolist, samehero) => {
    console.log(samehero);
    
    if(samehero) {

      const temp = herolist

      Amembers = Amembers.map(member => {
        const filtered = herolist.filter(hero => (hero.job === (parseInt(member.position) + 1)))
        member.heroe = filtered[Math.floor(Math.random() * filtered.length)]
        herolist = herolist.filter(hero => {
          return member.heroe ? (hero.heroid !== member.heroe.heroid) : true
        })
        return member
      })

      herolist = temp
      
      Bmembers = Bmembers.map(member => {
        const filtered = herolist.filter(hero => (hero.job === (parseInt(member.position) + 1)))
        member.heroe = filtered[Math.floor(Math.random() * filtered.length)]
        herolist = herolist.filter(hero => {
          return member.heroe ? (hero.heroid !== member.heroe.heroid) : true
        })
        return member
      })

    } else {
      Amembers = Amembers.map(member => {
        const filtered = herolist.filter(hero => (hero.job === (parseInt(member.position) + 1)))
        member.heroe = filtered[Math.floor(Math.random() * filtered.length)]
        herolist = herolist.filter(hero => {
          return member.heroe ? (hero.heroid !== member.heroe.heroid) : true
        })
        return member
      })
      
      Bmembers = Bmembers.map(member => {
        const filtered = herolist.filter(hero => (hero.job === (parseInt(member.position) + 1)))
        member.heroe = filtered[Math.floor(Math.random() * filtered.length)]
        herolist = herolist.filter(hero => {
          return member.heroe ? (hero.heroid !== member.heroe.heroid) : true
        })
        return member
      })
    }
        this.setState({
          teamA: Amembers,
          teamB: Bmembers
        })
        console.log('list' , herolist)
        
  }

  banHero = (e, id, isBanned) => {
    e.preventDefault()
    if(isBanned) {
      this.setState({
        ban: this.state.ban.filter(hero => hero.heroid != id),
        herolist: [...this.state.herolist, ...Heroes.data.filter(hero => hero.heroid === id)]
      })
    } else {
      this.setState({
        ban: [...this.state.ban, ...Heroes.data.filter(hero => hero.heroid === id)],
        herolist: this.state.herolist.filter(hero => hero.heroid != id)
      })
    }
  }

  randomPosition = (id, team) => {
    const { teamA, teamB } = this.state
    
    if(team === 1){
      teamA.members = teamA.members.map(member => {
        if(member.id === id) {
          member.position = Math.floor(Math.random() * 6)
        }
        return member
      })
      this.setState({
        teamA
      })
    } else {
      teamB.members = teamB.members.map(member => {
        if(member.id === id) {
          member.position = Math.floor(Math.random() * 6)
        }
        return member
      })
      this.setState({
        teamB
      })
    }
  }

  randomPositions = () => {
    const { teamA, teamB } = this.state
    teamA.members = teamA.members.map(member => {
      member.position = Math.floor(Math.random() * 6)
      return member
    })
    teamB.members = teamB.members.map(member => {
      member.position = Math.floor(Math.random() * 6)
      return member
    })

    this.setState({
      teamA,
      teamB
    })
  }

  toggleSameHero = () =>{
    this.setState({
      samehero: !this.state.samehero
    })
  }

  randomTeam = () => {
    const { teamA, teamB } = this.state
    const players = [...teamA.members, ...teamB.members]
    console.log(players)
    let shuffled = this.shuffle(players).map((player, index) => {
      player.id = index
      return player
    })
    let halfWayThough = Math.ceil(shuffled.length / 2)

    teamA.members = shuffled.slice(0, halfWayThough);
    teamB.members = shuffled.slice(halfWayThough, shuffled.length);
    this.setState({
      teamA,
      teamB
    })
  }

  randomTeamAndHero = async () => {
    await this.randomTeam()
    await this.randomHero()
  }

  randomAll = async () => {
    await this.randomTeam()
    await this.randomPositions()
    await this.randomHero()
  }

  shuffle(array) {
    var rand, index = -1,
        length = array.length,
        result = Array(length);
    while (++index < length) {
        rand = Math.floor(Math.random() * (index + 1));
        result[index] = result[rand];
        result[rand] = array[index];
    }
    return result;
  }

  render() {
    const { teamA, teamB, ban, samehero } = this.state
    console.log(ban)
    const { herolist } = this.state
    return (
      <div className="container pb-5">
        <div className="d-flex justify-content-between">
          {
            <Team
              onTyping={this.onTyping.bind(this)}
              saveMember={this.saveMember.bind(this)}
              randomPosition={this.randomPosition.bind(this)}
              removeMember={this.removeMember.bind(this)}
              key={teamA.id}
              positions={positions}
              data={teamA}
              addMember={this.addMember.bind(this)} />
          }
          <div className="mt-5 d-flex flex-column w-50 px-2">
            {
              <Menu 
                randomHero={this.randomHero.bind(this)}
                toggleSameHero={this.toggleSameHero.bind(this)}
                randomTeam={this.randomTeam.bind(this)}
                randomPositions={this.randomPositions.bind(this)}
                randomTeamAndHero={this.randomTeamAndHero.bind(this)}
                randomAll={this.randomAll.bind(this)}
                samehero={samehero}
              />
            }
            { <Herolist banned={ban} banHero={this.banHero.bind(this)} heroes={Heroes.data} /> }
          </div>
          {
            <Team
              onTyping={this.onTyping.bind(this)}
              saveMember={this.saveMember.bind(this)}
              randomPosition={this.randomPosition.bind(this)}
              removeMember={this.removeMember.bind(this)}
              key={teamB.id}
              positions={positions}
              data={teamB}
              addMember={this.addMember.bind(this)} />
          }
        </div>
      </div>
    );
  }
}

export default App;
