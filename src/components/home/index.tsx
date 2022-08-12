import { useRouter } from 'next/router';
import { FC, FormEvent, useCallback, useEffect, useState } from 'react';
import { IHomePageProps } from '../../../pages';
import { IPokemon } from '../../../types';
import { fetchPokemonList } from '../../api_frontend';

import HomeHeader from './HomeHeader';
import PokemonCards from './PokemonCards';

const Home: FC<IHomePageProps> = ({ initialPokemonList, pokemonNameList }) => {
	const [pokemonList, setPokemonList] = useState<IPokemon[] | undefined>(initialPokemonList);
	const [selectedPokemonName, setSelectedPokemonName] = useState<string>('');
	const [searchList, setSearchList] = useState<string[]>([]);
	const [search, setSearch] = useState<string>('');
	const [dropdown, setDropdown] = useState<boolean>(false);
	const [loading, setLoading] = useState<boolean>(false);

	const router = useRouter();

	const getRandomPokemon = useCallback(async (): Promise<void> => {
		setLoading(true);
		const randomList = await fetchPokemonList();
		setPokemonList(randomList);
		setLoading(false);
	}, []);

	const handleSubmit = async (e: FormEvent, pokemonName: string): Promise<void> => {
		e.preventDefault();
		router.push(`/pokemon/${pokemonName}`);
	};

	const handleSearch = (value: string): void => {
		if (!dropdown) setDropdown(true);
		setSearch(value);
	};

	const filteredData = (): void => {
		const filtered: string[] = !search
			? []
			: pokemonNameList.filter(pokemon => pokemon.toLowerCase().includes(search.toLocaleLowerCase()));
		if (filtered.length === 0) setDropdown(false);
		setSearchList(filtered);
	};

	const handleOptionClick = useCallback((poke: string): void => {
		setSelectedPokemonName(poke);
		setSearch(poke);
		setDropdown(false);
	}, []);

	useEffect(() => {
		filteredData();
	}, [search]);

	return (
		<div
			className="flex flex-col items-center h-m-screen p-0 pb-5"
			style={{
				background: 'linear-gradient(90deg, rgba(0,117,190,1) 0%, rgba(255,204,0,1) 100%)',
				minHeight: '100vh'
			}}
		>
			<HomeHeader
				handleSubmit={handleSubmit}
				search={search}
				handleSearch={handleSearch}
				selectedPokemonName={selectedPokemonName}
				dropdown={dropdown}
				searchList={searchList}
				handleOptionClick={handleOptionClick}
				getRandomPokemon={getRandomPokemon}
				loading={loading}
			/>

			<PokemonCards pokemonList={pokemonList} text="I'm sorry... the Pokemon got away! :)" />
		</div>
	);
};

export default Home;
