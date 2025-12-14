🔐 Project Title: Ethereum Key Derivation Utility
A simple, educational Node.js module for deriving an Ethereum Public Key and Address from a given Private Key. This project demonstrates the core cryptographic principles behind Ethereum wallet key generation using the industry-standard ethereumjs-util library.

✨ Features
Ethereum Key Derivation: Correctly calculates the Public Key and Address from a Private Key.
Module System: Uses the stable CommonJS module system (require/module.exports), achieved by removing "type": "module" from package.json.
Verification: Includes a passing Jest test suite to validate cryptographic outputs against known values.
Dependencies: Built with ethereumjs-util (for crypto), chai (for assertions), and jest (for testing).

🚀 Getting Started
To run this project, you need Node.js installed on your system.

1. Installation
   Clone the repository and install the dependencies:

# Clone the repository

git clone https://github.com/kathait-sarthak/get-eth-address.git

cd get-eth-address

# Install all dependencies

[npm install]

2. Running the Tests
Run the included unit test to verify the key derivation logic.

Run-[npm test]

Expected Output (Success): The output confirms that the calculated address matches the expected address.
PASS ./test.js
get address
✓ should get the address from the private key (4 ms)
Test Suites: 1 passed, 1 total
Tests: 1 passed, 1 total

💡 Core Concepts and Logic Explained
The getAddress.js file implements the core logic that every Ethereum wallet follows. The process is a one-way street, ensuring security.
Private Key (The Secret): A 32-byte (256-bit) random number.

Test Private Key: 0x..............................0
Public Key Derivation: The private key is used in an Elliptic Curve Cryptography (ECC) operation (secp256k1) to derive the Public Key.(This step is one-way)

Address Derivation: The Public Key is hashed using the Keccak-256 algorithm. The final 20 bytes of the hash become the Ethereum Address.
Expected Address: 0x.......................E0
