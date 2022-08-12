import { FC } from 'react';
import { IAbility, IPokemon } from '../../../../../types';
import { capitalizeFirstLetter } from '../../../../../utils/global_functions';

interface IProps {
	pokemon: IPokemon;
}

const Ability: FC<IProps> = ({ pokemon }) => (
	<div className="flex w-full">
		<h3 className="w-32 mr-auto text-sm text-gray">Abilities:</h3>
		{pokemon.abilities.map((ability: IAbility, idx: number) => (
			<span
				key={`${ability}-${idx}`}
				style={{ backgroundColor: `${pokemon.color}` }}
				className="text-xs text-white ml-2 w-fit py-1 px-2 mt-1 rounded-5xl"
			>
				{capitalizeFirstLetter(ability.ability.name)}
			</span>
		))}
	</div>
);
export default Ability;
