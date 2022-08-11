import { FC } from 'react';
import { IString_Void_Func } from '../../../../../types/functions';

interface IProps {
	searchList: string[];
	handleOptionClick: IString_Void_Func;
}

const Dropdown: FC<IProps> = ({ searchList, handleOptionClick }) => (
	<div className=" bg-white z-10 rounded-lg w-60 md:w-80 flex flex-col self-start shadow-inner absolute top-14 border-2">
		{searchList.slice(0, 5).map((pokemon: string) => (
			<span
				className="pl-2 text-black py-1 even:bg-gray-light cursor-pointer"
				key={pokemon}
				onClick={() => handleOptionClick(pokemon)}
			>
				{pokemon}
			</span>
		))}
	</div>
);

export default Dropdown;
