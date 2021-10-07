function Character({name, height, mass, hair_color, eye_color, homeworld}) {
    return (
        <div className="character">
            <h3>{name}</h3>
            <p>Height: {height}cm</p>
            <p>Mass: {mass}kg</p>
            <p>Hair Color: {hair_color}</p>
            <p>Eye Color: {eye_color}</p>
            { homeworld &&
                <>
                    <h5>Homeoworld</h5>
                    <p><small>Name: {homeworld.name}</small></p>
                    <p><small>Climate: {homeworld.climate}</small></p>
                    <p><small>Population: {homeworld.population}</small></p>
                </>
            }
        </div>
    )
}

export default Character