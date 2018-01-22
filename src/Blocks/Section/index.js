const {
	registerBlockType,
	InnerBlocks,
} = wp.blocks;

import Block from './block';

registerBlockType( 'horseman/section', {
	title: 'Section',
	description: 'Wrapper around grouped components' ,
	icon: 'archive',
	category: 'common',
	keywords: [ 'section' ],
	supports: {
		html: false,
	},
	edit: Block,
	attributes: {
		id: {
			type: 'number',
		},
		padding: {
			type: 'string',
		},
		width: {
			type: 'string',
		},
	},
	save({ attributes }) {
		return (
			<div>
				<InnerBlocks.Content />
			</div>
		);
	},
} );
