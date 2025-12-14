const getAddress = require("./getAddress")

const PRIVATE_KEY =
  "0x41c76b2c2d50ca836397920811c8903192e9d226045f40813512b563d14a0a81"

const result = getAddress(PRIVATE_KEY)

console.log("--- Key Derivation Output ---")
console.log("Private Key: ", result.privateKey)
console.log("Public Key:  ", result.publicKey)
console.log("Address:     ", result.address)
console.log("-----------------------------")
