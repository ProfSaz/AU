# HashMessage (Alchemy University)

The first step in ECDSA is to hash the message before applying the signature algorithm.

The Hashmessage.js defines a function 'hashMessage' that converts a string to a deterministichash. The test.js compares the hash of "hello world" using the hashMessage function from hashMessage.js to the already known keccak256 standard hello world hash. Using Mocha and Chai testing framework, and checks if the function returns the expected hash for the "hello world" input.


```shell
npm install
npm test
```
