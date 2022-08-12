export type IPokemonRes = { name: string; url: string };
export type IType = { name: string; url: string };
export type INestedType = { type: IType };

export type IAbility = {
	ability: {
		name: string;
		url: string;
	};
	is_hidden: boolean;
	slot: number;
};
export type IMove = {
	move: {
		name: string;
		url: string;
	};
	version_group_details: {
		level_learned_at: number;
		move_learn_method: {
			name: string;
			url: string;
		};
		version_group: {
			name: string;
			url: string;
		};
	};
};

type ISpecies = {
	name: string;
	url: string;
};

type ISprites = {
	back_default: string | null;
	back_female: string | null;
	back_shiny: string | null;
	back_shiny_female: string | null;
	front_default: string | null;
	front_female: string | null;
	front_shiny: string | null;
	front_shiny_female: string | null;
	other: any;
	versions: any;
};

export type IStat = {
	base_stat: number;
	effort: number;
	stat: {
		name: string;
		url: string;
	};
};

type IFullType = {
	slot: number;
	type: IType;
};

export interface IPokemon {
	abilities: IAbility[];
	base_experience: number;
	height: number;
	id: number;
	moves: IMove[];
	name: string;
	species: ISpecies;
	sprites: ISprites;
	stats: IStat[];
	types: IFullType[];
	weight: number;
	color: string;
}
