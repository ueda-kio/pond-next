const st = (str: string) => {
	const te = str.slice(0, 10);
	const ar = te.split('-');
	return ar.join('/');
};

export default st;