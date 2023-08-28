import React from 'react';
import styles from './DefaultPage.module.css';
import Catalog from './Catalog/Catalog';
import About from './About/About';
import FAQ from './FAQ/FAQ';
// import Numbers from './Numbers/Numbers';
import Contacts from './Contacts/Contacts';
import '../../../../node_modules/video-react/dist/video-react.css'; // import css

const DefaultPage = () => {
	console.log(window.outerWidth);
	return (
		<div className={styles.DefaultPage}>
			<section className={styles.preview__image}>
				<div
					className={styles.invisible__img}
					onContextMenu={() => false}
					alt=""
				/>
				{window.outerWidth > 922 ? (
					<video
						className={styles.preview__video}
						autoPlay
						muted
						loop
						controls={false}>
						<source
							src={require('./../../../img/preview(1).mp4')}
							type="video/mp4"
						/>
					</video>
				) : null}
			</section>
			<Catalog />
			<About />
			<FAQ />
			{/* <Numbers /> */}
			<Contacts />
		</div>
	);
};

export default DefaultPage;
