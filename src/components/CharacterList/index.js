import Character from "../Character"
import './characterlist.css'

function CharacterList({ characters }) {
    console.log(characters)
    return (
        <div className="character-list">
            <h2>Saved Characters</h2>
            {characters.map((character) => {
                return <Character
                    key={character.url}
                    name={character.name}
                    height={character.height}
                    mass={character.mass}
                    hair_color={character.hair_color}
                    eye_color={character.eye_color}
                    homeworld={character.homeworld}
                    films={character.films}
                />
            })}
        </div>
    )
}

export default CharacterList