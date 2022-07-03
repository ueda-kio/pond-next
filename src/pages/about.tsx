import type { NextPage } from 'next'
// import Link from 'next/link'
// import Image from 'next/image'
// import { css } from '@emotion/react'
import HeadComponent from '../template/Head'
import MV from '../template/MV'

const About: NextPage = () => {
	return (
		<>
			<HeadComponent title='TOP' description='dummy' />

			<MV title='ABOUT' subTitle='subtitle subtitle' />

		</>
	)
}

export default About;
