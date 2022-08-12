import { FC } from 'react';

import { IPokemon } from '../../../../../types';
import { capitalizeFirstLetter } from '../../../../../utils/global_functions';
import StatsBar from '../../../common/StatsBar';
import Ability from './Ability';

interface IProps {
	pokemon: IPokemon;
}

const BasicDetails: FC<IProps> = ({ pokemon }) => (
	<div className="border-b border-[#D3D3D3] py-5">
		<h2 className="font-bold text-lg mb-2">About</h2>

		{/* Name */}
		<div className="flex w-full">
			<h3 className="w-32 mr-auto text-sm text-gray">Species:</h3>
			<span className="">{capitalizeFirstLetter(pokemon.species.name)}</span>
		</div>

		{/* Experience */}
		<div className="flex w-full items-center">
			<h3 className="w-32 mr-auto text-sm text-gray">Base-experience:</h3>
			<StatsBar stat={pokemon.base_experience} />
		</div>

		{/* Height */}
		<div className="flex w-full">
			<h3 className="w-32 mr-auto text-sm text-gray">Height:</h3>
			<span>{pokemon.height}</span>
		</div>

		{/* Weight */}
		<div className="flex w-full">
			<h3 className="w-32 mr-auto text-sm text-gray">Weight:</h3>
			<span>{pokemon.weight}</span>
		</div>

		<Ability pokemon={pokemon} />
	</div>
);

export default BasicDetails;
