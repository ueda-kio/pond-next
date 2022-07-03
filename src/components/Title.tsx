import React from 'react'
import { css, SerializedStyles } from "@emotion/react";
import { gradationModule } from '../styles/Utils';

type Props = {
	level?: React.ElementType;
	main: string;
	sub: string;
	_css?: SerializedStyles;
}

// Object-Style スタイルのマージ方法
const titleStyle = (_css?: SerializedStyles): {[x: string]: SerializedStyles} => {
	return {
		wrap: css({
			margin: '0 auto 30px auto',
			fontWeight: 'bold',
			textAlign: 'center',
		}, {
			..._css
		}),
		main: css({
			fontSize: '3rem',
		}, {
			...gradationModule(),
		}),
		sub: css({
			fontSize: '1.3rem',
			color: '#391e88'
		})
	}
}


const Title: React.FC<Props> = ({ level: Tag = 'h2', main, sub, _css }) => {
	return (
		<Tag css={titleStyle(_css).wrap}>
			<p lang='en' css={titleStyle().main}>{main}</p>
			<p css={titleStyle().sub}>{sub}</p>
		</Tag>
	)
}

export default Title;