import Picture from './Picture';

const {
    Component,
} = wp.element;

const {
    BlockControls,
    MediaUploadButton,
} = wp.blocks;

const {
    Dashicon,
    Toolbar,
} = wp.components;

class MediaBlock extends Component {
    render(){
        const { setAttributes, attributes } = this.props;
        const onSelectImage = ( media ) => {
            console.log("media",media);
            const attributes = { src: media.url, alt: media.alt, id: media.id, sizes: media.sizes };
            if ( media.caption ) {
                attributes.caption = [ media.caption ];
            }
            setAttributes( attributes );
        }
        const { src, id } = attributes;
        const controls = (
            focus && (
                <BlockControls key="controls">
                    <Toolbar>
                        <MediaUploadButton
                            buttonProps={ {
                                className: 'components-icon-button components-toolbar__control',
                                'aria-label': 'Upload Image',
                            } }
                            onSelect={ onSelectImage }
                            type="image"
                            value={ id }
                            tooltip="Upload"
                        >
                            <Dashicon icon="edit" />
                        </MediaUploadButton>
                    </Toolbar>
                </BlockControls>
            )
        );
        if(!src){
            return [
                controls,
                <h3>Upload an Image</h3>
            ];
        }

        return [
            controls,
            <Picture src={src} />
        ];

    }
}

export default MediaBlock;
