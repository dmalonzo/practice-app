import { Component } from 'react';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import logo from './logo.svg';
import './App.css';



class App extends Component{

constructor(){
  super();

  this.state = {
    monsters: [],
    searchField: '',
  };


}

componentDidMount(){
  fetch('http://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then((users) => this.setState(() => {
      return {monsters: users,
             }
    },

    ));
}



onSearchChange = (event) => {
  const searchField = event.target.value.toLocaleLowerCase();
  this.setState({searchField});

}


render() {
  console.log('poggers desu');

  const { monsters, searchField} = this.state;
  const { onSearchChange } = this;
  const filteredMonsters = monsters.filter(

        (monster) => {
        return monster.name.toLocaleLowerCase().includes(searchField.toLocaleLowerCase());
        }
  )
  return (
    <div className="App">
      <h1 classname='title'>Monsters Rolodex</h1>
      <SearchBox onChangeHandler={onSearchChange} placeholder='search monsters' className='monsters-search-box'/>
      <CardList monsters={filteredMonsters}/>

    </div>
    
  );


}
}

export default App;
