import React from "react";

const { Editable, createBlock } = wp.blocks;


const Edit = ({
	id,
	setAttributes,
	attributes,
	saveStyles,
	insertBlocksAfter,
	setFocus,
	focus
}) => {

	const { text } = attributes;

	const onChange = ( text ) => {
		console.log("onchange", text);
		setAttributes({ text });
	};

	return (
		<Editable
			tagName="p"
			value={ text }
			onChange={ onChange }
			focus={ focus }
			onFocus={ setFocus }
			onSplit={ insertBlocksAfter ?
					( before, after, ...blocks ) => {
						setAttributes( { text: before } );
						insertBlocksAfter( [
							...blocks,
							createBlock( 'horseman/paragraph', { text: after } ),
						] );
					} :
					undefined
			}
		/>
	);

};

export default Edit;
