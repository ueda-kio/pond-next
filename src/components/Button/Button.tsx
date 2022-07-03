import React from 'react';
import { css, SerializedStyles } from '@emotion/react';
import { gradationModule } from '../../styles/Utils';

type ButtonProps = {
	type?: 'button' | 'submit' | 'reset';
	text: string;
	_css?: SerializedStyles;
}

const styleButton = (_css?: SerializedStyles): SerializedStyles => {
	return css`
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 200px;
		height: 60px;
		padding: 0 35px;
		border-radius: 50px;
		color: #fff;
		font-weight: bold;
		${gradationModule()}
		transition: box-shadow 0.3s, background-position .3s;
		cursor: pointer;
		${_css}

		&::after {
			content: '>';
			/* content: '\f105'; */
			position: absolute;
			top: 50%;
			right: 20px;
			display: inline-block;
			/* font-family: 'Font Awesome 5 Free'; */
			font-weight: 900;
			color: #fff;
			transform: translateY(-50%);
			transition: right .3s;
		}

		&:hover {
			border: solid 1px #fff;
			box-shadow: 0 0 8px gray;
			background-position: right center;

			&::after {
				right: 15px;
			}
		}

		&:disabled {
			background-image: none;
			background-color: #757575;
			cursor: initial;

			&:hover {
				border: none;
				box-shadow: none;

				&::after {
				right: 20px;
				}
			}
		}
	`
}

const Button: React.FC<ButtonProps> = ({ text, type = 'button', _css }) => {
	return (
		<button type={type} css={styleButton(_css)}>{text}</button>
	)
};

export default Button;