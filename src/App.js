import logo from './logo.svg';
import './App.css';
//import * as node from './providers/nodedata'
import * as web3 from '@solana/web3.js';
import {BufferReader} from './util/buffer_util.js';
import {NodeData} from "./types/nodetype.js";
import bs58 from 'base-58';

async function getnodedata() {
  return 'aqwe';
  // var connection = new web3.Connection(
  //     'http://127.0.0.1:8899',
  //     'confirmed',
  // );
  // const nodedata = await connection.getAccountInfo(
  //     web3.SYSVAR_FNODEDATA_PUBKEY,
  //     'confirmed',
  // );
  // let node_array = decodegrantdatavector(nodedata);
  // return (node_array);
}

function decodegrantdatavector(byteArray) {
  var buffer = new BufferReader(byteArray);
  var node_count = buffer.readUInt64();
  let node_array = Array();
  let rewardaddress,nodetype,totalpaid,state;
  console.log("No Of Nodes: ",Number(node_count));
  for (let i = 0; i < node_count; ++i) {
    rewardaddress = bs58.encode(buffer.readSlice(32));
    nodetype = buffer.readInt8();
    totalpaid = buffer.readUInt64();
    state = buffer.readInt8();
    let node = new NodeData(rewardaddress,nodetype,totalpaid,state);
    node_array.push(node);
  }
  return node_array;
}


function rungetnode() {
  // return 'hhj';
  return getnodedata();
}
function App() {
  // let node_array = Array();
  // let frji = ['ls'];
  // node.getnodedata().then(r => {
  //   node_array = r;
  //   console.log(r);
  //   console.log(node_array);
  // })
  //     .catch(console.log('error'));
 //let data = rungetnode();


//console.log(data);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

export default App;
