function Character({name, height, mass, hair_color, eye_color, homeworld, films}) {
    return (
        <div className="character">
            <h3>{name}</h3>
            <p>Height: {height}cm</p>
            <p>Mass: {mass}kg</p>
            <p>Hair Color: {hair_color}</p>
            <p>Eye Color: {eye_color}</p>
            <h5>Homeoworld</h5>
            <p><small>Name: {homeworld.name}</small></p>
            <h5>Films</h5>
            {films.map(film => <p key={film.title + name}><small>{film.title}</small></p>)}
        </div>
    )
}

export default Character