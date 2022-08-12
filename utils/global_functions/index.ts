import { IPokemon } from '../../types';

export const trimObjects = (obj: any, trimArr: string[]): void => {
	trimArr.forEach((field: string) => delete obj[field]);
};

export const capitalizeFirstLetter = (str: string): string => {
	return str.charAt(0).toUpperCase() + str.slice(1);
};

export const getRGBAValue = (color: string): string => {
	switch (color) {
		case 'red':
			return 'rgba(255, 0, 0, 0.8)';
		case 'blue':
			return 'rgba(0, 0, 255, 0.8)';
		case 'green':
			return 'rgba(0, 255, 0, 0.8)';
		case 'yellow':
			return 'rgba(255, 255, 0, 0.8)';
		case 'black':
			return 'rgba(0, 0, 0, 0.8)';
		case 'gray':
			return 'rgba(128, 128, 128, 0.8)';
		case 'pink':
			return 'rgba(255, 192, 203, 0.8)';
		case 'brown':
			return 'rgba(165, 42, 42, 0.8)';
		case 'orange':
			return 'rgba(255, 165, 0, 0.8)';
		case 'purple':
			return 'rgba(128, 0, 128, 0.8)';
		case 'black':
			return 'rgba(0, 0, 0, 0.8)';
		case 'white':
			return '#F6F0BC';
		default:
			return 'rgba(255, 255, 255, 0.8)';
	}
};

export const getFromLocalStorage = (): IPokemon[] | undefined => {
	const storage: string | null = localStorage.getItem('pokedex');
	const pokedex: IPokemon[] | undefined = storage ? JSON.parse(storage) : undefined;
	return pokedex;
};
