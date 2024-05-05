import React, { useState, CSSProperties } from 'react';
import { Article } from '../article';
import { ArticleParamsForm } from '../article-params-form';
import { defaultArticleState } from 'src/constants/articleProps';
import clsx from 'clsx';
import '../../styles/index.scss';
import styles from '../../styles/index.module.scss';

export const App = () => {
	const [style, setStyle] = useState(defaultArticleState);

	return (
		<main
			className={clsx(styles.main)}
			style={
				{
					'--font-family': style.fontFamilyOption.value,
					'--font-size': style.fontSizeOption.value,
					'--font-color': style.fontColor.value,
					'--container-width': style.contentWidth.value,
					'--bg-color': style.backgroundColor.value,
				} as CSSProperties
			}>
			<ArticleParamsForm param={style} articleStateChange={setStyle} />
			<Article />
		</main>
	);
};
