import Link from 'next/link';
import { FC } from 'react';
import { IPokemon } from '../../../../../types';
import { capitalizeFirstLetter, getRGBAValue } from '../../../../../utils/global_functions';
import SpriteImage from './SpriteImage';
import Types from './Types';

interface IProps {
	pokemon: IPokemon;
}

const Card: FC<IProps> = ({ pokemon }) => (
	<Link href={`/pokemon/${pokemon.name}`}>
		<div
			className="w-45 max-w-xs h-36 p-1 m-1 rounded-xl flex flex-col relative shadow cursor-pointer hover:scale-105 transition-all"
			style={{ backgroundColor: `${getRGBAValue(pokemon.color)}` }}
		>
			<h3 className="md:text-2xl mx-2 font-black text-white tracking-wider">
				{capitalizeFirstLetter(pokemon.name)}
			</h3>

			<Types pokemon={pokemon} />
			<SpriteImage pokemon={pokemon} />
		</div>
	</Link>
);

export default Card;
