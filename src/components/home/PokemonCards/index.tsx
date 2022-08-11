import { FC } from 'react';
import { IPokemon } from '../../../../types';
import Card from './Card';

interface IProps {
	pokemonList: IPokemon[] | undefined;
}

const PokemonCards: FC<IProps> = ({ pokemonList }) => {
	return (
		<div className="flex flex-wrap flex-row justify-center">
			{pokemonList ? (
				pokemonList.map((pokemon: IPokemon) => <Card key={pokemon.id} pokemon={pokemon} />)
			) : (
				<h1>Im Sorry... He got away!</h1>
			)}
		</div>
	);
};

export default PokemonCards;
