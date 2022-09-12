import { Col, Spin } from 'antd';
import Searcher from './components/Searcher';
import PokemonList from './components/PokemonList';
import logo  from './statics/logo.svg'
import { getPokemons } from './api';
import './App.css';
import { useEffect } from 'react';
import { getPokemonsWithDetails, setLoading } from './actions';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  
  const pokemons = useSelector( (state) => state.get("pokemons") ).toJS();
  const loading = useSelector( (state) => state.get("loading") );
  const dispatch = useDispatch();

  useEffect( () => {
    const fetchPokemons = async () => { 
      dispatch( setLoading(true) )
      const pokemonsResponse =  await getPokemons();
      dispatch(getPokemonsWithDetails(pokemonsResponse));
      dispatch(setLoading(false) )
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
      { loading ?
        (<Col>
          <Spin spinning size='large' className='loader' />
        </Col>)
        :
        (<PokemonList pokemons={pokemons} />)
      }
    </div>
  );
}

export default (App);
