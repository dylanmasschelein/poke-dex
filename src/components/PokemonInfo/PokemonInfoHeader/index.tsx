import { FC, useState } from 'react';
import { IPokemon } from '../../../../types';
import { capitalizeFirstLetter, getFromLocalStorage } from '../../../../utils/global_functions';
import SpriteImage from './SpriteImage';
import Types from './Types';
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';

interface IProps {
	pokemon: IPokemon;
}

const PokemonInfoHeader: FC<IProps> = ({ pokemon }) => {
	const [pokedex, setPokedex] = useState<IPokemon[] | undefined>(undefined);
	const pokemonInPokedex = pokedex ? pokedex.find((p: IPokemon) => p.name === pokemon.name) : undefined;

	const addToPokeDex = (pokemon: IPokemon): void => {
		const pokedex: IPokemon[] | undefined = getFromLocalStorage();
		let newPokedex;

		if (pokedex) {
			const updatedPokedex = [...pokedex, pokemon];

			localStorage.setItem('pokedex', JSON.stringify(updatedPokedex));
			newPokedex = getFromLocalStorage();
		} else {
			localStorage.setItem('pokedex', JSON.stringify([pokemon]));
			newPokedex = getFromLocalStorage();
		}

		setPokedex(newPokedex);
	};

	const removeFromPokedex = (pokemon: IPokemon): void => {
		const filteredPokedex = pokedex ? pokedex.filter((p: IPokemon) => p.name !== pokemon.name) : undefined;
		localStorage.setItem('pokedex', JSON.stringify(filteredPokedex));

		setPokedex(filteredPokedex);
	};

	const pokedexAction = (): void => {
		if (pokemonInPokedex) {
			removeFromPokedex(pokemon);
		} else {
			addToPokeDex(pokemon);
		}
	};

	return (
		<div>
			<div className="flex justify-between items-baseline">
				<h1 className=" m-0 text-mat-black text-3xl font-bold text-white">
					{capitalizeFirstLetter(pokemon.name)}
				</h1>
				<span className="font-bold text-dark-blue">#{pokemon.id}</span>
			</div>
			<Types pokemon={pokemon} />
			<div
				className="bg-white w-32 transition-all absolute bottom-[10px] cursor-pointer rounded-full z-20 hover:scale-110 p-1"
				onClick={pokedexAction}
			>
				<CatchingPokemonIcon sx={{ fontSize: '60px', color: `${pokemonInPokedex ? 'green' : 'red'}` }} />
				<span>{pokemonInPokedex ? 'Caught' : 'Catch'}</span>
			</div>
			<SpriteImage pokemon={pokemon} />
		</div>
	);
};
export default PokemonInfoHeader;
