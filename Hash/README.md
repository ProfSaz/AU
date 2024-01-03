# Brute Force Hashing (Alchemy University)

Cryptographic Hash Functions like SHA256 are one-way functions. This means that if you have the input, it's relatively trivial to find the output. On the other hand, if you have the output, it is infeasible to find the input.

However, if you knew the hashes of some common inputs, then you could brute-force guess at the output or create a Rainbow Table to determine what that input is.
This project has contracts with access control mechanism

The index.js defines a function 'findColor' that finds a color based on a hash. The test.js tests the functionality of findColor using a testing framework and checks if the function returns the expected color for each input.


```shell
npm install
npm test
```
