import { FormEvent, SyntheticEvent } from 'react';
import { IPokemon } from '.';

export type IHandleFormSubmit = (e: FormEvent<HTMLFormElement>, p: string) => Promise<void>;
export type IString_Void_Func = (s: string) => void;
export type ISaveCaughtPkm = (e: SyntheticEvent, p: IPokemon) => void;
