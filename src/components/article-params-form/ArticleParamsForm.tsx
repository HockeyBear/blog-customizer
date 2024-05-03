import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';

import styles from './ArticleParamsForm.module.scss';
import { FormEvent, useState } from 'react';
import clsx from 'clsx';
import { ArticleStateType, OptionType, backgroundColors, 
	contentWidthArr, defaultArticleState, fontColors, 
	fontFamilyOptions, fontSizeOptions } from 'src/constants/articleProps';
import { Text } from '../text';
import { Select } from '../select';
import { RadioGroup } from '../radio-group';
import { Separator } from '../separator';
import { CloseFormOutside } from './close-form';

const defaultStateParams = {
	fontFamilyOption: defaultArticleState.fontFamilyOption,
	fontSizeOption: defaultArticleState.fontSizeOption,
	fontColor: defaultArticleState.fontColor,
	backgroundColor: defaultArticleState.backgroundColor,
	contentWidth: defaultArticleState.contentWidth,
}

type ArticlePropsParams = {
	param: ArticleStateType
	articleStateChange: (param: ArticleStateType) => void;
}

export const ArticleParamsForm = ({ param, articleStateChange }: ArticlePropsParams) => {
	const [ isOpenClickButton, setIsOpenClickButton ] = useState(false);
	const [ stateParams, setStateParams ] = useState(param);

	const onSubmitParams = (evt: FormEvent) => {
		evt.preventDefault();
		articleStateChange(stateParams);
	}
	const onResetParams = (evt: FormEvent) => {
		evt.preventDefault();
		articleStateChange(defaultStateParams);
		setStateParams(defaultStateParams);
	}

	const ChangedParamrters = (selected: OptionType) => {
		if(fontFamilyOptions.includes(selected)) {
			setStateParams({...stateParams, fontFamilyOption: selected})
		}
		if(fontSizeOptions.includes(selected)) {
      setStateParams({...stateParams, fontSizeOption: selected})
    }
		if(fontColors.includes(selected)) {
      setStateParams({...stateParams, fontColor: selected})
    }
		if(backgroundColors.includes(selected)) {
      setStateParams({...stateParams, backgroundColor: selected})
    }
		if(contentWidthArr.includes(selected)) {
      setStateParams({...stateParams, contentWidth: selected})
    }
	}

	const handleClickArrowButton = () => {
		setIsOpenClickButton(!isOpenClickButton);
	}

	return (
		<>
			<CloseFormOutside isOpen={isOpenClickButton} setIsOpen={setIsOpenClickButton}>
			<ArrowButton isOpenClickButton={isOpenClickButton} onClick={handleClickArrowButton} />
			<aside className={clsx(styles.container, {
				[styles.container_open]: isOpenClickButton,
			})}>
				<form className={styles.form} onSubmit={onSubmitParams} onReset={onResetParams} >
					<Text as='h2' size={31} weight={800} family='open-sans' align='left' >
						Задайте параметры
					</Text>
					<Select 
						title='шрифт'
						options={fontFamilyOptions}
						selected={stateParams.fontFamilyOption} 
						onChange={ChangedParamrters} 
					/>
					<RadioGroup 
						name='radio'
						title='размер шрифта'
						selected={stateParams.fontSizeOption}
						options={fontSizeOptions}
						onChange={ChangedParamrters}
					/>
					<Select
						title='цвет шрифта'
						options={fontColors}
						selected={stateParams.fontColor}
						onChange={ChangedParamrters}
					/>
					<Separator />
					<Select 
						title='цвет фона'
						options={backgroundColors}
						selected={stateParams.backgroundColor}
						onChange={ChangedParamrters}
					/>
					<Select 
						title='ширина контента'
						options={contentWidthArr}
						selected={stateParams.contentWidth}
						onChange={ChangedParamrters}
					/>
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' type='reset' />
						<Button title='Применить' type='submit' />
					</div>
				</form>
			</aside>
			</CloseFormOutside>
		</>
	);
};
