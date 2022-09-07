import { Col } from 'antd';
import Searcher from './components/Searcher';
import PokemonList from './components/PokemonList';
import logo  from './statics/logo.svg'
import getPokemons from './api';
import './App.css';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { setPokemons as setPokemonsActions } from './actions';

function App( { pokemons, setPokemons } ) {
  console.log("🚀 ~ file: App.js ~ line 12 ~ App ~ pokemons", pokemons)

  useEffect( () => {
    const fetchPokemons = async () => { 
      const pokemonsResponse =  await getPokemons() 
      setPokemons(pokemonsResponse);
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

const mapStateToProps = (state) => ({
  pokemons: state.pokemons
});

const mapDispatchToProps = (dispatch) => ({
  setPokemons: (value) => dispatch( setPokemonsActions(value) )
});

export default connect( mapStateToProps, mapDispatchToProps ) (App);
