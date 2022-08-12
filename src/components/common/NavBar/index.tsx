import { FC } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import Link from 'next/link';

interface IProps {
	hide?: boolean;
}

const NavBar: FC<IProps> = ({ hide }) => (
	<div className="py-3 flex justify-between ">
		<Link href="/">
			<ArrowBackIcon className="cursor-pointer" style={{ visibility: hide ? 'hidden' : undefined }} />
		</Link>
		<Link href="/pokedex">
			<div className="flex items-center text-sm cursor-pointer">
				<CatchingPokemonIcon className="" />
				<p>Pokedex</p>
			</div>
		</Link>
	</div>
);

export default NavBar;
