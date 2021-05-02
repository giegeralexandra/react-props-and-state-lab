import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {
    const cards = this.props.pets.map(pet => {
      <Pet pet={pet} key={pet.id} onAdoptPet={this.props.onAdoptPet}/>
    })
    return <div>{cards}</div>;

  }
}

export default PetBrowser
