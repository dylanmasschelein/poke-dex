import type { GetServerSideProps } from 'next';
import React, { FC } from 'react';
import { fetchPokemon } from '../../src/api_frontend';
import { IPokemon } from '../../types';
import PokemonInfo from '../../src/components/pokemonInfo';

interface IProps {
	pokemon: IPokemon;
}

export const getServerSideProps: GetServerSideProps = async (context: any) => {
	const pokemonName = context.params.name;
	const pokemon = await fetchPokemon(pokemonName);

	return {
		props: { pokemon }
	};
};

const Pokemon: FC<IProps> = ({ pokemon }) => {
	return <PokemonInfo pokemon={pokemon} />;
};

export default Pokemon;
