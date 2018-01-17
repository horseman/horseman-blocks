// import React from "react";
const {
	withAPIData,
} = wp.components;

const Post = ( { post } ) => {
	if ( typeof post.data === 'undefined' ) {
		return <div>Loading...</div>;
	}
	return (
		<div>
			<h1>{ post.data.title.rendered }</h1>
			<div>Basic: { post.data.acf.basic }</div>
			<div>Number: { post.data.acf.number }</div>
		</div>
	);
};

const LoadPost = ( { postId } ) => ( {
	post: `/wp/v2/posts/${ postId }`,
} );

export default withAPIData( LoadPost )( Post );
