// Some types are other to save time

export type IPokemonRes = { name: string, url: string }
export type IType = {name: string, url: string}
export type INestedType = {type: IType}

export type IAbility = {
    ability: {
        name: string;
        url: string;
    }
    is_hidden: boolean;
    slot: number;
}
export type IMove = {
    move: {
        name: string;
        url: string;
    }
    version_group_details: {
        level_learned_at: number;
        move_learn_method: {
            name: string;
            url: string;
        }
        version_group: {
            name: string;
            url: string;
        }
        }
    }   

type ISpecies = {
    name: string;
    url: string;
}

type ISprites = {
    back_default: string;
    back_female: string;
    back_shiny: string;
    back_shiny_female: string;
    front_default: string;
    front_female: string;
    front_shiny: string;
    front_shiny_female: string;
    other: any 
    versions: any;
}

export type IStat = {
    base_stat: number;
    effort: number;
    stat: {
        name: string;
        url: string
    }
}

type IFullType = {
    slot: number;
    type: IType;
}

export interface IPokemon {
    abilities: IAbility[]
    base_experience: number;
    height: number;
    id: number;
    moves: IMove[]
    name: string;
    species: ISpecies;
    sprites: ISprites
    stats: IStat[]
    types: IFullType[]
    weight: number;   
    color: string;
}
