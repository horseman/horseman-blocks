import React from "react";
const {
	registerBlockType,
} = wp.blocks;

import withStyles from './withStyles';


const setupBlock = ( {blockName, save, SaveComponent, ...rest }) => {

	const saveWithStyles = ({ attributes }) => {
		return withStyles(<SaveComponent {...attributes} />);
	};
	const saveMethod = save ? save : saveWithStyles;

	const defaults = {
		supports: {
			html: false,
			customClassName: false,
		},
	};

	const opts = Object.assign({}, defaults, rest, {save:saveMethod});

	registerBlockType( blockName , opts);

};

export default setupBlock;
