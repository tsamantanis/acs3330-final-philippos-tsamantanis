import { useState } from 'react'
import './starwars.css';

function StarWars() {
    const [id, setId] = useState(1)
    const [character, setCharacter] = useState(null) 
    
    const makeRequest = () => {
        fetch('https://swapi.dev/api/people/' + id)
            .then(res => res.json())
            .then(data => setCharacter(data.name))
    }

  return (
    <div className="starwars">
        <input 
            type="number" 
            placeholder="1"
            min="1" 
            max="83"
            onChange={(e) => setId(e.target.value)}
        />
        <button
            onClick={makeRequest}
        >
            Search
        </button>
        { character && <h3>{character}</h3>}
    </div>
  );
}

export default StarWars;