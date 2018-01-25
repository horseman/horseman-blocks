/**
 * WordPress dependencies
 */
const { DropZone, FormFileUpload, Placeholder, Button } = wp.components;
const { mediaUpload } = wp.utils;
const { rawHandler, MediaUpload } = wp.blocks;
const { __ } = wp.i18n;


/**
 *  ImagePlaceHolder is a react component used by blocks containing user configurable images e.g: image and cover image.
 *
 * @param   {Object} props  React props passed to the component.
 *
 * @returns {Object} Rendered placeholder.
 */
export default function ImagePlaceHolder( { className, icon, label, onSelectImage } ) {
	const setImage = ( [ image ] ) => onSelectImage( image );
	const onFilesDrop = ( files ) => mediaUpload( files, setImage );
	const onHTMLDrop = ( HTML ) => setImage( map(
		rawHandler( { HTML, mode: 'BLOCKS' } )
			.filter( ( { name } ) => name === 'core/image' ),
		'attributes'
	) );
	const uploadFromFiles = ( event ) => mediaUpload( event.target.files, setImage );
	return (
		<Placeholder
			className={ className }
			instructions={ __( 'Drag image here or add from media library' ) }
			icon={ icon }
			label={ label } >
			<DropZone
				onFilesDrop={ onFilesDrop }
				onHTMLDrop={ onHTMLDrop }
			/>
			<FormFileUpload
				isLarge
				className="wp-block-image__upload-button"
				onChange={ uploadFromFiles }
				accept="image/*"
			>
				{ __( 'Upload' ) }
			</FormFileUpload>
			<MediaUpload
				onSelect={ onSelectImage }
				type="image"
				render={ ( { open } ) => (
					<Button isLarge onClick={ open }>
						{ __( 'Add from Media Library' ) }
					</Button>
				) }
			/>
		</Placeholder>
	);
}
