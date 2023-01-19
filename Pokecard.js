import React from 'react'

const Pokecard = ({ name, type, base_experience, id }) => {
    let img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png.`
    return (
        <div>
            <h4>{name}</h4>
            <img src={img}></img>
            <p>{type}</p>
            <p>{base_experience}</p>
        </div>
    )
}

export default Pokecard