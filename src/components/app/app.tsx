import React, { useState, CSSProperties } from 'react';
import { Article } from '../article';
import { ArticleParamsForm } from '../article-params-form';
import { defaultArticleState } from 'src/constants/articleProps';
import clsx from 'clsx';
import '../../styles/index.scss';
import styles from '../../styles/index.module.scss';

export const App = () => {
    const [parameter, setParameter] = useState(defaultArticleState);

    return (
      <main
        className={clsx(styles.main)}
        style={{
          '--font-family': parameter.fontFamilyOption.value,
          '--font-size': parameter.fontSizeOption.value,
          '--font-color': parameter.fontColor.value,
          '--container-width': parameter.contentWidth.value,
          '--bg-color': parameter.backgroundColor.value,
        } as CSSProperties
      }
      >
      <ArticleParamsForm param={parameter} articleStateChange={setParameter} />
      <Article />
      </main>
    );
};
