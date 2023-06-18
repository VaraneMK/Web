import React from 'react';
import styles from './ProjectBlock.module.css';
import Project from './project/project';

const ProjectBlock = (props) => {
	const projectsList = props.projects.map((el) => {
		return (
			<Project
				key={el.project_id}
				project_id={el.project_id}
				project_title={el.project_title}
				project_subtitle={el.project_subtitle}
				project_img={el.project_img}
			/>
		);
	});

	console.log(projectsList);

	return (
		<div
			id="#project"
			className={styles.projects__block}>
			<h1 className={styles.block__title}>Проекты</h1>
			<div className={styles.projects__list}>{projectsList}</div>
		</div>
	);
};

export default ProjectBlock;
