/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

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
	title: __( 'Horseman Post' ),
	description: __( 'Picks a single post title' ),
	icon: 'list-view',
	category: 'widgets',
	keywords: [ __( 'posts' ) ],
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
