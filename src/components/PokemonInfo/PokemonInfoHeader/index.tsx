import { FC, SyntheticEvent, useEffect, useState } from 'react';
import { IPokemon } from '../../../../types';
import { capitalizeFirstLetter } from '../../../../utils/global_functions';
import SpriteImage from './SpriteImage';
import Types from './Types';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CloseIcon from '@mui/icons-material/Close';
import { ISaveCaughtPkm } from '../../../../types/functions';

interface IProps {
	pokemon: IPokemon;
	removeFromPokedex: (p: IPokemon) => void;
	addToPokeDex: (p: IPokemon) => void;
}

const PokemonInfoHeader: FC<IProps> = ({ pokemon, removeFromPokedex, addToPokeDex }) => {
	// HACK, needs work
	const data: any = localStorage.getItem('caughtPokemon');
	const parsed: any = JSON.parse(data);
	const pokemonInPokedex = parsed ? parsed.find((p: IPokemon) => p.name === pokemon.name) : undefined;
	const [trigger, setTrigger] = useState(false);

	const handleTrigger = () => setTrigger(prev => !prev);
	const pokedexAction = () => {
		if (pokemonInPokedex) {
			removeFromPokedex(pokemon);
		} else {
			addToPokeDex(pokemon);
		}
		handleTrigger();
	};

	useEffect(() => {}, [trigger]);
	return (
		<div>
			<div className="flex justify-between items-baseline">
				<h1 className=" m-0 text-mat-black text-3xl font-bold text-white">
					{capitalizeFirstLetter(pokemon.name)}
				</h1>
				<span className="font-bold text-dark-blue">#{pokemon.id}</span>
			</div>
			<Types pokemon={pokemon} />
			<p
				className="flex z-20 items-center transition-all absolute bottom-[5px] cursor-pointer bg-blue rounded-5xl py-1 px-2 hover:scale-110"
				onClick={pokedexAction}
			>
				{pokemonInPokedex ? 'Caught' : 'Uncaught'}
				{pokemonInPokedex ? <CheckCircleIcon sx={{ color: 'green' }} /> : <CloseIcon sx={{ color: 'red' }} />}
			</p>
			<SpriteImage pokemon={pokemon} />
		</div>
	);
};
export default PokemonInfoHeader;
