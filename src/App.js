import {React, useState} from 'react'

import './App.css';

import {UserPage} from './pages/UserPage'
import {UserActions} from './components/UserActions'


function App() {
  
  const [sortBy, setSortBy] = useState();

  const sorttable = ( userSortBy) => {        
    setSortBy(userSortBy);
    console.log("userSortBy "+ userSortBy);
  }

  return (
    <div className="App">      
      {sortBy && <div className="header">Sorting by {sortBy} </div>}
      <UserActions cbfunction={sorttable}/>      
      <UserPage sortBy={sortBy}/>
      
    </div>
  );
}

export default App;
