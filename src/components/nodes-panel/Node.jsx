import React from 'react';
import DragWrapper from './DragWrapper';
import { ImageNodeWidget } from '../nodes/imagenode/ImageNodeWidget';

class Node extends React.Component {
    renderNode() {
        const { type, displayName, image } = this.props;

        if (type === 'imagenode') {
            return <ImageNodeWidget node={{ name: 'Image node', content: {image: { src: image, alt: displayName }} }} displayOnly/>;
        }

        if (type == 'textnode') {
             return <ImageNodeWidget node={{ name: 'Text node' }}  displayOnly/>;
        }
        
        console.warn('Unknown node type');

        return null;
    }

    render() {
        const { type } = this.props;

        return (
            <DragWrapper type={type} style={{ display: 'inline-block', width: "100%", background: 'transparent' }}>
                {this.renderNode()}
            </DragWrapper>
        );
    }
}

export default Node;