import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'
import Link from 'next/link'
import Blog from '@src/template/Blog';
import MV from '@template/MV';

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

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const Post: NextPage<Props> = (contents) => {
	return (
		<>
			<MV title='NEWS' subTitle='お知らせ' />
			<Blog
				body={contents.body}
				thumbnail={contents.thumbnail}
				tag={contents.tag}
				publishedAt={contents.publishedAt} />
			<Link href='/'>Homeへ</Link>
		</>
	);
};

export const getStaticPaths = async () => {
	const res = await fetch('https://3b6bho47qa.microcms.io/api/v1/blog', {
		headers: {
			'X-MICROCMS-API-KEY': 'e161262cb6dc4fb4a7c0b8e5c06b6fda0b04',
		},
	});
	const json = await res.json();
	const contents: Post[] = json.contents;
	const paths = contents.map(({ id }) => `/blog/${id}`);

	return {
		paths,
		fallback: false,
	};
};

export const getStaticProps: GetStaticProps<Post> = async ({ params }) => {
	// context引数を使うならこっち
	// const id = context.params?.id;
	const id = params?.id;
	const res = await fetch(`https://3b6bho47qa.microcms.io/api/v1/blog/${id ?? ''}`, {
		headers: {
			'X-MICROCMS-API-KEY': 'e161262cb6dc4fb4a7c0b8e5c06b6fda0b04',
		},
	});
	const json: Post = await res.json();

	return {
		props: { ...json },
	}
};

export default Post;
