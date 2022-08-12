import { FC } from 'react';
import { IPokemon } from '../../../../types';
import Card from './Card';

interface IProps {
	pokemonList: IPokemon[] | undefined;
	text: string;
}

const PokemonCards: FC<IProps> = ({ pokemonList, text }) => {
	return (
		<div className="flex flex-wrap flex-row justify-center">
			{pokemonList ? (
				pokemonList.map((pokemon: IPokemon) => <Card key={pokemon.id} pokemon={pokemon} />)
			) : (
				<h1>{text}</h1>
			)}
		</div>
	);
};

export default PokemonCards;
