import { FC } from 'react';
import { IPokemon } from '../../../../types';
import BasicDetails from './BasicDetails';
import MiniSprites from './MiniSprites';
import Stats from './Stats';

interface IProps {
	pokemon: IPokemon;
}

const PokemonDetails: FC<IProps> = ({ pokemon }) => (
	<section className="px-5 border-[#D3D3D3]">
		<div>
			<BasicDetails pokemon={pokemon} />
			<Stats pokemon={pokemon} />
		</div>
		<MiniSprites pokemon={pokemon} />
	</section>
);

export default PokemonDetails;
