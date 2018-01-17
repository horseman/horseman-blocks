/**
 * Internal dependencies
 */
const {
	registerBlockType,
	Editable,
	BlockControls,
	AlignmentToolbar,
	source
} = wp.blocks;

import Post from './block';

registerBlockType( 'horseman/post', {
	title: 'Horseman Post',
	description: 'Picks a single post title' ,
	icon: 'list-view',
	category: 'widgets',
	keywords: [ 'posts' ],
	supports: {
		html: false,
	},
	attributes: {
		postId: {
			type: 'number',
		},
	},
	edit: Post,
	save() {
		return null;
	},
} );
