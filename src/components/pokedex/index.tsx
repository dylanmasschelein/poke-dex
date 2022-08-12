import { FC, useEffect, useState } from 'react';
import NavBar from '../common/NavBar';
import PokemonCards from '../home/PokemonCards';
import { getFromLocalStorage } from '../../../utils/global_functions';
import { IPokemon } from '../../../types';

interface IProps {}

const Pokedex: FC<IProps> = () => {
	const [personalPokedex, setPersonalPokedex] = useState<IPokemon[] | undefined>(undefined);

	useEffect(() => {
        // Protect from window not being available on SSR
		if (window) {
			const storage = getFromLocalStorage();
			setPersonalPokedex(storage);
		}
	}, []);

	return (
		<section
			className="pb-10"
			style={{ background: 'linear-gradient(90deg, rgba(0,117,190,1) 0%, rgba(255,204,0,1) 100%)' }}
		>
			<div className="flex flex-col w-11/12 md:w-full m-auto mb-5" style={{ maxWidth: '640px' }}>
				<NavBar hideRight />
				<h1 className="text-mat-black text-3xl font-bold">Your Pokedex!</h1>
			</div>
			<PokemonCards pokemonList={personalPokedex} />
		</section>
	);
};

export default Pokedex;
