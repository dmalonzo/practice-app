import { Component } from 'react';

import logo from './logo.svg';
import './App.css';



class App extends Component{

constructor(){
  super();

  this.state = {
    monsters: [],
    searchField: '',
  };

  console.log('constructor');
}

componentDidMount(){
  fetch('http://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then((users) => this.setState(() => {
      return {monsters: users,
             }
    },
    () => {
      console.log(this.state);
    }
    ));
}

onSearchChange = (event) => {
  const searchField = event.target.value.toLocaleLowerCase();
  this.setState({searchField});
  console.log(this.state);
}


render() {
  const { monsters, searchField} = this.state;
  const { onSearchChange } = this;
  const filteredMonsters = monsters.filter(

        (monster) => {
        return monster.name.toLocaleLowerCase().includes(searchField.toLowerCase());
        }
  )
  return (
    <div className="App">
      <input className='search-box' type='search' placeholder='Search Monsters' onChange={ onSearchChange
      }/>
      {
        filteredMonsters.map((monster)=>{
          return <div key={monster.id}><h1>{monster.name}</h1></div>;
        })
      }
    </div>
  );
}
}

export default App;
