/**
 * NodeData Type
 */
export class NodeData {
    RewardAddress: string;
    NodeType: string;
    TotalPaid: string;
    state: string;
    constructor(rewardaddress, nodetype, totalpaid, state){
        this.RewardAddress = rewardaddress;
        this.NodeType = nodetype;
        this.TotalPaid = totalpaid;
        this.state = state;
    }
}