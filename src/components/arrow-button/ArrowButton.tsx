import arrow from 'src/images/arrow.svg';
import clsx from 'clsx';
import styles from './ArrowButton.module.scss';

/** Функция для обработки открытия/закрытия формы */

export type ArrowButtomProps = {
	onClick: () => void;
	isOpenClickButton: boolean;
}

export const ArrowButton = ({ onClick, isOpenClickButton }: ArrowButtomProps) => {

	return (
		/* Не забываем указаывать role и aria-label атрибуты для интерактивных элементов */
		<div
			role='button'
			aria-label='Открыть/Закрыть форму параметров статьи'
			tabIndex={0}
			className={clsx(styles.container, {
				[styles.container_open]: isOpenClickButton,
			})}
			onClick={onClick}>
			<img src={arrow} alt='иконка стрелочки' className={clsx(styles.arrow, {
				[styles.arrow_open]: isOpenClickButton
			})} />
		</div>
	);
};
