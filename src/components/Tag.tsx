import { css, SerializedStyles } from "@emotion/react";

type Props = {
	text: string;
	_css?: SerializedStyles;
}

const style = (_css?: SerializedStyles): { [x: string]: SerializedStyles } => {
	return {
		wrap: css({
			display: 'inline-block',
			minWidth: '82px',
			maxHeight: '19px',
			borderRadius: '50px',
			backgroundColor: '#e8e8e8',
			fontSize: '1.1rem',
			fontWeight: 'bold',
			textAlign: 'center',
			lineHeight: '19px',
		}, {
			..._css
		}),
	}
}

const Tag: React.FC<Props> = ({ text, _css }) => {
	return (
		<span css={style(_css).wrap}>{text}</span>
	)
}

export default Tag;