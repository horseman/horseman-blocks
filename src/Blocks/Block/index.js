import setupBlock from '../../helpers/setupBlock';
import Edit from './Edit';
import Section from "./Section";

setupBlock({
	blockName:'horseman/block',
	title: 'Block',
	description: 'Wrapper around grouped components' ,
	icon: 'archive',
	category: 'common',
	keywords: [ 'section' ],
	attributes: {
		background: {
			type: 'string',
		},
	},
	edit: Edit,
	save: Section,
} );
