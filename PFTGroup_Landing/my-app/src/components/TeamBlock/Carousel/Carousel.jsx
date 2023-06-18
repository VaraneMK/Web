import React, { useEffect, useRef, useState } from 'react';
import styles from './Carousel.module.css';
import { ReactComponent as Arrow } from './../../../img/arrow.svg';

const Carousel = ({ children }) => {
	const windowSlider = useRef();
	const [pages, setPages] = useState(0);
	const [offset, setOffset] = useState(0);
	// const [width, setWidth] = useState(windowSlider.current.offsetWidth);

	useEffect(() => {
		const resizeHandler = () => {
			// const _width = windowSlider.current.offsetWidth;
			setOffset(0);
			setPages(0);
			// setWidth(_width);
		};
		resizeHandler();
		window.addEventListener('resize', resizeHandler);

		return () => {
			window.removeEventListener('resize', resizeHandler);
		};
	}, []);

	const handleLeftArrowClick = () => {
		setOffset((currentOffset) => {
			let newOffset = 0;
			setPages((currentPage) => {
				const newPage = currentPage - 1;
				return newPage;
			});
			if (pages === 0) {
				setPages(() => {
					const newPage = children.length / 2 - 1;
					return newPage;
				});
				newOffset = currentOffset - windowSlider.current.offsetWidth * (children.length / 2 - 1) - 40;
			} else {
				newOffset = currentOffset + windowSlider.current.offsetWidth + 20;
				console.log(newOffset);
			}
			return newOffset;
		});
	};

	const handleRightArrowClick = () => {
		setOffset((currentOffset) => {
			setPages((currentPage) => {
				const newPage = currentPage + 1;
				return newPage;
			});
			if (pages + 1 === children.length / 2) {
				setPages(0);
				return 0;
			}
			const newOffset = currentOffset - windowSlider.current.offsetWidth - 20;
			return newOffset;
		});
	};

	return (
		<div className={styles.team__slider}>
			<div
				onClick={handleLeftArrowClick}
				className={styles.arrow__side}>
				<Arrow className={styles.arrow__left + ' ' + styles.arrow} />
			</div>
			<div
				ref={windowSlider}
				className={styles.window}>
				<div
					style={{ transform: `translateX(${offset}px)` }}
					className={styles.members__container}>
					{children}
				</div>
			</div>
			<div
				onClick={handleRightArrowClick}
				className={styles.arrow__side}>
				<Arrow className={styles.arrow__right + ' ' + styles.arrow} />
			</div>
		</div>
	);
};

export default Carousel;
