import type { NextPage } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { css } from '@emotion/react'
import HeadComponent from './template/Head'
import MV from './template/MV'
import Title from './modules/Title'

const style = {
	news: {
		section: css({
			display: 'flex',
			maxWidth: '900px',
			margin: '70px auto 0 auto',
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
			</section>

			<footer className={styles.footer}>
			</footer>
		</>
	)
}

export default Home
