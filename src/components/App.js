import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

 

  fetchingPets = () => {
    let url = '/api/pets'
    if (this.state.filters.type !== 'all'){
      url = `/api/pets?type=${this.state.filters.type}`
    }
    fetch(url)
    .then(resp => resp.json())
    .then(allPets => this.setState({pets: allPets}))
  }

  onChangeType = (event) => {
    this.setState({
      filters:{
        ...this.state.filters,
        type: event.target.value
      }

    })

  }

  onAdoptPet = (id) => {
    const fetchedPets = this.state.pets.map( pet => {
      return (pet.id === id) ? {...pet, isAdopted: true} : pet;
    })

    this.setState({pets: fetchedPets})

  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.fetchingPets}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.fetchedPets} onAdoptPet={this.onAdoptPet} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
