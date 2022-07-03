import type { NextPage } from 'next'
// import Link from 'next/link'
// import Image from 'next/image'
import styles from '../styles/Home.module.css'
// import { css } from '@emotion/react'
import HeadComponent from '../template/Head'
import MV from '../template/MV'

const About: NextPage = () => {
	return (
		<>
			<HeadComponent title='TOP' description='dummy' />

			<MV title='ABOUT' subTitle='subtitle subtitle' />

			<footer className={styles.footer}>
			</footer>
		</>
	)
}

export default About;
