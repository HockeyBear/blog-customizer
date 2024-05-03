import { createRoot } from 'react-dom/client';
import { StrictMode, CSSProperties, useState } from 'react';
import clsx from 'clsx';

import { Article } from './components/article/Article';
import { ArticleParamsForm } from './components/article-params-form/ArticleParamsForm';
import { ArticleStateType, defaultArticleState } from './constants/articleProps';

import './styles/index.scss';
import styles from './styles/index.module.scss';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

const App = () => {
	const [parameter, setParamenter] = useState(defaultArticleState)

	return (
		<>
			<div
				className={clsx(styles.main)}
				style={
					{
						'--font-family': parameter.fontFamilyOption.value,
						'--font-size': parameter.fontSizeOption.value,
						'--font-color': parameter.fontColor.value,
						'--container-width': parameter.contentWidth.value,
						'--bg-color': parameter.backgroundColor.value,
					} as CSSProperties
				} 
			/>
			<ArticleParamsForm param={parameter} articleStateChange={setParamenter}
			/>
			<Article />
		</>
	);
};

root.render(
	<StrictMode>
		<App />
	</StrictMode>
);
