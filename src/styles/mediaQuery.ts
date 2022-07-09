export const breakpoints = {
	sp: 640,
	pad: 768,
	pc: 1080,
	xl: 1280,
	'2xl': 1536,
} as const;

type DeviceType = 'sp' | 'tablet' | 'pc' | 'xl' | '2xl';
type Media = {
	[key in DeviceType]: string;
};

const breakpoint = [
	{
		id: 'sp',
		breakpoint: 640,
	},
	{
		id: 'tablet',
		breakpoint: 768,
	},
	{
		id: 'pc',
		breakpoint: 1080,
	},
	{
		id: 'xl',
		breakpoint: 1280,
	},
	{
		id: 'tablet',
		breakpoint: 1536,
	},
];

export const mediaQuery = breakpoint.reduce((_, { id, breakpoint }) => {
	return {
		[id]: `@media (min-width: ${breakpoint}px)`,
	};
}, {}) as Media;

export default mediaQuery;
