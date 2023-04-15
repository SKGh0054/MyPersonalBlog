const jwt = require("jsonwebtoken")
const { secretKey } = require("../config/tokenConfig.js")


class CheckoutToken {
    static CheckToken(token) {
        try {
            jwt.verify(token, secretKey)

            return true
        } catch (error) {
            return false
        }
    }
}

module.exports = CheckoutToken