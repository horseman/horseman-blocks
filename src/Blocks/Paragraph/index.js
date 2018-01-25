import setupBlock from '../../helpers/setupBlock';
import Edit from './Edit';
import Paragraph from './Paragraph';

setupBlock({
	blockName:'horseman/paragraph',
	title: 'Horseman Paragraph',
	description: 'Horseman compatible paragraph block' ,
	icon: 'archive',
	category: 'common',
	keywords: [ 'section' ],
	attributes: {
		text: {
			type: 'array',
		},
	},
	edit: Edit,
	save: Paragraph,
} );
