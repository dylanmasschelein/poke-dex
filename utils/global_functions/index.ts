export const trimObjects = (obj: any, trimArr: string[]) => {
	trimArr.forEach((field: string) => delete obj[field]);
};
