# Sign Message
This repository contains code from Alchemy University for signing messages using the secp256k1 elliptic curve cryptography library and verifying the signature. The code has been adapted for local testing and exploration.

# About
The code provided is originally from Alchemy University, adapted here to facilitate local testing and usage. It offers functionality to sign messages using secp256k1 elliptic curve cryptography and verify the signatures.

# Usage

## Prerequisites
Node.js installed

## Installation
Clone this repository.

## Install dependencies:
```shell
npm install
```
## Running the Code
The repository includes tests using Mocha and Chai to ensure correct functionality. To run the tests:
```shell
npm test
```

# Code Overview

signMessage.js: Contains functionality to sign a message.

hashMessage.js: Provides functionality to hash a message.

test.js: Includes tests to verify the signing and verification process.

# Instructions
Import signMessage and hashMessage functions from their respective files.
Ensure necessary dependencies (@noble/secp256k1, ethereum-cryptography/secp256k1, and ethereum-cryptography/utils) are installed.
Define the PRIVATE_KEY variable with the private key for signing.
Run tests using npm test to verify the signing and verification process.

# Contributing
Contributions are welcome! Feel free to open issues or pull requests for any improvements or fixes.

# License
This project is licensed under the MIT License.

```shell
npm install
npm test
```
