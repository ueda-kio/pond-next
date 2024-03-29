import Image from 'next/image'
import { css } from '@emotion/react'
import Tag from '@components/Tag';
import st from '@utils/st';

type Post = {
	// id: string;
	// createdAt: string;
	// updatedAt: string;
	publishedAt: string;
	// revisedAt: string;
	// title: string;
	// subTitle: string;
	body: string;
	tag: string;
	thumbnail: {
		url: string;
		height: string;
		width: string;
	}
};

const style = {
	structure: css({
		maxWidth: '790px',
		margin: '0 auto',
		padding: '40px 20px 0'
	}),
	wrapper: css({
		marginTop: '40px',
		'& h1': css({
			fontSize: '2.2rem'
		}),
		'& h2': css({
			paddingLeft: '15px',
			margin: '40px 0 0',
			fontSize: '1.8rem',
			fontWeight: 'bold',
			borderLeft: '5px solid #000'
		}),
		'& h3': css({
			margin: '40px 0 0',
			fontSize: '1.6rem',
			fontWeight: 'bold'
		}),
		'& p': css({
			margin: '20px 0 0',
		}),
	}),
	header: css({
		display: 'flex',
		gap: '15px'
	}),
	mv: css({
		position: 'relative',
		width: '100%',
		height: '300px',
		marginTop: '10px',
	})
}

const Blog: React.FC<Post> = ({ body, thumbnail, tag, publishedAt }) => {
	return (
		<div css={style.structure}>

			<div css={style.header}>
				<time>{st(publishedAt)}</time>
				<Tag text={tag} />
			</div>
			<div css={style.mv}>
				<Image src={thumbnail.url} width={thumbnail.width} height={thumbnail.height} alt='' objectFit='cover' layout='fill' />
			</div>
			<div
				css={style.wrapper}
				dangerouslySetInnerHTML={{
					__html: `${body}`
				}}
			></div>
		</div>
	);
};

export default Blog;