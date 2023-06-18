import { NavLink } from 'react-router-dom';
import styles from './project.module.css';

function Project(props) {
	return (
		<NavLink
			to={`/project/${props.project_id}`}
			className={styles.project}>
			<div className={styles.project__info}>
				<h1 className={styles.project__title}>{props.project_title}</h1>
				<h3 className={styles.project__subtitle}>{props.project_subtitle}</h3>
			</div>

			<div className={styles.project__avatar}>
				<div className={styles.project__ellipse}></div>
				<div className={styles.project__img}>
					<img
						src={props.project_img}
						alt=""
					/>
				</div>
			</div>
		</NavLink>
	);
}

export default Project;
