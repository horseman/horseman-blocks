import React from "react";
import styleSheet from 'styled-components/lib/models/StyleSheet';
import { renderToString } from 'react-dom/server';
import { connect } from "react-redux";


export default function (Component){
	class StyledComponent extends React.Component {
		render() {
			const { saveStyles } = this.props;
			styleSheet.reset(false);
			renderToString(<Component {...this.props} />);
			const styleTags = styleSheet.instance.toHTML();
			saveStyles(styleTags);

			return (
				<Component {...this.props} />
			);
		}
	}
	const mapStateToProps = () => ({});

	const mapDispatchToProps = (dispatch) => ({
		saveStyles: styles => {
			dispatch({type:'SAVE_STYLES', styles});
		}
	});
	return connect(mapStateToProps, mapDispatchToProps)(StyledComponent);
};
