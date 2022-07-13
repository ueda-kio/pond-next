import type { GetStaticProps, NextPage } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { css } from '@emotion/react'
import HeadComponent from '@template/Head'
import MV from '@template/MV'
import Title from '@components/Title'
import LinkButton from '@components/Button/LinkButton';
import mediaQuery from '@style/mediaQuery';
import st from '@utils/st';

const style = {
	section: css({
		margin: '80px 0 0 0',
		padding: '0 20px'
	}),
	news: {
		section: css({
			maxWidth: '917px',
			[mediaQuery['pc']]: {
				display: 'flex',
				gap: '50px',
				padding: 20,
			},
		}),
		list: css({
			maxHeight: '380px',
			overflowY: 'auto',
			[mediaQuery['pc']]: {
				width: '730px',
			}
		}),
		listItem: css({
			'& + &': {
				borderTop: 'solid 1px #ddd',
			}
		}),
		listLink: css({
			display: 'block',
			padding: '10px 0',
		}),
		listHead: css({
			display: 'flex',
			gap: '15px'
		}),
		listTitle: css({
			overflow: 'hidden',
			display: '-webkit-box',
			margin: '5px 0 0',
			WebkitBoxOrient: 'vertical',
			WebkitLineClamp: '2',
		}),
		listTag: css({
			display: 'inline-block',
			minWidth: '82px',
			maxHeight: '19px',
			borderRadius: '50px',
			backgroundColor: '#e8e8e8',
			fontSize: '1.1rem',
			fontWeight: 'bold',
			textAlign: 'center',
			lineHeight: '19px',
		})
	},
	service: {
		list: css({
			display: 'flex',
			flexDirection: 'column',
			gap: '40px',
			maxWidth: '500px',
			margin: '0 auto'
		}),
		title: css({
			marginTop: '15px',
			textAlign: 'center',
			fontWeight: 'bold'
		}),
		button: css({
			margin: '30px auto 0 auto'
		})
	}
}

const Home: NextPage<Post[]> = (contents) => {
	const array = Object.values(contents);
	const serviceContents = [
		{
			img: '/images/jessy-smith.jpg',
			title: 'WEBサイト制作',
			desc: '新規サイトはもちろん、サイトリニューアルやランディングページ制作も行っております。'
		},
		{
			img: '/images/luke-chesser.jpg',
			title: 'アナリティクス',
			desc: '新規サイトはもちろん、サイトリニューアルやランディングページ制作も行っております。'
		},
		{
			img: '/images/pexels-cottonbro.jpg',
			title: 'ディレクション',
			desc: '新規サイトはもちろん、サイトリニューアルやランディングページ制作も行っております。'
		},
	]

	return (
		<>
			<HeadComponent title='TOP' description='dummy' />

			<MV isHome={true} />

			<section css={[style.section, style.news.section]}>
				<Title main='NEWS' sub='お知らせ' />
				<ul css={style.news.list}>
					{array.map((content, i) => (
						<li css={style.news.listItem} key={content.id}>
							<Link href='/blog/[content.id]' as={`/blog/${content.id}`}>
								<a css={style.news.listLink}>
									<p css={css({ display: 'flex', gap: '15px' })}>
										<time>{st(content.publishedAt)}</time>
										<span css={style.news.listTag}>{content.tag}</span>
									</p>
									<p css={style.news.listTitle}>
										{content.title}
									</p>
								</a>
							</Link>
						</li>
					))}
				</ul>
			</section>

			<section css={style.section}>
				<Title main='SERVICE' sub='事業内容' />
				<ul css={style.service.list}>
					{serviceContents.map((content, i) => (
						<li key={content.title}>
							<Image src={content.img} width='670' height='422' alt='' />
							<h3 css={style.service.title}>{content.title}</h3>
							<p css={css({ marginTop: '10px' })}>{content.desc}</p>
						</li>
					))}
				</ul>
				<LinkButton text='MORE' href='#' _css={style.service.button} />
			</section>
		</>
	)
};

type Post = {
	id: string;
	createdAt: string;
	updatedAt: string;
	publishedAt: string;
	revisedAt: string;
	title: string;
	subTitle: string;
	body: string;
	tag: string;
	thumbnail: {
		url: string;
		height: string;
		width: string;
	}
};

export const getStaticProps: GetStaticProps<Post[]> = async () => {
	const res = await fetch('https://3b6bho47qa.microcms.io/api/v1/blog', {
		headers: {
			'X-MICROCMS-API-KEY': 'e161262cb6dc4fb4a7c0b8e5c06b6fda0b04',
		},
	});
	const json = await res.json();
	const contents: Post[] = json.contents;

	return {
		props: { ...contents },
	}
};

export default Home;
