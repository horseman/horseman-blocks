import React from "react";
import styleSheet from 'styled-components/lib/models/StyleSheet';
import { renderToString } from 'react-dom/server';


const withStyles = (component) => {
	//Generate Styles
	styleSheet.reset(false);
	renderToString(component);
	const styleTags = styleSheet.instance.toHTML();

	return (
		component
	);
};

export default withStyles;
