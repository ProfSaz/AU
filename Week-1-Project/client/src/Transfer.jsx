import { useState } from "react";
import server from "./server";

function Transfer({ address, setBalance }) {
  const [sendAmount, setSendAmount] = useState("");
  const [recipient, setRecipient] = useState("");

  const setValue = (setter) => (evt) => setter(evt.target.value);

  async function transfer(evt) {
    evt.preventDefault();

    const data = { sender: address, recipient, amount: parseInt(sendAmount)};
    const bytes = utf8ToBytes(JSON.stringify(data));
    const hash = keccak256(bytes);
    
    const signature = await secp.sign(hash, privateKey, { recovered: true });
  
    console.log(signature[0])
    var sig = Array.from(signature[0]);

    try {
      const {
        data: { balance },
      } = await server.post(`send`, {...data, signature: sig, recovery: signature[1]
      });
      setBalance(balance);
    } catch (ex) {
      alert(ex.response.data.message);
    }
  }

  return (
    <form className="container transfer" onSubmit={transfer}>
      <h1>Send Transaction</h1>

      <label>
        Send Amount
        <input
          placeholder="1, 2, 3..."
          value={sendAmount}
          onChange={setValue(setSendAmount)}
        ></input>
      </label>

      <label>
        Recipient
        <input
          placeholder="Type an address, for example: 0x2"
          value={recipient}
          onChange={setValue(setRecipient)}
        ></input>
      </label>

      <input type="submit" className="button" value="Transfer" />
    </form>
  );
  // const data = { sender: address, recipient, amount: parseInt(sendAmount)};
  // const bytes = utf8ToBytes(JSON.stringify(data));
  // const hash = keccak256(bytes);
  
  // const signature = await secp.sign(hash, privateKey, { recovered: true });

  // console.log(signature[0])
  // var sig = Array.from(signature[0])


  // try {
  //   const {
  //     data: { balance },
  //   } = await server.post(`send`, {...data, signature: sig, recovery: signature[1]});


}

export default Transfer;
