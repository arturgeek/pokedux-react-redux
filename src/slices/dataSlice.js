import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getPokemonDetails, getPokemons } from "../api";
import { setLoading } from "./uiSlice";

const initialState = {
    pokemons: [],
    searchedValue: ""
}

export const fetchPokemonWithDetails = createAsyncThunk(
    "data/fetchPokemonWithDetails",
    async (_, {dispatch}) => {
        dispatch( setLoading(true));
        const pokemonsResponse = await getPokemons();
        const pokemonsDetailed = await Promise.all( pokemonsResponse.map( (pokemon) => getPokemonDetails(pokemon) ));
        dispatch( setPokemons(pokemonsDetailed) );
        dispatch( setLoading(false));
    }
);

export const dataSlice = createSlice({
    name: "data",
    initialState,
    reducers: {
        setPokemons: (state, action) => {
            console.log(action);
            state.pokemons = action.payload;
        },
        setFavorite: (state, action) => {
            const currentPokemonIndex = state.pokemons.findIndex( (pokemon) => {
                return pokemon.id === action.payload.pokemonId 
            });

            if( currentPokemonIndex >= 0 ){
                const isFavorite = state.pokemons[currentPokemonIndex].favorite;
                state.pokemons[currentPokemonIndex].favorite = !isFavorite;
            }
        },
        setSearchedValue: (state, action) => {
            state.searchedValue = action.payload;
        }
    }
});

export const { setFavorite, setPokemons, setSearchedValue } = dataSlice.actions;
export default dataSlice.reducer;