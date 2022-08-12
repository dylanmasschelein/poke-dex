import Image from 'next/image';
import { FC } from 'react';
import { IPokemon } from '../../../../types';

interface IProps {
	pokemon: IPokemon;
}

const SpriteImage: FC<IProps> = ({ pokemon }) => (
	<div className="w-full h-36 flex justify-center z-10 relative">
		<Image
			width={200}
			height={100}
			src={pokemon.sprites.front_default ? pokemon.sprites.front_default : ''}
			alt={`${pokemon.name}`}
			className="h-full absolute "
		/>
	</div>
);

export default SpriteImage;
