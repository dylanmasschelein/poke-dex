import { FC } from 'react';
import { IPokemon, IStat } from '../../../../types';
import { capitalizeFirstLetter } from '../../../../utils/global_functions';
import StatsBar from '../../common/StatsBar';

interface IProps {
	pokemon: IPokemon;
}

const Stats: FC<IProps> = ({ pokemon }) => (
	<div className="border-b border-[#D3D3D3] py-5">
		<h2 className="font-bold text-lg mb-2">Stats</h2>
		<div>
			{pokemon.stats.map((stat: IStat, idx: number) => (
				<div key={`${stat.stat.name}-${idx}`} className="flex items-center">
					<h3 className="w-32 mr-auto text-sm text-gray font-">{capitalizeFirstLetter(stat.stat.name)}:</h3>
					<StatsBar stat={stat.base_stat} />
				</div>
			))}
		</div>
	</div>
);

export default Stats;
