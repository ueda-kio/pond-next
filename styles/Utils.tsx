import React from "react";
import { css, SerializedStyles } from "@emotion/react";

type BreakPoint = 320 | 375 | 576 | 768 | 1080 | 1450;

const mqMin = (bp: BreakPoint) => `@media (min-width: ${bp}px)`;
const mqMax = (bp: BreakPoint) => `@media (max-width: ${bp}px)`;

const gradationModule: (direction?: 'right' | 'left' | 'top' | 'bottom') => SerializedStyles = (direction = 'right') => {
	const size = direction === 'right' ? 'background-size: 200% auto;' : 'background-size: auto 200%;';

	return css`
		background-image: linear-gradient(to ${direction}, #7633a4 0%, #250d65 51%, #7633a4 100%);
		${size}
		background-clip: text;
	`;
};

export { mqMin, mqMax, gradationModule };