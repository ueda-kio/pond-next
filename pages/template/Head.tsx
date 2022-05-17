import React from 'react'
import Head from 'next/head'
import Script from 'next/script'

type Props = {
	title: string;
	description: string;
	children?: React.ReactNode
}

const HeadComponent: React.FC<Props> = ({title, description, children}) => {
	return (
		<>
			<Head>
				<title>{title}</title>
				<meta name="description" content={description} />
				<link rel="icon" href="/favicon.ico" />
				{children}
			</Head>
			<Script src="https://kit.fontawesome.com/1f3bba6d72.js" crossOrigin="anonymous"></Script>
		</>
	)
}

export default HeadComponent;
