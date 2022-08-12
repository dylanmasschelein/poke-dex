import { FC, SyntheticEvent } from 'react';
import { IPokemon } from '../../../types';
import { getRGBAValue } from '../../../utils/global_functions';
import NavBar from '../common/NavBar';
import PokemonDetails from './PokemonDetails';
import PokemonInfoHeader from './PokemonInfoHeader';

interface IProps {
	pokemon: IPokemon;
}

const PokemonInfo: FC<IProps> = ({ pokemon }) => (
	<>
		<section className="px-5 relative" style={{ backgroundColor: `${getRGBAValue(pokemon.color)}` }}>
			<NavBar />
			<PokemonInfoHeader pokemon={pokemon} />
		</section>
		<PokemonDetails pokemon={pokemon} />
	</>
);

export default PokemonInfo;
