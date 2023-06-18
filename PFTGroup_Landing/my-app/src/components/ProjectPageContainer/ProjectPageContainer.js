import React from 'react';
import { connect } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import ProjectPage from './Project/Project';

class ProjectContainer extends React.Component {
	render() {
		return <ProjectPage {...this.props} />;
	}

	// componentDidMount() {
	// 	let courseId = this.props.router.params.projectId;
	// 	// if (profileId) {
	// 	// 	this.props.getProfileInfo(profileId);
	// 	// }
	// }
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

export default connect(mapStateToProps, {})(withRouter(ProjectContainer));
