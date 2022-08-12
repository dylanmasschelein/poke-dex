import Image from 'next/image';
import { FC } from 'react';
import { IPokemon } from '../../../../../types';

interface IProps {
	pokemon: IPokemon;
}

const SpriteImage: FC<IProps> = ({ pokemon }) => (
	<div className="absolute bottom-[-15px] right-[-15px] w-32 ">
		<Image
			width={100}
			height={100}
			src={pokemon.sprites.front_default || ''}
			alt={`${pokemon.name}`}
			className="object-scale-down"
		/>
	</div>
);

export default SpriteImage;
