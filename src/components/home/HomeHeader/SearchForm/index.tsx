import { FC } from 'react';
import { IHandleFormSubmit, IString_Void_Func } from '../../../../../types/functions';
import Dropdown from './Dropdown';

interface IProps {
	handleSubmit: IHandleFormSubmit;
	search: string;
	handleSearch: IString_Void_Func;
	selectedPokemonName: string;
	dropdown: boolean;
	searchList: string[];
	handleOptionClick: IString_Void_Func;
}

const SearchForm: FC<IProps> = ({
	handleSubmit,
	search,
	handleSearch,
	selectedPokemonName,
	dropdown,
	searchList,
	handleOptionClick
}) => (
	<>
		<form className="relative my-2 flex justify-between" onSubmit={e => handleSubmit(e, selectedPokemonName)}>
			<input
				id="mdb-5-search-input"
				autoComplete="off"
				type="search"
				value={search}
				onChange={e => handleSearch(e.target.value)}
				className="rounded-lg w-full shadow-inner p-2 mr-2 bg-gray-100"
				placeholder="Search"
			/>
			<span className="input-group-text border-0">
				<i className="fas fa-search text-gray-400" id="mdb-5-search-icon"></i>
			</span>
			<div className="flex">
				<button className="btn-blue" type="submit">
					Get Pokemon
				</button>
				{/* <button className="btn-blue ml-3" type="button" onClick={getRandomPokemon}>Get Random</button> */}
			</div>
			{dropdown && <Dropdown searchList={searchList} handleOptionClick={handleOptionClick} />}
			{/* {dropdown && searchList.length === 0 && (
				<div className=" bg-white z-10 rounded-lg w-80 flex flex-col self-start shadow-inner absolute top-14 border-2">
					<span className="pl-2 text-black py-1 even:bg-gray-light cursor-pointer">No Results</span>
				</div>
			)} */}
		</form>
	</>
);

export default SearchForm;
