import { FormEvent } from 'react';

export type IHandleFormSubmit = (e: FormEvent<HTMLFormElement>, p: string) => Promise<void>;
export type IString_Void_Func = (s: string) => void;
