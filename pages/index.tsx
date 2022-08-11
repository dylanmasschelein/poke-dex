import type { GetServerSideProps } from 'next';
import { FC } from 'react';
import { fetchInitialPokemon, fetchPokemonList } from '../src/api_frontend';
import { IPokemon } from '../types';
interface IProps {
	initialPokemonList: IPokemon[];
	namesList: string[];
}

export const getServerSideProps: GetServerSideProps = async () => {
	const namesList: string[] = await fetchInitialPokemon();

	const initialPokemonList: IPokemon[] = await fetchPokemonList();

	return {
		props: { initialPokemonList, namesList }
	};
};

const HomePage: FC<IProps> = ({ initialPokemonList, namesList }) => {
	console.log(initialPokemonList, namesList);
	return <h1>POKEMAN</h1>;
};

export default HomePage;
