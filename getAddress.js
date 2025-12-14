// get started

// using ethereumjs.util
const ethereumUtil = require("ethereumjs-util")

function getAddress(privateKey) {
  const privateKeyBuffer = ethereumUtil.toBuffer(privateKey)
  const publicKeyBuffer = ethereumUtil.privateToPublic(privateKeyBuffer)
  const addressBuffer = ethereumUtil.pubToAddress(publicKeyBuffer) // Fixed: Using publicKeyBuffer

  const address = ethereumUtil.bufferToHex(addressBuffer)

  return {
    privateKey: privateKey,
    publicKey: publicKeyBuffer.toString("hex"),
    address: address,
  }
}
module.exports = getAddress
