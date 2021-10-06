function Character({name, height, mass, hair_color, eye_color}) {
    return (
        <div className="character">
            <h3>{name}</h3>
            <p>Height: {height}cm</p>
            <p>Mass: {mass}kg</p>
            <p>Hair Color: {hair_color}</p>
            <p>Eye Color: {eye_color}</p>
        </div>
    )
}

export default Character