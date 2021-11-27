import React from 'react';
import Node from './Node';

class NodesPanel extends React.Component {
    render() {
        return (
            <div className="panel-wrapper">
                <div className="nodes-panel">
                    <div className="node-wrapper" style={{ marginBottom: 15}}>
                        <Node type="textnode" color="rgb(238, 238, 238)" />
                    </div>
                    <hr />
                    <div className="node-wrapper">
                        <Node type="imagenode" color="rgb(238, 238, 238)" displayName="RDS" image="RDS.png"/>
                    </div>
                    <div className="node-wrapper">
                        <Node type="imagenode" color="rgb(238, 238, 238)" displayName="EC2" image="EC2.png" />
                    </div>
                    <div className="node-wrapper">
                        <Node type="imagenode" color="rgb(238, 238, 238)" displayName="Elastic Load Balancing" image="ELASTIC.svg" />
                    </div>
                    {/* Other nodes */}
                </div>
            </div>
        );
    }
}

export default NodesPanel;