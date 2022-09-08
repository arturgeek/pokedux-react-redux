import PokemonCard from "./PokemonCard";
import "./PokemonList.css"

const PokemonList = ({ pokemons }) => {
    return <div className="PokemonList">
        {pokemons.map( (pokemon) => {
            return <PokemonCard 
                name={pokemon.name} 
                image={pokemon.sprites.front_default} 
                types={pokemon.types.map( (type) => { return type.type.name } ).join()}
                key={pokemon.name} 
            />
        })}
    </div>
}

PokemonList.defaultProps = {
    pokemons: Array(10).fill("")
}

export default PokemonList; 