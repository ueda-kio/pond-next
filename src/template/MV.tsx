import React from 'react';
import { css } from '@emotion/react';
import LinkButton from '@src/components/Button/LinkButton';

type Props = {
	isHome?: boolean,
	title?: string,
	subTitle?: string
}

const style = {
	mv: {
		home: {
			wrapper: css({
				position: 'relative',
				width: '100%',
				height: '100vh',
				background: 'url("/images/hero.jpg") no-repeat top center / cover'
			}),
			inner: css({
				position: 'absolute',
				top: '50%',
				left: '50%',
				width: '100%',
				color: 'white',
				transform: 'translate(-50%, -50%)'
			}),
			title: css({
				fontSize: '7rem',
				fontWeight: 'bold',
				textAlign: 'center'
			}),
			caption: css({
				fontSize: '2.4rem',
				fontWeight: 'bold',
				textAlign: 'center'
			})
		},
		other: {
			wrapper: css({
				position: 'relative',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				width: '100%',
				height: '300px',
				background: 'url("/images/hero_page.jpg") no-repeat top center / cover'
			}),
			inner: css({
				width: '100%',
				color: 'white',
				textAlign: 'center'
			}),
			title: css({
				fontSize: '3.6rem',
				fontWeight: 'bold',
			}),
			caption: css({
				fontSize: '1.4rem',
				fontWeight: 'bold',
			})
		}
	},
	modifier: {
		button: css({
			margin: '50px auto 0 auto',
			backgroundImage: 'none',
			border: '1px solid #fff'
		})
	}
}

const MV: React.FC<Props> = ({isHome = false, title, subTitle}) => {
	return (
		<>
			{isHome ? (
				<>
					<div css = { style.mv.home.wrapper } >
						<div css={style.mv.home.inner}>
							<h1 css={style.mv.home.title}>WEB DESIGN SPECIALIST</h1>
							<p css={style.mv.home.caption}>お客様の夢を叶えるWebサイトを制作</p>
							<LinkButton text='contact' href='#' _css={style.modifier.button} />
						</div>
					</div >
				</>
			) : (
				<>
					<div css={style.mv.other.wrapper} >
						<div css={style.mv.other.inner}>
							<h1 css={style.mv.other.title}>{title}</h1>
							<p css={style.mv.other.caption}>{subTitle}</p>
						</div>
					</div >
				</>
			)}
		</>
	);
};

export default MV;