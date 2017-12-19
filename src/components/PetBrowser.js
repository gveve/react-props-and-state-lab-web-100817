import React from 'react';

import Pet from './Pet';

class PetBrowser extends React.Component {

  petRender = (pets) => {
    // console.log(this.props.pets)
    console.log('pet render!');
    return this.props.pets.map(function(pet){
      return <Pet
      pet={pet}
      // onAdoptPet={this.props.onAdoptPet}
      // isAdopted={this.props.adoptedPets.includes(pet)}
      />
    })
  }

  render() {
    return (
      <div className="ui cards">
      <p> Hey I'm here! </p>
        {this.petRender()}
      </div>
    );
  }
}

export default PetBrowser;
