const {
	registerBlockType,
	Editable,
	BlockControls,
	AlignmentToolbar,
	source
} = wp.blocks;

import Block from './block';

registerBlockType( 'horseman/mediablock', {
	title: 'Media Block',
	description: 'Combines a text column with a media block' ,
	icon: 'format-image',
	category: 'common',
	keywords: [ 'posts' ],
	supports: {
		html: false,
	},
	attributes: {
		id: {
			type: 'number',
		},
		src: {
			type: 'string',
		},
		alt: {
			type: 'string',
		},
		sizes: {
			type: 'object',
		},
		content: {
			type: 'string',
		},
	},
	edit: Block,
	save() {
		return null;
	},
} );
