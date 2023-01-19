import React from 'react'
import Pokecard from './Pokecard'

const Pokedex = (props) => {
    return (
        <div>
            {props.map(p => {
                <Pokecard name={p.name} type={p.type} base_experience={p.base_experience} id={p.id}/>
            })}
        </div>
    )
}

export default Pokedex