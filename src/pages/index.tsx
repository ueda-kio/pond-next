import type { NextPage } from 'next'
import Link from 'next/link'
// import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { css } from '@emotion/react'
import HeadComponent from '@template/Head'
import MV from '@template/MV'
import Title from '@components/Title'

const style = {
	news: {
		section: css({
			display: 'flex',
			maxWidth: '900px',
			margin: '70px auto 0 auto',
		}),
		list: css({
			maxHeight: '380px',
			overflowY: 'scroll'
		}),
		listLink: css({
			display: 'block',
			padding: '10px 0',
		})
	}
}

const Home: NextPage = () => {
	return (
		<>
			<HeadComponent title='TOP' description='dummy' />

			<MV isHome={true} />

			<section css={style.news.section}>
				<Title main='NEWS' sub='お知らせ' />
				<ul css={style.news.list}>
					<li>
						<Link css={style.news.listLink} href='#'>hoge</Link>
					</li>
				</ul>
			</section>

			<footer className={styles.footer}>
			</footer>
		</>
	)
}

export default Home
