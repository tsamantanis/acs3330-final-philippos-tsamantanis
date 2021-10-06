import { useState } from 'react'
import './starwars.css';

function StarWars() {
    const [id, setId] = useState(1)
    const [character, setCharacter] = useState(null) 
    const [error, setError] = useState(null)

    function validate() {
        return parseInt(id) > 0 && parseInt(id) < 84 && parseInt(id) !== 17
    }

    const makeRequest = () => {
        if (validate())
            fetch('https://swapi.dev/api/people/' + id)
                .then(res => res.json())
                .then(data => setCharacter(data.name))
        else setError("Invalid id")
    }

  return (
    <div className="starwars">
        <input 
            type="number" 
            placeholder="1"
            min="1" 
            max="83"
            onChange={(e) => {setId(e.target.value); setError(null)}}
        />
        <button
            onClick={makeRequest}
        >
            Search
        </button>
        { error && <span className="text-error">{error}</span>}
        { !error && character && <h3>{character}</h3>}
    </div>
  );
}

export default StarWars;