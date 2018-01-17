import { Component } from '@wordpress/element';
import { withAPIData } from '@wordpress/components';
import styled from 'styled-components';

import Post from "./post";

const {
    InspectorControls,
    SelectControl
} = wp.blocks;

const Section = styled.div`
	padding: 2em;
	background: #dfdfdf;
`;

class PostControl extends Component {

	render(){
		const { setAttributes, attributes, posts } = this.props;
		const { postId } = attributes;
		if ( typeof posts.data === 'undefined') {
			return <div>Loading...</div>;
		}
		const options = posts.data.map(
			post => ( {
				label: post.title.rendered,
				value: post.id,
				selected: postId == post.id,
			} )
		);
		console.log("options", options);
		console.log("postId", postId);
		options.unshift({label: "Select a Post", value: null});

		return [
			focus && (<InspectorControls key="inspector">
				<Section>
					<SelectControl
						label="Pick a Post"
						onChange={ postId => setAttributes( { postId: parseInt(postId, 10) } ) }
						options={ options }
					/>
				</Section>
				</InspectorControls>),
			<Post postId={postId} />
		];
	}
}

const LoadData = ( ) => ( {
	posts: '/wp/v2/posts',
} );

export default withAPIData( LoadData )( PostControl );
