import React from 'react';
import styles from './Main.module.css';
import { Route, Routes } from 'react-router-dom';
import SearchPage from '../SearchPage/SearchPage';
import UserCourses from '../UserCourses/UserCourses';
import CourseContainer from '../Course/CourseContainer';
import Settings from '../SettingsPage/SettingsPage';
import CompanyPage from '../CompanyPage/CompanyPage';
import UnAuthPage from '../UnAuthPage/UnAuth';

const Main = (props) => {
	return (
		<main className={styles.main}>
			<Routes>
				<Route
					path="/"
					element={props.auth ? <UnAuthPage /> : <SearchPage />}
				/>
				<Route
					path="/searchPage"
					element={<SearchPage />}
				/>
				<Route
					path="/userCourses"
					element={<UserCourses />}
				/>
				<Route
					path="/courses/:courseId?"
					element={<CourseContainer />}
				/>
				<Route
					path="/settings"
					element={<Settings />}
				/>
				<Route
					path="/aboutCompany"
					element={<CompanyPage />}
				/>
			</Routes>
		</main>
	);
};

export default Main;
