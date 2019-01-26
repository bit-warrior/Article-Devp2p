const KBucket = require('k-bucket')
const chalk = require('chalk');

const node = new KBucket({
    localNodeId: Buffer.alloc(1,0)
})

// For loop can be used , i am doing it one at a time just for demonstration
// simulate peer with one Byte id
const peer1 = new Uint8Array([1]) 
const peer2 = new Uint8Array([2])
const peer3 = new Uint8Array([3])
const peer4 = new Uint8Array([4])
const peer5 = new Uint8Array([5])
const peer6 = new Uint8Array([6])
const peer7 = new Uint8Array([7])

// Add all the peers to KDT 
node.add({"id":peer1})
node.add({"id":peer2})
node.add({"id":peer3})
node.add({"id":peer4})
node.add({"id":peer5})
node.add({"id":peer6})
node.add({"id":peer7})

let findClosetNodeOf=4  // being asked to find closet peer to node 4

for (i = 1; i < 7; i++) {
   let distance=findClosetNodeOf^i
   console.log(chalk.yellow("XOR Distance of ")+findClosetNodeOf+" "+"("+ ("0000"+findClosetNodeOf.toString(2)).substr(-8) +")" + chalk.red(" from  ")+i+"("+("00000000"+i.toString(2)).substr(-8) +")"+chalk.magenta(" is ")+distance+"("+("00000000"+distance.toString(2)).substr(-8) +")") 
   
  } 
console.log(chalk.yellow("LIST OF CLOSEST PEERS NEAR PEER WITH ID::")+ findClosetNodeOf)
console.log(node.closest(new Uint8Array([findClosetNodeOf]),5))