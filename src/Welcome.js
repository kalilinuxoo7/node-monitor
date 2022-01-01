import * as React from "react";
import * as node from './providers/nodedata';
import {NodeData} from "./types/nodetype";

class Welcome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nodedata: [{
                RewardAddress: "RewardAddress",
                NodeType: "NodeType",
                TotalPaid: "TotalPaid",
                state: "state",
            }]
        };
        //this.getnode = this.getnode.bind(this);
    }
    async componentDidMount() {
        let nodedata = await node.getnodedata();
        this.setState({nodedata :
                nodedata})
    }
    async fetch() {
        var context = this;
        let nodedata = await node.getnodedata();
        console.log(nodedata);
        context.setState({
            nodedata:
                nodedata
        })
    }
    render() {
        return (
            <div>

                <ol>
                    {this.state.nodedata.map((node,index) => {
                        return <li key={index}> {node.RewardAddress} {node.NodeType} {node.TotalPaid} {node.state} </li>
                    })}
                </ol>

            <button
                onClick={this.fetch.bind(this)}
            >
                Fetch Latest
            </button>

        </div>
    );
    }
}

export default Welcome;

// this.state.nodedata.map((node)=>{
//     <h2> Node </h2>
//     <h2>RewardAddress {node.RewardAddress}</h2>
// <h2>NodeType: {this.state.nodedata.NodeType}</h2>
// <h2>TotalPaid: {this.state.nodedata.TotalPaid}</h2>
// <h2>state: {this.state.nodedata.state}</h2>
// <hr/>
// })