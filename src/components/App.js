import React from 'react';

import Filters from './Filters';
import PetBrowser from './PetBrowser';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      pets: [],
      adoptedPets: [],
      filters: {
        type: 'all',
      }
    };
  }

  componentDidMount(){
    fetch('/api/pets').then(res => res.json()).then(allPets => {this.setState({pets: allPets})})
    console.log("Component!");
  }

  changeFilter = type => {
    this.setState({
      filters: Object.assign({}, this.state.filters, {
        type: type
      })
    })
    console.log('hey!');
  }

  findPetsClick = () => {
    let url = `/api/pets?type=${this.state.filters.type}`
    console.log(url);
    fetch(url).then(res => res.json()).then(allPets => {this.setState({pets: allPets})})
  }

  adoptPet = (id) => {
    this.setState({
      adoptedPets: [...this.state.adoptedPets, id]
    })
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
              <Filters filters={this.state.filters} onChangeType={this.changeFilter} onFindPetsClick={this.findPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser
              pets={this.state.pets}
              onAdoptPet={this.adoptPet}
              adoptedPets={this.state.adoptedPets}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
