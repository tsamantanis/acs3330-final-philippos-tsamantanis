import { useState } from 'react'
import Character from '../Character';
import CharacterList from '../CharacterList';
import './starwars.css';

function StarWars() {
    const [id, setId] = useState(1)
    const [character, setCharacter] = useState(null) 
    const [characterList, setCharacterList] = useState([])
    const [error, setError] = useState(null)

    function validate() {
        return parseInt(id) > 0 && parseInt(id) < 84 && parseInt(id) !== 17
    }

    const makeRequest = async () => {
        if (validate()) {
            const c = await fetch('https://swapi.dev/api/people/' + id)
            const data = await c.json()
            const h = await fetch(data.homeworld)
            const home = await h.json()
            data.homeworld = home
            setCharacter(data)
        }
        else setError("Invalid id")
    }

    function handleSave() {
        let found = false
        for (let i = 0; i < characterList.length; i += 1) {
            if (character.url === characterList[i].url) {
                found =  true
            }
        }

        if (!found) setCharacterList([...characterList, character])
        setCharacter(null)
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
        { !error && character &&
            <Character
                name={character.name}
                height={character.height}
                mass={character.mass}
                hair_color={character.hair_color}
                eye_color={character.eye_color}
            />
        }
        { !error && character &&
            <button
                onClick={() => handleSave()}
            >
                Save
            </button>
        }
        { characterList.length > 0 && <hr />}
        { characterList.length > 0 && 
            <CharacterList
                characters={characterList}
            />
        }
    </div>
  );
}

export default StarWars;