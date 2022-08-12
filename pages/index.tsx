import type { GetServerSideProps } from 'next';
import { FC } from 'react';
import { fetchInitialPokemon, fetchPokemonList } from '../src/api_frontend';
import Home from '../src/components/home';
import { IPokemon } from '../types';
export interface IHomePageProps {
	initialPokemonList: IPokemon[] | undefined;
	pokemonNameList: string[];
}

export const getServerSideProps: GetServerSideProps = async () => {
	const pokemonNameList: string[] | undefined = await fetchInitialPokemon();

	const initialPokemonList: IPokemon[] | undefined = await fetchPokemonList();

	return {
		props: { initialPokemonList, pokemonNameList }
	};
};

const HomePage: FC<IHomePageProps> = ({ initialPokemonList, pokemonNameList }) => {
	return <Home initialPokemonList={initialPokemonList} pokemonNameList={pokemonNameList} />;
};

export default HomePage;
