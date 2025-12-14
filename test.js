const getAddress = require("./getAddress")
const { assert } = require("chai")

const PRIVATE_KEY = "0x+ your's private key from your wallet"
const Expected_Address = "Address of the wallet"

describe("get address", () => {
  it("should get the address from the private key", () => {
    const result = getAddress(PRIVATE_KEY)
    const address = result.address

    assert.equal(address.toLowerCase(), Expected_Address.toLowerCase())
  })
})
