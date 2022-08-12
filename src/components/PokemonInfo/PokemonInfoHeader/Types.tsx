import { FC } from 'react';
import { INestedType, IPokemon } from '../../../../types';
import { capitalizeFirstLetter } from '../../../../utils/global_functions';

interface IProps {
	pokemon: IPokemon;
}

const Types: FC<IProps> = ({ pokemon }) => (
	<div className="flex  mt-1">
		{pokemon.types.map(({ type }: INestedType, idx: number) => (
			<span
				key={idx}
				className="text-white text-sm py-0.5 px-2 mt-2 w-fit text-center rounded-5xl mr-2 font-medium tracking-wide"
				style={{
					backgroundColor: `${pokemon.color}`,
					color: `${pokemon.color === 'white' ? 'black' : undefined}`
				}}
			>
				{idx > 0 && ' '}
				{capitalizeFirstLetter(type.name)}
			</span>
		))}
	</div>
);

export default Types;
