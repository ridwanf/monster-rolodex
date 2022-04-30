import { useState, useEffect } from "react";
import "./App.css";
import CardList from "./components/card-list";
import SearchBox from "./components/search-box";

import React from 'react'

const App = () => {
  console.log('render')
  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);
  useEffect(() => {
    async function callApi() {
      const response = await fetch('https://jsonplaceholder.typicode.com/users')
      const data =  await response.json()
      setMonsters(data);
    }
    callApi()
  }, [])

  useEffect(() => {
     const filteredMonstersResult = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    })
    setFilteredMonsters(filteredMonstersResult)
  }, [monsters, searchField])

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLowerCase();
    setSearchField(searchFieldString)
  }
  
    
  return (
    <div className="App">
        <h1 className="app-title">Monster Rolodex</h1>
        <SearchBox 
          onChangeHandler={onSearchChange} 
          className='search-box'
          placeholder='search the monster'/>
        <CardList  monsters={filteredMonsters} />
      </div>
  )
}


// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       searchField: '',
//       monsters:[],
//     };
//   }
//   async componentDidMount() {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data =  await response.json()
//     this.setState( () => {
//       return { monsters: data}
//     })
//   }

//   onSearchChange = (event) => {
//     const searchField = event.target.value.toLowerCase();
//     this.setState(() => {
//       return {searchField}
//     })
//   }
  
//   render() {
//     const {monsters, searchField} = this.state;
//     const {onSearchChange} = this;
//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLowerCase().includes(searchField);
//     })


//     return (
//       <div className="App">
//         <h1 className="app-title">Monster Rolodex</h1>
//         <SearchBox 
//           onChangeHandler={onSearchChange} 
//           className='search-box'
//           placeholder='search the monster'/>
//         <CardList  monsters={filteredMonsters} />
//       </div>
//     );
//   }
// }

export default App;
