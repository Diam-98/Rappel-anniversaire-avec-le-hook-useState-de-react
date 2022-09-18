import React, {useState} from 'react';
import './App.css';
import List from './List';
import data from "./data";

function App() {

  const [people, setPeople] = useState(data);

  const emptyList = () => {
    setPeople([]);
  }

  return (
    <main>
      <h3>Anniversaire de {people.length} Personnes</h3>
      <List people = {people}/>
      <button onClick={emptyList}>Effacer la liste</button>
    </main>
  );
}

export default App;
