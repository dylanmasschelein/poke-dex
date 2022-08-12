import { FC, SyntheticEvent } from 'react';
import { IPokemon } from '../../../types';
import { getRGBAValue } from '../../../utils/global_functions';
import NavBar from '../common/NavBar';
import PokemonDetails from './PokemonDetails';
import PokemonInfoHeader from './PokemonInfoHeader';

interface IProps {
	pokemon: IPokemon;
}

const PokemonInfo: FC<IProps> = ({ pokemon }) => {
	const addToPokeDex = (pokemon: IPokemon) => {
		const data: any = localStorage.getItem('caughtPokemon');
		const parsedPokedex = JSON.parse(data);
		if (parsedPokedex) {
			const newPokedex = [...parsedPokedex, pokemon];
			localStorage.setItem('caughtPokemon', JSON.stringify(newPokedex));
		} else {
			localStorage.setItem('caughtPokemon', JSON.stringify([pokemon]));
		}
	};

	const removeFromPokedex = (pokemon: IPokemon) => {
		const data: any = localStorage.getItem('caughtPokemon');
		const parsedPokedex = JSON.parse(data);

		const newPokedex = parsedPokedex.filter((p: IPokemon) => p.name !== pokemon.name);
		localStorage.setItem('caughtPokemon', JSON.stringify(newPokedex));
	};

	return (
		<>
			<section className="px-5 relative" style={{ backgroundColor: `${getRGBAValue(pokemon.color)}` }}>
				<NavBar />
				<PokemonInfoHeader
					pokemon={pokemon}
					addToPokeDex={addToPokeDex}
					removeFromPokedex={removeFromPokedex}
				/>
			</section>
			<PokemonDetails pokemon={pokemon} />
		</>
	);
};

export default PokemonInfo;
