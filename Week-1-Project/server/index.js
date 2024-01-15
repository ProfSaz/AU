const express = require("express");
const app = express();
const cors = require("cors");
const port = 3042;

app.use(cors());
app.use(express.json());

const balances = {
  "04933f11f9080edefb426faf8d2f1bf0cdc97d0f7d4c73f64ee5e8cd0124ec9679de2aa9ce4ebacebad6d3c1ecfed17c97cf0b106c9d30f7dd9c821252fbc9a0d4": 100,
  "04b07614389161f73b2b0fcbdb9bb430ec92f98a513bba2c356f57878f23c00405eeab7a46523d98eaa1a66c2141986702a3d731457bd072098d6379cee8c973bd": 50,
  "049a760ca4c851ac00d46007cd454a386d79582bda847f1da0b0060e68d2e1c3c3b5ede6c010e146caa92311bfb122dd8ab039d988b9a2af91e2b11b71aed0188d": 75,
};

app.get("/balance/:address", (req, res) => {
  const { address } = req.params;
  const balance = balances[address] || 0;
  res.send({ balance });
});

app.post("/send", (req, res) => {
  const { sender, recipient, amount } = req.body;

  setInitialBalance(sender);
  setInitialBalance(recipient);

  

  if (balances[sender] < amount) {
    res.status(400).send({ message: "Not enough funds!" });
  } else {
    balances[sender] -= amount;
    balances[recipient] += amount;
    res.send({ balance: balances[sender] });
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
});

function setInitialBalance(address) {
  if (!balances[address]) {
    balances[address] = 0;
  }
}


  // if(!signature) res.status(404).send({ message: "signature dont was provide" });
  // if(!recovery) res.status(400).send({ message: "recovery dont was provide" });

  // try {
    
  //   const bytes = utf8ToBytes(JSON.stringify({ sender, recipient, amount }));
  //   const hash = keccak256(bytes);

  //   const sig = new Uint8Array(signature);

  //   const publicKey = await secp.recoverPublicKey(hash, sig, recovery);

  //   if(toHex(publicKey) !== sender){
  //     res.status(400).send({ message: "signature no is valid" });
  //   }