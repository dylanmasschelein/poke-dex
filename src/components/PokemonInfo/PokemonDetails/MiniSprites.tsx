import Image from 'next/image';
import { FC } from 'react';
import { IPokemon } from '../../../../types';
import { trimObjects } from '../../../../utils/global_functions';

interface IProps {
	pokemon: IPokemon;
}

const MiniSprites: FC<IProps> = ({ pokemon }) => (
	<div className="border-b border-[#D3D3D3] py-5">
		<h2 className="font-bold text-lg mb-2">Sprites</h2>
		<div className="flex flex-wrap justify-center">
			{Object.values(pokemon.sprites).map((value: string, idx: number) => {
				if (value && typeof value !== 'object') {
					return (
						<div key={value} className="rounded-full">
							<Image width={100} height={100} key={`${value}-${idx}`} src={value} alt={pokemon.name} />
						</div>
					);
				}
			})}
		</div>
	</div>
);

export default MiniSprites;
