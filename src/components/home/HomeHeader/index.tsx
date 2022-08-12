import { FC } from 'react';
import { IHandleFormSubmit, IString_Void_Func } from '../../../../types/functions';
import NavBar from '../../common/NavBar';
import SearchForm from './SearchForm';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import CircularProgress from '@mui/material/CircularProgress';

interface IProps {
	handleSubmit: IHandleFormSubmit;
	search: string;
	handleSearch: IString_Void_Func;
	selectedPokemonName: string;
	dropdown: boolean;
	searchList: string[];
	handleOptionClick: IString_Void_Func;
	getRandomPokemon: () => void;
	loading: boolean;
}

const HomeHeader: FC<IProps> = props => (
	<section className="flex flex-col w-11/12 md:w-full " style={{ maxWidth: '640px' }}>
		<NavBar hideLeft />
		<div className="flex justify-between items-center">
			<h1 className="text-mat-black  text-3xl font-bold">Poke-dex</h1>
			{props.loading ? (
				<CircularProgress size={25} />
			) : (
				<ShuffleIcon className="cursor-pointer" onClick={props.getRandomPokemon} />
			)}
		</div>

		<SearchForm {...props} />
	</section>
);

export default HomeHeader;
