import React from 'react';
import * as RJD from '../../../../lib/main';
import { ImageNodeModel } from './ImageNodeModel';

export class ImageNodeWidget extends React.Component {
  static defaultProps = {
    node: null,
    color: 'rgb(224, 98, 20)'
  };

  onRemove() {
    const { node, diagramEngine } = this.props;
    node.remove();
    diagramEngine.forceUpdate();
  }

  getInPort() {
    const { node, color, displayOnly } = this.props;
    let inputNode = node;

    if (displayOnly) {
      inputNode = new ImageNodeModel(node.name, color);
    }

    return inputNode.getInPort ? <RJD.DefaultPortLabel model={inputNode.getInPort()} key='in-port' /> : null;
  }

  getOutPort() {
    const { node, color, displayOnly } = this.props;
    let outputNode = node;

    if (displayOnly) {
      outputNode = new ImageNodeModel(node.name, color);
    }

    return outputNode.getOutPort ? <RJD.DefaultPortLabel model={outputNode.getOutPort()} key='out-port' /> : null;
  }

  render() {
    const { node, displayOnly} = this.props;
    const { name, color } = node;

    if (name === "Text node") {
      return (
          <div style={{ color: "white", textAlign: "center" }}>
              {!displayOnly ? (
                  <div className="basic-node">
                    <div style={{textAlign: 'right'}}>
                      <div className='fa fa-close close' onClick={this.onRemove.bind(this)} />
                    </div>
                    <div className="ports">
                        <div className="in">{this.getInPort()}</div>
                        <input className="text-input" type="text" placeholder="Some text" />
                        <div className="out">{this.getOutPort()}</div>
                    </div>
                  </div>
              ) : (
                <div className="shadow">
                  <h1>Text</h1>
                </div>
              )}
          </div>
      );
    } else {
      let { src, alt } = node.content.image;

      return (
          <div className="basic-node" style={{ margin: 'auto'}}>
                {!displayOnly ? (
                  <div style={{ textAlign: 'right'}}>
                    <div
                        className="fa fa-close close"
                        onClick={this.onRemove.bind(this)}
                    />
                  </div>
                ) : null}
              <div className="ports">
                  <div className={`in ${displayOnly? 'none' : '' } `}>{this.getInPort()}</div>
                  <img src={require(`../../../images/${src}`).default} alt={alt} style={{ width: 100, margin: 'auto'}}/>
                  <div className={`out ${displayOnly? 'none' : '' } `}>{this.getOutPort()}</div>
              </div>
              <div className="title" style={{ textAlign: 'center'}}>
                <h2 style={{ margin: 'auto' }}>{alt}</h2>
              </div>
          </div>
      );
    }

  }
}

export const ImageNodeWidgetFactory = React.createFactory(ImageNodeWidget);
