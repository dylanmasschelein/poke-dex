import { FC } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';

interface IProps {
	backFunc?: any;
	pokemonFunc: any;
}

const NavBar: FC<IProps> = ({ backFunc, pokemonFunc }) => (
	<div className="py-3 flex justify-between ">
		<ArrowBackIcon
			className={`${!backFunc ? 'hidden' : undefined}`}
			onClick={backFunc}
			style={{ visibility: !backFunc ? 'hidden' : undefined }}
		/>
		<div className="flex items-center text-sm cursor-pointer" onClick={pokemonFunc}>
			<CatchingPokemonIcon className="" />
			<p>Pokedex</p>
		</div>
	</div>
);

export default NavBar;
