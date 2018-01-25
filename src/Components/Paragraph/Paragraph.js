import React from "react";

/**
 * WordPress dependencies
 */
const {
	Editable,
} = wp.blocks;


const Paragraph = ({
	text,
	onChange,
	placeholder,
	focus,
	setFocus,
}) => (
	<Editable
		tagName="p"
		value={ text }
		onChange={ onChange }
		focus={ focus }
		setFocus={ setFocus }
		placeholder={ placeholder || 'Add text' }
	/>
);

export default Paragraph;
