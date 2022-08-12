import { FC } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Link from 'next/link';

interface IProps {
	hideLeft?: boolean;
	hideRight?: boolean;
}

const NavBar: FC<IProps> = ({ hideLeft, hideRight }) => (
	<div className="py-3 flex justify-between ">
		<Link href="/">
			<ArrowBackIcon className="cursor-pointer" style={{ visibility: hideLeft ? 'hidden' : undefined }} />
		</Link>
		<Link href="/pokedex">
			<p
				className="flex items-center text-sm cursor-pointer bg-white rounded-4xl py-1 px-2 hover:scale-110 transition-all"
				style={{ visibility: hideRight ? 'hidden' : undefined }}
			>
				Pokedex
			</p>
		</Link>
	</div>
);

export default NavBar;
