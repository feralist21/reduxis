import { api } from '../api';

const pokemonApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getPokemonByName: builder.query({
            query: (name) => `https://pokeapi.co/api/v2/pokemon/${name}`,
        }),
    }),
});

const { useGetPokemonByNameQuery } = pokemonApi;

export { useGetPokemonByNameQuery };
