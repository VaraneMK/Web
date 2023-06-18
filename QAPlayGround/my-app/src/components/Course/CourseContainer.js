import React from 'react';
import { connect } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import Course from './Course';

class CourseContainer extends React.Component {
	render() {
		return (
			<Course
				{...this.props}
				courseInfo={this.props.profileInfo}
			/>
		);
	}

	componentDidMount() {
		let courseId = this.props.router.params.courseId;
		// if (profileId) {
		// 	this.props.getProfileInfo(profileId);
		// }
	}
}

const mapStateToProps = (state) => {
	return { state };
};

function withRouter(Component) {
	function ComponentWithRouterProp(props) {
		let location = useLocation();
		let navigate = useNavigate();
		let params = useParams();
		return (
			<Component
				{...props}
				router={{ location, navigate, params }}
			/>
		);
	}
	return ComponentWithRouterProp;
}

export default connect(mapStateToProps, {})(withRouter(CourseContainer));
