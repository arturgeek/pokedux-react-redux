import { Col } from 'antd';
import Searcher from './components/Searcher';
import PokemonList from './components/PokemonList';
import logo  from './statics/logo.svg'
import { getPokemons, getPokemonDetails } from './api';
import './App.css';
import { useEffect } from 'react';
import { setPokemons } from './actions';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  
  const pokemons = useSelector( state => state.pokemons );
  const dispatcher = useDispatch();

  useEffect( () => {
    const fetchPokemons = async () => { 
      const pokemonsResponse =  await getPokemons();
      const pokemonsDetailed = await Promise.all( pokemonsResponse.map( (pokemon) => getPokemonDetails(pokemon) ));
      dispatcher(setPokemons(pokemonsDetailed));
    };

    fetchPokemons();
  }, [] )

  return (
    <div className="App">
      <Col span={4} offset={10}>
        <img src={logo} alt="Pokedux" /> 
      </Col>
      <Col span={8} offset={8} >
        <Searcher />
      </Col>
      <PokemonList pokemons={pokemons} />
    </div>
  );
}

export default (App);
