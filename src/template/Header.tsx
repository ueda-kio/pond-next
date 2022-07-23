import Link from 'next/link'
import { css } from '@emotion/react';
import mediaQuery from '@style/mediaQuery';

const style = {
	wrapper: css({
		position: 'fixed',
		top: '0',
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		width: '100%',
		height: '92px',
		padding: '0 15px',
		color: '#fff',
		transition: 'background-color .5s, height .3s',
		zIndex: '100',
	}),
	logo: css({
		fontSize: '1.8rem',
		fontWeight: 'bold',
	}),
	list: css({
		display: 'none',
		alignItems: 'center',
		gap: '25px',
		fontWeight: 'bold',
		[mediaQuery['pc']]: {
			display: 'flex',
		},
	})
}

const list = ['NEWS', 'SERVICE', 'WORKS', 'COMPANY', 'RECRUIT', 'CONTACT'];

const Header = () => {
	return (
		<div css={style.wrapper}>
			<Link href='/' css={style.logo}>
				<a>PON DESIGN</a>
			</Link>
			<nav>
				<ul css={style.list}>
					{list.map((item) => (
						<li>
							<Link href='/'>
								<a>{item}</a>
							</Link>
						</li>
					))}
				</ul>
			</nav>
		</div>
	);
};

export default Header;