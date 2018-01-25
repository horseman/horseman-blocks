import React from "react";
const {
	registerBlockType,
} = wp.blocks;

import withStyles from './withStyles';
import connected from './connected';


const setupBlock = ( {blockName, edit, save, saveOverride, ...rest }) => {

	const saveWithStyles = ({ attributes }) => {
		const SaveComponent = save;
		return withStyles(<SaveComponent {...attributes} />);
	};
	const saveMethod = saveOverride ? saveOverride : saveWithStyles;

	const defaults = {
		supports: {
			html: false,
			customClassName: false,
		},
		edit: connected(edit),
	};

	const opts = Object.assign({}, defaults, rest, {save:saveMethod});

	registerBlockType( blockName , opts);

};

export default setupBlock;
