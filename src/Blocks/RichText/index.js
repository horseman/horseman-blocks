const {
	registerBlockType,
	Editable,
	BlockControls,
	AlignmentToolbar,
	source
} = wp.blocks;

import Post from './block';

registerBlockType( 'horseman/paragraph', {
	title: 'paragraph',
	description: 'Allows a single paragraph' ,
	icon: 'paragraph',
	category: 'widgets',
	keywords: [ 'paragraph' ],
	supports: {
		html: false,
	},
	attributes: {
		content: {
			type: 'text',
		},
	},
	edit: Post,
	save() {
		return null;
	},
} );
