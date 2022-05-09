import type { NextPage } from 'next'
import { css } from '@emotion/react';

const style = {
	title: css({
		fontSize: '3rem'
	}),
	dropDown__itemList: css`
		width: 100%;
		color: #333;
		background: #fff;
		transition: height 0.3s ease 0s;
		overflow: hidden;
		&.is-open {
			overflow: visible;
		}
	`,
}

const About: NextPage = () => {
	return (
		<>
			<h2 css={style.title}>About Page</h2>
		</>
	)
}

export default About;